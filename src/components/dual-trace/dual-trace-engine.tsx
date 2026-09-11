"use client";

import { useEffect, useRef, useState } from "react";
import type { PortfolioWorld } from "@/data/world-navigation";
import { useProofMode } from "./proof-mode-context";

interface DualTraceEngineProps {
  world: PortfolioWorld;
}

interface AnchorPoint {
  x: number;
  y: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export function DualTraceEngine({ world }: DualTraceEngineProps) {
  const { isProofMode } = useProofMode();
  const containerRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 1440,
    height: 3200,
  });

  const [anchors, setAnchors] = useState<Record<string, AnchorPoint>>({});
  const [activeChapterId, setActiveChapterId] =
    useState<string>("chapter-origin");
  const [activeSegments, setActiveSegments] = useState<Set<string>>(
    new Set(["origin"]),
  );

  const isPro = world === "professional";
  const isMobile = dimensions.width < 768;

  // Batch anchor measurements and handle ResizeObserver / font readiness
  useEffect(() => {
    let rafId: number | null = null;

    const measureAnchors = () => {
      const pageEl = containerRef.current?.closest(
        ".dual-trace-page",
      ) as HTMLElement | null;
      if (!pageEl) return;

      const pageRect = pageEl.getBoundingClientRect();
      const w = Math.round(pageRect.width);
      const h = Math.round(pageRect.height);
      if (w === 0 || h === 0) return;

      const elements = pageEl.querySelectorAll<HTMLElement>(
        "[data-trace-in], [data-trace-node], [data-trace-out]",
      );

      const map: Record<string, AnchorPoint> = {};

      elements.forEach((el) => {
        const r = el.getBoundingClientRect();
        const name =
          el.getAttribute("data-trace-node") ||
          el.getAttribute("data-trace-in") ||
          el.getAttribute("data-trace-out");
        if (!name) return;

        const left = Math.round(r.left - pageRect.left);
        const top = Math.round(r.top - pageRect.top);
        const width = Math.round(r.width);
        const height = Math.round(r.height);

        map[name] = {
          x: left + Math.round(width / 2),
          y: top + Math.round(height / 2),
          left,
          top,
          right: left + width,
          bottom: top + height,
          width,
          height,
        };
      });

      setDimensions({ width: w, height: h });
      setAnchors(map);
    };

    const scheduleMeasure = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        measureAnchors();
      });
    };

    // Initial measurement
    scheduleMeasure();

    // ResizeObserver on the page container
    const pageEl = containerRef.current?.closest(".dual-trace-page");
    let resizeObs: ResizeObserver | null = null;
    if (pageEl && typeof ResizeObserver !== "undefined") {
      resizeObs = new ResizeObserver(() => {
        scheduleMeasure();
      });
      resizeObs.observe(pageEl);
    }

    // Viewport resize
    window.addEventListener("resize", scheduleMeasure);

    // Font readiness
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(scheduleMeasure);
    }

    // Spine carriage synchronization event
    const handleChapterChange = (e: Event) => {
      const ce = e as CustomEvent<{ chapterIndex: number; chapterId: string }>;
      if (ce.detail?.chapterId) {
        setActiveChapterId(ce.detail.chapterId);
      }
    };
    window.addEventListener("rbl-spine-chapter", handleChapterChange);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (resizeObs) resizeObs.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      window.removeEventListener("rbl-spine-chapter", handleChapterChange);
    };
  }, []);

  // IntersectionObserver for active chapters (resilient threshold: 0)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("chapter-", "");
            setActiveSegments((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0,
      },
    );

    const chapters = ["origin", "systems", "experience", "evidence"];
    chapters.forEach((c) => {
      const el = document.getElementById(`chapter-${c}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const w = dimensions.width;
  const h = dimensions.height;

  // Build responsive paths honoring the Trace Composition Law: CONNECT, FRAME, UNDERLINE, PROVE
  const spineOriginY =
    anchors["hero-spine-entry"]?.top != null
      ? anchors["hero-spine-entry"].top + 40
      : 120;

  // PROFESSIONAL PATHS
  const proHeroExit = anchors["hero-exit"] || {
    x: 70,
    y: 750,
    left: 70,
    top: 750,
  };
  const proSystemsEntry = anchors["systems-entry"] || {
    x: 70,
    y: 850,
    left: 70,
    top: 850,
  };
  const proSystemsExit = anchors["systems-exit"] || {
    x: 70,
    y: 1800,
    left: 70,
    top: 1800,
  };
  const proBridgeEntry = anchors["bridge-entry"] || {
    x: 70,
    y: 1900,
    left: 70,
    top: 1900,
  };
  const proBridgeExit = anchors["bridge-exit"] || {
    x: 70,
    y: 2400,
    left: 70,
    top: 2400,
  };
  const proTerminalExit = anchors["terminal-exit"] || {
    x: w,
    y: h - 100,
    left: w,
    top: h - 100,
  };

  const proPathSeg1 = isMobile
    ? `M ${w} ${spineOriginY} L ${anchors["rbl-monument"]?.right || w - 24} ${spineOriginY} L ${anchors["rbl-monument"]?.right || w - 24} ${anchors["pro-tags"]?.bottom || 240} L ${anchors["rbl-monument"]?.left || 20} ${anchors["pro-tags"]?.bottom || 240} L ${anchors["rbl-monument"]?.left || 20} ${proHeroExit.y}`
    : `M ${w} ${spineOriginY} L ${anchors["rbl-l"]?.right != null ? anchors["rbl-l"].right + 40 : 680} ${spineOriginY} L ${anchors["rbl-l"]?.right != null ? anchors["rbl-l"].right + 40 : 680} ${anchors["rbl-l"]?.y || 320} L ${anchors["rbl-l"]?.x || 540} ${anchors["rbl-l"]?.y || 320} L ${anchors["rbl-b"]?.x || 380} ${anchors["rbl-b"]?.y || 320} L ${anchors["rbl-r"]?.x || 200} ${anchors["rbl-r"]?.top != null ? anchors["rbl-r"].top + 25 : 240} L ${anchors["rbl-r"]?.left || 70} ${anchors["pro-tags"]?.bottom != null ? anchors["pro-tags"].bottom + 20 : 440} L ${anchors["pro-tags"]?.right != null ? anchors["pro-tags"].right + 30 : 500} ${anchors["pro-tags"]?.bottom != null ? anchors["pro-tags"].bottom + 20 : 440} L ${anchors["telem-0"]?.x || 120} ${anchors["telem-0"]?.top != null ? anchors["telem-0"].top - 18 : 550} L ${anchors["telem-2"]?.right || 680} ${anchors["telem-0"]?.top != null ? anchors["telem-0"].top - 18 : 550} L ${proHeroExit.x} ${proHeroExit.y}`;

  const proPathSeg2 = isMobile
    ? `M ${proHeroExit.x} ${proHeroExit.y} L ${proSystemsEntry.left} ${proSystemsEntry.top} L ${anchors["featured-plate"]?.left || 20} ${anchors["featured-plate"]?.top || 900} L ${anchors["featured-plate"]?.left || 20} ${anchors["featured-plate"]?.bottom || 1400} L ${proSystemsExit.x} ${proSystemsExit.y}`
    : `M ${proHeroExit.x} ${proHeroExit.y} L ${proSystemsEntry.left} ${proSystemsEntry.top + 40} L ${anchors["featured-plate"]?.left || 70} ${anchors["featured-plate"]?.top != null ? anchors["featured-plate"].top + 35 : 950} L ${anchors["featured-plate"]?.right || w - 70} ${anchors["featured-plate"]?.top != null ? anchors["featured-plate"].top + 35 : 950} L ${anchors["featured-plate"]?.right || w - 70} ${anchors["featured-plate"]?.bottom || 1550} L ${anchors["supporting-catalogue"]?.left || 70} ${anchors["featured-plate"]?.bottom || 1550} L ${proSystemsExit.x} ${proSystemsExit.y}`;

  const proPathSeg3 = isMobile
    ? `M ${proSystemsExit.x} ${proSystemsExit.y} L ${proBridgeEntry.left} ${proBridgeEntry.top} L ${anchors["bridge-systems"]?.left || 20} ${anchors["bridge-systems"]?.y || 2000} L ${anchors["bridge-court"]?.left || 20} ${anchors["bridge-court"]?.y || 2250} L ${proBridgeExit.x} ${proBridgeExit.y}`
    : `M ${proSystemsExit.x} ${proSystemsExit.y} L ${proBridgeEntry.left} ${proBridgeEntry.top + 40} L ${anchors["bridge-systems"]?.left || 70} ${anchors["bridge-spine"]?.y || 2150} L ${anchors["bridge-spine"]?.x || w / 2} ${anchors["bridge-spine"]?.y || 2150} L ${anchors["bridge-court"]?.right || w - 70} ${anchors["bridge-spine"]?.y || 2150} L ${proBridgeExit.x} ${proBridgeExit.y}`;

  const proPathSeg4 = isMobile
    ? `M ${proBridgeExit.x} ${proBridgeExit.y} L ${anchors["terminal-box"]?.left || 20} ${anchors["terminal-box"]?.top || 2500} L ${anchors["terminal-cta"]?.left || 20} ${anchors["terminal-cta"]?.y || 2700} L ${w} ${proTerminalExit.y}`
    : `M ${proBridgeExit.x} ${proBridgeExit.y} L ${anchors["terminal-box"]?.left || 70} ${anchors["terminal-box"]?.top != null ? anchors["terminal-box"].top + 35 : 2600} L ${anchors["terminal-box"]?.right || w - 70} ${anchors["terminal-box"]?.top != null ? anchors["terminal-box"].top + 35 : 2600} L ${anchors["terminal-cta"]?.right || w - 70} ${anchors["terminal-cta"]?.y || 2800} L ${w} ${proTerminalExit.y}`;

  // ATHLETE PATHS
  const athHeroExit = anchors["hero-exit"] || {
    x: 70,
    y: 750,
    left: 70,
    top: 750,
  };
  const athLandmarksEntry = anchors["landmarks-entry"] || {
    x: 70,
    y: 850,
    left: 70,
    top: 850,
  };
  const athLandmarksExit = anchors["landmarks-exit"] || {
    x: 70,
    y: 1800,
    left: 70,
    top: 1800,
  };
  const athProgEntry = anchors["progression-entry"] || {
    x: 70,
    y: 1900,
    left: 70,
    top: 1900,
  };
  const athProgExit = anchors["progression-exit"] || {
    x: 70,
    y: 2600,
    left: 70,
    top: 2600,
  };
  const athTerminalExit = anchors["terminal-exit"] || {
    x: 0,
    y: h - 100,
    left: 0,
    top: h - 100,
  };

  // Content and corridor coordinates for Athlete Hero
  const athContentLeft =
    anchors["ath-lead"]?.left ??
    anchors["num-1"]?.left ??
    (isMobile ? 20 : 120);
  const athLeadTop =
    anchors["ath-lead"]?.top ??
    (anchors["ath-tags"]?.bottom ? anchors["ath-tags"].bottom + 20 : 400);
  const athLeadBottom =
    anchors["ath-lead"]?.bottom ??
    (anchors["hero-telemetry"]?.top ? anchors["hero-telemetry"].top - 30 : 510);
  const athTelemTop =
    anchors["hero-telemetry"]?.top ??
    (anchors["telem-0"]?.top ? anchors["telem-0"].top - 18 : 550);
  const athTelem0X = anchors["telem-0"]?.x ?? athContentLeft + 80;

  // Clear whitespace corridor X (routed cleanly to the left of ordinary body copy)
  const athCorridorX = isMobile
    ? Math.max(8, Math.min(12, athContentLeft - 10))
    : w >= 1200
      ? Math.max(40, Math.round(athContentLeft - 45))
      : Math.max(14, Math.round(athContentLeft - 18));

  const athPathSeg1 = isMobile
    ? `M 0 ${spineOriginY} C ${w * 0.2} ${spineOriginY}, ${athCorridorX} ${anchors["num-1"]?.top || 160}, ${athCorridorX} ${anchors["num-1"]?.bottom || 240} L ${athCorridorX} ${athLeadBottom} C ${athCorridorX} ${athTelemTop}, ${anchors["telem-0"]?.left || athContentLeft} ${athTelemTop}, ${athHeroExit.x} ${athHeroExit.y}`
    : `M 0 ${spineOriginY} ` +
      `C ${w * 0.16} ${spineOriginY}, ${anchors["num-1"]?.left != null ? anchors["num-1"].left - 25 : 100} ${anchors["num-1"]?.top || 130}, ${anchors["num-1"]?.left || 120} ${anchors["num-1"]?.y || 240} ` +
      `L ${anchors["num-1"]?.left || 120} ${anchors["num-1"]?.bottom != null ? anchors["num-1"].bottom - 15 : 340} ` +
      `C ${anchors["num-3"]?.left || 220} ${anchors["num-3"]?.top != null ? anchors["num-3"].top + 15 : 140}, ${anchors["num-3"]?.right != null ? anchors["num-3"].right + 35 : 360} ${anchors["num-3"]?.y != null ? anchors["num-3"].y - 15 : 230}, ${anchors["num-3"]?.right || 325} ${anchors["num-3"]?.y || 240} ` +
      `C ${anchors["num-3"]?.right != null ? anchors["num-3"].right + 10 : 335} ${anchors["num-3"]?.bottom != null ? anchors["num-3"].bottom - 5 : 345}, ${anchors["num-3"]?.x || 270} ${anchors["num-3"]?.bottom != null ? anchors["num-3"].bottom + 12 : 360}, ${anchors["num-1"]?.x || 170} ${anchors["num-3"]?.bottom != null ? anchors["num-3"].bottom + 12 : 360} ` +
      `C ${athCorridorX + 15} ${anchors["num-3"]?.bottom != null ? anchors["num-3"].bottom + 12 : 360}, ${athCorridorX} ${athLeadTop - 15}, ${athCorridorX} ${athLeadTop} ` +
      `L ${athCorridorX} ${athLeadBottom} ` +
      `C ${athCorridorX} ${athTelemTop - 15}, ${anchors["telem-0"]?.left || athContentLeft} ${athTelemTop}, ${athTelem0X} ${athTelemTop} ` +
      `C ${athTelem0X + 40} ${athTelemTop}, ${athHeroExit.x + 40} ${athHeroExit.y - 25}, ${athHeroExit.x} ${athHeroExit.y}`;

  const athPathSeg2 = isMobile
    ? `M ${athHeroExit.x} ${athHeroExit.y} C ${athHeroExit.x} ${athLandmarksEntry.top}, ${anchors["score-asg"]?.left || 20} ${anchors["score-asg"]?.top || 900}, ${anchors["score-asg"]?.left || 20} ${anchors["score-asg"]?.bottom || 1200} C ${anchors["score-porprov"]?.left || 20} ${anchors["score-porprov"]?.top || 1250}, ${athLandmarksExit.x} ${athLandmarksExit.y - 40}, ${athLandmarksExit.x} ${athLandmarksExit.y}`
    : `M ${athHeroExit.x} ${athHeroExit.y} C ${athHeroExit.x} ${athLandmarksEntry.top + 40}, ${anchors["score-asg"]?.x || 280} ${anchors["score-asg"]?.top || 950}, ${anchors["score-asg"]?.x || 280} ${anchors["score-asg"]?.bottom || 1250} C ${anchors["score-asg"]?.x || 280} ${anchors["score-porprov"]?.top || 1300}, ${anchors["score-porprov"]?.x || 720} ${anchors["score-porprov"]?.top || 1300}, ${anchors["score-porprov"]?.x || 720} ${anchors["score-porprov"]?.bottom || 1600} C ${anchors["score-porprov"]?.left || 500} ${athLandmarksExit.y - 40}, ${athLandmarksExit.x + 50} ${athLandmarksExit.y}, ${athLandmarksExit.x} ${athLandmarksExit.y}`;

  const athPathSeg3 = isMobile
    ? `M ${athLandmarksExit.x} ${athLandmarksExit.y} C ${athLandmarksExit.x} ${athProgEntry.top}, ${anchors["prog-2021"]?.left || 20} ${anchors["prog-2021"]?.top || 1900}, ${anchors["stat-ku17"]?.left || 20} ${anchors["stat-ku17"]?.y || 2300} C ${anchors["stat-fiba"]?.left || 20} ${anchors["stat-fiba"]?.y || 2500}, ${athProgExit.x} ${athProgExit.y - 40}, ${athProgExit.x} ${athProgExit.y}`
    : `M ${athLandmarksExit.x} ${athLandmarksExit.y} C ${anchors["prog-2021"]?.left || 100} ${athProgEntry.top + 40}, ${anchors["prog-2022"]?.x || 500} ${anchors["prog-2022"]?.top || 1950}, ${anchors["prog-2023"]?.x || 920} ${anchors["prog-2023"]?.bottom || 2200} C ${anchors["prog-2023"]?.left || 700} ${anchors["stat-landmarks"]?.top || 2300}, ${anchors["stat-ku17"]?.x || 300} ${anchors["stat-ku17"]?.top || 2350}, ${anchors["stat-ku17"]?.x || 300} ${anchors["stat-ku17"]?.bottom || 2600} L ${athProgExit.x} ${athProgExit.y}`;

  const athPathSeg4 = isMobile
    ? `M ${athProgExit.x} ${athProgExit.y} C ${athProgExit.x} ${anchors["terminal-box"]?.top || 2700}, ${anchors["terminal-cta"]?.left || 20} ${anchors["terminal-cta"]?.y || 2850}, 0 ${athTerminalExit.y}`
    : `M ${athProgExit.x} ${athProgExit.y} C ${anchors["terminal-box"]?.left || 70} ${anchors["terminal-box"]?.top || 2800}, ${anchors["terminal-cta"]?.x || 450} ${anchors["terminal-cta"]?.y || 2950}, ${anchors["terminal-box"]?.right || w - 70} ${anchors["terminal-cta"]?.y || 2950} C ${w * 0.45} ${athTerminalExit.y}, ${w * 0.15} ${athTerminalExit.y}, 0 ${athTerminalExit.y}`;

  return (
    <div
      ref={containerRef}
      className={`dual-trace-engine dual-trace-engine--${world} ${
        isProofMode ? "dual-trace-engine--proof" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        className="dual-trace-svg"
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height="100%"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="proTraceGrad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8a45c" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="athTraceGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c8a45c" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#eab308" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c8a45c" stopOpacity="0.75" />
          </linearGradient>

          <filter id="traceGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {isPro ? (
          /* =================================================================
             PROFESSIONAL TRACE: Orthogonal / 90° Routing / Control Gates
             ================================================================= */
          <g className="pro-trace-group">
            {/* SEGMENT 01: Spine Origin -> Hero Monument -> Title */}
            <path
              d={proPathSeg1}
              className={`trace-path trace-path--pro ${
                activeSegments.has("origin") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth={isMobile ? "2" : "2.5"}
            />

            {/* Junction Nodes in Hero */}
            <circle
              cx={w - (isMobile ? 12 : 24)}
              cy={spineOriginY}
              r={isMobile ? 3.5 : 4.5}
              className={`trace-node trace-node--gold ${
                activeChapterId === "chapter-origin"
                  ? "trace-node--active-chapter"
                  : ""
              }`}
            />
            {anchors["rbl-r"] && (
              <circle
                cx={anchors["rbl-r"].x}
                cy={anchors["rbl-r"].y}
                r="3.5"
                className="trace-node"
              />
            )}
            {anchors["rbl-b"] && (
              <circle
                cx={anchors["rbl-b"].x}
                cy={anchors["rbl-b"].y}
                r="3.5"
                className="trace-node"
              />
            )}
            {anchors["rbl-l"] && (
              <circle
                cx={anchors["rbl-l"].x}
                cy={anchors["rbl-l"].y}
                r="3.5"
                className="trace-node"
              />
            )}
            {anchors["telem-0"] && (
              <circle
                cx={anchors["telem-0"].x}
                cy={anchors["telem-0"].top - 18}
                r="3.5"
                className="trace-node"
              />
            )}

            {!isMobile && (
              <>
                <text x={w - 180} y={spineOriginY - 8} className="trace-tag">
                  SPINE.ORIGIN // RBL.00
                </text>
                {anchors["pro-tags"] && (
                  <text
                    x={anchors["pro-tags"].left}
                    y={anchors["pro-tags"].bottom + 35}
                    className="trace-tag"
                  >
                    BUS.MAIN // DETERMINISTIC
                  </text>
                )}
              </>
            )}

            {/* SEGMENT 02: Hero -> Featured Project (SPY Market Agent) */}
            <path
              d={proPathSeg2}
              className={`trace-path trace-path--pro ${
                activeSegments.has("systems") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth="2"
            />
            {anchors["featured-plate"] && (
              <circle
                cx={anchors["featured-plate"].left}
                cy={anchors["featured-plate"].top + (isMobile ? 15 : 35)}
                r="4.5"
                className={`trace-node trace-node--gold ${
                  activeChapterId === "chapter-systems"
                    ? "trace-node--active-chapter"
                    : ""
                }`}
              />
            )}
            {!isMobile && anchors["featured-plate"] && (
              <text
                x={anchors["featured-plate"].left + 15}
                y={anchors["featured-plate"].top + 28}
                className="trace-tag"
              >
                SYS.01 // SPY_MARKET_AGENT
              </text>
            )}

            {/* SEGMENT 03: Supporting Systems -> Experience */}
            <path
              d={proPathSeg3}
              className={`trace-path trace-path--pro ${
                activeSegments.has("experience") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth="2"
            />
            {anchors["bridge-spine"] && (
              <circle
                cx={anchors["bridge-spine"].x}
                cy={anchors["bridge-spine"].y}
                r="4"
                className={`trace-node trace-node--gold ${
                  activeChapterId === "chapter-experience"
                    ? "trace-node--active-chapter"
                    : ""
                }`}
              />
            )}
            {!isMobile && anchors["bridge-spine"] && (
              <text
                x={anchors["bridge-spine"].x - 45}
                y={anchors["bridge-spine"].y - 12}
                className="trace-tag"
              >
                RBL // 13 HINGE
              </text>
            )}

            {/* SEGMENT 04: Experience -> Evidence / Page Flip Terminal */}
            <path
              d={proPathSeg4}
              className={`trace-path trace-path--pro ${
                activeSegments.has("evidence") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth="2.5"
            />
            <circle
              cx={w - (isMobile ? 12 : 24)}
              cy={proTerminalExit.y}
              r={isMobile ? 3.5 : 5}
              className={`trace-node trace-node--gold ${
                activeChapterId === "chapter-evidence"
                  ? "trace-node--active-chapter"
                  : ""
              }`}
            />
            {!isMobile && (
              <text x={w - 190} y={proTerminalExit.y - 8} className="trace-tag">
                EVIDENCE.TERMINAL // FLIP_HINGE
              </text>
            )}

            {/* PROOF MODE BRANCHES: Revealed when Proof Mode is active */}
            {isProofMode && (
              <g className="proof-branches">
                {anchors["telem-0"] && (
                  <>
                    <line
                      x1={anchors["telem-0"].x}
                      y1={anchors["telem-0"].top - 18}
                      x2={anchors["telem-0"].x}
                      y2={anchors["telem-0"].bottom + 12}
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={anchors["telem-0"].x}
                      cy={anchors["telem-0"].bottom + 12}
                      r="3"
                      fill="#38bdf8"
                    />
                  </>
                )}
                {anchors["featured-plate"] && (
                  <>
                    <line
                      x1={anchors["featured-plate"].left}
                      y1={anchors["featured-plate"].top + (isMobile ? 15 : 35)}
                      x2={anchors["featured-plate"].left + 60}
                      y2={anchors["featured-plate"].top + (isMobile ? 15 : 35)}
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={anchors["featured-plate"].left + 60}
                      cy={anchors["featured-plate"].top + (isMobile ? 15 : 35)}
                      r="3"
                      fill="#38bdf8"
                    />
                  </>
                )}
              </g>
            )}
          </g>
        ) : (
          /* =================================================================
             ATHLETE TRACE: Kinetic Bézier Curves / Cuts / Court Progression
             ================================================================= */
          <g className="ath-trace-group">
            {/* SEGMENT 01: Spine Origin -> Monumental 13 -> Hero Arc */}
            <path
              d={athPathSeg1}
              className={`trace-path trace-path--ath ${
                activeSegments.has("origin") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth={isMobile ? "2" : "2.8"}
            />

            {/* Kinetic Event Anchors */}
            <circle
              cx={isMobile ? 12 : 24}
              cy={spineOriginY}
              r={isMobile ? 3.5 : 4.5}
              className={`trace-node trace-node--gold ${
                activeChapterId === "chapter-origin"
                  ? "trace-node--active-chapter"
                  : ""
              }`}
            />
            {anchors["num-1"] && (
              <circle
                cx={anchors["num-1"].left}
                cy={anchors["num-1"].y}
                r="3.5"
                className="trace-node trace-node--gold"
              />
            )}
            {anchors["num-3"] && (
              <circle
                cx={anchors["num-3"].right}
                cy={anchors["num-3"].y}
                r="3.5"
                className="trace-node trace-node--gold"
              />
            )}

            {/* Neutral Athlete Trace Labels */}
            {!isMobile && anchors["num-1"] && (
              <text
                x={anchors["num-1"].left - 40}
                y={anchors["num-1"].top + 15}
                className="trace-tag trace-tag--ath"
              >
                13.TRACE.01 // COURT ARC
              </text>
            )}
            {!isMobile && anchors["num-3"] && (
              <text
                x={anchors["num-3"].right + 12}
                y={anchors["num-3"].y - 8}
                className="trace-tag trace-tag--ath"
              >
                13.TRACE.02 // PERIMETER COORDINATE
              </text>
            )}

            {/* SEGMENT 02: Hero -> Landmarks (56–54 ASG & 93–57 PorProv) */}
            <path
              d={athPathSeg2}
              className={`trace-path trace-path--ath ${
                activeSegments.has("systems") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth="2.4"
            />
            {anchors["score-asg"] && (
              <circle
                cx={anchors["score-asg"].x}
                cy={anchors["score-asg"].bottom}
                r="4.5"
                className={`trace-node trace-node--gold ${
                  activeChapterId === "chapter-systems"
                    ? "trace-node--active-chapter"
                    : ""
                }`}
              />
            )}
            {!isMobile && anchors["score-asg"] && (
              <text
                x={anchors["score-asg"].x - 60}
                y={anchors["score-asg"].bottom + 20}
                className="trace-tag trace-tag--ath"
              >
                LANDMARKS // 56–54 ASG FINAL [GOLD]
              </text>
            )}

            {/* SEGMENT 03: Gloria 1 Progression (2021 -> 2022 -> 2023) */}
            <path
              d={athPathSeg3}
              className={`trace-path trace-path--ath ${
                activeSegments.has("experience") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth="2.4"
            />
            {anchors["stat-ku17"] && (
              <circle
                cx={anchors["stat-ku17"].x}
                cy={anchors["stat-ku17"].bottom}
                r="4.5"
                className={`trace-node trace-node--gold ${
                  activeChapterId === "chapter-experience"
                    ? "trace-node--active-chapter"
                    : ""
                }`}
              />
            )}
            {!isMobile && anchors["stat-ku17"] && (
              <text
                x={anchors["stat-ku17"].x - 80}
                y={anchors["stat-ku17"].bottom + 20}
                className="trace-tag trace-tag--ath"
              >
                13.TRACE.03 // KU-17 WILAYAH 5
              </text>
            )}

            {/* SEGMENT 04: Pathway -> Evidence Hinge */}
            <path
              d={athPathSeg4}
              className={`trace-path trace-path--ath ${
                activeSegments.has("evidence") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth="2.8"
            />
            <circle
              cx={isMobile ? 12 : 24}
              cy={athTerminalExit.y}
              r={isMobile ? 3.5 : 5}
              className={`trace-node trace-node--gold ${
                activeChapterId === "chapter-evidence"
                  ? "trace-node--active-chapter"
                  : ""
              }`}
            />
            {!isMobile && (
              <text
                x={35}
                y={athTerminalExit.y - 8}
                className="trace-tag trace-tag--ath"
              >
                RECORD.ARCHIVE // FLIP_HINGE
              </text>
            )}

            {/* PROOF MODE BRANCHES (Athlete) */}
            {isProofMode && (
              <g className="proof-branches">
                {anchors["score-asg"] && (
                  <>
                    <line
                      x1={anchors["score-asg"].x}
                      y1={anchors["score-asg"].bottom}
                      x2={anchors["score-asg"].x}
                      y2={anchors["score-asg"].bottom + 30}
                      stroke="#c8a45c"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={anchors["score-asg"].x}
                      cy={anchors["score-asg"].bottom + 30}
                      r="3"
                      fill="#c8a45c"
                    />
                  </>
                )}
                {anchors["stat-ku17"] && (
                  <>
                    <line
                      x1={anchors["stat-ku17"].x}
                      y1={anchors["stat-ku17"].bottom}
                      x2={anchors["stat-ku17"].x}
                      y2={anchors["stat-ku17"].bottom + 30}
                      stroke="#c8a45c"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <circle
                      cx={anchors["stat-ku17"].x}
                      cy={anchors["stat-ku17"].bottom + 30}
                      r="3"
                      fill="#c8a45c"
                    />
                  </>
                )}
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
