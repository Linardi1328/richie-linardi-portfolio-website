import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const badgeVariants = {
  neutral: "border-border bg-surface-muted text-text-secondary",
  accent: "border-accent bg-accent-soft text-text-primary",
  success: "border-success bg-success-soft text-success",
  warning: "border-warning bg-warning-soft text-warning",
  danger: "border-danger bg-danger-soft text-danger",
  information: "border-information bg-information-soft text-information",
};

type BadgeVariant = keyof typeof badgeVariants;

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-badge border px-2.5 py-1 text-xs font-semibold",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
