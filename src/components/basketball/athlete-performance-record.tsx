import Link from "next/link";
import {
  asg2024FinalSnapshot,
  dblSeasonStats,
  fibaU18Snapshot,
} from "@/data/basketball-record";

export function AthletePerformanceRecord() {
  const dbl2023 = dblSeasonStats.find((s) => s.season === "2023");

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
          {asg2024FinalSnapshot ? (
            <article className="athlete-sheet-card athlete-sheet-card--featured">
              <div>
                <div className="athlete-sheet-card__top">
                  <span className="athlete-sheet-card__competition">
                    {asg2024FinalSnapshot.context}
                  </span>
                  <span className="athlete-sheet-card__badge">
                    {asg2024FinalSnapshot.badge}
                  </span>
                </div>

                <h3>{asg2024FinalSnapshot.title}</h3>

                <div className="athlete-sheet-card__stat-callout">
                  <div
                    aria-label={asg2024FinalSnapshot.scoreAriaLabel}
                    className="athlete-sheet-card__big-num"
                  >
                    {asg2024FinalSnapshot.score}
                  </div>
                  <span className="athlete-sheet-card__num-label">
                    {asg2024FinalSnapshot.resultSummary}
                  </span>
                </div>

                <div className="athlete-sheet-card__metrics">
                  <div className="athlete-sheet-card__metric-item">
                    <span>Points</span>
                    <strong>{asg2024FinalSnapshot.points}</strong>
                  </div>
                  <div className="athlete-sheet-card__metric-item">
                    <span>Rebounds</span>
                    <strong>{asg2024FinalSnapshot.rebounds}</strong>
                  </div>
                  <div className="athlete-sheet-card__metric-item">
                    <span>Stage</span>
                    <strong>{asg2024FinalSnapshot.stage}</strong>
                  </div>
                </div>

                <p className="athlete-sheet-card__context-note">
                  {asg2024FinalSnapshot.contextNote}
                </p>
              </div>

              <div className="athlete-sheet-card__footer">
                <span className="font-mono text-xs text-[var(--stage-muted)]">
                  ASG Boys Basketball Final
                </span>
                <a
                  className="athlete-source-link"
                  href={asg2024FinalSnapshot.source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {asg2024FinalSnapshot.source.label} ↗
                </a>
              </div>
            </article>
          ) : null}

          {/* Card 2: 2023 DBL East Java Campaign */}
          {dbl2023 ? (
            <article className="athlete-sheet-card">
              <div>
                <div className="athlete-sheet-card__top">
                  <span className="athlete-sheet-card__competition">
                    {dbl2023.context}
                  </span>
                  <span className="athlete-sheet-card__badge">First Team</span>
                </div>

                <h3>Kopi Good Day DBL East Java</h3>

                <div className="athlete-sheet-card__stat-callout">
                  <div className="athlete-sheet-card__big-num">
                    {dbl2023.points} PTS
                  </div>
                  <span className="athlete-sheet-card__num-label">
                    {dbl2023.games} Games · East Java Final Run
                  </span>
                </div>

                <div className="athlete-sheet-card__metrics">
                  <div className="athlete-sheet-card__metric-item">
                    <span>Rebounds</span>
                    <strong>{dbl2023.rebounds}</strong>
                  </div>
                  <div className="athlete-sheet-card__metric-item">
                    <span>Assists</span>
                    <strong>{dbl2023.assists}</strong>
                  </div>
                  <div className="athlete-sheet-card__metric-item">
                    <span>Games</span>
                    <strong>{dbl2023.games}</strong>
                  </div>
                </div>

                {dbl2023.shooting ? (
                  <p className="athlete-sheet-card__context-note">
                    Shooting efficiency across {dbl2023.games} tournament
                    appearances:{" "}
                    <strong className="text-[var(--stage-accent)]">
                      {dbl2023.shooting}
                    </strong>
                    .
                  </p>
                ) : null}
              </div>

              <div className="athlete-sheet-card__footer">
                <span className="font-mono text-xs text-[var(--stage-muted)]">
                  DBL Official Season Profile
                </span>
                <a
                  className="athlete-source-link"
                  href={dbl2023.source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {dbl2023.source.label} ↗
                </a>
              </div>
            </article>
          ) : null}

          {/* Card 3: 2024 FIBA U18 Asia Cup */}
          {fibaU18Snapshot ? (
            <article className="athlete-sheet-card">
              <div>
                <div className="athlete-sheet-card__top">
                  <span className="athlete-sheet-card__competition">
                    INDONESIA · FIBA 2024
                  </span>
                  <span className="athlete-sheet-card__badge">Continental</span>
                </div>

                <h3>{fibaU18Snapshot.competition}</h3>

                <div className="athlete-sheet-card__stat-callout">
                  <div className="athlete-sheet-card__big-num">
                    {fibaU18Snapshot.ppg} PPG
                  </div>
                  <span className="athlete-sheet-card__num-label">
                    {fibaU18Snapshot.games} Tournament Appearances ·{" "}
                    {fibaU18Snapshot.location}
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
                  {fibaU18Snapshot.contextNote}
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
          ) : null}
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
