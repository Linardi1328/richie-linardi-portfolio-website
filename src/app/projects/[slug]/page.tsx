import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import {
  getProjectBySlug,
  publicProjectCatalogue,
} from "@/data/project-registry";
import { getMediaByRoute } from "@/data/media-manifest";
import { professionalWorldNavigation } from "@/data/world-navigation";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publicProjectCatalogue.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.catalogueState === "candidate") {
    notFound();
  }

  const evidence = project.evidence.map((item) =>
    item.href ? `${item.label} — linked evidence` : item.label,
  );

  const routeMedia = getMediaByRoute(`/projects/${slug}`);
  const architectureDiagram = routeMedia[0];

  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="foundation-route">
        <section className="foundation-route__hero">
          <div className="foundation-route__hero-inner">
            <p className="foundation-route__eyebrow">
              Project case study · {project.phase}
            </p>
            <h1>{project.title}</h1>
            <p className="foundation-route__lede">{project.summary}</p>
            <a
              className="foundation-route__primary-link"
              href={project.repositoryUrl}
              rel="noreferrer"
              target="_blank"
            >
              Open source repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          className="foundation-route__sections"
          aria-label={`${project.title} case study foundation`}
        >
          {/* Section 01: Current State */}
          <article className="foundation-route__section">
            <div className="foundation-route__section-index" aria-hidden="true">
              01
            </div>
            <div className="foundation-route__section-content">
              <div className="foundation-route__section-header">
                <p className="foundation-route__eyebrow">Current state</p>
                <h2>What exists now.</h2>
              </div>
              <div className="foundation-route__section-body">
                <p>{project.currentStatus}</p>
                <ul>
                  <li>Verified {project.statusVerifiedAt}</li>
                  {project.release ? <li>Release {project.release}</li> : null}
                  <li>{project.tags.join(" · ")}</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Section 02: Boundaries */}
          <article className="foundation-route__section">
            <div className="foundation-route__section-index" aria-hidden="true">
              02
            </div>
            <div className="foundation-route__section-content">
              <div className="foundation-route__section-header">
                <p className="foundation-route__eyebrow">
                  Operating boundaries
                </p>
                <h2>What this project does not claim.</h2>
              </div>
              <div className="foundation-route__section-body">
                <ul>
                  {project.boundaries.map((boundary) => (
                    <li key={boundary}>{boundary}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Section 03: Evidence */}
          <article className="foundation-route__section">
            <div className="foundation-route__section-index" aria-hidden="true">
              03
            </div>
            <div className="foundation-route__section-content">
              <div className="foundation-route__section-header">
                <p className="foundation-route__eyebrow">Evidence</p>
                <h2>Proof stays visible.</h2>
              </div>
              <div className="foundation-route__section-body">
                <ul>
                  {evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Section 04: Architecture & Workflow Diagram (if available) */}
          {architectureDiagram ? (
            <article className="foundation-route__section">
              <div
                className="foundation-route__section-index"
                aria-hidden="true"
              >
                04
              </div>
              <div className="foundation-route__section-content">
                <div className="foundation-route__section-header">
                  <p className="foundation-route__eyebrow">
                    System Architecture
                  </p>
                  <h2>Workflow &amp; Safety Engine.</h2>
                </div>
                <div className="foundation-route__section-body">
                  <figure className="foundation-route__diagram-container">
                    <div className="foundation-route__diagram-frame">
                      <Image
                        alt={architectureDiagram.altText}
                        className="foundation-route__diagram-img"
                        height={architectureDiagram.height ?? 450}
                        loading="lazy"
                        src={architectureDiagram.filename}
                        width={architectureDiagram.width ?? 800}
                      />
                    </div>
                    <figcaption className="foundation-route__diagram-caption">
                      <strong>{architectureDiagram.caption}</strong>
                      <span>
                        Verified from repository architecture specifications
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </article>
          ) : null}

          {/* Section 05 / 04: Roadmap & Navigation */}
          <article className="foundation-route__section">
            <div className="foundation-route__section-index" aria-hidden="true">
              {architectureDiagram ? "05" : "04"}
            </div>
            <div className="foundation-route__section-content">
              <div className="foundation-route__section-header">
                <p className="foundation-route__eyebrow">Next interface pass</p>
                <h2>
                  Architecture, workflow, decisions, limitations, roadmap.
                </h2>
              </div>
              <div className="foundation-route__section-body">
                <p>
                  The detailed visual case-study modules will be filled after
                  the preview review. The route, evidence model, truth boundary,
                  and responsive composition are already in place.
                </p>
                <Link
                  className="foundation-route__primary-link"
                  href="/projects"
                >
                  Back to projects <span aria-hidden="true">←</span>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
