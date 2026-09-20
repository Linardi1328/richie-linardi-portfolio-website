import assert from "node:assert/strict";
import { spawn, execSync } from "node:child_process";
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ARTIFACT_DIR =
  "/Users/richie/.gemini/antigravity/brain/bddbd5af-a297-44d4-8e5a-f2d2adb5c265";
const SCRATCH_DIR = join(ARTIFACT_DIR, "scratch");
const EVIDENCE_ARTIFACT_DIR = join(ARTIFACT_DIR, "trial2-evidence");
const EVIDENCE_REPO_DIR =
  "/Users/richie/richie-linardi-portfolio-website/docs/design-references/evidence/trial2";

mkdirSync(SCRATCH_DIR, { recursive: true });
mkdirSync(EVIDENCE_ARTIFACT_DIR, { recursive: true });
mkdirSync(EVIDENCE_REPO_DIR, { recursive: true });

async function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

class CDPClient {
  constructor(ws) {
    this.ws = ws;
    this.id = 1;
    this.pending = new Map();
    this.onScreencastFrame = null;

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.id && this.pending.has(data.id)) {
        const { resolve, reject } = this.pending.get(data.id);
        this.pending.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      } else if (data.method === "Page.screencastFrame") {
        if (this.onScreencastFrame) {
          this.onScreencastFrame(data.params);
        }
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

async function waitFor(
  predicateFn,
  description,
  timeoutMs = 6000,
  intervalMs = 40,
) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeoutMs) {
    try {
      const result = await predicateFn();
      if (result) return result;
    } catch {
      // Continue polling
    }
    await delay(intervalMs);
  }
  throw new Error(
    `Timeout after ${timeoutMs}ms waiting for condition: ${description}`,
  );
}

async function clickElement(client, x, y) {
  await client.send("Input.dispatchMouseEvent", {
    type: "mouseMoved",
    x: Math.round(x),
    y: Math.round(y),
  });
  await delay(40);
  await client.send("Input.dispatchMouseEvent", {
    type: "mousePressed",
    x: Math.round(x),
    y: Math.round(y),
    button: "left",
    clickCount: 1,
  });
  await delay(50);
  await client.send("Input.dispatchMouseEvent", {
    type: "mouseReleased",
    x: Math.round(x),
    y: Math.round(y),
    button: "left",
    clickCount: 1,
  });
}

async function captureShot(client, filename, clip = null) {
  const params = {
    format: "png",
    captureBeyondViewport: false,
  };
  if (clip) params.clip = clip;
  const shot = await client.send("Page.captureScreenshot", params);
  const buf = Buffer.from(shot.data, "base64");

  const out1 = join(ARTIFACT_DIR, filename);
  const out2 = join(EVIDENCE_ARTIFACT_DIR, filename);
  const out3 = join(EVIDENCE_REPO_DIR, filename);
  writeFileSync(out1, buf);
  writeFileSync(out2, buf);
  writeFileSync(out3, buf);
  console.log(`  [Screenshot] Saved: ${filename}`);
}

async function recordSession(client, videoName, actionFn) {
  const framesDir = join(SCRATCH_DIR, `frames_${videoName}`);
  mkdirSync(framesDir, { recursive: true });

  let frameIdx = 0;
  client.onScreencastFrame = (params) => {
    const { data: b64, sessionId } = params;
    client.send("Page.screencastFrameAck", { sessionId });
    const p = join(
      framesDir,
      `frame_${String(frameIdx++).padStart(5, "0")}.jpg`,
    );
    writeFileSync(p, Buffer.from(b64, "base64"));
  };

  await client.send("Page.startScreencast", {
    format: "jpeg",
    quality: 85,
    everyNthFrame: 1,
  });

  try {
    await actionFn();
  } finally {
    await client.send("Page.stopScreencast");
    client.onScreencastFrame = null;
  }

  await delay(150);

  if (frameIdx > 0) {
    const mp4Name = `${videoName}.mp4`;
    const scratchMp4 = join(SCRATCH_DIR, mp4Name);
    const artifactMp4 = join(EVIDENCE_ARTIFACT_DIR, mp4Name);
    const repoMp4 = join(EVIDENCE_REPO_DIR, mp4Name);

    execSync(
      `ffmpeg -y -framerate 24 -i "${framesDir}/frame_%05d.jpg" -vf "pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:v libx264 -pix_fmt yuv420p "${scratchMp4}"`,
      { stdio: "ignore" },
    );

    if (existsSync(scratchMp4)) {
      copyFileSync(scratchMp4, artifactMp4);
      copyFileSync(scratchMp4, repoMp4);
      console.log(
        `  [Video Recording] Encoded playable MP4 (${frameIdx} frames): ${mp4Name}`,
      );
    }
  }
}

