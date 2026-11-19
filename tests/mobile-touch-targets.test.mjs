/**
 * RIC-180: Mobile touch-target regression (standalone; not run by npm validate).
 * Run with the repository's Node 24, a production build and local Chromium.
 * Chrome CDP uses private inherited pipes, not a listening debug port.
 */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import net from "node:net";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const commandTimeout = 8_000;
const startupTimeout = 15_000;

async function availablePort() {
  const server = net.createServer();
  try {
    await new Promise((resolve, reject) => {
      server.once("error", reject);
      server.listen(0, "127.0.0.1", resolve);
    });
    return server.address().port;
  } finally {
    if (server.listening) {
      await new Promise((resolve) => server.close(resolve));
    }
  }
}

function chromeExecutable() {
  if (process.env.CHROME_BIN) {
    assert.ok(existsSync(process.env.CHROME_BIN), "CHROME_BIN does not exist");
    return process.env.CHROME_BIN;
  }
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  const executable = candidates.find(existsSync);
  assert.ok(executable, "Install local Chromium or set CHROME_BIN");
  return executable;
}

// A private POSIX process group per task-owned child permits descendant cleanup.
function startOwned(command, args, stdio) {
  const child = spawn(command, args, { cwd: root, detached: true, stdio });
  const state = { child, error: null, ended: false };
  child.on("error", (error) => {
    state.error = error;
    state.ended = true;
  });
  child.on("exit", () => {
    state.ended = true;
  });
  return state;
}

function alive(state) {
  if (state.error) throw state.error;
  assert.ok(!state.ended, `Task process exited: ${state.child.spawnfile}`);
}

function signalGroup(state, signal) {
  if (!state?.child.pid) return false;
  try {
    process.kill(-state.child.pid, signal);
    return true;
  } catch (error) {
    if (error.code === "ESRCH") return false;
    throw error;
  }
}

async function stopOwned(state) {
  if (!signalGroup(state, "SIGTERM")) return;
  const deadline = Date.now() + 2_000;
  while (Date.now() < deadline) {
    if (!signalGroup(state, 0)) return;
    await delay(50);
  }
  signalGroup(state, "SIGKILL");
  const killDeadline = Date.now() + 2_000;
  while (Date.now() < killDeadline) {
    if (!signalGroup(state, 0)) return;
    await delay(50);
  }
  // An exited leader can leave transient zombie descendants; no live child
  // should remain after SIGKILL, but a surviving group must be reported.
  assert.ok(!signalGroup(state, 0), "Task process group did not disappear");
}

async function poll(label, check, timeout = startupTimeout) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await check()) return;
    await delay(50);
  }
  throw new Error(`Timed out: ${label}`);
}

async function status(url) {
  const response = await fetch(url, {
    redirect: "manual",
    signal: AbortSignal.timeout(1_500),
  });
  const code = response.status;
  await response.body?.cancel();
  return code;
}

// Chromium's --remote-debugging-pipe reads NUL-delimited JSON on fd 3
// and writes responses on fd 4. No WebSocket or remote-origin flags needed.
class CDP {
  constructor(child) {
    this.input = child.stdio[3];
    this.output = child.stdio[4];
    this.pending = new Map();
    this.nextId = 1;
    this.buffer = "";
    this.closed = false;
    this.output.setEncoding("utf8");
    this.output.on("data", (chunk) => {
      this.buffer += chunk;
      let end;
      while ((end = this.buffer.indexOf("\0")) !== -1) {
        const raw = this.buffer.slice(0, end);
        this.buffer = this.buffer.slice(end + 1);
        if (!raw) continue;
        let message;
        try {
          message = JSON.parse(raw);
        } catch (error) {
          this.fail(error);
          return;
        }
        const entry = this.pending.get(message.id);
        if (!entry) continue; // events are not command responses
        this.pending.delete(message.id);
        clearTimeout(entry.timer);
        if (message.error)
          entry.reject(new Error(JSON.stringify(message.error)));
        else entry.resolve(message.result);
      }
    });
    this.input.on("error", (error) => this.fail(error));
    this.output.on("error", (error) => this.fail(error));
    this.output.on("end", () => this.fail(new Error("CDP pipe ended")));
    child.on("exit", () => this.fail(new Error("Chrome exited")));
  }

