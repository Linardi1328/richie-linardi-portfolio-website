import Link from "next/link";
import { basketballSources } from "@/data/basketball-record";

type ProgressionMilestone = {
  badge: string;
  context: string;
  detail: string;
  isPinnacle?: boolean;
  step: string;
  title: string;
  year: string;
  sources: readonly {
    label: string;
    href: string;
  }[];
};

const progressionMilestones: readonly ProgressionMilestone[] = [
  {
    badge: "Foundation",
    context: "Development",
    detail:
      "The long-term development pathway began with DBL Academy in 2016, building competitive fundamentals.",
    step: "01",
    title: "DBL Academy",
    year: "2016",
    sources: [
      {
        label: "DBL Academy record",
        href: basketballSources.dblAcademy.href,
      },
    ],
  },
  {
    badge: "Second Team",
    context: "East Java · High School",
    detail:
      "Breakthrough season with SMA Gloria 1 Surabaya, earning DBL East Java Second Team honors.",
    step: "02",
    title: "DBL East Java",
    year: "2021",
    sources: [
      {
        label: "DBL player profile",
        href: basketballSources.dblProfile.href,
      },
    ],
  },
  {
    badge: "Regional Playoff",
    context: "North Region · Gloria 1",
    detail:
      "Recorded 52 points, 21 rebounds, and 13 assists across regional tournament play with SMA Gloria 1.",
    step: "03",
    title: "Regional Campaign",
    year: "2022",
    sources: [
      {
        label: "DBL match record",
        href: basketballSources.dblProfile.href,
      },
    ],
  },
  {
    badge: "First Team & Finalist",
    context: "East Java Final Run",
    detail:
      "Led Gloria 1 to the East Java final, earning Kopi Good Day First Team selection with 121 PTS, 84 REB, and 25 AST.",
    step: "04",
    title: "East Java Final Run",
    year: "2023",
    sources: [
      {
        label: "DBL final report",
        href: basketballSources.dblFirstTeam.href,
      },
      {
        label: "DBL season profile",
        href: basketballSources.dblProfile.href,
      },
    ],
  },
  {
    badge: "Gold Medal & All-Star",
    context: "Indonesia · Continental",
    detail:
      "DBL Indonesia All-Star roster selection; gold medal at ASEAN Schools Games (56–54 vs Philippines); FIBA U18 Asia Cup with Indonesia.",
    isPinnacle: true,
    step: "05",
    title: "International Competition",
    year: "2024",
    sources: [
      {
        label: "DBL All-Star roster",
        href: basketballSources.dblAllStar.href,
      },
      {
        label: "ASG final box score",
        href: basketballSources.asgBox.href,
      },
      {
        label: "FIBA player profile",
        href: basketballSources.fiba.href,
      },
    ],
  },
];

export function AthleteCareerProgression() {
  return (
    <section
      aria-labelledby="progression-heading"
      className="athlete-section"
      id="progression"
    >
      <div className="athlete-container">
        <div className="athlete-section-heading" data-reveal>
          <div>
            <p className="athlete-kicker">Verified progression</p>
            <h2 className="athlete-title-display" id="progression-heading">
              From academy origins to international competition.
            </h2>
          </div>
          <p>
            The athlete timeline tracks development as an intentional
            progression: from early academy training through school competition
            with SMA Gloria 1 Surabaya to representing Indonesia on continental
            courts in 2024.
          </p>
        </div>

        <div
          aria-label="Chronological career progression track"
          className="athlete-progression__track"
          data-reveal
          data-reveal-delay="1"
          role="region"
        >
          {progressionMilestones.map((m) => (
            <article
              className={`athlete-progression__card ${
                m.isPinnacle ? "athlete-progression__card--pinnacle" : ""
              }`}
              key={m.year + m.step}
            >
              <div>
                <div className="athlete-progression__card-header">
                  <span className="athlete-progression__year">{m.year}</span>
                  <span className="athlete-progression__step">
                    STEP {m.step}
                  </span>
                </div>

                <p className="athlete-progression__context">{m.context}</p>
                <h3>{m.title}</h3>
                <p className="athlete-progression__detail">{m.detail}</p>
              </div>

              <div>
                <div
                  className={
                    m.isPinnacle
                      ? "athlete-progression__pinnacle-badge"
                      : "athlete-progression__badge"
                  }
                >
                  {m.badge}
                </div>

                {m.sources.length > 0 ? (
                  <div className="athlete-progression__sources">
                    {m.sources.map((source) => (
                      <a
                        className="athlete-source-link"
                        href={source.href}
                        key={`${m.year}-${source.label}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {source.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="athlete-progression__cta-row" data-reveal>
          <span>CAREER TIMELINE / 2016—2024 VERIFIED RECORD</span>
          <Link className="athlete-source-link" href="/basketball/journey">
            Open complete journey timeline →
          </Link>
        </div>
      </div>
    </section>
  );
}
