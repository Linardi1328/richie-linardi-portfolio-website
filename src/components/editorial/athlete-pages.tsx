import Link from "next/link";
import { PortfolioPhotograph } from "@/components/ui/portfolio-photograph";
import {
  athletePathwayTracks,
  athleteCareerRecords,
  basketballSources,
  dblSeasonStats,
  fibaU18Snapshot,
  asg2024FinalSnapshot,
  porprovViiiFinalSnapshot,
  heatChallenge2025Snapshot,
  kejurnasKu17Snapshot,
} from "@/data/basketball-record";
import { PageIntro, SectionHeading } from "./shared";

export function AthleteJourney() {
  const internationalRecords = athleteCareerRecords.filter(
    (item) =>
      item.level === "international" ||
      item.level === "national-pathway" ||
      item.level === "city-provincial",
  );

  return (
    <>
      <PageIntro
        eyebrow="Competitive Career Timeline"
        title="An eight-year journey across competition pathways."
        description="From long-term developmental fundamentals in Surabaya to school basketball, provincial tournaments, and representing Indonesia internationally. Organized into four distinct career tracks with verified source evidence."
      />

      {/* Track 1: National & International Representation */}
      <section className="section container section--compact">
        <SectionHeading
          label="Track 01 · Representation"
          title="National, International & Provincial Competition"
        >
          Signature campaigns representing Indonesia, East Java (Jawa Timur),
          and Kota Surabaya in regional and continental championships.
        </SectionHeading>
        <div className="timeline">
          {internationalRecords.map((item) => (
            <article className="timeline-item" key={item.id}>
              <span className="timeline-year">{item.year}</span>
              <div>
                <span className="timeline-badge">
                  {item.level === "international"
                    ? "International"
                    : item.level === "national-pathway"
                      ? "National Pathway"
                      : "Provincial Games"}
                </span>
                <p className="eyebrow">{item.team}</p>
                <h3>{item.event}</h3>
                <p className="result-label">{item.result}</p>
                {item.statLine ? <p>{item.statLine}</p> : null}
                {item.roleContext ? <p>{item.roleContext}</p> : null}
                <div className="record-source">
                  <span
                    className={`verification-pill ${
                      item.verificationStatus === "verified"
                        ? "verification-pill--published"
                        : ""
                    }`}
                  >
                    {item.verificationStatus === "verified"
                      ? "Published record"
                      : "Personal career record"}
                  </span>
                  {item.sources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Track 2: Academy & Long-Term Development */}
      <section className="section container">
        <SectionHeading
          label="Track 02 · Fundamentals"
          title="Academy & Long-term Development (2016–2024)"
        >
          Eight years of intentional athlete development at DBL Academy,
          including international selection tours and high-performance camps.
        </SectionHeading>
        <div className="timeline">
          {athletePathwayTracks.development.map((item) => (
            <article className="timeline-item" key={item.id}>
              <span className="timeline-year">{item.year}</span>
              <div>
                <span className="timeline-badge">Academy Track</span>
                <p className="eyebrow">{item.entity}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <div className="record-source">
                  <span
                    className={`verification-pill ${
                      item.verificationStatus === "verified"
                        ? "verification-pill--published"
                        : ""
                    }`}
                  >
                    {item.verificationStatus === "verified"
                      ? "Published record"
                      : "Personal career record"}
                  </span>
                  {item.source ? (
                    <a href={item.source.href} target="_blank" rel="noreferrer">
                      {item.source.label} ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Track 3: School Basketball */}
      <section className="section container">
        <SectionHeading
          label="Track 03 · School Varsity"
          title="School Basketball Progression (2019–2023)"
        >
          Middle school campaign with SMP IPH West followed by high-school
          varsity competition with SMA Gloria 1 Surabaya in the DBL series.
        </SectionHeading>
        <div className="timeline">
          {athletePathwayTracks.schoolUniversity
            .filter((item) => item.year <= "2023")
            .map((item) => (
              <article className="timeline-item" key={item.id}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <span className="timeline-badge">School Competition</span>
                  <p className="eyebrow">{item.entity}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <div className="record-source">
                    <span
                      className={`verification-pill ${
                        item.verificationStatus === "verified"
                          ? "verification-pill--published"
                          : ""
                      }`}
                    >
                      {item.verificationStatus === "verified"
                        ? "Published record"
                        : "Personal career record"}
                    </span>
                    {item.source ? (
                      <a
                        href={item.source.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.source.label} ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      {/* Track 4: Club & University Play */}
      <section className="section container">
        <SectionHeading
          label="Track 04 · Club & University"
          title="Club Leagues & University Competition"
        >
          Surabaya junior and senior club competitions, inter-club national
          qualifications with CLS Surabaya, and university basketball campaigns.
        </SectionHeading>
        <div className="timeline">
          {athletePathwayTracks.club.map((item) => (
            <article className="timeline-item" key={item.id}>
              <span className="timeline-year">{item.year}</span>
              <div>
                <span className="timeline-badge">Club & Regional</span>
                <p className="eyebrow">{item.entity}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <div className="record-source">
                  <span
                    className={`verification-pill ${
                      item.verificationStatus === "verified"
                        ? "verification-pill--published"
                        : ""
                    }`}
                  >
                    {item.verificationStatus === "verified"
                      ? "Published record"
                      : "Personal career record"}
                  </span>
                  {item.source ? (
                    <a href={item.source.href} target="_blank" rel="noreferrer">
                      {item.source.label} ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
          {athletePathwayTracks.schoolUniversity
            .filter((item) => item.year >= "2024")
            .map((item) => (
              <article className="timeline-item" key={item.id}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <span className="timeline-badge">University Varsity</span>
                  <p className="eyebrow">{item.entity}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <div className="record-source">
                    <span
                      className={`verification-pill ${
                        item.verificationStatus === "verified"
                          ? "verification-pill--published"
                          : ""
                      }`}
                    >
                      {item.verificationStatus === "verified"
                        ? "Published record"
                        : "Personal career record"}
                    </span>
                    {item.source ? (
                      <a
                        href={item.source.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.source.label} ↗
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      {/* Cross-World Bridge */}
      <section className="section container inline-invitation">
        <div>
          <p className="eyebrow">Beyond the Court</p>
          <h2>One discipline, expressed in two worlds.</h2>
        </div>
        <div className="button-row">
          <Link
            className="button button--primary"
            href="/basketball/achievements"
          >
            View achievements ↗
          </Link>
          <Link className="button button--plain" href="/experience">
            Professional experience →
          </Link>
        </div>
      </section>
    </>
  );
}

export function AthleteAchievements() {
  const signatureRecords = [
    {
      id: "asg-gold",
      year: "2024",
      badge: "International Championship · Gold Medal",
      title: "ASEAN Schools Games 2024 Champion",
      team: "Indonesia Boys National Team",
      location: "Da Nang, Vietnam",
      score: "56 — 54 vs Philippines",
      stat: "12 PTS · 4 REB in Final",
      detail:
        "Contributed 12 points and 4 rebounds in Indonesia's 56–54 gold medal final victory over the Philippines, capturing the boys' basketball championship in Da Nang, Vietnam.",
      photo: "gold" as const,
      source: basketballSources.asgBox,
    },
    {
      id: "dbl-allstar",
      year: "2024",
      badge: "National High School Honors",
      title: "DBL Indonesia All-Star 2024",
      team: "Kopi Good Day DBL Indonesia All-Star",
      location: "Jakarta, Indonesia",
      score: "Top National Selection",
      stat: "Selected to All-Star Boys Roster",
      detail:
        "Selected to the 2024 DBL Indonesia All-Star boys roster following three consecutive DBL Camp appearances, representing the premier developmental high-school selection in Indonesia.",
      photo: "allStar" as const,
      source: basketballSources.dblAllStar,
    },
    {
      id: "fiba-u18",
      year: "2024",
      badge: "Continental Tournament Play",
      title: "FIBA U18 Asia Cup 2024",
      team: "Indonesia National Team",
      location: "Amman, Jordan",
      score: "Continental Championship",
      stat: "3 GP · 5.3 PPG · 3.0 RPG · 0.7 APG",
      detail:
        "Represented Indonesia in group stage play at the FIBA U18 Asia Cup in Amman, Jordan, facing elite continental junior competition.",
      source: basketballSources.fiba,
    },
  ];

  const majorTitles = [
    {
      year: "2023",
      category: "Kota Surabaya · PorProv VIII",
      title: "PorProv VIII 5v5 Champion · Gold Medal",
      detail:
        "Represented Kota Surabaya in the East Java Provincial Games, scoring 21 points and 7 rebounds in the 93–57 gold medal final victory over Kabupaten Jember at GOR Delta, Sidoarjo.",
      source: basketballSources.porprov2023,
      verified: true,
    },
    {
      year: "2023",
      category: "SMA Gloria 1 Surabaya",
      title: "Honda DBL East Java Runner-Up & First Team",
      detail:
        "Gloria 1 reached the East Java championship final; Richie earned DBL East Java First Team honors, recording 121 PTS, 84 REB, and 25 AST across 10 games.",
      source: basketballSources.dblFirstTeam,
      verified: true,
    },
    {
      year: "2023",
      category: "CLS Surabaya · Inter-Club Pathway",
      title: "Kejurnas KU-17 Wilayah 5 Champion & FG Leader",
      detail:
        "Led CLS Surabaya in the Kejurnas KU-17 Wilayah 5 inter-club tournament (Champion record). Recorded 31 PTS, 12 REB, 3 AST, 2 STL, and 2 BLK in 3 games, leading the competition with 64.29% field-goal shooting.",
      source: basketballSources.basketyukFgLeaderboard,
      secondarySource: basketballSources.basketyuk,
      verified: true,
    },
    {
      year: "2023",
      category: "Jawa Timur · National Qualification",
      title: "Pra-PON XXI Qualification",
      detail:
        "Selected to the Jawa Timur provincial squad, securing qualification for the 2024 PON XXI National Games.",
      verified: false,
    },
    {
      year: "2025",
      category: "Kota Surabaya · Provincial 3x3",
      title: "PorProv Jatim IX 3x3 Champion · Gold Medal",
      detail:
        "Represented Kota Surabaya in the provincial 3x3 games, earning the gold medal championship.",
      verified: false,
    },
  ];

  const universityClubPodiums = [
    {
      year: "2024",
      category: "Universitas Surabaya",
      title: "Liga Mahasiswa (LIMA) Nasional · 1st Runner-Up",
      detail:
        "Contributed to Universitas Surabaya's national championship finalist run during a one-semester university campaign.",
      verified: false,
    },
    {
      year: "2025",
      category: "KL Hornbills · Malaysia",
      title: "Heat Challenge Cup 2025 · 1st Runner-Up",
      detail:
        "Contested 6 games for KL Hornbills in regional invitational play in Puchong, Malaysia, earning 1st Runner-Up team honors.",
      source: basketballSources.majorLeagueHeat2025Stats,
      verified: true,
    },
    {
      year: "2026",
      category: "Monash University Malaysia",
      title: "ESP Varsity Championship · 1st Runner-Up",
      detail:
        "Contributed to Monash University's 1st Runner-Up finish in the 2026 ESP Varsity Championship, earning semifinal Player of the Game recognition.",
      verified: false,
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Milestones & Honors"
        title="Documented milestones earned through competition."
        description="International gold medals, national All-Star selection, provincial championships, and collegiate tournament podiums. Every milestone reflects team accountability, preparation, and authentic competition evidence."
      />

      {/* Tier 1: Featured Signature Honors */}
      <section className="section container section--compact">
        <SectionHeading
          label="Tier 01 · Signature Honors"
          title="International & National Landmarks"
        />
        {signatureRecords.map((item) => (
          <article className="achievement-hero-card" key={item.id}>
            {item.photo ? (
              <PortfolioPhotograph photo={item.photo} />
            ) : (
              <div
                style={{
                  background: "var(--accent-soft)",
                  borderRadius: "8px",
                  aspectRatio: "4 / 3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  fontWeight: "800",
                  color: "var(--accent)",
                }}
              >
                FIBA
              </div>
            )}
            <div className="achievement-hero-card__body">
              <span className="large-year">{item.year}</span>
              <p className="eyebrow">{item.badge}</p>
              <h3>{item.title}</h3>
              <p>
                <strong>{item.team}</strong> · {item.location}
              </p>
              <p>{item.detail}</p>
              <div className="record-source" style={{ marginTop: "0.5rem" }}>
                <span className="verification-pill verification-pill--published">
                  Published official record
                </span>
                <a
                  className="text-link"
                  href={item.source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.source.label} ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Tier 2: Major Championship Titles */}
      <section className="section container">
        <SectionHeading
          label="Tier 02 · Major Titles"
          title="Provincial, High School & Inter-Club Championships"
        />
        <div className="card-grid card-grid--two">
          {majorTitles.map((item) => (
            <article className="content-card achievement-card" key={item.title}>
              <span className="large-year">{item.year}</span>
              <p className="eyebrow">{item.category}</p>
              <h3 className="card-heading">{item.title}</h3>
              <p>{item.detail}</p>
              <div className="record-source">
                <span
                  className={`verification-pill ${
                    item.verified ? "verification-pill--published" : ""
                  }`}
                >
                  {item.verified
                    ? "Published tournament record"
                    : "Personal career record"}
                </span>
                {item.source ? (
                  <a
                    className="text-link"
                    href={item.source.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source.label} ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tier 3: University & Regional Club Podiums */}
      <section className="section container section--tinted">
        <SectionHeading
          label="Tier 03 · Continuing Play"
          title="University & Regional Club Podiums"
        />
        <div className="card-grid">
          {universityClubPodiums.map((item) => (
            <article className="content-card" key={item.title}>
              <span className="large-year">{item.year}</span>
              <p className="eyebrow">{item.category}</p>
              <h3 className="card-heading">{item.title}</h3>
              <p>{item.detail}</p>
              <div className="record-source">
                <span
                  className={`verification-pill ${
                    item.verified ? "verification-pill--published" : ""
                  }`}
                >
                  {item.verified
                    ? "Published tournament record"
                    : "Personal career record"}
                </span>
                {item.source ? (
                  <a
                    className="text-link"
                    href={item.source.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source.label} ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Navigation Bridge */}
      <section className="section container inline-invitation">
        <div>
          <p className="eyebrow">Explore Further</p>
          <h2>Numbers and images behind the record.</h2>
        </div>
        <div className="button-row">
          <Link className="button button--primary" href="/basketball/stats">
            Performance statistics ↗
          </Link>
          <Link className="button button--plain" href="/basketball/gallery">
            The photo archive →
          </Link>
        </div>
      </section>
    </>
  );
}

export function AthleteStats() {
  const fiba = fibaU18Snapshot;

  return (
    <>
      <PageIntro
        eyebrow="Athletic Performance Records"
        title="Verified basketball statistics, preserved in context."
        description="Official tournament averages, high-school season progression, and championship final box scores. Each record is displayed in its native competition scope without misleading cross-league aggregation."
      />

      {/* Scope & Methodology Banner */}
      <div className="container">
        <div className="stats-integrity-banner">
          <strong>Statistical Scope & Integrity Standard:</strong> Basketball
          statistics originate from distinct competitions with separate tracking
          standards—from FIBA 40-minute continental play and DBL 10-minute
          quarter high-school series to inter-club invitationals. To maintain
          veracity, figures are never aggregated across incompatible leagues and
          always link to verified third-party records.
        </div>
      </div>

      {/* Section 1: FIBA U18 Asia Cup 2024 */}
      <section className="section container section--compact">
        <SectionHeading
          label="International · Indonesia"
          title={fiba.competition}
        >
          {fiba.contextNote} Official FIBA tournament averages across{" "}
          {fiba.games} matches in Amman, Jordan.
        </SectionHeading>
        <div className="stat-grid stat-grid--four">
          {[
            [fiba.ppg.toFixed(1), "Points per game"],
            [fiba.rpg.toFixed(1), "Rebounds per game"],
            [fiba.apg.toFixed(1), "Assists per game"],
            [fiba.efficiency.toFixed(1), "Efficiency rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="record-source" style={{ marginTop: "1rem" }}>
          <span className="verification-pill verification-pill--published">
            Published official record
          </span>
          <a
            className="text-link"
            href={fiba.source.href}
            target="_blank"
            rel="noreferrer"
          >
            {fiba.source.label} ↗
          </a>
        </div>
      </section>

      {/* Section 2: DBL East Java Multi-Season Progression */}
      <section className="section container">
        <SectionHeading
          label="High School Progression · DBL East Java"
          title="Multi-Season High School Record (2019–2023)"
        >
          Official season totals from the DBL Indonesia player archive across
          middle school and high school varsity campaigns with SMP IPH West and
          SMA Gloria 1 Surabaya.
        </SectionHeading>
        <div
          className="table-scroll"
          role="region"
          aria-label="DBL season statistics table"
          tabIndex={0}
        >
          <table>
            <caption>
              DBL Indonesia official season totals · Verified player archive
            </caption>
            <thead>
              <tr>
                {[
                  "Season",
                  "Competition / Team",
                  "GP",
                  "PTS",
                  "REB",
                  "AST",
                  "FG%",
                  "3PT%",
                  "FT%",
                ].map((label) => (
                  <th key={label} scope="col">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dblSeasonStats.map((row) => (
                <tr key={`${row.season}-${row.context}`}>
                  <th scope="row">{row.season}</th>
                  <td>{row.context}</td>
                  <td>{row.games}</td>
                  <td>{row.points}</td>
                  <td>{row.rebounds}</td>
                  <td>{row.assists}</td>
                  <td>{row.fgPct ?? "—"}</td>
                  <td>{row.threePtPct ?? "—"}</td>
                  <td>{row.ftPct ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="record-source">
          <span className="verification-pill verification-pill--published">
            Published official profile
          </span>
          <a
            className="text-link"
            href={basketballSources.dblProfile.href}
            target="_blank"
            rel="noreferrer"
          >
            {basketballSources.dblProfile.label} ↗
          </a>
        </div>
      </section>

      {/* Section 3: Championship Final Box Scores */}
      <section className="section section--tinted">
        <div className="container">
          <SectionHeading
            label="Championship Finals"
            title="Title Game Box Scores & Personal Scoring"
          >
            Team results and individual contributions in gold medal championship
            deciders. Team results are clearly distinguished from individual box
            statistics.
          </SectionHeading>
          <div className="card-grid card-grid--two">
            {[asg2024FinalSnapshot, porprovViiiFinalSnapshot].map((item) => (
              <article className="content-card final-card" key={item.title}>
                <p className="eyebrow">{item.competition}</p>
                <h3>
                  {item.team} vs {item.opponent}
                </h3>
                <p className="final-score" aria-label={item.scoreAriaLabel}>
                  {item.score}
                </p>
                <p>{item.contextNote}</p>
                <div className="stat-grid">
                  <div>
                    <strong>{item.points}</strong>
                    <span>Points in final</span>
                  </div>
                  <div>
                    <strong>{item.rebounds}</strong>
                    <span>Rebounds in final</span>
                  </div>
                </div>
                <div className="record-source">
                  <span className="verification-pill verification-pill--published">
                    Published final box score
                  </span>
                  <a
                    className="text-link"
                    href={item.source.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.source.label} ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Inter-Club & Invitational Statistics */}
      <section className="section container">
        <SectionHeading
          label="Inter-Club & Tournament Play"
          title="Club Championship Shooting & Invitational Records"
        />
        <div className="card-grid card-grid--two">
          <article className="content-card">
            <p className="eyebrow">CLS Surabaya · 2023</p>
            <h3>{kejurnasKu17Snapshot.competition}</h3>
            <p>{kejurnasKu17Snapshot.contextNote}</p>
            <div className="stat-grid" style={{ marginBlock: "1rem" }}>
              <div>
                <strong>{kejurnasKu17Snapshot.points}</strong>
                <span>Points (3 GP)</span>
              </div>
              <div>
                <strong>{kejurnasKu17Snapshot.fieldGoalPct}</strong>
                <span>Field Goal % (Rank #1)</span>
              </div>
            </div>
            <div className="record-source">
              <span className="verification-pill verification-pill--published">
                Published leaderboard
              </span>
              <a
                className="text-link"
                href={basketballSources.basketyukFgLeaderboard.href}
                target="_blank"
                rel="noreferrer"
              >
                {basketballSources.basketyukFgLeaderboard.label} ↗
              </a>
            </div>
          </article>

          <article className="content-card">
            <p className="eyebrow">KL Hornbills · 2025</p>
            <h3>{heatChallenge2025Snapshot.competition}</h3>
            <p>{heatChallenge2025Snapshot.contextNote}</p>
            <div className="stat-grid" style={{ marginBlock: "1rem" }}>
              <div>
                <strong>{heatChallenge2025Snapshot.points}</strong>
                <span>Total Points (6 GP)</span>
              </div>
              <div>
                <strong>{heatChallenge2025Snapshot.fieldGoalPct}</strong>
                <span>Field Goal % (7/16)</span>
              </div>
            </div>
            <div className="record-source">
              <span className="verification-pill verification-pill--published">
                Published tournament statistics
              </span>
              <a
                className="text-link"
                href={basketballSources.majorLeagueHeat2025Stats.href}
                target="_blank"
                rel="noreferrer"
              >
                {basketballSources.majorLeagueHeat2025Stats.label} ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Cross-World Bridge */}
      <section className="section container inline-invitation">
        <div>
          <p className="eyebrow">Explore Connected Worlds</p>
          <h2>Evidence-backed records across athletics and engineering.</h2>
        </div>
        <div className="button-row">
          <Link className="button button--primary" href="/basketball/gallery">
            The photo archive ↗
          </Link>
          <Link className="button button--plain" href="/projects">
            Technical systems portfolio →
          </Link>
        </div>
      </section>
    </>
  );
}

export function AthleteMedia() {
  const mediaCategories = [
    {
      title: "Federation & Official Profiles",
      description:
        "Verified international and national sports federation registries and statistical profiles.",
      sources: [
        basketballSources.fiba,
        basketballSources.fiba3x3,
        basketballSources.dblProfile,
        basketballSources.sofascore,
      ],
    },
    {
      title: "Tournament Coverage & Box Scores",
      description:
        "Official championship reports, published box scores, and tournament leaderboard archives.",
      sources: [
        basketballSources.asgBox,
        basketballSources.porprov2023,
        basketballSources.basketyuk,
        basketballSources.basketyukFgLeaderboard,
        basketballSources.majorLeagueHeat2025Stats,
        basketballSources.majorLeagueHeat2025GameLog,
      ],
    },
    {
      title: "Development Tours & Retrospectives",
      description:
        "Published articles covering international selection tours, developmental camps, and All-Star rosters.",
      sources: [
        basketballSources.dblAllStar,
        basketballSources.dblFirstTeam,
        basketballSources.dblAcademy,
        basketballSources.dblThailand,
        basketballSources.dblMalaysia,
        basketballSources.dblVegas,
        basketballSources.dblPerth,
      ],
    },
    {
      title: "Verified Club Channels",
      description:
        "Official team and organizational channels for junior, senior, and invitational club play.",
      sources: [
        basketballSources.instagramCls,
        basketballSources.instagramAces,
        basketballSources.instagramHornbills,
        basketballSources.instagramWbs,
      ],
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Media & Documentation"
        title="Public records, articles & federation profiles."
        description="A transparent directory of published articles, federation registrations, official tournament box scores, and verified club references documenting Richie Linardi's basketball career."
      />

      <section className="section container section--compact">
        {mediaCategories.map((category) => (
          <div key={category.title} style={{ marginBottom: "3.5rem" }}>
            <SectionHeading label="Public Records" title={category.title}>
              {category.description}
            </SectionHeading>
            <div className="card-grid card-grid--two">
              {category.sources.map((source) => (
                <a
                  className="content-card navigation-card source-card"
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="eyebrow">
                    {new URL(source.href).hostname.replace(/^www\./, "")}{" "}
                    <span aria-hidden="true">↗</span>
                  </p>
                  <h3 className="card-heading">{source.label}</h3>
                  <span className="text-link">View official record ↗</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section container inline-invitation">
        <div>
          <p className="eyebrow">Keep Exploring</p>
          <h2>Explore the photographic archive.</h2>
        </div>
        <div className="button-row">
          <Link className="button button--primary" href="/basketball/gallery">
            The photo archive ↗
          </Link>
          <Link className="button button--plain" href="/contact">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
