import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  title,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow && <p className="type-eyebrow text-text-muted">{eyebrow}</p>}
      <h2 className="type-h2 mt-3 text-text-primary">{title}</h2>
      {description && (
        <p className="type-body mt-4 text-text-secondary">{description}</p>
      )}
    </div>
  );
}
