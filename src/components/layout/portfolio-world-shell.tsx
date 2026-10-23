import type { ReactNode } from "react";
import Link from "next/link";
import { EditorialNavigation } from "@/components/editorial/navigation";
import type {
  PortfolioWorld,
  WorldNavigationItem,
} from "@/data/world-navigation";

type PortfolioWorldShellProps = {
  children: ReactNode;
  className?: string;
  dualTraceHome?: boolean;
  navigation: readonly WorldNavigationItem[];
  world: PortfolioWorld;
};

export function PortfolioWorldShell({
  children,
  className = "",
  navigation,
  world,
}: PortfolioWorldShellProps) {
  return (
    <div
      className={`editorial-site editorial-site--${world} ${className}`}
      data-world={world}
    >
      <a className="skip-link" href="#portfolio-main">
        Skip to main content
      </a>
      <EditorialNavigation items={navigation} world={world} />
      <div id="portfolio-main" tabIndex={-1}>
        {children}
      </div>
      <footer className="site-footer container">
        <div className="footer-invitation">
          <div>
            <p className="eyebrow">The next conversation</p>
            <h2>
              Good things start
              <br />
              with a connection.
            </h2>
          </div>
          <Link className="button button--primary" href="/contact">
            Let’s connect ↗
          </Link>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Richie Linardi. Two sides, one story.
          </p>
          <nav aria-label="Site policies">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/refunds">Payments & refunds</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
