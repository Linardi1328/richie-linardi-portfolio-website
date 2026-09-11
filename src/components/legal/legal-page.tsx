import type { ReactNode } from "react";
import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";

export type LegalSection = {
  title: string;
  body?: ReactNode;
  items?: readonly ReactNode[];
};

type LegalPageProps = {
  title: string;
  summary: ReactNode;
  sections: readonly LegalSection[];
  effectiveDate?: string;
};

const legalLinks = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Cookies", "/cookies"],
  ["Payments & refunds", "/refunds"],
] as const;

export function LegalPage({
  title,
  summary,
  sections,
  effectiveDate = "11 September 2026",
}: LegalPageProps) {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="portfolio-legal">
        <header className="portfolio-legal__header">
          <p className="portfolio-legal__eyebrow">Site policy · Malaysia</p>
          <h1>{title}</h1>
          <p className="portfolio-legal__summary">{summary}</p>
          <p className="portfolio-legal__date">Effective: {effectiveDate}</p>
          <nav className="portfolio-legal__nav" aria-label="Site policies">
            {legalLinks.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="portfolio-legal__sections">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body ? <div>{section.body}</div> : null}
              {section.items?.length ? (
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <aside className="portfolio-legal__note" aria-label="Policy scope note">
          These policies describe the current deployed portfolio. They must be
          reviewed before adding a contact form, analytics, advertising, paid
          services, user accounts, or new third-party embeds.
        </aside>
      </main>
    </PortfolioWorldShell>
  );
}
