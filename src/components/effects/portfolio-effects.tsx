"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-reveal]";

export function PortfolioEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );

    if (targets.length === 0) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    let observer: IntersectionObserver | null = null;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          // threshold: 0 ensures elements of any height (even 6000px+ tall mobile sections)
          // trigger as soon as their leading edge crosses the reveal line.
          // -12% bottom margin delays triggering until the element is 12% inside the viewport,
          // giving a crisp, visible entry animation as the user scrolls.
          rootMargin: "0px 0px -12% 0px",
          threshold: 0,
        },
      );

      targets.forEach((target) => observer?.observe(target));
    } catch {
      // If observer setup fails, fall back to making all content visible immediately.
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    // Progressive enhancement scroll/failsafe fallback:
    // Ensure any content scrolled near/past or remaining unrevealed becomes visible.
    function checkVisibilityFallback() {
      // revealLine matches the observer's -12% bottom margin (88% of viewport height).
      // Elements reveal only when their top edge crosses into the visible trigger zone.
      const revealLine = window.innerHeight * 0.88;
      let remaining = false;

      targets.forEach((target) => {
        if (target.classList.contains("is-visible")) {
          return;
        }

        const rect = target.getBoundingClientRect();
        if (rect.top <= revealLine) {
          target.classList.add("is-visible");
          observer?.unobserve(target);
        } else {
          remaining = true;
        }
      });

      if (!remaining) {
        window.removeEventListener("scroll", checkVisibilityFallback);
        window.removeEventListener("resize", checkVisibilityFallback);
      }
    }

    window.addEventListener("scroll", checkVisibilityFallback, {
      passive: true,
    });
    window.addEventListener("resize", checkVisibilityFallback, {
      passive: true,
    });

    // Initial check in case elements are already in view
    checkVisibilityFallback();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkVisibilityFallback);
      window.removeEventListener("resize", checkVisibilityFallback);
    };
  }, [pathname]);

  return null;
}
