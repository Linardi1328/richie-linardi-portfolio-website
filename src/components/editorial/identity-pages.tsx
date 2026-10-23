import Link from "next/link";
import { foundationPages } from "@/data/foundation-pages";
import type { FoundationSection } from "@/components/layout/foundation-route-page";
import { publicProjectCatalogue } from "@/data/project-registry";
import { PageIntro, SectionHeading } from "./shared";

export function IdentityPage({
  kind,
}: {
  kind: "about" | "education" | "experience";
}) {
  const data = foundationPages[kind];
  const photo = {
    about: "professional",
    education: "monash",
    experience: "hackathon",
  } as const;
  const titles = {
    about: "A curious mind. A competitive spirit.",
    education: "A foundation for what comes next.",
    experience: "Learning by doing. Growing with others.",
  };
  return (
    <main>
      <PageIntro
        eyebrow={data.eyebrow}
        title={titles[kind]}
        description={data.description}
        photo={photo[kind]}
      />
      <section className="section container section--compact">
        <SectionHeading
          label={kind === "about" ? "What shapes my work" : "The details"}
          title={
            kind === "about"
              ? "One person. More than one perspective."
              : kind === "education"
                ? "From understanding to application."
                : "Responsibility, in different settings."
          }
        />
        <div className="card-grid card-grid--two">
          {(data.sections as readonly FoundationSection[]).map(
            (section, index) => (
              <article className="content-card" key={section.title}>
                <p className="eyebrow">
                  <span className="section-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  {section.eyebrow}
                </p>
                <h2 className="card-heading">{section.title}</h2>
                <p>{section.description}</p>
                {section.items ? (
                  <ul className="detail-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ),
          )}
        </div>
      </section>
      {kind === "experience" ? (
        <section className="section container">
          <SectionHeading
            label="Independent projects"
            title="The work is open to explore."
          />
          <div className="link-list">
            {publicProjectCatalogue.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <span>{project.title}</span>
                <span>{project.phase} ↗</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      <section className="section container inline-invitation">
        <h2>Keep exploring.</h2>
        <div className="button-row">
          <Link className="button button--primary" href={data.primaryHref}>
            {data.primaryLabel} ↗
          </Link>
          <Link
            className="button button--plain"
            href={kind === "about" ? "/basketball" : "/about"}
          >
            {kind === "about" ? "Meet the athlete" : "More about me"} →
          </Link>
        </div>
      </section>
    </main>
  );
}
