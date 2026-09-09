import Image from "next/image";
import Link from "next/link";
import { foundationPages } from "@/data/foundation-pages";

const sharedQualities = [
  {
    index: "01",
    quality: "Discipline",
    builder:
      "Testable boundaries, rigorous review, systematic debugging, and clean architecture.",
    athlete:
      "Consistent fundamental repetition, physical preparation, and steady execution under fatigue.",
  },
  {
    index: "02",
    quality: "Leadership",
    builder:
      "Clear technical communication, assisting peers through problems, and taking ownership of software boundaries.",
    athlete:
      "On-court communication, role accountability, and setting an example through preparation.",
  },
  {
    index: "03",
    quality: "Resilience",
    builder:
      "Diagnosing subtle errors, refactoring complex logic, and recovering systematically when approaches fail.",
    athlete:
      "Responding to difficult game situations, reviewing mistakes objectively, and maintaining composure under competitive pressure.",
  },
  {
    index: "04",
    quality: "Decision-Making",
    builder:
      "Evaluating trade-offs between speed, safety, and complexity under incomplete information.",
    athlete:
      "Processing game situations quickly, making deliberate reads, and executing with composure under pressure.",
  },
  {
    index: "05",
    quality: "Preparation",
    builder:
      "Architecture specifications, edge-case testing, and deterministic failure planning before deployment.",
    athlete:
      "Tactical preparation, understanding team strategy, and structured physical readiness.",
  },
  {
    index: "06",
    quality: "Teamwork",
    builder:
      "Explicit API contracts, unblocking teammates, collaborative reviews, and shared ownership.",
    athlete:
      "Executing team roles, communicating clearly, and prioritizing collective performance over individual highlights.",
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

          <div className="about-bridge__table-wrap" data-no-page-swipe>
            <table className="about-bridge__table">
              <thead>
                <tr>
                  <th className="about-bridge__th-quality" scope="col">
                    Quality
                  </th>
                  <th className="about-bridge__th-realm" scope="col">
                    Software & Systems
                  </th>
                  <th className="about-bridge__th-realm" scope="col">
                    Competitive Basketball
                  </th>
                </tr>
              </thead>
              <tbody>
                {sharedQualities.map((item) => (
                  <tr className="about-bridge__row" key={item.quality}>
                    <th className="about-bridge__cell-quality" scope="row">
                      <span aria-hidden="true" className="about-bridge__index">
                        {item.index}
                      </span>
                      <span className="about-bridge__quality-title">
                        {item.quality}
                      </span>
                    </th>
                    <td className="about-bridge__cell about-bridge__cell--software">
                      <p>{item.builder}</p>
                    </td>
                    <td className="about-bridge__cell about-bridge__cell--basketball">
                      <p>{item.athlete}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                <h3>Collaborative experimentation & applied AI</h3>
                <p>
                  Recent collaborative work includes teaming with Esther Lim Jia
                  Xin as Midnight Owls in the AI Video Hackathon KL 2026,
                  organized by Topview AI and AWS, with the source post
                  separately crediting Topview AI with providing tools. The
                  project, &ldquo;One Team, One Dream&rdquo;, explored how
                  basketball unites diverse cultures across Malaysia, connecting
                  athletic themes with generative video experimentation across
                  domains.
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
                  <dt>Expected Completion</dt>
                  <dd>2027</dd>
                </div>
                <div className="about-dossier__fact">
                  <dt>Campus Involvement</dt>
                  <dd>Monash Men&apos;s Basketball Team</dd>
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
                Inspect six public systems with documented architectures,
                verified evidence, current phases, and source repositories.
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
