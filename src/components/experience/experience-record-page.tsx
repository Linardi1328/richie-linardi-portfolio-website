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
      "Set the benchmark in preparation, code quality, and work ethic before expecting it from teammates or collaborators.",
  },
  {
    index: "02",
    title: "Empower Others",
    description:
      "In engineering and team collaboration, provide the mental models and clear abstractions that enable others to solve problems independently.",
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
              <span className="experience-strip__label">Applied Systems</span>
              <span className="experience-strip__value">
                6 Public Software Repositories
              </span>
            </div>
            <div className="experience-strip__item">
              <span className="experience-strip__label">
                Statistics & Operations
              </span>
              <span className="experience-strip__value">
                350+ Matches Tracked · KHLIM
              </span>
            </div>
            <div className="experience-strip__item">
              <span className="experience-strip__label">Athletic & Campus</span>
              <span className="experience-strip__value">
                DBL All-Star & Monash University Team
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
              Systems, analytics, and verification.
            </h2>
            <p>
              Work structured across five verified areas: independent software
              systems, competition statistics operations, financial audit,
              collaborative AI, and competitive basketball.
            </p>
          </header>

          <div className="experience-dossiers__list">
            {/* [CARD 01] Applied Systems */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>01 · Independent Applied Systems</span>
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
                  <h3>
                    Independent applied systems development across six public
                    portfolio projects
                  </h3>
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

            {/* [CARD 02] Statistics & Competition Operations */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>02 · Statistics & Competition Operations</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>KHLIM Basketball Club</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Jan 2026 – Present</span>
                </div>
                <div className="experience-dossier-card__title-row">
                  <h3>Stats Team Leader</h3>
                  <p className="experience-dossier-card__org">
                    KHLIM Basketball Club · Jan 2026 – Present
                  </p>
                </div>
                <p className="experience-dossier-card__summary">
                  Designed an automated points-tracking system covering more
                  than 350 matches across two competitions. Managed match
                  statistics, scheduling, and scoring flow to keep competition
                  data accurate and current.
                </p>
              </header>

              <div className="experience-dossier-card__body">
                <div>
                  <p className="experience-dossier-card__section-label">
                    Competition Statistics & Operations
                  </p>
                  <ul className="experience-dossier-card__responsibilities">
                    <li>
                      <strong>Automated points tracking:</strong> Designed an
                      automated points-tracking system covering more than 350
                      matches across two competitions.
                    </li>
                    <li>
                      <strong>Match statistics & scheduling:</strong> Managed
                      match statistics, scheduling, and scoring flow to keep
                      competition data accurate and current.
                    </li>
                  </ul>
                </div>

                <div className="experience-dossier-card__tags">
                  <span className="experience-tag">
                    Automated Points Tracking
                  </span>
                  <span className="experience-tag">Match Statistics</span>
                  <span className="experience-tag">Competition Operations</span>
                  <span className="experience-tag">Scheduling</span>
                  <span className="experience-tag">Data Accuracy</span>
                </div>
              </div>
            </article>

            {/* [CARD 03] Audit & Data Verification */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>03 · Audit & Data Verification</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>KHLIM Group of Companies</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Dec 2025 – Present</span>
                </div>
                <div className="experience-dossier-card__title-row">
                  <h3>Auditor</h3>
                  <p className="experience-dossier-card__org">
                    KHLIM Group of Companies · Dec 2025 – Present
                  </p>
                </div>
                <p className="experience-dossier-card__summary">
                  Financial record verification, audit working-paper preparation
                  and review, inventory stock counts, and external audit
                  assignments across three companies.
                </p>
              </header>

              <div className="experience-dossier-card__body">
                <div>
                  <p className="experience-dossier-card__section-label">
                    Audit Scope & Evidence Verification
                  </p>
                  <ul className="experience-dossier-card__responsibilities">
                    <li>
                      <strong>Audit working papers:</strong> Prepared and
                      reviewed audit working papers, including Profit & Loss
                      statements, Balance Sheets, and supporting schedules.
                    </li>
                    <li>
                      <strong>Source verification:</strong> Verified financial
                      figures against source documents and obtained relevant
                      audit evidence.
                    </li>
                    <li>
                      <strong>Inventory & external assignments:</strong>{" "}
                      Conducted inventory stock counts and external audit
                      assignments across three companies.
                    </li>
                  </ul>
                </div>

                <div className="experience-dossier-card__tags">
                  <span className="experience-tag">Financial Audit</span>
                  <span className="experience-tag">Data Verification</span>
                  <span className="experience-tag">Audit Working Papers</span>
                  <span className="experience-tag">Balance Sheets</span>
                  <span className="experience-tag">Inventory Stock Counts</span>
                </div>
              </div>
            </article>

            {/* [CARD 04] Collaborative AI / Hackathon */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>04 · Collaborative AI</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>AI Video Hackathon KL 2026</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Hackathon Project</span>
                </div>
                <div className="experience-dossier-card__title-row">
                  <h3>&ldquo;One Team, One Dream&rdquo; · Midnight Owls</h3>
                  <p className="experience-dossier-card__org">
                    AI Video Hackathon KL 2026 · Organized by Topview AI & AWS
                  </p>
                </div>
                <p className="experience-dossier-card__summary">
                  Teamed with Esther Lim Jia Xin as Midnight Owls during the AI
                  Video Hackathon KL 2026, organized by Topview AI and AWS, to
                  produce &ldquo;One Team, One Dream&rdquo;, an AI-generated
                  basketball short film exploring sports as a unifier across
                  diverse Malaysian backgrounds.
                </p>
              </header>

              <div className="experience-dossier-card__body">
                <div>
                  <p className="experience-dossier-card__section-label">
                    Project Context & Collaboration
                  </p>
                  <ul className="experience-dossier-card__responsibilities">
                    <li>
                      <strong>Narrative & cultural unity:</strong> Explored a
                      storyline centered on basketball bringing together people
                      from different Malaysian backgrounds, demonstrating how
                      sport unites cultures.
                    </li>
                    <li>
                      <strong>Event & tooling:</strong> Organized by Topview AI
                      and AWS, with the source post separately crediting Topview
                      AI with providing tools.
                    </li>
                    <li>
                      <strong>Collaborative production:</strong> Built in
                      collaboration with teammate Esther Lim Jia Xin, whose post
                      described her role as character and environment
                      references, scene planning, prompt refinement, clip
                      generation, and visual consistency.
                    </li>
                  </ul>
                </div>

                <div className="experience-dossier-card__tags">
                  <span className="experience-tag">
                    AI Video Hackathon KL 2026
                  </span>
                  <span className="experience-tag">Midnight Owls</span>
                  <span className="experience-tag">Generative Video</span>
                  <span className="experience-tag">Topview AI</span>
                  <span className="experience-tag">AWS</span>
                  <span className="experience-tag">Storytelling</span>
                </div>
              </div>
            </article>

            {/* [CARD 05] Competitive Team Athletics */}
            <article className="experience-dossier-card">
              <header className="experience-dossier-card__header">
                <div className="experience-dossier-card__meta">
                  <span>05 · Competitive Basketball</span>
                  <span
                    aria-hidden="true"
                    className="experience-dossier-card__meta-separator"
                  >
                    /
                  </span>
                  <span>Athletic Foundation</span>
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
              Engineering & Performance Principles
            </h2>
            <p>
              Five core principles drawn from applied systems development,
              collaborative engineering, and competitive athletics.
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
            first-party information. Additional background includes Monash
            University campus tournament representation, IPH Schools Student
            Council membership (2018–2019), and athletic honors (DBL All-Star
            2024, Indonesia national-team competition in 2024). New media and
            deeper proof are added only when the source is ready to support
            them.
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
