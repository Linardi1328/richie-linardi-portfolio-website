import Link from "next/link";
import { foundationPages } from "@/data/foundation-pages";
import { publicProjectCatalogue } from "@/data/project-registry";

const professionalDNA = [
  {
    index: "01",
    title: "Analytical Thinker",
    description:
      "Decomposing complex software, data, and algorithmic problems into clear, testable, and maintainable components.",
  },
  {
    index: "02",
    title: "Detail to Impact",
    description:
      "Relentless attention to edge-case handling, strict schema validation, fail-closed boundaries, and production reliability.",
  },
  {
    index: "03",
    title: "Builder's Mindset",
    description:
      "Architecting and shipping full-lifecycle systems from initial design through automated validation and maintenance.",
  },
  {
    index: "04",
    title: "High-Performance Leadership",
    description:
      "Habits developed through competitive team sport: preparation, role clarity, communication, and calm execution under pressure.",
  },
] as const;

const leadershipPrinciples = [
  {
    index: "01",
    title: "Lead by Example",
    description:
      "Set the benchmark in preparation, code quality, and work ethic before expecting it from peers or students.",
  },
  {
    index: "02",
    title: "Empower Others",
    description:
      "In teaching and team collaboration, provide the mental models that enable others to debug and solve problems independently.",
  },
  {
    index: "03",
    title: "Clear & Explicit Communication",
    description:
      "Eliminate ambiguity in technical requirements, code reviews, architectural boundaries, and team expectations.",
  },
  {
    index: "04",
    title: "Radical Accountability & Review",
    description:
      "Own mistakes immediately, analyze root causes objectively without ego, and implement systematic preventative fixes.",
  },
  {
    index: "05",
    title: "Relentless Continuous Improvement",
    description:
      "Commit to daily incremental mastery across both engineering craft and athletic discipline.",
  },
] as const;

