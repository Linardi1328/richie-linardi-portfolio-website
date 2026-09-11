import Link from "next/link";
import {
  asg2024FinalSnapshot,
  basketballSources,
  dblSeasonStats,
  fibaU18Snapshot,
  heatChallenge2025Snapshot,
  kejurnasKu17Snapshot,
  porprovViiiFinalSnapshot,
} from "@/data/basketball-record";

export function AthleteStatsPage() {
  const highSchoolDblStats = dblSeasonStats.filter(
    (season) => season.season !== "2019",
  );

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
                <Link className="athlete-btn-secondary" href="#heat-challenge">
                  Heat Challenge 2025
                </Link>
                <Link className="athlete-btn-secondary" href="#dbl-progression">
                  SMA Gloria 1 record
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
                  06
                </div>
              </div>

              <div className="athlete-hero__identity-meta">
                <div>
                  <span>Partitions</span>
                  <strong>6 Distinct Blocks</strong>
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
                  <strong>FIBA · DBL · Major League · Press</strong>
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
                  medal in a 93–57 final victory over Kabupaten Jember. Richie
                  Linardi contributed 21 points and 7 rebounds in the title
                  match.
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
          BLOCK 03: CLUB QUALIFICATION (KUALIFIKASI KEJURNAS KU-17 WILAYAH 5)
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
                Partition 03 · Inter-club qualification
              </p>
              <h2 className="athlete-title-display" id="kejurnas-stats-heading">
                Kualifikasi Kejurnas KU-17 Wilayah 5.
              </h2>
            </div>
            <p>
              Official tournament statistics from the Kejurnas KU-17 Wilayah 5
              inter-club qualification pathway with CLS Surabaya in East Java.
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
                    KUALIFIKASI KEJURNAS KU-17 WILAYAH 5 · CLS SURABAYA
                  </span>
                  <h3>Tournament Match Statistics & Shooting Efficiency</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="athlete-stat-card__stage-badge">
                    OFFICIAL TOURNAMENT STATS
                  </span>
                </div>
              </div>

              <div
                aria-label="Kejurnas KU17 score sheet"
                className="athlete-scoresheet-strip athlete-scoresheet-strip--9col"
              >
                <div className="athlete-scoresheet-cell">
                  <strong>{kejurnasKu17Snapshot.games}</strong>
                  <span>GP</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{kejurnasKu17Snapshot.minutes}</strong>
                  <span>MIN</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{kejurnasKu17Snapshot.points}</strong>
                  <span>PTS</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{kejurnasKu17Snapshot.rebounds}</strong>
                  <span>REB</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{kejurnasKu17Snapshot.assists}</strong>
                  <span>AST</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{kejurnasKu17Snapshot.steals}</strong>
                  <span>STL</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{kejurnasKu17Snapshot.blocks}</strong>
                  <span>BLK</span>
                </div>
                <div className="athlete-scoresheet-cell athlete-scoresheet-cell--highlight">
                  <strong>{kejurnasKu17Snapshot.fieldGoalPct}</strong>
                  <span>FG% (RANK #1)</span>
                </div>
                <div className="athlete-scoresheet-cell athlete-scoresheet-cell--highlight">
                  <strong>{kejurnasKu17Snapshot.efficiency}</strong>
                  <span>EFF</span>
                </div>
              </div>

              <p className="athlete-stat-overview-box__notes">
                Recorded 31 points, 12 rebounds, 3 assists, 2 steals, and 2
                blocks across 58:27 minutes in 3 qualification games with CLS
                Surabaya in East Java, leading the tournament with 64.29%
                field-goal shooting.
              </p>

              <div className="athlete-stat-overview-box__footer">
                <a
                  className="athlete-source-link"
                  href={basketballSources.basketyuk.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Basketyuk player event totals ↗
                </a>
                <a
                  className="athlete-source-link"
                  href={basketballSources.basketyukFgLeaderboard.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Basketyuk FG% leaderboard (Rank #1) ↗
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BLOCK 04: INVITATIONAL CLUB COMPETITION (HEAT CHALLENGE CUP 2025)
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="heat-challenge-stats-heading"
        className="athlete-section"
        id="heat-challenge"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">
                Partition 04 · Invitational club competition
              </p>
              <h2
                className="athlete-title-display"
                id="heat-challenge-stats-heading"
              >
                Heat Challenge Cup 2025 · KL Hornbills.
              </h2>
            </div>
            <p>
              Official tournament statistics from the Heat Challenge Cup 2025 in
              Kuala Lumpur, Malaysia, published by Major League Malaysia. Team
              placement preserved under verified claim boundaries.
            </p>
          </div>

          {heatChallenge2025Snapshot ? (
            <div
              aria-label="Heat Challenge Cup 2025 statistics grid"
              className="athlete-stat-overview-box"
              data-reveal
              data-reveal-delay="1"
              role="region"
            >
              <div className="athlete-stat-overview-box__header">
                <div>
                  <span className="athlete-stat-card__tag">
                    HEAT CHALLENGE CUP 2025 · KL HORNBILLS
                  </span>
                  <h3>Official Tournament Statistics · Kuala Lumpur</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="athlete-stat-card__stage-badge text-amber-300 border-amber-500/40">
                    1ST RUNNER-UP (OWNER-PROVIDED)
                  </span>
                  <span className="athlete-stat-card__stage-badge">
                    OFFICIAL STATS
                  </span>
                </div>
              </div>

              <div
                aria-label="Heat Challenge Cup 2025 tournament aggregates"
                className="athlete-scoresheet-strip athlete-scoresheet-strip--9col"
              >
                <div className="athlete-scoresheet-cell">
                  <strong>{heatChallenge2025Snapshot.games}</strong>
                  <span>GP</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{heatChallenge2025Snapshot.minutes}</strong>
                  <span>MIN ({heatChallenge2025Snapshot.mpg} MPG)</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{heatChallenge2025Snapshot.points}</strong>
                  <span>PTS ({heatChallenge2025Snapshot.ppg} PPG)</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{heatChallenge2025Snapshot.rebounds}</strong>
                  <span>REB ({heatChallenge2025Snapshot.rpg} RPG)</span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{heatChallenge2025Snapshot.steals}</strong>
                  <span>STL ({heatChallenge2025Snapshot.stpg} STPG)</span>
                </div>
                <div className="athlete-scoresheet-cell athlete-scoresheet-cell--highlight">
                  <strong>{heatChallenge2025Snapshot.fieldGoalPct}</strong>
                  <span>
                    FG% ({heatChallenge2025Snapshot.fieldGoalsMade}/
                    {heatChallenge2025Snapshot.fieldGoalsAttempted})
                  </span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{heatChallenge2025Snapshot.threePointPct}</strong>
                  <span>
                    3PT% ({heatChallenge2025Snapshot.threePointsMade}/
                    {heatChallenge2025Snapshot.threePointsAttempted})
                  </span>
                </div>
                <div className="athlete-scoresheet-cell">
                  <strong>{heatChallenge2025Snapshot.freeThrowPct}</strong>
                  <span>
                    FT% ({heatChallenge2025Snapshot.freeThrowsMade}/
                    {heatChallenge2025Snapshot.freeThrowsAttempted})
                  </span>
                </div>
                <div className="athlete-scoresheet-cell athlete-scoresheet-cell--highlight">
                  <strong>
                    {heatChallenge2025Snapshot.efficiency.toFixed(1)}
                  </strong>
                  <span>EFF</span>
                </div>
              </div>

              <div className="athlete-stat-highlight-strip">
                <span className="athlete-stat-highlight-strip__label">
                  Single-game standout
                </span>
                <p>
                  <strong>
                    {heatChallenge2025Snapshot.singleGameHigh.date} vs{" "}
                    {heatChallenge2025Snapshot.singleGameHigh.opponent}:
                  </strong>{" "}
                  {heatChallenge2025Snapshot.singleGameHigh.minutes} MIN ·{" "}
                  {heatChallenge2025Snapshot.singleGameHigh.points} PTS (
                  {heatChallenge2025Snapshot.singleGameHigh.shooting}) ·{" "}
                  {heatChallenge2025Snapshot.singleGameHigh.rebounds} REB ·{" "}
                  {heatChallenge2025Snapshot.singleGameHigh.steals} STL ·{" "}
                  {heatChallenge2025Snapshot.singleGameHigh.efficiency.toFixed(
                    1,
                  )}{" "}
                  EFF
                </p>
              </div>

              <p className="athlete-stat-overview-box__notes">
                {heatChallenge2025Snapshot.contextNote}
              </p>

              <div className="athlete-stat-overview-box__footer">
                <a
                  className="athlete-source-link"
                  href={heatChallenge2025Snapshot.source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Major League Malaysia · Player statistics ↗
                </a>
                <a
                  className="athlete-source-link"
                  href={heatChallenge2025Snapshot.gameLogSource.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  View game log ↗
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BLOCK 05: HIGH SCHOOL VARSITY PROGRESSION (SMA GLORIA 1)
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="dbl-progression-heading"
        className="athlete-section"
        id="dbl-progression"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">
                Partition 05 · High school varsity progression
              </p>
              <h2
                className="athlete-title-display"
                id="dbl-progression-heading"
              >
                Three seasons at SMA Gloria 1.
              </h2>
            </div>
            <p>
              Official DBL East Java varsity progression across the 2021, 2022,
              and 2023 seasons with SMA Gloria 1 Surabaya, culminating in
              back-to-back East Java championships and All-Star honors.
            </p>
          </div>

          <div
            aria-label="DBL high school career progression scorecard"
            className="athlete-dbl-seasons__grid"
            data-reveal
            data-reveal-delay="1"
            role="region"
          >
            {highSchoolDblStats.map((season) => {
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
                      SMA Gloria 1
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

                  {season.fgPct ? (
                    <div className="athlete-dbl-season-card__splits">
                      <div className="athlete-split-item">
                        <span className="athlete-split-item__val">
                          {season.fgPct}
                        </span>
                        <span className="athlete-split-item__lbl">FG%</span>
                      </div>
                      <div className="athlete-split-item">
                        <span className="athlete-split-item__val">
                          {season.threePtPct}
                        </span>
                        <span className="athlete-split-item__lbl">3PT%</span>
                      </div>
                      <div className="athlete-split-item">
                        <span className="athlete-split-item__val">
                          {season.ftPct}
                        </span>
                        <span className="athlete-split-item__lbl">FT%</span>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>

          <div className="athlete-section-source-footer" data-reveal>
            <a
              className="athlete-source-link"
              href={basketballSources.dblProfile.href}
              rel="noreferrer"
              target="_blank"
            >
              Source · DBL Indonesia player profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BLOCK 06: MEASUREMENT INTEGRITY STANDARDS
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
                Partition 06 · Measurement integrity
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
                  Kejurnas, Heat Challenge Cup, and Indonesia national team
                  performances.
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
