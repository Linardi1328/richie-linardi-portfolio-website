import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type MetricProps = HTMLAttributes<HTMLDivElement> & {
  description?: string;
  label: string;
  value: string;
};

export function Metric({
  className,
  description,
  label,
  value,
  ...props
}: MetricProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface p-5",
        className,
      )}
      {...props}
    >
      <p className="type-eyebrow text-text-muted">{label}</p>
      <p className="mt-3 text-3xl font-bold leading-none text-text-primary md:text-4xl">
        {value}
      </p>
      {description && (
        <p className="type-body-small mt-3 text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
