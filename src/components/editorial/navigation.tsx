"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type {
  PortfolioWorld,
  WorldNavigationItem,
} from "@/data/world-navigation";

export function EditorialNavigation({
  world,
  items,
}: {
  world: PortfolioWorld;
  items: readonly WorldNavigationItem[];
}) {
  const pathname = usePathname();
  const links = items.map((item) => (
    <Link
      onClick={(event) =>
        event.currentTarget.closest("details")?.removeAttribute("open")
      }
      aria-current={pathname === item.href ? "page" : undefined}
      href={item.href}
      key={item.href}
    >
      {item.label}
    </Link>
  ));
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="wordmark"
          href={world === "professional" ? "/" : "/basketball"}
          aria-label="Richie Linardi home"
        >
          <span className="wordmark__symbol" aria-hidden="true">
            r.
          </span>
          Richie Linardi<span className="wordmark__dot">.</span>
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {links}
        </nav>
        <div className="world-selector" aria-label="Portfolio sides">
          <Link
            href="/"
            aria-current={world === "professional" ? "true" : undefined}
          >
            Professional
          </Link>
          <Link
            href="/basketball"
            aria-current={world === "basketball" ? "true" : undefined}
          >
            Athlete
          </Link>
        </div>
        <details className="mobile-navigation">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">{links}</nav>
        </details>
      </div>
    </header>
  );
}
