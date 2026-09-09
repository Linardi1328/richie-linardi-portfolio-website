import Image from "next/image";
import Link from "next/link";
import { foundationPages } from "@/data/foundation-pages";

const sharedQualities = [
  {
    index: "01",
    quality: "Discipline",
    builder:
      "Testable boundaries, rigorous code review, systematic debugging, and clean architecture.",
    athlete:
      "Daily fundamental skill work, structured physical conditioning, and execution under exhaustion.",
  },
  {
    index: "02",
    quality: "Leadership",
    builder:
      "Setting technical standards, mentoring peers, clear communication, and owning critical paths.",
    athlete:
      "On-court communication, vocal defensive direction, team accountability, and leading by example.",
  },
  {
    index: "03",
    quality: "Resilience",
    builder:
      "Diagnosing subtle failures, handling production regressions, and calmly refactoring dead-end logic.",
    athlete:
      "Overcoming late-game deficits, rebounding from tough losses, and sustaining focus through high-stakes games.",
  },
  {
    index: "04",
    quality: "Decision-Making",
    builder:
      "Evaluating trade-offs between speed, safety, and complexity under incomplete information.",
    athlete:
      "Processing defensive coverages, making split-second reads, and executing with composure under pressure.",
  },
  {
    index: "05",
    quality: "Preparation",
    builder:
      "Architecture specifications, edge-case testing, and deterministic failure planning before deployment.",
    athlete:
      "Tactical walkthroughs, film study of opponent tendencies, and physical readiness routines.",
  },
  {
    index: "06",
    quality: "Teamwork",
    builder:
      "Explicit API contracts, unblocking teammates, collaborative Git reviews, and shared ownership.",
    athlete:
      "Setting screens, executing set plays, self-sacrificing boxouts, and collective defensive cohesion.",
  },
] as const;

