"use client";

import { useState } from "react";
import { publicProjectCatalogue } from "@/data/project-registry";

type Mode = "professional" | "athlete";

export function ConceptCExperimentalEditorial({
  initialMode = "professional",
}: {
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayedProjects = publicProjectCatalogue
    .slice(0, 4)
    .map((p, idx) => ({
      num: String(idx + 1).padStart(2, "0"),
      name: p.title,
      cat: p.tags.slice(0, 2).join(" / "),
      year: "2026",
      status: p.phase,
      slug: p.slug,
    }));

  return (
    <div className={`concept-c-root concept-c--${mode}`}>
      {/* Editorial Folio Rail */}
      <div className="concept-c-vertical-rail">
        <span className="rail-folio">
          {mode === "professional"
            ? "FOLIO P-01 // CODEX"
            : "FOLIO B-01 // CHRONICLE"}
        </span>
        <span className="rail-credit">RICHIE LINARDI · 2026</span>
      </div>

      {/* Top Editorial Bar */}
      <header className="concept-c-topbar">
        <div className="concept-c-monogram">
          {mode === "professional" ? "RBL" : "13"}
        </div>
        <nav className="concept-c-mode-toggle">
          <button
            type="button"
            onClick={() => setMode("professional")}
            className={mode === "professional" ? "active" : ""}
          >
            I. SYSTEMS MONOGRAPH
          </button>
          <span className="divider" aria-hidden="true">
            —
          </span>
          <button
            type="button"
            onClick={() => setMode("athlete")}
            className={mode === "athlete" ? "active" : ""}
          >
            II. COURT CHRONICLE
          </button>
        </nav>
        <div className="concept-c-index-tag">
          {mode === "professional"
            ? "EDITION: MONASH CS · ML"
            : "EDITION: EAST JAVA · INDONESIA 2024"}
        </div>
      </header>

      {/* Main Editorial Body */}
      <main className="concept-c-main">
        {mode === "professional" ? (
          /* PROFESSIONAL EDITORIAL SPREAD */
          <div className="concept-c-pro-layout">
            <div className="concept-c-pro-headline-zone">
              <span className="eyebrow-tag">
                01 / ARCHITECTURE & DATA SYSTEMS
              </span>
              <h1 className="huge-display-title">
                RICHIE
                <span className="outline-text">BERTRAND</span>
                LINARDI
              </h1>
              <div className="pro-thesis-statement">
                <p>
                  Engineering verifiable software where every consequential
                  action remains behind explicit human control gates and
                  rigorous audit proofs.
                </p>
              </div>
            </div>

            {/* Typography-First Work Index */}
            <section className="concept-c-work-index">
              <div className="work-index-topline">
                <span>INDEXED REPOSITORY DOSSIER</span>
                <span>
                  [{String(displayedProjects.length).padStart(2, "0")} SELECTED
                  SYSTEMS]
                </span>
              </div>
              <div className="work-index-rows">
                {displayedProjects.map((p, idx) => {
                  const isHovered = hoveredIndex === idx;
                  return (
                    <div
                      role="button"
                      tabIndex={0}
                      key={p.num}
                      className={`work-row ${isHovered ? "hovered" : ""}`}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(idx)}
                      onBlur={() => setHoveredIndex(null)}
                      onClick={() => setHoveredIndex(isHovered ? null : idx)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setHoveredIndex(isHovered ? null : idx);
                        }
                      }}
                      aria-pressed={isHovered}
                      aria-label={`Project ${p.num}: ${p.name}, ${p.status}`}
                    >
                      <span className="row-num">{p.num}</span>
                      <h3 className="row-name">{p.name}</h3>
                      <span className="row-cat">{p.cat}</span>
                      <span className="row-status">{p.status}</span>
                      <span className="row-year">{p.year}</span>
                      <span className="row-indicator" aria-hidden="true">
                        {isHovered ? "−" : "+"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        ) : (
          /* ATHLETE EDITORIAL SPREAD */
          <div className="concept-c-ath-layout">
            {/* Monumental #13 Watermark */}
            <div className="ath-monument-watermark" aria-hidden="true">
              13
            </div>

            <div className="concept-c-ath-content">
              <span className="eyebrow-tag eyebrow-tag--gold">
                02 / COMPETITIVE BASKETBALL RECORD
              </span>
              <h1 className="huge-display-title huge-display-title--athlete">
                THE COURT
                <span className="gold-text">RECORD</span>
                SURABAYA // 13
              </h1>

              <div className="ath-editorial-intro">
                <p>
                  Official DBL East Java progression across three seasons with
                  SMA Gloria 1 Surabaya, moving from the 2021 Fantastic Four and
                  2022 Sweet Sixteen to the 2023 East Java final (Runner-Up)
                  with First Team honors, followed by 2024 DBL Indonesia
                  All-Star selection and representing Indonesia in international
                  competition.
                </p>
              </div>

              {/* Kinetic Performance Strip */}
              <div className="concept-c-kinetic-strip">
                <div className="kinetic-cell">
                  <span className="k-year">2024</span>
                  <span className="k-val">INDONESIA</span>
                  <span className="k-desc">
                    FIBA U18 Asia Cup & ASEAN Schools Games Final (Gold)
                  </span>
                </div>
                <div className="kinetic-cell">
                  <span className="k-year">2023</span>
                  <span className="k-val">GOLD MEDAL</span>
                  <span className="k-desc">
                    PorProv Jatim VIII · Kota Surabaya (21 PTS / 7 REB)
                  </span>
                </div>
                <div className="kinetic-cell">
                  <span className="k-year">2021–23</span>
                  <span className="k-val">FIRST TEAM</span>
                  <span className="k-desc">
                    DBL East Java Finalist (Runner-Up) · SMA Gloria 1 Surabaya
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
