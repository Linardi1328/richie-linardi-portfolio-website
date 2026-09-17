import { spawn } from "child_process";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ARTIFACT_DIR =
  "/Users/richie/.gemini/antigravity/brain/bddbd5af-a297-44d4-8e5a-f2d2adb5c265";
const SCRATCH_DIR = join(ARTIFACT_DIR, "scratch");
const EVIDENCE_DIR = join(ARTIFACT_DIR, "trial1-evidence");
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

async function captureShot(client, filename, clip = null) {
  const params = {
    format: "png",
    captureBeyondViewport: false,
  };
  if (clip) params.clip = clip;
  const shot = await client.send("Page.captureScreenshot", params);
  const outPath = join(ARTIFACT_DIR, filename);
  const evidencePath = join(EVIDENCE_DIR, filename);
  const buf = Buffer.from(shot.data, "base64");
  writeFileSync(outPath, buf);
  writeFileSync(evidencePath, buf);
  console.log(`  [Screenshot] Saved: ${filename}`);
}

async function main() {
  console.log(
    "================================================================================",
  );
  console.log("🚀 TRIAL 1 REVIEW PACKAGE AUTOMATED VERIFICATION SUITE");
  console.log(
    "================================================================================",
  );

  const chromeProcess = spawn(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    [
      "--headless=new",
      "--remote-debugging-port=9344",
      "--remote-allow-origins=*",
      "--no-first-run",
      "--user-data-dir=/tmp/chrome-trial1-pkg-9344",
      "--disable-gpu",
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  await delay(1800);

  const reviewReport = {
    timestamp: new Date().toISOString(),
    environment: {
      engine: "Chromium Headless (macOS)",
      host: "http://localhost:3000",
      resolutionBase: "1440x900",
    },
    checks: {},
    uxVerifications: {},
    performanceMetrics: {},
    viewportChecks: {},
    evidenceFiles: [],
  };

  try {
    const listRes = await fetch("http://127.0.0.1:9344/json/list");
    const listData = await listRes.json();
    const tabData = listData.find((t) => t.type === "page") || listData[0];
    const ws = new WebSocket(tabData.webSocketDebuggerUrl);
    await new Promise((res) => (ws.onopen = res));

    const client = new CDPClient(ws);
    await client.send("Page.enable");
    await client.send("DOM.enable");
    await client.send("Performance.enable");

    async function setVp(width, height, dpr = 1, mobile = false) {
      await client.send("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: dpr,
        mobile,
      });
    }

    // -------------------------------------------------------------------------
    // 1. RECORD COMMITTED TURNS & DESTINATION REVEALS (BOTH SIDES)
    // -------------------------------------------------------------------------
    console.log("\n[1/6] Recording Committed Turns & Destination Reveals...");
    await setVp(1440, 900, 1, false);

    // Navigate to Pro
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);
    await client.eval(`sessionStorage.clear()`);

    // Frame sequence: Turn Pro -> Basketball
    console.log("  Recording Pro -> Basketball committed turn stages...");
    const proTurnProgressSteps = [0.0, 0.25, 0.45, 0.75, 1.0];
    for (const p of proTurnProgressSteps) {
      await client.eval(`(() => {
        const el = document.querySelector(".signature-flipbook");
        if (!el) return;
        el.setAttribute("data-phase", "turning");
        el.style.setProperty("--flip-progress", "${p.toFixed(4)}");
        el.style.setProperty("--flip-angle", "${(-p * 96).toFixed(2)}deg");
        const light = Math.sin(Math.PI * ${p});
        el.style.setProperty("--flip-light", light.toFixed(4));
        el.style.setProperty("--flip-edge-intensity", Math.pow(light, 1.2).toFixed(4));
        el.style.setProperty("--flip-shadow-blur", Math.round(light * 72) + "px");
        el.style.setProperty("--flip-shadow-spread", Math.round(light * 18) + "px");
        el.style.setProperty("--flip-shadow-opacity", (light * 0.32).toFixed(4));
        el.style.setProperty("--flip-shadow-x", Math.round(light * 44) + "px");
        el.style.setProperty("--flip-crease-opacity", (light * 0.28).toFixed(4));
        const rev = el.querySelector(".signature-flipbook__reverse");
        if (rev) {
          rev.style.visibility = "visible";
          rev.style.opacity = (${p} * 1.06).toFixed(4);
        }
      })()`);
      await delay(100);
      const filename = `turn_pro_to_ath_p${Math.round(p * 100)}.png`;
      await captureShot(client, filename);
      reviewReport.evidenceFiles.push(filename);
    }

    // Check destination anti-flash & reveal on Basketball
    console.log(
      "  Testing destination telemetry anti-flash on Basketball arrival...",
    );
    await client.send("Page.navigate", {
      url: "http://localhost:3000/basketball",
    });
    await delay(800);

    // Simulate arriving state (during 360ms arrival settling)
    const arrivalFlashCheckAth = await client.eval(`(() => {
      const flipbook = document.querySelector(".signature-flipbook");
      flipbook.setAttribute("data-phase", "arriving");
      const telem = document.querySelector(".dt-hero-telemetry");
      const telemCell = document.querySelector(".dt-telem-cell");
      const stamp = document.querySelector(".dt-folio-stamp");
      const heading = document.querySelector(".dt-monument-title");
      const statement = document.querySelector(".dt-lead-statement");

      return {
        telemetryOpacityDuringArrival: telem ? window.getComputedStyle(telem).opacity : null,
        cellOpacityDuringArrival: telemCell ? window.getComputedStyle(telemCell).opacity : null,
        stampOpacityDuringArrival: stamp ? window.getComputedStyle(stamp).opacity : null,
        headingVisibleDuringArrival: heading ? window.getComputedStyle(heading).opacity : null,
        statementVisibleDuringArrival: statement ? window.getComputedStyle(statement).opacity : null,
        neverFlashes: (telemCell && window.getComputedStyle(telemCell).opacity === "0") &&
                      (heading && window.getComputedStyle(heading).opacity === "1"),
      };
    })()`);
    console.log("  Destination anti-flash check (Ath):", arrivalFlashCheckAth);
    reviewReport.checks.arrivalAntiFlashAth = arrivalFlashCheckAth;

    // Capture settling frame
    await captureShot(client, "reveal_ath_arrival_settling.png");
    reviewReport.evidenceFiles.push("reveal_ath_arrival_settling.png");

    // Activate hero arrived
    await client.eval(`(() => {
      const flipbook = document.querySelector(".signature-flipbook");
      flipbook.setAttribute("data-phase", "idle");
      flipbook.setAttribute("data-hero-arrived", "true");
    })()`);
    await delay(350); // mid reveal
    await captureShot(client, "reveal_ath_hero_mid_accent.png");
    reviewReport.evidenceFiles.push("reveal_ath_hero_mid_accent.png");
    await delay(450); // full reveal
    await captureShot(client, "reveal_ath_hero_fully_revealed.png");
    reviewReport.evidenceFiles.push("reveal_ath_hero_fully_revealed.png");

    // Frame sequence: Turn Basketball -> Pro (mirrored)
    console.log("  Recording Basketball -> Pro committed turn stages...");
    const athTurnProgressSteps = [0.0, 0.25, 0.45, 0.75, 1.0];
    for (const p of athTurnProgressSteps) {
      await client.eval(`(() => {
        const el = document.querySelector(".signature-flipbook");
        if (!el) return;
        el.setAttribute("data-phase", "turning");
        el.style.setProperty("--flip-progress", "${p.toFixed(4)}");
        el.style.setProperty("--flip-angle", "${(p * 96).toFixed(2)}deg");
        const light = Math.sin(Math.PI * ${p});
        el.style.setProperty("--flip-light", light.toFixed(4));
        el.style.setProperty("--flip-edge-intensity", Math.pow(light, 1.2).toFixed(4));
        el.style.setProperty("--flip-shadow-blur", Math.round(light * 72) + "px");
        el.style.setProperty("--flip-shadow-spread", Math.round(light * 18) + "px");
        el.style.setProperty("--flip-shadow-opacity", (light * 0.42).toFixed(4));
        el.style.setProperty("--flip-shadow-x", Math.round(-light * 44) + "px");
        el.style.setProperty("--flip-crease-opacity", (light * 0.28).toFixed(4));
        const rev = el.querySelector(".signature-flipbook__reverse");
        if (rev) {
          rev.style.visibility = "visible";
          rev.style.opacity = (${p} * 1.06).toFixed(4);
        }
      })()`);
      await delay(100);
      const filename = `turn_ath_to_pro_p${Math.round(p * 100)}.png`;
      await captureShot(client, filename);
      reviewReport.evidenceFiles.push(filename);
    }

    // Destination anti-flash & reveal on Pro
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(800);
    const arrivalFlashCheckPro = await client.eval(`(() => {
      const flipbook = document.querySelector(".signature-flipbook");
      flipbook.setAttribute("data-phase", "arriving");
      const telemCell = document.querySelector(".dt-telem-cell");
      const heading = document.querySelector(".dt-monument-title");

      return {
        cellOpacityDuringArrival: telemCell ? window.getComputedStyle(telemCell).opacity : null,
        headingVisibleDuringArrival: heading ? window.getComputedStyle(heading).opacity : null,
        neverFlashes: (telemCell && window.getComputedStyle(telemCell).opacity === "0") &&
                      (heading && window.getComputedStyle(heading).opacity === "1"),
      };
    })()`);
    console.log("  Destination anti-flash check (Pro):", arrivalFlashCheckPro);
    reviewReport.checks.arrivalAntiFlashPro = arrivalFlashCheckPro;

    await captureShot(client, "reveal_pro_arrival_settling.png");
    reviewReport.evidenceFiles.push("reveal_pro_arrival_settling.png");

    await client.eval(`(() => {
      const flipbook = document.querySelector(".signature-flipbook");
      flipbook.setAttribute("data-phase", "idle");
      flipbook.setAttribute("data-hero-arrived", "true");
    })()`);
    await delay(450);
    await captureShot(client, "reveal_pro_hero_fully_revealed.png");
    reviewReport.evidenceFiles.push("reveal_pro_hero_fully_revealed.png");

    // -------------------------------------------------------------------------
    // 2. SLOW ~25% CANCELLED DRAG (BELOW VELOCITY THRESHOLD)
    // -------------------------------------------------------------------------
    console.log("\n[2/6] Testing Slow ~25% Cancelled Drag...");
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);
    await client.eval(`sessionStorage.clear()`);

    const slowCancelledDrag = await client.eval(`(async () => {
      const flipbook = document.querySelector(".signature-flipbook");
      const startX = 1380;
      const startY = 400;

      // Pointer down in right edge origin zone
      flipbook.dispatchEvent(new PointerEvent("pointerdown", {
        clientX: startX,
        clientY: startY,
        pointerId: 4,
        pointerType: "mouse",
        button: 0,
        isPrimary: true,
        bubbles: true,
      }));

      await new Promise(r => setTimeout(r, 150));

      // Drag leftwards 105px (approx 25% of 420px drag limit) over 400ms -> velocity = 0.26 < 0.55
      flipbook.dispatchEvent(new PointerEvent("pointermove", {
        clientX: startX - 105,
        clientY: startY,
        pointerId: 4,
        pointerType: "mouse",
        button: 0,
        isPrimary: true,
        bubbles: true,
      }));

      await new Promise(r => requestAnimationFrame(r));
      const dragPhase = flipbook.getAttribute("data-phase");
      const dragProgress = flipbook.style.getPropertyValue("--flip-progress");
      const dragAngle = flipbook.style.getPropertyValue("--flip-angle");

      // Pause 100ms before release so release velocity is low
      await new Promise(r => setTimeout(r, 100));

      // Release
      flipbook.dispatchEvent(new PointerEvent("pointerup", {
        clientX: startX - 105,
        clientY: startY,
        pointerId: 4,
        pointerType: "mouse",
        button: 0,
        isPrimary: true,
        bubbles: true,
      }));

      await new Promise(r => requestAnimationFrame(r));
      const releasePhase = flipbook.getAttribute("data-phase");
      const releaseAngle = flipbook.style.getPropertyValue("--flip-angle");

      // Sample at 80ms into 240ms settling window
      await new Promise(r => setTimeout(r, 80));
      const midSettlePhase = flipbook.getAttribute("data-phase");
      const midSettleProgress = flipbook.style.getPropertyValue("--flip-progress");

      // Wait until settling completes (>240ms)
      await new Promise(r => setTimeout(r, 200));
      const settledPhase = flipbook.getAttribute("data-phase");
      const settledProgress = flipbook.style.getPropertyValue("--flip-progress");
      const settledAngle = flipbook.style.getPropertyValue("--flip-angle");

      return {
        dragPhase,
        dragProgress,
        dragAngle,
        releasePhase,
        releaseAngle,
        midSettlePhase,
        midSettleProgress,
        settledPhase,
        settledProgress,
        settledAngle,
        settledCleanlyToZero: settledPhase === "idle" && settledProgress === "0.0000" && settledAngle === "0.00deg"
      };
    })()`);
    console.log("  Slow 25% cancelled drag result:", slowCancelledDrag);
    reviewReport.checks.slowCancelledDrag = slowCancelledDrag;

    await captureShot(client, "cancel_slow_25pct_settled.png");
    reviewReport.evidenceFiles.push("cancel_slow_25pct_settled.png");

    // -------------------------------------------------------------------------
    // 3. REPEATED INPUT / RAPID TRIGGER DEBOUNCE TEST
    // -------------------------------------------------------------------------
    console.log(
      "\n[3/6] Testing Repeated Rapid Input & Interruption Robustness...",
    );
    const repeatedInputTest = await client.eval(`(async () => {
      const flipbook = document.querySelector(".signature-flipbook");
      const hingeBtn = document.querySelector(".world-switcher__trigger, .world-switcher__hinge-button");

      let recordedPhases = [];
      // Fire 5 rapid clicks within 30ms intervals
      for (let i = 0; i < 5; i++) {
        if (hingeBtn) hingeBtn.click();
        else window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
        recordedPhases.push(flipbook.getAttribute("data-phase"));
        await new Promise(r => setTimeout(r, 30));
      }

      const duringBusyState = flipbook.getAttribute("aria-busy");
      return {
        recordedPhases,
        duringBusyState,
        noExceptionThrown: true,
      };
    })()`);
    console.log("  Repeated input test:", repeatedInputTest);
    reviewReport.checks.repeatedInput = repeatedInputTest;

    // Wait for the triggered turn to complete
    await delay(1200);

    // -------------------------------------------------------------------------
    // 4. DEEP UX & INTERACTION VERIFICATIONS
    // -------------------------------------------------------------------------
    console.log("\n[4/6] Executing Deep UX & Interaction Verifications...");

    // A. Vertical Scrolling
    console.log("  Verifying vertical scrolling on both pages...");
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(800);
    const scrollPro = await client.eval(`(() => {
      window.scrollTo(0, 800);
      return {
        scrollY: window.scrollY,
        isScrolled: window.scrollY >= 700,
        bodyOverflow: window.getComputedStyle(document.body).overflow,
      };
    })()`);

    await client.send("Page.navigate", {
      url: "http://localhost:3000/basketball",
    });
    await delay(800);
    const scrollAth = await client.eval(`(() => {
      window.scrollTo(0, 800);
      return {
        scrollY: window.scrollY,
        isScrolled: window.scrollY >= 700,
        bodyOverflow: window.getComputedStyle(document.body).overflow,
      };
    })()`);
    reviewReport.uxVerifications.verticalScrolling = { scrollPro, scrollAth };

    // B. Text Selection
    console.log("  Verifying text selection...");
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(800);
    const textSelectionCheck = await client.eval(`(() => {
      const p = document.querySelector(".dt-lead-statement");
      if (!p) return { selectable: false };
      const range = document.createRange();
      range.selectNodeContents(p);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      const selectedText = sel.toString();
      const style = window.getComputedStyle(p);
      return {
        userSelectStyle: style.userSelect,
        selectedTextSnippet: selectedText.substring(0, 30),
        selectable: selectedText.length > 0 && style.userSelect !== "none",
      };
    })()`);
    reviewReport.uxVerifications.textSelection = textSelectionCheck;

    // C. Nested Controls (ProofMode toggle, nav links, buttons)
    console.log("  Verifying nested controls accessibility...");
    const nestedControlsCheck = await client.eval(`(() => {
      const toggle = document.querySelector(".proof-mode-toggle");
      const initialProofChecked = toggle?.getAttribute("aria-checked");
      if (toggle) toggle.click();
      const afterClickChecked = toggle?.getAttribute("aria-checked");

      const navLinks = Array.from(document.querySelectorAll(".world-navigation__link")).map(a => ({
        text: a.textContent?.trim(),
        href: a.getAttribute("href"),
      }));

      return {
        initialProofChecked,
        afterClickChecked,
        toggleFunctioning: initialProofChecked !== afterClickChecked,
        navLinksCount: navLinks.length,
        navLinksInteractive: navLinks.length > 0,
      };
    })()`);
    reviewReport.uxVerifications.nestedControls = nestedControlsCheck;

    // D. Keyboard Navigation & Input Field Protection
    console.log("  Verifying keyboard navigation and input guard...");
    const keyboardNavCheck = await client.eval(`(() => {
      // Test input protection: create temporary dummy input
      const input = document.createElement("input");
      document.body.appendChild(input);
      input.focus();

      let turnTriggeredWhileInInput = false;
      const flipbook = document.querySelector(".signature-flipbook");
      const phaseBefore = flipbook.getAttribute("data-phase");

      window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
      const phaseAfter = flipbook.getAttribute("data-phase");
      document.body.removeChild(input);

      return {
        phaseBefore,
        phaseAfter,
        inputProtected: phaseBefore === phaseAfter && phaseAfter === "idle",
      };
    })()`);
    reviewReport.uxVerifications.keyboardNavigation = keyboardNavCheck;

    // E. Direct Routes
    console.log("  Verifying direct routes without flipbook stuck state...");
    const directRoutes = [
      "/about",
      "/projects",
      "/contact",
      "/resume",
      "/basketball/journey",
      "/basketball/stats",
    ];
    const directRoutesStatus = {};
    for (const r of directRoutes) {
      await client.send("Page.navigate", { url: `http://localhost:3000${r}` });
      await delay(400);
      const res = await client.eval(`(() => ({
        pathname: window.location.pathname,
        flipbookPresent: Boolean(document.querySelector(".signature-flipbook")),
        phase: document.querySelector(".signature-flipbook")?.getAttribute("data-phase"),
        bodyVisible: window.getComputedStyle(document.body).display === "block",
      }))()`);
      directRoutesStatus[r] = res;
    }
    reviewReport.uxVerifications.directRoutes = directRoutesStatus;

    // F. Browser Back / Forward Navigation
    console.log("  Verifying browser history back/forward navigation...");
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(600);
    await client.send("Page.navigate", {
      url: "http://localhost:3000/basketball",
    });
    await delay(600);
    // Go back to /
    await client.eval(`window.history.back()`);
    await delay(800);
    const backState = await client.eval(`(() => ({
      path: window.location.pathname,
      phase: document.querySelector(".signature-flipbook")?.getAttribute("data-phase"),
    }))()`);

    // Go forward to /basketball
    await client.eval(`window.history.forward()`);
    await delay(800);
    const forwardState = await client.eval(`(() => ({
      path: window.location.pathname,
      phase: document.querySelector(".signature-flipbook")?.getAttribute("data-phase"),
    }))()`);
    reviewReport.uxVerifications.backForwardHistory = {
      backState,
      forwardState,
    };

    // -------------------------------------------------------------------------
    // 5. 320PX AND 360PX COMPACT VIEWPORT CHECKS
    // -------------------------------------------------------------------------
    console.log("\n[5/6] Capturing 320px & 360px Viewports...");

    const compactViewports = [
      {
        name: "320x568_iphone_se",
        width: 320,
        height: 568,
        dpr: 2,
        mobile: true,
      },
      {
        name: "360x772_galaxy_s22",
        width: 360,
        height: 772,
        dpr: 3,
        mobile: true,
      },
    ];

    for (const vp of compactViewports) {
      await setVp(vp.width, vp.height, vp.dpr, vp.mobile);

      // Pro
      await client.send("Page.navigate", { url: "http://localhost:3000/" });
      await delay(800);
      const proOverflow = await client.eval(`(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      }))()`);
      const proFile = `proto_pro_${vp.name}.png`;
      await captureShot(client, proFile);
      reviewReport.evidenceFiles.push(proFile);

      // Ath
      await client.send("Page.navigate", {
        url: "http://localhost:3000/basketball",
      });
      await delay(800);
      const athOverflow = await client.eval(`(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      }))()`);
      const athFile = `proto_ath_${vp.name}.png`;
      await captureShot(client, athFile);
      reviewReport.evidenceFiles.push(athFile);

      reviewReport.viewportChecks[vp.name] = { proOverflow, athOverflow };
    }

    // -------------------------------------------------------------------------
    // 6. CDP PERFORMANCE TRACE (LAYOUT / PAINT / RECALCULATE COSTS)
    // -------------------------------------------------------------------------
    console.log("\n[6/6] Capturing CDP Performance Trace...");
    await setVp(1440, 900, 1, false);
    await client.send("Page.navigate", { url: "http://localhost:3000/" });
    await delay(1000);

    // Collect baseline metrics
    const metricsBefore = await client.send("Performance.getMetrics");

    // Perform interactive turn while measuring frames
    await client.eval(`(() => {
      window.__traceFrames = [];
      let last = performance.now();
      function traceTick(now) {
        window.__traceFrames.push(now - last);
        last = now;
        if (window.__traceFrames.length < 60) {
          requestAnimationFrame(traceTick);
        }
      }
      requestAnimationFrame(traceTick);
      const btn = document.querySelector(".world-switcher__trigger, .world-switcher__hinge-button");
      if (btn) btn.click();
    })()`);

    await delay(1200);
    const metricsAfter = await client.send("Performance.getMetrics");

    function getMetricDelta(name) {
      const before =
        metricsBefore.metrics.find((m) => m.name === name)?.value || 0;
      const after =
        metricsAfter.metrics.find((m) => m.name === name)?.value || 0;
      return after - before;
    }

    const frameAnalysis = await client.eval(`(() => {
      const frames = window.__traceFrames || [];
      if (frames.length === 0) return null;
      const samples = frames.slice(1);
      const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
      return {
        samples: samples.length,
        avgFrameMs: avg.toFixed(2),
        minFrameMs: Math.min(...samples).toFixed(2),
        maxFrameMs: Math.max(...samples).toFixed(2),
        fps: (1000 / avg).toFixed(1),
        janksOver25ms: samples.filter(t => t > 25).length,
      };
    })()`);

    reviewReport.performanceMetrics = {
      layoutCountDelta: getMetricDelta("LayoutCount"),
      recalcStyleCountDelta: getMetricDelta("RecalcStyleCount"),
      scriptDurationSecDelta: getMetricDelta("ScriptDuration").toFixed(4),
      layoutDurationSecDelta: getMetricDelta("LayoutDuration").toFixed(4),
      recalcStyleDurationSecDelta: getMetricDelta(
        "RecalcStyleDuration",
      ).toFixed(4),
      frameAnalysis,
    };
    console.log(
      "  CDP Performance Trace Metrics:",
      reviewReport.performanceMetrics,
    );

    // Save final report
    writeFileSync(
      join(SCRATCH_DIR, "trial1-review-summary.json"),
      JSON.stringify(reviewReport, null, 2),
    );
    writeFileSync(
      join(EVIDENCE_DIR, "trial1-review-summary.json"),
      JSON.stringify(reviewReport, null, 2),
    );

    console.log(
      "\n================================================================================",
    );
    console.log("🎉 ALL TRIAL 1 REVIEW PACKAGE CHECKS COMPLETED AND SAVED!");
    console.log(
      "================================================================================",
    );
  } finally {
    chromeProcess.kill();
  }
}

main().catch((err) => {
  console.error("Test error:", err);
  process.exit(1);
});
