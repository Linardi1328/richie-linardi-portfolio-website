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
              const allVerified = tier.signatureResults.every(
                (r) => r.verificationStatus === "verified",
              );
              const hasVerified = tier.signatureResults.some(
                (r) => r.verificationStatus === "verified",
              );
              const containerBadgeText = allVerified
                ? "Verified Tier"
                : hasVerified
                  ? "Verified & Portfolio Records"
                  : "Portfolio Records";

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
                            allVerified
                              ? "athlete-ladder-tier__status--verified"
                              : "athlete-ladder-tier__status--record"
                          }`}
                        >
                          {containerBadgeText}
                        </span>
                      </div>
                    </div>

                    <p className="athlete-ladder-tier__desc">{tier.summary}</p>

                    <div className="athlete-ladder-tier__results">
                      <span className="athlete-ladder-tier__results-label">
                        Signature outcomes:
                      </span>
                      <ul className="athlete-ladder-tier__results-list">
                        {tier.signatureResults.map((result, idx) => {
                          const isOutcomeVerified =
                            result.verificationStatus === "verified";
                          return (
                            <li
                              className="athlete-ladder-tier__result-row"
                              key={idx}
                            >
                              <div className="athlete-ladder-tier__result-main">
                                <span
                                  aria-hidden="true"
                                  className="athlete-bullet"
                                />
                                <span className="athlete-ladder-tier__result-text">
                                  {result.label}
                                </span>
                              </div>
                              {isOutcomeVerified && result.source ? (
                                <a
                                  className="athlete-ladder-tier__pill athlete-ladder-tier__pill--verified"
                                  href={result.source.href}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  Verified ↗
                                </a>
                              ) : (
                                <span className="athlete-ladder-tier__pill athlete-ladder-tier__pill--pending">
                                  Portfolio Record
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
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
