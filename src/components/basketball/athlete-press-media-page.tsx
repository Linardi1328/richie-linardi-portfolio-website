"use client";

import Link from "next/link";
import { useState } from "react";

export type PressArticle = {
  id: string;
  category: "all-star" | "international" | "tournament" | "profile" | "academy";
  publisher: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  tag: string;
};

const pressArticles: readonly PressArticle[] = [
  {
    id: "dbl-all-star-2024",
    category: "all-star",
    publisher: "DBL Indonesia",
    title: "Skuad Putra Kopi Good Day DBL Indonesia All-Star 2024",
    excerpt:
      "Official announcement of the 2024 DBL Indonesia All-Star team following national selection camp in Jakarta.",
    date: "May 2024",
    href: "https://www.dbl.id/r/19689/skuad-putra-kopi-good-day-dbl-indonesia-all-star-2024",
    tag: "National Selection",
  },
  {
    id: "asg-2024-gold",
    category: "international",
    publisher: "IBL Indonesia",
    title: "Timnas Putra Indonesia Sabet Medali Emas ASG 2024",
    excerpt:
      "Official final recap and box score as Indonesia secures gold at the 2024 ASEAN Schools Games against the Philippines (56–54).",
    date: "June 2024",
    href: "https://iblindonesia.com/news/timnas-putra-indonesia-sabet-medali-emas-asg-2024",
    tag: "International Championship",
  },
  {
    id: "fiba-u18-2024",
    category: "international",
    publisher: "FIBA .basketball",
    title: "Richie Bertrand Linardi — FIBA U18 Asia Cup 2024",
    excerpt:
      "Official FIBA player record and tournament box scores across three continental championship games in Amman, Jordan.",
    date: "September 2024",
    href: "https://www.fiba.basketball/en/players/370084-richie-bertrand-linardi",
    tag: "Continental Tournament",
  },
  {
    id: "dbl-gloria-final",
    category: "tournament",
    publisher: "DBL Indonesia",
    title: "Richie Bertrand dan Kenangan Manis Bawa Gloria 1 ke Partai Final",
    excerpt:
      "Feature interview and retrospective on Richie's East Java final run and leadership with SMA Gloria 1 Surabaya.",
    date: "August 2023",
    href: "https://www.dbl.id/r/19150/richie-bertrand-dan-kenangan-manis-bawa-gloria-1-ke-partai-final",
    tag: "School Championship",
  },
  {
    id: "dbl-academy-2024",
    category: "academy",
    publisher: "DBL Indonesia",
    title:
      "Begini Wejangan Richie dan Kennie untuk DBL Academy Selection Team 2024",
    excerpt:
      "Advice and guidance from All-Star alumni to the incoming 2024 DBL Academy Selection Team.",
    date: "July 2024",
    href: "https://www.dbl.id/r/23090/begini-wejangan-richie-dan-kennie-untuk-dbl-academy-selection-team-2024",
    tag: "Academy Mentorship",
  },
  {
    id: "detik-thailand-2018",
    category: "academy",
    publisher: "Detik Sport",
    title: "Para Pebasket Muda Indonesia Ini Ikut Turnamen di Thailand",
    excerpt:
      "National coverage of DBL Academy Selection Team competing internationally in Thailand youth invitational tournament.",
    date: "August 2018",
    href: "https://sport.detik.com/basket/d-4164131/para-pebasket-muda-indonesia-ini-ikut-turnamen-di-thailand",
    tag: "International Youth",
  },
  {
    id: "dbl-malaysia-2019",
    category: "academy",
    publisher: "DBL Indonesia",
    title:
      "Giliran Tim DBL Academy Selection KU-13 Sabet Runner-up di Malaysia",
    excerpt:
      "Tournament recap of DBL Academy Selection KU-13 finishing runner-up at the international youth tournament in Malaysia.",
    date: "November 2019",
    href: "https://www.dbl.id/r/74/giliran-tim-dbl-academy-selection-ku-13-sabet-runner-up-di-malaysia",
    tag: "International Youth",
  },
  {
    id: "dbl-vegas-2022",
    category: "profile",
    publisher: "DBL Indonesia",
    title:
      "Ikuti Program DBL Academy, Richie Bertrand Punya Impian Jadi Pemain Profesional",
    excerpt:
      "Feature on development pathway, training at Impact Basketball in Las Vegas, and collegiate ambitions.",
    date: "August 2022",
    href: "https://www.dbl.id/r/9522/ikuti-program-dbl-academy-richie-bertrand-punya-impian-jadi-pemain-profesional",
    tag: "Player Feature",
  },
  {
    id: "porprov-viii-2023",
    category: "tournament",
    publisher: "Lenza Nasional",
    title: "Kota Surabaya Kawinkan Gelar Basket 5 x 5 PorProv VIII Jatim 2023",
    excerpt:
      "Tournament reporting on Surabaya's gold medal sweep at Pekan Olahraga Provinsi Jawa Timur VIII 2023.",
    date: "September 2023",
    href: "https://lenzanasional.com/kota-surabaya-kawinkan-gelar-basket-5-x-5-porprov-viii-jatim-2023/",
    tag: "Provincial Games",
  },
  {
    id: "fiba-3x3-profile",
    category: "international",
    publisher: "FIBA 3x3",
    title: "Richie Bertrand Linardi — Official FIBA 3x3 Profile",
    excerpt:
      "Official FIBA 3x3 federation profile and tournament registrations for national ranking.",
    date: "Official Federation",
    href: "https://play.fiba3x3.com/players/6d9184cf-ffc7-42c9-ad68-82d735b1a245",
    tag: "Federation Profile",
  },
];

