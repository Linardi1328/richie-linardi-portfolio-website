import Link from "next/link";

export function AthleteHero() {
  return (
    <header aria-label="Athlete identity overview" className="athlete-hero">
      <div className="athlete-container">
        <div className="athlete-hero__grid">
          <div className="athlete-hero__copy" data-reveal>
            <p className="athlete-kicker">Basketball · Athlete archive</p>
            <h1 className="athlete-title-display athlete-hero__title">
              Competitive record. Verified progression.
            </h1>
            <p className="athlete-lead athlete-hero__description">
              From junior academy development to national and continental
              competition with Indonesia. A traceable athlete archive connecting
              milestones, statistics, game context, and published records.
            </p>
            <div className="athlete-hero__actions">
              <Link className="athlete-btn-primary" href="#progression">
                Explore the record
              </Link>
              <Link className="athlete-btn-secondary" href="#performance">
                Verified statistics
              </Link>
            </div>
          </div>

          <div
            aria-label="Richie Linardi jersey number 13 identity marker"
            className="athlete-hero__identity-rail"
            data-reveal
            data-reveal-delay="1"
          >
            <div className="athlete-hero__identity-header">
              <span>RBL / NO. 13</span>
              <span>ATHLETE ARCHIVE</span>
            </div>

            <div className="athlete-hero__number-wrap">
              {/* Subtle court key/arc line motif */}
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
                13
              </div>
            </div>

            <div className="athlete-hero__identity-meta">
              <div>
                <span>School chapter</span>
                <strong>SMA Gloria 1 · Surabaya</strong>
              </div>
              <div>
                <span>Standard</span>
                <strong>Competitive Record</strong>
              </div>
              <div>
                <span>Pathway</span>
                <strong>Since 2016</strong>
              </div>
              <div>
                <span>Integrity</span>
                <strong>Published Sources</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
