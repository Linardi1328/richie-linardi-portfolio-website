"use client";

import Link from "next/link";
import { useState, useId } from "react";

export type ProofMoment = {
  id: string;
  category: "international" | "national" | "equipment" | "development";
  title: string;
  subtitle: string;
  event: string;
  team: string;
  role: string;
  proofNote: string;
  metricLabel: string;
  metricValue: string;
  stats?: string;
  sourceLabel?: string;
  sourceHref?: string;
  locationYear: string;
  ledgerId: string;
};

const proofMoments: readonly ProofMoment[] = [
  {
    id: "asg-2024-final",
    category: "international",
    title: "ASEAN Schools Games 2024 — Gold",
    subtitle: "Final vs Philippines (56–54)",
    event: "ASEAN Schools Games 2024 — Final",
    team: "Indonesia National School Team",
    role: "Player #13",
    proofNote:
      "Indonesia defeated the Philippines 56–54 in the final. Richie recorded 12 points and 4 rebounds.",
    metricLabel: "FINAL SCORE",
    metricValue: "56 – 54",
    stats: "12 PTS · 4 REB",
    sourceLabel: "IBL Indonesia · ASG 2024 final box score",
    sourceHref:
      "https://iblindonesia.com/news/timnas-putra-indonesia-sabet-medali-emas-asg-2024",
    locationYear: "Semarang, Indonesia · 2024",
    ledgerId: "PROOF-ASG-2024",
  },
  {
    id: "fiba-u18-2024",
    category: "international",
    title: "FIBA U18 Asia Cup 2024",
    subtitle: "Continental Youth Championship",
    event: "FIBA U18 Asia Cup 2024",
    team: "Indonesia U18 National Team",
    role: "Player #13",
    proofNote:
      "Contested 3 games for Indonesia at the continental championship against Asian national youth teams.",
    metricLabel: "TOURNAMENT PLAY",
    metricValue: "3 GAMES",
    stats: "5.3 PPG · 3.0 RPG · 0.7 APG",
    sourceLabel: "FIBA .basketball · Official Player Record",
    sourceHref:
      "https://www.fiba.basketball/en/players/370084-richie-bertrand-linardi",
    locationYear: "Amman, Jordan · 2024",
    ledgerId: "PROOF-FIBA-U18-2024",
  },
  {
    id: "dbl-all-star-2024",
    category: "national",
    title: "DBL Indonesia All-Star 2024",
    subtitle: "National Selection Roster",
    event: "DBL Camp National Selection 2024",
    team: "DBL Indonesia All-Star Team",
    role: "Guard / Forward #13",
    proofNote:
      "Selected to the DBL Indonesia All-Star 2024 boys roster following nationwide evaluation camp in Jakarta.",
    metricLabel: "NATIONAL SELECTION",
    metricValue: "ALL-STAR 2024",
    stats: "Top National Squad Selection",
    sourceLabel: "DBL Indonesia · Official Roster Announcement",
    sourceHref:
      "https://www.dbl.id/r/19689/skuad-putra-kopi-good-day-dbl-indonesia-all-star-2024",
    locationYear: "Jakarta, Indonesia · 2024",
    ledgerId: "PROOF-DBL-ALLSTAR-2024",
  },
  {
    id: "dbl-gloria-1-2023",
    category: "national",
    title: "2023 Gloria 1 Championship Final Run",
    subtitle: "East Java Runner-Up & First Team",
    event: "DBL East Java Championship Series 2023",
    team: "SMA Gloria 1 Surabaya",
    role: "Starting Wing / #13",
    proofNote:
      "Led SMA Gloria 1 Surabaya to the East Java final; selected to the 2023 DBL East Java First Team.",
    metricLabel: "PROVINCIAL FINAL",
    metricValue: "RUNNER-UP",
    stats: "2023 First Team East Java",
    sourceLabel: "DBL Indonesia · Feature & Box Score Archive",
    sourceHref:
      "https://www.dbl.id/r/19150/richie-bertrand-dan-kenangan-manis-bawa-gloria-1-ke-partai-final",
    locationYear: "Surabaya, Indonesia · 2023",
    ledgerId: "PROOF-GLORIA1-2023",
  },
  {
    id: "indonesia-jersey-13",
    category: "equipment",
    title: "National Squad Uniform · LINARDI 13",
    subtitle: "Official Tournament Equipment Registration",
    event: "National Team Equipment & Roster Confirmation",
    team: "Indonesia #13",
    role: "Registered #13",
    proofNote:
      "Official tournament uniform registration and squad assignment for Indonesia national representation.",
    metricLabel: "SQUAD NUMBER",
    metricValue: "INA #13",
    stats: "Official Registered Number",
    sourceLabel: "Roster verification archive",
    locationYear: "Jakarta / Semarang · 2024",
    ledgerId: "PROOF-UNIFORM-13",
  },
  {
    id: "dbl-academy-pathway",
    category: "development",
    title: "DBL Academy International Development",
    subtitle: "Youth Selection & International Tour",
    event: "DBL Academy Selection (2016–2019)",
    team: "DBL Academy Selection KU-13",
    role: "Youth Guard / Forward",
    proofNote:
      "Foundational training starting 2016; represented DBL Academy Selection in Malaysia and Thailand youth tournaments.",
    metricLabel: "DEVELOPMENT PATHWAY",
    metricValue: "SINCE 2016",
    stats: "KU-13 Runner-Up (Malaysia)",
    sourceLabel: "DBL Indonesia & Detik Sport Archive",
    sourceHref:
      "https://www.dbl.id/r/74/giliran-tim-dbl-academy-selection-ku-13-sabet-runner-up-di-malaysia",
    locationYear: "Surabaya / Malaysia / Thailand",
    ledgerId: "PROOF-ACADEMY-2016",
  },
];

