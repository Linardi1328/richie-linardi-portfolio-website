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

  const sectionHeadings = {
    about: {
      label: "Guiding Dimensions",
      title: "Academic grounding, engineering, and athletic discipline.",
    },
    education: {
      label: "Academic Progression",
      title: "From mathematical foundations to applied software design.",
    },
    experience: {
      label: "Operational & Engineering Roles",
      title: "Responsibility across systems, operations, and audit.",
    },
  };

  const flagshipProject = publicProjectCatalogue.find(
    (p) => p.slug === "khlim-3x3-live",
  );
  const coreResumeSlugs = [
    "kynexa",
    "rivora",
    "spy-market-agent",
    "tourism-dashboard",
    "personal-portfolio",
  ];
  const coreProjects = publicProjectCatalogue.filter((p) =>
    coreResumeSlugs.includes(p.slug),
  );

  return (
    <main>
      <PageIntro
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        photo={photo[kind]}
      />

      {kind === "about" ? (
        <section className="section container section--compact">
          <div className="credentials-bar">
            <div className="credential-item">
              <span className="credential-label">Academic Record</span>
              <strong>Monash University Malaysia</strong>
              <span className="credential-sub">
                B.Comp.Sc. (Data Science) · CGPA 3.50
              </span>
            </div>
            <div className="credential-item">
              <span className="credential-label">Engineering Venture</span>
              <strong>R&E Technologies</strong>
              <span className="credential-sub">
                Independent Builder (Venture in development)
              </span>
            </div>
            <div className="credential-item">
              <span className="credential-label">Athletic Honors</span>
              <strong>National Competitor</strong>
              <span className="credential-sub">
                ASEAN Schools Games Gold · DBL All-Star (2024)
              </span>
            </div>
          </div>
        </section>
      ) : null}

      {kind === "education" ? (
        <section className="section container section--compact">
          <div className="credentials-bar">
            <div className="credential-item">
              <span className="credential-label">Degree</span>
              <strong>Bachelor of Computer Science</strong>
              <span className="credential-sub">
                Specialization in Data Science
              </span>
            </div>
            <div className="credential-item">
              <span className="credential-label">Performance</span>
              <strong>CGPA 3.50 / 4.00</strong>
              <span className="credential-sub">
                Expected Graduation Nov 2027
              </span>
            </div>
            <div className="credential-item">
              <span className="credential-label">High School Foundation</span>
              <strong>SMA Katolik Gloria 1 Surabaya</strong>
              <span className="credential-sub">Graduated 2024</span>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section container section--compact">
        <SectionHeading
          label={sectionHeadings[kind].label}
          title={sectionHeadings[kind].title}
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
        <>
          <section className="section container">
            <SectionHeading
              label="Selected Technical Projects"
              title="Verified systems from Résumé V4."
              link={{ href: "/projects", label: "View complete catalogue" }}
            >
              Leading with KHLIM 3x3 Live V1, followed by active platforms in
              development and academic research systems.
            </SectionHeading>

            {flagshipProject ? (
              <div
                className="flagship-hero-card"
                style={{ marginBottom: "2rem" }}
              >
                <div className="flagship-hero-card__badge">
                  <span>Lead Flagship System · Deployed 24 Oct 2026</span>
                  <span>118 Matches · 2 Courts · 4 Divisions</span>
                </div>
                <h3 className="flagship-hero-card__title">
                  <Link href={`/projects/${flagshipProject.slug}`}>
                    {flagshipProject.title}
                  </Link>
                </h3>
                <p className="flagship-hero-card__desc">
                  {flagshipProject.summary}
                </p>
                <div className="flagship-hero-card__actions">
                  <a
                    className="button button--primary"
                    href="https://prod.khlim-3x3-live.workers.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open live deployment ↗
                  </a>
                  <Link
                    className="button button--plain"
                    href={`/projects/${flagshipProject.slug}`}
                  >
                    Case study details →
                  </Link>
                </div>
              </div>
            ) : null}

            <div className="link-list">
              {coreProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <span>{project.title}</span>
                  <span>{project.phase} ↗</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="section container section--tinted">
            <SectionHeading
              label="Supporting Ventures Note"
              title="Distinct boundaries from software projects."
            />
            <div className="card-grid card-grid--two">
              <article className="content-card">
                <p className="eyebrow">Engineering Venture</p>
                <h3 className="card-heading">R&E Technologies</h3>
                <p>
                  Venture in development (2026–Present). Independent software
                  and sports operations architecture. Kept distinct from
                  corporate registration or client claims.
                </p>
              </article>
              <article className="content-card">
                <p className="eyebrow">Athlete & Media Identity</p>
                <h3 className="card-heading">RBL</h3>
                <p>
                  Personal athlete brand representing competitive basketball
                  standards, collegiate athletics, and community storytelling.
                </p>
              </article>
            </div>
          </section>
        </>
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
