import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TimelineItemProps = {
  children: ReactNode;
  className?: string;
  label: string;
  title: string;
};

export function TimelineItem({
  children,
  className,
  label,
  title,
}: TimelineItemProps) {
  return (
    <article className={cn("grid grid-cols-[auto_1fr] gap-4", className)}>
      <div className="flex flex-col items-center">
        <span className="mt-1 size-3 rounded-full bg-context-accent" />
        <span className="mt-2 h-full min-h-14 w-px bg-border" />
      </div>
      <div className="pb-6">
        <p className="type-eyebrow text-text-muted">{label}</p>
        <h3 className="type-h4 mt-2 text-text-primary">{title}</h3>
        <p className="type-body-small mt-2 text-text-secondary">{children}</p>
      </div>
    </article>
  );
}