export function AboutIdentityPage() {
  const data = foundationPages.about;
  const { portrait } = data;

  return (
    <main className="identity-page">
      {/* [HERO] Same Skill, Two Worlds */}
      <section className="identity-hero">
        <div className="identity-container identity-hero__inner identity-hero__inner--split">
          <div data-reveal>
            <p className="identity-eyebrow">{data.eyebrow}</p>
            <h1 className="identity-hero__title">{data.title}</h1>
            <p className="identity-hero__lede">{data.description}</p>
            <div className="identity-hero__actions">
              <Link
                className="identity-btn identity-btn--primary"
                href={data.primaryHref}
              >
                {data.primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="identity-btn" href="/basketball/journey">
                Follow athlete journey
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {portrait ? (
            <figure
              className="identity-portrait"
              data-reveal
              data-reveal-delay="1"
            >
              <div className="identity-portrait__frame">
                <Image
                  alt={portrait.alt}
                  fill
                  priority
                  sizes="(min-width: 900px) 28vw, 92vw"
                  src={portrait.src}
                />
              </div>
              <figcaption>
                <span className="identity-portrait__label">
                  {portrait.label}
                </span>
                {portrait.note ? (
                  <p className="identity-portrait__note">{portrait.note}</p>
                ) : null}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </section>

      {/* [SECTION 01] Shared Qualities Bridge */}
      <section
        aria-labelledby="about-bridge-heading"
        className="about-bridge"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Shared Qualities Bridge</p>
            <h2 id="about-bridge-heading">
              Two arenas. Identical core habits.
            </h2>
            <p>
              Engineering and athletics demand the same cognitive architecture.
              The medium changes, but the disciplines of execution, review, and
              accountability remain identical.
            </p>
          </header>

          <div className="about-bridge__grid">
            {sharedQualities.map((item) => (
              <article className="about-bridge__card" key={item.quality}>
                <div className="about-bridge__quality">
                  <span aria-hidden="true" className="about-bridge__index">
                    {item.index}
                  </span>
                  <h3>{item.quality}</h3>
                </div>
                <div className="about-bridge__realms">
                  <div className="about-bridge__realm about-bridge__realm--software">
                    <p className="about-bridge__realm-label">
                      Software & Systems
                    </p>
                    <p>{item.builder}</p>
                  </div>
                  <div className="about-bridge__realm about-bridge__realm--basketball">
                    <p className="about-bridge__realm-label">
                      Competitive Basketball
                    </p>
                    <p>{item.athlete}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION 02] About Me */}
      <section
        aria-labelledby="about-dossier-heading"
        className="about-dossier"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Background & Focus</p>
            <h2 id="about-dossier-heading">About Richie Linardi</h2>
          </header>

          <div className="about-dossier__layout">
            <div className="about-dossier__narrative">
              <div>
                <h3>Engineering with verified boundaries</h3>
                <p>
                  My technical work focuses on software, data, automation, and
                  applied AI. I value explicit boundaries, testable behavior,
                  traceable evidence, and human control when decisions matter.
                  Rather than treating software as abstract exercises, projects
                  operate as functional systems with documented limitations and
                  source repositories.
                </p>
              </div>

              <div>
                <h3>Athletics built on long-term development</h3>
                <p>
                  The athlete record follows the path from development and
                  school competition to DBL selection, national representation,
                  and international competition. Results, statistics, and media
                  stay tied to their event context, emphasizing foundational
                  growth over surface highlights.
                </p>
              </div>

              <div>
                <h3>Cross-domain review and iteration</h3>
                <p>
                  Basketball taught repetition, role clarity, review after
                  mistakes, and calm decision-making under pressure. Software
                  applies the same loop: design the process, test the
                  assumptions, measure the result, then improve it.
                </p>
              </div>
            </div>

            <aside
              aria-label="At a glance summary"
              className="about-dossier__sidebar"
            >
              <h3 className="about-dossier__sidebar-title">At a Glance</h3>
              <dl className="about-dossier__fact-list">
                <div className="about-dossier__fact">
                  <dt>Institution</dt>
                  <dd>Monash University Malaysia</dd>
                </div>
                <div className="about-dossier__fact">
                  <dt>Degree</dt>
                  <dd>Bachelor of Computer Science</dd>
                </div>
                <div className="about-dossier__fact">
                  <dt>Specialization</dt>
                  <dd>Data Science</dd>
                </div>
                <div className="about-dossier__fact">
                  <dt>Academic Role</dt>
                  <dd>FIT1045 Teaching Assistant</dd>
                </div>
                <div className="about-dossier__fact">
                  <dt>Athletic Honors</dt>
                  <dd>DBL Indonesia All-Star 2024</dd>
                </div>
                <div className="about-dossier__fact">
                  <dt>International Representation</dt>
                  <dd>Indonesia National Team (2024)</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* [SECTION 03] Shared Principles */}
      <section
        aria-labelledby="about-principles-heading"
        className="about-principles"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Core Philosophy</p>
            <h2 id="about-principles-heading">
              Principles that govern both sides.
            </h2>
            <p>
              Clear principles ensure that whether writing code or running the
              floor, standards remain deliberate and auditable.
            </p>
          </header>

          <div className="about-principles__grid">
            {data.sections.map((section, index) => (
              <article className="about-principle-card" key={section.title}>
                <p className="about-principle-card__eyebrow">
                  0{index + 1} · {section.eyebrow}
                </p>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                {"items" in section && section.items ? (
                  <ul>
                    {section.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION 04] Navigation Cards */}
      <section
        aria-labelledby="about-nav-heading"
        className="about-nav-cards"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Explore Further</p>
            <h2 id="about-nav-heading">Inspect the work in depth.</h2>
          </header>

          <div className="about-nav-cards__grid">
            <Link className="about-nav-card" href="/projects">
              <span className="about-nav-card__tag">Professional World</span>
              <h3>Explore Software Systems</h3>
              <p>
                Inspect six public systems with live architectures, verified
                evidence, current operational phases, and source repositories.
              </p>
              <span className="about-nav-card__cta">
                View project catalogue <span aria-hidden="true">→</span>
              </span>
            </Link>

            <Link className="about-nav-card" href="/basketball/journey">
              <span className="about-nav-card__tag">Basketball World</span>
              <h3>Follow the Athlete Journey</h3>
              <p>
                Trace the verified competitive record from DBL Academy in 2016
                through school competition, All-Star selection, and
                national-team competition.
              </p>
              <span className="about-nav-card__cta">
                Open journey timeline <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* [QUOTE] Identity Closing Statement */}
      <section
        aria-label="Identity closing statement"
        className="about-closing"
        data-reveal
      >
        <div className="identity-container about-closing__content">
          <h2 className="about-closing__statement">
            One discipline, expressed in two worlds.
          </h2>
          <p className="about-closing__context">
            Software engineering and competitive basketball are approached as
            two sides of the same working mindset: design the process, test the
            assumptions, measure the result, and systematically iterate.
          </p>
        </div>
      </section>
    </main>
  );
}
