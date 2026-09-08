import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { publicProjectCatalogue } from "@/data/project-registry";
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function ProjectsPage() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="foundation-route">
        <section className="foundation-route__hero">
          <div className="foundation-route__hero-inner">
            <p className="foundation-route__eyebrow">Projects</p>
            <h1>Systems first. Evidence attached.</h1>
            <p className="foundation-route__lede">
              The preview catalogue exposes the full project architecture now.
              Each project routes to a case-study foundation built from the
              verified project registry instead of generated marketing copy.
            </p>
          </div>
        </section>

        <section
          className="foundation-route__sections"
          aria-label="Project catalogue"
        >
          {publicProjectCatalogue.map((project, index) => (
            <article className="foundation-route__section" key={project.slug}>
              <div
                className="foundation-route__section-index"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="foundation-route__eyebrow">{project.phase}</p>
                <h2>{project.title}</h2>
                <div>
                  <p>{project.summary}</p>
                  <ul>
                    <li>{project.currentStatus}</li>
                    <li>{project.tags.join(" · ")}</li>
                    <li>Verified {project.statusVerifiedAt}</li>
                  </ul>
                  <Link
                    className="foundation-route__primary-link"
                    href={`/projects/${project.slug}`}
                  >
                    Open case-study foundation <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
