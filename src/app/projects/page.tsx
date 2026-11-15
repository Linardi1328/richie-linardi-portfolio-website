import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { publicProjectCatalogue } from "@/data/project-registry";
import {
  PageIntro,
  ProjectCard,
  SectionHeading,
} from "@/components/editorial/shared";

export default function ProjectsPage() {
  const flagshipProject = publicProjectCatalogue.find(
    (p) => p.slug === "khlim-3x3-live",
  );
  const engineeringSlugs = [
    "kynexa",
    "rivora",
    "spy-market-agent",
    "personal-portfolio",
  ];
  const academicSlugs = ["tourism-dashboard"];
  const engineeringProjects = publicProjectCatalogue.filter((p) =>
    engineeringSlugs.includes(p.slug),
  );
  const academicProjects = publicProjectCatalogue.filter((p) =>
    academicSlugs.includes(p.slug),
  );
  const secondaryProjects = publicProjectCatalogue.filter(
    (p) =>
      p.slug !== "khlim-3x3-live" &&
      !engineeringSlugs.includes(p.slug) &&
      !academicSlugs.includes(p.slug),
  );

  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main>
        <PageIntro
          eyebrow="Technical Systems & Projects"
          title="From inquiry to working systems."
          description="A curated catalogue of software systems, tournament platforms, quantitative research, and interactive data visualization. Built with strict verification, transparent operational boundaries, and documented evidence."
        />

        {flagshipProject ? (
          <section className="section container section--compact">
            <SectionHeading
              label="Flagship Deployed System"
              title="KHLIM 3x3 Live V1"
            >
              Real-time court operations, automated division standings, and
              decoupled edge spectator feeds deployed under tournament
              conditions.
            </SectionHeading>
            <div className="flagship-hero-card">
              <div className="flagship-hero-card__badge">
                <span>Deployed 24 Oct 2026</span>
                <span>118 Matches · 2 Courts · 4 Divisions</span>
              </div>
              <h2 className="flagship-hero-card__title">
                Tournament Scoring Engine & Decoupled Spectator Edge Feed
              </h2>
              <p className="flagship-hero-card__desc">
                Architected to handle live courtside scoring and tournament
                brackets while shielding primary data sources from public
                spectator traffic via Cloudflare Workers. Delivered automated
                standings, schedule distribution, and results tracking.
              </p>
              <div className="flagship-hero-card__tags">
                <span className="tag">Cloudflare Workers</span>
                <span className="tag">Google Apps Script</span>
                <span className="tag">Google Sheets</span>
                <span className="tag">Edge Cache</span>
                <span className="tag">Tournament Ops</span>
              </div>
              <div className="flagship-hero-card__actions">
                <a
                  className="button button--primary"
                  href="https://prod.khlim-3x3-live.workers.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live deployment ↗
                </a>
                <Link
                  className="button button--plain"
                  href="/projects/khlim-3x3-live"
                >
                  Read full case study →
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        <section className="section container">
          <SectionHeading
            label="Selected Technical Systems"
            title="Core engineering & applied research."
          >
            Systems from Résumé V4 spanning registration platforms, tournament
            operations, quantitative market research, and portfolio
            infrastructure.
          </SectionHeading>
          <div className="card-grid">
            {engineeringProjects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
          </div>
        </section>

        <section className="section container section--tinted" id="academic">
          <SectionHeading
            label="Academic & Data Science"
            title="From data to decisions."
          >
            Coursework and academic data science projects at Monash University
            Malaysia. Grounded in dimensional modelling, data quality
            assessment, SQL, and interactive data visualisation.
          </SectionHeading>
          <div className="card-grid">
            {academicProjects.map((project, index) => (
              <ProjectCard
                project={project}
                index={index + engineeringProjects.length}
                key={project.slug}
              />
            ))}
          </div>
        </section>

        {secondaryProjects.length > 0 ? (
          <section className="section container">
            <SectionHeading
              label="Supporting Systems & Operations"
              title="Infrastructure, tooling, and internal platforms."
            >
              Approval-gated developer operations, sports digital
              infrastructure, and internal content verification tooling.
            </SectionHeading>
            <div className="card-grid">
              {secondaryProjects.map((project, index) => (
                <ProjectCard
                  project={project}
                  index={
                    index + engineeringProjects.length + academicProjects.length
                  }
                  key={project.slug}
                />
              ))}
            </div>
          </section>
        ) : null}

        <section className="section container section--tinted">
          <SectionHeading
            label="Supporting Ventures & Context"
            title="Distinct from standalone software engineering."
          />
          <div className="card-grid card-grid--two">
            <article className="content-card">
              <p className="eyebrow">Technology Solutions Venture</p>
              <h2 className="card-heading">R&E Technologies</h2>
              <p>
                A broader technology solutions venture in development
                (2026–Present) that develops its own software products while
                selectively exploring practical software solutions for business
                problems. Kept distinct from unverified incorporation,
                partnership, or revenue claims.
              </p>
            </article>
            <article className="content-card">
              <p className="eyebrow">Personal Identity & Content</p>
              <h2 className="card-heading">RBL</h2>
              <p>
                The supporting personal brand and athlete identity of Richie
                Linardi, connecting collegiate basketball competition, media
                storytelling, and community engagement with technical
                foundations.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
