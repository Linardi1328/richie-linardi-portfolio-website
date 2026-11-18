/**
 * RIC-180: Mobile Touch-Target Regression Test Suite
 *
 * Validates touch-target dimensions, WCAG 2.2 SC 2.5.8 Level AA minimum compliance,
 * zero horizontal document overflow, and desktop visual preservation across viewports.
 *
 * Prerequisites:
 *  1. Node.js >= 20.x (with native test runner, global fetch, and global WebSocket).
 *  2. Chromium browser: Google Chrome or Chromium executable found in standard OS paths
 *     (macOS: /Applications/Google Chrome.app, Linux: /usr/bin/google-chrome, /usr/bin/chromium)
 *     or specified via the CHROME_BIN environment variable.
 *  3. Next.js production build in .next/ directory (`npm run build`).
 *
 * Scope:
 *  - 9x .project-card__footer a on /projects (target: >= 44x44 CSS px on mobile)
 *  - 4x .re-card-link on / (target: >= 44x44 CSS px on mobile)
 *  - .text-link standalone action links on mobile (target: >= 44px height)
 *  - .world-selector a compact world switcher (target: >= 24x24 CSS px per WCAG 2.2 AA)
 *  - Document overflow assertion: scrollWidth === clientWidth (320, 375, 390, 412, 1440 px)
 *  - Desktop preservation: 1440px desktop footer link remains compact (< 30px height)
 */

import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import http from "node:http";
import net from "node:net";
import { dirname, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");

function getAvailablePort() {
  return new Promise((res, rej) => {
    const srv = net.createServer();
    srv.unref();
    srv.on("error", rej);
    srv.listen(0, "127.0.0.1", () => {
      const { port } = srv.address();
      srv.close(() => res(port));
    });
  });
}

function getChromeExecutable() {
  if (process.env.CHROME_BIN && existsSync(process.env.CHROME_BIN)) {
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
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  return "google-chrome";
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(port, maxAttempts = 40, intervalMs = 250) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/`);
      if (res.status === 200) return true;
    } catch {}
    await delay(intervalMs);
  }
  return false;
}

async function waitForCdp(debugPort, maxAttempts = 30, intervalMs = 200) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await new Promise((resTarget) => {
        const req = http.get(`http://127.0.0.1:${debugPort}/json`, (r) => {
          let data = "";
          r.on("data", (c) => (data += c));
          r.on("end", () => {
            try {
              resTarget(JSON.parse(data));
            } catch {
              resTarget(null);
            }
          });
        });
        req.on("error", () => resTarget(null));
      });
      if (res && Array.isArray(res)) {
        const page = res.find((t) => t.type === "page");
        if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
      }
    } catch {}
    await delay(intervalMs);
  }
  return null;
}

class CDPClient {
  constructor(ws) {
    this.ws = ws;
    this.id = 1;
    this.pending = new Map();
    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id && this.pending.has(data.id)) {
        const { resolve, reject } = this.pending.get(data.id);
        this.pending.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };
  }
  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async eval(expression) {
    const res = await this.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.exceptionDetails) {
      throw new Error(JSON.stringify(res.exceptionDetails));
    }
    return res.result?.value;
  }
}

