import Link from "next/link";
import {
  asg2024FinalSnapshot,
  basketballSources,
  dblSeasonStats,
  fibaU18Snapshot,
  kejurnasKu17Snapshot,
  porprovViiiFinalSnapshot,
} from "@/data/basketball-record";

export function AthleteCareerProgression() {
  const dbl2021 = dblSeasonStats.find((d) => d.season === "2021");
  const dbl2022 = dblSeasonStats.find((d) => d.season === "2022");
  const dbl2023 = dblSeasonStats.find((d) => d.season === "2023");

  return (
    <section
      aria-labelledby="progression-heading"
      className="athlete-section"
      id="progression"
    >
      <div className="athlete-container">
        <div className="athlete-section-heading" data-reveal>
          <div>
            <p className="athlete-kicker">Verified progression</p>
            <h2 className="athlete-title-display" id="progression-heading">
              From academy origins to international competition.
            </h2>
          </div>
          <p>
            The athlete timeline tracks development as an intentional
            progression: from early academy training through high school
            competition with SMA Gloria 1 Surabaya to representing Indonesia on
            continental courts in 2024.
          </p>
        </div>

        <div
          aria-label="Three-chapter career progression track"
          className="athlete-progression__chapters"
          data-reveal
          data-reveal-delay="1"
          role="region"
        >
          {/* =================================================================
              CHAPTER 01: FOUNDATION & JUNIOR DEVELOPMENT (2015–2020)
              ================================================================= */}
          <article className="athlete-chapter-card athlete-chapter-card--foundation">
            <div className="athlete-chapter-card__header">
              <div className="athlete-chapter-card__meta">
                <span className="athlete-chapter-card__tag">CHAPTER 01</span>
                <span className="athlete-chapter-card__years">2015—2020</span>
              </div>
              <span className="athlete-chapter-card__badge">
                DEVELOPMENT FOUNDATION
              </span>
            </div>

            <div className="athlete-chapter-card__headline">
              <h3>Foundation & Junior Development</h3>
              <p className="athlete-chapter-card__lead">
                Initial competitive groundwork began with Western Basketball
                Surabaya in 2015 and an eight-year curriculum at DBL Academy
                starting in 2016, progressing into middle school tournament play
                with SMP IPH West Surabaya.
              </p>
            </div>

            <div className="athlete-chapter-card__foundation-grid">
              <div className="athlete-foundation-item">
                <div className="athlete-foundation-item__year">2015</div>
                <div>
                  <h4>Western Basketball Surabaya</h4>
                  <p>
                    Junior club fundamentals and introductory competitive play
                    in Surabaya.
                  </p>
                  <a
                    className="athlete-source-link"
                    href={basketballSources.instagramWbs.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Club record ↗
                  </a>
                </div>
              </div>

              <div className="athlete-foundation-item">
                <div className="athlete-foundation-item__year">2016</div>
                <div>
                  <h4>DBL Academy Development</h4>
                  <p>
                    Commenced structured 8-year player development program in
                    Surabaya.
                  </p>
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblAcademy.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Academy profile ↗
                  </a>
                </div>
              </div>

              <div className="athlete-foundation-item">
                <div className="athlete-foundation-item__year">2018–19</div>
                <div>
                  <h4>DBL Academy Selection Teams</h4>
                  <p>
                    Consecutive international tournament selections, including
                    2018 Thailand campaign.
                  </p>
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblAcademy.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Selection record ↗
                  </a>
                </div>
              </div>

              <div className="athlete-foundation-item">
                <div className="athlete-foundation-item__year">2019</div>
                <div>
                  <h4>Junior DBL East Java · SMP IPH West</h4>
                  <p>
                    Middle school league campaign: 3 GP, 21 PTS, 19 REB, 1 AST.
                  </p>
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblProfile.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Junior DBL profile ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* =================================================================
              CHAPTER 02: SMA GLORIA 1 SURABAYA VARSITY CHAPTER (2021–2023)
              Signature centerpiece feature card with 3 internal year columns
              ================================================================= */}
          <article className="athlete-chapter-card athlete-chapter-card--centerpiece">
            <div className="athlete-chapter-card__header">
              <div className="athlete-chapter-card__meta">
                <span className="athlete-chapter-card__tag athlete-chapter-card__tag--gold">
                  CHAPTER 02 · CENTERPIECE RECORD
                </span>
                <span className="athlete-chapter-card__years">2021—2023</span>
              </div>
              <span className="athlete-chapter-card__badge athlete-chapter-card__badge--gold">
                EAST JAVA RUNNER-UP · FIRST TEAM
              </span>
            </div>

            <div className="athlete-chapter-card__headline">
              <h3>SMA Gloria 1 Surabaya Varsity Chapter</h3>
              <p className="athlete-chapter-card__lead">
                Three consecutive DBL East Java varsity campaigns, progressing
                from a sophomore semifinal debut to leading Gloria 1 to the 2023
                Championship Series Final with conference First Team honors.
              </p>
            </div>

            {/* Centerpiece 3-column scorecard layout */}
            <div
              aria-label="SMA Gloria 1 DBL three-season scorecard"
              className="athlete-centerpiece-grid"
              role="region"
            >
              {/* Year 1: 2021 */}
              <div className="athlete-centerpiece-col">
                <div className="athlete-centerpiece-col__header">
                  <span className="athlete-centerpiece-col__year">2021</span>
                  <span className="athlete-centerpiece-col__stage">
                    SOPHOMORE DEBUT
                  </span>
                </div>
                <div className="athlete-centerpiece-col__tournament">
                  DBL East Java 2021
                </div>
                <div className="athlete-centerpiece-col__result">
                  Fantastic Four (Semifinal)
                </div>
                <div className="athlete-centerpiece-col__honors">
                  Second Team DBL East Java 2021
                </div>
                {dbl2021 ? (
                  <div className="athlete-centerpiece-col__stats">
                    <div className="athlete-stat-mini">
                      <strong>{dbl2021.games}</strong>
                      <span>GP</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2021.points}</strong>
                      <span>PTS</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2021.rebounds}</strong>
                      <span>REB</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2021.assists}</strong>
                      <span>AST</span>
                    </div>
                  </div>
                ) : null}
                <p className="athlete-centerpiece-col__notes">
                  Varsity debut season establishing rotation presence and
                  earning conference Second Team honors during sophomore year.
                </p>
                <div className="athlete-centerpiece-col__footer">
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblProfile.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    DBL profile ↗
                  </a>
                </div>
              </div>

              {/* Year 2: 2022 */}
              <div className="athlete-centerpiece-col">
                <div className="athlete-centerpiece-col__header">
                  <span className="athlete-centerpiece-col__year">2022</span>
                  <span className="athlete-centerpiece-col__stage">
                    JUNIOR CAMPAIGN
                  </span>
                </div>
                <div className="athlete-centerpiece-col__tournament">
                  DBL East Java 2022 North Region
                </div>
                <div className="athlete-centerpiece-col__result">
                  Sweet Sixteen
                </div>
                {dbl2022 ? (
                  <div className="athlete-centerpiece-col__stats">
                    <div className="athlete-stat-mini">
                      <strong>{dbl2022.games}</strong>
                      <span>GP</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2022.points}</strong>
                      <span>PTS</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2022.rebounds}</strong>
                      <span>REB</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2022.assists}</strong>
                      <span>AST</span>
                    </div>
                  </div>
                ) : null}
                <p className="athlete-centerpiece-col__notes">
                  Key offensive and playmaking contributor across regional
                  playoff bracket, averaging 13.0 PPG, 5.3 RPG, and 3.3 APG.
                </p>
                <div className="athlete-centerpiece-col__footer">
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblProfile.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    DBL match record ↗
                  </a>
                </div>
              </div>

              {/* Year 3: 2023 */}
              <div className="athlete-centerpiece-col athlete-centerpiece-col--featured">
                <div className="athlete-centerpiece-col__header">
                  <span className="athlete-centerpiece-col__year">2023</span>
                  <span className="athlete-centerpiece-col__stage athlete-centerpiece-col__stage--gold">
                    SENIOR FINAL RUN
                  </span>
                </div>
                <div className="athlete-centerpiece-col__tournament">
                  DBL East Java 2023 Championship Series
                </div>
                <div className="athlete-centerpiece-col__result athlete-centerpiece-col__result--gold">
                  1st Runner-Up (Finalist)
                </div>
                <div className="athlete-centerpiece-col__honors athlete-centerpiece-col__honors--gold">
                  Kopi Good Day First Team DBL East Java 2023
                </div>
                {dbl2023 ? (
                  <div className="athlete-centerpiece-col__stats">
                    <div className="athlete-stat-mini">
                      <strong>{dbl2023.games}</strong>
                      <span>GP</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2023.points}</strong>
                      <span>PTS</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2023.rebounds}</strong>
                      <span>REB</span>
                    </div>
                    <div className="athlete-stat-mini">
                      <strong>{dbl2023.assists}</strong>
                      <span>AST</span>
                    </div>
                  </div>
                ) : null}
                {dbl2023?.shooting ? (
                  <div className="athlete-centerpiece-col__splits">
                    <span>{dbl2023.shooting}</span>
                  </div>
                ) : null}
                <p className="athlete-centerpiece-col__notes">
                  Led Gloria 1 to the East Java provincial final across 10 games
                  with First Team honors; third consecutive DBL Camp selection.
                </p>
                <div className="athlete-centerpiece-col__footer">
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblFirstTeam.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    DBL final report ↗
                  </a>
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblProfile.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    DBL season profile ↗
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* =================================================================
              CHAPTER 03: CITY, PROVINCIAL & INTERNATIONAL BREAKTHROUGH (2023–2024)
              Pinnacle escalation card without 2023 DBL duplication
              ================================================================= */}
          <article className="athlete-chapter-card athlete-chapter-card--pinnacle">
            <div className="athlete-chapter-card__header">
              <div className="athlete-chapter-card__meta">
                <span className="athlete-chapter-card__tag athlete-chapter-card__tag--red">
                  CHAPTER 03 · PINNACLE ESCALATION
                </span>
                <span className="athlete-chapter-card__years">2023—2024</span>
              </div>
              <span className="athlete-chapter-card__badge athlete-chapter-card__badge--red">
                INTERNATIONAL GOLD · CONTINENTAL PLAY
              </span>
            </div>

            <div className="athlete-chapter-card__headline">
              <h3>
                Expanding Representation: City, Provincial & International
              </h3>
              <p className="athlete-chapter-card__lead">
                Stepping onto city, provincial, and national rosters—from
                provincial gold with Kota Surabaya and national championship
                qualification to representing Indonesia on continental courts
                and earning national All-Star honors.
              </p>
            </div>

            <div className="athlete-chapter-card__pinnacle-grid">
              {/* Result 1: PorProv VIII Jatim 2023 */}
              <div className="athlete-pinnacle-card">
                <div className="athlete-pinnacle-card__scope">
                  <span>CITY REPRESENTATION</span>
                  <span>2023</span>
                </div>
                <h4>PorProv VIII Jawa Timur · Gold Medal</h4>
                <p className="athlete-pinnacle-card__team">
                  Kota Surabaya · Pekan Olahraga Provinsi VIII Jatim
                </p>
                {porprovViiiFinalSnapshot ? (
                  <div className="athlete-pinnacle-card__stat-callout">
                    <strong>
                      {porprovViiiFinalSnapshot.points} PTS ·{" "}
                      {porprovViiiFinalSnapshot.rebounds} REB
                    </strong>
                    <span>Championship Final (93–57 vs Jember)</span>
                  </div>
                ) : null}
                <p className="athlete-pinnacle-card__desc">
                  Surabaya 5x5 men&apos;s basketball championship title at GOR
                  Delta, Sidoarjo.
                </p>
                {porprovViiiFinalSnapshot?.source ? (
                  <a
                    className="athlete-source-link"
                    href={porprovViiiFinalSnapshot.source.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Press report (Lenza Nasional) ↗
                  </a>
                ) : null}
              </div>

              {/* Result 2: Kejurnas KU17 2023 */}
              <div className="athlete-pinnacle-card">
                <div className="athlete-pinnacle-card__scope">
                  <span>PROVINCIAL SELECTION</span>
                  <span>2023</span>
                </div>
                <h4>Kejurnas KU17 2023 · Jawa Timur</h4>
                <p className="athlete-pinnacle-card__team">
                  Jawa Timur Representative · CLS Surabaya Qualification
                </p>
                {kejurnasKu17Snapshot ? (
                  <div className="athlete-pinnacle-card__stat-callout">
                    <strong>
                      {kejurnasKu17Snapshot.points} PTS ·{" "}
                      {kejurnasKu17Snapshot.rebounds} REB
                    </strong>
                    <span>3 GP · {kejurnasKu17Snapshot.fieldGoalPct}</span>
                  </div>
                ) : null}
                <p className="athlete-pinnacle-card__desc">
                  National youth championship tournament play representing Jawa
                  Timur.
                </p>
                <a
                  className="athlete-source-link"
                  href={basketballSources.instagramCls.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  CLS club record ↗
                </a>
              </div>

              {/* Result 3: ASEAN Schools Games 2024 */}
              <div className="athlete-pinnacle-card athlete-pinnacle-card--featured">
                <div className="athlete-pinnacle-card__scope">
                  <span className="athlete-scope-highlight">
                    INDONESIA NATIONAL TEAM
                  </span>
                  <span>2024</span>
                </div>
                <h4>ASEAN Schools Games · Gold Medal</h4>
                <p className="athlete-pinnacle-card__team">
                  Indonesia Boys&apos; Basketball Team · Da Nang
                </p>
                {asg2024FinalSnapshot ? (
                  <div className="athlete-pinnacle-card__stat-callout">
                    <strong>
                      {asg2024FinalSnapshot.points} PTS ·{" "}
                      {asg2024FinalSnapshot.rebounds} REB
                    </strong>
                    <span>Championship Final (56–54 vs Philippines)</span>
                  </div>
                ) : null}
                <p className="athlete-pinnacle-card__desc">
                  Historic international gold medal victory in the championship
                  final against the Philippines.
                </p>
                {asg2024FinalSnapshot?.source ? (
                  <a
                    className="athlete-source-link"
                    href={asg2024FinalSnapshot.source.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Official final box score / IBL ↗
                  </a>
                ) : null}
              </div>

              {/* Result 4: FIBA U18 Asia Cup & DBL All-Star 2024 */}
              <div className="athlete-pinnacle-card athlete-pinnacle-card--featured">
                <div className="athlete-pinnacle-card__scope">
                  <span className="athlete-scope-highlight">
                    CONTINENTAL & ALL-STAR
                  </span>
                  <span>2024</span>
                </div>
                <h4>FIBA U18 Asia Cup & DBL All-Star</h4>
                <p className="athlete-pinnacle-card__team">
                  Indonesia National Team (Amman, Jordan) · DBL All-Star Roster
                </p>
                {fibaU18Snapshot ? (
                  <div className="athlete-pinnacle-card__stat-callout">
                    <strong>
                      {fibaU18Snapshot.ppg} PPG · {fibaU18Snapshot.rpg} RPG
                    </strong>
                    <span>3 GP · Continental Tournament Play</span>
                  </div>
                ) : null}
                <p className="athlete-pinnacle-card__desc">
                  Represented Indonesia in continental tournament competition in
                  Jordan; selected to 12-player national DBL All-Star boys&apos;
                  team.
                </p>
                <div className="athlete-pinnacle-card__links">
                  {fibaU18Snapshot?.source ? (
                    <a
                      className="athlete-source-link"
                      href={fibaU18Snapshot.source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      FIBA player profile ↗
                    </a>
                  ) : null}
                  <a
                    className="athlete-source-link"
                    href={basketballSources.dblAllStar.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    DBL All-Star roster ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="athlete-progression__cta-row" data-reveal>
          <span>CAREER TIMELINE / 2015—2026 ARCHIVE</span>
          <Link className="athlete-source-link" href="/basketball/journey">
            Open complete journey timeline →
          </Link>
        </div>
      </div>
    </section>
  );
}
