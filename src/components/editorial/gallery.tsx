"use client";

import { useState } from "react";
import Link from "next/link";
import { PortfolioPhotograph } from "@/components/ui/portfolio-photograph";
import {
  portfolioPhotos,
  type PortfolioPhotoId,
} from "@/data/portfolio-photos";
import { PageIntro } from "./shared";

type GalleryPhotoItem = {
  id: PortfolioPhotoId;
  category: "indonesia" | "all-star";
  title: string;
  location: string;
  year: string;
  provenance: string;
};

const photos: GalleryPhotoItem[] = [
  {
    id: "gold",
    category: "indonesia",
    title: "ASEAN Schools Games 2024 Gold Medal",
    location: "Da Nang, Vietnam",
    year: "2024",
    provenance:
      "Richie Linardi supplied photo archive · Approved derivative crop",
  },
  {
    id: "team",
    category: "indonesia",
    title: "Indonesia National Team Celebration",
    location: "Da Nang, Vietnam",
    year: "2024",
    provenance:
      "Richie Linardi supplied photo archive · Approved derivative crop",
  },
  {
    id: "fibaU18",
    category: "indonesia",
    title: "FIBA U18 Asia Cup 2024",
    location: "Amman, Jordan",
    year: "2024",
    provenance:
      "Owner-supplied tournament action photograph · FIBA U18 Asia Cup 2024",
  },
  {
    id: "allStar",
    category: "all-star",
    title: "DBL Indonesia All-Star 2024",
    location: "Jakarta, Indonesia",
    year: "2024",
    provenance:
      "Richie Linardi supplied photo archive · Approved derivative crop",
  },
];

export function AthleteGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allCount = photos.length;
  const indonesiaCount = photos.filter(
    (p) => p.category === "indonesia",
  ).length;
  const allStarCount = photos.filter((p) => p.category === "all-star").length;

  return (
    <>
      <PageIntro
        eyebrow="Personal Photo Archive"
        title="Moments that define the competitive journey."
        description="On the court, with teammates, and at the podium. An authentic collection of high-resolution photographs documenting competition milestones across Amman, Da Nang and Jakarta."
      />

      <section
        className="section container section--compact gallery-section"
        data-active-filter={activeFilter}
      >
        <div className="gallery-toolbar">
          <p className="gallery-count" aria-live="polite">
            <span data-count="all">{`${allCount} photographs`}</span>
            <span data-count="indonesia">{`${indonesiaCount} photographs`}</span>
            <span data-count="all-star">{`${allStarCount} photograph`}</span>
          </p>

          <fieldset className="filter-tabs">
            <legend className="sr-only">
              Filter photographs by competition
            </legend>
            {[
              ["all", `All photos (${allCount})`],
              ["indonesia", `Indonesia (${indonesiaCount})`],
              ["all-star", `DBL All-Star (${allStarCount})`],
            ].map(([id, label]) => (
              <label className="filter-label" key={id}>
                <input
                  type="radio"
                  name="photo-category"
                  id={`photo-filter-${id}`}
                  value={id}
                  aria-label={label}
                  checked={activeFilter === id}
                  onChange={(e) => setActiveFilter(e.target.value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
        </div>

        <div className="card-grid gallery-grid">
          {photos.map((photo) => {
            const photoData = portfolioPhotos[photo.id];
            return (
              <article
                className="gallery-card"
                data-category={photo.category}
                key={photo.id}
              >
                <a
                  href={photoData.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open full resolution photograph: ${photo.title} (${photo.location}, ${photo.year})`}
                >
                  <PortfolioPhotograph photo={photo.id} />
                </a>

                <div className="gallery-meta">
                  <span>{photo.location}</span>
                  <span>·</span>
                  <span>{photo.year}</span>
                </div>

                <h2 className="card-heading">{photo.title}</h2>
                <p className="gallery-provenance">{photo.provenance}</p>

                <p style={{ marginTop: "0.75rem" }}>
                  <a
                    className="text-link"
                    href={photoData.src}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View full image asset ↗
                  </a>
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Cross-World Bridge */}
      <section className="section container inline-invitation">
        <div>
          <p className="eyebrow">The Other Side</p>
          <h2>Explore Richie’s engineering & research portfolio.</h2>
        </div>
        <div className="button-row">
          <Link className="button button--primary" href="/projects">
            Technical systems portfolio ↗
          </Link>
          <Link className="button button--plain" href="/basketball">
            Athlete home →
          </Link>
        </div>
      </section>
    </>
  );
}
