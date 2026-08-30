import Link from "next/link";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";

export default function NotFound() {
  return (
    <PortfolioWorldShell navigation={professionalWorldNavigation} world="professional">
      <main className="foundation-route">
        <section className="foundation-route__hero">
          <div className="foundation-route__hero-inner">
            <p className="foundation-route__eyebrow">404 · Route not found</p>
            <h1>This page is not part of the archive yet.</h1>
            <p className="foundation-route__lede">
              The preview is intentionally bounded to routes that are already part of the portfolio foundation.
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
