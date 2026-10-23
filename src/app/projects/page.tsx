import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { publicProjectCatalogue } from "@/data/project-registry";
import { PageIntro, ProjectCard } from "@/components/editorial/shared";

export default function ProjectsPage() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main>
        <PageIntro
          eyebrow="Projects & exploration"
          title="From a question to a working system."
          description="Research, applied AI, automation, and software projects. Explore the thinking, the implementation, and the boundaries behind each one."
        />
        <section className="section container section--compact">
          <div className="gallery-toolbar">
            <p>{publicProjectCatalogue.length} public projects</p>
            <span>Data · Intelligence · Systems</span>
          </div>
          <div className="card-grid">
            {publicProjectCatalogue.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