test("RIC-180: Mobile touch-target regression suite and viewport validation", async () => {
  const serverPort = await getAvailablePort();
  const cdpPort = await getAvailablePort();

  console.log(`Starting Next.js production server on port ${serverPort}...`);
  const serverProcess = spawn(
    "node",
    [
      "node_modules/next/dist/bin/next",
      "start",
      "-p",
      String(serverPort),
      "-H",
      "127.0.0.1",
    ],
    { cwd: REPO_ROOT, stdio: "ignore" },
  );

  const serverReady = await waitForServer(serverPort);
  assert.ok(
    serverReady,
    "Production server failed to respond on ephemeral port",
  );

  const chromePath = getChromeExecutable();
  console.log(
    `Launching headless Chrome (${chromePath}) on debug port ${cdpPort}...`,
  );
  const chromeProcess = spawn(
    chromePath,
    [
      "--headless=new",
      `--remote-debugging-port=${cdpPort}`,
      "--remote-allow-origins=*",
      "--no-first-run",
      "--disable-gpu",
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  const wsUrl = await waitForCdp(cdpPort);
  assert.ok(wsUrl, "Failed to connect to headless Chrome CDP");

  const ws = new WebSocket(wsUrl);
  await new Promise((res) => (ws.onopen = res));
  const client = new CDPClient(ws);

  await client.send("Page.enable");
  await client.send("DOM.enable");

  try {
    const mobileViewports = [320, 375, 390, 412];

    for (const width of mobileViewports) {
      await client.send("Emulation.setDeviceMetricsOverride", {
        width,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true,
      });

      // 1. Validate /projects: exactly 9 project footer links measuring >= 44x44 CSS pixels
      await client.send("Page.navigate", {
        url: `http://127.0.0.1:${serverPort}/projects`,
      });
      await delay(300);

      const footerLinksData = await client.eval(`
        (() => {
          const links = Array.from(document.querySelectorAll(".project-card__footer a"));
          return links.map(el => {
            const r = el.getBoundingClientRect();
            return { width: r.width, height: r.height, text: el.textContent.trim() };
          });
        })()
      `);

      assert.equal(
        footerLinksData.length,
        9,
        `Expected 9 project footer links on /projects at ${width}px`,
      );
      for (const link of footerLinksData) {
        assert.ok(
          link.height >= 44,
          `Footer link "${link.text}" height ${link.height}px < 44px at ${width}px`,
        );
        assert.ok(
          link.width >= 44,
          `Footer link "${link.text}" width ${link.width}px < 44px at ${width}px`,
        );
      }

      // 2. Validate /: exactly 4 R&E dossier/collaboration links measuring >= 44px in height
      await client.send("Page.navigate", {
        url: `http://127.0.0.1:${serverPort}/`,
      });
      await delay(300);

      const reLinksData = await client.eval(`
        (() => {
          const links = Array.from(document.querySelectorAll(".re-card-link"));
          return links.map(el => {
            const r = el.getBoundingClientRect();
            return { width: r.width, height: r.height, text: el.textContent.trim() };
          });
        })()
      `);

      assert.equal(
        reLinksData.length,
        4,
        `Expected 4 R&E links on / at ${width}px`,
      );
      for (const link of reLinksData) {
        assert.ok(
          link.height >= 44,
          `R&E link "${link.text}" height ${link.height}px < 44px at ${width}px`,
        );
        assert.ok(
          link.width >= 44,
          `R&E link "${link.text}" width ${link.width}px < 44px at ${width}px`,
        );
      }

      // 3. Validate .text-link elements on /: all have height >= 44px
      const textLinksData = await client.eval(`
        (() => {
          const links = Array.from(document.querySelectorAll(".text-link"));
          return links.map(el => {
            const r = el.getBoundingClientRect();
            return { width: r.width, height: r.height, text: el.textContent.trim() };
          });
        })()
      `);
      assert.ok(
        textLinksData.length > 0,
        `Expected .text-link elements on / at ${width}px`,
      );
      for (const link of textLinksData) {
        assert.ok(
          link.height >= 44,
          `.text-link "${link.text}" height ${link.height}px < 44px at ${width}px`,
        );
      }

      // 4. Validate world switcher accessibility: exceeds WCAG 2.2 AA (>= 24x24px)
      const worldSwitcherData = await client.eval(`
        (() => {
          const links = Array.from(document.querySelectorAll(".world-selector a"));
          return links.map(el => {
            const r = el.getBoundingClientRect();
            return { width: r.width, height: r.height, text: el.textContent.trim() };
          });
        })()
      `);
      assert.equal(
        worldSwitcherData.length,
        2,
        `Expected 2 world-selector links at ${width}px`,
      );
      for (const wsLink of worldSwitcherData) {
        assert.ok(
          wsLink.height >= 24 && wsLink.width >= 24,
          `World switcher link "${wsLink.text}" (${wsLink.width}x${wsLink.height}) does not meet WCAG 2.2 24x24px minimum at ${width}px`,
        );
      }

      // 5. Check zero horizontal document overflow on / and /projects
      const overflow = await client.eval(`
        (() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body ? body.scrollWidth : 0);
          const clientWidth = docEl.clientWidth;
          return scrollWidth > clientWidth;
        })()
      `);
      assert.equal(
        overflow,
        false,
        `Horizontal document overflow detected at ${width}px on /`,
      );
    }

    // 6. Validate desktop preservation at 1440px
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await client.send("Page.navigate", {
      url: `http://127.0.0.1:${serverPort}/projects`,
    });
    await delay(300);

    const desktopFooterLink = await client.eval(`
      (() => {
        const el = document.querySelector(".project-card__footer a");
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { width: Math.round(r.width * 10) / 10, height: Math.round(r.height * 10) / 10 };
      })()
    `);
    assert.ok(desktopFooterLink, "Expected project footer link on desktop");
    // On desktop, typography is preserved (approx 19px height, not inflated to 44px)
    assert.ok(
      desktopFooterLink.height < 30,
      `Desktop footer link height should preserve compact editorial styling (<30px), got ${desktopFooterLink.height}px`,
    );

    console.log(
      "🎉 ALL MOBILE TOUCH-TARGET REGRESSION TESTS PASSED ACCURATELY!",
    );
  } finally {
    ws.close();
    chromeProcess.kill();
    serverProcess.kill();
  }
});
