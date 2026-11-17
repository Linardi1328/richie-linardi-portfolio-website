import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");

const ARTIFACT_DIR =
  process.env.ARTIFACT_DIR || resolve(REPO_ROOT, ".artifacts");
const SCRATCH_DIR = join(ARTIFACT_DIR, "scratch");
const EVIDENCE_DIR = join(ARTIFACT_DIR, "content-media-evidence");
const REPO_EVIDENCE_DIR = resolve(
  REPO_ROOT,
  "docs/design-references/evidence/media",
);

mkdirSync(SCRATCH_DIR, { recursive: true });
mkdirSync(EVIDENCE_DIR, { recursive: true });
mkdirSync(REPO_EVIDENCE_DIR, { recursive: true });

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

async function captureShot(client, filename) {
  const shot = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  const buf = Buffer.from(shot.data, "base64");
  try {
    writeFileSync(join(ARTIFACT_DIR, filename), buf);
    writeFileSync(join(EVIDENCE_DIR, filename), buf);
  } catch {}
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
  let chromeProcess = null;
  let serverReady = false;

  try {
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
        [
          "node_modules/next/dist/bin/next",
          "start",
          "-p",
          String(PORT),
          "-H",
          "127.0.0.1",
        ],
        {
          cwd: REPO_ROOT,
          stdio: "ignore",
        },
      );

      for (let i = 0; i < 40; i++) {
        await delay(250);
        try {
          const res = await fetch(`http://127.0.0.1:${PORT}/`);
          if (res.status === 200) {
            serverReady = true;
            console.log(
              `  ✅ Next.js server ready at http://127.0.0.1:${PORT}`,
            );
            break;
          }
        } catch {}
      }
    }

    if (!serverReady) {
      throw new Error("Server failed to start on port " + PORT);
    }

    const DEBUG_PORT = 9388;
    const userDataDir = join(SCRATCH_DIR, `chrome-media-test-${Date.now()}`);
    const chromePath = getChromeExecutable();

    chromeProcess = spawn(
      chromePath,
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
      {
        width: 320,
        height: 600,
        name: "320px (Compact Mobile)",
        isMobile: true,
      },
      {
        width: 360,
        height: 740,
        name: "360px (Android Small)",
        isMobile: true,
      },
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
      { path: "/projects/khlim-3x3-live", name: "KHLIM 3x3 Live Case Study" },
      {
        path: "/projects/spy-market-agent",
        name: "SPY Market Agent Case Study",
      },
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

    // Interactive verification on /basketball/gallery using current editorial component
    console.log("\n🧪 Testing interactive behavior on /basketball/gallery...");
    await setViewport(client, 1440, 900, false);
    await client.send("Page.navigate", {
      url: `http://127.0.0.1:${PORT}/basketball/gallery`,
    });
    await delay(600);

    // Click Indonesia filter radio
    const indoFilterClicked = await client.eval(`(() => {
      const radio = document.querySelector("#photo-filter-indonesia");
      const label = radio ? radio.closest("label.filter-label") : null;
      if (label) {
        label.click();
        return true;
      }
      return false;
    })()`);
    assert.equal(
      indoFilterClicked,
      true,
      "Indonesia filter radio label should exist and be clickable",
    );
    await delay(300);

    const indoCardsCount = await client.eval(`
      Array.from(document.querySelectorAll(".gallery-card"))
        .filter(card => window.getComputedStyle(card).display !== "none")
        .length
    `);
    assert.equal(
      indoCardsCount,
      3,
      "Indonesia filter must display exactly 3 visible photos",
    );
    console.log(
      `  Filter clicked: Indonesia photos rendered = ${indoCardsCount}`,
    );

    const fibaCardCheck = await client.eval(`(() => {
      const fibaCard = Array.from(document.querySelectorAll(".gallery-card")).find(c => {
        const h2 = c.querySelector(".card-heading");
        return h2 && h2.textContent.includes("FIBA U18 Asia Cup 2024");
      });
      if (!fibaCard) return { found: false };
      const link = fibaCard.querySelector("a[href*='fiba-u18-asia-cup-2024.webp']");
      return {
        found: true,
        category: fibaCard.getAttribute("data-category"),
        visible: window.getComputedStyle(fibaCard).display !== "none",
        linkHref: link ? link.getAttribute("href") : null
      };
    })()`);
    assert.equal(fibaCardCheck.found, true, "FIBA card must exist in gallery");
    assert.equal(
      fibaCardCheck.category,
      "indonesia",
      "FIBA card category must be indonesia",
    );
    assert.equal(
      fibaCardCheck.visible,
      true,
      "FIBA card must be visible under indonesia filter",
    );
    assert.equal(
      fibaCardCheck.linkHref,
      "/images/portfolio/fiba-u18-asia-cup-2024.webp",
      "FIBA card must link to full-resolution image",
    );

    // Click DBL All-Star filter radio
    const allStarFilterClicked = await client.eval(`(() => {
      const radio = document.querySelector("#photo-filter-all-star");
      const label = radio ? radio.closest("label.filter-label") : null;
      if (label) {
        label.click();
        return true;
      }
      return false;
    })()`);
    assert.equal(
      allStarFilterClicked,
      true,
      "DBL All-Star filter radio label should exist and be clickable",
    );
    await delay(300);

    const allStarCardsCount = await client.eval(`
      Array.from(document.querySelectorAll(".gallery-card"))
        .filter(card => window.getComputedStyle(card).display !== "none")
        .length
    `);
    assert.equal(
      allStarCardsCount,
      1,
      "DBL All-Star filter must display exactly 1 visible photo",
    );
    console.log(
      `  Filter clicked: DBL All-Star photos rendered = ${allStarCardsCount}`,
    );

    const fibaHiddenInAllStar = await client.eval(`(() => {
      const fibaCard = Array.from(document.querySelectorAll(".gallery-card")).find(c => {
        const h2 = c.querySelector(".card-heading");
        return h2 && h2.textContent.includes("FIBA U18 Asia Cup 2024");
      });
      return fibaCard ? window.getComputedStyle(fibaCard).display === "none" : false;
    })()`);
    assert.equal(
      fibaHiddenInAllStar,
      true,
      "FIBA card must be hidden under DBL All-Star filter",
    );

    // Click All filter radio
    const allFilterClicked = await client.eval(`(() => {
      const radio = document.querySelector("#photo-filter-all");
      const label = radio ? radio.closest("label.filter-label") : null;
      if (label) {
        label.click();
        return true;
      }
      return false;
    })()`);
    assert.equal(
      allFilterClicked,
      true,
      "All photos filter radio label should exist and be clickable",
    );
    await delay(300);

    const allCardsCount = await client.eval(`
      Array.from(document.querySelectorAll(".gallery-card"))
        .filter(card => window.getComputedStyle(card).display !== "none")
        .length
    `);
    assert.equal(
      allCardsCount,
      4,
      "All filter must display exactly 4 visible photos",
    );
    console.log(`  Filter clicked: All photos rendered = ${allCardsCount}`);

    console.log(
      "\n📐 Running Mobile Responsive Computed Properties & Cascade Assertions (RIC-180)...",
    );

    // 1. Header wrapping and hamburger accessibility at 320px
    await setViewport(client, 320, 600, true);
    await client.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/` });
    await delay(500);

    const headerCheck = await client.eval(`(() => {
      const headerInner = document.querySelector(".site-header__inner");
      const summary = document.querySelector(".mobile-navigation summary");
      const s = getComputedStyle(headerInner);
      const rect = summary ? summary.getBoundingClientRect() : null;
      return {
        flexWrap: s.flexWrap,
        hamRight: rect ? rect.right : 0,
        hamVisible: rect ? rect.right <= 320 && rect.left >= 0 : false,
        docWidth: document.documentElement.scrollWidth,
      };
    })()`);
    assert.equal(
      headerCheck.flexWrap,
      "wrap",
      "Mobile header inner must have flex-wrap: wrap",
    );
    assert.equal(
      headerCheck.hamVisible,
      true,
      "Hamburger summary must be visible and within viewport bounds at 320px",
    );
    assert.equal(
      headerCheck.docWidth <= 320,
      true,
      `Document scroll width must not overflow at 320px (was ${headerCheck.docWidth})`,
    );

    // Test header with 150% enlarged text at 320px
    const headerEnlargedCheck = await client.eval(`(() => {
      document.documentElement.style.fontSize = "24px";
      const summary = document.querySelector(".mobile-navigation summary");
      const rect = summary ? summary.getBoundingClientRect() : null;
      const res = {
        hamRight: rect ? rect.right : 0,
        hamVisible: rect ? rect.right <= 320 : false,
        docWidth: document.documentElement.scrollWidth,
      };
      document.documentElement.style.fontSize = "";
      return res;
    })()`);
    assert.equal(
      headerEnlargedCheck.hamVisible,
      true,
      "Hamburger summary must remain reachable within 320px viewport when text is enlarged",
    );
    console.log("  ✅ Header wrapping & enlarged text verified at 320px");

    // 2. Closed navigation focusability and visibility
    const navStateCheck = await client.eval(`(() => {
      const details = document.querySelector(".mobile-navigation");
      const nav = details ? details.querySelector("nav") : null;
      const links = nav ? Array.from(nav.querySelectorAll("a")) : [];
      if (!details || !nav || links.length === 0) return { error: "elements not found" };

      details.open = false;
      const closedDisplay = getComputedStyle(nav).display;
      links[0].focus();
      const closedFocusable = document.activeElement === links[0];

      details.open = true;
      const openDisplay = getComputedStyle(nav).display;
      links[0].focus();
      const openFocusable = document.activeElement === links[0];

      details.open = false;
      return {
        closedDisplay,
        closedFocusable,
        openDisplay,
        openFocusable,
      };
    })()`);
    assert.equal(
      navStateCheck.closedDisplay,
      "none",
      "Closed navigation nav must be display: none",
    );
    assert.equal(
      navStateCheck.closedFocusable,
      false,
      "Links inside closed navigation must not be focusable",
    );
    assert.equal(
      navStateCheck.openDisplay,
      "grid",
      "Open navigation nav must be display: grid",
    );
    assert.equal(
      navStateCheck.openFocusable,
      true,
      "Links inside open navigation must be focusable",
    );
    console.log("  ✅ Navigation opening, closing & keyboard focus verified");

    // 3. Academic spotlight card padding & border-radius at 320px, 375px, 390px vs desktop
    for (const w of [320, 375, 390]) {
      await setViewport(client, w, 700, true);
      await client.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/` });
      await delay(400);

      const acadMobile = await client.eval(`(() => {
        const card = document.querySelector(".academic-spotlight-card");
        if (!card) return null;
        const s = getComputedStyle(card);
        return {
          paddingTop: s.paddingTop,
          paddingRight: s.paddingRight,
          borderRadius: s.borderRadius,
        };
      })()`);
      assert.ok(acadMobile, `Academic spotlight card must exist at ${w}px`);
      assert.equal(
        acadMobile.paddingTop,
        "21.6px",
        `Academic spotlight card mobile paddingTop must be 21.6px (1.35rem) at ${w}px`,
      );
      assert.equal(
        acadMobile.paddingRight,
        "17.6px",
        `Academic spotlight card mobile paddingRight must be 17.6px (1.1rem) at ${w}px`,
      );
      assert.equal(
        acadMobile.borderRadius,
        "10px",
        `Academic spotlight card mobile borderRadius must be 10px at ${w}px`,
      );
    }

    // Academic card on desktop (1280px)
    await setViewport(client, 1280, 800, false);
    await client.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/` });
    await delay(400);

    const acadDesktop = await client.eval(`(() => {
      const card = document.querySelector(".academic-spotlight-card");
      if (!card) return null;
      const s = getComputedStyle(card);
      return {
        paddingTop: s.paddingTop,
        borderRadius: s.borderRadius,
      };
    })()`);
    assert.equal(
      acadDesktop.paddingTop,
      "36px",
      "Academic spotlight card desktop paddingTop must be 36px (2.25rem)",
    );
    assert.equal(
      acadDesktop.borderRadius,
      "14px",
      "Academic spotlight card desktop borderRadius must be 14px",
    );
    console.log(
      "  ✅ Academic card spacing verified on mobile (21.6px/17.6px) and desktop (36px)",
    );

    // 4. Achievement hero card spacing on mobile vs desktop
    for (const w of [320, 375, 390]) {
      await setViewport(client, w, 700, true);
      await client.send("Page.navigate", {
        url: `http://127.0.0.1:${PORT}/basketball/achievements`,
      });
      await delay(400);

      const achMobile = await client.eval(`(() => {
        const card = document.querySelector(".achievement-hero-card");
        if (!card) return null;
        const s = getComputedStyle(card);
        return {
          paddingTop: s.paddingTop,
          paddingRight: s.paddingRight,
          gap: s.gap,
          borderRadius: s.borderRadius,
        };
      })()`);
      assert.ok(achMobile, `Achievement card must exist at ${w}px`);
      assert.equal(
        achMobile.paddingTop,
        "21.6px",
        `Achievement card mobile paddingTop must be 21.6px (1.35rem) at ${w}px`,
      );
      assert.equal(
        achMobile.gap,
        "20px",
        `Achievement card mobile gap must be 20px (1.25rem) at ${w}px`,
      );
      assert.equal(
        achMobile.borderRadius,
        "10px",
        `Achievement card mobile borderRadius must be 10px at ${w}px`,
      );
    }

    await setViewport(client, 1280, 800, false);
    await client.send("Page.navigate", {
      url: `http://127.0.0.1:${PORT}/basketball/achievements`,
    });
    await delay(400);

    const achDesktop = await client.eval(`(() => {
      const card = document.querySelector(".achievement-hero-card");
      if (!card) return null;
      const s = getComputedStyle(card);
      return {
        paddingTop: s.paddingTop,
        gap: s.gap,
        borderRadius: s.borderRadius,
      };
    })()`);
    assert.equal(
      achDesktop.paddingTop,
      "36px",
      "Achievement card desktop paddingTop must be 36px (2.25rem)",
    );
    assert.equal(
      achDesktop.gap,
      "40px",
      "Achievement card desktop gap must be 40px (2.5rem)",
    );
    assert.equal(
      achDesktop.borderRadius,
      "12px",
      "Achievement card desktop borderRadius must be 12px",
    );
    console.log(
      "  ✅ Achievement card spacing verified on mobile (21.6px/20px) and desktop (36px/40px)",
    );

    // 5. Gallery filter alignment & touch target height
    await setViewport(client, 375, 700, true);
    await client.send("Page.navigate", {
      url: `http://127.0.0.1:${PORT}/basketball/gallery`,
    });
    await delay(400);

    const filterMetrics = await client.eval(`(() => {
      const span = document.querySelector(".filter-label > span");
      if (!span) return null;
      const s = getComputedStyle(span);
      const rect = span.getBoundingClientRect();
      return {
        display: s.display,
        alignItems: s.alignItems,
        justifyContent: s.justifyContent,
        paddingTop: s.paddingTop,
        minHeight: s.minHeight,
        renderedHeight: rect.height,
      };
    })()`);
    assert.equal(
      filterMetrics.display,
      "inline-flex",
      "Filter label span must be display: inline-flex on mobile",
    );
    assert.equal(
      filterMetrics.alignItems,
      "center",
      "Filter label span must be items-center",
    );
    assert.equal(
      filterMetrics.justifyContent,
      "center",
      "Filter label span must be justify-center",
    );
    assert.equal(
      filterMetrics.minHeight,
      "44px",
      "Filter label span must have min-height: 44px",
    );
    assert.ok(
      filterMetrics.renderedHeight >= 44,
      `Filter label span rendered height must be >= 44px (was ${filterMetrics.renderedHeight}px)`,
    );
    console.log("  ✅ Gallery filter alignment & >=44px min-height verified");

    // 6. Status dot pulse geometry & flex-shrink
    await setViewport(client, 320, 700, true);
    await client.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/` });
    await delay(400);

    const dotMetrics = await client.eval(`(() => {
      const dot = document.querySelector(".status-dot-pulse");
      if (!dot) return null;
      const s = getComputedStyle(dot);
      const rect = dot.getBoundingClientRect();
      return {
        flexShrink: s.flexShrink,
        width: s.width,
        height: s.height,
        renderedWidth: rect.width,
        renderedHeight: rect.height,
      };
    })()`);
    assert.equal(
      dotMetrics.flexShrink,
      "0",
      "Status dot pulse must have flex-shrink: 0",
    );
    assert.equal(dotMetrics.width, "8px", "Status dot pulse width must be 8px");
    assert.equal(
      dotMetrics.height,
      "8px",
      "Status dot pulse height must be 8px",
    );
    assert.equal(
      dotMetrics.renderedWidth,
      8,
      "Status dot pulse rendered width must be 8px",
    );
    assert.equal(
      dotMetrics.renderedHeight,
      8,
      "Status dot pulse rendered height must be 8px",
    );
    console.log(
      "  ✅ Status dot pulse geometry (8px × 8px, flex-shrink: 0) verified",
    );

    console.log(
      "\n================================================================================",
    );
    console.log("🎉 ALL CONTENT & MEDIA INTEGRATION TESTS PASSED 100%!");
    console.log(
      "================================================================================",
    );
  } finally {
    if (chromeProcess) {
      try {
        chromeProcess.kill("SIGTERM");
      } catch {}
    }
    if (serverProcess) {
      try {
        serverProcess.kill("SIGTERM");
      } catch {}
    }
  }
}

main().catch((err) => {
  console.error("💥 Test failed:", err);
  process.exit(1);
});
