import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className" | "href"
> & {
  children: ReactNode;
  className?: string;
  external?: boolean;
  href: string;
};

export function TextLink({
  children,
  className,
  external,
  href,
  ...props
}: TextLinkProps) {
  const classes = cn(
    "inline-flex w-fit items-center rounded-[2px] font-semibold text-text-primary underline decoration-border-strong underline-offset-4 transition-[color,text-decoration-color] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-context-accent hover:decoration-context-accent",
    className,
  );

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        rel="noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
