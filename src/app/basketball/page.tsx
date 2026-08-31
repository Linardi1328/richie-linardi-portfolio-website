import Link from "next/link";
import { BasketballShellHero } from "@/components/hero/basketball-shell-hero";
import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import {
  basketballArchiveModules,
  basketballCareerMoments,
  basketballEvidenceRules,
} from "@/data/basketball-home";
import { basketballWorldNavigation } from "@/data/world-navigation";

export default function BasketballPage() {
  return (
    <PortfolioWorldShell
      navigation={basketballWorldNavigation}
      world="basketball"
    >
      <main className="theme-basketball">
        <BasketballShellHero />

        {/* [SECTION: basketball-career-index] */}
        <section className="basketball-career-index" id="journey">
          <div className="basketball-shell-section__inner">
            <div className="basketball-career-index__heading">
              <div>
                <p className="basketball-shell-hero__kicker">
                  Verified career anchors
                </p>
                <h2>From academy to Indonesia.</h2>
              </div>
              <p>
                The archive starts with the milestones that can already be
                traced. Photography, source links, and deeper game context will
                attach to these anchors as the site develops.
              </p>
            </div>

            <div className="basketball-career-index__track">
              {basketballCareerMoments.map((moment, index) => (
                <article
                  className="basketball-career-index__moment"
                  key={`${moment.year}-${moment.label}`}
                >
                  <div className="basketball-career-index__year">
                    <span>{moment.year}</span>
                    <i>{String(index + 1).padStart(2, "0")}</i>
                  </div>
                  <div className="basketball-career-index__marker" />
                  <p className="basketball-career-index__context">
                    {moment.context}
                  </p>
                  <h3>{moment.label}</h3>
                  <p className="basketball-career-index__detail">
                    {moment.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="basketball-career-index__cta">
              <span>Career archive / 2016—2024</span>
              <Link href="/basketball/journey">Open the full journey →</Link>
            </div>
          </div>
        </section>

        {/* [SECTION 01] Basketball Archive Architecture */}
        <section className="basketball-shell-section" id="archive">
          <div className="basketball-shell-section__inner">
            <p className="basketball-shell-hero__kicker">Archive structure</p>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(2.3rem,7vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[var(--stage-ink)]">
              A career should read like a sequence, not a collage.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--stage-muted)]">
              Progression, achievement, photography, statistics, and proof are
              being built as one connected archive rather than separate showcase
              pages.
            </p>

            <div className="basketball-shell-section__grid">
              {basketballArchiveModules.map((module) => (
                <Link
                  className="basketball-shell-card"
                  href={module.href}
                  key={module.index}
                >
                  <span className="basketball-shell-card__index">
                    {module.index}
                  </span>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <span className="basketball-shell-card__action">
                    Enter module →
                  </span>
                </Link>
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
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--stage-muted)]">
                The final archive will let a viewer move from a result to the
                source, from a photograph to its event context, and from a stat
                line back to the competition where it happened.
              </p>
            </div>

            <div className="border-t border-[var(--stage-line)]">
              {basketballEvidenceRules.map((rule, index) => (
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

        {/* [SECTION 03] Basketball Archive Direction */}
        <section className="basketball-shell-section">
          <div className="basketball-shell-section__inner">
            <div className="basketball-archive-direction">
              <div>
                <p className="basketball-shell-hero__kicker">
                  Archive direction
                </p>
                <h2>Photography first. Context always.</h2>
              </div>
              <div>
                <p>
                  The visual layer will become more cinematic as verified media
                  is attached, but the structure underneath is already designed
                  to preserve the event, role, result, and source around every
                  important moment.
                </p>
                <div className="basketball-archive-direction__links">
                  <Link href="/basketball/gallery">Browse gallery shell →</Link>
                  <Link href="/basketball/stats">Open statistics shell →</Link>
                  <Link href="/basketball/media">Open media archive →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
