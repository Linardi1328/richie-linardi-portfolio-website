import Image from "next/image";
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

export type FoundationPortrait = {
  src: string;
  alt: string;
  label: string;
  note?: string;
};

type FoundationRoutePageProps = {
  world: PortfolioWorld;
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly FoundationSection[];
  primaryHref?: string;
  primaryLabel?: string;
  portrait?: FoundationPortrait;
};

export function FoundationRoutePage({
  world,
  eyebrow,
  title,
  description,
  sections,
  primaryHref,
  primaryLabel,
  portrait,
}: FoundationRoutePageProps) {
  const navigation =
    world === "professional"
      ? professionalWorldNavigation
      : basketballWorldNavigation;

  return (
    <PortfolioWorldShell navigation={navigation} world={world}>
      <main className="foundation-route">
        <section className="foundation-route__hero">
          <div
            className={`foundation-route__hero-inner${portrait ? " foundation-route__hero-inner--with-portrait" : ""}`}
          >
            <div data-reveal>
              <p className="foundation-route__eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="foundation-route__lede">{description}</p>
              {primaryHref && primaryLabel ? (
                <Link
                  className="foundation-route__primary-link"
                  href={primaryHref}
                >
                  {primaryLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </div>

            {portrait ? (
              <figure
                className="foundation-route__portrait"
                data-reveal
                data-reveal-delay="1"
              >
                <div className="foundation-route__portrait-frame">
                  <Image
                    alt={portrait.alt}
                    fill
                    priority
                    sizes="(min-width: 900px) 30vw, 90vw"
                    src={portrait.src}
                  />
                </div>
                <figcaption>
                  <span>{portrait.label}</span>
                  {portrait.note ? <p>{portrait.note}</p> : null}
                </figcaption>
              </figure>
            ) : null}
          </div>
        </section>

        <section
          className="foundation-route__sections"
          aria-label={`${title} content`}
        >
          {sections.map((section, index) => (
            <article
              className="foundation-route__section"
              data-reveal
              data-reveal-delay={String((index % 3) + 1)}
              key={section.title}
            >
              <div
                className="foundation-route__section-index"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="foundation-route__section-content">
                <div className="foundation-route__section-header">
                  <p className="foundation-route__eyebrow">{section.eyebrow}</p>
                  <h2>{section.title}</h2>
                </div>
                <div className="foundation-route__section-body">
                  <p>{section.description}</p>
                  {section.items ? (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>

        <aside
          className="foundation-route__status"
          aria-label="Source and verification note"
          data-reveal
        >
          <span>Source-aware portfolio</span>
          <p>
            Public claims stay tied to verified records, repositories, or
            first-party information. New media and deeper proof are added only
            when the source is ready to support them.
          </p>
        </aside>
      </main>
    </PortfolioWorldShell>
  );
}
