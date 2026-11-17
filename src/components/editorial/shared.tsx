import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PortfolioPhotograph } from "@/components/ui/portfolio-photograph";
import type { PortfolioPhotoId } from "@/data/portfolio-photos";
import type { PortfolioProject } from "@/types/project";

export function PageIntro({
  eyebrow,
  title,
  description,
  photo,
}: {
  eyebrow: string;
  title: string;
  description: string;
  photo?: PortfolioPhotoId;
}) {
  return (
    <header
      className={`page-intro container ${photo ? "page-intro--photo" : ""}`}
    >
      <div className="page-intro__copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{description}</p>
      </div>
      {photo ? <PortfolioPhotograph photo={photo} preload /> : null}
    </header>
  );
}

export function SectionHeading({
  label,
  title,
  children,
  link,
}: {
  label: string;
  title: string;
  children?: ReactNode;
  link?: { href: string; label: string };
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
      {link ? (
        <Link className="text-link" href={link.href}>
          {link.label} <span aria-hidden="true">↗</span>
        </Link>
      ) : null}
    </div>
  );
}

const projectThemes: Record<
  string,
  { code: string; label: string; motif: string }
> = {
  "khlim-3x3-live": {
    code: "3X3",
    label: "Live tournament platform",
    motif: "chart",
  },
  kynexa: {
    code: "KY",
    label: "Registration platform",
    motif: "nodes",
  },
  rivora: {
    code: "RV",
    label: "Managed tournament ops",
    motif: "chart",
  },
  "spy-market-agent": {
    code: "AQ",
    label: "Research & intelligence",
    motif: "chart",
  },
  "moncity-data-warehouse": {
    code: "MC",
    label: "Business intelligence",
    motif: "chart",
  },
  "tourism-dashboard": {
    code: "TM",
    label: "Interactive visualization",
    motif: "chart",
  },
  "personal-portfolio": {
    code: "RL",
    label: "Personal web system",
    motif: "nodes",
  },
  "personal-project-operator": {
    code: "PPO",
    label: "Developer operations",
    motif: "nodes",
  },
  "ledgerpilot-ai": {
    code: "LP",
    label: "Accounting workflows",
    motif: "ledger",
  },
  "khlim-assist": {
    code: "KA",
    label: "Conversational intelligence",
    motif: "nodes",
  },
  "rbl-content-engine": {
    code: "RBL",
    label: "Content & verification",
    motif: "ledger",
  },
  "khlim-digital-ecosystem": {
    code: "KH",
    label: "Sports infrastructure",
    motif: "chart",
  },
};

const projectLogos: Record<
  string,
  {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
> = {
  kynexa: {
    src: "/products/kynexa/website-lockup-v1-960x320.webp",
    alt: "KYNEXA official logo",
    width: 960,
    height: 320,
  },
  rivora: {
    src: "/products/rivora/website-lockup-v1-960x320.webp",
    alt: "RIVORA official logo",
    width: 960,
    height: 320,
  },
};

export function ProjectCard({
  project,
  index = 0,
}: {
  project: PortfolioProject;
  index?: number;
}) {
  const theme = projectThemes[project.slug] ?? {
    code: "RL",
    label: "Applied systems",
    motif: "nodes",
  };
  const logo = projectLogos[project.slug];
  const isMoncity = project.slug === "moncity-data-warehouse";

  return (
    <article className="project-card">
      <Link
        className={`project-cover project-cover--${index % 3}${isMoncity ? " project-cover--moncity" : ""}${logo ? " project-cover--logo" : ""}`}
        href={`/projects/${project.slug}`}
        aria-label={`Explore ${project.title}`}
      >
        <span className="project-cover__label">{theme.label}</span>
        {isMoncity ? (
          <Image
            src="/projects/moncity/moncity-power-bi-dashboard.webp"
            alt="MonCity Operations Intelligence dashboard preview"
            width={2000}
            height={1296}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
            className="project-cover__moncity-image"
          />
        ) : logo ? (
          <div className="project-cover__logo-wrap">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 360px"
              className="project-cover__logo-image"
            />
          </div>
        ) : (
          <>
            <strong>
              {theme.code}
              <span>·</span>
            </strong>
            <svg
              viewBox="0 0 360 120"
              aria-hidden="true"
              className={`project-motif project-motif--${theme.motif}`}
            >
              <path
                d={
                  theme.motif === "chart"
                    ? "M0 96 L35 76 L65 89 L103 39 L141 62 L180 34 L218 50 L260 12 L300 27 L360 4"
                    : theme.motif === "ledger"
                      ? "M18 20 H340 M18 48 H270 M18 76 H310 M18 104 H215"
                      : "M30 60 H140 L195 20 H320 M140 60 L195 100 H320"
                }
              />
              <circle cx="140" cy="60" r="5" />
              <circle cx="320" cy="20" r="5" />
              <circle cx="320" cy="100" r="5" />
            </svg>
          </>
        )}
        <span className="project-cover__arrow" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="project-card__body">
        <p className="eyebrow">{project.phase}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-card__footer">
          <span>Reviewed {project.statusVerifiedAt}</span>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Read ${project.title} case study`}
          >
            Explore ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
