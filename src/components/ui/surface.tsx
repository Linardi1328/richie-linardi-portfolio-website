import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const surfaceVariants = {
  default: "border-border bg-surface text-text-primary",
  elevated: "border-border bg-surface-elevated text-text-primary shadow-soft",
  muted: "border-border bg-surface-muted text-text-primary",
  contextual: "border-context-accent bg-context-surface text-text-primary",
  inverted: "border-border-strong bg-primary-dark text-primary-light",
};

const surfacePadding = {
  none: "",
  sm: "p-4",
  md: "p-component",
  lg: "p-6 md:p-8",
};

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  padding?: keyof typeof surfacePadding;
  variant?: keyof typeof surfaceVariants;
};

export function Surface({
  className,
  padding = "md",
  variant = "default",
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-panel border",
        surfaceVariants[variant],
        surfacePadding[padding],
        className,
      )}
      {...props}
    />
  );
}
