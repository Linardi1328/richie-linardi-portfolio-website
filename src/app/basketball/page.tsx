import { BasketballShellHero } from "@/components/hero/basketball-shell-hero";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { basketballWorldNavigation } from "@/data/world-navigation";

const archiveModules = [
  {
    description:
      "A chronological interface that connects development chapters, teams, tournaments, and source-backed milestones.",
    index: "01",
    title: "Journey timeline",
  },
  {
    description:
      "Results and achievements will be presented as a ledger with source, event context, role, and supporting media attached.",
    index: "02",
    title: "Achievement ledger",
  },
  {
    description:
      "Photography will open into event context rather than living as an isolated social-media-style image grid.",
    index: "03",
    title: "Proof gallery",
  },
] as const;

const evidenceRules = [
  "Result → source → context",
  "Photo → event → role",
  "Statistic → competition → verification",
  "Story → evidence → related moments",
] as const;

export default function BasketballPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <BasketballShellHero />

        {/* [SECTION 01] Basketball Journey Architecture */}
        <section className="basketball-shell-section" id="journey">
          <div className="basketball-shell-section__inner">
            <p className="basketball-shell-hero__kicker">
              Journey architecture
            </p>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(2.3rem,7vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[var(--stage-ink)]">
              A career should read like a sequence, not a collage.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--stage-muted)]">
              The final basketball experience will connect progression,
              achievement, photography, and proof through one consistent archive
              system.
            </p>

            <div className="basketball-shell-section__grid">
              {archiveModules.map((module) => (
                <article className="basketball-shell-card" key={module.index}>
                  <span className="basketball-shell-card__index">
                    {module.index}
                  </span>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* [SECTION 02] Basketball Proof Model */}
        <section className="basketball-shell-section" id="proof">
          <div className="basketball-shell-section__inner grid gap-10 min-[900px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] min-[900px]:gap-16">
            <div>
              <p className="basketball-shell-hero__kicker">Evidence model</p>
              <h2 className="mt-3 text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[var(--stage-ink)]">
                Proof stays attached to the story.
              </h2>
            </div>

            <div className="border-t border-[var(--stage-line)]">
              {evidenceRules.map((rule, index) => (
                <div
                  className="grid min-h-20 grid-cols-[3rem_minmax(0,1fr)] items-center gap-4 border-b border-[var(--stage-line)] py-4"
                  key={rule}
                >
                  <span className="font-mono text-xs text-[var(--stage-accent)]">
                    0{index + 1}
                  </span>
                  <span className="text-base font-bold text-[var(--stage-ink)]">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* [SECTION 03] Basketball Archive Roadmap */}
        <section className="basketball-shell-section" id="archive">
          <div className="basketball-shell-section__inner">
            <div className="grid gap-8 min-[900px]:grid-cols-2 min-[900px]:items-end">
              <div>
                <p className="basketball-shell-hero__kicker">
                  Archive direction
                </p>
                <h2 className="mt-3 text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[var(--stage-ink)]">
                  Photography first. Context always.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[var(--stage-muted)] min-[900px]:justify-self-end">
                The next basketball production phases will replace this shell
                scaffold with the verified journey, achievement ledger,
                statistics, gallery, and media archive without changing the
                shared page architecture established here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
