import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballAchievements } from "@/data/basketball-record";
import { basketballWorldNavigation } from "@/data/world-navigation";

const featuredAchievement = basketballAchievements.find(
  (achievement) => achievement.featured,
);
const achievementLedger = basketballAchievements.filter(
  (achievement) => !achievement.featured,
);

export default function BasketballAchievementsPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="basketball-record">
        <section className="basketball-record__hero">
          <div className="basketball-record__hero-inner">
            <div data-reveal>
              <p className="basketball-record__kicker">
                Basketball · Achievement ledger
              </p>
              <h1>Results you can trace.</h1>
              <p className="basketball-record__lede">
                The athlete record is organized around event context and source
                material. Major results receive more space; every listed claim
                stays attached to where it can be checked.
              </p>
            </div>
            <div
              aria-label="Athlete record index"
              className="basketball-record__hero-index"
              data-reveal
              data-reveal-delay="1"
            >
              <span>RBL / ATHLETE RECORD</span>
              <strong>13</strong>
              <span>INDONESIA · SURABAYA</span>
            </div>
          </div>
        </section>

        {featuredAchievement ? (
          <section className="basketball-record__section">
            <div className="basketball-record__section-inner">
              <article className="basketball-record__feature" data-reveal>
                <div>
                  <div className="basketball-record__feature-year">
                    {featuredAchievement.year} · {featuredAchievement.category}
                  </div>
                  <h2>{featuredAchievement.title}</h2>
                </div>
                <div>
                  <p>{featuredAchievement.detail}</p>
                  <a
                    className="basketball-record__source"
                    href={featuredAchievement.source.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {featuredAchievement.source.label}
                  </a>
                </div>
              </article>
            </div>
          </section>
        ) : null}

        <section className="basketball-record__section">
          <div className="basketball-record__section-inner">
            <div className="basketball-record__section-heading" data-reveal>
              <div>
                <p className="basketball-record__kicker">Career ledger</p>
                <h2>Milestones, not a trophy wall.</h2>
              </div>
              <p>
                Development, team results, individual selection, and national
                representation are kept as distinct chapters so the record does
                not flatten every achievement into the same card.
              </p>
            </div>

            <div className="basketball-record__grid">
              {achievementLedger.map((achievement, index) => (
                <article
                  className="basketball-record-card"
                  data-reveal
                  data-reveal-delay={String((index % 3) + 1)}
                  key={`${achievement.year}-${achievement.title}`}
                >
                  <div>
                    <div className="basketball-record-card__meta">
                      <span>{achievement.year}</span>
                      <span>{achievement.category}</span>
                    </div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.detail}</p>
                  </div>
                  <a
                    className="basketball-record__source"
                    href={achievement.source.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View source
                  </a>
                </article>
              ))}
            </div>

            <div className="basketball-record__note" data-reveal>
              Statistics are separated into their own competition-aware view so
              results and numbers can be read with the correct sample size and
              season context. <Link href="/basketball/stats">Open statistics →</Link>
            </div>
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
