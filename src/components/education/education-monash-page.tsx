import Link from "next/link";
import { foundationPages } from "@/data/foundation-pages";

const academicFoundations = [
  {
    index: "01",
    title: "Programming",
    description:
      "Core programming mechanics, structured procedural decomposition, modular code organization, and systematic debugging practices.",
  },
  {
    index: "02",
    title: "Algorithms",
    description:
      "Algorithmic reasoning, step-by-step logic design, and computational problem decomposition.",
  },
  {
    index: "03",
    title: "Probability & Random Variables",
    description:
      "Theoretical probability distributions, random variables, and mathematical models supporting data-oriented reasoning.",
  },
  {
    index: "04",
    title: "Software Design & Data Reasoning",
    description:
      "Principles of software design and analytical data-oriented reasoning connecting coursework to practical software projects.",
  },
] as const;

const technicalProgression = [
  {
    phase: "Phase 01 · Foundations",
    title: "Programming & Computation",
    description:
      "Foundational programming mechanics, procedural decomposition, and algorithmic problem solving.",
  },
  {
    phase: "Phase 02 · Mathematical Depth",
    title: "Probability & Random Variables",
    description:
      "Probability distributions, random variables, and mathematical models underpinning data-oriented reasoning.",
  },
  {
    phase: "Phase 03 · Practical Application",
    title: "Software Design & Data Reasoning",
    description:
      "Software design principles and analytical data reasoning applied to independent software projects.",
  },
] as const;

