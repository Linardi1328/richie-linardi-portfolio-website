import { Badge, Card } from "@/components/ui";

export function BasketballHighlightPrototype() {
  return (
    <Card
      className="theme-basketball"
      description="A warm-context prototype reserved for later verified athlete and community content."
      eyebrow="Basketball Highlight Prototype"
      title="Court-to-Community Story"
    >
      <div
        aria-hidden="true"
        className="grid min-h-36 place-items-center rounded-card border border-context-accent bg-context-accent-soft"
      >
        <div className="grid h-20 w-20 place-items-center rounded-full border border-context-accent bg-surface font-bold text-context-accent">
          RBL
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="accent">Leadership</Badge>
        <Badge variant="neutral">Development</Badge>
        <Badge variant="neutral">Community</Badge>
      </div>
    </Card>
  );
}
