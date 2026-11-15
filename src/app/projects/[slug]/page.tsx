import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { PageIntro, SectionHeading } from "@/components/editorial/shared";
import { getProjectBySlug, projectRegistry } from "@/data/project-registry";
import { getMediaByRoute } from "@/data/media-manifest";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { getRepositoryActivity } from "@/lib/repository-activity";

export const revalidate = 3600;
export function generateStaticParams() {
  return projectRegistry
    .filter(
      (project) =>
        project.catalogueState !== "candidate" &&
        project.catalogueState !== "unlisted",
    )
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (
    !project ||
    project.catalogueState === "candidate" ||
    project.catalogueState === "unlisted"
  ) {
    return {};
  }

  return {
    title: `${project.title} · Richie Linardi`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (
    !project ||
    project.catalogueState === "candidate" ||
    project.catalogueState === "unlisted"
  ) {
    notFound();
  }
  const hasDedicatedRepo =
    Boolean(project.repositoryUrl) &&
    project.repositoryUrl !== "https://github.com/Linardi1328";
  const activity = hasDedicatedRepo
    ? await getRepositoryActivity(project.repositoryUrl)
    : null;
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
            {project.deploymentUrl ? (
              <a
                className="button button--primary"
                href={project.deploymentUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open live deployment ↗
              </a>
            ) : null}
            {hasDedicatedRepo ? (
              <a
                className={`button ${project.deploymentUrl ? "button--plain" : "button--primary"}`}
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Explore the repository ↗
              </a>
            ) : null}
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
                  {hasDedicatedRepo
                    ? "Repository activity is temporarily unavailable. Visit the source for subsequent changes."
                    : "No dedicated public repository is linked."}
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
        {project.caseStudy ? (
          <section className="section container section--compact">
            <SectionHeading
              label={
                project.caseStudy.academicContext
                  ? "Academic dossier"
                  : "Case study dossier"
              }
              title={
                project.caseStudy.academicContext
                  ? "Methodology, analytical approach, and outcomes."
                  : "Architecture, approach, and verified outcomes."
              }
            />

            {project.caseStudy.academicContext ? (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                  alignItems: "center",
                }}
              >
                <span className="hero-status-pill" style={{ margin: 0 }}>
                  <span
                    className="status-dot-pulse"
                    style={{ backgroundColor: "#38bdf8" }}
                    aria-hidden="true"
                  />
                  {project.caseStudy.academicContext.unit} ·{" "}
                  {project.caseStudy.academicContext.institution} (
                  {project.caseStudy.academicContext.period})
                </span>
              </div>
            ) : null}

            <div className="case-layout">
              <article className="content-card">
                <p className="eyebrow">
                  {project.caseStudy.academicContext
                    ? "Inquiry & intended audience"
                    : "Problem & intended users"}
                </p>
                <h3 className="card-heading">
                  {project.caseStudy.academicContext
                    ? "The analytical challenge."
                    : "The challenge addressed."}
                </h3>
                {project.caseStudy.problem ? (
                  <p>{project.caseStudy.problem}</p>
                ) : null}
                {project.caseStudy.intendedUsers ? (
                  <p className="small-note" style={{ marginTop: "1rem" }}>
                    <strong>Intended audience:</strong>{" "}
                    {project.caseStudy.intendedUsers}
                  </p>
                ) : null}
                {project.caseStudy.learningObjectives ? (
                  <div style={{ marginTop: "1rem" }}>
                    <p
                      className="small-note"
                      style={{ fontWeight: 750, marginBottom: "0.5rem" }}
                    >
                      Learning objectives:
                    </p>
                    <ul className="detail-list" style={{ fontSize: "0.8rem" }}>
                      {project.caseStudy.learningObjectives.map((obj) => (
                        <li key={obj}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
              <article className="content-card">
                <p className="eyebrow">
                  {project.caseStudy.academicContext
                    ? "Technical skills & implementation"
                    : "Technical approach & contribution"}
                </p>
                <h3 className="card-heading">
                  {project.caseStudy.academicContext
                    ? "Visual encoding & execution."
                    : "Engineering & architecture."}
                </h3>
                {project.caseStudy.technicalApproach ? (
                  <p>{project.caseStudy.technicalApproach}</p>
                ) : null}
                {project.caseStudy.personalContribution ? (
                  <p className="small-note" style={{ marginTop: "1rem" }}>
                    <strong>Personal contribution:</strong>{" "}
                    {project.caseStudy.personalContribution}
                  </p>
                ) : null}
                {project.caseStudy.technicalSkills ? (
                  <div
                    className="system-tag-list"
                    style={{ marginTop: "1rem" }}
                  >
                    {project.caseStudy.technicalSkills.map((skill) => (
                      <span className="system-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            </div>
            {project.caseStudy.verifiedOutcomes ||
            project.caseStudy.limitations ||
            project.caseStudy.academicContext?.disclaimer ? (
              <div style={{ marginTop: "1.5rem" }}>
                <article className="content-card">
                  <p className="eyebrow">
                    {project.caseStudy.academicContext
                      ? "Verified outcomes, limitations & academic note"
                      : "Verified outcomes & limitations"}
                  </p>
                  <h3 className="card-heading">
                    What was measured and learned.
                  </h3>
                  {project.caseStudy.verifiedOutcomes ? (
                    <p>{project.caseStudy.verifiedOutcomes}</p>
                  ) : null}
                  {project.caseStudy.limitations ? (
                    <p className="small-note" style={{ marginTop: "0.75rem" }}>
                      <strong>Limitations:</strong>{" "}
                      {project.caseStudy.limitations}
                    </p>
                  ) : null}
                  {project.caseStudy.academicContext?.disclaimer ? (
                    <p
                      className="small-note"
                      style={{
                        marginTop: "0.75rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        borderLeft: "3px solid #38bdf8",
                      }}
                    >
                      {project.caseStudy.academicContext.disclaimer}
                    </p>
                  ) : null}
                </article>
              </div>
            ) : null}
          </section>
        ) : null}
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
