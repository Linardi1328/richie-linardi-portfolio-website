import Link from "next/link";
import {
  athleteCompetitiveLadder,
  type AthleteCompetitiveLadderTier,
} from "@/data/basketball-record";

export function AthleteCompetitiveLadder() {
  return (
    <section
      aria-labelledby="ladder-heading"
      className="athlete-section athlete-ladder"
      id="ladder"
    >
      <div className="athlete-container">
        <div className="athlete-section-heading" data-reveal>
          <div>
            <p className="athlete-kicker">Competitive structure</p>
            <h2 className="athlete-title-display" id="ladder-heading">
              Ascending tiers of competition.
            </h2>
          </div>
          <p>
            The basketball career spans five escalating competition
            environments. From high school varsity and city games to national
            all-star selection, representing Indonesia internationally, and
            continuing into university and club play.
          </p>
        </div>

        <div
          aria-label="Five tiers of basketball competition"
          className="athlete-ladder__list"
          data-reveal
          data-reveal-delay="1"
          role="region"
        >
          {athleteCompetitiveLadder.map(
            (tier: AthleteCompetitiveLadderTier) => {
              const isVerified = tier.verificationStatus === "verified";
              return (
                <article
                  className={`athlete-ladder-tier ${
                    tier.tierKey === "international"
                      ? "athlete-ladder-tier--international"
                      : tier.tierKey === "national-pathway"
                        ? "athlete-ladder-tier--national"
                        : ""
                  }`}
                  key={tier.order}
                >
                  <div className="athlete-ladder-tier__indicator">
                    <span className="athlete-ladder-tier__num">
                      TIER {tier.order}
                    </span>
                    <div
                      aria-hidden="true"
                      className="athlete-ladder-tier__line"
                    />
                  </div>

                  <div className="athlete-ladder-tier__content">
                    <div className="athlete-ladder-tier__top">
                      <div>
                        <span className="athlete-ladder-tier__level">
                          {tier.levelBadge}
                        </span>
                        <h3 className="athlete-ladder-tier__entity">
                          {tier.tierName}
                        </h3>
                        <p className="athlete-ladder-tier__context">
                          {tier.context}
                        </p>
                      </div>

                      <div className="athlete-ladder-tier__badges">
                        <span
                          className={`athlete-ladder-tier__status ${
                            isVerified
                              ? "athlete-ladder-tier__status--verified"
                              : "athlete-ladder-tier__status--record"
                          }`}
                        >
                          {isVerified ? "Verified Record" : "Portfolio Record"}
                        </span>
                      </div>
                    </div>

                    <p className="athlete-ladder-tier__desc">{tier.summary}</p>

                    <div className="athlete-ladder-tier__results">
                      <span className="athlete-ladder-tier__results-label">
                        Signature outcomes:
                      </span>
                      <ul className="athlete-ladder-tier__results-list">
                        {tier.signatureResults.map((result, idx) => (
                          <li key={idx}>
                            <span
                              aria-hidden="true"
                              className="athlete-bullet"
                            />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tier.source ? (
                      <div className="athlete-ladder-tier__footer">
                        <a
                          className="athlete-source-link"
                          href={tier.source.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {tier.source.label} ↗
                        </a>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            },
          )}
        </div>

        <div className="athlete-ladder__cta-row" data-reveal>
          <span>ASCENDING COMPETITION MATRIX · FIVE TIERS</span>
          <Link className="athlete-source-link" href="/basketball/achievements">
            View full achievements ledger →
          </Link>
        </div>
      </div>
    </section>
  );
}
