import Link from "next/link";
import { ProfessionalHero } from "@/components/hero/professional-hero";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { FeaturedProjectDossier } from "@/components/projects/featured-project-dossier";
import { ProjectCard } from "@/components/projects/project-card";
import { TimelineItem } from "@/components/timeline/timeline-item";
import {
  Container,
  ResponsiveGrid,
  Section,
  SectionHeading,
  Surface,
  TagGroup,
  TextLink,
} from "@/components/ui";
import { professionalHomeData } from "@/data/professional-home";
import { publicProjectCatalogue } from "@/data/project-registry";
import { professionalWorldNavigation } from "@/data/world-navigation";

const featuredProject = publicProjectCatalogue.find(
  (project) => project.catalogueState === "featured",
);

const supportingProjectCards = featuredProject
  ? professionalHomeData.projects.filter(
      (project) => project.title !== featuredProject.title,
    )
  : professionalHomeData.projects;

const sharedDisciplines = [
  "Preparation",
  "Decision-making",
  "Review",
  "Iteration",
] as const;

export default function Home() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="theme-professional">
        <ProfessionalHero
          {...professionalHomeData.hero}
          systemCount={publicProjectCatalogue.length}
        />

        {/* [SECTION 01] Selected Technical Projects */}
        <Section aria-labelledby="projects-heading" id="projects">
          <Container size="wide">
            <SectionHeading
              description="A small set of technical projects with scope and status stated as they exist today."
              eyebrow="Selected technical projects"
              id="projects-heading"
              title="Work built around evidence, controls, and maintainable boundaries."
            />

            {featuredProject ? (
              <div className="mt-10">
                <FeaturedProjectDossier project={featuredProject} />
              </div>
            ) : null}

            {/* [SECTION 01A] Supporting Systems Catalogue */}
            <div className="mt-12">
              <div className="mb-5 flex items-end justify-between gap-6 border-b border-border pb-4">
                <div>
                  <p className="type-eyebrow text-context-accent">
                    Supporting systems
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-text-primary">
                    Current catalogue
                  </h3>
                </div>
                <p className="hidden max-w-md text-right text-sm leading-6 text-text-muted min-[768px]:block">
                  Each system stays attached to its real implementation state,
                  constraints, and repository evidence.
                </p>
              </div>

              <ResponsiveGrid columns="two">
                {supportingProjectCards.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </ResponsiveGrid>
            </div>
          </Container>
        </Section>

        {/* [SECTION: identity-bridge] Same Skill, Two Worlds */}
        <section
          aria-labelledby="identity-bridge-heading"
          className="professional-identity-bridge"
        >
          <div className="professional-identity-bridge__inner">
            <div className="professional-identity-bridge__intro">
              <p>Identity / 02</p>
              <h2 id="identity-bridge-heading">Same skill. Two worlds.</h2>
              <span>
                Software and basketball are different arenas, but the working
                habits underneath them are remarkably similar.
              </span>
            </div>

            <div className="professional-identity-bridge__faces">
              <article className="professional-identity-bridge__face professional-identity-bridge__face--systems">
                <div className="professional-identity-bridge__face-index">
                  <span>01</span>
                  <span>PROFESSIONAL</span>
                </div>
                <div>
                  <h3>Build systems that can explain themselves.</h3>
                  <p>
                    Architecture, tests, evidence, limitations, and human
                    controls are treated as part of the product rather than
                    hidden behind it.
                  </p>
                </div>
                <Link href="/about">Read the identity story →</Link>
              </article>

              <div
                aria-hidden="true"
                className="professional-identity-bridge__spine"
              >
                <span>RBL</span>
              </div>

              <article className="professional-identity-bridge__face professional-identity-bridge__face--athlete">
                <div className="professional-identity-bridge__face-index">
                  <span>02</span>
                  <span>ATHLETE</span>
                </div>
                <div>
                  <h3>Perform where preparation becomes visible.</h3>
                  <p>
                    The basketball side follows the same evidence-first idea:
                    progression, results, context, photography, and source-backed
                    moments stay connected.
                  </p>
                </div>
                <Link href="/basketball">Turn to basketball →</Link>
              </article>
            </div>

            <div className="professional-identity-bridge__disciplines">
              {sharedDisciplines.map((discipline, index) => (
                <span key={discipline}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* [SECTION 02] Experience and Education */}
        <Section
          aria-labelledby="experience-heading"
          className="border-y border-border bg-context-surface"
          id="experience"
        >
          <Container size="wide">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  description="A compact snapshot of the academic and project context behind the work."
                  eyebrow="Experience & education"
                  id="experience-heading"
                  title="Computer science in practice and in the classroom."
                />
                <div className="mt-9">
                  {professionalHomeData.milestones.map((milestone) => (
                    <TimelineItem
                      key={milestone.title}
                      label={milestone.label}
                      title={milestone.title}
                    >
                      {milestone.description}
                    </TimelineItem>
                  ))}
                </div>
              </div>

              {/* [SECTION 03] Technical Focus */}
              <div id="skills">
                <SectionHeading
                  description="Tools and areas that recur across my current software projects."
                  eyebrow="Technical focus"
                  title="A practical stack, not a keyword wall."
                />
                <Surface className="mt-9 rounded-card">
                  <TagGroup tags={[...professionalHomeData.technicalFocus]} />
                  <p className="type-body-small mt-6 text-text-secondary">
                    I’m most interested in systems where data, automation, and
                    AI need strong validation, traceability, and explicit human
                    control.
                  </p>
                </Surface>
              </div>
            </div>
          </Container>
        </Section>

        {/* [SECTION 04] Professional CTA */}
        <Section aria-labelledby="contact-heading">
          <Container size="narrow">
            <div className="text-center">
              <p className="type-eyebrow text-context-accent">
                Explore the work
              </p>
              <h2
                className="type-h2 mt-3 text-text-primary"
                id="contact-heading"
              >
                The repositories carry the implementation details.
              </h2>
              <p className="type-body mt-4 text-text-secondary">
                Browse the code, docs, tests, and project boundaries directly on
                GitHub.
              </p>
              <div className="mt-6 flex justify-center">
                <TextLink external href="https://github.com/Linardi1328">
                  github.com/Linardi1328
                </TextLink>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </PortfolioWorldShell>
  );
}
