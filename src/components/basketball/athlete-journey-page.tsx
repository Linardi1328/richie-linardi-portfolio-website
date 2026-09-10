import Link from "next/link";
import {
  athletePathwayTracks,
  type PathwayMilestone,
} from "@/data/basketball-record";

export function AthleteJourneyPage() {
  // Combine all pathway milestones and sort chronologically
  const allMilestones: PathwayMilestone[] = [
    ...athletePathwayTracks.club,
    ...athletePathwayTracks.development,
    ...athletePathwayTracks.schoolUniversity,
  ].sort((a, b) => {
    const yearA = parseInt(a.year.split("–")[0], 10);
    const yearB = parseInt(b.year.split("–")[0], 10);
    return yearA - yearB;
  });

  return (
    <article className="athlete-home athlete-subpage">
      {/* ----------------------------------------------------------------------
          HERO: JOURNEY PATHWAY OVERVIEW
          ---------------------------------------------------------------------- */}
      <header aria-label="Athlete journey overview" className="athlete-hero">
        <div className="athlete-container">
          <div className="athlete-hero__grid">
            <div className="athlete-hero__copy" data-reveal>
              <p className="athlete-kicker">Basketball · Career pathway</p>
              <h1 className="athlete-title-display athlete-hero__title">
                Development to representation.
              </h1>
              <p className="athlete-lead athlete-hero__description">
                An intentional progression structured across three continuous
                tracks: grassroots club fundamentals, long-term academy
                development, and school-to-university competition. Trace each
                milestone across ten competitive seasons.
              </p>
              <div className="athlete-hero__actions">
                <Link className="athlete-btn-primary" href="#tracks">
                  Explore parallel tracks
                </Link>
                <Link className="athlete-btn-secondary" href="#timeline">
                  Chronological timeline
                </Link>
              </div>
            </div>

            <div
              aria-label="Athlete journey index rail"
              className="athlete-hero__identity-rail"
              data-reveal
              data-reveal-delay="1"
            >
              <div className="athlete-hero__identity-header">
                <span>RBL / PATHWAY</span>
                <span>2015—2026 ARCHIVE</span>
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
                  10Y
                </div>
              </div>

              <div className="athlete-hero__identity-meta">
                <div>
                  <span>Club track</span>
                  <strong>5 Milestones</strong>
                </div>
                <div>
                  <span>Academy track</span>
                  <strong>8-Year Program</strong>
                </div>
                <div>
                  <span>School / Varsity</span>
                  <strong>6 Campaigns</strong>
                </div>
                <div>
                  <span>Verification</span>
                  <strong>Published Proof</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------------------------
          SECTION 01: THREE PARALLEL TRACKS
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="tracks-heading"
        className="athlete-section"
        id="tracks"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">Pathway architecture</p>
              <h2 className="athlete-title-display" id="tracks-heading">
                Three parallel competitive tracks.
              </h2>
            </div>
            <p>
              Rather than collapsing a multi-domain athlete career into a flat
              list, the journey is organized into three distinct operational
              tracks that developed concurrently.
            </p>
          </div>

          <div
            aria-label="Three pathway tracks grid"
            className="athlete-tracks__grid"
            data-reveal
            data-reveal-delay="1"
            role="region"
          >
            {/* Track A: Club Pathway */}
            <article className="athlete-track-card">
              <div className="athlete-track-card__header">
                <span className="athlete-track-card__num">TRACK 01</span>
                <span className="athlete-track-card__span">2015—2025</span>
              </div>
              <h3 className="athlete-track-card__title">Club & Senior Play</h3>
              <p className="athlete-track-card__desc">
                From Western Basketball Surabaya junior training to CLS Surabaya
                youth competition, regional club play with Aces Basketball, and
                international invitational play with KL Hornbills.
              </p>
              <div className="athlete-track-card__list">
                {athletePathwayTracks.club.map((m) => (
                  <div className="athlete-track-item" key={m.id}>
                    <div className="athlete-track-item__year">{m.year}</div>
                    <div>
                      <strong>{m.title}</strong>
                      <span>
                        {m.entity} · {m.context}
                      </span>
                      {m.source ? (
                        <a
                          className="athlete-source-link"
                          href={m.source.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {m.source.label} ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Track B: Development Academy */}
            <article className="athlete-track-card athlete-track-card--featured">
              <div className="athlete-track-card__header">
                <span className="athlete-track-card__num athlete-track-card__num--gold">
                  TRACK 02 · CORE FOUNDATION
                </span>
                <span className="athlete-track-card__span">2016—2024</span>
              </div>
              <h3 className="athlete-track-card__title">
                DBL Academy & All-Star
              </h3>
              <p className="athlete-track-card__desc">
                An eight-year intentional player development curriculum at DBL
                Academy in Surabaya, progressing through international selection
                teams, overseas training, and culminating in DBL Indonesia
                All-Star selection.
              </p>
              <div className="athlete-track-card__list">
                {athletePathwayTracks.development.map((m) => (
                  <div className="athlete-track-item" key={m.id}>
                    <div className="athlete-track-item__year athlete-track-item__year--gold">
                      {m.year}
                    </div>
                    <div>
                      <strong>{m.title}</strong>
                      <span>
                        {m.entity} · {m.context}
                      </span>
                      {m.source ? (
                        <a
                          className="athlete-source-link"
                          href={m.source.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {m.source.label} ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Track C: School & University */}
            <article className="athlete-track-card">
              <div className="athlete-track-card__header">
                <span className="athlete-track-card__num">TRACK 03</span>
                <span className="athlete-track-card__span">2019—2026</span>
              </div>
              <h3 className="athlete-track-card__title">
                School & Varsity Campaigns
              </h3>
              <p className="athlete-track-card__desc">
                Middle school basketball at SMP IPH West Surabaya, three-year
                varsity chapter with SMA Gloria 1 Surabaya in DBL East Java,
                one-semester Liga Mahasiswa with Ubaya, and Monash University
                varsity play.
              </p>
              <div className="athlete-track-card__list">
                {athletePathwayTracks.schoolUniversity.map((m) => (
                  <div className="athlete-track-item" key={m.id}>
                    <div className="athlete-track-item__year">{m.year}</div>
                    <div>
                      <strong>{m.title}</strong>
                      <span>
                        {m.entity} · {m.context}
                      </span>
                      {m.source ? (
                        <a
                          className="athlete-source-link"
                          href={m.source.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {m.source.label} ↗
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          SECTION 02: INTERWOVEN CHRONOLOGICAL TIMELINE
          ---------------------------------------------------------------------- */}
      <section
        aria-labelledby="timeline-heading"
        className="athlete-section athlete-timeline-section"
        id="timeline"
      >
        <div className="athlete-container">
          <div className="athlete-section-heading" data-reveal>
            <div>
              <p className="athlete-kicker">Integrated chronology</p>
              <h2 className="athlete-title-display" id="timeline-heading">
                Ten-year chronological map.
              </h2>
            </div>
            <p>
              Every career milestone across all three tracks aligned by year.
              Trace the evolution from early club drills in 2015 to national
              selection, international tournament play, and current varsity
              competition.
            </p>
          </div>

          <div
            aria-label="Integrated chronological milestone timeline"
            className="athlete-timeline"
            data-reveal
            data-reveal-delay="1"
            role="region"
          >
            {allMilestones.map((milestone) => {
              const isVerified = milestone.verificationStatus === "verified";
              const trackLabel =
                milestone.pathway === "club"
                  ? "Club Track"
                  : milestone.pathway === "development"
                    ? "Development Academy"
                    : "School / Varsity";

              return (
                <article className="athlete-timeline-entry" key={milestone.id}>
                  <div className="athlete-timeline-entry__year-rail">
                    <span className="athlete-timeline-entry__year">
                      {milestone.year}
                    </span>
                    <span className="athlete-timeline-entry__track-badge">
                      {trackLabel}
                    </span>
                  </div>

                  <div className="athlete-timeline-entry__body">
                    <div className="athlete-timeline-entry__top">
                      <div>
                        <span className="athlete-timeline-entry__context">
                          {milestone.entity} · {milestone.context}
                        </span>
                        <h3 className="athlete-timeline-entry__title">
                          {milestone.title}
                        </h3>
                      </div>

                      <span
                        className={`athlete-timeline-entry__status ${
                          isVerified
                            ? "athlete-timeline-entry__status--verified"
                            : "athlete-timeline-entry__status--record"
                        }`}
                      >
                        {isVerified ? "Verified Record" : "Portfolio Record"}
                      </span>
                    </div>

                    <p className="athlete-timeline-entry__detail">
                      {milestone.detail}
                    </p>

                    {milestone.source ? (
                      <div className="athlete-timeline-entry__footer">
                        <a
                          className="athlete-source-link"
                          href={milestone.source.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {milestone.source.label} ↗
                        </a>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          BOTTOM NAVIGATION BRIDGE
          ---------------------------------------------------------------------- */}
      <footer
        aria-label="Journey archive navigation"
        className="athlete-closing"
      >
        <div className="athlete-container">
          <div className="athlete-closing__inner">
            <div data-reveal>
              <p className="athlete-kicker">Next in archive</p>
              <h2 className="athlete-title-display">
                Inspect results & statistics.
              </h2>
              <p className="athlete-lead max-w-2xl">
                Explore verified competition achievements across six competition
                levels or view partitioned game statistics with source links.
              </p>

              <div className="athlete-closing__links">
                <Link
                  className="athlete-source-link"
                  href="/basketball/achievements"
                >
                  Achievements ledger →
                </Link>
                <Link className="athlete-source-link" href="/basketball/stats">
                  Competition statistics →
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
            >
              <div>
                <span className="athlete-closing__bridge-title">
                  ARCHIVE ROUTE · JOURNEY
                </span>
                <p className="athlete-closing__bridge-text">
                  A structured timeline tracing development through club,
                  academy, school, and university competition.
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
