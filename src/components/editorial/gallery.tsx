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
  return (
    <>
      <PageIntro
        eyebrow="Personal Photo Archive"
        title="Moments that define the competitive journey."
        description="On the court, with teammates, and at the podium. An authentic collection of high-resolution photographs documenting competition milestones across Da Nang and Jakarta."
      />

      <section className="section container section--compact gallery-section">
        <div className="gallery-toolbar">
          <p className="gallery-count" aria-live="polite">
            <span data-count="all">3 photographs</span>
            <span data-count="indonesia">2 photographs</span>
            <span data-count="all-star">1 photograph</span>
          </p>

          <fieldset className="filter-tabs">
            <legend className="sr-only">
              Filter photographs by competition
            </legend>
            {[
              ["all", "All photos (3)"],
              ["indonesia", "Indonesia (2)"],
              ["all-star", "DBL All-Star (1)"],
            ].map(([id, label]) => (
              <label className="filter-label" key={id}>
                <input
                  type="radio"
                  name="photo-category"
                  id={`photo-filter-${id}`}
                  value={id}
                  aria-label={label}
                  defaultChecked={id === "all"}
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
