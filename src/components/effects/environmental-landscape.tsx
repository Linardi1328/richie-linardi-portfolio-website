"use client";

import { useEffect, useRef, useState } from "react";
import type { PortfolioWorld } from "@/data/world-navigation";
import { cn } from "@/lib/cn";

interface EnvironmentalLandscapeProps {
  className?: string;
  world: PortfolioWorld;
}

export function EnvironmentalLandscape({
  className,
  world,
}: EnvironmentalLandscapeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const isPro = world === "professional";

  // Parallax offsets (restrained to prevent content decoupling)
  const pSlow = (scrollY * 0.025).toFixed(1);
  const pMid = (scrollY * 0.055).toFixed(1);
  const pFast = (scrollY * 0.09).toFixed(1);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "environmental-landscape",
        `environmental-landscape--${world}`,
        className,
      )}
      ref={containerRef}
      style={
        {
          "--env-parallax-slow": `${pSlow}px`,
          "--env-parallax-mid": `${pMid}px`,
          "--env-parallax-fore": `${pFast}px`,
        } as React.CSSProperties
      }
    >
      {isPro ? (
        /* ===================================================================
           PROFESSIONAL: Layered Editorial / Technical Systems Landscape
           Ivory, Graphite, Cobalt, Cyan, and Restrained Gold
           =================================================================== */
        <div className="env-pro">
          {/* Layer 0: Atmospheric Horizon Gradient */}
          <div className="env-pro__atmosphere" />

          {/* Layer 1: Blueprint Coordinate & Elevation Grid (Slow Parallax) */}
          <div className="env-pro__grid-layer env-parallax--slow">
            <svg
              className="env-pro__svg env-pro__svg--grid"
              viewBox="0 0 1440 1800"
              fill="none"
              preserveAspectRatio="xMidYMin slice"
            >
              <defs>
                <pattern
                  id="pro-blueprint-pattern"
                  width="120"
                  height="120"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 120 0 L 0 0 0 120"
                    fill="none"
                    stroke="rgba(23, 76, 126, 0.07)"
                    strokeWidth="1"
                  />
                  <path
                    d="M 24 0 L 24 120 M 48 0 L 48 120 M 72 0 L 72 120 M 96 0 L 96 120 M 0 24 L 120 24 M 0 48 L 120 48 M 0 72 L 120 72 M 0 96 L 120 96"
                    fill="none"
                    stroke="rgba(23, 76, 126, 0.025)"
                    strokeWidth="0.5"
                  />
                  <circle cx="0" cy="0" r="2" fill="rgba(184, 148, 77, 0.35)" />
                </pattern>
                <linearGradient
                  id="pro-contour-grad-1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(23, 76, 126, 0.04)" />
                  <stop offset="50%" stopColor="rgba(2, 132, 199, 0.18)" />
                  <stop offset="100%" stopColor="rgba(184, 148, 77, 0.08)" />
                </linearGradient>
                <linearGradient
                  id="pro-contour-grad-2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(100, 116, 139, 0.05)" />
                  <stop offset="40%" stopColor="rgba(23, 76, 126, 0.15)" />
                  <stop offset="100%" stopColor="rgba(2, 132, 199, 0.05)" />
                </linearGradient>
              </defs>

              <rect
                width="1440"
                height="1800"
                fill="url(#pro-blueprint-pattern)"
              />

              {/* Datum Coordinate Ticks & Crosshairs */}
              <g className="env-pro__datum-group">
                <path
                  d="M 180 80 L 180 120 M 160 100 L 200 100"
                  stroke="rgba(2, 132, 199, 0.35)"
                  strokeWidth="1"
                />
                <text
                  x="188"
                  y="94"
                  className="env-pro__datum-text"
                  fill="rgba(23, 76, 126, 0.45)"
                >
                  {"SYS.REF [180.100] // DATUM.CS"}
                </text>

                <path
                  d="M 1260 140 L 1260 180 M 1240 160 L 1280 160"
                  stroke="rgba(184, 148, 77, 0.4)"
                  strokeWidth="1"
                />
                <text
                  x="1200"
                  y="154"
                  className="env-pro__datum-text"
                  textAnchor="end"
                  fill="rgba(184, 148, 77, 0.55)"
                >
                  {"LAT -37.914° // 145.130°E"}
                </text>

                <path
                  d="M 120 720 L 1320 720"
                  stroke="rgba(23, 76, 126, 0.1)"
                  strokeDasharray="4 8"
                  strokeWidth="1"
                />
                <text
                  x="130"
                  y="712"
                  className="env-pro__datum-text"
                  fill="rgba(23, 76, 126, 0.4)"
                >
                  {"HORIZON // SEC.02 BOUNDARY ELEV: +24.0M"}
                </text>
              </g>
            </svg>
          </div>

          {/* Layer 2: Technical Topographic Contours & Ridges (Mid Parallax) */}
          <div className="env-pro__contour-layer env-parallax--mid">
            <svg
              className="env-pro__svg env-pro__svg--contours"
              viewBox="0 0 1440 1400"
              fill="none"
              preserveAspectRatio="xMidYMin slice"
            >
              {/* Topographic elevation contours evoking computational data terrain */}
              <path
                d="M -40 280 C 260 210, 520 380, 840 260 C 1120 160, 1320 290, 1500 240"
                stroke="url(#pro-contour-grad-1)"
                strokeWidth="1.25"
                fill="none"
              />
              <path
                d="M -40 330 C 280 270, 540 430, 860 310 C 1140 210, 1340 340, 1500 290"
                stroke="url(#pro-contour-grad-2)"
                strokeWidth="1"
                strokeDasharray="6 4"
                fill="none"
              />
              <path
                d="M -40 390 C 240 320, 560 480, 890 370 C 1160 270, 1360 400, 1500 350"
                stroke="rgba(23, 76, 126, 0.09)"
                strokeWidth="0.75"
                fill="none"
              />
              <path
                d="M -40 460 C 300 390, 580 540, 920 430 C 1180 330, 1380 470, 1500 420"
                stroke="rgba(2, 132, 199, 0.08)"
                strokeWidth="0.75"
                strokeDasharray="2 6"
                fill="none"
              />

              {/* Lower Architecture Plateau Contours */}
              <path
                d="M -40 880 C 320 810, 680 970, 1020 860 C 1240 790, 1420 890, 1500 850"
                stroke="url(#pro-contour-grad-1)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M -40 940 C 340 870, 700 1020, 1040 920 C 1260 850, 1440 940, 1500 910"
                stroke="rgba(100, 116, 139, 0.08)"
                strokeWidth="0.75"
                strokeDasharray="4 6"
                fill="none"
              />

              {/* Elevation contour labels */}
              <text
                x="880"
                y="252"
                className="env-pro__contour-text"
                fill="rgba(2, 132, 199, 0.45)"
              >
                {"// ELEV 140M TOPOLOGY"}
              </text>
              <text
                x="1050"
                y="852"
                className="env-pro__contour-text"
                fill="rgba(184, 148, 77, 0.45)"
              >
                {"// ARCHITECTURE DATUM 02"}
              </text>
            </svg>
          </div>

          {/* Layer 3: Horizon Radial Calipers & Alignment Marks (Fore Parallax) */}
          <div className="env-pro__caliper-layer env-parallax--fore">
            <svg
              className="env-pro__svg env-pro__svg--calipers"
              viewBox="0 0 1440 1000"
              fill="none"
              preserveAspectRatio="xMidYMin slice"
            >
              {/* Radial Caliper Arc anchoring behind Hero monumental RBL */}
              <circle
                cx="720"
                cy="280"
                r="360"
                stroke="rgba(23, 76, 126, 0.05)"
                strokeWidth="1"
                strokeDasharray="3 9"
              />
              <circle
                cx="720"
                cy="280"
                r="480"
                stroke="rgba(184, 148, 77, 0.04)"
                strokeWidth="0.75"
              />

              {/* Caliper Compass Degree Ticks */}
              <g className="env-pro__caliper-ticks">
                <line
                  x1="720"
                  y1="260"
                  x2="720"
                  y2="300"
                  stroke="rgba(2, 132, 199, 0.25)"
                  strokeWidth="1"
                />
                <line
                  x1="700"
                  y1="280"
                  x2="740"
                  y2="280"
                  stroke="rgba(2, 132, 199, 0.25)"
                  strokeWidth="1"
                />
              </g>
            </svg>
          </div>
        </div>
      ) : (
        /* ===================================================================
           ATHLETE: Distinct Sports-Performance Arena & Court Environment
           Deep Navy, Cyan Court Geometry, Amber/Gold Highlights, Scoreboard Telemetry
           =================================================================== */
        <div className="env-ath">
          {/* Layer 0: Arena Floodlight & Vignette Atmosphere */}
          <div className="env-ath__atmosphere" />

          {/* Layer 1: Arena Structural Rafters & Trusses (Slow Parallax) */}
          <div className="env-ath__rafter-layer env-parallax--slow">
            <svg
              className="env-ath__svg env-ath__svg--rafters"
              viewBox="0 0 1440 1800"
              fill="none"
              preserveAspectRatio="xMidYMin slice"
            >
              <defs>
                <linearGradient
                  id="ath-rafter-grad"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(14, 165, 233, 0.12)" />
                  <stop offset="50%" stopColor="rgba(200, 164, 92, 0.06)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient
                  id="ath-court-glow"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.18)" />
                  <stop offset="60%" stopColor="rgba(200, 164, 92, 0.14)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>

              {/* High Arena Rafter Trusses */}
              <g className="env-ath__rafters">
                <line
                  x1="0"
                  y1="60"
                  x2="1440"
                  y2="60"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1="120"
                  x2="1440"
                  y2="120"
                  stroke="rgba(255, 255, 255, 0.03)"
                  strokeWidth="0.75"
                />
                {/* Diagonal Rafter Struts */}
                <path
                  d="M 0 60 L 120 120 L 240 60 L 360 120 L 480 60 L 600 120 L 720 60 L 840 120 L 960 60 L 1080 120 L 1200 60 L 1320 120 L 1440 60"
                  stroke="rgba(200, 164, 92, 0.07)"
                  strokeWidth="0.75"
                  fill="none"
                />

                {/* Stadium Lighting Beacons at Truss Vertices */}
                <circle
                  cx="240"
                  cy="60"
                  r="3"
                  fill="#c8a45c"
                  className="env-ath__beacon"
                />
                <circle
                  cx="720"
                  cy="60"
                  r="4"
                  fill="#06b6d4"
                  className="env-ath__beacon"
                />
                <circle
                  cx="1200"
                  cy="60"
                  r="3"
                  fill="#c8a45c"
                  className="env-ath__beacon"
                />
              </g>

              {/* Arena Registration Telemetry */}
              <text
                x="80"
                y="48"
                className="env-ath__telemetry-text"
                fill="rgba(200, 164, 92, 0.45)"
              >
                {"ARENA LEVEL 01 // EAST JAVA BASKETBALL ARCHIVE"}
              </text>
              <text
                x="1360"
                y="48"
                className="env-ath__telemetry-text"
                textAnchor="end"
                fill="rgba(6, 182, 212, 0.45)"
              >
                {"REG: NO. 13 // SURABAYA · FIBA 28M × 15M"}
              </text>
            </svg>
          </div>

          {/* Layer 2: Precision Court Geometry & Perspective Lines (Mid Parallax) */}
          <div className="env-ath__court-layer env-parallax--mid">
            <svg
              className="env-ath__svg env-ath__svg--court"
              viewBox="0 0 1440 1600"
              fill="none"
              preserveAspectRatio="xMidYMin slice"
            >
              {/* Perspective Baseline & Sidelines */}
              <g className="env-ath__court-lines">
                {/* Court Horizon / Half-Court Line */}
                <line
                  x1="120"
                  y1="340"
                  x2="1320"
                  y2="340"
                  stroke="rgba(6, 182, 212, 0.2)"
                  strokeWidth="1.5"
                />

                {/* Perspective Projected Sidelines */}
                <line
                  x1="120"
                  y1="340"
                  x2="40"
                  y2="1500"
                  stroke="rgba(6, 182, 212, 0.12)"
                  strokeWidth="1.25"
                />
                <line
                  x1="1320"
                  y1="340"
                  x2="1400"
                  y2="1500"
                  stroke="rgba(6, 182, 212, 0.12)"
                  strokeWidth="1.25"
                />

                {/* Center Court Circle with #13 Core Watermark */}
                <ellipse
                  cx="720"
                  cy="340"
                  rx="180"
                  ry="45"
                  stroke="rgba(200, 164, 92, 0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  fill="none"
                />
                <ellipse
                  cx="720"
                  cy="340"
                  rx="90"
                  ry="24"
                  stroke="rgba(6, 182, 212, 0.35)"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Key / Paint Lane Perspective Geometry */}
                <path
                  d="M 540 340 L 480 780 L 960 780 L 900 340"
                  stroke="rgba(200, 164, 92, 0.22)"
                  strokeWidth="1.25"
                  fill="none"
                />

                {/* Free Throw Semi-Circle */}
                <ellipse
                  cx="720"
                  cy="780"
                  rx="160"
                  ry="42"
                  stroke="rgba(6, 182, 212, 0.3)"
                  strokeWidth="1.25"
                  strokeDasharray="4 4"
                  fill="none"
                />

                {/* Three-Point Arc (Perspective Flattened) */}
                <path
                  d="M 280 1100 C 340 700, 1100 700, 1160 1100"
                  stroke="rgba(6, 182, 212, 0.28)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Restricted Area Arc */}
                <ellipse
                  cx="720"
                  cy="460"
                  rx="75"
                  ry="20"
                  stroke="rgba(200, 164, 92, 0.25)"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Court Hash Marks along the Lane */}
                <line
                  x1="522"
                  y1="460"
                  x2="480"
                  y2="460"
                  stroke="rgba(200, 164, 92, 0.35)"
                  strokeWidth="1.5"
                />
                <line
                  x1="504"
                  y1="560"
                  x2="460"
                  y2="560"
                  stroke="rgba(200, 164, 92, 0.35)"
                  strokeWidth="1.5"
                />
                <line
                  x1="486"
                  y1="670"
                  x2="440"
                  y2="670"
                  stroke="rgba(200, 164, 92, 0.35)"
                  strokeWidth="1.5"
                />

                <line
                  x1="918"
                  y1="460"
                  x2="960"
                  y2="460"
                  stroke="rgba(200, 164, 92, 0.35)"
                  strokeWidth="1.5"
                />
                <line
                  x1="936"
                  y1="560"
                  x2="980"
                  y2="560"
                  stroke="rgba(200, 164, 92, 0.35)"
                  strokeWidth="1.5"
                />
                <line
                  x1="954"
                  y1="670"
                  x2="1000"
                  y2="670"
                  stroke="rgba(200, 164, 92, 0.35)"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </div>

          {/* Layer 3: Stadium Scoreboard Framing & Telemetry (Fore Parallax) */}
          <div className="env-ath__scoreboard-layer env-parallax--fore">
            <svg
              className="env-ath__svg env-ath__svg--scoreboard"
              viewBox="0 0 1440 900"
              fill="none"
              preserveAspectRatio="xMidYMin slice"
            >
              {/* Scoreboard Caliper Brackets */}
              <path
                d="M 80 180 L 60 180 L 60 300 L 80 300"
                stroke="rgba(200, 164, 92, 0.3)"
                strokeWidth="1.5"
              />
              <path
                d="M 1360 180 L 1380 180 L 1380 300 L 1360 300"
                stroke="rgba(200, 164, 92, 0.3)"
                strokeWidth="1.5"
              />

              {/* Segmented Match Clock Indicator Telemetry */}
              <text
                x="76"
                y="200"
                className="env-ath__scoreboard-text"
                fill="rgba(200, 164, 92, 0.55)"
              >
                {"[Q4 // 00:13]"}
              </text>
              <text
                x="76"
                y="218"
                className="env-ath__scoreboard-subtext"
                fill="rgba(6, 182, 212, 0.5)"
              >
                PORPROV VIII GOLD
              </text>

              <text
                x="1364"
                y="200"
                className="env-ath__scoreboard-text"
                textAnchor="end"
                fill="rgba(200, 164, 92, 0.55)"
              >
                {"[56.8% FG // 28 PTS]"}
              </text>
              <text
                x="1364"
                y="218"
                className="env-ath__scoreboard-subtext"
                textAnchor="end"
                fill="rgba(6, 182, 212, 0.5)"
              >
                EAST JAVA 1ST TEAM
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
