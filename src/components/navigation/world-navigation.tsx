import Link from "next/link";
import type {
  PortfolioWorld,
  WorldNavigationItem,
} from "@/data/world-navigation";
import { cn } from "@/lib/cn";
import { WorldSwitcher } from "./world-switcher";

type WorldNavigationProps = {
  className?: string;
  items: readonly WorldNavigationItem[];
  world: PortfolioWorld;
};

const worldLabels: Record<PortfolioWorld, string> = {
  professional: "Software · Data · AI",
  basketball: "Athlete archive",
};

export function WorldNavigation({
  className,
  items,
  world,
}: WorldNavigationProps) {
  return (
    <header className={cn("world-navigation", className)}>
      <div className="world-navigation__bar">
        <Link
          aria-label="Richie Linardi portfolio home"
          className="world-navigation__brand"
          href={world === "professional" ? "/" : "/basketball"}
        >
          <span aria-hidden="true" className="world-navigation__monogram">
            RBL
          </span>
          <span className="world-navigation__identity">
            <span className="world-navigation__name">Richie Linardi</span>
            <span className="world-navigation__world">{worldLabels[world]}</span>
          </span>
        </Link>

        <nav
          aria-label={`${worldLabels[world]} navigation`}
          className="world-navigation__desktop"
        >
          <ul className="world-navigation__links">
            {items.map((item) => (
              <li key={item.href}>
                <Link className="world-navigation__link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="world-navigation__actions">
          <WorldSwitcher world={world} />

          <details className="world-navigation__menu">
            <summary className="world-navigation__menu-trigger">Menu</summary>
            <nav
              aria-label={`${worldLabels[world]} compact navigation`}
              className="world-navigation__menu-panel"
            >
              <ul>
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="world-navigation__menu-link"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
