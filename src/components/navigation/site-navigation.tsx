import Link from "next/link";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/cn";

type NavigationItem = {
  href: string;
  label: string;
};

type SiteNavigationProps = {
  className?: string;
  items: readonly NavigationItem[];
};

const navigationLinkClass =
  "rounded-button px-3 py-2 text-sm font-semibold text-text-secondary transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:bg-surface-muted hover:text-text-primary";

export function SiteNavigation({ className, items }: SiteNavigationProps) {
  return (
    <header
      className={cn(
        "navigation-prototype rounded-panel border border-border bg-surface px-4 py-3",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Link className="grid rounded-[2px] text-text-primary" href="/">
          <span className="text-base font-bold leading-none">RL</span>
          <span className="type-caption mt-1 text-text-muted">
            Richie Linardi
          </span>
        </Link>

        <nav
          aria-label="Professional portfolio navigation"
          className="hidden md:block"
        >
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link className={navigationLinkClass} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="https://github.com/Linardi1328"
            size="sm"
            target="_blank"
            variant="secondary"
          >
            GitHub
          </ButtonLink>
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-button border border-border px-3 py-2 text-sm font-semibold text-text-primary transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:border-context-accent">
            Menu
          </summary>
          <nav
            aria-label="Mobile professional portfolio navigation"
            className="absolute right-0 top-12 z-20 w-56 rounded-panel border border-border bg-surface p-2 shadow-soft"
          >
            <ul className="grid gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    className={cn(navigationLinkClass, "block")}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <ButtonLink
                  className="w-full"
                  href="https://github.com/Linardi1328"
                  size="sm"
                  target="_blank"
                  variant="secondary"
                >
                  GitHub
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
