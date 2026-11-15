import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function NotFound() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main className="foundation-route">
        <section className="foundation-route__hero">
          <div className="foundation-route__hero-inner">
            <p className="foundation-route__eyebrow">404 · Route not found</p>
            <h1>This page took a different path.</h1>
            <p className="foundation-route__lede">
              The address may have changed. Head back home to explore my
              projects, background, and basketball journey.
            </p>
            <Link className="foundation-route__primary-link" href="/">
              Return to professional home <span aria-hidden="true">←</span>
            </Link>
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
