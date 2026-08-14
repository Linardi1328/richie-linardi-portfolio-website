import Link from "next/link";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/design-system", label: "Overview", current: true },
  { href: "#principles", label: "Principles" },
  { href: "#typography", label: "Typography" },
  { href: "#components", label: "Components" },
  { href: "#contexts", label: "Contexts" },
];

const desktopNavLinkClass =
  "rounded-button px-3 py-2 text-sm font-semibold text-text-secondary transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:bg-surface-muted hover:text-text-primary";
const mobileNavLinkClass =
  "block rounded-button px-3 py-2 text-sm font-semibold text-text-secondary hover:bg-surface-muted hover:text-text-primary";
const currentNavLinkClass = "bg-context-accent-soft text-text-primary";

type NavigationPrototypeProps = {
  className?: string;
};

export function NavigationPrototype({ className }: NavigationPrototypeProps) {
  return (
    <header
      className={cn(
        "navigation-prototype rounded-panel border border-border bg-surface px-4 py-3",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Link
          className="grid rounded-[2px] text-text-primary"
          href="/design-system"
        >
          <span className="text-base font-bold leading-none">RBL</span>
          <span className="type-caption mt-1 text-text-muted">
            Richie Linardi
          </span>
        </Link>

        <nav
          aria-label="Desktop design system navigation"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={item.current ? "page" : undefined}
                  className={cn(
                    desktopNavLinkClass,
                    item.current && currentNavLinkClass,
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-button border border-border px-3 py-2 text-sm font-semibold text-text-primary transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:border-context-accent">
            Menu
          </summary>
          <nav
            aria-label="Mobile design system navigation"
            className="absolute right-0 top-12 z-10 w-52 rounded-panel border border-border bg-surface p-2 shadow-soft"
          >
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    aria-current={item.current ? "page" : undefined}
                    className={cn(
                      mobileNavLinkClass,
                      item.current && currentNavLinkClass,
                    )}
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
    </header>
  );
}
