import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BasketballHighlightPrototype } from "@/components/basketball/basketball-highlight-prototype";
import { NavigationPrototype } from "@/components/navigation/navigation-prototype";
import { ProjectCardPrototype } from "@/components/projects/project-card-prototype";
import { TimelineItem } from "@/components/timeline/timeline-item";
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Metric,
  ResponsiveGrid,
  Section,
  SectionHeading,
  Surface,
  TagGroup,
  TextLink,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Design System | Richie Linardi",
  description:
    "Phase v0.2 reusable visual system for Richie Linardi's two-sided portfolio.",
};

const principles = [
  "Premium without decoration overload",
  "Editorial hierarchy before visual effects",
  "Shared components across professional and basketball contexts",
  "Gold as emphasis, not wallpaper",
  "Accessible focus, contrast, and motion defaults",
];

const colors = [
  ["Primary dark", "--primary-dark", "Deep navy / near black"],
  ["Primary light", "--primary-light", "Warm off-white"],
  ["Deep blue", "--deep-blue", "Professional context accent"],
  ["Royal blue", "--royal-blue", "Interactive blue emphasis"],
  ["Accent", "--accent", "Muted gold"],
  ["Surface", "--surface", "Main component surface"],
  ["Surface muted", "--surface-muted", "Quiet supporting surface"],
  ["Border", "--border", "Default subtle border"],
  ["Success", "--success", "Positive state"],
  ["Warning", "--warning", "Attention state"],
  ["Danger", "--danger", "Risk state"],
  ["Information", "--information", "Informational state"],
];

const typography = [
  ["Display / Hero", "type-display", "One journey. Two sides."],
  ["H1", "type-h1", "Reusable visual system"],
  ["H2", "type-h2", "Section heading"],
  ["H3", "type-h3", "Component group heading"],
  ["H4", "type-h4", "Compact title"],
  [
    "Body Large",
    "type-body-large",
    "Used for lead copy that needs editorial confidence without becoming a hero.",
  ],
  [
    "Body",
    "type-body",
    "The default reading style for clear portfolio narrative and case-study explanation.",
  ],
  [
    "Body Small",
    "type-body-small",
    "Supporting details and compact summaries.",
  ],
  ["Caption", "type-caption", "Small metadata with readable contrast."],
  ["Eyebrow / Label", "type-eyebrow", "Context label"],
  ["Monospace", "type-mono", "status: design-system-ready"],
];

const spacing = [
  ["Wide container", "--container-wide", "Broad editorial sections"],
  ["Default container", "--container-default", "Primary page content"],
  ["Narrow container", "--container-narrow", "Reading-focused content"],
  ["Gutter", "--gutter", "Responsive page edge spacing"],
  ["Section spacing", "--section-spacing", "Vertical rhythm between sections"],
  ["Grid gap", "--grid-gap", "Reusable card and layout gaps"],
];

const capabilityTags = [
  "Analysis",
  "Systems Thinking",
  "Leadership",
  "Data Storytelling",
  "Execution",
  "Review Discipline",
];

