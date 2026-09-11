"use client";

import { useState } from "react";
import { publicProjectCatalogue } from "@/data/project-registry";
import {
  dblSeasonStats,
  fibaU18Snapshot,
  asg2024FinalSnapshot,
  porprovViiiFinalSnapshot,
  kejurnasKu17Snapshot,
} from "@/data/basketball-record";

type Mode = "professional" | "athlete";

export function ConceptATechnicalArchive({
  initialMode = "professional",
}: {
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [selectedRecord, setSelectedRecord] = useState<string>(
    publicProjectCatalogue[0]?.slug ?? "spy-market-agent",
  );

  // Canonical DBL 2023 season stats from registry
  const dbl2023 = dblSeasonStats.find(
    (s) => s.season === "2023" && s.context.includes("Gloria 1"),
  );

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
              : "RECORD: FEDERATION & PROVINCIAL DATA"}
          </span>
        </div>
        <div className="concept-a-folio__mode-switch">
          <button
            type="button"
            onClick={() => setMode("professional")}
            className={mode === "professional" ? "active" : ""}
          >
            [01] SYSTEMS DOSSIER
          </button>
          <span className="sep">/</span>
          <button
            type="button"
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
                  <span className="cell-label">TOTAL PUBLIC SYSTEMS</span>
                  <span className="cell-value">
                    {String(publicProjectCatalogue.length).padStart(2, "0")}
                  </span>
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
                {publicProjectCatalogue.slice(0, 3).map((sys) => {
                  const isSelected = selectedRecord === sys.slug;
                  return (
                    <button
                      type="button"
                      key={sys.slug}
                      className={`blueprint-card ${isSelected ? "selected" : ""}`}
                      onClick={() => setSelectedRecord(sys.slug)}
                      aria-pressed={isSelected}
                    >
                      <div className="bp-card-top">
                        <span className="bp-id">
                          [{sys.slug.toUpperCase().replace(/-/g, ".")}]
                        </span>
                        <span className="bp-phase">{sys.phase}</span>
                      </div>
                      <h4 className="bp-name">{sys.title}</h4>
                      <p className="bp-spec">{sys.summary}</p>
                      <div className="bp-footer">
                        <span className="bp-stack">
                          {sys.tags.slice(0, 4).join(" · ")}
                        </span>
                        <span className="bp-action">INSPECT +</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ATHLETE: Official Game Book / Match Stamped Ledger */
          <div className="concept-a-ath-spread">
            <div className="concept-a-ath-cover">
              <div className="concept-a-ath-badge">
                <span className="ath-num">NO. 13</span>
                <span className="ath-org">
                  INDONESIA COMPETITIVE RECORD // 2024
                </span>
              </div>
              <h1 className="concept-a-ath-title">
                RICHIE LINARDI
                <span className="sub">
                  COMPETITIVE RECORD // GAME BOOK 2021–2025
                </span>
              </h1>
              <div className="concept-a-ath-abstract">
                <p>
                  Official match-by-match competitive record spanning Indonesia
                  representation in 2024, East Java provincial gold (PorProv
                  VIII), and three DBL East Java seasons with SMA Gloria 1
                  Surabaya.
                </p>
              </div>

              {/* Box Score Snapshot Table */}
              <div className="concept-a-boxscore-strip">
                <div className="boxscore-cell boxscore-cell--gold">
                  <span className="bx-event">
                    {asg2024FinalSnapshot.competition}
                  </span>
                  <span className="bx-match">
                    FINAL: {asg2024FinalSnapshot.team}{" "}
                    {asg2024FinalSnapshot.score} {asg2024FinalSnapshot.opponent}
                  </span>
                  <span className="bx-stat">
                    {asg2024FinalSnapshot.points} PTS ·{" "}
                    {asg2024FinalSnapshot.rebounds} REB · Gold
                  </span>
                </div>
                <div className="boxscore-cell boxscore-cell--gold">
                  <span className="bx-event">
                    {porprovViiiFinalSnapshot.competition}
                  </span>
                  <span className="bx-match">
                    FINAL: {porprovViiiFinalSnapshot.team}{" "}
                    {porprovViiiFinalSnapshot.score}{" "}
                    {porprovViiiFinalSnapshot.opponent}
                  </span>
                  <span className="bx-stat">
                    {porprovViiiFinalSnapshot.points} PTS ·{" "}
                    {porprovViiiFinalSnapshot.rebounds} REB · GOLD
                  </span>
                </div>
                <div className="boxscore-cell">
                  <span className="bx-event">DBL EAST JAVA 2023</span>
                  <span className="bx-match">FINAL: RUNNER-UP</span>
                  <span className="bx-stat">
                    {dbl2023?.points ?? 121} PTS · EAST JAVA FIRST TEAM
                  </span>
                </div>
              </div>
            </div>

            {/* Official Match Log Ledger */}
            <div className="concept-a-matchlog-section">
              <div className="matchlog-header">
                <h3>
                  {"// VERIFIED SCORE-SHEET LEDGER [FIBA · DBL · BASKETYUK]"}
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
                  <span>{fibaU18Snapshot.competition} · Indonesia</span>
                  <span>{fibaU18Snapshot.games} GP</span>
                  <span>{fibaU18Snapshot.ppg} PPG (16 PTS)</span>
                  <span>{fibaU18Snapshot.rpg} RPG (9 REB)</span>
                  <span>37.5 FG% · 50.0 FT%</span>
                  <span className="ml-badge">FIBA U18 Record</span>
                </div>
                <div className="matchlog-row">
                  <span className="ml-bold">2023</span>
                  <span>DBL East Java · SMA Gloria 1</span>
                  <span>{dbl2023?.games ?? 10} GP</span>
                  <span>
                    {(
                      (dbl2023?.points ?? 121) / (dbl2023?.games ?? 10)
                    ).toFixed(1)}{" "}
                    PPG ({dbl2023?.points ?? 121} PTS)
                  </span>
                  <span>
                    {(
                      (dbl2023?.rebounds ?? 84) / (dbl2023?.games ?? 10)
                    ).toFixed(1)}{" "}
                    RPG ({dbl2023?.rebounds ?? 84} REB)
                  </span>
                  <span>
                    {dbl2023?.fgPct} · {dbl2023?.threePtPct} · {dbl2023?.ftPct}
                  </span>
                  <span className="ml-badge ml-badge--gold">
                    Runner-Up · 1st Team
                  </span>
                </div>
                <div className="matchlog-row">
                  <span className="ml-bold">2023</span>
                  <span>{kejurnasKu17Snapshot.competition} · CLS</span>
                  <span>{kejurnasKu17Snapshot.games} GP</span>
                  <span>
                    {(
                      kejurnasKu17Snapshot.points / kejurnasKu17Snapshot.games
                    ).toFixed(1)}{" "}
                    PPG ({kejurnasKu17Snapshot.points} PTS)
                  </span>
                  <span>
                    {(
                      kejurnasKu17Snapshot.rebounds / kejurnasKu17Snapshot.games
                    ).toFixed(1)}{" "}
                    RPG ({kejurnasKu17Snapshot.rebounds} REB)
                  </span>
                  <span>
                    {kejurnasKu17Snapshot.fieldGoalPct} FG (18/28 ·
                    basketyukFgLeaderboard)
                  </span>
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
