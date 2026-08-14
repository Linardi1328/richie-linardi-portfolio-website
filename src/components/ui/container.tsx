import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const containerSizes = {
  wide: "container-wide",
  default: "container-default",
  narrow: "container-narrow",
};

const gridColumns = {
  two: "grid-cols-1 md:grid-cols-2",
  three: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  four: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof containerSizes;
};

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return <div className={cn(containerSizes[size], className)} {...props} />;
}

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("section-block", className)} {...props} />;
}

type ResponsiveGridProps = HTMLAttributes<HTMLDivElement> & {
  columns?: keyof typeof gridColumns;
};

export function ResponsiveGrid({
  className,
  columns = "three",
  ...props
}: ResponsiveGridProps) {
  return (
    <div
      className={cn("grid gap-grid", gridColumns[columns], className)}
      {...props}
    />
  );
}
