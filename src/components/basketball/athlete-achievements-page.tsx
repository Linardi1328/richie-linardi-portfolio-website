import Link from "next/link";
import {
  athleteCareerRecords,
  type AthleteCareerRecord,
  type AthleteCompetitionLevel,
} from "@/data/basketball-record";

const levelMetadata: Record<
  AthleteCompetitionLevel,
  { label: string; index: string; description: string }
> = {
  international: {
    index: "01",
    label: "International Competition",
    description:
      "Continental championships and regional multi-sport games representing Indonesia.",
  },
  "national-pathway": {
    index: "02",
    label: "National Pathway & All-Star Honors",
    description:
      "Long-term academy progression, national selection camps, and premier all-star rosters.",
  },
  "city-provincial": {
    index: "03",
    label: "City & Provincial Games",
    description:
      "Regional multi-sport games with Kota Surabaya and national youth championships representing Jawa Timur.",
  },
  school: {
    index: "04",
    label: "High School & Middle School Varsity",
    description:
      "Three-year varsity chapter with SMA Gloria 1 Surabaya in DBL East Java and SMP IPH West.",
  },
  university: {
    index: "05",
    label: "University Competition",
    description:
      "One-semester Liga Mahasiswa (LIMA) campaign with Universitas Surabaya and varsity competition with Monash University.",
  },
  club: {
    index: "06",
    label: "Club Basketball",
    description:
      "Junior training fundamentals, regional league play, and invitational club competition.",
  },
};

const levels: AthleteCompetitionLevel[] = [
  "international",
  "national-pathway",
  "city-provincial",
  "school",
  "university",
  "club",
];

export function AthleteAchievementsPage() {
  return (
    <article className="athlete-home athlete-subpage">
      {/* ----------------------------------------------------------------------
          HERO: ACHIEVEMENTS LEDGER OVERVIEW
          ---------------------------------------------------------------------- */}
      <header
        aria-label="Athlete achievements ledger overview"
        className="athlete-hero"
      >
        <div className="athlete-container">
          <div className="athlete-hero__grid">
            <div className="athlete-hero__copy" data-reveal>
              <p className="athlete-kicker">Basketball · Competition ledger</p>
              <h1 className="athlete-title-display athlete-hero__title">
                Results verified by competition level.
              </h1>
              <p className="athlete-lead athlete-hero__description">
                A structured archive partitioning career milestones across
                international competition, national development pathways, city
                and provincial games, high school varsity, and university play.
                Every result stays anchored to verified context.
              </p>
              <div className="athlete-hero__actions">
                <Link className="athlete-btn-primary" href="#international">
                  International results
                </Link>
                <Link
                  className="athlete-btn-secondary"
                  href="#national-pathway"
                >
                  National pathway
                </Link>
              </div>
            </div>

            <div
              aria-label="Athlete achievements ledger rail"
              className="athlete-hero__identity-rail"
              data-reveal
              data-reveal-delay="1"
            >
              <div className="athlete-hero__identity-header">
                <span>RBL / ACHIEVEMENTS</span>
                <span>CAREER LEDGER</span>
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
                  20
                </div>
              </div>

              <div className="athlete-hero__identity-meta">
                <div>
                  <span>Ledger total</span>
                  <strong>20 Career Entries</strong>
                </div>
                <div>
                  <span>Levels</span>
                  <strong>6 Tiers of Play</strong>
                </div>
                <div>
                  <span>Peak honors</span>
                  <strong>Gold · All-Star</strong>
                </div>
                <div>
                  <span>Evidence</span>
                  <strong>Traceable Sources</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------------------------------------------------
          GROUPED COMPETITION LEVEL SECTIONS
          ---------------------------------------------------------------------- */}
      {levels.map((level) => {
        const meta = levelMetadata[level];
        const records = athleteCareerRecords.filter((r) => r.level === level);
        if (records.length === 0) return null;

        const isInternational = level === "international";

        return (
          <section
            aria-labelledby={`level-${level}-heading`}
            className={`athlete-section ${
              isInternational ? "athlete-section--international" : ""
            }`}
            id={level}
            key={level}
          >
            <div className="athlete-container">
              <div className="athlete-section-heading" data-reveal>
                <div>
                  <p className="athlete-kicker">
                    Tier {meta.index} · {meta.label}
                  </p>
                  <h2
                    className="athlete-title-display"
                    id={`level-${level}-heading`}
                  >
                    {meta.label}.
                  </h2>
                </div>
                <p>{meta.description}</p>
              </div>

              <div
                aria-label={`${meta.label} career records`}
                className="athlete-ledger__grid"
                data-reveal
                data-reveal-delay="1"
                role="region"
              >
                {records.map((record: AthleteCareerRecord) => {
                  const isVerified = record.verificationStatus === "verified";
                  return (
                    <article
                      className={`athlete-ledger-card ${
                        record.featured ? "athlete-ledger-card--featured" : ""
                      }`}
                      key={record.id}
                    >
                      <div className="athlete-ledger-card__top">
                        <div className="athlete-ledger-card__meta">
                          <span className="athlete-ledger-card__year">
                            {record.year}
                          </span>
                          <span className="athlete-ledger-card__entity">
                            {record.team}
                          </span>
                        </div>

                        <span
                          className={`athlete-ledger-card__status ${
                            isVerified
                              ? "athlete-ledger-card__status--verified"
                              : "athlete-ledger-card__status--record"
                          }`}
                        >
                          {isVerified ? "Verified Record" : "Portfolio Record"}
                        </span>
                      </div>

                      <h3 className="athlete-ledger-card__title">
                        {record.result}
                      </h3>
                      <p className="athlete-ledger-card__context">
                        {record.event}
                      </p>
                      {record.statLine ? (
                        <p className="athlete-ledger-card__statline">
                          {record.statLine}
                        </p>
                      ) : null}
                      {record.roleContext ? (
                        <p className="athlete-ledger-card__detail">
                          {record.roleContext}
                        </p>
                      ) : null}

                      {record.sources.length > 0 ? (
                        <div className="athlete-ledger-card__footer">
                          {record.sources.map((src, sIdx) => (
                            <a
                              className="athlete-source-link mr-3"
                              href={src.href}
                              key={sIdx}
                              rel="noreferrer"
                              target="_blank"
                            >
                              {src.label} ↗
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ----------------------------------------------------------------------
          BOTTOM NAVIGATION BRIDGE
          ---------------------------------------------------------------------- */}
      <footer
        aria-label="Achievements archive navigation"
        className="athlete-closing"
      >
        <div className="athlete-container">
          <div className="athlete-closing__inner">
            <div data-reveal>
              <p className="athlete-kicker">Next in archive</p>
              <h2 className="athlete-title-display">
                Inspect statistics & progression.
              </h2>
              <p className="athlete-lead max-w-2xl">
                Review partitioned box score figures, shooting splits, and
                per-game averages from published competition recaps.
              </p>

              <div className="athlete-closing__links">
                <Link className="athlete-source-link" href="/basketball/stats">
                  Competition statistics →
                </Link>
                <Link
                  className="athlete-source-link"
                  href="/basketball/journey"
                >
                  Journey timeline →
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
                  ARCHIVE ROUTE · ACHIEVEMENTS
                </span>
                <p className="athlete-closing__bridge-text">
                  Complete ledger of competitive milestones grouped across six
                  ascending tiers of competition.
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
