"use client";

import Link from "next/link";
import { publicProjectCatalogue } from "@/data/project-registry";
import { useProofMode } from "./proof-mode-context";
import { DualTraceEngine } from "./dual-trace-engine";
import { ReverseBleed } from "./reverse-bleed";

export function ProfessionalDualTracePage() {
  const { isProofMode } = useProofMode();

  const featured =
    publicProjectCatalogue.find((p) => p.slug === "spy-market-agent") ||
    publicProjectCatalogue[0];

  const supportingProjects = publicProjectCatalogue.filter(
    (p) => p.slug !== featured?.slug,
  );

  return (
    <div
      className={`dual-trace-page dual-trace-page--professional ${
        isProofMode ? "dual-trace-page--proof" : ""
      }`}
    >
      {/* Visual Trace Engine */}
      <DualTraceEngine world="professional" />

      {/* Subtle Athlete reverse-side ink bleed */}
      <ReverseBleed world="professional" />

      {/* =====================================================================
          CHAPTER 01: ORIGIN // MONUMENTAL IDENTITY & HERO
          ===================================================================== */}
      <section
        id="chapter-origin"
        className="dt-section dt-section--hero"
        aria-labelledby="pro-hero-title"
      >
        <div className="dt-hero-container" data-trace-in="hero-spine-entry">
          {/* Folio registration stamp */}
          <div className="dt-folio-stamp">
            <span className="dt-stamp-box">RBL.SYS.2026 // MONOGRAPH</span>
            <span className="dt-stamp-spec">
              REGISTRATION: MONASH CS · VERIFIABLE SYSTEMS
            </span>
          </div>

          {/* Monumental Typography: RBL as circuit object */}
          <div className="dt-monument-wrap" data-trace-node="rbl-monument">
            <div className="dt-monument-circuit-overlay" aria-hidden="true">
              <span className="dt-circuit-tick dt-circuit-tick--r">
                [X: 01.R]
              </span>
              <span className="dt-circuit-tick dt-circuit-tick--b">
                [GATE: 02.B]
              </span>
              <span className="dt-circuit-tick dt-circuit-tick--l">
                [TERM: 03.L]
              </span>
            </div>
            <h1
              id="pro-hero-title"
              className="dt-monument-title"
              aria-label="RBL — Richie Linardi Professional"
            >
              <span className="dt-monument-letter" data-trace-node="rbl-r">
                R
              </span>
              <span className="dt-monument-letter" data-trace-node="rbl-b">
                B
              </span>
              <span className="dt-monument-letter" data-trace-node="rbl-l">
                L
              </span>
            </h1>
            <div className="dt-monument-secondary" data-trace-node="pro-tags">
              <span className="dt-monument-tag">SYSTEMS</span>
              <span className="dt-monument-sep">/</span>
              <span className="dt-monument-tag">DATA</span>
              <span className="dt-monument-sep">/</span>
              <span className="dt-monument-tag">SOFTWARE</span>
            </div>
          </div>

          {/* Author Positioning Statement */}
          <div className="dt-hero-statement">
            <p className="dt-lead-statement">
              I build software around explicit boundaries, inspectable evidence,
              and controlled execution.
            </p>

            <div className="dt-hero-telemetry" data-trace-node="hero-telemetry">
              <div className="dt-telem-cell" data-trace-node="telem-0">
                <span className="dt-telem-num">
                  {String(publicProjectCatalogue.length).padStart(2, "0")}
                </span>
                <span className="dt-telem-lbl">Public Systems</span>
                {isProofMode && (
                  <span className="dt-proof-chip dt-proof-chip--registry">
                    <span className="dt-proof-id">[P01]</span>
                    <span>PUBLIC PROJECT REGISTRY</span>
                  </span>
                )}
              </div>
              <div className="dt-telem-cell" data-trace-node="telem-1">
                <span className="dt-telem-num">CS / DS</span>
                <span className="dt-telem-lbl">Monash University</span>
                {isProofMode && (
                  <span className="dt-proof-chip dt-proof-chip--published">
                    <span className="dt-proof-id">[P02]</span>
                    <span>MONASH · EXPECTED 2027</span>
                  </span>
                )}
              </div>
              <div className="dt-telem-cell" data-trace-node="telem-2">
                <span className="dt-telem-num">Controlled</span>
                <span className="dt-telem-lbl">Execution Gates</span>
                {isProofMode && (
                  <span className="dt-proof-chip dt-proof-chip--registry">
                    <span className="dt-proof-id">[P03]</span>
                    <span>PROJECT BOUNDARY DOCUMENTATION</span>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div
            className="dt-section-exit-anchor"
            data-trace-out="hero-exit"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 02: SYSTEMS // FEATURED SYSTEM PLATE & CATALOGUE
          ===================================================================== */}
      <section
        id="chapter-systems"
        className="dt-section dt-section--systems"
        aria-labelledby="systems-heading"
        data-trace-in="systems-entry"
      >
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-index">SECTION 02 // ARCHITECTURE</span>
            <h2 id="systems-heading" className="dt-section-title">
              Engineered System Plates
            </h2>
            <p className="dt-section-desc">
              Six public software systems, each shown with its explicit scope,
              test contracts, and verified repository evidence.
            </p>
          </div>

          {/* FEATURED SYSTEM PLATE: SPY MARKET AGENT */}
          {featured && (
            <article
              className="dt-plate-featured"
              aria-labelledby={`featured-${featured.slug}`}
              data-trace-node="featured-plate"
            >
              <div className="dt-plate-featured__header">
                <div className="dt-plate-id">
                  <span className="dt-code-badge">
                    [{featured.slug.toUpperCase().replace(/-/g, ".")}]
                  </span>
                  <span className="dt-phase-badge">{featured.phase}</span>
                  {isProofMode && (
                    <span className="dt-proof-badge dt-proof-badge--active">
                      <span className="dt-proof-id">[P04]</span>
                      <span>
                        RELEASE:{" "}
                        {"release" in featured &&
                        typeof featured.release === "string"
                          ? featured.release
                          : "Verified"}
                      </span>
                      <span className="dt-provenance-tag">
                        PROJECT REGISTRY
                      </span>
                    </span>
                  )}
                </div>
                <h3
                  id={`featured-${featured.slug}`}
                  className="dt-plate-featured__title"
                >
                  {featured.title}
                </h3>
              </div>

              <div className="dt-plate-featured__body">
                <p className="dt-plate-summary">{featured.summary}</p>

                {/* Technical Stack Pills */}
                <div className="dt-tech-strip">
                  {featured.tags.map((t) => (
                    <span key={t} className="dt-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Explicit Boundaries Window */}
                <div className="dt-boundary-window">
                  <div className="dt-boundary-header">
                    <span className="dt-boundary-icon" aria-hidden="true">
                      ⚠
                    </span>
                    <span>EXPLICIT SAFETY & OPERATION BOUNDARIES</span>
                    {isProofMode && (
                      <span className="dt-proof-indicator">AUDITED</span>
                    )}
                  </div>
                  <ul className="dt-boundary-list">
                    {featured.boundaries.map((b, idx) => (
                      <li key={idx} className="dt-boundary-item">
                        <span className="dt-bullet" aria-hidden="true">
                          ▸
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plate Evidence Footer */}
                <div className="dt-plate-footer">
                  <div className="dt-evidence-links">
                    {featured.evidence.map((ev, i) => (
                      <span key={i} className="dt-evidence-tag">
                        <span className="dt-tag-dot" />
                        {ev.label}
                      </span>
                    ))}
                  </div>
                  <a
                    href={featured.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-inspect-btn"
                  >
                    <span>OPEN REPOSITORY</span>
                    <span className="dt-btn-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* SUPPORTING SYSTEMS CATALOGUE */}
          <div
            className="dt-supporting-grid"
            data-trace-node="supporting-catalogue"
          >
            <div className="dt-supporting-header">
              <span className="dt-sub-heading">
                SUPPORTING SYSTEMS CATALOGUE
              </span>
              <span className="dt-sub-meta">
                [{supportingProjects.length} REPOSITORIES]
              </span>
              {isProofMode && (
                <span className="dt-proof-chip dt-proof-chip--registry">
                  <span className="dt-proof-id">[P05]</span>
                  <span>PUBLIC PROJECT REGISTRY</span>
                </span>
              )}
            </div>

            <div className="dt-plate-grid">
              {supportingProjects.map((project) => (
                <article
                  key={project.slug}
                  className="dt-system-card"
                  aria-labelledby={`card-${project.slug}`}
                >
                  <div className="dt-card-top">
                    <span className="dt-card-code">
                      [{project.slug.toUpperCase().replace(/-/g, ".")}]
                    </span>
                    <span className="dt-card-phase">{project.phase}</span>
                  </div>

                  <h4 id={`card-${project.slug}`} className="dt-card-title">
                    {project.title}
                  </h4>

                  <p className="dt-card-summary">{project.summary}</p>

                  <div className="dt-card-tags">
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className="dt-micro-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {isProofMode && (
                    <div className="dt-card-proof-strip">
                      <span className="dt-provenance-tag">
                        PROJECT REGISTRY
                      </span>
                      <span className="dt-proof-status">
                        STATUS: {project.currentStatus}
                      </span>
                    </div>
                  )}

                  <div className="dt-card-footer">
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dt-card-link"
                    >
                      <span>VIEW CODE</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className="dt-section-exit-anchor"
            data-trace-out="systems-exit"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 03: EXPERIENCE // ARCHITECTURE & DUAL IDENTITY BRIDGE
          ===================================================================== */}
      <section
        id="chapter-experience"
        className="dt-section dt-section--experience"
        aria-labelledby="experience-heading"
        data-trace-in="bridge-entry"
      >
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-index">SECTION 03 // DISCIPLINE</span>
            <h2 id="experience-heading" className="dt-section-title">
              Two Arenas. One Mental Model.
            </h2>
            <p className="dt-section-desc">
              Systems architecture and court vision are two expressions of the
              same spatial, analytical discipline.
            </p>
          </div>

          <div
            className="dt-discipline-bridge"
            data-trace-node="discipline-bridge"
          >
            <div
              className="dt-bridge-col dt-bridge-col--systems"
              data-trace-node="bridge-systems"
            >
              <span className="dt-bridge-badge">01 // SOFTWARE & DATA</span>
              <h3>Deterministic Systems</h3>
              <p>
                Software built with strict boundary checks, explicit audit logs,
                and verifiable outputs that can explain their decisions.
              </p>
              <ul className="dt-discipline-list">
                <li>Walk-forward backtesting avoiding lookahead leakage</li>
                <li>Phone-supervised human write approval loops</li>
                <li>Document ledger automation with proof receipts</li>
              </ul>
              <Link href="/about" className="dt-bridge-link">
                Read the engineering background →
              </Link>
            </div>

            <div
              className="dt-bridge-spine-break"
              data-trace-node="bridge-spine"
              aria-hidden="true"
            >
              <span className="dt-spine-symbol">RBL // 13</span>
            </div>

            <div
              className="dt-bridge-col dt-bridge-col--court"
              data-trace-node="bridge-court"
            >
              <span className="dt-bridge-badge dt-bridge-badge--gold">
                02 // COMPETITIVE ATHLETICS
              </span>
              <h3>Spatial Decision-Making</h3>
              <p>
                Basketball played at the provincial and national level where
                spatial pattern recognition, timing, and preparation converge.
              </p>
              <ul className="dt-discipline-list">
                <li>ASEAN Schools Games 2024 Gold (12 PTS · 4 REB)</li>
                <li>PorProv Jatim VIII 2023 Gold (21 PTS · 7 REB)</li>
                <li>DBL East Java First Team and 2024 Indonesia All-Star</li>
              </ul>
              <Link
                href="/basketball"
                className="dt-bridge-link dt-bridge-link--gold"
              >
                Turn page to Athlete side →
              </Link>
            </div>
          </div>
          <div
            className="dt-section-exit-anchor"
            data-trace-out="bridge-exit"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* =====================================================================
          CHAPTER 04: EVIDENCE // REPOSITORY HUB & CLOSING
          ===================================================================== */}
      <section
        id="chapter-evidence"
        className="dt-section dt-section--evidence"
        aria-labelledby="evidence-heading"
        data-trace-in="terminal-entry"
      >
        <div className="dt-container dt-evidence-terminal">
          <div className="dt-terminal-box" data-trace-node="terminal-box">
            <span className="dt-terminal-code">EVIDENCE.TERMINAL // 2026</span>
            <h2 id="evidence-heading" className="dt-terminal-title">
              Code, Tests, and Documentation
            </h2>
            <p className="dt-terminal-desc">
              Explore public repositories, specification runbooks, and
              verification artifacts directly on GitHub.
            </p>
            <div className="dt-terminal-actions" data-trace-node="terminal-cta">
              <a
                href="https://github.com/Linardi1328"
                target="_blank"
                rel="noopener noreferrer"
                className="dt-primary-cta"
              >
                <span>VISIT GITHUB // LINARDI1328</span>
                <span aria-hidden="true">↗</span>
              </a>
              <Link href="/projects" className="dt-secondary-cta">
                Project Catalogue Index →
              </Link>
            </div>
          </div>
          <div
            className="dt-section-exit-anchor"
            data-trace-out="terminal-exit"
            aria-hidden="true"
          />
        </div>
      </section>
    </div>
  );
}
