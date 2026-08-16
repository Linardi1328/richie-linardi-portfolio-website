import { ButtonLink, Container, Surface, TagGroup } from "@/components/ui";

type ProfessionalHeroProps = {
  description: string;
  eyebrow: string;
  tags: readonly string[];
  title: string;
};

export function ProfessionalHero({
  description,
  eyebrow,
  tags,
  title,
}: ProfessionalHeroProps) {
  return (
    <section className="pb-section pt-14 md:pt-20">
      <Container size="wide">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:gap-16">
          <div className="max-w-4xl">
            <p className="type-eyebrow text-context-accent">{eyebrow}</p>
            <h1 className="type-display mt-5 text-text-primary">{title}</h1>
            <p className="type-body-large mt-6 max-w-3xl text-text-secondary">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects" size="lg">
                View selected work
              </ButtonLink>
              <ButtonLink
                href="https://github.com/Linardi1328"
                rel="noreferrer"
                size="lg"
                target="_blank"
                variant="secondary"
              >
                GitHub profile
              </ButtonLink>
            </div>
          </div>

          <Surface className="rounded-card bg-context-surface">
            <p className="type-eyebrow text-text-muted">Current technical focus</p>
            <p className="type-h3 mt-3 text-text-primary">
              Reliable software, data systems, and AI-assisted workflows.
            </p>
            <p className="type-body-small mt-4 text-text-secondary">
              Projects are presented with their actual implementation state and safety
              boundaries intact.
            </p>
            <TagGroup className="mt-6" tags={[...tags]} />
          </Surface>
        </div>
      </Container>
    </section>
  );
}