const publishers = [
  {
    name: "DBL Indonesia",
    category: "Student League",
    url: "https://www.dbl.id",
  },
  {
    name: "FIBA .basketball",
    category: "World Federation",
    url: "https://www.fiba.basketball",
  },
  {
    name: "IBL Indonesia",
    category: "National League",
    url: "https://iblindonesia.com",
  },
  {
    name: "Detik Sport",
    category: "National Media",
    url: "https://sport.detik.com",
  },
  {
    name: "Lenza Nasional",
    category: "Regional Press",
    url: "https://lenzanasional.com",
  },
  {
    name: "Basketyuk",
    category: "Tournament Records",
    url: "https://basketyuk.id",
  },
] as const;

export function AthletePressMediaPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredArticles = pressArticles.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "international")
      return item.category === "international";
    if (activeFilter === "all-star")
      return item.category === "all-star" || item.category === "tournament";
    if (activeFilter === "academy")
      return item.category === "academy" || item.category === "profile";
    return true;
  });

  return (
    <article className="basketball-record press-media-page">
      {/* [HERO] Press & Media Archive */}
      <section
        aria-label="Press and media hero"
        className="basketball-record__hero press-hero"
      >
        <div className="basketball-record__hero-inner press-hero__inner">
          <div className="press-hero__copy" data-reveal>
            <p className="basketball-record__kicker">
              <span>Press &amp; Media Archive</span>
            </p>
            <h1 className="press-hero__title">
              Externally Documented. <br />
              Publicly Recognized.
            </h1>
            <p className="basketball-record__lede">
              A track record you can verify. Sourced exclusively from official
              sports platforms, federations, tournament records, and accredited
              journalism.
            </p>

            {/* Badges Strip */}
            <div className="press-hero__badge-strip">
              <div className="press-kpi-badge">
                <span className="press-kpi-badge__icon" aria-hidden="true">
                  📰
                </span>
                <span className="press-kpi-badge__label">
                  Official Platforms &amp; Media Outlets
                </span>
              </div>
              <div className="press-kpi-badge">
                <span className="press-kpi-badge__icon" aria-hidden="true">
                  🏆
                </span>
                <span className="press-kpi-badge__label">
                  Tournament Selections &amp; Championships
                </span>
              </div>
              <div className="press-kpi-badge">
                <span className="press-kpi-badge__icon" aria-hidden="true">
                  🌐
                </span>
                <span className="press-kpi-badge__label">
                  National Team &amp; International Exposure
                </span>
              </div>
              <div className="press-kpi-badge">
                <span className="press-kpi-badge__icon" aria-hidden="true">
                  ✓
                </span>
                <span className="press-kpi-badge__label">
                  Verified Across Digital &amp; Federation
                </span>
              </div>
            </div>
          </div>

          {/* Official Press Accreditation Frame */}
          <div
            className="press-hero__portrait-frame"
            data-reveal
            data-reveal-delay="1"
          >
            <div className="press-hero__portrait-inner">
              <div className="press-hero__credential-card">
                <div className="press-hero__credential-top">
                  <span className="press-hero__country-flag" aria-hidden="true">
                    🇮🇩
                  </span>
                  <span className="press-hero__credential-badge">
                    ACCREDITATION
                  </span>
                </div>
                <div className="press-hero__credential-player">
                  <span className="press-hero__credential-number">13</span>
                  <strong className="press-hero__credential-name">
                    RICHIE LINARDI
                  </strong>
                  <span className="press-hero__credential-squad">
                    INDONESIA SCHOOL NATIONAL TEAM
                  </span>
                </div>
                <div className="press-hero__credential-records">
                  <div className="press-hero__record-row">
                    <span>ASEAN Schools Games</span>
                    <strong>Gold Medal (56–54)</strong>
                  </div>
                  <div className="press-hero__record-row">
                    <span>FIBA U18 Asia Cup</span>
                    <strong>3 Games Contested</strong>
                  </div>
                  <div className="press-hero__record-row">
                    <span>DBL Indonesia</span>
                    <strong>All-Star 2024</strong>
                  </div>
                  <div className="press-hero__record-row">
                    <span>Monash University</span>
                    <strong>Student-Athlete</strong>
                  </div>
                </div>
                <div className="press-hero__credential-foot">
                  <span>VERIFIED PUBLIC RECORD ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [FEATURE STORY] Primary Coverage */}
      <section
        aria-labelledby="featured-story-heading"
        className="basketball-record__section press-feature-section"
      >
        <div className="basketball-record__section-inner">
          <div className="press-feature-card" data-reveal>
            <div className="press-feature-card__media">
              <div className="press-feature-card__media-container">
                <div className="press-feature-card__telemetry">
                  <div className="press-feature-card__telemetry-head">
                    <span className="press-feature-card__org">
                      DBL INDONESIA
                    </span>
                    <span className="press-feature-card__status">
                      FEATURE STORY
                    </span>
                  </div>
                  <div className="press-feature-card__telemetry-kpi">
                    <span className="press-feature-card__telemetry-num">
                      2024
                    </span>
                    <span className="press-feature-card__telemetry-label">
                      ALL-STAR SQUAD SELECTION
                    </span>
                  </div>
                  <p className="press-feature-card__telemetry-quote">
                    &ldquo;Richie Bertrand Linardi: Membawa Semangat Gloria 1
                    Menuju Panggung Nasional dan Internasional&rdquo;
                  </p>
                  <div className="press-feature-card__telemetry-source">
                    ARCHIVED AT DBL.ID · TAG/5037/RICHIE-BERTRAND-LINARDI
                  </div>
                </div>
              </div>
            </div>

            <div className="press-feature-card__content">
              <span className="press-feature-badge">FEATURED COVERAGE</span>
              <h2 id="featured-story-heading" className="press-feature-title">
                DBL Indonesia All-Star &amp; National Team Pathway
              </h2>
              <p className="press-feature-desc">
                In-depth reporting on Richie Linardi&apos;s journey from DBL
                Academy starting in 2016 through East Java high-school
                competition, 2024 All-Star selection, and representing Indonesia
                at the ASEAN Schools Games and FIBA U18 Asia Cup.
              </p>

              <ul className="press-feature-bullets">
                <li>
                  <span aria-hidden="true" className="press-check">
                    ✓
                  </span>{" "}
                  Player profile and development progression
                </li>
                <li>
                  <span aria-hidden="true" className="press-check">
                    ✓
                  </span>{" "}
                  Role accountability &amp; court-side leadership
                </li>
                <li>
                  <span aria-hidden="true" className="press-check">
                    ✓
                  </span>{" "}
                  ASEAN Schools Games gold medal with Indonesia
                </li>
                <li>
                  <span aria-hidden="true" className="press-check">
                    ✓
                  </span>{" "}
                  Monash University Malaysia student-athlete balance
                </li>
              </ul>

              <div className="press-feature-actions">
                <a
                  className="press-feature-btn"
                  href="https://www.dbl.id/tag/5037/richie-bertrand-linardi"
                  rel="noreferrer"
                  target="_blank"
                >
                  Read Coverage Archive <span aria-hidden="true">↗</span>
                </a>
                <span className="press-feature-source">
                  Publisher: DBL Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [SOURCE BAR] Publishers & Organizations */}
      <section
        aria-label="Verified sports publishers and organizations"
        className="press-source-bar"
      >
        <div className="press-source-bar__inner">
          <p className="press-source-bar__label">PUBLISHED &amp; RECORDED BY</p>
          <div className="press-source-bar__badges">
            {publishers.map((pub) => (
              <a
                className="press-publisher-badge"
                href={pub.url}
                key={pub.name}
                rel="noreferrer"
                target="_blank"
              >
                <span className="press-publisher-badge__category">
                  {pub.category}
                </span>
                <strong className="press-publisher-badge__name">
                  {pub.name}
                </strong>
                <span
                  aria-hidden="true"
                  className="press-publisher-badge__verified"
                >
                  ✓
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* [FILTERS] Coverage Filters & [ARCHIVE GRID] */}
      <section
        aria-labelledby="press-archive-heading"
        className="basketball-record__section press-grid-section"
      >
        <div className="basketball-record__section-inner">
          <div className="basketball-record__section-heading">
            <p className="basketball-record__kicker">
              <span>Verified Coverage Index</span>
            </p>
            <h2 id="press-archive-heading">Media Records &amp; Reporting.</h2>
            <p>
              Direct links to published tournament recaps, team rosters, player
              profiles, and news features.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            aria-label="Filter media articles by topic"
            className="press-filters"
            role="toolbar"
          >
            {[
              { id: "all", label: "All Records (10)" },
              { id: "international", label: "International & FIBA" },
              { id: "all-star", label: "DBL All-Star & School" },
              { id: "academy", label: "Academy & Development" },
            ].map((tab) => (
              <button
                aria-pressed={activeFilter === tab.id}
                className={`press-filter-btn${activeFilter === tab.id ? " press-filter-btn--active" : ""}`}
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Media Articles Grid */}
          <div
            aria-label="Verified media articles"
            className="press-articles-grid"
          >
            {filteredArticles.map((article) => (
              <article className="press-article-card" key={article.id}>
                <div className="press-article-card__header">
                  <span className="press-article-card__tag">{article.tag}</span>
                  <span className="press-article-card__date">
                    {article.date}
                  </span>
                </div>

                <h3 className="press-article-card__title">
                  <a href={article.href} rel="noreferrer" target="_blank">
                    {article.title}
                  </a>
                </h3>

                <p className="press-article-card__excerpt">{article.excerpt}</p>

                <div className="press-article-card__footer">
                  <span className="press-article-card__pub">
                    {article.publisher}
                  </span>
                  <a
                    aria-label={`Open article: ${article.title}`}
                    className="press-article-card__link"
                    href={article.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open Article <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* [QUOTE SLOT] Personal Quote */}
      <section
        aria-label="Athlete philosophy quote"
        className="basketball-record__section press-quote-section"
      >
        <div className="basketball-record__section-inner">
          <blockquote className="press-quote-block">
            <span aria-hidden="true" className="press-quote-mark">
              “
            </span>
            <p className="press-quote-text">
              I don&apos;t separate these worlds. I use the same skillset to win
              in both: discipline, preparation, objective review, and execution
              under pressure.
            </p>
            <cite className="press-quote-cite">— Richie Linardi</cite>
          </blockquote>
        </div>
      </section>

      {/* [FOOTER CTA] Media Kit / Inquiry */}
      <section
        aria-labelledby="media-inquiry-heading"
        className="basketball-record__section press-footer-cta-section"
      >
        <div className="basketball-record__section-inner">
          <div className="press-inquiry-card">
            <div className="press-inquiry-copy">
              <span className="basketball-record__kicker">
                Verified · Documented · Trusted
              </span>
              <h2 id="media-inquiry-heading" className="press-inquiry-title">
                Explore The Proof. Follow The Journey.
              </h2>
              <p className="press-inquiry-desc">
                For press inquiries, athletic opportunities, tournament
                schedules, or media asset verification, reach out directly.
              </p>
            </div>

            <div className="press-inquiry-actions">
              <Link className="press-inquiry-btn" href="/contact">
                Open Contact Channels <span aria-hidden="true">→</span>
              </Link>
              <Link
                className="press-inquiry-btn press-inquiry-btn--secondary"
                href="/basketball/gallery"
              >
                View Proof Gallery <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
