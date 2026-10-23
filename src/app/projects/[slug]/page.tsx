import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { PageIntro, SectionHeading } from "@/components/editorial/shared";
import {
  getProjectBySlug,
  publicProjectCatalogue,
} from "@/data/project-registry";
import { getMediaByRoute } from "@/data/media-manifest";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { getRepositoryActivity } from "@/lib/repository-activity";

export const revalidate = 3600;
export function generateStaticParams() {
  return publicProjectCatalogue.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.catalogueState === "candidate") notFound();
  const activity = await getRepositoryActivity(project.repositoryUrl);
  const media = getMediaByRoute(`/projects/${slug}`);
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main>
        <PageIntro
          eyebrow={`Project / ${project.phase}`}
          title={project.title}
          description={project.summary}
        />
        <section className="section container section--compact">
          <div className="project-actions">
            <a
              className="button button--primary"
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore the repository ↗
            </a>
            <Link className="text-link" href="/projects">
              ← All projects
            </Link>
          </div>
          <div className="case-layout">
            <article className="content-card">
              <p className="eyebrow">Implementation</p>
              <h2 className="card-heading">Where the project stands.</h2>
              <p>{project.currentStatus}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="small-note">
                Implementation reviewed {project.statusVerifiedAt}
                {project.release ? ` · Release ${project.release}` : ""}
              </p>
              {activity ? (
                <p className="small-note">
                  Latest repository push:{" "}
                  <time dateTime={activity.pushedAt}>
                    {new Date(activity.pushedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                  . Repository activity refreshes hourly; implementation claims
                  keep their review date.
                </p>
              ) : (
                <p className="small-note">
                  Repository activity is temporarily unavailable. Visit the
                  source for subsequent changes.
                </p>
              )}
            </article>
            <article className="content-card">
              <p className="eyebrow">Scope & boundaries</p>
              <h2 className="card-heading">Clarity is part of the work.</h2>
              <ul className="detail-list">
                {project.boundaries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
        {media.length ? (
          <section className="section section--tinted">
            <div className="container">
              <SectionHeading
                label="The system"
                title="How the pieces fit together."
              />
              {media.map((item) => (
                <figure className="architecture-figure" key={item.id}>
                  <Image
                    src={item.filename}
                    alt={item.altText}
                    width={item.width ?? 800}
                    height={item.height ?? 450}
                    sizes="(min-width: 1280px) 1180px, 92vw"
                  />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
        <section className="section container">
          <SectionHeading
            label="Evidence & further reading"
            title="Go a little deeper."
          />
          <ul className="evidence-list">
            {project.evidence.map((item) => (
              <li key={item.label}>
                <span>{item.kind}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label} ↗
                  </a>
                ) : (
                  <p>{item.label}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