const verifiedTools = [
  {
    category: "Programming Languages",
    note: "Verified across foundational academic studies and technical experience.",
    tags: ["Python", "TypeScript", "Java", "C++", "C#"],
  },
  {
    category: "Frameworks & Web",
    note: "Used across portfolio applications and system interfaces.",
    tags: ["Next.js", "React", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "Data & Project Technologies",
    note: "Verified across public project architectures in the portfolio registry.",
    tags: ["SQLite", "PostgreSQL", "Supabase", "Prisma", "GitHub", "Telegram"],
  },
] as const;

const applicationPillars = [
  {
    title: "Programming",
    description:
      "Core programming mechanics, syntax, and structured problem decomposition applied across independent codebases.",
  },
  {
    title: "Algorithms",
    description:
      "Step-by-step computational logic and algorithmic reasoning used to address concrete engineering problems.",
  },
  {
    title: "Probability & Random Variables",
    description:
      "Mathematical models of probability and random variables that support data-oriented thinking.",
  },
  {
    title: "Software Design & Data Reasoning",
    description:
      "Principles of software design and analytical data reasoning connecting coursework to practical software projects.",
  },
] as const;

export function EducationMonashPage() {
  const data = foundationPages.education;

  return (
    <main className="identity-page">
      {/* [HERO] Academic Growth at Monash */}
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
              <Link className="identity-btn" href="/experience">
                View experience & leadership
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* [SECTION 01] Degree & Sidebar */}
      <section
        aria-labelledby="education-overview-heading"
        className="education-overview"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Academic Degree</p>
            <h2 id="education-overview-heading">University Degree & Focus</h2>
          </header>

          <div className="education-overview__layout">
            <article className="education-degree-card">
              <span className="education-degree-card__badge">
                Undergraduate Degree
              </span>
              <div>
                <h3>Bachelor of Computer Science</h3>
                <p className="education-degree-card__institution">
                  Monash University Malaysia
                </p>
              </div>
              <p className="education-degree-card__summary">
                The degree builds the software and computational foundation
                behind my project work, while the Data Science specialization
                adds statistical and data-oriented depth.
              </p>
              <ul className="education-degree-card__highlights">
                <li>Monash University Malaysia</li>
                <li>Data Science specialization</li>
                <li>Expected graduation · 2027</li>
              </ul>
            </article>

            <aside
              aria-label="Academic summary at a glance"
              className="education-glance-card"
            >
              <h3 className="education-glance-card__title">At a Glance</h3>
              <dl className="education-glance-list">
                <div className="education-glance-item">
                  <dt>Institution</dt>
                  <dd>Monash University Malaysia</dd>
                </div>
                <div className="education-glance-item">
                  <dt>Degree</dt>
                  <dd>Bachelor of Computer Science</dd>
                </div>
                <div className="education-glance-item">
                  <dt>Specialization</dt>
                  <dd>Data Science</dd>
                </div>
                <div className="education-glance-item">
                  <dt>Expected Completion</dt>
                  <dd>2027</dd>
                </div>
                <div className="education-glance-item">
                  <dt>Campus Team</dt>
                  <dd>Monash Men&apos;s Basketball Team</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* [SECTION 02] Core Foundations */}
      <section
        aria-labelledby="education-foundations-heading"
        className="education-foundations"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Curriculum Scope</p>
            <h2 id="education-foundations-heading">
              Core Academic Foundations
            </h2>
            <p>
              My studies include programming, algorithms, probability and random
              variables, software design, and data-oriented reasoning.
            </p>
          </header>

          <div className="education-foundations__grid">
            {academicFoundations.map((item) => (
              <article className="education-foundation-card" key={item.title}>
                <span
                  aria-hidden="true"
                  className="education-foundation-card__index"
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

      {/* [SECTION 03] Technical Progression */}
      <section
        aria-labelledby="education-progression-heading"
        className="education-progression"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Academic Arc</p>
            <h2 id="education-progression-heading">Technical Progression</h2>
            <p>
              Theory becomes useful through implementation. Personal projects
              give academic concepts a larger, more practical setting.
            </p>
          </header>

          <div className="education-progression__timeline">
            {technicalProgression.map((step) => (
              <article className="education-progression-step" key={step.phase}>
                <span className="education-progression-step__phase">
                  {step.phase}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION 04] Tools & Languages */}
      <section
        aria-labelledby="education-tools-heading"
        className="education-tools"
        data-reveal
      >
        <div className="identity-container">
          <header className="identity-section-header">
            <p className="identity-eyebrow">Technical Surface</p>
            <h2 id="education-tools-heading">Tools & Technologies</h2>
            <p>
              Verified technologies supported by foundation data and public
              portfolio project repositories.
            </p>
          </header>

          <div className="education-tools__grid">
            {verifiedTools.map((group) => (
              <article className="education-tool-group" key={group.category}>
                <h3>{group.category}</h3>
                <p className="education-tool-group__note">{group.note}</p>
                <div className="education-tool-group__tags">
                  {group.tags.map((tag) => (
                    <span className="experience-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [SECTION 05] Academic Foundations & Application Loop */}
      <section
        aria-labelledby="education-translation-heading"
        className="education-teaching-loop"
        data-reveal
      >
        <div className="identity-container">
          <article className="education-teaching-loop__card">
            <header className="education-teaching-loop__header">
              <p className="identity-eyebrow">Applied Translation</p>
              <h2 id="education-translation-heading">
                Foundations connect to operating software.
              </h2>
              <p className="education-teaching-loop__lead">
                Foundational coursework in programming, algorithms, probability
                and random variables, software design, and data-oriented
                reasoning provides computational and analytical depth that
                connects directly to independent software projects.
              </p>
            </header>

            <div className="education-teaching-loop__pillars">
              {applicationPillars.map((pillar) => (
                <div className="education-teaching-pillar" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* [CTA] Theory to Practice */}
      <section
        aria-label="Education call to action"
        className="education-cta"
        data-reveal
      >
        <div className="identity-container education-cta__content">
          <h2>Theory becomes useful through implementation.</h2>
          <p>
            Academic foundations provide computational and statistical depth,
            while personal projects give those ideas a larger, operating
            setting.
          </p>
          <div className="education-cta__actions">
            <Link
              className="identity-btn identity-btn--primary"
              href="/projects"
            >
              See applied work
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="identity-btn" href="/experience">
              View experience & leadership
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
