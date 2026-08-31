import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import {
  basketballSources,
  dblSeasonStats,
  fibaU18Snapshot,
} from "@/data/basketball-record";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballStatsPage() {
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
                Basketball · Verified statistics
              </p>
              <h1>Growth you can measure.</h1>
              <p className="basketball-record__lede">
                Numbers are grouped by competition and season rather than mixed
                into one career total. The record below uses published DBL and
                FIBA profiles so each figure keeps its context.
              </p>
            </div>
            <div
              aria-label="FIBA U18 Asia Cup 2024 snapshot"
              className="basketball-record__hero-index"
              data-reveal
              data-reveal-delay="1"
            >
              <span>FIBA U18 ASIA CUP 2024</span>
              <strong>{fibaU18Snapshot.games}</strong>
              <span>GAMES · INDONESIA</span>
            </div>
          </div>
        </section>

        <section className="basketball-record__section">
          <div className="basketball-record__section-inner">
            <div className="basketball-record__section-heading" data-reveal>
              <div>
                <p className="basketball-record__kicker">
                  International snapshot
                </p>
                <h2>FIBA U18 Asia Cup 2024.</h2>
              </div>
              <p>
                Per-game figures from FIBA are shown separately from school and
                DBL competition so the sample and level remain explicit.
              </p>
            </div>

            <div className="basketball-record__stat-grid">
              {[
                ["Games", fibaU18Snapshot.games],
                ["Points / game", fibaU18Snapshot.ppg],
                ["Rebounds / game", fibaU18Snapshot.rpg],
                ["Assists / game", fibaU18Snapshot.apg],
              ].map(([label, value], index) => (
                <div
                  className="basketball-record__stat"
                  data-reveal
                  data-reveal-delay={String((index % 4) + 1)}
                  key={label}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <a
              className="basketball-record__source"
              href={fibaU18Snapshot.source.href}
              rel="noreferrer"
              target="_blank"
            >
              {fibaU18Snapshot.source.label}
            </a>
          </div>
        </section>

        <section className="basketball-record__section">
          <div className="basketball-record__section-inner">
            <div className="basketball-record__section-heading" data-reveal>
              <div>
                <p className="basketball-record__kicker">DBL season record</p>
                <h2>Progression across four published seasons.</h2>
              </div>
              <p>
                These are tournament totals from the DBL player profile. They
                are not combined with FIBA or ASEAN Schools Games numbers.
              </p>
            </div>

            <div className="basketball-record__seasons" data-reveal>
              {dblSeasonStats.map((season) => (
                <article className="basketball-record__season" key={season.season}>
                  <div className="basketball-record__season-title">
                    <strong>{season.season}</strong>
                    <span>{season.context}</span>
                  </div>
                  <div className="basketball-record__season-numbers">
                    <div>
                      <span>GP</span>
                      <strong>{season.games}</strong>
                    </div>
                    <div>
                      <span>PTS</span>
                      <strong>{season.points}</strong>
                    </div>
                    <div>
                      <span>REB</span>
                      <strong>{season.rebounds}</strong>
                    </div>
                    <div>
                      <span>AST</span>
                      <strong>{season.assists}</strong>
                    </div>
                  </div>
                  <div>
                    {season.shooting ? (
                      <div className="basketball-record__shooting">
                        {season.shooting}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <a
              className="basketball-record__source"
              href={basketballSources.dblProfile.href}
              rel="noreferrer"
              target="_blank"
            >
              {basketballSources.dblProfile.label}
            </a>
            <p className="basketball-record__note">
              The interface intentionally avoids invented advanced metrics. More
              detailed game logs and shooting splits can be added when the source
              data is complete enough to compare like with like.
            </p>
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
