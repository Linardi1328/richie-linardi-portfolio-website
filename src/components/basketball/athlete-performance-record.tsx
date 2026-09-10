import Link from "next/link";
import {
  basketballAchievements,
  basketballSources,
  dblSeasonStats,
  fibaU18Snapshot,
} from "@/data/basketball-record";

export function AthletePerformanceRecord() {
  const dbl2023 = dblSeasonStats.find((s) => s.season === "2023");
  const asg2024 = basketballAchievements.find((a) =>
    a.category.includes("ASEAN Schools Games"),
  );

  return (
    <section
      aria-labelledby="performance-heading"
      className="athlete-section athlete-performance"
      id="performance"
    >
      <div className="athlete-container">
        <div className="athlete-section-heading" data-reveal>
          <div>
            <p className="athlete-kicker">Verified competition records</p>
            <h2 className="athlete-title-display" id="performance-heading">
              Performance measured by competition context.
            </h2>
          </div>
          <p>
            Statistics stay partitioned by competition and level of play rather
            than blended into aggregate totals. Every listed figure traces
            directly to published tournament recaps, official profiles, or match
            box scores.
          </p>
        </div>

        <div
          aria-label="Verified competition performance record sheets"
          className="athlete-performance__grid"
          data-reveal
          data-reveal-delay="1"
          role="region"
        >
          {/* Card 1: 2024 ASEAN Schools Games (Featured International Final) */}
          <article className="athlete-sheet-card athlete-sheet-card--featured">
            <div>
              <div className="athlete-sheet-card__top">
                <span className="athlete-sheet-card__competition">
                  INDONESIA · ASG 2024
                </span>
                <span className="athlete-sheet-card__badge">
                  Gold Medal Final
                </span>
              </div>

              <h3>ASEAN Schools Games Title Game</h3>

              <div className="athlete-sheet-card__stat-callout">
                <div
                  aria-label="Final score: Indonesia 56, Philippines 54"
                  className="athlete-sheet-card__big-num"
                >
                  56 — 54
                </div>
                <span className="athlete-sheet-card__num-label">
                  Final Score · Indonesia defeated Philippines
                </span>
              </div>

              <div className="athlete-sheet-card__metrics">
                <div className="athlete-sheet-card__metric-item">
                  <span>Points</span>
                  <strong>12</strong>
                </div>
                <div className="athlete-sheet-card__metric-item">
                  <span>Rebounds</span>
                  <strong>4</strong>
                </div>
                <div className="athlete-sheet-card__metric-item">
                  <span>Role</span>
                  <strong>Title Game</strong>
                </div>
              </div>

              <p className="athlete-sheet-card__context-note">
                Contributed 12 points and 4 rebounds in the boys&apos;
                basketball championship game against the Philippines in Da Nang,
                Vietnam.
              </p>
            </div>

            <div className="athlete-sheet-card__footer">
              <span className="font-mono text-xs text-[var(--stage-muted)]">
                ASG Boys Basketball Final
              </span>
              <a
                className="athlete-source-link"
                href={asg2024?.source.href || basketballSources.asgBox.href}
                rel="noreferrer"
                target="_blank"
              >
                {asg2024?.source.label || basketballSources.asgBox.label} ↗
              </a>
            </div>
          </article>

          {/* Card 2: 2023 DBL East Java Campaign */}
          <article className="athlete-sheet-card">
            <div>
              <div className="athlete-sheet-card__top">
                <span className="athlete-sheet-card__competition">
                  SMA GLORIA 1 · DBL 2023
                </span>
                <span className="athlete-sheet-card__badge">First Team</span>
              </div>

              <h3>Kopi Good Day DBL East Java</h3>

              <div className="athlete-sheet-card__stat-callout">
                <div className="athlete-sheet-card__big-num">
                  {dbl2023?.points ?? 121} PTS
                </div>
                <span className="athlete-sheet-card__num-label">
                  10 Games · East Java Final Run
                </span>
              </div>

              <div className="athlete-sheet-card__metrics">
                <div className="athlete-sheet-card__metric-item">
                  <span>Rebounds</span>
                  <strong>{dbl2023?.rebounds ?? 84}</strong>
                </div>
                <div className="athlete-sheet-card__metric-item">
                  <span>Assists</span>
                  <strong>{dbl2023?.assists ?? 25}</strong>
                </div>
                <div className="athlete-sheet-card__metric-item">
                  <span>Games</span>
                  <strong>{dbl2023?.games ?? 10}</strong>
                </div>
              </div>

              <p className="athlete-sheet-card__context-note">
                Shooting efficiency across 10 tournament appearances:{" "}
                <strong className="text-[var(--stage-accent)]">
                  {dbl2023?.shooting || "58.5 FG% · 45.0 3PT% · 72.4 FT%"}
                </strong>
                .
              </p>
            </div>

            <div className="athlete-sheet-card__footer">
              <span className="font-mono text-xs text-[var(--stage-muted)]">
                DBL Official Season Profile
              </span>
              <a
                className="athlete-source-link"
                href={dbl2023?.source.href || basketballSources.dblProfile.href}
                rel="noreferrer"
                target="_blank"
              >
                {dbl2023?.source.label || basketballSources.dblProfile.label} ↗
              </a>
            </div>
          </article>

          {/* Card 3: 2024 FIBA U18 Asia Cup */}
          <article className="athlete-sheet-card">
            <div>
              <div className="athlete-sheet-card__top">
                <span className="athlete-sheet-card__competition">
                  INDONESIA · FIBA 2024
                </span>
                <span className="athlete-sheet-card__badge">Continental</span>
              </div>

              <h3>FIBA U18 Asia Cup 2024</h3>

              <div className="athlete-sheet-card__stat-callout">
                <div className="athlete-sheet-card__big-num">
                  {fibaU18Snapshot.ppg} PPG
                </div>
                <span className="athlete-sheet-card__num-label">
                  {fibaU18Snapshot.games} Tournament Appearances · Jordan
                </span>
              </div>

              <div className="athlete-sheet-card__metrics">
                <div className="athlete-sheet-card__metric-item">
                  <span>RPG</span>
                  <strong>{fibaU18Snapshot.rpg}</strong>
                </div>
                <div className="athlete-sheet-card__metric-item">
                  <span>APG</span>
                  <strong>{fibaU18Snapshot.apg}</strong>
                </div>
                <div className="athlete-sheet-card__metric-item">
                  <span>EFF</span>
                  <strong>{fibaU18Snapshot.efficiency}</strong>
                </div>
              </div>

              <p className="athlete-sheet-card__context-note">
                Continental tournament play representing Indonesia against
                Asia&apos;s top national youth programs in Amman, Jordan.
              </p>
            </div>

            <div className="athlete-sheet-card__footer">
              <span className="font-mono text-xs text-[var(--stage-muted)]">
                FIBA Official Player Profile
              </span>
              <a
                className="athlete-source-link"
                href={fibaU18Snapshot.source.href}
                rel="noreferrer"
                target="_blank"
              >
                {fibaU18Snapshot.source.label} ↗
              </a>
            </div>
          </article>
        </div>

        <div className="athlete-progression__cta-row" data-reveal>
          <span>STATISTICAL ARCHIVE / SEASONS & TOURNAMENTS</span>
          <Link className="athlete-source-link" href="/basketball/stats">
            Open full statistics record →
          </Link>
        </div>
      </div>
    </section>
  );
}
