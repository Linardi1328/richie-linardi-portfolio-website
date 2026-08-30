import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import {
  basketballWorldNavigation,
  professionalWorldNavigation,
  type PortfolioWorld,
} from "@/data/world-navigation";

export type FoundationSection = {
  eyebrow: string;
  title: string;
  description: string;
  items?: readonly string[];
};

type FoundationRoutePageProps = {
  world: PortfolioWorld;
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly FoundationSection[];
  primaryHref?: string;
  primaryLabel?: string;
};

export function FoundationRoutePage({
  world,
  eyebrow,
  title,
  description,
  sections,
  primaryHref,
  primaryLabel,
}: FoundationRoutePageProps) {
  const navigation =
    world === "professional"
      ? professionalWorldNavigation
      : basketballWorldNavigation;

  return (
    <PortfolioWorldShell navigation={navigation} world={world}>
      <main className="foundation-route">
        <section className="foundation-route__hero">
          <div className="foundation-route__hero-inner">
            <p className="foundation-route__eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="foundation-route__lede">{description}</p>
            {primaryHref && primaryLabel ? (
              <Link className="foundation-route__primary-link" href={primaryHref}>
                {primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>
        </section>

        <section className="foundation-route__sections" aria-label={`${title} foundation`}>
          {sections.map((section, index) => (
            <article className="foundation-route__section" key={section.title}>
              <div className="foundation-route__section-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="foundation-route__eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <aside className="foundation-route__status" aria-label="Preview status">
          <span>Preview foundation</span>
          <p>
            Structure, hierarchy, routing, and responsive composition are ready for review. Deep content and final interaction polish intentionally follow owner feedback.
          </p>
        </aside>
      </main>
    </PortfolioWorldShell>
  );
}
