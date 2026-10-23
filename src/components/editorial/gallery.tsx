import { PortfolioPhotograph } from "@/components/ui/portfolio-photograph";
import {
  portfolioPhotos,
  type PortfolioPhotoId,
} from "@/data/portfolio-photos";
import { PageIntro } from "./shared";

const photos: { id: PortfolioPhotoId; category: string; label: string }[] = [
  { id: "gold", category: "indonesia", label: "A medal and a memory" },
  { id: "team", category: "indonesia", label: "The people who made it happen" },
  { id: "allStar", category: "all-star", label: "In the flow of the game" },
];

export function AthleteGallery() {
  return (
    <>
      <PageIntro
        eyebrow="Personal photo archive"
        title="Some moments stay with you."
        description="On the court, alongside the team, and after the final buzzer. A collection of photographs from my basketball journey."
      />
      <section className="section container section--compact gallery-section">
        <div className="gallery-toolbar">
          <p className="gallery-count">
            <span data-count="all">3 photographs</span>
            <span data-count="indonesia">2 photographs</span>
            <span data-count="all-star">1 photograph</span>
          </p>
          <fieldset className="filter-tabs">
            <legend className="sr-only">Filter photographs</legend>
            {[
              ["all", "All photos"],
              ["indonesia", "Indonesia"],
              ["all-star", "DBL All-Star"],
            ].map(([id, label]) => (
              <label className="filter-label" key={id}>
                <input
                  type="radio"
                  name="photo-category"
                  id={`photo-filter-${id}`}
                  value={id}
                  defaultChecked={id === "all"}
                />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
        </div>
        <div className="card-grid gallery-grid">
          {photos.map((photo) => (
            <article
              className="gallery-card"
              data-category={photo.category}
              key={photo.id}
            >
              <a
                href={portfolioPhotos[photo.id].src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open full photograph: ${photo.label}`}
              >
                <PortfolioPhotograph photo={photo.id} />
              </a>
              <h2 className="card-heading">{photo.label}</h2>
              <p>
                From Richie’s personal archive <span aria-hidden="true">↗</span>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