export function ExperienceRecordPage() {
  const data = foundationPages.experience;

  return (
    <main className="identity-page">
      {/* [HERO] Professional Experience */}
      <section className="identity-hero">
        <div className="identity-container identity-hero__inner">
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
              <Link className="identity-btn" href="/projects">
                Inspect public projects
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* [PANEL A] Professional DNA */}
      <section
        aria-labelledby="experience-dna-heading"
        className="experience-dna"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Working Mindset</p>
            <h2 id="experience-dna-heading">Core Engineering DNA</h2>
            <p>
              Four foundational pillars that govern technical problem solving,
              collaboration, and execution standards.
            </p>
          </header>

          <div className="experience-dna__grid">
            {professionalDNA.map((item) => (
              <article className="experience-dna__card" key={item.title}>
                <span aria-hidden="true" className="experience-dna__index">
                  {item.index}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [PANEL B] Principle Strip */}
      <section
        aria-label="Experience summary metrics"
        className="experience-strip"
        data-reveal
      >
        <div className="identity-container">
          <div className="experience-strip__grid">
            <div className="experience-strip__item">
              <span className="experience-strip__label">
                University Teaching
              </span>
              <span className="experience-strip__value">
                FIT1045 TA · Monash University Malaysia
              </span>
            </div>
            <div className="experience-strip__item">
              <span className="experience-strip__label">Applied Systems</span>
              <span className="experience-strip__value">
                6 Public Software Repositories
              </span>
            </div>
            <div className="experience-strip__item">
              <span className="experience-strip__label">
                Athletic Track Record
              </span>
              <span className="experience-strip__value">
                DBL All-Star & Indonesia National Team
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* [SECTION 01] Experience Dossiers */}
      <section
        aria-labelledby="experience-dossiers-heading"
        className="experience-dossiers"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Experience Dossiers</p>
            <h2 id="experience-dossiers-heading">
              Teaching, systems, and team performance.
            </h2>
            <p>
              Work structured across three verified pillars: university computer
              science education, independent software systems, and competitive
              basketball experience.
            </p>
          </header>

          <div className="experience-dossiers__list">
            {/* [CARD 01] Teaching & Mentorship */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>01 · Teaching & Mentorship</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Monash University Malaysia</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Current Academic Appointment</span>
                </div>
                <div className="experience-dossier-card__title-row">
                  <h3>FIT1045 Teaching Assistant</h3>
                  <p className="experience-dossier-card__org">
                    Monash University Malaysia
                  </p>
                </div>
                <p className="experience-dossier-card__summary">
                  At Monash University, I support FIT1045 students with
                  introductory programming and problem solving. Teaching keeps
                  technical communication clear, practical, and grounded in how
                  people actually learn.
                </p>
              </header>

              <div className="experience-dossier-card__body">
                <div>
                  <p className="experience-dossier-card__section-label">
                    Focus Areas & Pedagogy
                  </p>
                  <ul className="experience-dossier-card__responsibilities">
                    <li>
                      <strong>Programming fundamentals:</strong> Supporting
                      students with introductory programming syntax, control
                      flow, and computational problem solving.
                    </li>
                    <li>
                      <strong>Problem decomposition:</strong> Helping students
                      break larger programming exercises into structured,
                      manageable components.
                    </li>
                    <li>
                      <strong>Debugging and reasoning:</strong> Assisting
                      students in tracing program execution, diagnosing
                      mistakes, and developing systematic problem-solving
                      habits.
                    </li>
                    <li>
                      <strong>Clear technical communication:</strong> Explaining
                      technical concepts in practical, direct terms that keep
                      reasoning transparent and grounded.
                    </li>
                  </ul>
                </div>

                <div className="experience-dossier-card__tags">
                  <span className="experience-tag">Python</span>
                  <span className="experience-tag">Algorithms</span>
                  <span className="experience-tag">Problem Decomposition</span>
                  <span className="experience-tag">Debugging</span>
                  <span className="experience-tag">Technical Mentorship</span>
                </div>
              </div>
            </article>

            {/* [CARD 02] Applied Systems Engineering */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>02 · Applied Systems</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Independent Systems Development</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Current Portfolio Systems</span>
                </div>
                <div className="experience-dossier-card__title-row">
                  <h3>Applied systems work across six public projects</h3>
                  <p className="experience-dossier-card__org">
                    Independent software development across public repositories
                  </p>
                </div>
                <p className="experience-dossier-card__summary">
                  Projects treated as operating software. The portfolio includes
                  systems for market research, project operations, accounting
                  workflows, event support, content operations, and sports
                  infrastructure. Each project shows its current phase,
                  constraints, evidence, and repository.
                </p>
              </header>

              <div className="experience-dossier-card__body">
                <div>
                  <p className="experience-dossier-card__section-label">
                    Six Public Operating Systems
                  </p>
                  <div className="experience-dossier-card__projects-grid">
                    {publicProjectCatalogue.map((project) => (
                      <div
                        className="experience-project-pill"
                        key={project.slug}
                      >
                        <h4>{project.title}</h4>
                        <p>{project.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="experience-dossier-card__tags">
                  <span className="experience-tag">TypeScript</span>
                  <span className="experience-tag">Python</span>
                  <span className="experience-tag">Next.js</span>
                  <span className="experience-tag">FastAPI</span>
                  <span className="experience-tag">Node.js</span>
                  <span className="experience-tag">SQLite</span>
                  <span className="experience-tag">Tailwind CSS</span>
                </div>
              </div>
            </article>

            {/* [CARD 03] High-Performance Leadership & Team Dynamics */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>03 · Team Performance & Leadership</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Competitive Team Sport</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Cross-Domain Transfer</span>
                </div>
                <div className="experience-dossier-card__title-row">
                  <h3>Team performance is a system too</h3>
                  <p className="experience-dossier-card__org">
                    Habits developed through competitive basketball
                  </p>
                </div>
                <p className="experience-dossier-card__summary">
                  Competitive basketball adds another leadership context:
                  preparation, role clarity, communication, accountability, and
                  recovery after mistakes. Those habits carry directly into how
                  I build and review technical work.
                </p>
              </header>

              <div className="experience-dossier-card__body">
                <div>
                  <p className="experience-dossier-card__section-label">
                    Transferred Habits & Team Discipline
                  </p>
                  <ul className="experience-dossier-card__responsibilities">
                    <li>
                      <strong>Preparation and repetition:</strong> The
                      discipline of consistent preparation and structured
                      repetition carries directly into how technical systems are
                      designed, tested, and reviewed.
                    </li>
                    <li>
                      <strong>Role clarity and communication:</strong>{" "}
                      High-stakes team competition demands explicit role
                      definitions and direct communication, mirroring clear
                      software interfaces and modular boundaries.
                    </li>
                    <li>
                      <strong>Accountability and review loops:</strong>{" "}
                      Reviewing mistakes objectively without ego builds rapid
                      recovery and iterative improvement habits across both
                      domains.
                    </li>
                    <li>
                      <strong>Decision-making under pressure:</strong>{" "}
                      Navigating competitive pressure reinforces calm,
                      deliberate reasoning when evaluating complex engineering
                      trade-offs.
                    </li>
                  </ul>
                </div>

                <div className="experience-dossier-card__tags">
                  <span className="experience-tag">Preparation</span>
                  <span className="experience-tag">Role Clarity</span>
                  <span className="experience-tag">Communication</span>
                  <span className="experience-tag">Accountability</span>
                  <span className="experience-tag">Decision-Making</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* [SECTION 02] Leadership Principles */}
      <section
        aria-labelledby="experience-principles-heading"
        className="experience-principles"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Operating Standard</p>
            <h2 id="experience-principles-heading">
              Leadership & Engineering Principles
            </h2>
            <p>
              Five core principles drawn from classroom teaching, autonomous
              systems development, and competitive athletics.
            </p>
          </header>

          <div className="experience-principles__grid">
            {leadershipPrinciples.map((item) => (
              <article className="experience-principle-item" key={item.title}>
                <span
                  aria-hidden="true"
                  className="experience-principle-item__index"
                >
                  {item.index}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION 03] Evidence & Credentials */}
      <section
        aria-label="Source-aware verification statement"
        className="about-closing"
        data-reveal
      >
        <div className="identity-container about-closing__content">
          <h2 className="about-closing__statement">
            Work that can be inspected directly.
          </h2>
          <p className="about-closing__context">
            Public claims stay tied to verified records, repositories, or
            first-party information. New media and deeper proof are added only
            when the source is ready to support them.
          </p>
          <div
            className="identity-hero__actions"
            style={{ justifyContent: "center" }}
          >
            <Link className="identity-btn identity-btn--primary" href="/resume">
              Open web résumé
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="identity-btn" href="/projects">
              Inspect projects
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="identity-btn" href="/contact">
              Verified contact channels
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
