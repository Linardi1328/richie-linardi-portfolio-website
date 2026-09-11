"use client";

import { useState, useRef, useEffect } from "react";
import { projectRegistry } from "@/data/project-registry";
import {
  dblSeasonStats,
  asg2024FinalSnapshot,
  porprovViiiFinalSnapshot,
} from "@/data/basketball-record";

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
// Uses strictly neutral geometric labels for basketball court
const SHARED_COORDINATES: NodePoint[] = [
  {
    id: "n0",
    labelPro: "RBL.INGEST_01",
    labelAth: "13.HALF_COURT",
    proX: 12,
    proY: 28,
    athX: 50,
    athY: 74,
    rolePro: "Market Data Ingestion",
    roleAth: "Half-Court Spatial Alignment",
  },
  {
    id: "n1",
    labelPro: "RBL.GATE_SAFETY",
    labelAth: "13.LEFT_WING",
    proX: 36,
    proY: 20,
    athX: 20,
    athY: 58,
    rolePro: "Fail-Closed Boundary",
    roleAth: "Left Wing Perimeter Spacing",
  },
  {
    id: "n2",
    labelPro: "RBL.GATE_DETERMINISTIC",
    labelAth: "13.RIGHT_WING",
    proX: 36,
    proY: 42,
    athX: 80,
    athY: 58,
    rolePro: "Deterministic Rules",
    roleAth: "Right Wing Perimeter Spacing",
  },
  {
    id: "n3",
    labelPro: "RBL.CORE_DAG",
    labelAth: "13.LEFT_ELBOW",
    proX: 60,
    proY: 24,
    athX: 38,
    athY: 42,
    rolePro: "Execution Pipeline",
    roleAth: "Left Elbow Spatial Coordinate",
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
    roleAth: "Free Throw Line Center",
  },
  {
    id: "n5",
    labelPro: "RBL.HUMAN_REVIEW",
    labelAth: "13.RIGHT_ELBOW",
    proX: 60,
    proY: 72,
    athX: 62,
    athY: 42,
    rolePro: "Reviewer Authority",
    roleAth: "Right Elbow Spatial Coordinate",
  },
  {
    id: "n6",
    labelPro: "RBL.LOW_LATENCY",
    labelAth: "13.LEFT_BLOCK",
    proX: 82,
    proY: 22,
    athX: 34,
    athY: 25,
    rolePro: "Real-time Dispatch",
    roleAth: "Left Block Interior Geometry",
  },
  {
    id: "n7",
    labelPro: "RBL.FAIL_CLOSED",
    labelAth: "13.RIM",
    proX: 82,
    proY: 46,
    athX: 50,
    athY: 18,
    rolePro: "Safety Circuit Breaker",
    roleAth: "Rim Target Center",
  },
  {
    id: "n8",
    labelPro: "RBL.VERIFIED_OUT",
    labelAth: "13.RIGHT_BLOCK",
    proX: 82,
    proY: 70,
    athX: 66,
    athY: 25,
    rolePro: "Proof Artifacts",
    roleAth: "Right Block Interior Geometry",
  },
  {
    id: "n9",
    labelPro: "RBL.AUDIT_LOG",
    labelAth: "13.LEFT_CORNER",
    proX: 20,
    proY: 75,
    athX: 8,
    athY: 22,
    rolePro: "Cryptographic Trace",
    roleAth: "Left Corner Spatial Coordinate",
  },
  {
    id: "n10",
    labelPro: "RBL.RECOVERY_RUN",
    labelAth: "13.RIGHT_CORNER",
    proX: 42,
    proY: 75,
    athX: 92,
    athY: 22,
    rolePro: "Automated Reconcile",
    roleAth: "Right Corner Spatial Coordinate",
  },
  {
    id: "n11",
    labelPro: "RBL.METRIC_GATE",
    labelAth: "13.TOP_OF_KEY",
    proX: 50,
    proY: 90,
    athX: 50,
    athY: 92,
    rolePro: "Automated Pass Gate",
    roleAth: "Top of Key Apex Anchor",
  },
];

