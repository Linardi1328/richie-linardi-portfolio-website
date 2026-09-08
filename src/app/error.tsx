"use client";

import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="portfolio-error" role="main">
      <section className="portfolio-error__panel" role="alert">
        <p className="portfolio-error__eyebrow">Recovery state</p>
        <h1>This page hit an unexpected error.</h1>
        <p>
          The portfolio is still available. Retry this view, or return to the
          professional home and continue from there.
        </p>
        <div className="portfolio-error__actions">
          <button type="button" onClick={reset}>
            Try again
          </button>
          <Link href="/">Return home</Link>
        </div>
      </section>
    </main>
  );
}