  fail(error) {
    this.closed = true;
    for (const entry of this.pending.values()) {
      clearTimeout(entry.timer);
      entry.reject(error);
    }
    this.pending.clear();
  }

  send(method, params = {}, sessionId) {
    assert.ok(!this.closed, "CDP pipe is closed");
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP timeout: ${method}`));
      }, commandTimeout);
      this.pending.set(id, { resolve, reject, timer });
      const message = { id, method, params };
      if (sessionId) message.sessionId = sessionId;
      this.input.write(`${JSON.stringify(message)}\0`, (error) => {
        if (error) this.fail(error);
      });
    });
  }

  async evaluate(sessionId, expression) {
    const result = await this.send(
      "Runtime.evaluate",
      { expression, returnByValue: true, awaitPromise: true },
      sessionId,
    );
    assert.ok(
      !result.exceptionDetails,
      JSON.stringify(result.exceptionDetails),
    );
    return result.result?.value;
  }

  close() {
    this.fail(new Error("CDP closed by test"));
    this.input.destroy();
    this.output.destroy();
  }
}

async function navigate(cdp, session, origin, path, width) {
  const url = `${origin}${path}`;
  assert.equal(await status(url), 200, `Unexpected HTTP status: ${path}`);
  const navigation = await cdp.send("Page.navigate", { url }, session);
  assert.ok(!navigation.errorText, navigation.errorText);
  await poll(`document ready ${path} at ${width}px`, async () => {
    try {
      return await cdp.evaluate(
        session,
        `location.href === ${JSON.stringify(url)} &&
         document.readyState === "complete" && document.fonts.status === "loaded"`,
      );
    } catch (error) {
      if (
        /execution context was destroyed|cannot find context|inspected target navigated/i.test(
          error.message,
        )
      )
        return false;
      throw error;
    }
  });
}

async function assertNoOverflow(cdp, session, path, width) {
  const geometry = await cdp.evaluate(
    session,
    `({ windowWidth: window.innerWidth,
        viewport: document.documentElement.clientWidth,
        document: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) })`,
  );
  assert.equal(geometry.windowWidth, width, `Wrong viewport: ${path}`);
  assert.ok(
    geometry.document <= geometry.viewport,
    `Overflow: ${path} at ${width}px: ${JSON.stringify(geometry)}`,
  );
}

// Scroll each anchor into view, then sample its interior with elementFromPoint.
// No clicks, external navigation, or account data are needed.
async function assertTargets(
  cdp,
  session,
  selector,
  count,
  minWidth,
  minHeight,
  label,
) {
  const length = await cdp.evaluate(
    session,
    `document.querySelectorAll(${JSON.stringify(selector)}).length`,
  );
  if (count === null) assert.ok(length > 0, `${label}: no targets`);
  else assert.equal(length, count, `${label}: unexpected target count`);
  for (let index = 0; index < length; index++) {
    const data = await cdp.evaluate(
      session,
      `(async () => {
      const el = document.querySelectorAll(${JSON.stringify(selector)})[${index}];
      if (!el) return null;
      el.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const r = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      const hit = [0.25, 0.5, 0.75].every(fraction => {
        const x = r.left + r.width / 2;
        const y = r.top + r.height * fraction;
        const top = document.elementFromPoint(x, y);
        return top === el || (top !== null && el.contains(top));
      });
      return { width: r.width, height: r.height, text: el.textContent.trim(),
        visible: el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true }),
        actionable: el.tagName === "A" && el.hasAttribute("href") &&
          style.pointerEvents !== "none" && !el.closest("[inert]"), hit };
    })()`,
    );
    assert.ok(data, `${label}: missing target ${index}`);
    const context = `${label}: ${data.text} ${JSON.stringify(data)}`;
    assert.ok(data.visible && data.actionable && data.hit, context);
    assert.ok(data.width >= minWidth && data.height >= minHeight, context);
  }
}

test(
  "RIC-180 mobile touch targets and viewport regression",
  { timeout: 180_000 },
  async () => {
    assert.ok(
      ["darwin", "linux"].includes(process.platform),
      "Requires macOS or Linux",
    );
    assert.ok(
      existsSync(join(root, ".next", "BUILD_ID")),
      "Run npm run build first",
    );
    const executable = chromeExecutable();
    const profile = await mkdtemp(join(tmpdir(), "ric180-chrome-"));
    let server, chrome, cdp;
    const cleanupErrors = [];
    let failure;
    try {
      const port = await availablePort();
      const origin = `http://127.0.0.1:${port}`;
      server = startOwned(
        process.execPath,
        [
          "node_modules/next/dist/bin/next",
          "start",
          "-p",
          String(port),
          "-H",
          "127.0.0.1",
        ],
        ["ignore", "ignore", "ignore"],
      );
      await poll("Next production server", async () => {
        alive(server);
        try {
          return (await status(`${origin}/`)) === 200;
        } catch {
          return false;
        }
      });
      alive(server);
      chrome = startOwned(
        executable,
        [
          "--headless=new",
          "--remote-debugging-pipe",
          `--user-data-dir=${profile}`,
          "--no-first-run",
          "--no-default-browser-check",
          "--disable-gpu",
          "about:blank",
        ],
        ["ignore", "ignore", "ignore", "pipe", "pipe"],
      );
      cdp = new CDP(chrome.child);
      const { targetId } = await cdp.send("Target.createTarget", {
        url: "about:blank",
      });
      const { sessionId: session } = await cdp.send("Target.attachToTarget", {
        targetId,
        flatten: true,
      });
      await cdp.send("Page.enable", {}, session);
      await cdp.send("Runtime.enable", {}, session);
      for (const width of [320, 375, 390, 412]) {
        await cdp.send(
          "Emulation.setDeviceMetricsOverride",
          { width, height: 844, deviceScaleFactor: 2, mobile: true },
          session,
        );
        await cdp.send(
          "Emulation.setTouchEmulationEnabled",
          { enabled: true },
          session,
        );
        await navigate(cdp, session, origin, "/projects", width);
        await assertNoOverflow(cdp, session, "/projects", width);
        await assertTargets(
          cdp,
          session,
          ".project-card__footer a",
          9,
          44,
          44,
          `/projects ${width}px`,
        );
        await assertTargets(
          cdp,
          session,
          ".footer-bottom nav a",
          null,
          44,
          44,
          `/projects footer ${width}px`,
        );
        await navigate(cdp, session, origin, "/", width);
        await assertNoOverflow(cdp, session, "/", width);
        await assertTargets(
          cdp,
          session,
          ".re-card-link",
          4,
          44,
          44,
          `home dossier ${width}px`,
        );
        await assertTargets(
          cdp,
          session,
          ".text-link",
          null,
          1,
          44,
          `home action ${width}px`,
        );
        await assertTargets(
          cdp,
          session,
          ".world-selector a",
          2,
          24,
          24,
          `world selector ${width}px`,
        );
        await assertTargets(
          cdp,
          session,
          ".footer-bottom nav a",
          null,
          44,
          44,
          `home footer ${width}px`,
        );
        console.log(`PASS / and /projects at ${width}px`);
      }
      await cdp.send(
        "Emulation.setDeviceMetricsOverride",
        { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false },
        session,
      );
      await cdp.send(
        "Emulation.setTouchEmulationEnabled",
        { enabled: false },
        session,
      );
      await navigate(cdp, session, origin, "/projects", 1440);
      await assertNoOverflow(cdp, session, "/projects", 1440);
      const desktop = await cdp.evaluate(
        session,
        `Array.from(document.querySelectorAll(".project-card__footer a"), el => el.getBoundingClientRect().height)`,
      );
      assert.equal(desktop.length, 9);
      assert.ok(
        desktop.every((height) => height > 0 && height < 30),
        `Desktop targets changed: ${desktop}`,
      );
      console.log("PASS desktop compact project links");
    } catch (error) {
      failure = error;
    } finally {
      if (cdp && !cdp.closed) {
        // Prefer graceful browser shutdown; group cleanup is the fallback.
        try {
          await cdp.send("Browser.close");
        } catch {
          // Browser.close may close the pipe before its acknowledgement.
        }
      }
      cdp?.close();
      for (const process of [chrome, server]) {
        try {
          await stopOwned(process);
        } catch (error) {
          cleanupErrors.push(error);
        }
      }
      // Do not delete a profile if Chrome cleanup could not be established.
      if (cleanupErrors.length === 0)
        await rm(profile, { recursive: true, force: true });
      else
        throw new AggregateError(
          failure ? [failure, ...cleanupErrors] : cleanupErrors,
          "Task cleanup failed; profile preserved",
        );
    }
    if (failure) throw failure;
  },
);
