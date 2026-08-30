import Link from "next/link";

export function BasketballShellHero() {
  return (
    <section className="basketball-shell-hero">
      {/* [HERO BACK] Basketball Face */}
      <div className="basketball-shell-hero__grid">
        <div>
          <p className="basketball-shell-hero__kicker">
            Basketball · Athlete archive
          </p>
          <h1 className="basketball-shell-hero__title">
            The other side of the same discipline.
          </h1>
          <p className="basketball-shell-hero__description">
            This side is being built as a traceable athlete archive: moments,
            results, photography, and context connected together instead of a
            highlight reel detached from evidence.
          </p>
          <div className="basketball-shell-hero__actions">
            <Link
              className="inline-flex min-h-12 items-center justify-center border border-[#c8a45c] bg-[#c8a45c] px-5 py-3 text-base font-bold text-[#090806] no-underline transition-opacity hover:opacity-90"
              href="#journey"
            >
              Enter the archive
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center border border-[#3c372d] bg-transparent px-5 py-3 text-base font-bold text-[#f7f1e4] no-underline transition-colors hover:border-[#c8a45c]"
              href="#proof"
            >
              See the evidence model
            </Link>
          </div>
        </div>

        <div
          aria-label="Jersey number 13 visual identity"
          className="basketball-shell-hero__number"
        >
          13
        </div>
      </div>
    </section>
  );
}
