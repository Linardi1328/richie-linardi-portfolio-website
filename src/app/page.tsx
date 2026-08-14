const foundationItems = [
  "Next.js App Router",
  "React and TypeScript",
  "Tailwind CSS",
  "ESLint",
  "Prettier",
  "Portfolio directory structure",
  "Roadmap and development conventions",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-12">
      <section className="flex flex-col gap-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          v0.1 Foundation
        </p>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
            Richie Linardi Portfolio
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            A clean technical base for a two-sided portfolio connecting
            professional work with basketball leadership. Design, content, and
            motion systems begin in later phases.
          </p>
        </div>
      </section>

      <section aria-labelledby="foundation-status" className="grid gap-5">
        <div>
          <h2
            id="foundation-status"
            className="text-2xl font-semibold text-slate-950"
          >
            Foundation Scope
          </h2>
          <p className="mt-2 max-w-2xl leading-7 text-slate-600">
            Phase 0 is intentionally plain: it verifies the development stack,
            repository shape, and project conventions before visual design work
            starts.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {foundationItems.map((item) => (
            <li
              key={item}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="next-phase"
        className="border-t border-slate-200 pt-8"
      >
        <h2 id="next-phase" className="text-2xl font-semibold text-slate-950">
          Next Phase
        </h2>
        <p className="mt-2 max-w-2xl leading-7 text-slate-600">
          Phase 1 will define the shared design system: color tokens,
          typography, UI primitives, and a temporary development page for visual
          approval.
        </p>
      </section>
    </main>
  );
}
