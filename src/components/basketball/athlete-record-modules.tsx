import Link from "next/link";
import { basketballArchiveModules } from "@/data/basketball-home";

const moduleCategoryTags: Record<string, string> = {
  "01": "Career Pathway",
  "02": "Honors & Titles",
  "03": "Competition Metrics",
  "04": "Event Photography",
  "05": "Press & Profiles",
};

export function AthleteRecordModules() {
  return (
    <section
      aria-labelledby="archive-modules-heading"
      className="athlete-section"
      id="archive"
    >
      <div className="athlete-container">
        <div className="athlete-section-heading" data-reveal>
          <div>
            <p className="athlete-kicker">Archive structure</p>
            <h2 className="athlete-title-display" id="archive-modules-heading">
              An athlete archive organized for inspection.
            </h2>
          </div>
          <p>
            The basketball world is structured across five dedicated modules.
            Progression, results, statistics, visual proof, and published
            coverage stay connected in one system so each career chapter retains
            its full context.
          </p>
        </div>

        <div
          aria-label="Basketball archive navigation modules"
          className="athlete-modules__grid"
          data-reveal
          data-reveal-delay="1"
        >
          {basketballArchiveModules.map((module) => (
            <Link
              className="athlete-module-card"
              href={module.href}
              key={module.index}
            >
              <div>
                <div className="athlete-module-card__header">
                  <span className="athlete-module-card__index">
                    MODULE {module.index}
                  </span>
                  <span className="athlete-module-card__tag">
                    {moduleCategoryTags[module.index] || "Archive"}
                  </span>
                </div>

                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>

              <span className="athlete-module-card__action">
                Enter module →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
