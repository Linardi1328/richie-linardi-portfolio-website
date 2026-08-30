import { ProfessionalHero } from "@/components/hero/professional-hero";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
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
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function Home() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="theme-professional">
        <ProfessionalHero {...professionalHomeData.hero} />

        {/* [SECTION 01] Selected Technical Projects */}
        <Section aria-labelledby="projects-heading" id="projects">
          <Container size="wide">
            <SectionHeading
              description="A small set of technical projects with scope and status stated as they exist today."
              eyebrow="Selected technical projects"
              id="projects-heading"
              title="Work built around evidence, controls, and maintainable boundaries."
            />
            <ResponsiveGrid className="mt-10" columns="two">
              {professionalHomeData.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </ResponsiveGrid>
          </Container>
        </Section>

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