export function ConceptBGenerativeGeometry({
  initialMode = "professional",
  initialMorphT,
}: {
  initialMode?: Mode;
  initialMorphT?: number;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [activeNode, setActiveNode] = useState<string>("n0");
  const [morphT, setMorphT] = useState<number>(
    initialMorphT !== undefined
      ? initialMorphT
      : initialMode === "professional"
        ? 0
        : 1,
  );

  const animFrameRef = useRef<number | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Canonical DBL 2023 season data
  const dbl2023 = dblSeasonStats.find(
    (s) => s.season === "2023" && s.context.includes("Gloria 1"),
  );

  function handleSetMorph(targetT: number, targetMode?: Mode) {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    if (targetMode) {
      setMode(targetMode);
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setMorphT(targetT);
      return;
    }

    const startT = morphT;
    const startTime = performance.now();
    const duration = 850;

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMorphT(startT + (targetT - startT) * eased);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        animFrameRef.current = null;
      }
    }

    animFrameRef.current = requestAnimationFrame(step);
  }

  function handleToggleMode() {
    const nextMode = mode === "professional" ? "athlete" : "professional";
    handleSetMorph(nextMode === "professional" ? 0 : 1, nextMode);
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
              : "COURT_GRID: ABSTRACTED SPATIAL COORDINATES"}
          </span>
        </div>
        <div className="concept-b-folio__center">
          <button
            type="button"
            onClick={handleToggleMode}
            className="concept-b-morph-toggle"
            aria-label="Toggle mathematical projection between Systems and Court"
          >
            <span className={mode === "professional" ? "active" : ""}>
              SYSTEMS DAG
            </span>
            <span className="morph-switch-icon" aria-hidden="true">
              ⇄
            </span>
            <span className={mode === "athlete" ? "active" : ""}>
              COURT VISION
            </span>
          </button>
        </div>
        <div className="concept-b-folio__right">
          <span className="concept-b-folio__status">
            {mode === "professional"
              ? "DETERMINISTIC ARCHITECTURE"
              : "DBL EAST JAVA RUNNER-UP · 2024 INDONESIA REP"}
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
              : "Competitive basketball spanning DBL East Java (Runner-Up & First Team), East Java Provincial Championship (PorProv VIII Gold), and representing Indonesia in international competition in 2024."}
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
                  <span className="metric-val">
                    {String(projectRegistry.length).padStart(2, "0")}
                  </span>
                  <span className="metric-lbl">Public Systems</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">CS / DS</span>
                  <span className="metric-lbl">Monash University</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">Audited</span>
                  <span className="metric-lbl">Execution Gates</span>
                </div>
              </>
            ) : (
              <>
                <div className="concept-b-metric-item">
                  <span className="metric-val">
                    {asg2024FinalSnapshot.points} PTS
                  </span>
                  <span className="metric-lbl">ASG 2024 Final</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">
                    {porprovViiiFinalSnapshot.points} PTS
                  </span>
                  <span className="metric-lbl">PorProv VIII Gold</span>
                </div>
                <div className="concept-b-metric-item">
                  <span className="metric-val">
                    {dbl2023?.points ?? 121} PTS
                  </span>
                  <span className="metric-lbl">DBL East Java 2023</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Generative Vector Field */}
        <div
          className="concept-b-canvas-wrapper"
          aria-label="Abstracted interactive geometric coordinate field"
        >
          <svg
            className="concept-b-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
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

            {/* Abstracted Half-Court Markings (Opacity increases as morphT -> 1) */}
            <g
              style={{ opacity: morphT, transition: "opacity 300ms ease" }}
              className="court-elements"
            >
              {/* Perimeter */}
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
              {/* Free-throw circle */}
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

            {/* Accessible Interactive Coordinate Nodes */}
            {currentNodes.map((node) => {
              const isSelected = activeNode === node.id;
              const nodeTitle =
                mode === "professional" ? node.labelPro : node.labelAth;
              return (
                <g
                  key={node.id}
                  className={`coord-node ${isSelected ? "coord-node--selected" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Node ${node.id.toUpperCase()}: ${nodeTitle}`}
                  aria-pressed={isSelected}
                  onClick={() => setActiveNode(node.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveNode(node.id);
                    }
                  }}
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
            <span>AXIS: ABSTRACTED SPATIAL</span>
            <span>
              PROJECTION:{" "}
              {mode === "professional" ? "SYSTEMS DAG" : "COURT COORDINATES"}
            </span>
            <span>NODES: 12 CONVERGED</span>
          </div>
        </div>
      </main>
    </div>
  );
}