const milestoneBadges = [
  {
    title: "DBL INDONESIA ALL-STAR 2024",
    detail: "National Roster Selection",
    verified: true,
    href: "https://www.dbl.id/r/19689/skuad-putra-kopi-good-day-dbl-indonesia-all-star-2024",
  },
  {
    title: "FIBA U18 ASIA CUP 2024",
    detail: "3 Games · 5.3 PPG · 3.0 RPG · 0.7 APG",
    verified: true,
    href: "https://www.fiba.basketball/en/players/370084-richie-bertrand-linardi",
  },
  {
    title: "2023 GLORIA 1 FINAL RUN",
    detail: "East Java Runner-Up · First Team",
    verified: true,
    href: "https://www.dbl.id/r/19150/richie-bertrand-dan-kenangan-manis-bawa-gloria-1-ke-partai-final",
  },
  {
    title: "2023 DBL EAST JAVA",
    detail: "Second Team Selection",
    verified: true,
    href: "https://www.dbl.id/u/profile/27842/richie-bertrand-linardi",
  },
  {
    title: "2016 DBL ACADEMY START",
    detail: "Foundational Development",
    verified: true,
    href: "https://www.dbl.id/r/23090/begini-wejangan-richie-dan-kennie-untuk-dbl-academy-selection-team-2024",
  },
] as const;

const journeyStripItems = [
  { year: "2016", label: "DBL Academy Start", context: "Development Program" },
  { year: "2021", label: "DBL East Java", context: "Fantastic Four Run" },
  {
    year: "2023",
    label: "Gloria 1: Final Run",
    context: "First Team East Java",
  },
  {
    year: "2024",
    label: "FIBA U18 Asia Cup",
    context: "3 Games · 5.3 PPG, 3.0 RPG",
  },
  {
    year: "2024",
    label: "ASEAN Schools Games",
    context: "Gold Medal · Final 56–54 vs PHI",
  },
] as const;

