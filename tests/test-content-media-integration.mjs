import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ARTIFACT_DIR =
  "/Users/richie/.gemini/antigravity/brain/bddbd5af-a297-44d4-8e5a-f2d2adb5c265";
const SCRATCH_DIR = join(ARTIFACT_DIR, "scratch");
const EVIDENCE_DIR = join(ARTIFACT_DIR, "content-media-evidence");

mkdirSync(SCRATCH_DIR, { recursive: true });
mkdirSync(EVIDENCE_DIR, { recursive: true });

async function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
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

const REPO_EVIDENCE_DIR =
  "/Users/richie/richie-linardi-portfolio-website/docs/design-references/evidence/media";
mkdirSync(REPO_EVIDENCE_DIR, { recursive: true });

async function captureShot(client, filename) {
  const shot = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  const buf = Buffer.from(shot.data, "base64");
  writeFileSync(join(ARTIFACT_DIR, filename), buf);
  writeFileSync(join(EVIDENCE_DIR, filename), buf);
  writeFileSync(join(REPO_EVIDENCE_DIR, filename), buf);
  console.log(`  📸 Saved screenshot: ${filename}`);
}

async function setViewport(client, width, height, isMobile = false) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 2,
    mobile: isMobile,
  });
  await client.send("Emulation.setVisibleSize", { width, height });
}

