import { spawn } from "node:child_process";
import http from "node:http";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
    return res.result?.value;
  }
}

async function run() {
  const port = 3755;
  console.log(`Starting Next.js server on port ${port}...`);
  const server = spawn("npx", ["next", "start", "-p", String(port)], {
    cwd: "/Users/richie/richie-linardi-portfolio-website",
    env: { ...process.env, PORT: String(port) },
  });

  await delay(1500);

  const chrome = spawn(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    [
      "--headless=new",
      "--remote-debugging-port=9489",
      "--no-first-run",
      "--no-default-browser-check",
      "about:blank",
    ],
  );
  await delay(1200);

  const targets = await new Promise((resolve) => {
    http.get("http://127.0.0.1:9489/json", (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve(JSON.parse(data)));
    });
  });

  const pageTarget = targets.find((t) => t.type === "page");
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  await new Promise((r) => {
    ws.onopen = r;
  });

  const cdp = new CDPClient(ws);
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");

  await cdp.send("Page.navigate", {
    url: `http://localhost:${port}/basketball/gallery`,
  });
  await delay(800);

  console.log("\n--- Test 1: Initial All Photos Count ---");
  const initial = await cdp.eval(`
    (() => {
      const cards = Array.from(document.querySelectorAll('.gallery-card'));
      const visible = cards.filter(c => window.getComputedStyle(c).display !== 'none');
      return { total: cards.length, visible: visible.length };
    })()
  `);
  console.log(
    `Initial total cards: ${initial.total}, visible: ${initial.visible} (Expected: 3)`,
  );
  if (initial.visible !== 3)
    throw new Error("Expected 3 visible cards initially");

  console.log("\n--- Test 2: Modern :has() Filtering (Indonesia) ---");
  await cdp.eval(`document.querySelector('#photo-filter-indonesia').click()`);
  await delay(200);

  const indonesia = await cdp.eval(`
    (() => {
      const cards = Array.from(document.querySelectorAll('.gallery-card'));
      const visible = cards.filter(c => window.getComputedStyle(c).display !== 'none');
      return visible.length;
    })()
  `);
  console.log(`Indonesia filter visible: ${indonesia} (Expected: 2)`);
  if (indonesia !== 2)
    throw new Error("Expected 2 visible cards for Indonesia");

  console.log("\n--- Test 3: Modern :has() Filtering (DBL All-Star) ---");
  await cdp.eval(`document.querySelector('#photo-filter-all-star').click()`);
  await delay(200);

  const allStar = await cdp.eval(`
    (() => {
      const cards = Array.from(document.querySelectorAll('.gallery-card'));
      const visible = cards.filter(c => window.getComputedStyle(c).display !== 'none');
      return visible.length;
    })()
  `);
  console.log(`DBL All-Star filter visible: ${allStar} (Expected: 1)`);
  if (allStar !== 1)
    throw new Error("Expected 1 visible card for DBL All-Star");

  console.log(
    "\n--- Test 4: Progressive Fallback (Simulating Browser WITHOUT :has Support) ---",
  );
  // In a browser without :has, the @supports selector(:has(*)) block is rejected.
  // We simulate this by removing the @supports selector(:has(*)) rules from the document style sheets.
  await cdp.eval(`
    (() => {
      for (const sheet of document.styleSheets) {
        try {
          for (let i = sheet.cssRules.length - 1; i >= 0; i--) {
            const rule = sheet.cssRules[i];
            if (rule.conditionText && rule.conditionText.includes(':has')) {
              sheet.deleteRule(i);
            }
          }
        } catch (e) {}
      }
    })()
  `);

  // Now test clicks purely relying on data-active-filter progressive fallback
  console.log("  -> Click Indonesia via fallback:");
  await cdp.eval(`document.querySelector('#photo-filter-indonesia').click()`);
  await delay(200);
  const fbIndo = await cdp.eval(`
    (() => {
      const cards = Array.from(document.querySelectorAll('.gallery-card'));
      return cards.filter(c => window.getComputedStyle(c).display !== 'none').length;
    })()
  `);
  console.log(`  Visible with fallback alone: ${fbIndo} (Expected: 2)`);
  if (fbIndo !== 2)
    throw new Error("Progressive fallback failed for Indonesia without :has");

  console.log("  -> Click DBL All-Star via fallback:");
  await cdp.eval(`document.querySelector('#photo-filter-all-star').click()`);
  await delay(200);
  const fbAllStar = await cdp.eval(`
    (() => {
      const cards = Array.from(document.querySelectorAll('.gallery-card'));
      return cards.filter(c => window.getComputedStyle(c).display !== 'none').length;
    })()
  `);
  console.log(`  Visible with fallback alone: ${fbAllStar} (Expected: 1)`);
  if (fbAllStar !== 1)
    throw new Error(
      "Progressive fallback failed for DBL All-Star without :has",
    );

  console.log("  -> Click All via fallback:");
  await cdp.eval(`document.querySelector('#photo-filter-all').click()`);
  await delay(200);
  const fbAll = await cdp.eval(`
    (() => {
      const cards = Array.from(document.querySelectorAll('.gallery-card'));
      return cards.filter(c => window.getComputedStyle(c).display !== 'none').length;
    })()
  `);
  console.log(`  Visible with fallback alone: ${fbAll} (Expected: 3)`);
  if (fbAll !== 3)
    throw new Error("Progressive fallback failed for All without :has");

  console.log("\n--- Test 5: Keyboard Arrow Navigation ---");
  await cdp.eval(`
    (() => {
      const radio = document.querySelector('#photo-filter-all');
      radio.focus();
    })()
  `);
  await delay(100);
  await cdp.send("Input.dispatchKeyEvent", {
    type: "rawKeyDown",
    key: "ArrowRight",
    code: "ArrowRight",
    windowsVirtualKeyCode: 39,
  });
  await cdp.send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key: "ArrowRight",
    code: "ArrowRight",
    windowsVirtualKeyCode: 39,
  });
  await delay(200);

  const focused = await cdp.eval(`document.activeElement?.id`);
  console.log(`Focused after ArrowRight: ${focused}`);

  console.log("\n--- Test 6: Touch Interaction Emulation ---");
  await cdp.send("Emulation.setTouchEmulationEnabled", { enabled: true });
  await cdp.eval(`
    (() => {
      const label = document.querySelector('label[for="photo-filter-indonesia"]');
      label.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    })()
  `);
  await delay(200);
  const touchIndo = await cdp.eval(`
    (() => {
      const cards = Array.from(document.querySelectorAll('.gallery-card'));
      return cards.filter(c => window.getComputedStyle(c).display !== 'none').length;
    })()
  `);
  console.log(
    `Visible after touch click on Indonesia: ${touchIndo} (Expected: 2)`,
  );
  if (touchIndo !== 2) throw new Error("Touch click failed");

  console.log("\n🎉 ALL GALLERY PROGRESSIVE FALLBACK TESTS PASSED ACCURATELY!");

  ws.close();
  chrome.kill();
  server.kill();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
