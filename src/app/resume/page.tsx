import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function ResumePage() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="resume-page">
        <header className="resume-header container">
          <div className="resume-header__meta">
            <p className="eyebrow">Web Résumé · Curriculum Vitae</p>
            <h1 className="resume-title">Richie Bertrand Linardi</h1>
            <p className="resume-subtitle">
              Computer Science (Data Science) | Applied AI & Software
              Engineering
            </p>
            <p className="resume-location">Subang Jaya, Selangor, Malaysia</p>
          </div>

          <div
            className="resume-actions"
            aria-label="Verified Contact & Actions"
          >
            <a
              className="button button--primary"
              href="https://www.linkedin.com/in/richie-linardi-595370314/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
            <a
              className="button button--plain"
              href="https://github.com/Linardi1328"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: Linardi1328 ↗
            </a>
            <a
              className="button button--plain"
              href="mailto:richb.linardi@gmail.com"
            >
              Email Richie ↗
            </a>
          </div>
        </header>

        <div className="resume-container container">
          {/* Summary / Profile */}
          <section className="resume-section" aria-labelledby="section-profile">
            <h2 id="section-profile" className="resume-section__title">
              Profile
            </h2>
            <div className="resume-section__content">
              <p className="resume-profile-text">
                Computer Science undergraduate developing secure, data-driven
                software and human-supervised AI systems. Experienced in
                full-stack development, machine learning research, live sports
                operations, and financial audit.
              </p>
            </div>
          </section>

          {/* Education */}
          <section
            className="resume-section"
            aria-labelledby="section-education"
          >
            <h2 id="section-education" className="resume-section__title">
              Education
            </h2>
            <div className="resume-section__content">
              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      Bachelor of Computer Science (Data Science)
                    </h3>
                    <p className="resume-entry__org">
                      Monash University Malaysia
                    </p>
                  </div>
                  <span className="resume-entry__period">
                    Mar 2025 – Nov 2027 (expected)
                  </span>
                </div>
                <div className="resume-entry__meta">
                  <span className="resume-badge">CGPA: 3.50</span>
                </div>
                <p className="resume-entry__desc">
                  Coursework: algorithms, databases, data visualisation,
                  statistics, and software design.
                </p>
              </article>
            </div>
          </section>

          {/* Experience */}
          <section
            className="resume-section"
            aria-labelledby="section-experience"
          >
            <h2 id="section-experience" className="resume-section__title">
              Experience
            </h2>
            <div className="resume-section__content">
              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      Independent Software Developer / Product Builder
                    </h3>
                    <p className="resume-entry__org">
                      R&E Technologies (venture in development)
                    </p>
                  </div>
                  <span className="resume-entry__period">2026–Present</span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Lead software engineering for a broader technology solutions
                    venture in development; develop proprietary software
                    products (KYNEXA, RIVORA, AXIOM QUANTUM) while exploring
                    practical solutions for business problems.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">Stats Team Leader</h3>
                    <p className="resume-entry__org">KHLIM Basketball Club</p>
                  </div>
                  <span className="resume-entry__period">Jan 2026–Present</span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Designed automated points tracking covering 350+ matches
                    across two competitions; managed match statistics, scoring,
                    and scheduling workflows.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">Auditor</h3>
                    <p className="resume-entry__org">
                      KHLIM Group of Companies
                    </p>
                  </div>
                  <span className="resume-entry__period">
                    Dec 2025–Sep 2026
                  </span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Prepared audit working papers, verified financial records
                    and supporting evidence, and conducted inventory counts and
                    external audit assignments across three companies.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      Incoming Data Annotation Intern
                    </h3>
                    <p className="resume-entry__org">GTEX Asia Sdn Bhd</p>
                  </div>
                  <span className="resume-entry__period">
                    23 Nov 2026–19 Feb 2027 (scheduled)
                  </span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Scheduled professional industry placement focused on data
                    annotation and machine learning dataset preparation.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* Selected Technical Projects */}
          <section
            className="resume-section"
            aria-labelledby="section-projects"
          >
            <h2 id="section-projects" className="resume-section__title">
              Selected Technical Projects
            </h2>
            <div className="resume-section__content">
              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      <Link href="/projects/khlim-3x3-live">
                        KHLIM 3x3 Live V1
                      </Link>
                    </h3>
                    <p className="resume-entry__org">
                      Flagship Deployed Tournament Platform ·{" "}
                      <a
                        href="https://prod.khlim-3x3-live.workers.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        prod.khlim-3x3-live.workers.dev ↗
                      </a>
                    </p>
                  </div>
                  <span className="resume-entry__period">
                    Deployed 24 Oct 2026
                  </span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Delivered live scoring for 118 matches across 2 courts and 4
                    divisions; automated standings and brackets via Google
                    Sheets, Apps Script, and Cloudflare Workers, reducing manual
                    work and centralising results.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      <Link href="/projects/kynexa">KYNEXA</Link>
                    </h3>
                    <p className="resume-entry__org">
                      Athlete Passport & Sports Registration Platform
                    </p>
                  </div>
                  <span className="resume-entry__period">In development</span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Developing Next.js/TypeScript Athlete Passport workflows for
                    player profiles, verified competition records, and
                    tournament registrations with Supabase/PostgreSQL role-based
                    authorization; pilot acceptance ongoing.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      <Link href="/projects/rivora">RIVORA</Link>
                    </h3>
                    <p className="resume-entry__org">
                      Developer-Managed Tournament Platform
                    </p>
                  </div>
                  <span className="resume-entry__period">In development</span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Building branded spectator experiences and tournament
                    operations for live schedules, real-time scores, standings,
                    and automated bracket progression; distinct from the
                    completed KHLIM 3x3 Live V1 deployment; V1 validation
                    ongoing.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      <Link href="/projects/spy-market-agent">
                        AXIOM QUANTUM
                      </Link>
                    </h3>
                    <p className="resume-entry__org">
                      Quantitative Research Baseline · Python, pandas,
                      scikit-learn
                    </p>
                  </div>
                  <span className="resume-entry__period">
                    Research Baseline Released
                  </span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Built leakage-aware SPY research, walk-forward evaluation,
                    backtesting, and independent risk controls; released v2 beta
                    research baseline; no live trading.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      <Link href="/projects/personal-portfolio">
                        Personal Portfolio Website
                      </Link>
                    </h3>
                    <p className="resume-entry__org">
                      Next.js, React, TypeScript, Tailwind CSS ·{" "}
                      <a
                        href="https://richielinardi.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        richielinardi.vercel.app ↗
                      </a>
                    </p>
                  </div>
                  <span className="resume-entry__period">
                    Production released 15 Nov 2026
                  </span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Engineered and deployed an accessible, dual-identity
                    cinematic editorial portfolio with verified case studies,
                    optimized photography, automated pass gates, and zero-defect
                    browser regression suites.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      <Link href="/projects/tourism-dashboard">
                        Tourism in Malaysia Interactive Dashboard
                      </Link>
                    </h3>
                    <p className="resume-entry__org">
                      Completed Academic Project · JavaScript, HTML/CSS ·{" "}
                      <a
                        href="https://linardi1328.github.io/FIT2179_DV2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        Live demo ↗
                      </a>
                    </p>
                  </div>
                  <span className="resume-entry__period">Apr 2026</span>
                </div>
                <ul className="resume-entry__bullets">
                  <li>
                    Cleaned public datasets and built interactive maps and
                    time-series visualisations of tourism recovery, occupancy,
                    and spending.
                  </li>
                </ul>
              </article>

              <article className="resume-entry">
                <div className="resume-entry__header">
                  <div>
                    <h3 className="resume-entry__role">
                      Additional Systems (In development)
                    </h3>
                    <p className="resume-entry__org">
                      Secondary Tooling & Operations
                    </p>
                  </div>
                  <span className="resume-entry__period">In development</span>
                </div>
                <p className="resume-entry__desc">
                  KHLIM Digital Ecosystem (Next.js/NestJS academy platform); RBL
                  Content Engine (evidence-backed content); Personal Project
                  Operator (approval-gated automation).
                </p>
              </article>
            </div>
          </section>

          {/* Technical Skills & Achievements */}
          <section className="resume-section" aria-labelledby="section-skills">
            <h2 id="section-skills" className="resume-section__title">
              Skills & Honors
            </h2>
            <div className="resume-section__content">
              <div className="resume-skills-grid">
                <div>
                  <h3 className="resume-skills-label">
                    Languages & Frameworks
                  </h3>
                  <p className="resume-skills-value">
                    Python, SQL, Java, TypeScript, JavaScript, React, Next.js,
                    FastAPI, NestJS
                  </p>
                </div>
                <div>
                  <h3 className="resume-skills-label">
                    Data & Engineering Tools
                  </h3>
                  <p className="resume-skills-value">
                    pandas, scikit-learn, Tableau, PostgreSQL, Supabase,
                    Git/GitHub, CI, Linux, Excel
                  </p>
                </div>
                <div>
                  <h3 className="resume-skills-label">
                    Achievements & Competition
                  </h3>
                  <p className="resume-skills-value">
                    ASEAN Schools Games 2024 gold (Indonesia); DBL Indonesia
                    All-Star 2024; FIBA U18 Asia Cup 2024; AI Video Hackathon KL
                    2026 participant (Midnight Owls).
                  </p>
                </div>
                <div>
                  <h3 className="resume-skills-label">Spoken Languages</h3>
                  <p className="resume-skills-value">
                    English, Malay, Mandarin, Indonesian
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PortfolioWorldShell>
  );
}
