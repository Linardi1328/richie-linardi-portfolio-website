"use client";

import { useState } from "react";

type Mode = "professional" | "athlete";

interface NodePoint {
  id: string;
  labelPro: string;
  labelAth: string;
  proX: number; // percentage 0 - 100
  proY: number; // percentage 0 - 100
  athX: number; // percentage 0 - 100
  athY: number; // percentage 0 - 100
  rolePro: string;
  roleAth: string;
}

// 12 shared coordinate points that map to both topologies
const SHARED_COORDINATES: NodePoint[] = [
  {
    id: "n0",
    labelPro: "RBL.INGEST_01",
    labelAth: "13.SLOT // PG",
    proX: 12,
    proY: 28,
    athX: 50,
    athY: 74,
    rolePro: "Market Data Feed",
    roleAth: "Floor General / Read",
  },
  {
    id: "n1",
    labelPro: "RBL.GATE_SAFETY",
    labelAth: "13.WING_LEFT",
    proX: 36,
    proY: 20,
    athX: 20,
    athY: 58,
    rolePro: "Fail-Closed Boundary",
    roleAth: "Perimeter Spacing",
  },
  {
    id: "n2",
    labelPro: "RBL.GATE_DETERMINISTIC",
    labelAth: "13.WING_RIGHT",
    proX: 36,
    proY: 42,
    athX: 80,
    athY: 58,
    rolePro: "Deterministic Rules",
    roleAth: "Shooting Pocket",
  },
  {
    id: "n3",
    labelPro: "RBL.CORE_DAG",
    labelAth: "13.HIGH_POST",
    proX: 60,
    proY: 24,
    athX: 38,
    athY: 42,
    rolePro: "Execution Pipeline",
    roleAth: "Elbow Decision Node",
  },
  {
    id: "n4",
    labelPro: "RBL.STATE_STORE",
    labelAth: "13.FREE_THROW",
    proX: 60,
    proY: 48,
    athX: 50,
    athY: 42,
    rolePro: "Audit Telemetry",
    roleAth: "Charity Stripe / 89.5%",
  },
  {
    id: "n5",
    labelPro: "RBL.HUMAN_REVIEW",
    labelAth: "13.HIGH_POST_R",
    proX: 60,
    proY: 72,
    athX: 62,
    athY: 42,
    rolePro: "Reviewer Authority",
    roleAth: "Screen & Roll Pivot",
  },
  {
    id: "n6",
    labelPro: "RBL.LOW_LATENCY",
    labelAth: "13.LOW_BLOCK_L",
    proX: 82,
    proY: 22,
    athX: 34,
    athY: 25,
    rolePro: "Real-time Dispatch",
    roleAth: "Post Control",
  },
  {
    id: "n7",
    labelPro: "RBL.FAIL_CLOSED",
    labelAth: "13.RIM_TARGET",
    proX: 82,
    proY: 46,
    athX: 50,
    athY: 18,
    rolePro: "Safety Circuit Breaker",
    roleAth: "Finish at Rim",
  },
  {
    id: "n8",
    labelPro: "RBL.VERIFIED_OUT",
    labelAth: "13.LOW_BLOCK_R",
    proX: 82,
    proY: 70,
    athX: 66,
    athY: 25,
    rolePro: "Proof Artifacts",
    roleAth: "Drop Step Seal",
  },
  {
    id: "n9",
    labelPro: "RBL.AUDIT_LOG",
    labelAth: "13.CORNER_3_L",
    proX: 20,
    proY: 75,
    athX: 8,
    athY: 22,
    rolePro: "Cryptographic Trace",
    roleAth: "Corner 3PT / 45%",
  },
  {
    id: "n10",
    labelPro: "RBL.RECOVERY_RUN",
    labelAth: "13.CORNER_3_R",
    proX: 42,
    proY: 75,
    athX: 92,
    athY: 22,
    rolePro: "Automated Reconcile",
    roleAth: "Weak-side Flare",
  },
  {
    id: "n11",
    labelPro: "RBL.METRIC_GATE",
    labelAth: "13.BACKCOURT_CTR",
    proX: 50,
    proY: 90,
    athX: 50,
    athY: 92,
    rolePro: "Pass Gate 100%",
    roleAth: "Transition Initiation",
  },
];

