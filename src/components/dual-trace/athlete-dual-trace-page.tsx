"use client";

import Link from "next/link";
import {
  dblSeasonStats,
  asg2024FinalSnapshot,
  porprovViiiFinalSnapshot,
  fibaU18Snapshot,
  basketballSources,
} from "@/data/basketball-record";
import { useProofMode } from "./proof-mode-context";
import { DualTraceEngine } from "./dual-trace-engine";
import { ReverseBleed } from "./reverse-bleed";

export function AthleteDualTracePage() {
  const { isProofMode } = useProofMode();

  const dbl2023 = dblSeasonStats.find(
    (s) => s.season === "2023" && s.context.includes("Gloria 1"),
  );

  return (
    <div
      className={`dual-trace-page dual-trace-page--athlete ${
        isProofMode ? "dual-trace-page--proof" : ""
      }`}
    >
      {/* Visual Trace Engine */}
      <DualTraceEngine world="basketball" />

      {/* Subtle Professional reverse-side circuit bleed */}
      <ReverseBleed world="basketball" />

      {/* =====================================================================
          CHAPTER 01: ORIGIN // MONUMENTAL NUMBER 13 & HERO
          ===================================================================== */}
      <section
        id="chapter-origin"
        className="dt-section dt-section--hero dt-section--hero-ath"
        aria-labelledby="ath-hero-title"
      >
        <div className="dt-hero-container">
          {/* Folio registration stamp */}
          <div className="dt-folio-stamp dt-folio-stamp--gold">
            <span className="dt-stamp-box dt-stamp-box--gold">
              NO. 13 // COMPETITIVE RECORD
            </span>
            <span className="dt-stamp-spec">
              EAST JAVA PROVINCIAL GOLD · INDONESIA REPRESENTATION 2024
            </span>
          </div>

          {/* Monumental Typography: 13 */}
          <div className="dt-monument-wrap">
            <h1
              id="ath-hero-title"
              className="dt-monument-title dt-monument-title--ath"
            >
              <span className="dt-monument-num">13</span>
            </h1>
            <div className="dt-monument-secondary dt-monument-secondary--ath">
              <span className="dt-monument-tag">EAST JAVA</span>
              <span className="dt-monument-sep">/</span>
              <span className="dt-monument-tag">SURABAYA</span>
              <span className="dt-monument-sep">/</span>
              <span className="dt-monument-tag">INDONESIA</span>
            </div>
          </div>

          {/* Author Positioning Statement */}
          <div className="dt-hero-statement">
            <p className="dt-lead-statement">
              Competitive basketball spanning DBL East Java (Runner-Up & First
              Team), East Java Provincial Championship (PorProv VIII Gold), and
              representing Indonesia in international competition in 2024.
            </p>

            <div className="dt-hero-telemetry dt-hero-telemetry--ath">
              <div className="dt-telem-cell">
                <span className="dt-telem-num dt-telem-num--gold">
                  {asg2024FinalSnapshot.points} PTS
                </span>
                <span className="dt-telem-lbl">ASG 2024 Final</span>
                {isProofMode && (
                  <span className="dt-proof-chip dt-proof-chip--gold">
                    IBL Official Box
                  </span>
                )}
              </div>
              <div className="dt-telem-cell">
                <span className="dt-telem-num dt-telem-num--gold">
                  {porprovViiiFinalSnapshot.points} PTS
                </span>
                <span className="dt-telem-lbl">PorProv VIII Gold</span>
                {isProofMode && (
                  <span className="dt-proof-chip dt-proof-chip--gold">
                    GOR Delta Final
                  </span>
                )}
              </div>
              <div className="dt-telem-cell">
                <span className="dt-telem-num dt-telem-num--gold">
                  {dbl2023?.points ?? 121} PTS
                </span>
                <span className="dt-telem-lbl">DBL East Java 2023</span>
                {isProofMode && (
                  <span className="dt-proof-chip dt-proof-chip--gold">
                    First Team
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 02: LANDMARKS // MAJOR TOURNAMENT FINAL SCOREBOARDS
          ===================================================================== */}
      <section
        id="chapter-systems"
        className="dt-section dt-section--landmarks"
        aria-labelledby="landmarks-heading"
      >
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-index dt-section-index--gold">
              SECTION 02 // CHAMPIONSHIP LANDMARKS
            </span>
            <h2 id="landmarks-heading" className="dt-section-title">
              Final Moments & Gold Medals
            </h2>
            <p className="dt-section-desc">
              Verified championship games where competitive preparation produced
              decisive fourth-quarter outcomes.
            </p>
          </div>

          {/* MONUMENTAL SCOREBOARD GRIDS */}
          <div className="dt-scoreboard-strip">
            {/* SCOREBOARD 01: ASEAN SCHOOLS GAMES 2024 */}
            <article className="dt-scoreboard-card">
              <div className="dt-sc-meta">
                <span className="dt-sc-context">
                  {asg2024FinalSnapshot.context}
                </span>
                <span className="dt-sc-badge dt-sc-badge--gold">
                  {asg2024FinalSnapshot.badge}
                </span>
              </div>

              <div className="dt-sc-teams">
                <span>{asg2024FinalSnapshot.team}</span>
                <span className="dt-sc-vs">vs</span>
                <span>{asg2024FinalSnapshot.opponent}</span>
              </div>

              {/* Monumental Score */}
              <div className="dt-sc-monument-score">
                <span>56</span>
                <span className="dt-sc-divider">—</span>
                <span>54</span>
              </div>

              <div className="dt-sc-player-contribution">
                <span className="dt-sc-stat-pill">
                  {asg2024FinalSnapshot.points} POINTS
                </span>
                <span className="dt-sc-stat-pill">
                  {asg2024FinalSnapshot.rebounds} REBOUNDS
                </span>
                <span className="dt-sc-stat-pill">GOLD MEDAL</span>
              </div>

              <p className="dt-sc-note">{asg2024FinalSnapshot.contextNote}</p>

              {isProofMode && (
                <div className="dt-sc-proof-drawer">
                  <span className="dt-proof-src-label">
                    SOURCE VERIFICATION:
                  </span>
                  <a
                    href={asg2024FinalSnapshot.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-proof-link"
                  >
                    {asg2024FinalSnapshot.source.label} ↗
                  </a>
                </div>
              )}
            </article>

            {/* SCOREBOARD 02: PORPROV JATIM VIII 2023 */}
            <article className="dt-scoreboard-card">
              <div className="dt-sc-meta">
                <span className="dt-sc-context">
                  {porprovViiiFinalSnapshot.context}
                </span>
                <span className="dt-sc-badge dt-sc-badge--gold">
                  {porprovViiiFinalSnapshot.badge}
                </span>
              </div>

              <div className="dt-sc-teams">
                <span>{porprovViiiFinalSnapshot.team}</span>
                <span className="dt-sc-vs">vs</span>
                <span>{porprovViiiFinalSnapshot.opponent}</span>
              </div>

              {/* Monumental Score */}
              <div className="dt-sc-monument-score">
                <span>93</span>
                <span className="dt-sc-divider">—</span>
                <span>57</span>
              </div>

              <div className="dt-sc-player-contribution">
                <span className="dt-sc-stat-pill">
                  {porprovViiiFinalSnapshot.points} POINTS
                </span>
                <span className="dt-sc-stat-pill">
                  {porprovViiiFinalSnapshot.rebounds} REBOUNDS
                </span>
                <span className="dt-sc-stat-pill">GOLD MEDAL</span>
              </div>

              <p className="dt-sc-note">
                {porprovViiiFinalSnapshot.contextNote}
              </p>

              {isProofMode && (
                <div className="dt-sc-proof-drawer">
                  <span className="dt-proof-src-label">
                    SOURCE VERIFICATION:
                  </span>
                  <a
                    href={porprovViiiFinalSnapshot.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-proof-link"
                  >
                    {porprovViiiFinalSnapshot.source.label} ↗
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 03: PROGRESSION // GLORIA 1 PROGRESSION & STATISTICAL LEDGER
          ===================================================================== */}
      <section
        id="chapter-experience"
        className="dt-section dt-section--progression"
        aria-labelledby="progression-heading"
      >
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-index dt-section-index--gold">
              SECTION 03 // COMPETITIVE LADDER
            </span>
            <h2 id="progression-heading" className="dt-section-title">
              SMA Gloria 1 & Elite Milestones
            </h2>
            <p className="dt-section-desc">
              Three DBL East Java campaigns moving from Fantastic Four to the
              East Java Final, culminating in First Team selection and 2024
              All-Star.
            </p>
          </div>

          {/* DBL 3-Season Progression Row */}
          <div className="dt-progression-row">
            <div className="dt-prog-card">
              <span className="dt-prog-year">2021</span>
              <h4>Fantastic Four</h4>
              <p>
                Named to the DBL East Java Second Team in breakthrough campaign.
              </p>
              <span className="dt-prog-tag">East Java Second Team</span>
            </div>

            <div className="dt-prog-card">
              <span className="dt-prog-year">2022</span>
              <h4>Sweet Sixteen</h4>
              <p>
                52 points, 21 rebounds, 13 assists across North Region play.
              </p>
              <span className="dt-prog-tag">SMA Gloria 1</span>
            </div>

            <div className="dt-prog-card dt-prog-card--highlight">
              <span className="dt-prog-year">2023</span>
              <h4>Runner-Up (Finalist)</h4>
              <p>
                121 points and 84 rebounds leading Gloria 1 to the East Java
                final.
              </p>
              <span className="dt-prog-tag dt-prog-tag--gold">
                East Java First Team
              </span>
            </div>
          </div>

          {/* Landmark Stat Cards (64.29% FG & FIBA U18) */}
          <div className="dt-stat-landmarks-grid">
            <article className="dt-stat-landmark-card">
              <span className="dt-landmark-label">
                KEJURNAS KU-17 WILAYAH 5 // TOURNAMENT LEADER
              </span>
              <div className="dt-landmark-big-num">
                <span>64.29%</span>
                <span className="dt-landmark-sub">FIELD GOAL EFFICIENCY</span>
              </div>
              <p className="dt-landmark-desc">
                Shot 18-for-28 from the field across 3 games representing CLS
                Surabaya, finishing Rank #1 on the official tournament
                field-goal leaderboard (basketyukFgLeaderboard).
              </p>
              {isProofMode && (
                <div className="dt-sc-proof-drawer">
                  <a
                    href={basketballSources.basketyuk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-proof-link"
                  >
                    Basketyuk Official Event Record ↗
                  </a>
                </div>
              )}
            </article>

            <article className="dt-stat-landmark-card">
              <span className="dt-landmark-label">
                FIBA U18 ASIA CUP 2024 // AMMAN, JORDAN
              </span>
              <div className="dt-landmark-big-num">
                <span>5.3</span>
                <span className="dt-landmark-sub">PPG · 3.0 RPG · 0.7 APG</span>
              </div>
              <p className="dt-landmark-desc">
                Official international tournament representation with Indonesia
                at the FIBA U18 Asia Cup in Amman, Jordan.
              </p>
              {isProofMode && (
                <div className="dt-sc-proof-drawer">
                  <a
                    href={fibaU18Snapshot.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-proof-link"
                  >
                    FIBA Official Player Profile ↗
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 04: EVIDENCE // RECORD ARCHIVE & WORLD HINGE
          ===================================================================== */}
      <section
        id="chapter-evidence"
        className="dt-section dt-section--evidence"
        aria-labelledby="ath-evidence-heading"
      >
        <div className="dt-container dt-evidence-terminal">
          <div className="dt-terminal-box dt-terminal-box--gold">
            <span className="dt-terminal-code dt-terminal-code--gold">
              RECORD.ARCHIVE // VERIFIED COMPETITION DOSSIER
            </span>
            <h2 id="ath-evidence-heading" className="dt-terminal-title">
              Complete Career Ledger & Sources
            </h2>
            <p className="dt-terminal-desc">
              Inspect match logs, tournament box scores, and career progression
              records verified through federation and press archives.
            </p>
            <div className="dt-terminal-actions">
              <Link
                href="/basketball/achievements"
                className="dt-primary-cta dt-primary-cta--gold"
              >
                <span>VIEW ACHIEVEMENTS LEDGER</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/basketball/stats"
                className="dt-secondary-cta dt-secondary-cta--gold"
              >
                Season Statistics Hub →
              </Link>
              <Link href="/" className="dt-secondary-cta">
                Turn to Professional side ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
