import type { ReactNode } from "react";
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
  navigation: readonly WorldNavigationItem[];
  world: PortfolioWorld;
};

export function PortfolioWorldShell({
  children,
  className,
  navigation,
  world,
}: PortfolioWorldShellProps) {
  return (
    <ProofModeProvider>
      <div
        className={cn(
          "portfolio-stage",
          `portfolio-stage--${world}`,
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
        <div className="portfolio-book">
          <PortfolioSpine world={world} />

          <SignatureFlipbook world={world}>
            <div className="portfolio-page">
              <div className="portfolio-page__chrome">
                <WorldNavigation items={navigation} world={world} />
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
                <span aria-hidden="true">RBL · 2026</span>
              </footer>
            </div>
          </SignatureFlipbook>
        </div>
      </div>
    </ProofModeProvider>
  );
}