export function ConceptBGenerativeGeometry({
  initialMode = "professional",
}: {
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [activeNode, setActiveNode] = useState<string | null>("n0");
  const [morphT, setMorphT] = useState<number>(
    initialMode === "professional" ? 0 : 1,
  );
  function handleToggleMode() {
    const nextMode = mode === "professional" ? "athlete" : "professional";
    setMode(nextMode);

    const targetT = nextMode === "professional" ? 0 : 1;
    const startT = morphT;
    const startTime = performance.now();
    const duration = 850;

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMorphT(startT + (targetT - startT) * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  const currentNodes = SHARED_COORDINATES.map((node) => ({
    ...node,
    x: node.proX + (node.athX - node.proX) * morphT,
    y: node.proY + (node.athY - node.proY) * morphT,
  }));

  const selectedNode =
    SHARED_COORDINATES.find((n) => n.id === activeNode) ||
    SHARED_COORDINATES[0];

  return (
    <div className={`concept-b-root concept-b--${mode}`}>
      {/* Top Folio Strip */}
      <header className="concept-b-folio">
        <div className="concept-b-folio__left">
          <span className="concept-b-folio__mark">
            {mode === "professional" ? "RBL // SYS.01" : "13 // CRT.01"}
          </span>
          <span className="concept-b-folio__coords">
            {mode === "professional"
              ? "NODE_MAP: DAG_TOPOLOGY [2026]"
              : "COURT_GRID: 28M × 15M [FIBA]"}
          </span>
        </div>
        <div className="concept-b-folio__center">
          <button
            onClick={handleToggleMode}
            className="concept-b-morph-toggle"
            aria-label="Toggle mathematical projection between Systems and Court"
          >
            <span className={mode === "professional" ? "active" : ""}>
              SYSTEMS DAG
            </span>
            <span className="morph-switch-icon">⇄</span>
            <span className={mode === "athlete" ? "active" : ""}>
              COURT VISION
            </span>
          </button>
        </div>
        <div className="concept-b-folio__right">
          <span className="concept-b-folio__status">
            {mode === "professional"
              ? "DETERMINISTIC ARCHITECTURE"
              : "EAST JAVA RUNNER-UP · 2024 NAT’L"}
          </span>
        </div>
      </header>

      {/* Hero Split Spread */}
      <main className="concept-b-hero">
        {/* Left Editorial Identity */}
        <div className="concept-b-identity">
          <div className="concept-b-stamp">
            <span className="concept-b-stamp__sub">ARCHIVAL REGISTRATION</span>
            <span className="concept-b-stamp__id">
              {mode === "professional" ? "RBL.SYS.BUILD" : "13.ATH.PERF"}
            </span>
          </div>

          <h1 className="concept-b-title">
            {mode === "professional" ? (
              <>
                <span className="concept-b-title__dim">RICHIE LINARDI</span>
                <span className="concept-b-title__bold">SYSTEMS & DATA</span>
                <span className="concept-b-title__accent">ARCHITECTURE</span>
              </>
            ) : (
              <>
                <span className="concept-b-title__dim">RICHIE LINARDI</span>
                <span className="concept-b-title__bold">NUMBER 13</span>
                <span className="concept-b-title__accent">GAME RECORD</span>
              </>
            )}
          </h1>

          <p className="concept-b-lead">
            {mode === "professional"
              ? "Building verifiable software where data integrity, deterministic control gates, and automated test proof define every architecture."
              : "Competitive high-performance basketball across DBL East Java, East Java Provincial Championship (Gold), and Indonesia national competition in 2024."}
          </p>

          {/* Coordinate Telemetry Card */}
          <div className="concept-b-telemetry-card">
            <div className="concept-b-telemetry-card__header">
              <span>ACTIVE COORDINATE: {selectedNode.id.toUpperCase()}</span>
              <span>T={morphT.toFixed(2)}</span>
            </div>
            <div className="concept-b-telemetry-card__body">
              <strong>
                {mode === "professional"
                  ? selectedNode.labelPro
                  : selectedNode.labelAth}
              </strong>
              <p>
                {mode === "professional"
                  ? selectedNode.rolePro
                  : selectedNode.roleAth}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="concept-b-metrics">
            {mode === "professional" ? (
              <>
                <div className="concept-b-metric-item">
                  <span className="metric-val">06</span>
                  <span className="metric-lbl">Public Systems</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">100%</span>
                  <span className="metric-lbl">Fail-Closed Tests</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">CS/DS</span>
                  <span className="metric-lbl">Monash University</span>
                </div>
              </>
            ) : (
              <>
                <div className="concept-b-metric-item">
                  <span className="metric-val">12 PTS</span>
                  <span className="metric-lbl">ASG 2024 Final</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">21 PTS</span>
                  <span className="metric-lbl">PorProv VIII Gold</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">1st Team</span>
                  <span className="metric-lbl">DBL East Java 2023</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Generative Vector Field */}
        <div
          className="concept-b-canvas-wrapper"
          aria-label="Interactive generative geometry coordinate field"
        >
          <svg
            className="concept-b-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Background Grid Rules */}
            <defs>
              <pattern
                id="coordGrid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.12"
                  opacity="0.15"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#coordGrid)" />

            {/* Basketball Court Markings (Opacity increases as morphT -> 1) */}
            <g
              style={{ opacity: morphT, transition: "opacity 300ms ease" }}
              className="court-elements"
            >
              {/* Half-court perimeter */}
              <rect
                x="5"
                y="8"
                width="90"
                height="84"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                opacity="0.4"
              />
              {/* The Key */}
              <rect
                x="36"
                y="8"
                width="28"
                height="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.6"
              />
              {/* Free-throw circle top */}
              <path
                d="M 36 46 A 14 14 0 0 0 64 46"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <path
                d="M 36 46 A 14 14 0 0 1 64 46"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="1.5 1.5"
                opacity="0.4"
              />
              {/* Three-point arc */}
              <path
                d="M 8 30 L 8 8 M 92 30 L 92 8 M 8 30 C 8 72, 92 72, 92 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.7"
              />
              {/* Center circle arc */}
              <path
                d="M 36 92 A 14 14 0 0 1 64 92"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                opacity="0.4"
              />
            </g>

            {/* Systems DAG Pipelines (Opacity increases as morphT -> 0) */}
            <g
              style={{ opacity: 1 - morphT, transition: "opacity 300ms ease" }}
              className="dag-elements"
            >
              {/* Horizontal tier guidelines */}
              <line
                x1="10"
                y1="20"
                x2="90"
                y2="20"
                stroke="currentColor"
                strokeWidth="0.15"
                strokeDasharray="1 2"
                opacity="0.25"
              />
              <line
                x1="10"
                y1="46"
                x2="90"
                y2="46"
                stroke="currentColor"
                strokeWidth="0.15"
                strokeDasharray="1 2"
                opacity="0.25"
              />
              <line
                x1="10"
                y1="72"
                x2="90"
                y2="72"
                stroke="currentColor"
                strokeWidth="0.15"
                strokeDasharray="1 2"
                opacity="0.25"
              />
            </g>

            {/* Morphing Dynamic Vectors connecting currentNodes */}
            <g className="vector-lines">
              <line
                x1={currentNodes[0].x}
                y1={currentNodes[0].y}
                x2={currentNodes[1].x}
                y2={currentNodes[1].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[0].x}
                y1={currentNodes[0].y}
                x2={currentNodes[2].x}
                y2={currentNodes[2].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[1].x}
                y1={currentNodes[1].y}
                x2={currentNodes[3].x}
                y2={currentNodes[3].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[2].x}
                y1={currentNodes[2].y}
                x2={currentNodes[4].x}
                y2={currentNodes[4].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[3].x}
                y1={currentNodes[3].y}
                x2={currentNodes[6].x}
                y2={currentNodes[6].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[4].x}
                y1={currentNodes[4].y}
                x2={currentNodes[7].x}
                y2={currentNodes[7].y}
                stroke="currentColor"
                strokeWidth="0.45"
                opacity="0.7"
              />
              <line
                x1={currentNodes[5].x}
                y1={currentNodes[5].y}
                x2={currentNodes[8].x}
                y2={currentNodes[8].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[6].x}
                y1={currentNodes[6].y}
                x2={currentNodes[7].x}
                y2={currentNodes[7].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[8].x}
                y1={currentNodes[8].y}
                x2={currentNodes[7].x}
                y2={currentNodes[7].y}
                stroke="currentColor"
                strokeWidth="0.35"
                opacity="0.5"
              />
              <line
                x1={currentNodes[0].x}
                y1={currentNodes[0].y}
                x2={currentNodes[9].x}
                y2={currentNodes[9].y}
                stroke="currentColor"
                strokeWidth="0.25"
                opacity="0.35"
              />
              <line
                x1={currentNodes[0].x}
                y1={currentNodes[0].y}
                x2={currentNodes[10].x}
                y2={currentNodes[10].y}
                stroke="currentColor"
                strokeWidth="0.25"
                opacity="0.35"
              />
              <line
                x1={currentNodes[9].x}
                y1={currentNodes[9].y}
                x2={currentNodes[11].x}
                y2={currentNodes[11].y}
                stroke="currentColor"
                strokeWidth="0.25"
                opacity="0.35"
              />
              <line
                x1={currentNodes[10].x}
                y1={currentNodes[10].y}
                x2={currentNodes[11].x}
                y2={currentNodes[11].y}
                stroke="currentColor"
                strokeWidth="0.25"
                opacity="0.35"
              />
            </g>

            {/* Interactive Coordinate Nodes */}
            {currentNodes.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <g
                  key={node.id}
                  className="coord-node"
                  onClick={() => setActiveNode(node.id)}
                  style={{ cursor: "pointer" }}
                >
                  {isSelected && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="3.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.3"
                      className="node-pulse"
                    />
                  )}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isSelected ? "1.8" : "1.2"}
                    fill={isSelected ? "var(--coord-accent)" : "currentColor"}
                    opacity={isSelected ? 1 : 0.75}
                  />
                  <text
                    x={node.x + 2}
                    y={node.y - 1.5}
                    fontSize="2.2"
                    fontFamily="var(--font-mono)"
                    fill="currentColor"
                    opacity={isSelected ? 0.95 : 0.5}
                  >
                    {node.id}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="concept-b-canvas-legend">
            <span>AXIS: X/Y SPATIAL</span>
            <span>
              SYSTEM STATE:{" "}
              {mode === "professional" ? "DAG PIPELINE" : "HALF-COURT TACTICAL"}
            </span>
            <span>NODES: 12 CONVERGED</span>
          </div>
        </div>
      </main>
    </div>
  );
}
