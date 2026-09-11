"use client";

import { useState } from "react";

type Mode = "professional" | "athlete";

export function ConceptCExperimentalEditorial({
  initialMode = "professional",
}: {
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      num: "01",
      name: "SPY Market Agent",
      cat: "Quantitative / ML Pipeline",
      year: "2026",
      status: "Phase 5 Beta",
    },
    {
      num: "02",
      name: "Personal Project Operator",
      cat: "Mobile Command Plane",
      year: "2026",
      status: "Phase 6 User Acceptance",
    },
    {
      num: "03",
      name: "LedgerPilot AI",
      cat: "Human-Supervised Accounting",
      year: "2026",
      status: "Phase 6 Active",
    },
    {
      num: "04",
      name: "KHLIM Sports Ecosystem",
      cat: "Distributed Event Infrastructure",
      year: "2026",
      status: "Pre-Alpha Integrated",
    },
  ];

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
            onClick={() => setMode("professional")}
            className={mode === "professional" ? "active" : ""}
          >
            I. SYSTEMS MONOGRAPH
          </button>
          <span className="divider">—</span>
          <button
            onClick={() => setMode("athlete")}
            className={mode === "athlete" ? "active" : ""}
          >
            II. COURT CHRONICLE
          </button>
        </nav>
        <div className="concept-c-index-tag">
          {mode === "professional"
            ? "EDITION: MONASH CS · ML"
            : "EDITION: EAST JAVA · NAT'L 2024"}
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
                <span>[04 SELECTED SYSTEMS]</span>
              </div>
              <div className="work-index-rows">
                {projects.map((p, idx) => (
                  <div
                    key={p.num}
                    className={`work-row ${hoveredIndex === idx ? "hovered" : ""}`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="row-num">{p.num}</span>
                    <h3 className="row-name">{p.name}</h3>
                    <span className="row-cat">{p.cat}</span>
                    <span className="row-status">{p.status}</span>
                    <span className="row-year">{p.year}</span>
                    <span className="row-arrow">↗</span>
                  </div>
                ))}
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
                02 / HIGH PERFORMANCE BASKETBALL
              </span>
              <h1 className="huge-display-title huge-display-title--athlete">
                THE COURT
                <span className="gold-text">RECORD</span>
                SURABAYA // 13
              </h1>

              <div className="ath-editorial-intro">
                <p>
                  Three DBL East Java campaigns with SMA Gloria 1 Surabaya,
                  moving from the 2021 Fantastic Four to the 2023 East Java
                  final, culminating in First Team All-Star honors and 2024
                  national tournament representation.
                </p>
              </div>

              {/* Kinetic Performance Strip */}
              <div className="concept-c-kinetic-strip">
                <div className="kinetic-cell">
                  <span className="k-year">2024</span>
                  <span className="k-val">INDONESIA</span>
                  <span className="k-desc">
                    FIBA U18 Asia Cup & ASEAN Schools Games Final
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
                    DBL East Java Finalist · SMA Gloria 1 Surabaya
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
