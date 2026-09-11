"use client";

import type { PortfolioWorld } from "@/data/world-navigation";

export function ReverseBleed({ world }: { world: PortfolioWorld }) {
  return (
    <div className={`reverse-bleed reverse-bleed--${world}`} aria-hidden="true">
      {world === "professional" ? (
        /* PROFESSIONAL SIDE: Faint Athlete court movement bleed through paper */
        <svg
          className="reverse-bleed__svg"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Subtle court key & 3pt arc watermark bleed */}
          <path
            d="M 1100 0 L 1100 240 M 1340 0 L 1340 240 M 1100 240 C 1100 420, 1340 420, 1340 240"
            stroke="var(--stage-accent, #c8a45c)"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="reverse-bleed__trace"
          />
          <circle
            cx="1220"
            cy="240"
            r="80"
            stroke="var(--stage-accent, #c8a45c)"
            strokeWidth="0.75"
            className="reverse-bleed__trace"
          />
          {/* Faint #13 physical reverse imprint */}
          <text
            x="1160"
            y="650"
            fontFamily="var(--font-mono)"
            fontSize="280"
            fontWeight="900"
            fill="var(--stage-accent, #c8a45c)"
            className="reverse-bleed__numeral"
          >
            13
          </text>
        </svg>
      ) : (
        /* ATHLETE SIDE: Faint Professional orthogonal system traces bleed through paper */
        <svg
          className="reverse-bleed__svg"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Subtle orthogonal bus & junction nodes watermark bleed */}
          <path
            d="M 200 0 L 200 320 L 480 320 L 480 640 L 180 640 L 180 900"
            stroke="#38bdf8"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            className="reverse-bleed__trace"
          />
          <circle cx="200" cy="320" r="4" fill="#38bdf8" />
          <circle cx="480" cy="320" r="4" fill="#38bdf8" />
          <circle cx="480" cy="640" r="4" fill="#38bdf8" />
          {/* Faint RBL physical reverse imprint */}
          <text
            x="80"
            y="720"
            fontFamily="var(--font-mono)"
            fontSize="220"
            fontWeight="900"
            fill="#38bdf8"
            className="reverse-bleed__numeral"
          >
            RBL
          </text>
        </svg>
      )}
    </div>
  );
}
