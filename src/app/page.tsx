import { ButtonLink } from "@/components/ui";

const designSystemItems = [
  "Semantic color tokens",
  "Responsive typography scale",
  "Layout and spacing conventions",
  "Reusable UI primitives",
  "Portfolio pattern prototypes",
  "Professional and basketball contexts",
];

export default function Home() {
  return (
    <main className="page-shell flex min-h-screen flex-col justify-center py-section">
      <section className="flex flex-col gap-6">
        <div className="container-narrow">
          <p className="type-eyebrow text-text-muted">v0.2 Design System</p>
          <h1 className="type-h1 mt-4 text-text-primary">
            Richie Linardi Portfolio
          </h1>
          <p className="type-body-large mt-5 text-text-secondary">
            Phase v0.2 establishes the shared visual language for the future
            professional and basketball sides. The production homepage begins in
            v0.3.
          </p>
          <div className="mt-8">
            <ButtonLink href="/design-system">Review Design System</ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="current-scope"
        className="container-narrow mt-14 grid gap-5"
      >
        <div>
          <h2 id="current-scope" className="type-h3 text-text-primary">
            Current Scope
          </h2>
          <p className="type-body mt-2 text-text-secondary">
            This route remains a simple phase marker. The full interface will be
            assembled from approved primitives after design review.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {designSystemItems.map((item) => (
            <li
              key={item}
              className="rounded-card border border-border bg-surface px-4 py-3 text-sm font-medium text-text-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