function TokenCode({ children }: { children: ReactNode }) {
  return (
    <code className="type-mono max-w-full overflow-x-auto rounded-badge bg-surface-muted px-2 py-1 text-text-secondary">
      {children}
    </code>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="page-shell">
      <Section className="pb-10">
        <Container size="wide">
          <NavigationPrototype />
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="type-eyebrow text-text-muted">Phase v0.2</p>
              <h1 className="type-display mt-4 max-w-4xl text-text-primary">
                Design system for one journey with two sides.
              </h1>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="type-body-large text-text-secondary">
                A restrained visual foundation for professional work, basketball
                impact, and the shared discipline connecting both.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge variant="accent">Shared primitives</Badge>
                <Badge variant="information">Context-ready tokens</Badge>
                <Badge variant="neutral">No production content yet</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="principles">
        <Container size="wide">
          <SectionHeading
            description="These rules keep later phases cohesive while leaving room for professional precision and basketball warmth."
            eyebrow="01"
            title="Design Principles"
          />
          <ResponsiveGrid className="mt-8" columns="three">
            {principles.map((principle) => (
              <Surface key={principle} className="min-h-32">
                <p className="type-h4 text-text-primary">{principle}</p>
              </Surface>
            ))}
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            description="Tokens are semantic first. Components should use roles such as surface, border, accent, and text-secondary instead of scattered color values."
            eyebrow="02"
            title="Color Palette"
          />
          <ResponsiveGrid className="mt-8" columns="four">
            {colors.map(([name, token, description]) => (
              <div
                className="overflow-hidden rounded-card border border-border bg-surface"
                key={token}
              >
                <div
                  aria-hidden="true"
                  className="h-24 border-b border-border"
                  style={{ backgroundColor: `var(${token})` }}
                />
                <div className="grid gap-2 p-4">
                  <h3 className="type-h4 text-text-primary">{name}</h3>
                  <p className="type-body-small text-text-secondary">
                    {description}
                  </p>
                  <TokenCode>{token}</TokenCode>
                </div>
              </div>
            ))}
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section id="typography">
        <Container size="wide">
          <SectionHeading
            description="The scale is editorial, readable, and breakpoint-based so mobile type stays controlled."
            eyebrow="03"
            title="Typography"
          />
          <div className="mt-8 grid gap-5">
            {typography.map(([label, className, sample]) => (
              <div
                className="grid gap-4 border-t border-border pt-5 md:grid-cols-[220px_1fr]"
                key={label}
              >
                <div>
                  <p className="type-eyebrow text-text-muted">{label}</p>
                  <TokenCode>.{className}</TokenCode>
                </div>
                <p className={`${className} text-text-primary`}>{sample}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            description="Layout conventions give future pages consistent gutters, content widths, and vertical rhythm."
            eyebrow="04"
            title="Spacing / Layout"
          />
          <ResponsiveGrid className="mt-8" columns="three">
            {spacing.map(([name, token, description]) => (
              <Surface key={token}>
                <p className="type-h4 text-text-primary">{name}</p>
                <p className="type-body-small mt-2 text-text-secondary">
                  {description}
                </p>
                <div className="mt-5 h-3 rounded-full bg-surface-muted">
                  <div
                    className="h-3 max-w-full rounded-full bg-context-accent"
                    style={{ width: `min(100%, var(${token}))` }}
                  />
                </div>
                <div className="mt-4">
                  <TokenCode>{token}</TokenCode>
                </div>
              </Surface>
            ))}
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section id="components">
        <Container size="wide">
          <SectionHeading
            description="A compact primitive set for later pages. Variants are intentionally limited."
            eyebrow="05"
            title="Buttons"
          />
          <div className="mt-8 grid gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small Primary</Button>
              <Button>Default Primary</Button>
              <Button size="lg">Large Primary</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <ResponsiveGrid columns="two">
            <div>
              <SectionHeading eyebrow="06" title="Links" />
              <div className="mt-6 grid gap-3">
                <TextLink href="/design-system">Internal text link</TextLink>
                <TextLink external href="https://github.com/Linardi1328">
                  External text link
                </TextLink>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="07" title="Badges / Tags" />
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>Neutral</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="information">Information</Badge>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            description="Subtle borders carry most of the structure. Shadows are available but optional."
            eyebrow="08"
            title="Surfaces / Borders"
          />
          <ResponsiveGrid className="mt-8" columns="four">
            <Surface variant="default">Default surface</Surface>
            <Surface variant="elevated">Elevated surface</Surface>
            <Surface variant="muted">Muted surface</Surface>
            <Surface variant="inverted">Inverted surface</Surface>
          </ResponsiveGrid>
          <Divider className="mt-10" />
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            description="Cards share the same radius, border behavior, spacing, and interaction timing across all future content types."
            eyebrow="09"
            title="Cards"
          />
          <ResponsiveGrid className="mt-8" columns="three">
            <Card
              description="A quiet card for repeated content where text is the primary signal."
              eyebrow="Card Primitive"
              title="Default Card"
            >
              <p className="type-body-small text-text-secondary">
                The card stays readable without relying on heavy shadow.
              </p>
            </Card>
            <Card
              description="The hover state refines border and position without becoming distracting."
              eyebrow="Interactive"
              interactive
              title="Interactive Card"
            >
              <Badge variant="accent">Hover enabled</Badge>
            </Card>
            <Card
              description="Metadata can sit in the footer without changing the core spacing."
              eyebrow="Footer"
              footer={<TextLink href="/design-system">Review pattern</TextLink>}
              title="Content Card"
            />
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            description="These are demo-only portfolio patterns. They do not claim real project results or basketball accomplishments."
            eyebrow="10"
            title="Project-card Prototype"
          />
          <ResponsiveGrid className="mt-8" columns="two">
            <div className="theme-professional">
              <ProjectCardPrototype />
            </div>
            <div className="theme-basketball">
              <ProjectCardPrototype context="basketball" />
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading eyebrow="11" title="Metrics" />
          <ResponsiveGrid className="mt-8" columns="three">
            <Metric
              description="Use placeholder values during design review."
              label="Demo Metric"
              value="XX"
            />
            <Metric
              description="Designed for verified numbers in later phases."
              label="Sample Count"
              value="000"
            />
            <Metric
              description="A short qualitative signal can also fit here."
              label="Status"
              value="Ready"
            />
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading eyebrow="12" title="Timeline" />
          <div className="theme-professional mt-8 max-w-3xl">
            <TimelineItem label="Step 01" title="Foundation">
              The system starts with shared tokens, spacing, typography, and
              accessible interaction rules.
            </TimelineItem>
            <TimelineItem label="Step 02" title="Reusable Patterns">
              Later phases can add verified story content without changing the
              base component behavior.
            </TimelineItem>
            <TimelineItem label="Step 03" title="Two Contexts">
              Professional and basketball pages can adjust emphasis while
              remaining part of one identity.
            </TimelineItem>
          </div>
        </Container>
      </Section>

      <Section id="contexts">
        <Container size="wide">
          <SectionHeading
            description="The context mechanism changes emphasis variables only. It does not create separate design systems."
            eyebrow="13-14"
            title="Professional and Basketball Contexts"
          />
          <ResponsiveGrid className="mt-8" columns="two">
            <Surface className="theme-professional" variant="contextual">
              <p className="type-eyebrow text-text-muted">
                Professional Context
              </p>
              <h3 className="type-h3 mt-3 text-text-primary">
                Precise, analytical, navy-led
              </h3>
              <p className="type-body-small mt-3 text-text-secondary">
                Future technical work can lean on deep blue emphasis while
                retaining the same card, border, and type rules.
              </p>
              <div className="mt-5 h-2 rounded-full bg-context-accent" />
            </Surface>
            <Surface className="theme-basketball" variant="contextual">
              <p className="type-eyebrow text-text-muted">Basketball Context</p>
              <h3 className="type-h3 mt-3 text-text-primary">
                Warmer, energetic, gold-led
              </h3>
              <p className="type-body-small mt-3 text-text-secondary">
                Future athlete and community sections can carry more warmth
                without changing the underlying primitives.
              </p>
              <div className="mt-5 h-2 rounded-full bg-context-accent" />
            </Surface>
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading eyebrow="15" title="Navigation Sample" />
          <NavigationPrototype className="mt-8" />
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            description="States are visible through copy, border, contrast, and keyboard focus, not color alone."
            eyebrow="16"
            title="Interaction States"
          />
          <ResponsiveGrid className="mt-8" columns="three">
            <Surface>
              <p className="type-h4 text-text-primary">Default / Hover</p>
              <p className="type-body-small mt-2 text-text-secondary">
                Hover adjusts border and background quickly. Touch users still
                receive the same content.
              </p>
              <div className="mt-5">
                <Button variant="secondary">Interactive target</Button>
              </div>
            </Surface>
            <Surface>
              <p className="type-h4 text-text-primary">Focus Visible</p>
              <p className="type-body-small mt-2 text-text-secondary">
                Keyboard focus uses a high-contrast tokenized outline.
              </p>
              <div className="mt-5">
                <TextLink href="/design-system">Focusable example</TextLink>
              </div>
            </Surface>
            <Surface>
              <p className="type-h4 text-text-primary">Disabled</p>
              <p className="type-body-small mt-2 text-text-secondary">
                Disabled state reduces opacity and removes pointer interaction.
              </p>
              <div className="mt-5">
                <Button disabled>Unavailable action</Button>
              </div>
            </Surface>
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeading
            description="Motion stays subtle and respects user preferences through global reduced-motion rules."
            eyebrow="17"
            title="Motion / Reduced Motion"
          />
          <ResponsiveGrid className="mt-8" columns="two">
            <Surface className="theme-professional">
              <p className="type-h4 text-text-primary">
                Subtle Progress Motion
              </p>
              <p className="type-body-small mt-2 text-text-secondary">
                The animated bar becomes static when reduced motion is enabled.
              </p>
              <div className="motion-track mt-6" />
            </Surface>
            <BasketballHighlightPrototype />
          </ResponsiveGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <Surface variant="inverted">
            <p className="type-eyebrow text-accent">Phase Boundary</p>
            <h2 className="type-h2 mt-3 text-primary-light">
              v0.2 stops at the system.
            </h2>
            <p className="type-body mt-4 max-w-3xl text-primary-light">
              Production homepage implementation, project case studies,
              basketball pages, resume integration, and page-flip interaction
              begin in later phases after this visual foundation is reviewed.
            </p>
            <TagGroup
              className="mt-6"
              label="Reusable Capability Tags"
              tags={capabilityTags}
            />
          </Surface>
        </Container>
      </Section>
    </main>
  );
}
