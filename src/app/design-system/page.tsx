import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import {
  PageIntro,
  SectionHeading,
  ProjectCard,
} from "@/components/editorial/shared";
import { publicProjectCatalogue } from "@/data/project-registry";

export default function DesignSystem() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main>
        <PageIntro
          eyebrow="Design reference"
          title="One clear visual language."
          description="Manrope typography, warm neutral surfaces, consistent grids, and small purposeful interactions form the portfolio’s new design system."
        />
        <section className="section container section--compact">
          <SectionHeading
            label="Typography"
            title="A foundation of readable type."
          />
          <div className="card-grid">
            <article className="content-card">
              <p className="eyebrow">Manrope / Display</p>
              <h2>Clarity, first.</h2>
              <p>
                Balanced headings, comfortable spacing, and a consistent line
                length.
              </p>
            </article>
            <article className="content-card">
              <p className="eyebrow">Manrope / Heading</p>
              <h3>Thoughtful structure.</h3>
              <p>
                Headings describe the section and establish a predictable
                hierarchy.
              </p>
            </article>
            <article className="content-card">
              <p className="eyebrow">Manrope / Body</p>
              <p>
                Body text uses generous line spacing and a calm contrast against
                a warm background.
              </p>
            </article>
          </div>
        </section>
        <section className="section container">
          <SectionHeading
            label="The grid"
            title="Equal columns. Consistent rhythm."
          />
          <div className="card-grid">
            {publicProjectCatalogue.slice(0, 3).map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