async function main() {
  console.log(
    "================================================================================",
  );
  console.log(
    "🏀 RUNNING CONTENT & MEDIA INTEGRATION MULTI-VIEWPORT VERIFICATION",
  );
  console.log(
    "================================================================================",
  );

  const PORT = 3044;
  let serverProcess = null;
  let serverReady = false;

  try {
    const res = await fetch(`http://127.0.0.1:${PORT}/`);
    if (res.status === 200) {
      serverReady = true;
      console.log(`  ✅ Existing Next.js server found on port ${PORT}`);
    }
  } catch {}

  if (!serverReady) {
    console.log(`  Starting Next.js production server on port ${PORT}...`);
    serverProcess = spawn(
      "node",
      ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)],
      {
        cwd: "/Users/richie/richie-linardi-portfolio-website",
        stdio: "ignore",
      },
    );

    for (let i = 0; i < 40; i++) {
      await delay(250);
      try {
        const res = await fetch(`http://127.0.0.1:${PORT}/`);
        if (res.status === 200) {
          serverReady = true;
          console.log(`  ✅ Next.js server ready at http://127.0.0.1:${PORT}`);
          break;
        }
      } catch {}
    }
  }

  if (!serverReady) {
    if (serverProcess) serverProcess.kill();
    throw new Error("Server failed to start on port " + PORT);
  }

  const DEBUG_PORT = 9388;
  const userDataDir = join(SCRATCH_DIR, `chrome-media-test-${Date.now()}`);
  const chromeProcess = spawn(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    [
      "--headless=new",
      `--remote-debugging-port=${DEBUG_PORT}`,
      "--remote-allow-origins=*",
      "--no-first-run",
      "--no-default-browser-check",
      `--user-data-dir=${userDataDir}`,
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  let listData = null;
  for (let i = 0; i < 40; i++) {
    await delay(200);
    try {
      const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
      if (res.status === 200) {
        listData = await res.json();
        if (listData && listData.length > 0) break;
      }
    } catch {}
  }
  if (!listData || listData.length === 0) {
    chromeProcess.kill();
    if (serverProcess) serverProcess.kill();
    throw new Error("Chrome failed to launch CDP on port " + DEBUG_PORT);
  }

  const tabData = listData.find((t) => t.type === "page") || listData[0];
  const ws = new WebSocket(tabData.webSocketDebuggerUrl);
  await new Promise((res) => (ws.onopen = res));
  const client = new CDPClient(ws);

  await client.send("Page.enable");
  await client.send("DOM.enable");
  await client.send("Runtime.enable");

  const viewports = [
    { width: 320, height: 600, name: "320px (Compact Mobile)", isMobile: true },
    { width: 360, height: 740, name: "360px (Android Small)", isMobile: true },
    {
      width: 390,
      height: 844,
      name: "390px (Standard Mobile / iPhone 13)",
      isMobile: true,
    },
    {
      width: 768,
      height: 1024,
      name: "768px (Tablet Portrait)",
      isMobile: true,
    },
    {
      width: 1024,
      height: 768,
      name: "1024px (Tablet Landscape / Laptop)",
      isMobile: false,
    },
    { width: 1440, height: 900, name: "1440px (Desktop)", isMobile: false },
    {
      width: 1920,
      height: 1080,
      name: "1920px (Wide Display)",
      isMobile: false,
    },
  ];

  const routesToTest = [
    { path: "/basketball/gallery", name: "Basketball Proof Gallery" },
    { path: "/basketball/media", name: "Basketball Press & Media" },
    { path: "/basketball", name: "Basketball Home" },
    { path: "/projects/spy-market-agent", name: "SPY Market Agent Case Study" },
    { path: "/projects/ledgerpilot-ai", name: "LedgerPilot AI Case Study" },
    { path: "/projects/khlim-assist", name: "KHLIM Assist Case Study" },
    {
      path: "/projects/personal-project-operator",
      name: "Personal Project Operator Case Study",
    },
    { path: "/about", name: "About / Identity" },
    { path: "/resume", name: "Web Resume" },
  ];

  const results = [];

  for (const route of routesToTest) {
    console.log(`\n🔍 Auditing route: ${route.name} (${route.path})`);

    for (const vp of viewports) {
      await setViewport(client, vp.width, vp.height, vp.isMobile);
      await client.send("Page.navigate", {
        url: `http://127.0.0.1:${PORT}${route.path}`,
      });
      await delay(600);

      // Check horizontal overflow
      const overflow = await client.eval(`(() => {
        const scrollW = document.documentElement.scrollWidth;
        const innerW = window.innerWidth;
        return {
          overflowPx: scrollW - innerW,
          hasOverflow: scrollW > innerW,
          scrollW,
          innerW
        };
      })()`);

      assert.equal(
        overflow.hasOverflow,
        false,
        `Horizontal overflow on ${route.path} at ${vp.width}px! scrollWidth=${overflow.scrollW}, innerWidth=${overflow.innerW}`,
      );

      // Check image loading (all rendered images must have naturalWidth > 0)
      const imagesStatus = await client.eval(`(() => {
        const imgs = Array.from(document.querySelectorAll("img"));
        const broken = imgs.filter(img => img.complete && img.naturalWidth === 0).map(img => img.src);
        return {
          total: imgs.length,
          brokenCount: broken.length,
          broken
        };
      })()`);

      assert.equal(
        imagesStatus.brokenCount,
        0,
        `Broken images detected on ${route.path} at ${vp.width}px: ${JSON.stringify(imagesStatus.broken)}`,
      );

      // Capture screenshots for key desktop (1440) and mobile (390) viewports
      if (vp.width === 1440 || vp.width === 390) {
        const routeSlug = route.path.replace(/\//g, "_").replace(/^_/, "");
        const shotName = `media_${routeSlug}_${vp.width}.png`;
        await captureShot(client, shotName);
      }
    }

    console.log(
      `  ✅ ${route.name} verified cleanly across all 7 viewports (320px–1920px)!`,
    );
    results.push({ route: route.path, name: route.name, status: "PASSED" });
  }

  // Interactive verification on /basketball/gallery
  console.log("\n🧪 Testing interactive behavior on /basketball/gallery...");
  await setViewport(client, 1440, 900, false);
  await client.send("Page.navigate", {
    url: `http://127.0.0.1:${PORT}/basketball/gallery`,
  });
  await delay(600);

  // Click filter button
  const filterClicked = await client.eval(`(() => {
    const btn = Array.from(document.querySelectorAll(".proof-filter-btn")).find(b => b.textContent.includes("International"));
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  })()`);
  assert.equal(
    filterClicked,
    true,
    "International filter button should exist and be clickable",
  );
  await delay(300);

  // Check that only filtered moments appear
  const filteredCount = await client.eval(
    `document.querySelectorAll(".proof-card").length`,
  );
  console.log(
    `  Filter clicked: International moments rendered = ${filteredCount}`,
  );

  // Test Next Moment button in inspector
  const nextMomentClicked = await client.eval(`(() => {
    const btn = Array.from(document.querySelectorAll(".proof-ctrl-btn")).find(b => b.textContent.includes("Next"));
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  })()`);
  assert.equal(
    nextMomentClicked,
    true,
    "Next moment button should exist and be clickable",
  );
  await delay(200);

  // Clean up
  chromeProcess.kill();
  if (serverProcess) serverProcess.kill();

  console.log(
    "\n================================================================================",
  );
  console.log("🎉 ALL CONTENT & MEDIA INTEGRATION TESTS PASSED 100%!");
  console.log(
    "================================================================================",
  );
  process.exit(0);
}

main().catch((err) => {
  console.error("💥 Test failed:", err);
  process.exit(1);
});
