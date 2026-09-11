import type { ReactNode } from "react";
import Link from "next/link";
import { PortfolioEffects } from "@/components/effects/portfolio-effects";
import { SignatureFlipbook } from "@/components/interaction/signature-flipbook";
import { WorldNavigation } from "@/components/navigation/world-navigation";
import { ProofModeProvider } from "@/components/dual-trace/proof-mode-context";
import { PortfolioSpine } from "@/components/dual-trace/portfolio-spine";
import type {
  PortfolioWorld,
  WorldNavigationItem,
} from "@/data/world-navigation";
import { cn } from "@/lib/cn";

type PortfolioWorldShellProps = {
  children: ReactNode;
  className?: string;
  dualTraceHome?: boolean;
  navigation: readonly WorldNavigationItem[];
  world: PortfolioWorld;
};

export function PortfolioWorldShell({
  children,
  className,
  dualTraceHome = false,
  navigation,
  world,
}: PortfolioWorldShellProps) {
  return (
    <ProofModeProvider enabled={dualTraceHome}>
      <div
        className={cn(
          "portfolio-stage",
          `portfolio-stage--${world}`,
          dualTraceHome && "portfolio-stage--dual-trace",
          className,
        )}
        data-context={world}
        data-world={world}
      >
        <a className="portfolio-skip-link" href="#portfolio-main">
          Skip to main content
        </a>
        <PortfolioEffects />
        <div aria-hidden="true" className="portfolio-atmosphere" />
        <div
          className={cn(
            "portfolio-book",
            dualTraceHome && "portfolio-book--dual-trace",
          )}
        >
          {dualTraceHome && <PortfolioSpine world={world} />}

          <SignatureFlipbook world={world}>
            <div className="portfolio-page">
              <div className="portfolio-page__chrome">
                <WorldNavigation
                  dualTraceHome={dualTraceHome}
                  items={navigation}
                  world={world}
                />
              </div>

              <div
                className="portfolio-page__content"
                id="portfolio-main"
                tabIndex={-1}
              >
                {children}
              </div>

              <footer className="portfolio-page__footer">
                <p>One journey. Two sides. The same discipline.</p>
                <nav
                  className="portfolio-page__legal-links"
                  aria-label="Site policies"
                >
                  <Link href="/privacy">Privacy</Link>
                  <Link href="/terms">Terms</Link>
                  <Link href="/cookies">Cookies</Link>
                  <Link href="/refunds">Payments & refunds</Link>
                </nav>
                <span aria-hidden="true">RBL · 2026</span>
              </footer>
            </div>
          </SignatureFlipbook>
        </div>
      </div>
    </ProofModeProvider>
  );
}
