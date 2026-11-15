import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import http from "node:http";
import net from "node:net";
import { dirname, resolve } from "node:path";
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
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
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
    } catch {
      // not ready yet
    }
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
    } catch {
      // wait
    }
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
      throw new Error(
        `CDP evaluation error: ${JSON.stringify(res.exceptionDetails)}`,
      );
    }
    return res.result?.value;
  }
}

async function run() {
  const serverPort = await getAvailablePort();
  const cdpPort = await getAvailablePort();
  const chromePath = getChromeExecutable();

  console.log(
    `Starting Next.js production server on ephemeral port ${serverPort}...`,
  );
  const server = spawn(
    "npx",
    ["next", "start", "-p", String(serverPort), "-H", "127.0.0.1"],
    {
      cwd: REPO_ROOT,
      env: { ...process.env, PORT: String(serverPort) },
      stdio: "ignore",
    },
  );

  let chrome = null;
  let ws = null;

  try {
    const serverReady = await waitForServer(serverPort);
    if (!serverReady) {
      throw new Error(`Server failed to start on port ${serverPort}`);
    }

    console.log(
      `Launching headless browser (${chromePath}) on debug port ${cdpPort}...`,
    );
    chrome = spawn(
      chromePath,
      [
        "--headless=new",
        `--remote-debugging-port=${cdpPort}`,
        "--no-first-run",
        "--no-default-browser-check",
        "--disable-gpu",
        "about:blank",
      ],
      { stdio: "ignore" },
    );

    const wsUrl = await waitForCdp(cdpPort);
    if (!wsUrl) {
      throw new Error(`Failed to connect to CDP on port ${cdpPort}`);
    }

    ws = new WebSocket(wsUrl);
    await new Promise((resolveWs, rejectWs) => {
      ws.onopen = resolveWs;
      ws.onerror = rejectWs;
    });

    const cdp = new CDPClient(ws);
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("DOM.enable");

    await cdp.send("Page.navigate", {
      url: `http://127.0.0.1:${serverPort}/basketball/gallery`,
    });
    await delay(600);

    // Helper to read gallery state
    const getGalleryState = async () => {
      return await cdp.eval(`
        (() => {
          const section = document.querySelector('.gallery-section');
          const activeFilterAttr = section ? section.getAttribute('data-active-filter') : null;
          const cards = Array.from(document.querySelectorAll('.gallery-card'));
          const visibleCards = cards.filter(c => window.getComputedStyle(c).display !== 'none');

          const countSpans = Array.from(document.querySelectorAll('.gallery-count [data-count]'));
          const visibleCountSpan = countSpans.find(s => window.getComputedStyle(s).display !== 'none');

          const checkedRadio = document.querySelector('input[name="photo-category"]:checked');

          return {
            activeFilterAttr,
            checkedRadioId: checkedRadio ? checkedRadio.id : null,
            totalCards: cards.length,
            visibleCardsCount: visibleCards.length,
            visibleCountText: visibleCountSpan ? visibleCountSpan.textContent.trim() : null,
          };
        })()
      `);
    };

    console.log("\n--- Test 1: Initial All Photos Count ---");
    const initial = await getGalleryState();
    console.log(`Initial state:`, initial);
    if (initial.visibleCardsCount !== 4)
      throw new Error(
        `Expected 4 visible cards initially, got ${initial.visibleCardsCount}`,
      );
    if (initial.activeFilterAttr !== "all")
      throw new Error(
        `Expected activeFilter=all, got ${initial.activeFilterAttr}`,
      );
    if (initial.visibleCountText !== "4 photographs")
      throw new Error(
        `Expected '4 photographs', got ${initial.visibleCountText}`,
      );

    console.log(
      "\n--- Test 2: Modern :has() Filtering (Indonesia) via Nested Label Click ---",
    );
    // Click matching actual nested label markup
    await cdp.eval(`
      (() => {
        const input = document.querySelector('#photo-filter-indonesia');
        const label = input.closest('label.filter-label');
        if (label) {
          label.click();
        } else {
          input.click();
        }
      })()
    `);
    await delay(250);

    const indonesia = await getGalleryState();
    console.log(`Indonesia state:`, indonesia);
    if (indonesia.visibleCardsCount !== 3)
      throw new Error(
        `Expected 3 visible cards for Indonesia, got ${indonesia.visibleCardsCount}`,
      );
    if (indonesia.activeFilterAttr !== "indonesia")
      throw new Error(
        `Expected activeFilter=indonesia, got ${indonesia.activeFilterAttr}`,
      );
    if (indonesia.visibleCountText !== "3 photographs")
      throw new Error(
        `Expected '3 photographs', got ${indonesia.visibleCountText}`,
      );

    console.log(
      "\n--- Test 2b: FIBA U18 Asia Cup 2024 Membership & Full-Resolution Link ---",
    );
    const fibaCardInfo = await cdp.eval(`
      (() => {
        const headings = Array.from(document.querySelectorAll('.gallery-card .card-heading'));
        const fibaHeading = headings.find(h => h.textContent.includes('FIBA U18 Asia Cup 2024'));
        if (!fibaHeading) return null;
        const card = fibaHeading.closest('.gallery-card');
        const link = card ? card.querySelector('a[href*="fiba-u18-asia-cup-2024.webp"]') : null;
        return {
          found: true,
          category: card ? card.getAttribute('data-category') : null,
          isDisplayed: card ? window.getComputedStyle(card).display !== 'none' : false,
          linkHref: link ? link.getAttribute('href') : null,
          linkTarget: link ? link.getAttribute('target') : null,
        };
      })()
    `);
    console.log("FIBA Card Info:", fibaCardInfo);
    if (!fibaCardInfo || !fibaCardInfo.found) {
      throw new Error("Expected FIBA U18 Asia Cup 2024 card in gallery");
    }
    if (fibaCardInfo.category !== "indonesia") {
      throw new Error(
        `Expected category 'indonesia', got ${fibaCardInfo.category}`,
      );
    }
    if (!fibaCardInfo.isDisplayed) {
      throw new Error(
        "Expected FIBA card to be visible when Indonesia filter is active",
      );
    }
    if (
      fibaCardInfo.linkHref !== "/images/portfolio/fiba-u18-asia-cup-2024.webp"
    ) {
      throw new Error(
        `Expected full-resolution link to /images/portfolio/fiba-u18-asia-cup-2024.webp, got ${fibaCardInfo.linkHref}`,
      );
    }
    if (fibaCardInfo.linkTarget !== "_blank") {
      throw new Error(
        `Expected link target='_blank', got ${fibaCardInfo.linkTarget}`,
      );
    }

    console.log(
      "\n--- Test 3: Modern :has() Filtering (DBL All-Star) via Nested Label Click ---",
    );
    await cdp.eval(`
      (() => {
        const input = document.querySelector('#photo-filter-all-star');
        const label = input.closest('label.filter-label');
        if (label) label.click();
        else input.click();
      })()
    `);
    await delay(250);

    const allStar = await getGalleryState();
    console.log(`DBL All-Star state:`, allStar);
    if (allStar.visibleCardsCount !== 1)
      throw new Error(
        `Expected 1 visible card for DBL All-Star, got ${allStar.visibleCardsCount}`,
      );
    if (allStar.activeFilterAttr !== "all-star")
      throw new Error(
        `Expected activeFilter=all-star, got ${allStar.activeFilterAttr}`,
      );
    if (allStar.visibleCountText !== "1 photograph")
      throw new Error(
        `Expected '1 photograph', got ${allStar.visibleCountText}`,
      );

    const fibaHiddenInAllStar = await cdp.eval(`
      (() => {
        const headings = Array.from(document.querySelectorAll('.gallery-card .card-heading'));
        const fibaHeading = headings.find(h => h.textContent.includes('FIBA U18 Asia Cup 2024'));
        const card = fibaHeading ? fibaHeading.closest('.gallery-card') : null;
        return card ? window.getComputedStyle(card).display === 'none' : false;
      })()
    `);
    if (!fibaHiddenInAllStar) {
      throw new Error(
        "Expected FIBA card to be hidden under DBL All-Star filter",
      );
    }

    console.log(
      "\n--- Test 4: Progressive Fallback (Asserting Complete Removal of Modern :has Rules) ---",
    );
    const removalResult = await cdp.eval(`
      (() => {
        let rulesRemoved = 0;
        for (const sheet of document.styleSheets) {
          try {
            for (let i = sheet.cssRules.length - 1; i >= 0; i--) {
              const rule = sheet.cssRules[i];
              if ((rule.conditionText && rule.conditionText.includes(':has')) ||
                  (rule.selectorText && rule.selectorText.includes(':has'))) {
                sheet.deleteRule(i);
                rulesRemoved++;
              }
            }
          } catch (e) {}
        }

        // Verify remaining rules
        let remainingHasRules = 0;
        for (const sheet of document.styleSheets) {
          try {
            for (let i = 0; i < sheet.cssRules.length; i++) {
              const rule = sheet.cssRules[i];
              if ((rule.conditionText && rule.conditionText.includes(':has')) ||
                  (rule.selectorText && rule.selectorText.includes(':has'))) {
                remainingHasRules++;
              }
            }
          } catch (e) {}
        }

        return { rulesRemoved, remainingHasRules };
      })()
    `);
    console.log(
      `CSS rules removed: ${removalResult.rulesRemoved}, remaining :has rules: ${removalResult.remainingHasRules}`,
    );
    if (removalResult.rulesRemoved === 0)
      throw new Error("Expected to find and remove modern :has() CSS rules");
    if (removalResult.remainingHasRules !== 0)
      throw new Error(
        "Expected 0 :has() rules remaining in document stylesheets",
      );

    // Test fallback behavior without :has()
    console.log("  -> Testing fallback on Indonesia filter:");
    await cdp.eval(`
      (() => {
        const input = document.querySelector('#photo-filter-indonesia');
        input.closest('label.filter-label').click();
      })()
    `);
    await delay(250);
    const fbIndo = await getGalleryState();
    console.log("  Fallback Indonesia state:", fbIndo);
    if (fbIndo.visibleCardsCount !== 3)
      throw new Error(
        `Fallback failed: expected 3 visible cards, got ${fbIndo.visibleCardsCount}`,
      );
    if (fbIndo.visibleCountText !== "3 photographs")
      throw new Error(
        `Fallback failed: expected '3 photographs', got ${fbIndo.visibleCountText}`,
      );

    console.log("  -> Testing fallback on DBL All-Star filter:");
    await cdp.eval(`
      (() => {
        const input = document.querySelector('#photo-filter-all-star');
        input.closest('label.filter-label').click();
      })()
    `);
    await delay(250);
    const fbAllStar = await getGalleryState();
    console.log("  Fallback DBL All-Star state:", fbAllStar);
    if (fbAllStar.visibleCardsCount !== 1)
      throw new Error(
        `Fallback failed: expected 1 visible card, got ${fbAllStar.visibleCardsCount}`,
      );
    if (fbAllStar.visibleCountText !== "1 photograph")
      throw new Error(
        `Fallback failed: expected '1 photograph', got ${fbAllStar.visibleCountText}`,
      );

    console.log("  -> Testing fallback on All photos filter:");
    await cdp.eval(`
      (() => {
        const input = document.querySelector('#photo-filter-all');
        input.closest('label.filter-label').click();
      })()
    `);
    await delay(250);
    const fbAll = await getGalleryState();
    console.log("  Fallback All state:", fbAll);
    if (fbAll.visibleCardsCount !== 4)
      throw new Error(
        `Fallback failed: expected 4 visible cards, got ${fbAll.visibleCardsCount}`,
      );
    if (fbAll.visibleCountText !== "4 photographs")
      throw new Error(
        `Fallback failed: expected '4 photographs', got ${fbAll.visibleCountText}`,
      );

    console.log(
      "\n--- Test 5: Keyboard Arrow Navigation (Focus AND Selection Change) ---",
    );
    await cdp.eval(`
      (() => {
        const radio = document.querySelector('#photo-filter-all');
        radio.focus();
      })()
    `);
    await delay(100);

    // Send ArrowRight key event
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
    await delay(250);

    const keyboardState = await cdp.eval(`
      (() => {
        const activeEl = document.activeElement;
        const section = document.querySelector('.gallery-section');
        return {
          focusedId: activeEl ? activeEl.id : null,
          checkedId: document.querySelector('input[name="photo-category"]:checked')?.id,
          activeFilterAttr: section ? section.getAttribute('data-active-filter') : null,
        };
      })()
    `);
    console.log("Keyboard navigation state after ArrowRight:", keyboardState);
    if (keyboardState.focusedId !== "photo-filter-indonesia") {
      throw new Error(
        `Expected focus on photo-filter-indonesia, got ${keyboardState.focusedId}`,
      );
    }
    if (keyboardState.checkedId !== "photo-filter-indonesia") {
      throw new Error(
        `Expected selection on photo-filter-indonesia, got ${keyboardState.checkedId}`,
      );
    }

    console.log("\n--- Test 6: Real Browser Touch Input Emulation ---");
    // Enable touch emulation and perform real touch gesture on DBL All-Star filter label
    await cdp.send("Emulation.setTouchEmulationEnabled", {
      enabled: true,
      maxTouchPoints: 1,
    });

    const labelRect = await cdp.eval(`
      (() => {
        const label = document.querySelector('#photo-filter-all-star').closest('label.filter-label');
        const rect = label.getBoundingClientRect();
        return { x: Math.round(rect.left + rect.width / 2), y: Math.round(rect.top + rect.height / 2) };
      })()
    `);

    console.log(
      `  Dispatching real touch tap at (${labelRect.x}, ${labelRect.y})...`,
    );
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: labelRect.x, y: labelRect.y, id: 1 }],
    });
    await delay(50);
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
    });
    await delay(300);

    const touchState = await getGalleryState();
    console.log("Touch tap state result:", touchState);
    if (touchState.visibleCardsCount !== 1) {
      throw new Error(
        `Real touch tap failed: expected 1 visible card, got ${touchState.visibleCardsCount}`,
      );
    }
    if (touchState.checkedRadioId !== "photo-filter-all-star") {
      throw new Error(
        `Real touch tap failed: expected photo-filter-all-star checked, got ${touchState.checkedRadioId}`,
      );
    }

    console.log(
      "\n🎉 ALL GALLERY PROGRESSIVE FALLBACK TESTS PASSED ACCURATELY!",
    );
  } finally {
    if (ws) {
      try {
        ws.close();
      } catch {}
    }
    if (chrome) {
      chrome.kill("SIGTERM");
    }
    server.kill("SIGTERM");
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
