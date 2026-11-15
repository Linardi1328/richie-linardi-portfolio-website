import Link from "next/link";
import { PortfolioPhotograph } from "@/components/ui/portfolio-photograph";
import {
  basketballAchievements,
  asg2024FinalSnapshot,
  fibaU18Snapshot,
} from "@/data/basketball-record";
import { SectionHeading } from "./shared";

export function ProfessionalHome() {
  return (
    <main>
      {/* Monumental Cinematic Hero */}
      <section className="cinematic-hero-wrap container">
        <h1 className="monumental-name">
          <span>Richie</span>
          <span className="accent-text">
            Linardi<span className="wordmark__dot">.</span>
          </span>
        </h1>

        <div className="home-hero" style={{ paddingTop: 0 }}>
          <div className="home-hero__copy">
            <span className="hero-status-pill">
              <span className="status-dot-pulse" aria-hidden="true" />
              Monash CS (Data Science) · CGPA 3.50 · Incoming Intern @ GTEX Asia
              (Scheduled Nov 2026)
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.6rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                marginBlock: "0.75rem 1.25rem",
                fontWeight: 750,
              }}
            >
              Developing secure, data-driven software, human-supervised AI
              systems, and competitive athletic discipline.
            </h2>
            <p className="lede">
              I’m Richie Linardi, a Computer Science student at Monash
              University Malaysia specializing in Data Science. I build
              practical software across full-stack engineering, quantitative
              research, live sports operations, and independent ventures.
            </p>
            <div className="button-row">
              <a className="button button--primary" href="#flagship-system">
                Explore Flagship System ↓
              </a>
              <Link className="button button--plain" href="/resume">
                Read Résumé ↗
              </Link>
              <Link className="button button--plain" href="/contact">
                Let’s Connect →
              </Link>
            </div>
            <div className="hero-footnote">
              <span>Subang Jaya, Selangor, Malaysia</span>
              <span>Monash University Malaysia (Expected 2027)</span>
              <span>Flagship: KHLIM 3x3 Live (118 Matches)</span>
            </div>
          </div>
          <div className="home-hero__visual">
            <div className="photo-label">
              <span>01 / The professional side</span>
              <span>Richie Linardi</span>
            </div>
            <PortfolioPhotograph photo="professional" preload />
            <div className="hero-photo-note">
              <span className="note-number">RL.</span>
              <p>
                Analytical by nature.
                <br />
                Built with engineering rigor and competitive focus.
              </p>
              <Link href="/basketball">Meet the athlete ↗</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus strip */}
      <div className="focus-strip">
        <div className="container">
          <span>Core technical domains</span>
          <p>
            Data Science <i /> Applied AI <i /> Full-Stack Engineering <i />
            Live Sports Operations <i /> Quantitative Research
          </p>
        </div>
      </div>

      {/* Editorial Narrative Bridge */}
      <section className="section section--tinted">
        <div className="container">
          <SectionHeading
            label="The editorial thread"
            title="One journey. Two sides. The same discipline."
          >
            Whether architecting deterministic event scoring systems,
            researching walk-forward market models, or competing against
            national-caliber guards at the FIBA U18 Asia Cup, the standard is
            identical: rigorous preparation, calm execution under pressure, and
            relentless accountability.
          </SectionHeading>
          <div className="story-grid">
            <article className="story-card">
              <PortfolioPhotograph photo="monash" />
              <div>
                <p className="eyebrow">
                  Academic Foundation · Monash University Malaysia
                </p>
                <h3>Bachelor of Computer Science (Data Science)</h3>
                <p>
                  CGPA 3.50 with expected graduation in Nov 2027. Foundational
                  coursework in algorithms, databases, data visualisation,
                  statistics, and software design.
                </p>
                <Link className="text-link" href="/education">
                  View academic pathway ↗
                </Link>
              </div>
            </article>
            <article className="story-card">
              <PortfolioPhotograph photo="hackathon" />
              <div>
                <p className="eyebrow">Collaborative Sprint · Midnight Owls</p>
                <h3>AI Video Hackathon KL 2026</h3>
                <p>
                  Participant in the AI Video Hackathon KL 2026 with team
                  Midnight Owls, merging generative AI workflows, rapid problem
                  formulation, and real-time sprint execution.
                </p>
                <Link className="text-link" href="/experience">
                  Explore experience and leadership ↗
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Flagship Deployed System: KHLIM 3x3 Live V1 */}
      <section className="section container" id="flagship-system">
        <div className="flagship-dossier">
          <div className="flagship-badge-row">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <span className="flagship-badge">
                <span
                  className="status-dot-pulse"
                  style={{ backgroundColor: "#38bdf8" }}
                  aria-hidden="true"
                />
                FLAGSHIP DEPLOYED SYSTEM · 24 OCT 2026
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#94a3b8",
                  fontWeight: 700,
                }}
              >
                KHLIM 3x3 Basketball Tournament
              </span>
            </div>
            <span
              style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 600 }}
            >
              Cloudflare Workers · Google Apps Script · Google Sheets
            </span>
          </div>

          <h2 className="flagship-title">KHLIM 3x3 Live V1</h2>
          <p className="flagship-subtitle">
            Delivered live tournament scoring for 118 matches across 2 courts
            and 4 divisions; automated standings and brackets via Google Sheets,
            Apps Script, and Cloudflare Workers, reducing manual workload and
            centralising tournament results.
          </p>

          <div className="flagship-metrics-grid">
            <div className="flagship-metric-card">
              <div className="flagship-metric-number">118</div>
              <div className="flagship-metric-label">Matches Scored</div>
            </div>
            <div className="flagship-metric-card">
              <div className="flagship-metric-number">2</div>
              <div className="flagship-metric-label">Active Courts</div>
            </div>
            <div className="flagship-metric-card">
              <div className="flagship-metric-number">4</div>
              <div className="flagship-metric-label">Tournament Divisions</div>
            </div>
            <div className="flagship-metric-card">
              <div
                className="flagship-metric-number"
                style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)" }}
              >
                Automated
              </div>
              <div className="flagship-metric-label">
                Division Standings & Brackets
              </div>
            </div>
          </div>

          <div className="flagship-architecture">
            <h3 className="flagship-arch-title">
              Technical Architecture & Workflow Breakdown
            </h3>
            <div className="flagship-flow-grid">
              <div className="flagship-flow-card">
                <span className="flow-step-number">
                  PHASE 01 / COURT INGESTION
                </span>
                <h4>Mobile Scorekeeping</h4>
                <p>
                  Courtside table officials record points, fouls, and match
                  clock directly via an optimized mobile Google Sheets interface
                  designed for rapid 3x3 game pace.
                </p>
              </div>
              <div className="flagship-flow-card">
                <span className="flow-step-number">
                  PHASE 02 / AUTOMATION ENGINE
                </span>
                <h4>Validation & Standings</h4>
                <p>
                  Google Apps Script automation computes tiebreakers, division
                  standings, and playoff bracket progressions deterministically
                  upon score confirmation.
                </p>
              </div>
              <div className="flagship-flow-card">
                <span className="flow-step-number">
                  PHASE 03 / EDGE DISTRIBUTION
                </span>
                <h4>Cloudflare Workers Feed</h4>
                <p>
                  Cloudflare Workers edge endpoint serves the live spectator
                  schedules, live scores, and updated ladders to players,
                  coaches, and spectators, decoupling public read traffic from
                  the scoring sheet.
                </p>
              </div>
            </div>
          </div>

          <div className="flagship-reflection">
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 750,
                color: "#ffffff",
                marginBottom: "0.5rem",
              }}
            >
              Operational Reality & Tournament Lessons
            </h3>
            <p>
              Operating live during the October tournament provided practical
              operational feedback regarding courtside score entry response
              times and scoring table network variance during peak concurrent
              game transitions. While automated standings eliminated paper
              calculation delays and expedited bracket progressions, these
              tournament realities provided concrete requirements for caching
              strategies, offline tolerance, and clear boundary separation in
              future platform development.
            </p>
          </div>

          <div className="flagship-actions">
            <a
              className="button button--flagship-live"
              href="https://prod.khlim-3x3-live.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Cloudflare Worker Deployment ↗
            </a>
            <Link
              className="button button--secondary"
              href="/projects/khlim-3x3-live"
            >
              Read Full Case Study →
            </Link>
            <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
              Completed one-day tournament deployment (24 Oct 2026); live
              availability reflects documented Worker runtime. Multi-tournament
              management development continues separately under RIVORA.
            </span>
          </div>
        </div>
      </section>

      {/* Active & In-Development Systems */}
      <section className="section container" id="selected-systems">
        <SectionHeading
          label="02 / Active & in-development systems"
          title="Focused software engineering across sports, research, and data."
          link={{ href: "/projects", label: "All projects" }}
        >
          Selected technical systems developed by Richie Linardi. Each project
          maintains explicit boundaries, verified implementations, and clear
          operational status.
        </SectionHeading>

        <div className="secondary-systems-grid">
          {/* KYNEXA */}
          <article className="secondary-system-card">
            <div>
              <p className="eyebrow" style={{ color: "#2563eb" }}>
                In development · Sports Infrastructure
              </p>
              <h3>KYNEXA</h3>
              <p>
                Sports opportunity and registration platform. Developing athlete
                and organizer workflows with Supabase/PostgreSQL authorization
                and registration validation; pilot acceptance ongoing.
              </p>
            </div>
            <div className="system-tag-list">
              <span className="system-tag">Next.js</span>
              <span className="system-tag">TypeScript</span>
              <span className="system-tag">Supabase</span>
              <span className="system-tag">PostgreSQL</span>
              <span className="system-tag">Role Authorization</span>
            </div>
          </article>

          {/* RIVORA */}
          <article className="secondary-system-card">
            <div>
              <p className="eyebrow" style={{ color: "#2563eb" }}>
                In development · Tournament Platform
              </p>
              <h3>RIVORA</h3>
              <p>
                Developer-managed basketball tournament platform. Building
                branded spectator experiences and tournament operations for
                schedules, live scores, standings, and brackets; V1 validation
                ongoing.
              </p>
            </div>
            <div className="system-tag-list">
              <span className="system-tag">TypeScript</span>
              <span className="system-tag">React</span>
              <span className="system-tag">Tournament Operations</span>
              <span className="system-tag">Live Brackets</span>
            </div>
          </article>

          {/* AXIOM QUANTUM */}
          <article className="secondary-system-card">
            <div>
              <p className="eyebrow" style={{ color: "#2563eb" }}>
                Quantitative research · v2 beta research baseline
              </p>
              <h3>AXIOM QUANTUM</h3>
              <p>
                Leakage-aware SPY market-research and walk-forward evaluation
                system with deterministic safety gates, backtesting, and
                independent risk controls. Experimental research software with
                no live trading or profitability claims.
              </p>
            </div>
            <div className="system-tag-list">
              <span className="system-tag">Python</span>
              <span className="system-tag">pandas</span>
              <span className="system-tag">scikit-learn</span>
              <span className="system-tag">Walk-forward ML</span>
              <span className="system-tag">Risk Controls</span>
            </div>
          </article>

          {/* Tourism in Malaysia Dashboard */}
          <article className="secondary-system-card">
            <div>
              <p className="eyebrow" style={{ color: "#2563eb" }}>
                Completed academic project · Apr 2026
              </p>
              <h3>Tourism in Malaysia Interactive Dashboard</h3>
              <p>
                Cleaned public datasets and built interactive maps and
                time-series visualisations of Malaysian tourism recovery, hotel
                occupancy rates, and regional expenditure patterns.
              </p>
              <div style={{ marginTop: "0.75rem", marginBottom: "0.5rem" }}>
                <a
                  className="text-link"
                  href="https://linardi1328.github.io/FIT2179_DV2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live interactive dashboard ↗
                </a>
              </div>
            </div>
            <div className="system-tag-list">
              <span className="system-tag">JavaScript</span>
              <span className="system-tag">HTML/CSS</span>
              <span className="system-tag">Data Visualisation</span>
              <span className="system-tag">Public Datasets</span>
            </div>
          </article>
        </div>
      </section>

      {/* Supporting Ventures Chapter */}
      <section className="section section--tinted">
        <div className="container">
          <SectionHeading
            label="03 / Supporting ventures"
            title="Independent initiatives and product exploration."
          >
            Supporting ventures within Richie Linardi’s personal portfolio. Both
            entities are represented with neutral typography in accordance with
            brand usage guidelines, preserving distinct professional contexts.
          </SectionHeading>

          <div className="ventures-grid">
            <article className="venture-card">
              <span className="venture-badge">
                Venture in development · 2026–Present
              </span>
              <h3 className="venture-wordmark">R&E Technologies</h3>
              <p>
                Independent software development and problem-first technology
                solutions. Architecting product scope, technical specifications,
                and automated testing across sports technology and applied AI
                systems (KYNEXA, RIVORA, AXIOM QUANTUM).
              </p>
              <div className="system-tag-list">
                <span className="system-tag">Systems Architecture</span>
                <span className="system-tag">Product Engineering</span>
                <span className="system-tag">Software Development</span>
              </div>
            </article>

            <article className="venture-card">
              <span className="venture-badge">Creative & Media Initiative</span>
              <h3 className="venture-wordmark">RBL</h3>
              <p>
                Creative media and digital storytelling initiative supporting
                competitive basketball documentation, video production
                workflows, and athletic portfolio presentation.
              </p>
              <div className="system-tag-list">
                <span className="system-tag">Media Production</span>
                <span className="system-tag">Digital Storytelling</span>
                <span className="system-tag">Athlete Brand</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* The Other Side — Cross-Identity Transition */}
      <section className="container">
        <div className="cross-identity-cinematic">
          <div className="cross-identity-grid">
            <div className="cross-identity-copy">
              <p className="eyebrow">04 / The other side of the story</p>
              <h2>
                One journey.
                <br />
                The other arena.
              </h2>
              <p>
                Basketball has shaped how I prepare, communicate, and respond
                under pressure. The same analytical precision, pressure
                tolerance, and relentless preparation behind every commit also
                drives my play on the court.
              </p>

              <div className="honours-pills">
                <div className="honour-pill">
                  <span className="honour-dot" aria-hidden="true" />
                  <span>
                    ASEAN Schools Games 2024 Gold Medalist (Indonesia)
                  </span>
                </div>
                <div className="honour-pill">
                  <span className="honour-dot" aria-hidden="true" />
                  <span>DBL Indonesia All-Star 2024</span>
                </div>
                <div className="honour-pill">
                  <span className="honour-dot" aria-hidden="true" />
                  <span>FIBA U18 Asia Cup 2024 (Indonesia National Team)</span>
                </div>
              </div>

              <Link className="button button--athlete-hero" href="/basketball">
                Step onto the court ↗
              </Link>
            </div>

            <div>
              <div className="photo-label" style={{ color: "#94a3b8" }}>
                <span>02 / The athlete side</span>
                <span>Richie Linardi · Indonesia No. 13</span>
              </div>
              <PortfolioPhotograph photo="allStar" />
            </div>
          </div>
        </div>
      </section>

      {/* Memorable Closing / Contact Pathway */}
      <section className="section container" style={{ paddingTop: 0 }}>
        <div
          style={{ borderTop: "1px solid var(--line)", paddingTop: "3.5rem" }}
        >
          <SectionHeading
            label="05 / The next conversation"
            title="Let’s build something real together."
          >
            Open for software engineering opportunities, technical
            collaborations, and data science projects. Incoming Data Annotation
            Intern at GTEX Asia Sdn Bhd scheduled 23 Nov 2026–19 Feb 2027.
          </SectionHeading>

          <div
            className="button-row"
            style={{ marginTop: "1.75rem", marginBottom: "2rem" }}
          >
            <Link className="button button--primary" href="/contact">
              Get in touch ↗
            </Link>
            <Link className="button button--plain" href="/resume">
              View full résumé →
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              fontSize: "0.85rem",
              fontWeight: 700,
            }}
          >
            <a
              className="text-link"
              href="https://www.linkedin.com/in/richie-linardi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="text-link"
              href="https://github.com/Linardi1328"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a className="text-link" href="mailto:richb.linardi@gmail.com">
              richb.linardi@gmail.com ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export function AthleteHome() {
  return (
    <main>
      <section className="home-hero home-hero--athlete container">
        <div className="home-hero__copy">
          <p className="eyebrow">
            <span className="status-dot" /> Indonesia · No. 13 · National
            Athlete
          </p>
          <h1>
            For the game.
            <br />
            For the team.
            <br />
            <em>For the journey.</em>
          </h1>
          <p className="lede">
            I’m Richie Linardi. From DBL Academy in Surabaya to representing
            Indonesia internationally, basketball has been an eight-year
            discipline of preparation, high-stakes competition, and collective
            accountability.
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="/basketball/journey">
              Follow my journey ↗
            </Link>
            <Link className="button button--plain" href="/basketball/stats">
              Verified statistics ↗
            </Link>
            <Link className="button button--plain" href="/basketball/gallery">
              The photo archive →
            </Link>
          </div>
          <div className="hero-footnote">
            <span>DBL Indonesia All-Star 2024</span>
            <span>Indonesia national representation</span>
          </div>
        </div>
        <div className="home-hero__visual">
          <div className="photo-label">
            <span>02 / The athlete side</span>
            <span>In my element</span>
          </div>
          <PortfolioPhotograph photo="allStar" preload />
          <div className="hero-photo-note">
            <span className="note-number">13.</span>
            <p>
              Built through repetition.
              <br />
              Better, together.
            </p>
            <Link href="/basketball/stats">View the record ↗</Link>
          </div>
        </div>
      </section>

      <section className="section container section--compact">
        <div className="athlete-landmark-bar">
          <div className="athlete-landmark-item">
            <span className="landmark-label">International Gold</span>
            <strong>ASEAN Schools Games 2024</strong>
            <span className="landmark-sub">
              56–54 vs Philippines · Da Nang, Vietnam
            </span>
          </div>
          <div className="athlete-landmark-item">
            <span className="landmark-label">National Selection</span>
            <strong>DBL Indonesia All-Star</strong>
            <span className="landmark-sub">2024 Boys All-Star Roster</span>
          </div>
          <div className="athlete-landmark-item">
            <span className="landmark-label">Continental Play</span>
            <strong>FIBA U18 Asia Cup 2024</strong>
            <span className="landmark-sub">Amman, Jordan · Indonesia</span>
          </div>
          <div className="athlete-landmark-item">
            <span className="landmark-label">Provincial Games</span>
            <strong>PorProv VIII Champion</strong>
            <span className="landmark-sub">
              Kota Surabaya · 21 PTS in Final
            </span>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          label="Moments that matter"
          title="The work behind the milestones."
          link={{ href: "/basketball/achievements", label: "All achievements" }}
        />
        <div className="card-grid">
          {basketballAchievements.slice(0, 3).map((item) => (
            <article className="content-card achievement-card" key={item.title}>
              <span className="large-year">{item.year}</span>
              <p className="eyebrow">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              {item.source ? (
                <a
                  className="text-link"
                  href={item.source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the record ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container feature-split">
          <PortfolioPhotograph photo="gold" />
          <div>
            <p className="eyebrow">ASEAN Schools Games 2024</p>
            <h2>
              A gold medal.
              <br />A shared memory.
            </h2>
            <p className="lede">
              Indonesia {asg2024FinalSnapshot.score} Philippines.
            </p>
            <p>{asg2024FinalSnapshot.contextNote}</p>
            <div className="stat-grid">
              <div>
                <strong>{asg2024FinalSnapshot.points}</strong>
                <span>Points in the final</span>
              </div>
              <div>
                <strong>{asg2024FinalSnapshot.rebounds}</strong>
                <span>Rebounds in the final</span>
              </div>
              <div>
                <strong>{fibaU18Snapshot.games}</strong>
                <span>FIBA U18 games in 2024</span>
              </div>
            </div>
            <Link className="text-link" href="/basketball/stats">
              Explore the statistics ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="section container dual-identity-section">
        <SectionHeading
          label="Court to Codebase · Dual Identity"
          title="How competitive basketball shapes software engineering."
        >
          Preparation, resilience under pressure, and collective accountability
          bridge both worlds.
        </SectionHeading>
        <div className="dual-identity-grid">
          <article className="dual-identity-card">
            <p className="eyebrow">Preparation & Systematic Execution</p>
            <h3 className="card-heading">Reps Before the Game</h3>
            <p>
              In basketball, execution in the fourth quarter is determined by
              thousands of repetitions in empty gyms. In software, system
              resilience under peak tournament load is determined by
              deterministic error handling, edge caching, and automated testing
              before release.
            </p>
          </article>
          <article className="dual-identity-card">
            <p className="eyebrow">Trust & Composure Under Pressure</p>
            <h3 className="card-heading">Accountability in High Stakes</h3>
            <p>
              Whether defending a two-point lead in the final seconds of an
              international championship match or deploying live scoring
              infrastructure across two courts and four divisions, clarity of
              role and calm communication make the difference.
            </p>
          </article>
        </div>
        <div className="button-row" style={{ marginTop: "2rem" }}>
          <Link className="button button--primary" href="/projects">
            Explore technical projects ↗
          </Link>
          <Link className="button button--plain" href="/about">
            Dual identity profile →
          </Link>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          label="Explore the athlete"
          title="There’s more to the story."
        />
        <div className="card-grid">
          {[
            {
              href: "/basketball/journey",
              no: "01",
              title: "The journey",
              copy: "Academy foundations, school competition, club basketball, and international representation.",
            },
            {
              href: "/basketball/achievements",
              no: "02",
              title: "Milestones & honors",
              copy: "Documented gold medals, All-Star selection, and competitive podium finishes.",
            },
            {
              href: "/basketball/stats",
              no: "03",
              title: "Verified statistics",
              copy: "Official season progression, tournament shooting, and championship box scores.",
            },
            {
              href: "/basketball/gallery",
              no: "04",
              title: "The photographs",
              copy: "A personal collection of game moments, teammates, and milestones from Da Nang to Jakarta.",
            },
            {
              href: "/basketball/media",
              no: "05",
              title: "In the record",
              copy: "Published coverage, federation profiles, and sources behind the competitive record.",
            },
          ].map((item) => (
            <Link
              className="content-card navigation-card"
              href={item.href}
              key={item.href}
            >
              <span className="eyebrow">
                {item.no} <span aria-hidden="true">↗</span>
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