async function isolateSession(client) {
  await client.eval(`(() => {
    sessionStorage.clear();
    localStorage.clear();
  })()`);
}

async function main() {
  console.log(
    "================================================================================",
  );
  console.log(
    "🚀 TRIAL 2 REVIEW PACKAGE: ENVIRONMENTAL LANDSCAPES & UI TRANSFORMATION",
  );
  console.log(
    "================================================================================",
  );

  const userDataDir = `/tmp/chrome-trial2-pkg-${Date.now()}`;
  const chromeProcess = spawn(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    [
      "--headless=new",
      "--remote-debugging-port=9366",
      "--remote-allow-origins=*",
      "--no-first-run",
      `--user-data-dir=${userDataDir}`,
      "--disable-gpu",
      "http://localhost:3000/",
    ],
    { stdio: "ignore" },
  );

  let listData = null;
  for (let i = 0; i < 25; i++) {
    await delay(250);
    try {
      const listRes = await fetch("http://127.0.0.1:9366/json/list");
      listData = await listRes.json();
      if (listData && listData.length > 0) break;
    } catch {}
  }

  if (!listData) {
    chromeProcess.kill();
    throw new Error("Failed to connect to headless Chrome on port 9366");
  }

  const reviewReport = {
    trial: 2,
    timestamp: new Date().toISOString(),
    environment: {
      engine: "Chromium Headless (macOS)",
      host: "http://localhost:3000",
      resolutionBase: "1440x900",
    },
    results: {
      passed: [],
      failed: [],
    },
    screenshots: [],
    recordings: [],
    performanceMetrics: {},
  };

  function pass(name, details = {}) {
    console.log(`  ✅ [PASS] ${name}`);
    reviewReport.results.passed.push({ name, ...details });
  }

  try {
    const tabData = listData.find((t) => t.type === "page") || listData[0];
    const ws = new WebSocket(tabData.webSocketDebuggerUrl);
    await new Promise((res) => (ws.onopen = res));

    const client = new CDPClient(ws);
    await client.send("Page.enable");
    await client.send("DOM.enable");
    await client.send("Network.enable");
    await client.send("Network.setCacheDisabled", { cacheDisabled: true });
    await client.send("Performance.enable");

    async function setVp(width, height, dpr = 1, mobile = false) {
      await client.send("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: dpr,
        mobile,
      });
    }

    async function setupAndroidMobile(width, height, reducedMotion = false) {
      await client.send("Emulation.setUserAgentOverride", {
        userAgent:
          "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36",
        platform: "Linux armv81",
      });
      await client.send("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: 2.625,
        mobile: true,
      });
      await client.send("Emulation.setTouchEmulationEnabled", {
        enabled: true,
        maxTouchPoints: 5,
      });
      await client.send("Emulation.setEmulatedMedia", {
        media: "screen",
        features: [
          {
            name: "prefers-reduced-motion",
            value: reducedMotion ? "reduce" : "no-preference",
          },
        ],
      });
    }

    // =========================================================================
    // SUITE 1: ENVIRONMENTAL LANDSCAPE DOM & STYLE INVARIANTS
    // =========================================================================
    console.log(
      "\n[1/6] Verifying Environmental Landscape DOM & Style Invariants...",
    );
    await setVp(1440, 900);
    await isolateSession(client);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);

    const proLandscapeInfo = await client.eval(`(() => {
      const el = document.querySelector(".environmental-landscape--professional");
      if (!el) return null;
      const cs = window.getComputedStyle(el);
      return {
        exists: true,
        ariaHidden: el.getAttribute("aria-hidden"),
        pointerEvents: cs.pointerEvents,
        hasAtmosphere: !!el.querySelector(".env-pro__atmosphere"),
        hasGrid: !!el.querySelector(".env-pro__grid-layer"),
        hasContours: !!el.querySelector(".env-pro__contour-layer"),
        hasCalipers: !!el.querySelector(".env-pro__caliper-layer")
      };
    })()`);

    assert.ok(
      proLandscapeInfo,
      "Professional environmental landscape must exist",
    );
    assert.strictEqual(
      proLandscapeInfo.ariaHidden,
      "true",
      "Must have aria-hidden='true'",
    );
    assert.strictEqual(
      proLandscapeInfo.pointerEvents,
      "none",
      "Must have pointer-events: none",
    );
    assert.ok(
      proLandscapeInfo.hasGrid,
      "Must contain blueprint coordinate grid layer",
    );
    assert.ok(
      proLandscapeInfo.hasContours,
      "Must contain technical terrain contours layer",
    );
    pass("Professional environmental landscape contract verified", {
      proLandscapeInfo,
    });

    // Check Athlete landscape
    await client.send("Page.navigate", {
      url: "http://localhost:3000/basketball",
    });
    await delay(1000);

    const athLandscapeInfo = await client.eval(`(() => {
      const el = document.querySelector(".environmental-landscape--basketball");
      if (!el) return null;
      const cs = window.getComputedStyle(el);
      return {
        exists: true,
        ariaHidden: el.getAttribute("aria-hidden"),
        pointerEvents: cs.pointerEvents,
        hasAtmosphere: !!el.querySelector(".env-ath__atmosphere"),
        hasRafters: !!el.querySelector(".env-ath__rafter-layer"),
        hasCourt: !!el.querySelector(".env-ath__court-layer"),
        hasScoreboard: !!el.querySelector(".env-ath__scoreboard-layer")
      };
    })()`);

    assert.ok(athLandscapeInfo, "Athlete environmental landscape must exist");
    assert.strictEqual(
      athLandscapeInfo.ariaHidden,
      "true",
      "Must have aria-hidden='true'",
    );
    assert.strictEqual(
      athLandscapeInfo.pointerEvents,
      "none",
      "Must have pointer-events: none",
    );
    assert.ok(
      athLandscapeInfo.hasCourt,
      "Must contain FIBA court geometry layer",
    );
    assert.ok(
      athLandscapeInfo.hasScoreboard,
      "Must contain scoreboard telemetry layer",
    );
    pass("Athlete environmental landscape contract verified", {
      athLandscapeInfo,
    });

    // Verify Header HUD and telemetry cartridges
    const hudInfo = await client.eval(`(() => {
      const bar = document.querySelector(".world-navigation__bar");
      const tag = document.querySelector(".world-navigation__hud-tag");
      const telem = document.querySelector(".dt-telem-cell");
      return {
        barExists: !!bar,
        tagText: tag?.textContent?.trim(),
        telemExists: !!telem
      };
    })()`);
    assert.ok(hudInfo.barExists, "Header HUD bar must exist");
    assert.ok(hudInfo.tagText, "HUD registration tag must exist");
    assert.ok(hudInfo.telemExists, "Telemetry cartridge cells must exist");
    pass("Header HUD and UI hierarchy enhancements verified", { hudInfo });

    // =========================================================================
    // SUITE 2: CAPTURING TRIAL 2 SCREENSHOT EVIDENCE
    // =========================================================================
    console.log(
      "\n[2/6] Capturing Trial 2 Desktop & Mobile Visual Evidence...",
    );

    // Desktop Professional (1440x900)
    await setVp(1440, 900);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);
    await captureShot(client, "trial2_professional_desktop_1440.png");
    reviewReport.screenshots.push("trial2_professional_desktop_1440.png");

    // Desktop Athlete (1440x900)
    await client.send("Page.navigate", {
      url: "http://localhost:3000/basketball",
    });
    await delay(1000);
    await captureShot(client, "trial2_athlete_desktop_1440.png");
    reviewReport.screenshots.push("trial2_athlete_desktop_1440.png");

    // Mobile Professional (390x844)
    await setupAndroidMobile(390, 844);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);
    await captureShot(client, "trial2_professional_mobile_390.png");
    reviewReport.screenshots.push("trial2_professional_mobile_390.png");

    // Mobile Athlete (390x844)
    await client.send("Page.navigate", {
      url: "http://localhost:3000/basketball",
    });
    await delay(1000);
    await captureShot(client, "trial2_athlete_mobile_390.png");
    reviewReport.screenshots.push("trial2_athlete_mobile_390.png");
    pass("Desktop and mobile screenshots captured successfully");

    // =========================================================================
    // SUITE 3: DESKTOP WALKTHROUGH RECORDING
    // =========================================================================
    console.log(
      "\n[3/6] Recording Desktop Walkthrough (Parallax, HUD & Page Turn)...",
    );
    await setVp(1440, 900);
    await isolateSession(client);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);

    await recordSession(client, "trial2_desktop_walkthrough_1440", async () => {
      // 1. Showcase hero with landscape background
      await delay(500);

      // 2. Smoothly scroll down to showcase parallax movement
      for (let s = 1; s <= 8; s++) {
        await client.eval(
          `window.scrollTo({ top: ${s * 80}, behavior: 'instant' })`,
        );
        await delay(60);
      }
      await delay(400);

      // 3. Scroll smoothly back to top
      for (let s = 7; s >= 0; s--) {
        await client.eval(
          `window.scrollTo({ top: ${s * 80}, behavior: 'instant' })`,
        );
        await delay(50);
      }
      await delay(400);

      // 4. Click WorldSwitcher to trigger signature page turn to Basketball
      const switcher = await client.eval(`(() => {
        const btn = document.querySelector(".signature-flipbook .world-switcher");
        if (!btn) return null;
        const r = btn.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      })()`);
      assert.ok(switcher, "Switcher button exists");
      await clickElement(client, switcher.x, switcher.y);

      // 5. Await observable navigation and arrival
      await waitFor(async () => {
        const p = await client.eval("window.location.pathname");
        return p === "/basketball";
      }, "Navigation reaches /basketball");

      await waitFor(async () => {
        const ph = await client.eval(
          `document.querySelector(".signature-flipbook")?.getAttribute("data-phase")`,
        );
        return ph === "idle";
      }, "Arrival completes and returns to idle");

      await delay(800); // Showcase transformed athlete arena environment
    });
    reviewReport.recordings.push("trial2_desktop_walkthrough_1440.mp4");
    pass("Desktop walkthrough recorded: trial2_desktop_walkthrough_1440.mp4");

    // =========================================================================
    // SUITE 4: ANDROID MOBILE WALKTHROUGH RECORDING
    // =========================================================================
    console.log(
      "\n[4/6] Recording Android Mobile Walkthrough (Scroll & Touch Swipe)...",
    );
    await setupAndroidMobile(390, 844);
    await isolateSession(client);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);

    async function dispatchTouch(
      startX,
      startY,
      endX,
      endY,
      steps = 12,
      stepDelay = 20,
    ) {
      await client.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x: startX, y: startY, id: 1 }],
      });
      await delay(50);

      for (let i = 1; i <= steps; i++) {
        const cx = Math.round(startX + (endX - startX) * (i / steps));
        const cy = Math.round(startY + (endY - startY) * (i / steps));
        await client.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [{ x: cx, y: cy, id: 1 }],
        });
        await delay(stepDelay);
      }

      await client.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
    }

    await recordSession(client, "trial2_android_walkthrough_390", async () => {
      // 1. Initial view on mobile
      await delay(400);

      // 2. Vertical scroll down via touch
      await dispatchTouch(200, 600, 200, 250, 10, 25);
      await delay(500);

      // 3. Vertical scroll back up
      await dispatchTouch(200, 250, 200, 600, 10, 25);
      await delay(500);

      // 4. Central horizontal touch swipe from right to left (Pro -> Basketball)
      await dispatchTouch(
        Math.round(390 * 0.75),
        400,
        Math.round(390 * 0.15),
        400,
        14,
        25,
      );

      // 5. Await destination
      await waitFor(async () => {
        const p = await client.eval("window.location.pathname");
        return p === "/basketball";
      }, "Mobile swipe reaches /basketball");

      await waitFor(async () => {
        const ph = await client.eval(
          `document.querySelector(".signature-flipbook")?.getAttribute("data-phase")`,
        );
        return ph === "idle";
      }, "Mobile arrival settles to idle");

      await delay(600); // Showcase mobile athlete environment
    });
    reviewReport.recordings.push("trial2_android_walkthrough_390.mp4");
    pass("Android walkthrough recorded: trial2_android_walkthrough_390.mp4");

    // =========================================================================
    // SUITE 5: TRIAL 1 REGRESSION TESTS (CONTROLS, SWIPES, GESTURES)
    // =========================================================================
    console.log(
      "\n[5/6] Running Full Trial 1 Regression Suite (Controls, Swipes, Constraints)...",
    );

    // 5.1: Real Switch Control: Ath -> Pro
    await setVp(1440, 900);
    const switcherAth = await client.eval(`(() => {
      const btn = document.querySelector(".signature-flipbook .world-switcher");
      if (!btn) return null;
      const r = btn.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    })()`);
    assert.ok(switcherAth, "Athlete switcher button exists");
    await clickElement(client, switcherAth.x, switcherAth.y);
    await waitFor(async () => {
      return (await client.eval("window.location.pathname")) === "/";
    }, "Navigation returns to / on switcher click");
    pass("Real switch control: Ath -> Pro committed turn");

    // 5.2: Drag Cancellation & 240ms snapback
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);
    await client.send("Input.dispatchMouseEvent", {
      type: "mouseMoved",
      x: 950,
      y: 450,
    });
    await delay(40);
    await client.send("Input.dispatchMouseEvent", {
      type: "mousePressed",
      x: 950,
      y: 450,
      button: "left",
      clickCount: 1,
    });
    await delay(60);
    // Slow drag of only 40px (well below threshold)
    for (let i = 1; i <= 6; i++) {
      await client.send("Input.dispatchMouseEvent", {
        type: "mouseMoved",
        x: 950 - i * 6,
        y: 450,
        button: "left",
      });
      await delay(40);
    }
    await client.send("Input.dispatchMouseEvent", {
      type: "mouseReleased",
      x: 914,
      y: 450,
      button: "left",
      clickCount: 1,
    });
    await waitFor(async () => {
      const phase = await client.eval(
        `document.querySelector(".signature-flipbook")?.getAttribute("data-phase")`,
      );
      return phase === "idle";
    }, "Cancelled drag settles back to idle");
    const cancelledProgress = await client.eval(
      `document.querySelector(".signature-flipbook")?.style.getPropertyValue("--flip-progress")`,
    );
    assert.strictEqual(cancelledProgress, "0.0000");
    pass("Real slow cancelled drag & snapback verified");

    // 5.3: Reduced-Motion Mode Flat Crossfade
    await setupAndroidMobile(390, 844, true);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);
    await dispatchTouch(
      Math.round(390 * 0.72),
      400,
      Math.round(390 * 0.15),
      400,
    );
    await waitFor(async () => {
      return (await client.eval("window.location.pathname")) === "/basketball";
    }, "Reduced motion swipe reaches /basketball");
    const rmTransform = await client.eval(`(() => {
      const p = document.querySelector(".signature-flipbook__page");
      return p ? window.getComputedStyle(p).transform : "";
    })()`);
    assert.strictEqual(rmTransform, "none");
    pass("Reduced motion transition verified with flat crossfade");

    // 5.4: Keyboard Navigation Guard & Execution
    await setVp(1440, 900);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);
    await client.send("Input.dispatchKeyEvent", {
      type: "rawKeyDown",
      key: "ArrowLeft",
      code: "ArrowLeft",
    });
    await delay(50);
    await client.send("Input.dispatchKeyEvent", {
      type: "keyUp",
      key: "ArrowLeft",
      code: "ArrowLeft",
    });
    await waitFor(async () => {
      return (await client.eval("window.location.pathname")) === "/basketball";
    }, "ArrowLeft keypress navigates to /basketball");
    pass("Real keyboard navigation verified: ArrowLeft toggles to Basketball");

    // 5.5: Touch Swipes Across Viewports (390, 360, 320)
    for (const [w, h] of [
      [390, 844],
      [360, 772],
      [320, 568],
    ]) {
      await setupAndroidMobile(w, h, false);
      await client.send("Page.navigate", { url: "http://localhost:3000/" });
      await delay(800);

      // Central touch swipe
      await dispatchTouch(Math.round(w * 0.75), 350, Math.round(w * 0.15), 350);
      await waitFor(async () => {
        return (
          (await client.eval("window.location.pathname")) === "/basketball"
        );
      }, `Touch swipe at ${w}x${h} reaches /basketball`);
      pass(`Android touch swipe verified at ${w}x${h}`);
    }

    // 5.6: 22px Edge Exclusion Zone
    await setupAndroidMobile(390, 844, false);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(800);
    await dispatchTouch(10, 400, 120, 400, 6, 25);
    await delay(300);
    const edgePhase = await client.eval(
      `document.querySelector(".signature-flipbook")?.getAttribute("data-phase")`,
    );
    const edgePath = await client.eval("window.location.pathname");
    assert.strictEqual(edgePhase, "idle");
    assert.strictEqual(edgePath, "/");
    pass("Touches inside 22px browser edge exclusion zone are safely ignored");

    // 5.7: Zero Horizontal Overflow across All Viewports
    for (const [w, h] of [
      [320, 568],
      [360, 772],
      [390, 844],
      [768, 1024],
      [1024, 768],
      [1440, 900],
    ]) {
      await setVp(w, h);
      await client.send("Page.navigate", { url: "http://localhost:3000/" });
      await delay(600);
      const overflowPro = await client.eval(
        `document.documentElement.scrollWidth <= window.innerWidth`,
      );
      assert.ok(
        overflowPro,
        `Professional page must have zero overflow at ${w}x${h}`,
      );

      await client.send("Page.navigate", {
        url: "http://localhost:3000/basketball",
      });
      await delay(600);
      const overflowAth = await client.eval(
        `document.documentElement.scrollWidth <= window.innerWidth`,
      );
      assert.ok(
        overflowAth,
        `Athlete page must have zero overflow at ${w}x${h}`,
      );
    }
    pass(
      "Zero horizontal overflow verified across 320, 360, 390, 768, 1024, 1440",
    );

    // =========================================================================
    // SUITE 6: PERFORMANCE MEASUREMENT UNDER REAL TURN
    // =========================================================================
    console.log("\n[6/6] Measuring Performance & Frame Timing...");
    await setVp(1440, 900);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);

    const sw = await client.eval(`(() => {
      const btn = document.querySelector(".signature-flipbook .world-switcher");
      if (!btn) return null;
      const r = btn.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    })()`);
    await clickElement(client, sw.x, sw.y);

    // Record frame timings during turn
    const frameTimings = await client.eval(`new Promise((resolve) => {
      const deltas = [];
      let last = performance.now();
      function tick(now) {
        deltas.push(now - last);
        last = now;
        if (deltas.length < 35) {
          requestAnimationFrame(tick);
        } else {
          resolve(deltas.slice(1));
        }
      }
      requestAnimationFrame(tick);
    })`);

    const avgFrame =
      frameTimings.reduce((a, b) => a + b, 0) / frameTimings.length;
    const janks = frameTimings.filter((d) => d > 25).length;
    reviewReport.performanceMetrics = {
      sampleCount: frameTimings.length,
      avgFrameMs: parseFloat(avgFrame.toFixed(2)),
      estimatedFps: Math.round(1000 / avgFrame),
      janksOver25ms: janks,
    };
    console.log(
      "  Measured Performance:",
      JSON.stringify(reviewReport.performanceMetrics, null, 2),
    );
    assert.ok(
      avgFrame <= 22,
      `Average frame duration must be <= 22ms (~45-60fps), got ${avgFrame.toFixed(2)}ms`,
    );
    pass("Performance metrics confirmed under confirmed real turn");

    // =========================================================================
    // SAVE FINAL SUMMARY REPORT
    // =========================================================================
    const summaryJson = JSON.stringify(reviewReport, null, 2) + "\n";
    writeFileSync(join(SCRATCH_DIR, "trial2-review-summary.json"), summaryJson);
    writeFileSync(
      join(EVIDENCE_ARTIFACT_DIR, "trial2-review-summary.json"),
      summaryJson,
    );
    writeFileSync(join(EVIDENCE_REPO_DIR, "review-summary.json"), summaryJson);
    writeFileSync(
      join(EVIDENCE_REPO_DIR, "trial2-review-summary.json"),
      summaryJson,
    );

    console.log(
      "\n================================================================================",
    );
    console.log(
      `🎉 TRIAL 2 VERIFICATION COMPLETE: ALL ${reviewReport.results.passed.length} CHECKS PASSED!`,
    );
    console.log(`   Screenshots: ${reviewReport.screenshots.length} PNG files`);
    console.log(`   Recordings: ${reviewReport.recordings.length} MP4 files`);
    console.log(
      "================================================================================",
    );
  } finally {
    chromeProcess.kill();
  }
}

main().catch((err) => {
  console.error("\n💥 FATAL TRIAL 2 VERIFICATION ERROR:", err);
  process.exit(1);
});
