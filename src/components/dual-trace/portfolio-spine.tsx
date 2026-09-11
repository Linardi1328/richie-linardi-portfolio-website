"use client";

import { useEffect, useState } from "react";
import type { PortfolioWorld } from "@/data/world-navigation";

interface Chapter {
  id: string;
  labelPro: string;
  labelAth: string;
  posPercent: number;
}

const CHAPTERS: Chapter[] = [
  {
    id: "chapter-origin",
    labelPro: "P.01 IDENTITY",
    labelAth: "13.01 IDENTITY",
    posPercent: 12,
  },
  {
    id: "chapter-systems",
    labelPro: "P.02 SYSTEMS",
    labelAth: "13.02 FINALS",
    posPercent: 38,
  },
  {
    id: "chapter-experience",
    labelPro: "P.03 DISCIPLINE",
    labelAth: "13.03 PROGRESSION",
    posPercent: 65,
  },
  {
    id: "chapter-evidence",
    labelPro: "P.04 EVIDENCE",
    labelAth: "13.04 ARCHIVE",
    posPercent: 90,
  },
];

export function PortfolioSpine({ world }: { world: PortfolioWorld }) {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = CHAPTERS.findIndex((c) => c.id === id);
            if (index !== -1) {
              setActiveChapterIndex(index);
              window.dispatchEvent(
                new CustomEvent("rbl-spine-chapter", {
                  detail: { chapterIndex: index, chapterId: id },
                }),
              );
            }
          }
        });
      },
      {
        rootMargin: "-15% 0px -40% 0px",
        threshold: 0,
      },
    );

    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];
  const chapterLabel =
    world === "professional" ? activeChapter.labelPro : activeChapter.labelAth;

  return (
    <aside
      className={`portfolio-book__spine portfolio-book__spine--authored portfolio-book__spine--${world}`}
      aria-label="Chapter progress spine"
    >
      {/* Screen reader polite notification on chapter transitions */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        Current section: {chapterLabel}
      </span>

      {/* 13 subtle registration tick marks (identity marker) */}
      <div className="spine-registration-ticks" aria-hidden="true">
        {Array.from({ length: 13 }).map((_, i) => (
          <span
            key={i}
            className="spine-tick"
            style={{ top: `${(i / 12) * 100}%` }}
          />
        ))}
      </div>

      {/* Moving carriage marker tracking scroll chapter */}
      <div
        className="spine-carriage"
        style={{ top: `${activeChapter.posPercent}%` }}
        aria-hidden="true"
      >
        <span className="spine-carriage__bead" />
        <span className="spine-carriage__label">{chapterLabel}</span>
      </div>
    </aside>
  );
}
