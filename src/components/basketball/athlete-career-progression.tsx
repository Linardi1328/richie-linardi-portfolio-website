import Link from "next/link";
import { basketballSources } from "@/data/basketball-record";

type ChapterFoundation = {
  badge: string;
  chapter: string;
  context: string;
  detail: string;
  title: string;
  year: string;
  source: {
    label: string;
    href: string;
  };
};

type SchoolYearMilestone = {
  badge: string;
  detail: string;
  stage: string;
  title: string;
  year: string;
  sources: readonly {
    label: string;
    href: string;
  }[];
};

type ChapterSchoolEra = {
  chapter: string;
  context: string;
  ladderSlot: {
    status: string;
    tag: string;
    tiers: readonly string[];
  };
  seasons: readonly SchoolYearMilestone[];
  summary: string;
  title: string;
  years: string;
};

type ChapterInternational = {
  badge: string;
  chapter: string;
  context: string;
  detail: string;
  title: string;
  year: string;
  sources: readonly {
    label: string;
    href: string;
  }[];
};

const foundationChapter: ChapterFoundation = {
  year: "2016",
  chapter: "01",
  context: "Development Pathway",
  title: "DBL Academy",
  badge: "Foundation",
  detail:
    "The long-term development pathway began with DBL Academy in 2016, building competitive fundamentals.",
  source: {
    label: "DBL Academy record",
    href: basketballSources.dblAcademy.href,
  },
};

