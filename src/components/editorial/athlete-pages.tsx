import Link from "next/link";
import {
  athletePathwayTracks,
  athleteCareerRecords,
  basketballAchievements,
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
  const labels: Record<string, string> = {
    club: "Club basketball",
    development: "Academy & development",
    schoolUniversity: "School & university",
  };
  return (
    <>
      <PageIntro
        eyebrow="The athlete journey"
        title="A journey made of many chapters."
        description="From the fundamentals in Surabaya to school, club, university, and international basketball. Each chapter adds something to the next."
      />
      <section className="section container section--compact">
        <SectionHeading
          label="International competition"
          title="Representing something bigger."
        />
        <div className="timeline">
          {athleteCareerRecords
            .filter(
              (item) =>
                item.level === "international" ||
                item.level === "national-pathway",
            )
            .map((item) => (
              <article className="timeline-item" key={item.id}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <p className="eyebrow">{item.team}</p>
                  <h3>{item.event}</h3>
                  <p>{item.result}</p>
                  {item.statLine ? <p>{item.statLine}</p> : null}
                  <div className="record-source">
                    <span>
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
      <div className="container journey-tracks">
        {Object.entries(athletePathwayTracks).map(([track, milestones]) => (
          <section className="section section--compact" key={track}>
            <SectionHeading
              label="The pathway"
              title={labels[track] ?? track}
            />
            <div className="timeline">
              {milestones.map((item) => (
                <article className="timeline-item" key={item.id}>
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <p className="eyebrow">{item.entity}</p>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    <div className="record-source">
                      <span>
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
        ))}
      </div>
    </>
  );
}

export function AthleteAchievements() {
  return (
    <>
      <PageIntro
        eyebrow="Achievements & competition"
        title="Milestones earned together."
        description="Team results, individual selections, and competition records from the journey so far. Published records and personal career records are identified below."
      />
      <section className="section container section--compact">
        <div className="card-grid">
          {basketballAchievements.map((item) => (
            <article className="content-card achievement-card" key={item.title}>
              <span className="large-year">{item.year}</span>
              <p className="eyebrow">{item.category}</p>
              <h2 className="card-heading">{item.title}</h2>
              <p>{item.detail}</p>
              {item.source ? (
                <a
                  className="text-link"
                  href={item.source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Published record ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="The wider record"
          title="Every competition has its context."
        />
        <div className="card-grid card-grid--two">
          {athleteCareerRecords.map((item) => (
            <article className="content-card" key={item.id}>
              <p className="eyebrow">
                {item.year} · {item.discipline} · {item.team}
              </p>
              <h3>{item.event}</h3>
              <p className="result-label">{item.result}</p>
              {item.statLine ? <p>{item.statLine}</p> : null}
              <p>{item.roleContext}</p>
              <div className="record-source">
                <span>
                  {(item.resultVerificationStatus ??
                    item.verificationStatus) === "verified"
                    ? "Published result"
                    : "Personal result record"}
                </span>
                {item.sources.map((source) => (
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    key={source.href}
                  >
                    {source.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
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
        eyebrow="Performance record"
        title="Numbers, with the full picture."
        description="Season totals, tournament averages, and individual finals are shown in their own competition context, with the original source close by."
      />
      <section className="section container section--compact">
        <SectionHeading label="Indonesia · 2024" title={fiba.competition}>
          {fiba.contextNote} Averages across {fiba.games} games.
        </SectionHeading>
        <div className="stat-grid stat-grid--four">
          {[
            [fiba.ppg, "Points per game"],
            [fiba.rpg.toFixed(1), "Rebounds per game"],
            [fiba.apg, "Assists per game"],
            [fiba.games, "Games played"],
          ].map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <a
          className="text-link"
          href={fiba.source.href}
          target="_blank"
          rel="noreferrer"
        >
          FIBA player record ↗
        </a>
      </section>
      <section className="section container">
        <SectionHeading label="DBL Indonesia" title="Season totals.">
          These are competition totals, rather than per-game averages.
        </SectionHeading>
        <div
          className="table-scroll"
          role="region"
          aria-label="DBL season statistics"
          tabIndex={0}
        >
          <table>
            <caption>DBL season record · published player profile</caption>
            <thead>
              <tr>
                {[
                  "Season",
                  "Competition",
                  "Games",
                  "Points",
                  "Rebounds",
                  "Assists",
                  "FG",
                  "3PT",
                  "FT",
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
        <a
          className="text-link"
          href={basketballSources.dblProfile.href}
          target="_blank"
          rel="noreferrer"
        >
          View the DBL source ↗
        </a>
      </section>
      <section className="section section--tinted">
        <div className="container">
          <SectionHeading
            label="In the finals"
            title="A contribution to the result."
          />
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
                    <span>Points</span>
                  </div>
                  <div>
                    <strong>{item.rebounds}</strong>
                    <span>Rebounds</span>
                  </div>
                </div>
                <a
                  className="text-link"
                  href={item.source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Final report ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="Club competitions"
          title="More of the competitive record."
        />
        <div className="card-grid card-grid--two">
          <article className="content-card">
            <p className="eyebrow">CLS Surabaya · 2023</p>
            <h3>{kejurnasKu17Snapshot.competition}</h3>
            <p>{kejurnasKu17Snapshot.contextNote}</p>
            <a
              className="text-link"
              href={basketballSources.basketyukFgLeaderboard.href}
              target="_blank"
              rel="noreferrer"
            >
              Published field-goal leaderboard ↗
            </a>
          </article>
          <article className="content-card">
            <p className="eyebrow">KL Hornbills · 2025</p>
            <h3>{heatChallenge2025Snapshot.competition}</h3>
            <p>{heatChallenge2025Snapshot.contextNote}</p>
            <a
              className="text-link"
              href={basketballSources.majorLeagueHeat2025Stats.href}
              target="_blank"
              rel="noreferrer"
            >
              Published tournament statistics ↗
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export function AthleteMedia() {
  return (
    <>
      <PageIntro
        eyebrow="Coverage & sources"
        title="The stories behind the record."
        description="Federation profiles, published reporting, competition statistics, and club channels connected to my basketball journey."
      />
      <section className="section container section--compact">
        <div className="card-grid card-grid--two">
          {Object.entries(basketballSources).map(([key, source], index) => (
            <a
              className="content-card navigation-card source-card"
              key={key}
              href={source.href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="eyebrow">
                Source {String(index + 1).padStart(2, "0")}{" "}
                <span aria-hidden="true">↗</span>
              </p>
              <h2 className="card-heading">{source.label}</h2>
              <p>{new URL(source.href).hostname.replace(/^www\./, "")}</p>
            </a>
          ))}
        </div>
        <div className="inline-invitation">
          <Link className="button button--primary" href="/basketball/gallery">
            Explore the photo archive ↗
          </Link>
        </div>
      </section>
    </>
  );
}
