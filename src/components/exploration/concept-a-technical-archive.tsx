"use client";

import { useState } from "react";

type Mode = "professional" | "athlete";

export function ConceptATechnicalArchive({
  initialMode = "professional",
}: {
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [selectedRecord, setSelectedRecord] = useState<string>("01");

  return (
    <div className={`concept-a-root concept-a--${mode}`}>
      {/* Archival Folio Header */}
      <header className="concept-a-folio">
        <div className="concept-a-folio__stamp">
          <span className="stamp-box">
            {mode === "professional"
              ? "RBL.SYS.ARCHIVE"
              : "13.GAMEBOOK.OFFICIAL"}
          </span>
          <span className="stamp-meta">
            {mode === "professional"
              ? "SPEC: REVERSIBLE DOSSIER // MONASH CS"
              : "FEDERATION: PERBASI · FIBA RECOG"}
          </span>
        </div>
        <div className="concept-a-folio__mode-switch">
          <button
            onClick={() => setMode("professional")}
            className={mode === "professional" ? "active" : ""}
          >
            [01] SYSTEMS DOSSIER
          </button>
          <span className="sep">/</span>
          <button
            onClick={() => setMode("athlete")}
            className={mode === "athlete" ? "active" : ""}
          >
            [02] OFFICIAL GAMEBOOK
          </button>
        </div>
        <div className="concept-a-folio__security">
          <span>
            {mode === "professional"
              ? "SAFETY: DETERMINISTIC / FAIL-CLOSED"
              : "STATUS: VERIFIED CANONICAL"}
          </span>
        </div>
      </header>

      {/* Main Archival Record Spread */}
      <main className="concept-a-main">
        {mode === "professional" ? (
          /* PROFESSIONAL: Technical Blueprint Archive */
          <div className="concept-a-pro-spread">
            <div className="concept-a-pro-cover">
              <div className="concept-a-id-badge">
                <span className="id-code">RBL // SYS.ARCHIVE.2026</span>
                <span className="id-rev">REV: 5.2.1</span>
              </div>
              <h1 className="concept-a-pro-title">
                RICHIE BERTRAND LINARDI
                <span className="sub">
                  SYSTEMS ARCHITECTURE & VERIFIABLE SOFTWARE
                </span>
              </h1>
              <div className="concept-a-pro-abstract">
                <p>
                  A deterministic systems engineering portfolio centered on
                  market intelligence, telephone-supervised operations, and
                  verifiable financial automation.
                </p>
              </div>
              <div className="concept-a-tech-ledger">
                <div className="ledger-cell">
                  <span className="cell-label">TOTAL SYSTEMS</span>
                  <span className="cell-value">06 VERIFIED</span>
                </div>
                <div className="ledger-cell">
                  <span className="cell-label">RESEARCH SPEC</span>
                  <span className="cell-value">SPY / ML WALK-FORWARD</span>
                </div>
                <div className="ledger-cell">
                  <span className="cell-label">HUMAN CONTROLS</span>
                  <span className="cell-value">DETERMINISTIC / GATED</span>
                </div>
              </div>
            </div>

            {/* Blueprint Work Specification Table */}
            <div className="concept-a-blueprint-section">
              <div className="blueprint-header">
                <h3>{"// TECHNICAL SPECIFICATIONS INDEX [RBL.CATALOGUE]"}</h3>
                <span className="bp-ref">SEC: PUBLIC_REPOSITORIES</span>
              </div>

              <div className="blueprint-grid">
                {[
                  {
                    id: "01",
                    code: "RBL.SYS.SPY",
                    name: "SPY MARKET AGENT",
                    phase: "Phase 5 · Beta",
                    stack: "Python · ML · FastAPI · Alpaca Paper",
                    spec: "Leakage-aware market intelligence system with fail-closed safety circuits.",
                  },
                  {
                    id: "02",
                    code: "RBL.SYS.PPO",
                    name: "PERSONAL PROJECT OPERATOR",
                    phase: "Phase 6 · Complete",
                    stack: "Node.js · GitHub · Telegram · OpenClaw",
                    spec: "Mobile command plane for verified software lifecycle runs.",
                  },
                  {
                    id: "03",
                    code: "RBL.SYS.LEDGER",
                    name: "LEDGERPILOT AI",
                    phase: "Phase 6 · Active",
                    stack: "Python · FastAPI · PostgreSQL · Next.js",
                    spec: "Human-in-the-loop document evidence accounting engine.",
                  },
                ].map((sys) => (
                  <div
                    key={sys.id}
                    className={`blueprint-card ${selectedRecord === sys.id ? "selected" : ""}`}
                    onClick={() => setSelectedRecord(sys.id)}
                  >
                    <div className="bp-card-top">
                      <span className="bp-id">[{sys.code}]</span>
                      <span className="bp-phase">{sys.phase}</span>
                    </div>
                    <h4 className="bp-name">{sys.name}</h4>
                    <p className="bp-spec">{sys.spec}</p>
                    <div className="bp-footer">
                      <span className="bp-stack">{sys.stack}</span>
                      <span className="bp-action">INSPECT SPEC ↗</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ATHLETE: Official Game Book / Match Stamped Ledger */
          <div className="concept-a-ath-spread">
            <div className="concept-a-ath-cover">
              <div className="concept-a-ath-badge">
                <span className="ath-num">NO. 13</span>
                <span className="ath-org">INDONESIA HIGH PERFORMANCE</span>
              </div>
              <h1 className="concept-a-ath-title">
                RICHIE LINARDI
                <span className="sub">
                  COMPETITIVE RECORD // GAME BOOK 2021–2025
                </span>
              </h1>
              <div className="concept-a-ath-abstract">
                <p>
                  Official match-by-match competitive record spanning national
                  junior representation, East Java provincial gold, and three
                  DBL high school campaigns.
                </p>
              </div>

              {/* Box Score Snapshot Table */}
              <div className="concept-a-boxscore-strip">
                <div className="boxscore-cell boxscore-cell--gold">
                  <span className="bx-event">ASEAN SCHOOLS GAMES 2024</span>
                  <span className="bx-match">FINAL: INDONESIA 56–54 PHI</span>
                  <span className="bx-stat">12 PTS · 4 REB · 24 MIN</span>
                </div>
                <div className="boxscore-cell boxscore-cell--gold">
                  <span className="bx-event">PORPROV JATIM VIII 2023</span>
                  <span className="bx-match">FINAL: SURABAYA 93–57 JEMBER</span>
                  <span className="bx-stat">21 PTS · 7 REB · GOLD</span>
                </div>
                <div className="boxscore-cell">
                  <span className="bx-event">DBL EAST JAVA 2023</span>
                  <span className="bx-match">FINAL: RUNNER-UP</span>
                  <span className="bx-stat">121 PTS · 1ST TEAM ALL-STAR</span>
                </div>
              </div>
            </div>

            {/* Official Match Log Ledger */}
            <div className="concept-a-matchlog-section">
              <div className="matchlog-header">
                <h3>
                  {"// VERIFIED SCORE-SHEET LEDGER [FIBA · DBL · PERBASI]"}
                </h3>
                <span className="ml-stamp">OFFICIAL TOURNAMENT DATA</span>
              </div>

              <div className="matchlog-table">
                <div className="matchlog-row matchlog-row--head">
                  <span>SEASON</span>
                  <span>TOURNAMENT & TEAM</span>
                  <span>GP</span>
                  <span>PPG / PTS</span>
                  <span>RPG / REB</span>
                  <span>SPLITS (FG · 3PT · FT)</span>
                  <span>HONOR / RESULT</span>
                </div>
                <div className="matchlog-row">
                  <span className="ml-bold">2024</span>
                  <span>FIBA U18 Asia Cup · Indonesia</span>
                  <span>3 GP</span>
                  <span>5.3 PPG</span>
                  <span>3.0 RPG</span>
                  <span>37.5 FG% · 50.0 FT%</span>
                  <span className="ml-badge">FIBA National</span>
                </div>
                <div className="matchlog-row">
                  <span className="ml-bold">2023</span>
                  <span>DBL East Java · SMA Gloria 1</span>
                  <span>10 GP</span>
                  <span>12.1 PPG (121 PTS)</span>
                  <span>8.4 RPG (84 REB)</span>
                  <span>58.5% · 45.0% · 72.4%</span>
                  <span className="ml-badge ml-badge--gold">
                    Runner-Up · 1st Team
                  </span>
                </div>
                <div className="matchlog-row">
                  <span className="ml-bold">2023</span>
                  <span>Kejurnas KU17 Wilayah 5 · CLS</span>
                  <span>3 GP</span>
                  <span>10.3 PPG (31 PTS)</span>
                  <span>4.0 RPG (12 REB)</span>
                  <span>64.29% FG (18/28 · basketyukFgLeaderboard)</span>
                  <span className="ml-badge">KU17 Qualifier</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
