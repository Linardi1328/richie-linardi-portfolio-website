import { Badge, Card, TextLink } from "@/components/ui";

type ProjectCardPrototypeProps = {
  context?: "professional" | "basketball";
};

export function ProjectCardPrototype({
  context = "professional",
}: ProjectCardPrototypeProps) {
  const copy =
    context === "professional"
      ? {
          eyebrow: "Project Card Prototype",
          title: "Analytical System Demo",
          description:
            "A reusable card structure for later verified technical case studies.",
          meta: ["Role", "Status", "Stack"],
          link: "Future project detail",
        }
      : {
          eyebrow: "Impact Card Prototype",
          title: "Community Program Demo",
          description:
            "The same component rhythm can support future verified basketball stories.",
          meta: ["Focus", "Audience", "Outcome"],
          link: "Future impact detail",
        };

  return (
    <Card
      description={copy.description}
      eyebrow={copy.eyebrow}
      footer={<TextLink href="/design-system">{copy.link}</TextLink>}
      interactive
      title={copy.title}
    >
      <div
        aria-hidden="true"
        className="min-h-36 rounded-card border border-border bg-surface-muted"
      >
        <div className="flex h-full min-h-36 items-end p-4">
          <div className="h-2 w-2/3 rounded-full bg-context-accent" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {copy.meta.map((item) => (
          <Badge key={item} variant="neutral">
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
