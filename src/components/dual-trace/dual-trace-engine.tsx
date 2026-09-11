"use client";

import { useEffect, useState } from "react";
import type { PortfolioWorld } from "@/data/world-navigation";
import { useProofMode } from "./proof-mode-context";

interface DualTraceEngineProps {
  world: PortfolioWorld;
}

export function DualTraceEngine({ world }: DualTraceEngineProps) {
  const { isProofMode } = useProofMode();
  const [activeSegments, setActiveSegments] = useState<Set<string>>(
    new Set(["origin"]),
  );

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
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
      },
    );

    const chapters = ["origin", "systems", "experience", "evidence"];
    chapters.forEach((c) => {
      const el = document.getElementById(`chapter-${c}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isPro = world === "professional";

  return (
    <div
      className={`dual-trace-engine dual-trace-engine--${world} ${
        isProofMode ? "dual-trace-engine--proof" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        className="dual-trace-svg"
        viewBox="0 0 1440 3200"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="proTraceGrad" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8a45c" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.7" />
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
             PROFESSIONAL TRACE: Orthogonal / 90° Routing / System Junctions
             ================================================================= */
          <g className="pro-trace-group">
            {/* SEGMENT 01: Spine Origin -> Hero Monument -> Title */}
            <path
              d="M 1440 120 L 1120 120 L 1120 600 L 70 600 L 70 780"
              className={`trace-path trace-path--pro ${
                activeSegments.has("origin") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth="2.5"
            />
            {/* Junction Nodes in Hero */}
            <circle
              cx="1120"
              cy="120"
              r="4.5"
              className="trace-node trace-node--gold"
            />
            <circle cx="1120" cy="600" r="4" className="trace-node" />
            <circle cx="70" cy="600" r="4" className="trace-node" />
            <circle cx="70" cy="780" r="3.5" className="trace-node" />

            {/* Junction telemetry labels */}
            <text x="1130" y="115" className="trace-tag">
              SPINE.ORIGIN // RBL.00
            </text>
            <text x="960" y="595" className="trace-tag">
              GATE.CONTROL // FAIL-CLOSED
            </text>
            <text x="85" y="595" className="trace-tag">
              BUS.MAIN // DETERMINISTIC
            </text>

            {/* SEGMENT 02: Hero -> Featured Project (SPY Market Agent) */}
            <path
              d="M 70 780 L 70 1020 L 1260 1020 L 1260 1620 L 70 1620"
              className={`trace-path trace-path--pro ${
                activeSegments.has("systems") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth="2"
            />
            <circle cx="70" cy="1020" r="4" className="trace-node" />
            <circle
              cx="1260"
              cy="1020"
              r="4.5"
              className="trace-node trace-node--gold"
            />
            <circle cx="1260" cy="1620" r="4" className="trace-node" />
            <circle cx="70" cy="1620" r="3.5" className="trace-node" />
            <text x="85" y="1015" className="trace-tag">
              SYS.01 // SPY_MARKET_AGENT
            </text>

            {/* SEGMENT 03: Supporting Systems -> Experience */}
            <path
              d="M 70 1620 L 70 1880 L 1260 1880 L 1260 2360 L 70 2360"
              className={`trace-path trace-path--pro ${
                activeSegments.has("experience") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth="2"
            />
            <circle cx="70" cy="1880" r="4" className="trace-node" />
            <circle
              cx="1260"
              cy="1880"
              r="4"
              className="trace-node trace-node--gold"
            />
            <circle cx="1260" cy="2360" r="3.5" className="trace-node" />
            <circle cx="70" cy="2360" r="4" className="trace-node" />
            <text x="1080" y="1875" className="trace-tag">
              SYS.CATALOGUE // 06 PUBLIC
            </text>

            {/* SEGMENT 04: Experience -> Evidence / Page Flip Terminal */}
            <path
              d="M 70 2360 L 70 2780 L 1120 2780 L 1120 3060 L 1440 3060"
              className={`trace-path trace-path--pro ${
                activeSegments.has("evidence") ? "is-drawn" : ""
              }`}
              stroke="url(#proTraceGrad)"
              strokeWidth="2.5"
            />
            <circle cx="70" cy="2780" r="4" className="trace-node" />
            <circle cx="1120" cy="2780" r="4" className="trace-node" />
            <circle
              cx="1120"
              cy="3060"
              r="5"
              className="trace-node trace-node--gold"
            />
            <text x="960" y="3055" className="trace-tag">
              EVIDENCE.TERMINAL // FLIP_HINGE
            </text>

            {/* PROOF MODE BRANCHES: Revealed when Proof Mode is active */}
            {isProofMode && (
              <g className="proof-branches">
                <line
                  x1="1260"
                  y1="1020"
                  x2="980"
                  y2="1020"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <circle cx="980" cy="1020" r="3" fill="#38bdf8" />
                <text x="730" y="1016" className="trace-proof-tag">
                  PROOF: v2.0.0-beta.1 / Alpaca Paper / Fail-Closed
                </text>

                <line
                  x1="1260"
                  y1="1880"
                  x2="1020"
                  y2="1880"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <circle cx="1020" cy="1880" r="3" fill="#38bdf8" />
                <text x="760" y="1876" className="trace-proof-tag">
                  PROOF: 6 Public Systems / Monash CS / Telegram Command
                </text>
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
              d="M 0 140 C 220 140, 360 180, 520 180 C 860 180, 1160 220, 1260 340 C 1380 480, 1340 640, 1200 740 C 1040 840, 380 840, 90 880"
              className={`trace-path trace-path--ath ${
                activeSegments.has("origin") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth="2.8"
            />
            {/* Kinetic Event Anchors */}
            <circle
              cx="0"
              cy="140"
              r="4.5"
              className="trace-node trace-node--gold"
            />
            <circle
              cx="520"
              cy="180"
              r="4"
              className="trace-node trace-node--gold"
            />
            <circle
              cx="1260"
              cy="340"
              r="4"
              className="trace-node trace-node--gold"
            />
            <circle
              cx="1200"
              cy="740"
              r="4"
              className="trace-node trace-node--gold"
            />
            <circle
              cx="90"
              cy="880"
              r="4.5"
              className="trace-node trace-node--gold"
            />

            <text x="535" y="175" className="trace-tag trace-tag--ath">
              13.HIGH_POST // APEX_CUT
            </text>
            <text x="1080" y="735" className="trace-tag trace-tag--ath">
              13.PERIMETER // SPATIAL_READ
            </text>

            {/* SEGMENT 02: Hero -> Landmarks (56–54 ASG & 93–57 PorProv) */}
            <path
              d="M 90 880 C 220 940, 480 1020, 680 1060 C 700 1160, 700 1460, 680 1560 C 640 1660, 240 1820, 120 2040"
              className={`trace-path trace-path--ath ${
                activeSegments.has("systems") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth="2.4"
            />
            <circle
              cx="680"
              cy="1060"
              r="4.5"
              className="trace-node trace-node--gold"
            />
            <circle
              cx="680"
              cy="1340"
              r="5"
              className="trace-node trace-node--gold"
            />
            <circle
              cx="120"
              cy="2040"
              r="4"
              className="trace-node trace-node--gold"
            />

            <text x="695" y="1055" className="trace-tag trace-tag--ath">
              LANDMARKS // CHAMPIONSHIP
            </text>
            <text x="695" y="1335" className="trace-tag trace-tag--ath">
              FINAL: SURABAYA 93–57 JEMBER [GOLD]
            </text>

            {/* SEGMENT 03: Gloria 1 Progression (2021 -> 2022 -> 2023) */}
            <path
              d="M 120 2040 C 280 2160, 520 2260, 360 2420 C 200 2580, 480 2740, 780 2780"
              className={`trace-path trace-path--ath ${
                activeSegments.has("experience") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth="2.4"
            />
            <circle
              cx="360"
              cy="2420"
              r="4.5"
              className="trace-node trace-node--gold"
            />
            <circle
              cx="780"
              cy="2780"
              r="4.5"
              className="trace-node trace-node--gold"
            />
            <text x="375" y="2415" className="trace-tag trace-tag--ath">
              DBL PROGRESSION: 2021 → 2022 → 2023 FIRST TEAM
            </text>

            {/* SEGMENT 04: Pathway -> Evidence Hinge */}
            <path
              d="M 780 2780 C 1020 2820, 1260 2920, 1180 3060 L 0 3060"
              className={`trace-path trace-path--ath ${
                activeSegments.has("evidence") ? "is-drawn" : ""
              }`}
              stroke="url(#athTraceGrad)"
              strokeWidth="2.8"
            />
            <circle
              cx="1180"
              cy="3060"
              r="5"
              className="trace-node trace-node--gold"
            />
            <text x="980" y="3050" className="trace-tag trace-tag--ath">
              RECORD.ARCHIVE // FLIP_HINGE
            </text>

            {/* PROOF MODE BRANCHES (Athlete) */}
            {isProofMode && (
              <g className="proof-branches">
                <line
                  x1="680"
                  y1="1340"
                  x2="440"
                  y2="1340"
                  stroke="#c8a45c"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <circle cx="440" cy="1340" r="3" fill="#c8a45c" />
                <text x="180" y="1336" className="trace-proof-tag">
                  PROOF: IBL Official Box / 12 PTS · 4 REB / Da Nang
                </text>

                <line
                  x1="780"
                  y1="2780"
                  x2="520"
                  y2="2780"
                  stroke="#c8a45c"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <circle cx="520" cy="2780" r="3" fill="#c8a45c" />
                <text
                  x="240"
                  y="2776"
                  className="trace-proof-tag trace-proof-tag--ath"
                >
                  PROOF: DBL Official Profile / 121 PTS · 84 REB
                </text>

                <line
                  x1="960"
                  y1="1620"
                  x2="680"
                  y2="1620"
                  stroke="#c8a45c"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <circle cx="680" cy="1620" r="3" fill="#c8a45c" />
                <text
                  x="440"
                  y="1616"
                  className="trace-proof-tag trace-proof-tag--ath"
                >
                  PROOF: Lenza Nasional / 21 PTS · 7 REB / GOR Delta
                </text>
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}
