import type { PortfolioProject } from "@/types/project";

const evidenceKindLabels = {
  deployment: "Deployment",
  documentation: "Documentation",
  release: "Release",
  repository: "Repository",
  tests: "Tests",
} as const;

type FeaturedProjectDossierProps = {
  project: PortfolioProject;
};

export function FeaturedProjectDossier({
  project,
}: FeaturedProjectDossierProps) {
  return (
    <article className="featured-project-dossier">
      {/* [CARD 01] Featured Project Dossier */}
      <div aria-hidden="true" className="featured-project-dossier__signal" />

      <header className="featured-project-dossier__header">
        <div>
          <p className="featured-project-dossier__eyebrow">
            Flagship system · {project.phase}
          </p>
          <h3 className="featured-project-dossier__title">{project.title}</h3>
          <p className="featured-project-dossier__summary">{project.summary}</p>
        </div>

        <a
          className="featured-project-dossier__source"
          href={project.repositoryUrl}
          rel="noreferrer"
          target="_blank"
        >
          <span>Inspect source</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div
        className="featured-project-dossier__tags"
        aria-label="Technical surface"
      >
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="featured-project-dossier__grid">
        <section className="featured-project-dossier__module">
          <p className="featured-project-dossier__label">Current state</p>
          <p className="featured-project-dossier__status">
            {project.currentStatus}
          </p>
          <p className="featured-project-dossier__verified">
            Status verified {project.statusVerifiedAt}
          </p>
        </section>

        <section className="featured-project-dossier__module">
          <p className="featured-project-dossier__label">
            Operating boundaries
          </p>
          <ul className="featured-project-dossier__list">
            {project.boundaries.map((boundary) => (
              <li key={boundary}>{boundary}</li>
            ))}
          </ul>
        </section>

        <section className="featured-project-dossier__module featured-project-dossier__module--evidence">
          <p className="featured-project-dossier__label">Evidence attached</p>
          <div className="featured-project-dossier__evidence">
            {project.evidence.map((item) => {
              const content = (
                <>
                  <span>{evidenceKindLabels[item.kind]}</span>
                  <strong>{item.label}</strong>
                </>
              );

              return item.href ? (
                <a
                  href={item.href}
                  key={`${item.kind}-${item.label}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content}
                </a>
              ) : (
                <div key={`${item.kind}-${item.label}`}>{content}</div>
              );
            })}
          </div>
        </section>
      </div>
    </article>
  );
}
