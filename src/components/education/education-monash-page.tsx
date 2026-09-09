import Link from "next/link";
import { foundationPages } from "@/data/foundation-pages";

const academicFoundations = [
  {
    index: "01",
    title: "Programming Fundamentals",
    description:
      "Core programming concepts, structured procedural decomposition, modular code organization, and systematic debugging practices.",
  },
  {
    index: "02",
    title: "Algorithms & Problem Solving",
    description:
      "Algorithmic reasoning, computational efficiency, problem decomposition, and step-by-step logic design.",
  },
  {
    index: "03",
    title: "Probability & Random Variables",
    description:
      "Theoretical probability distributions, random variables, and mathematical models that underpin data-oriented reasoning.",
  },
  {
    index: "04",
    title: "Software Design & Data Reasoning",
    description:
      "Software design principles and analytical data interpretation, connecting academic theory to practical systems.",
  },
] as const;

const technicalProgression = [
  {
    phase: "Phase 01 · Foundations",
    title: "Foundational Computation",
    description:
      "Core programming mechanics, procedural decomposition, and basic algorithmic problem solving.",
  },
  {
    phase: "Phase 02 · Theory & Rigor",
    title: "Mathematical & Algorithmic Rigor",
    description:
      "Probability distributions, random variables, computational problem solving, and structured software design.",
  },
  {
    phase: "Phase 03 · Applied Synthesis",
    title: "Applied Data-Oriented Systems",
    description:
      "Data-oriented reasoning and analytical methods applied to personal software engineering and real-world system pipelines.",
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

const teachingPillars = [
  {
    title: "Programming Fundamentals",
    description:
      "Guiding students through introductory programming mechanics, syntax, and structured problem decomposition.",
  },
  {
    title: "Problem Decomposition",
    description:
      "Helping students break down complex computational problems into smaller, structured, and manageable steps.",
  },
  {
    title: "Debugging & Reasoning",
    description:
      "Assisting students in tracing program execution and diagnosing logic errors systematically.",
  },
  {
    title: "Clear Technical Communication",
    description:
      "Explaining technical concepts in practical terms and adapting explanations to another student's way of thinking.",
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
                View teaching & experience
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
                  <dt>Academic Appointment</dt>
                  <dd>FIT1045 Teaching Assistant</dd>
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

      {/* [SECTION 05] Academic Experience & Teaching Loop */}
      <section
        aria-labelledby="education-teaching-heading"
        className="education-teaching-loop"
        data-reveal
      >
        <div className="identity-container">
          <article className="education-teaching-loop__card">
            <header className="education-teaching-loop__header">
              <p className="identity-eyebrow">Teaching Loop</p>
              <h2 id="education-teaching-heading">
                Learning sharpens when you explain it.
              </h2>
              <p className="education-teaching-loop__lead">
                Working as a FIT1045 Teaching Assistant creates a useful
                feedback loop: concepts need to be understood well enough to
                explain, debug, and adapt to another student’s way of thinking.
              </p>
            </header>

            <div className="education-teaching-loop__pillars">
              {teachingPillars.map((pillar) => (
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
              View teaching & experience
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
