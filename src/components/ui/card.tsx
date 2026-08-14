import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Surface } from "./surface";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  description?: string;
  eyebrow?: string;
  footer?: ReactNode;
  interactive?: boolean;
  title?: string;
};

export function Card({
  children,
  className,
  description,
  eyebrow,
  footer,
  interactive,
  title,
  ...props
}: CardProps) {
  return (
    <Surface
      className={cn(
        "flex h-full flex-col gap-5 rounded-card",
        interactive &&
          "transition-[border-color,transform] duration-[var(--motion-standard)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-context-accent focus-within:-translate-y-0.5 focus-within:border-context-accent",
        className,
      )}
      {...props}
    >
      {(eyebrow || title || description) && (
        <div className="grid gap-2">
          {eyebrow && <p className="type-eyebrow text-text-muted">{eyebrow}</p>}
          {title && <h3 className="type-h3 text-text-primary">{title}</h3>}
          {description && (
            <p className="type-body-small text-text-secondary">{description}</p>
          )}
        </div>
      )}
      {children}
      {footer && <div className="mt-auto pt-2">{footer}</div>}
    </Surface>
  );
}
