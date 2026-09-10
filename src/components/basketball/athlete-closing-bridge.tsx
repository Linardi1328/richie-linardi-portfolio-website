import Link from "next/link";
import { basketballSources } from "@/data/basketball-record";

export function AthleteClosingBridge() {
  return (
    <footer aria-label="Athlete closing summary" className="athlete-closing">
      <div className="athlete-container">
        <div className="athlete-closing__inner">
          <div data-reveal>
            <p className="athlete-kicker">Two arenas · One discipline</p>
            <h2 className="athlete-title-display">
              Built on work. Backed by proof.
            </h2>
            <p className="athlete-lead max-w-2xl">
              The standard that governs the basketball record—rigorous
              preparation, objective measurement, and review based on
              evidence—is the same discipline that shapes the software, data,
              and analytics side of this portfolio.
            </p>

            <div className="athlete-closing__links">
              <Link className="athlete-source-link" href="/basketball/journey">
                Journey timeline →
              </Link>
              <Link
                className="athlete-source-link"
                href="/basketball/achievements"
              >
                Achievements ledger →
              </Link>
              <Link className="athlete-source-link" href="/basketball/stats">
                Competition statistics →
              </Link>
            </div>
          </div>

          <div
            aria-label="Return to professional world"
            className="athlete-closing__bridge-box"
            data-reveal
            data-reveal-delay="1"
          >
            <div>
              <span className="athlete-closing__bridge-title">
                World Bridge · 01 / 02
              </span>
              <h3 className="athlete-closing__bridge-heading">
                Professional Systems &amp; Data
              </h3>
              <p className="athlete-closing__bridge-text">
                Explore the engineering world: automated tracking systems,
                financial data pipelines, and full-stack software architectures.
              </p>
            </div>

            <div>
              <Link className="athlete-closing__return-action" href="/">
                Turn to Professional side →
              </Link>
              <div className="athlete-closing__meta">
                <a
                  className="athlete-source-link"
                  href={basketballSources.dblProfile.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  DBL Profile ↗
                </a>
                <span aria-hidden="true">·</span>
                <a
                  className="athlete-source-link"
                  href={basketballSources.fiba.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  FIBA Profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
