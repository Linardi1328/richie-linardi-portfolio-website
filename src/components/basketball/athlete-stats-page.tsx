import Link from "next/link";
import {
  asg2024FinalSnapshot,
  basketballSources,
  dblSeasonStats,
  fibaU18Snapshot,
  kejurnasKu17Snapshot,
  porprovViiiFinalSnapshot,
} from "@/data/basketball-record";

export function AthleteStatsPage() {
  return (
    <article className="athlete-home athlete-subpage">
      {/* ----------------------------------------------------------------------
          HERO: STATS OVERVIEW
          ---------------------------------------------------------------------- */}
      <header aria-label="Athlete statistics overview" className="athlete-hero">
        <div className="athlete-container">
          <div className="athlete-hero__grid">
            <div className="athlete-hero__copy" data-reveal>
              <p className="athlete-kicker">Basketball · Verified statistics</p>
              <h1 className="athlete-title-display athlete-hero__title">
                Competition-partitioned numbers.
              </h1>
              <p className="athlete-lead athlete-hero__description">
                Statistics stay partitioned by competition rather than blended
                into aggregate totals. Every figure listed traces directly to
                published tournament recaps, official profiles, or match box
                scores.
              </p>
              <div className="athlete-hero__actions">
                <Link className="athlete-btn-primary" href="#international">
                  International & FIBA
                </Link>
                <Link className="athlete-btn-secondary" href="#dbl-progression">
                  DBL 4-season record
                </Link>
              </div>
            </div>

            <div
              aria-label="Athlete stats index rail"
              className="athlete-hero__identity-rail"
              data-reveal
              data-reveal-delay="1"
              role="region"
            >
              <div className="athlete-hero__identity-header">
                <span>RBL / METRICS</span>
                <span>PARTITIONED ARCHIVE</span>
              </div>

              <div className="athlete-hero__number-wrap">
                <svg
                  aria-hidden="true"
                  className="athlete-hero__court-arc"
                  fill="none"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    stroke="#c8a45c"
                    strokeDasharray="4 6"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M15 100 H185 M100 15 V185"
                    stroke="#c8a45c"
                    strokeWidth="0.8"
                  />
                </svg>

                <div aria-hidden="true" className="athlete-hero__number">
                  05
                </div>
              </div>

              <div className="athlete-hero__identity-meta">
                <div>
                  <span>Partitions</span>
                  <strong>5 Distinct Blocks</strong>
                </div>
                <div>
                  <span>Integrity</span>
                  <strong>Zero Aggregate Bleed</strong>
                </div>
                <div>
                  <span>Peak season</span>
                  <strong>121 PTS · 84 REB</strong>
                </div>
                <div>
                  <span>Sources</span>
                  <strong>FIBA · DBL · Press</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------------------------
          BLOCK 01: INTERNATIONAL COMPETITION (ASG & FIBA)
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="international-stats-heading"
        className="athlete-section athlete-section--international"
        id="international"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">Partition 01 · International</p>
              <h2
                className="athlete-title-display"
                id="international-stats-heading"
              >
                Indonesia national team play.
              </h2>
            </div>
            <p>
              Per-game figures from FIBA and championship final contributions
              from the ASEAN Schools Games are shown separately from domestic
              school competition.
            </p>
          </div>

          <div
            aria-label="International competition statistics"
            className="athlete-stats__dual-grid"
            data-reveal
            data-reveal-delay="1"
            role="region"
          >
            {/* ASG 2024 Final */}
            {asg2024FinalSnapshot ? (
              <article className="athlete-stat-card athlete-stat-card--featured">
                <div className="athlete-stat-card__header">
                  <div>
                    <span className="athlete-stat-card__tag text-red-400">
                      CHAMPIONSHIP FINAL · DA NANG
                    </span>
                    <h3 className="athlete-stat-card__title">
                      ASEAN Schools Games 2024
                    </h3>
                  </div>
                  <span className="athlete-stat-card__gold-badge">
                    GOLD MEDAL
                  </span>
                </div>

                <div className="athlete-stat-card__matchup">
                  <strong>Indonesia 56 — 54 Philippines</strong>
                  <span>Gold Medal Championship Game</span>
                </div>

                <div className="athlete-stat-card__big-numbers">
                  <div className="athlete-stat-metric">
                    <strong>{asg2024FinalSnapshot.points}</strong>
                    <span>POINTS</span>
                  </div>
                  <div className="athlete-stat-metric">
                    <strong>{asg2024FinalSnapshot.rebounds}</strong>
                    <span>REBOUNDS</span>
                  </div>
                </div>

                <p className="athlete-stat-card__notes">
                  Contributed 12 points and 4 rebounds in the two-point final
                  victory over the Philippines, securing Indonesia&apos;s
                  international gold medal.
                </p>

                {asg2024FinalSnapshot.source ? (
                  <div className="athlete-stat-card__footer">
                    <a
                      className="athlete-source-link"
                      href={asg2024FinalSnapshot.source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Official final box score / IBL ↗
                    </a>
                  </div>
                ) : null}
              </article>
            ) : null}

            {/* FIBA U18 Asia Cup 2024 */}
            {fibaU18Snapshot ? (
              <article className="athlete-stat-card">
                <div className="athlete-stat-card__header">
                  <div>
                    <span className="athlete-stat-card__tag text-red-400">
                      CONTINENTAL TOURNAMENT · AMMAN
                    </span>
                    <h3 className="athlete-stat-card__title">
                      FIBA U18 Asia Cup 2024
                    </h3>
                  </div>
                  <span className="athlete-stat-card__stage-badge">
                    FIBA ASIA
                  </span>
                </div>

                <div className="athlete-stat-card__matchup">
                  <strong>Indonesia National U18 Team</strong>
                  <span>Amman, Jordan · 3 Games Contested</span>
                </div>

                <div className="athlete-stat-card__big-numbers">
                  <div className="athlete-stat-metric">
                    <strong>{fibaU18Snapshot.games}</strong>
                    <span>GAMES</span>
                  </div>
                  <div className="athlete-stat-metric">
                    <strong>{fibaU18Snapshot.ppg}</strong>
                    <span>PPG</span>
                  </div>
                  <div className="athlete-stat-metric">
                    <strong>{fibaU18Snapshot.rpg}</strong>
                    <span>RPG</span>
                  </div>
                  <div className="athlete-stat-metric">
                    <strong>{fibaU18Snapshot.apg}</strong>
                    <span>APG</span>
                  </div>
                </div>

                <p className="athlete-stat-card__notes">
                  Continental tournament averages across 3 group and
                  classification games against Asia&apos;s leading national
                  programs.
                </p>

                {fibaU18Snapshot.source ? (
                  <div className="athlete-stat-card__footer">
                    <a
                      className="athlete-source-link"
                      href={fibaU18Snapshot.source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      FIBA official player profile ↗
                    </a>
                  </div>
                ) : null}
              </article>
            ) : null}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BLOCK 02: CITY REPRESENTATION (PORPROV VIII 2023 FINAL)
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="porprov-stats-heading"
        className="athlete-section"
        id="porprov"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">
                Partition 02 · City representation
              </p>
              <h2 className="athlete-title-display" id="porprov-stats-heading">
                PorProv VIII Jawa Timur 2023 final.
              </h2>
            </div>
            <p>
              Regional multi-sport games championship game with Kota Surabaya at
              GOR Delta, Sidoarjo. Verified by published press match recaps.
            </p>
          </div>

          {porprovViiiFinalSnapshot ? (
            <article
              className="athlete-spotlight-card"
              data-reveal
              data-reveal-delay="1"
            >
              <div className="athlete-spotlight-card__left">
                <span className="athlete-stat-card__tag">
                  PEKAN OLAHRAGA PROVINSI VIII JAWA TIMUR
                </span>
                <h3 className="athlete-spotlight-card__title">
                  Kota Surabaya 93 — 57 Kabupaten Jember
                </h3>
                <p className="athlete-spotlight-card__venue">
                  September 5, 2023 · GOR Delta, Sidoarjo · 5x5 Men&apos;s Final
                </p>
                <p className="athlete-spotlight-card__summary">
                  Kota Surabaya secured the PorProv VIII 5x5 basketball gold
                  medal in a decisive 93–57 final. Richie Linardi contributed 21
                  points and 7 rebounds as the team&apos;s primary scoring
                  presence.
                </p>

                {porprovViiiFinalSnapshot.source ? (
                  <div className="athlete-spotlight-card__footer">
                    <a
                      className="athlete-source-link"
                      href={porprovViiiFinalSnapshot.source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Verified press report (Lenza Nasional) ↗
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="athlete-spotlight-card__right">
                <div className="athlete-spotlight-metric">
                  <strong>{porprovViiiFinalSnapshot.points}</strong>
                  <span>POINTS IN FINAL</span>
                </div>
                <div className="athlete-spotlight-metric">
                  <strong>{porprovViiiFinalSnapshot.rebounds}</strong>
                  <span>REBOUNDS IN FINAL</span>
                </div>
                <div className="athlete-spotlight-metric athlete-spotlight-metric--gold">
                  <strong>GOLD</strong>
                  <span>PROVINCIAL CHAMPION</span>
                </div>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BLOCK 03: PROVINCIAL NATIONAL TOURNAMENT (KEJURNAS KU17 2023)
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="kejurnas-stats-heading"
        className="athlete-section"
        id="kejurnas"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">
                Partition 03 · National youth championship
              </p>
              <h2 className="athlete-title-display" id="kejurnas-stats-heading">
                Kejurnas KU17 2023 event data.
              </h2>
            </div>
            <p>
              Official tournament statistics from the national under-17
              championship representing Jawa Timur (via CLS Surabaya
              qualification).
            </p>
          </div>

          {kejurnasKu17Snapshot ? (
            <div
              aria-label="Kejurnas KU17 statistics grid"
              className="athlete-stat-overview-box"
              data-reveal
              data-reveal-delay="1"
              role="region"
            >
              <div className="athlete-stat-overview-box__header">
                <div>
                  <span className="athlete-stat-card__tag">
                    KEJURNAS ANTARKLUB U17 · JAWA TIMUR
                  </span>
                  <h3>Tournament Efficiency & Shooting Accuracy</h3>
                </div>
                <span className="athlete-stat-card__stage-badge">64.3 FG%</span>
              </div>

              <div className="athlete-metrics-row">
                <div className="athlete-stat-metric">
                  <strong>{kejurnasKu17Snapshot.games}</strong>
                  <span>GAMES</span>
                </div>
                <div className="athlete-stat-metric">
                  <strong>{kejurnasKu17Snapshot.points}</strong>
                  <span>POINTS</span>
                </div>
                <div className="athlete-stat-metric">
                  <strong>{kejurnasKu17Snapshot.rebounds}</strong>
                  <span>REBOUNDS</span>
                </div>
                <div className="athlete-stat-metric">
                  <strong>{kejurnasKu17Snapshot.assists}</strong>
                  <span>ASSISTS</span>
                </div>
                <div className="athlete-stat-metric">
                  <strong>{kejurnasKu17Snapshot.steals}</strong>
                  <span>STEALS</span>
                </div>
                <div className="athlete-stat-metric">
                  <strong>{kejurnasKu17Snapshot.blocks}</strong>
                  <span>BLOCKS</span>
                </div>
                <div className="athlete-stat-metric athlete-stat-metric--highlight">
                  <strong>{kejurnasKu17Snapshot.fieldGoalPct}</strong>
                  <span>FG ACCURACY</span>
                </div>
              </div>

              <p className="athlete-stat-overview-box__notes">
                Shot 64.29% from the field (9-for-14 2PT) with a 9-for-14 free
                throw line return across 3 contested national games, totaling 31
                points and 12 rebounds.
              </p>

              <div className="athlete-stat-overview-box__footer">
                <a
                  className="athlete-source-link"
                  href={basketballSources.basketyuk.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Basketyuk official database ↗
                </a>
                <a
                  className="athlete-source-link"
                  href={basketballSources.instagramCls.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  CLS club record ↗
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BLOCK 04: DBL FOUR-SEASON PROGRESSION (2019–2023)
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="dbl-progression-heading"
        className="athlete-section"
        id="dbl-progression"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">Partition 04 · DBL league play</p>
              <h2
                className="athlete-title-display"
                id="dbl-progression-heading"
              >
                DBL four-season progression.
              </h2>
            </div>
            <p>
              Every season tracked in official DBL profiles from middle school
              (SMP IPH West) through three varsity seasons at SMA Gloria 1
              Surabaya.
            </p>
          </div>

          <div
            aria-label="DBL 4-season career progression scorecard"
            className="athlete-dbl-seasons__grid"
            data-reveal
            data-reveal-delay="1"
            role="region"
          >
            {dblSeasonStats.map((season) => {
              const is2023 = season.season === "2023";
              return (
                <article
                  className={`athlete-dbl-season-card ${
                    is2023 ? "athlete-dbl-season-card--featured" : ""
                  }`}
                  key={season.season}
                >
                  <div className="athlete-dbl-season-card__top">
                    <span className="athlete-dbl-season-card__year">
                      {season.season}
                    </span>
                    <span className="athlete-dbl-season-card__team">
                      {season.season === "2019"
                        ? "SMP IPH West"
                        : "SMA Gloria 1"}
                    </span>
                  </div>

                  <h3 className="athlete-dbl-season-card__stage">
                    {season.context}
                  </h3>

                  <div className="athlete-dbl-season-card__stats">
                    <div className="athlete-stat-mini">
                      <strong>{season.games}</strong>
                      <span>GP</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{season.points}</strong>
                      <span>PTS</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{season.rebounds}</strong>
                      <span>REB</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{season.assists}</strong>
                      <span>AST</span>
                    </div>
                  </div>

                  {season.shooting ? (
                    <div className="athlete-dbl-season-card__shooting">
                      <span>{season.shooting}</span>
                    </div>
                  ) : null}

                  <div className="athlete-dbl-season-card__footer">
                    <a
                      className="athlete-source-link"
                      href={season.source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {season.source.label} ↗
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BLOCK 05: MEASUREMENT INTEGRITY STANDARDS
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="audit-standards-heading"
        className="athlete-section"
        id="audit"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">
                Partition 05 · Measurement integrity
              </p>
              <h2
                className="athlete-title-display"
                id="audit-standards-heading"
              >
                Why numbers stay partitioned.
              </h2>
            </div>
            <p>
              Basketball statistics are only honest when read inside the rules,
              duration, and competition caliber of the tournament where they
              were recorded.
            </p>
          </div>

          <div
            aria-label="Measurement integrity principles"
            className="athlete-principles-grid"
            data-reveal
            data-reveal-delay="1"
            role="region"
          >
            <div className="athlete-principle-card">
              <span className="athlete-principle-card__num">01</span>
              <h3>Caliber Separation</h3>
              <p>
                Averaging FIBA continental numbers with high school tournament
                totals creates false equivalences. Each competition level stays
                in its own partition.
              </p>
            </div>

            <div className="athlete-principle-card">
              <span className="athlete-principle-card__num">02</span>
              <h3>Zero Inferred Stats</h3>
              <p>
                If a published match report verifies 21 points and 7 rebounds
                (such as PorProv VIII), only those numbers are displayed. Steals
                or assists are never invented to complete a box score.
              </p>
            </div>

            <div className="athlete-principle-card">
              <span className="athlete-principle-card__num">03</span>
              <h3>Traceable Published Sources</h3>
              <p>
                Every listed figure links directly to official federation
                profiles (FIBA), tournament websites (DBL Indonesia), or
                published journalistic coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BOTTOM NAVIGATION BRIDGE
          ---------------------------------------------------------------------- */}
      <footer aria-label="Stats archive navigation" className="athlete-closing">
        <div className="athlete-container">
          <div className="athlete-closing__inner">
            <div data-reveal>
              <p className="athlete-kicker">Next in archive</p>
              <h2 className="athlete-title-display">
                Trace the career timeline.
              </h2>
              <p className="athlete-lead max-w-2xl">
                Explore the ten-year journey from junior club drills to
                international competition, or review the comprehensive
                achievements ledger.
              </p>

              <div className="athlete-closing__links">
                <Link
                  className="athlete-source-link"
                  href="/basketball/journey"
                >
                  Journey timeline →
                </Link>
                <Link
                  className="athlete-source-link"
                  href="/basketball/achievements"
                >
                  Achievements ledger →
                </Link>
                <Link className="athlete-source-link" href="/basketball">
                  Athlete homepage →
                </Link>
              </div>
            </div>

            <div
              aria-label="Archive navigation summary"
              className="athlete-closing__bridge-box"
              data-reveal
              data-reveal-delay="1"
              role="region"
            >
              <div>
                <span className="athlete-closing__bridge-title">
                  ARCHIVE ROUTE · STATISTICS
                </span>
                <p className="athlete-closing__bridge-text">
                  Competition-partitioned metrics tracing DBL, PorProv,
                  Kejurnas, and Indonesia national team performances.
                </p>
              </div>
              <Link className="athlete-source-link" href="/basketball">
                ← Return to athlete overview
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
