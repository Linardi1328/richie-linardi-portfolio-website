import { ButtonLink } from "@/components/ui";

type ProfessionalHeroProps = {
  description: string;
  eyebrow: string;
  tags: readonly string[];
  title: string;
};

const proofPrinciples = [
  {
    description: "Show the current implementation state, not the imagined end state.",
    index: "01",
    title: "Evidence before theatre",
  },
  {
    description: "Keep consequential actions behind explicit deterministic controls.",
    index: "02",
    title: "Human control stays visible",
  },
  {
    description: "Treat testing, review, and limitations as part of the product story.",
    index: "03",
    title: "Proof is part of the interface",
  },
] as const;

export function ProfessionalHero({
  description,
  eyebrow,
  tags,
  title,
}: ProfessionalHeroProps) {
  return (
    <section className="professional-shell-hero">
      {/* [HERO FRONT] Professional Face */}
      <div className="professional-shell-hero__grid">
        <div>
          <p className="professional-shell-hero__kicker">{eyebrow}</p>
          <h1 className="professional-shell-hero__title">{title}</h1>
          <p className="professional-shell-hero__description">{description}</p>
          <div className="professional-shell-hero__actions">
            <ButtonLink href="#projects" size="lg">
              Explore the systems
            </ButtonLink>
            <ButtonLink
              href="https://github.com/Linardi1328"
              rel="noreferrer"
              size="lg"
              target="_blank"
              variant="secondary"
            >
              Inspect the repositories
            </ButtonLink>
          </div>
        </div>

        <aside aria-label="Technical focus" className="professional-shell-hero__rail">
          {proofPrinciples.map((principle) => (
            <div className="professional-shell-hero__rail-item" key={principle.index}>
              <span className="professional-shell-hero__rail-index">
                {principle.index}
              </span>
              <span className="professional-shell-hero__rail-copy">
                <strong>{principle.title}</strong>
                <span>{principle.description}</span>
              </span>
            </div>
          ))}
        </aside>

        <div className="sr-only">
          Current technical focus: {tags.join(", ")}.
        </div>
      </div>
    </section>
  );
}
