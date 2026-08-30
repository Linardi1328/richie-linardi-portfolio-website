import type { ReactNode } from "react";
import { WorldNavigation } from "@/components/navigation/world-navigation";
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
    <div
      className={cn("portfolio-stage", `portfolio-stage--${world}`, className)}
      data-context={world}
      data-world={world}
    >
      <div aria-hidden="true" className="portfolio-atmosphere" />
      <div className="portfolio-book">
        {/* [FLIP CONTROL] Page Edge / Corner */}
        <div aria-hidden="true" className="portfolio-book__spine" />

        <div className="portfolio-page">
          <div className="portfolio-page__chrome">
            <WorldNavigation items={navigation} world={world} />
          </div>

          <div className="portfolio-page__content">{children}</div>

          <footer className="portfolio-page__footer">
            <p>One journey. Two sides. The same discipline.</p>
            <span aria-hidden="true">RBL · 2026</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
