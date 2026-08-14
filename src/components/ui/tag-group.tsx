import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "./badge";

type TagGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  label?: string;
  tags: string[];
};

export function TagGroup({ className, label, tags, ...props }: TagGroupProps) {
  return (
    <div className={cn("grid gap-3", className)} {...props}>
      {label && <p className="type-eyebrow text-text-muted">{label}</p>}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