export function AthleteProofGalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeMomentId, setActiveMomentId] =
    useState<string>("asg-2024-final");
  const filterGroupId = useId();

  const activeMoment =
    proofMoments.find((m) => m.id === activeMomentId) ?? proofMoments[0];

  const filteredMoments = proofMoments.filter((m) => {
    if (selectedFilter === "all") return true;
    return m.category === selectedFilter;
  });

  const handlePrevMoment = () => {
    const currentIndex = proofMoments.findIndex((m) => m.id === activeMomentId);
    const prevIndex =
      currentIndex <= 0 ? proofMoments.length - 1 : currentIndex - 1;
    setActiveMomentId(proofMoments[prevIndex].id);
  };

  const handleNextMoment = () => {
    const currentIndex = proofMoments.findIndex((m) => m.id === activeMomentId);
    const nextIndex =
      currentIndex >= proofMoments.length - 1 ? 0 : currentIndex + 1;
    setActiveMomentId(proofMoments[nextIndex].id);
  };

  return (
    <article className="basketball-record proof-gallery-page">
      {/* [HERO] Basketball Proof Archive */}
      <section
        aria-label="Basketball proof gallery hero"
        className="basketball-record__hero proof-gallery-hero"
      >
        <div className="basketball-record__hero-inner proof-gallery-hero__inner">
          <div className="proof-gallery-hero__header" data-reveal>
            <p className="basketball-record__kicker">
              <span>Basketball Proof Gallery</span>
            </p>
            <h1 className="proof-gallery-hero__title">
              The Career, <br />
              Shown Through The <span className="proof-accent">Proof.</span>
            </h1>
            <p className="basketball-record__lede">
              Every moment. Every game. Real results. Verified proof. Organized
              by competition, national representation, and career milestones.
            </p>

            <div className="proof-gallery-hero__athlete-badge">
              <span className="proof-jersey-number">13</span>
              <div className="proof-athlete-info">
                <strong>RICHIE LINARDI</strong>
                <span>INDONESIA · #13</span>
              </div>
            </div>
          </div>

          {/* [FEATURED PROOF] Telemetry Credential & Scoreboard */}
          <div
            className="proof-gallery-hero__featured-card"
            data-reveal
            data-reveal-delay="1"
          >
            <div className="proof-featured-credential">
              <div className="proof-featured-credential__frame">
                <div className="proof-credential-card">
                  <div className="proof-credential-card__header">
                    <span className="proof-credential-flag" aria-hidden="true">
                      🇮🇩
                    </span>
                    <span className="proof-credential-nation">INDONESIA</span>
                  </div>
                  <div className="proof-credential-jersey">
                    <span className="proof-credential-number">13</span>
                    <span className="proof-credential-name">LINARDI</span>
                  </div>
                  <div className="proof-credential-body">
                    <span className="proof-credential-role">
                      NATIONAL SQUAD #13
                    </span>
                    <span className="proof-credential-event">
                      ASG 2024 GOLD MEDALIST
                    </span>
                    <span className="proof-credential-comp">
                      FIBA U18 ASIA CUP
                    </span>
                  </div>
                  <div className="proof-credential-footer">
                    <span className="proof-credential-status">
                      VERIFIED ROSTER ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <aside
              aria-label="Featured proof: ASEAN Schools Games 2024 Gold"
              className="proof-scoreboard-card"
            >
              <div className="proof-scoreboard-card__badge">
                FEATURED PROOF <span aria-hidden="true">✓</span>
              </div>
              <h2 className="proof-scoreboard-card__title">
                ASEAN SCHOOL GAMES 2024 — GOLD
              </h2>

              <div
                aria-label="Final score: Indonesia 56, Philippines 54"
                className="proof-scoreboard-card__board"
              >
                <div className="proof-scoreboard-team">
                  <span aria-hidden="true" className="proof-flag">
                    🇮🇩
                  </span>
                  <span className="proof-team-name">INDONESIA</span>
                </div>
                <div className="proof-scoreboard-score">
                  <strong>56 – 54</strong>
                  <span className="proof-scoreboard-status">FINAL</span>
                </div>
                <div className="proof-scoreboard-team">
                  <span aria-hidden="true" className="proof-flag">
                    🇵🇭
                  </span>
                  <span className="proof-team-name">PHILIPPINES</span>
                </div>
              </div>

              <p className="proof-scoreboard-card__note">
                Indonesia defeated the Philippines 56–54 in the final. Richie
                recorded 12 PTS and 4 REB.
              </p>

              <div className="proof-scoreboard-card__stats">
                <div className="proof-stat-item">
                  <strong>12</strong>
                  <span>PTS</span>
                </div>
                <div className="proof-stat-item">
                  <strong>4</strong>
                  <span>REB</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* [PROOF WALL] Main Telemetry Grid */}
      <section
        aria-labelledby="proof-wall-heading"
        className="basketball-record__section proof-wall-section"
      >
        <div className="basketball-record__section-inner">
          <div className="basketball-record__section-heading" data-reveal>
            <p className="basketball-record__kicker">
              <span>Proof Wall</span>
            </p>
            <h2 id="proof-wall-heading">Moments That Prove The Work.</h2>
            <p>
              Archival telemetry connecting directly to game outcomes, official
              rosters, and verified competition milestones.
            </p>
          </div>

          {/* [FILTERS] Gallery Lens */}
          <div
            aria-label="Filter proof moments by category"
            className="proof-gallery-filters"
            id={filterGroupId}
            role="toolbar"
          >
            {[
              { id: "all", label: "All Proof (6)" },
              { id: "international", label: "International (FIBA / ASG)" },
              { id: "national", label: "National & DBL" },
              { id: "equipment", label: "Uniform & Equipment" },
              { id: "development", label: "Development Pathway" },
            ].map((tab) => (
              <button
                aria-pressed={selectedFilter === tab.id}
                className={`proof-filter-btn${selectedFilter === tab.id ? " proof-filter-btn--active" : ""}`}
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Telemetry Cards Grid */}
          <div
            aria-label="Basketball archive records"
            className="proof-wall-grid"
          >
            {filteredMoments.map((moment) => {
              const isCurrent = moment.id === activeMomentId;
              return (
                <article
                  aria-pressed={isCurrent}
                  className={`proof-card${isCurrent ? " proof-card--active" : ""}`}
                  key={moment.id}
                  onClick={() => setActiveMomentId(moment.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveMomentId(moment.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="proof-card__telemetry-display">
                    <div className="proof-card__telemetry-header">
                      <span className="proof-card__category">
                        {moment.category}
                      </span>
                      <span
                        className="proof-card__badge-verified"
                        aria-label="Verified record"
                      >
                        VERIFIED <span aria-hidden="true">✓</span>
                      </span>
                    </div>

                    <div className="proof-card__metric-box">
                      <span className="proof-card__metric-label">
                        {moment.metricLabel}
                      </span>
                      <strong className="proof-card__metric-val">
                        {moment.metricValue}
                      </strong>
                    </div>

                    <div className="proof-card__overlay">
                      <p className="proof-card__title">{moment.title}</p>
                      <span className="proof-card__sub">{moment.subtitle}</span>
                    </div>
                  </div>

                  <div className="proof-card__meta">
                    <span className="proof-card__event">{moment.event}</span>
                    {moment.stats ? (
                      <strong className="proof-card__stat">
                        {moment.stats}
                      </strong>
                    ) : null}
                  </div>
                </article>
              );
            })}

            {/* [MEDIA SLOT] Reserved Verified Archive Slots */}
            <div className="proof-slot-card">
              <div className="proof-slot-card__inner">
                <span aria-hidden="true" className="proof-slot-card__icon">
                  📷
                </span>
                <p className="proof-slot-card__label">PROOF SLOT</p>
                <p className="proof-slot-card__desc">
                  DBL East Java Gloria 1 Run Photography
                </p>
                <span className="proof-slot-card__status">
                  Archive Clearance In Progress
                </span>
              </div>
            </div>

            <div className="proof-slot-card">
              <div className="proof-slot-card__inner">
                <span aria-hidden="true" className="proof-slot-card__icon">
                  📷
                </span>
                <p className="proof-slot-card__label">PROOF SLOT</p>
                <p className="proof-slot-card__desc">
                  DBL Academy International Tour Photography
                </p>
                <span className="proof-slot-card__status">
                  Archive Clearance In Progress
                </span>
              </div>
            </div>
          </div>

          {/* 5 Milestone Summary Badges */}
          <div
            aria-label="Verified basketball milestone summary"
            className="proof-milestones-bar"
          >
            {milestoneBadges.map((badge) => (
              <a
                className="proof-milestone-item"
                href={badge.href}
                key={badge.title}
                rel="noreferrer"
                target="_blank"
              >
                <div className="proof-milestone-item__header">
                  <strong>{badge.title}</strong>
                  <span aria-hidden="true" className="proof-verified-mark">
                    ✓
                  </span>
                </div>
                <span className="proof-milestone-item__detail">
                  {badge.detail}
                </span>
                <span className="proof-milestone-item__link">
                  Verify source ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* [JOURNEY STRIP] Career Navigation */}
      <section
        aria-labelledby="journey-strip-heading"
        className="basketball-record__section proof-journey-strip-section"
      >
        <div className="basketball-record__section-inner">
          <div className="proof-journey-strip-header">
            <h2 id="journey-strip-heading">Journey Progression</h2>
            <Link className="proof-journey-link" href="/basketball/journey">
              Follow full career timeline <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div
            aria-label="Key milestone timeline"
            className="proof-journey-strip"
          >
            {journeyStripItems.map((item, index) => (
              <div className="proof-journey-step" key={item.year + item.label}>
                <div className="proof-journey-step__dot" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <span className="proof-journey-step__year">{item.year}</span>
                <strong className="proof-journey-step__title">
                  {item.label}
                </strong>
                <p className="proof-journey-step__desc">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [FROM PHOTO TO PROOF] Detail Inspector */}
      <section
        aria-labelledby="photo-to-proof-heading"
        className="basketball-record__section proof-detail-inspector-section"
      >
        <div className="basketball-record__section-inner">
          <div className="basketball-record__section-heading">
            <p className="basketball-record__kicker">
              <span>From Record To Proof</span>
            </p>
            <h2 id="photo-to-proof-heading">
              Every Result Documented. Every Detail Verified.
            </h2>
            <p>
              Inspect individual moments with full event context, team role,
              verified statistical impact, and source accreditation.
            </p>
          </div>

          <div className="proof-inspector">
            {/* Active Telemetry Preview */}
            <div className="proof-inspector__preview">
              <div className="proof-inspector__telemetry-frame">
                <div className="proof-inspector__telemetry-banner">
                  <span className="proof-inspector__tag">
                    {activeMoment.category.toUpperCase()} RECORD
                  </span>
                  <span className="proof-inspector__ledger-id">
                    {activeMoment.ledgerId}
                  </span>
                </div>

                <div className="proof-inspector__telemetry-center">
                  <span className="proof-inspector__metric-title">
                    {activeMoment.metricLabel}
                  </span>
                  <strong className="proof-inspector__metric-highlight">
                    {activeMoment.metricValue}
                  </strong>
                  <p className="proof-inspector__event-title">
                    {activeMoment.title}
                  </p>
                  <span className="proof-inspector__location-year">
                    {activeMoment.locationYear}
                  </span>
                </div>

                <div className="proof-inspector__telemetry-footer">
                  <span className="proof-inspector__verified-note">
                    OFFICIAL COMPETITION EVIDENCE · FEDERATION RECORD ✓
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="proof-inspector__controls">
                <button
                  aria-label="Previous proof moment"
                  className="proof-ctrl-btn"
                  onClick={handlePrevMoment}
                  type="button"
                >
                  <span aria-hidden="true">←</span> Previous Moment
                </button>
                <span className="proof-inspector__counter">
                  {proofMoments.findIndex((m) => m.id === activeMomentId) + 1} /{" "}
                  {proofMoments.length}
                </span>
                <button
                  aria-label="Next proof moment"
                  className="proof-ctrl-btn"
                  onClick={handleNextMoment}
                  type="button"
                >
                  Next Moment <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* Event Metadata Sheet */}
            <div className="proof-inspector__meta-panel">
              <div className="proof-meta-row">
                <span className="proof-meta-label">EVENT</span>
                <strong className="proof-meta-value">
                  {activeMoment.event}
                </strong>
              </div>

              <div className="proof-meta-row">
                <span className="proof-meta-label">TEAM</span>
                <strong className="proof-meta-value">
                  {activeMoment.team}
                </strong>
              </div>

              <div className="proof-meta-row">
                <span className="proof-meta-label">ROLE</span>
                <strong className="proof-meta-value">
                  {activeMoment.role}
                </strong>
              </div>

              <div className="proof-meta-row">
                <span className="proof-meta-label">PROOF NOTE</span>
                <p className="proof-meta-desc">{activeMoment.proofNote}</p>
              </div>

              {activeMoment.stats ? (
                <div className="proof-meta-row">
                  <span className="proof-meta-label">STATISTICS</span>
                  <strong className="proof-meta-stat">
                    {activeMoment.stats}
                  </strong>
                </div>
              ) : null}

              {activeMoment.sourceLabel && activeMoment.sourceHref ? (
                <div className="proof-meta-row proof-meta-row--source">
                  <span className="proof-meta-label">SOURCE</span>
                  <a
                    className="proof-meta-source-link"
                    href={activeMoment.sourceHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {activeMoment.sourceLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              ) : null}

              {/* Related Moments Switcher */}
              <div className="proof-inspector__thumbnails">
                <span className="proof-meta-label">MOMENT SELECTOR</span>
                <div
                  aria-label="Moment selection buttons"
                  className="proof-selector-strip"
                  role="list"
                >
                  {proofMoments.map((moment) => (
                    <button
                      aria-label={`Select ${moment.title}`}
                      className={`proof-selector-btn${moment.id === activeMomentId ? " proof-selector-btn--selected" : ""}`}
                      key={moment.id}
                      onClick={() => setActiveMomentId(moment.id)}
                      type="button"
                    >
                      <span className="proof-selector-btn__cat">
                        {moment.category.slice(0, 3).toUpperCase()}
                      </span>
                      <span className="proof-selector-btn__val">
                        {moment.metricValue}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