const schoolEraChapter: ChapterSchoolEra = {
  years: "2021–2023",
  chapter: "02",
  context: "SMA Gloria 1 Surabaya · School Competition Era",
  title: "School Competition & Regional Leadership",
  summary:
    "Three progressive campaigns through DBL East Java high-school competition, advancing from debut contributor to regional finalist and First Team honors.",
  seasons: [
    {
      year: "2021",
      stage: "Breakthrough",
      title: "DBL East Java Breakthrough",
      badge: "Second Team",
      detail:
        "Breakthrough season with SMA Gloria 1 Surabaya, earning DBL East Java Second Team honors.",
      sources: [
        {
          label: "DBL player profile",
          href: basketballSources.dblProfile.href,
        },
      ],
    },
    {
      year: "2022",
      stage: "Campaign",
      title: "Regional Campaign",
      badge: "North Region Playoff",
      detail:
        "Recorded 52 points, 21 rebounds, and 13 assists across regional tournament play with SMA Gloria 1.",
      sources: [
        {
          label: "DBL match record",
          href: basketballSources.dblProfile.href,
        },
      ],
    },
    {
      year: "2023",
      stage: "Finalist Run",
      title: "East Java Final Run",
      badge: "First Team & Finalist",
      detail:
        "Led Gloria 1 to the East Java final, earning Kopi Good Day First Team selection with 121 PTS, 84 REB, and 25 AST.",
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
  ],
  ladderSlot: {
    tag: "Competition Ladder",
    status: "SMA Gloria 1 · DBL East Java Series",
    tiers: [
      "North Region / District",
      "East Java Championship Series",
      "East Java Final",
    ],
  },
};

const internationalChapter: ChapterInternational = {
  year: "2024",
  chapter: "03",
  context: "Indonesia · Continental",
  title: "International Competition",
  badge: "Gold Medal & All-Star",
  detail:
    "DBL Indonesia All-Star roster selection; gold medal at ASEAN Schools Games (56–54 vs Philippines); FIBA U18 Asia Cup with Indonesia.",
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
};

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
          aria-label="Three-chapter career progression track"
          className="athlete-progression__chapters"
          data-reveal
          data-reveal-delay="1"
          role="region"
        >
          {/* Chapter 01: 2016 Foundation */}
          <article className="athlete-progression__card athlete-progression__card--foundation">
            <div>
              <div className="athlete-progression__card-header">
                <span className="athlete-progression__year">
                  {foundationChapter.year}
                </span>
                <span className="athlete-progression__step">
                  CHAPTER {foundationChapter.chapter}
                </span>
              </div>

              <p className="athlete-progression__context">
                {foundationChapter.context}
              </p>
              <h3>{foundationChapter.title}</h3>
              <p className="athlete-progression__detail">
                {foundationChapter.detail}
              </p>
            </div>

            <div>
              <div className="athlete-progression__badge">
                {foundationChapter.badge}
              </div>

              <div className="athlete-progression__sources">
                <a
                  className="athlete-source-link"
                  href={foundationChapter.source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {foundationChapter.source.label} ↗
                </a>
              </div>
            </div>
          </article>

          {/* Chapter 02: 2021–2023 SMA Gloria 1 School Competition Era (Centerpiece Hero Card) */}
          <article className="athlete-progression__card athlete-progression__card--school-era">
            <div className="athlete-school-era__header">
              <div className="athlete-progression__card-header">
                <span className="athlete-progression__year">
                  {schoolEraChapter.years}
                </span>
                <span className="athlete-progression__step">
                  CHAPTER {schoolEraChapter.chapter}
                </span>
              </div>
              <p className="athlete-progression__context">
                {schoolEraChapter.context}
              </p>
              <h3 className="athlete-school-era__title">
                {schoolEraChapter.title}
              </h3>
              <p className="athlete-school-era__summary">
                {schoolEraChapter.summary}
              </p>
            </div>

            <div className="athlete-school-era__seasons" role="list">
              {schoolEraChapter.seasons.map((season) => (
                <div
                  className="athlete-school-era__col"
                  key={season.year}
                  role="listitem"
                >
                  <div className="athlete-school-era__col-top">
                    <span className="athlete-school-era__year">
                      {season.year}
                    </span>
                    <span className="athlete-school-era__stage">
                      {season.stage}
                    </span>
                  </div>
                  <h4 className="athlete-school-era__col-title">
                    {season.title}
                  </h4>
                  <p className="athlete-school-era__col-detail">
                    {season.detail}
                  </p>
                  <div className="athlete-school-era__col-footer">
                    <span className="athlete-progression__badge">
                      {season.badge}
                    </span>
                    <div className="athlete-progression__sources">
                      {season.sources.map((source) => (
                        <a
                          className="athlete-source-link"
                          href={source.href}
                          key={`${season.year}-${source.label}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {source.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Extensible competition ladder / district records slot */}
            <div
              aria-label="Competition progression ladder"
              className="athlete-school-era__ladder"
            >
              <div className="athlete-school-era__ladder-header">
                <span className="athlete-school-era__ladder-tag">
                  {schoolEraChapter.ladderSlot.tag}
                </span>
                <span className="athlete-school-era__ladder-status">
                  {schoolEraChapter.ladderSlot.status}
                </span>
              </div>
              <ol className="athlete-school-era__ladder-tiers">
                {schoolEraChapter.ladderSlot.tiers.map((tier, idx) => (
                  <li className="athlete-school-era__ladder-tier" key={tier}>
                    <span className="athlete-school-era__ladder-index">
                      0{idx + 1}
                    </span>
                    <span className="athlete-school-era__ladder-name">
                      {tier}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          {/* Chapter 03: 2024 International Competition (Pinnacle Card) */}
          <article className="athlete-progression__card athlete-progression__card--pinnacle">
            <div>
              <div className="athlete-progression__card-header">
                <span className="athlete-progression__year">
                  {internationalChapter.year}
                </span>
                <span className="athlete-progression__step">
                  CHAPTER {internationalChapter.chapter}
                </span>
              </div>

              <p className="athlete-progression__context">
                {internationalChapter.context}
              </p>
              <h3>{internationalChapter.title}</h3>
              <p className="athlete-progression__detail">
                {internationalChapter.detail}
              </p>
            </div>

            <div>
              <div className="athlete-progression__pinnacle-badge">
                {internationalChapter.badge}
              </div>

              <div className="athlete-progression__sources">
                {internationalChapter.sources.map((source) => (
                  <a
                    className="athlete-source-link"
                    href={source.href}
                    key={source.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {source.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
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
