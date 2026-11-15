import { portfolioPhotos } from "@/data/portfolio-photos";

export type ProvenanceCategory =
  | "1. Approved original media"
  | "2. Approved derivative/crop"
  | "3. Design-reference evidence only"
  | "4. Generated decorative diagram"
  | "5. Unverified or potentially misleading asset";

export type MediaItem = {
  id: string;
  filename: string;
  targetRoute: string;
  mediaType:
    "image/jpeg" | "image/png" | "image/webp" | "image/svg+xml" | "video/mp4";
  provenance: ProvenanceCategory;
  caption: string;
  altText: string;
  creditSource: string;
  usageStatus: "VERIFIED" | "LICENSED" | "REVIEW_REQUIRED";
  mobileBehavior: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  tags?: readonly string[];
  verificationBasis?: string;
  boundaryNote?: string;
};

export const mediaManifest: readonly MediaItem[] = [
  ...Object.entries(portfolioPhotos).map(([id, photo]): MediaItem => ({
    id: `owner-photo-${id}`,
    filename: photo.src,
    targetRoute: photo.route,
    mediaType: "image/webp",
    provenance: "2. Approved derivative/crop",
    caption: photo.caption,
    altText: photo.alt,
    creditSource:
      id === "fibaU18"
        ? "Owner-supplied tournament action photo · FIBA U18 Asia Cup 2024"
        : "Richie Linardi · supplied personal photo archive",
    usageStatus: "LICENSED",
    verificationBasis:
      id === "fibaU18"
        ? "Owner-supplied photograph of Richie Linardi (No. 13) representing Indonesia at the FIBA U18 Asia Cup 2024 with explicit portfolio release authorization. Optimized to WebP without generative modifications."
        : "Supplied by Richie through his Professional and Athlete Drive folders; owner explicitly authorized website use. Optimized from the original photographs without generated content.",
    mobileBehavior:
      "Responsive image with intrinsic dimensions, preserved framing, reserved layout space, and lazy loading below the fold.",
    width: photo.width,
    height: photo.height,
  })),
  {
    id: "spy-market-architecture-diagram",
    filename: "/projects/spy-market/architecture-diagram.svg",
    targetRoute: "/projects/spy-market-agent",
    mediaType: "image/svg+xml",
    provenance: "4. Generated decorative diagram",
    caption:
      "AXIOM QUANTUM · Walk-Forward Research Engine & Paper-Only Safety Gates",
    altText:
      "Technical system architecture diagram showing AXIOM QUANTUM data ingestion, regime detection, 7 ML models, deterministic safety gate, Alpaca paper execution, and SQLite audit trail",
    creditSource:
      "Public source repository specification (Linardi1328/spy-market-agent)",
    usageStatus: "VERIFIED",
    verificationBasis:
      "Derived strictly from src/data/project-registry.ts spy-market-agent specification (walk-forward research, deterministic gates, paper execution).",
    boundaryNote:
      "No live trading execution; no automated order routing to production accounts; paper trading scaffold only.",
    mobileBehavior:
      "Responsive SVG with 16:9 intrinsic viewBox (800x450); fluid scaling with high-contrast vector lines; zero layout shift.",
    width: 800,
    height: 450,
    aspectRatio: "16/9",
    tags: ["software", "architecture", "data-science", "safety-gates"],
  },
  {
    id: "ppo-architecture-diagram",
    filename: "/projects/personal-project-operator/operator-architecture.svg",
    targetRoute: "/projects/personal-project-operator",
    mediaType: "image/svg+xml",
    provenance: "4. Generated decorative diagram",
    caption:
      "Personal Project Operator · Telegram/OpenClaw Command Layer & Explicit Write Gate",
    altText:
      "Architecture diagram showing operator phone interface, live GitHub state, deterministic planning, controlled write gate, and bounded run lifecycle",
    creditSource:
      "Public source repository specification (Linardi1328/personal-project-operator)",
    usageStatus: "VERIFIED",
    verificationBasis:
      "Derived strictly from src/data/project-registry.ts personal-project-operator specification (Telegram/OpenClaw command layer, live GitHub state, write gate, bounded run).",
    boundaryNote:
      "Zero unprompted write operations; requires explicit operator review before remote mutations or push actions.",
    mobileBehavior:
      "Responsive SVG with 16:9 intrinsic viewBox (800x450); scalable vector layout with zero layout shift.",
    width: 800,
    height: 450,
    aspectRatio: "16/9",
    tags: ["software", "architecture", "automation", "github-api"],
  },
  {
    id: "moncity-dashboard",
    filename: "/projects/moncity/moncity-power-bi-dashboard.webp",
    targetRoute: "/projects/moncity-data-warehouse",
    mediaType: "image/webp",
    provenance: "2. Approved derivative/crop",
    caption:
      "MonCity Operations Intelligence — original Power BI dashboard from FIT3003, Monash University Malaysia, Semester 2, 2026. Academic coursework, not a commercial deployment. AI assistance acknowledged in the original submission.",
    altText:
      "MonCity Operations Intelligence dashboard showing annual bookings, known maintenance costs by type, keyed accidents by reported error category, and bookings by passenger age group.",
    creditSource: "Richie Linardi · owner-supplied FIT3003 dashboard export",
    usageStatus: "VERIFIED",
    verificationBasis:
      "Genuine owner-supplied dashboard, optimized to WebP; owner explicitly requested publication. Institutional permission has not been confirmed.",
    mobileBehavior:
      "Responsive image; preserved aspect ratio; full-size link for chart readability.",
    width: 2000,
    height: 1296,
    tags: ["academic", "power-bi", "data-science"],
  },
  {
    id: "moncity-poster",
    filename: "/projects/moncity/moncity-poster-redacted.webp",
    targetRoute: "/projects/moncity-data-warehouse",
    mediaType: "image/webp",
    provenance: "2. Approved derivative/crop",
    caption:
      "MonCity academic poster — FIT3003, Monash University Malaysia, Semester 2, 2026. Original coursework visual with student ID removed. AI assistance acknowledged in the original submission. Not a commercial deployment.",
    altText:
      "MonCity academic poster summarizing the data warehousing project and its visual analytical outputs, with student identification removed.",
    creditSource: "Richie Linardi · owner-supplied FIT3003 poster",
    usageStatus: "VERIFIED",
    verificationBasis:
      "Genuine owner-supplied poster, optimized to WebP and redacted; owner explicitly requested publication. Institutional permission has not been confirmed.",
    mobileBehavior:
      "Responsive portrait image with full-size link; no cropped content.",
    width: 1132,
    height: 1600,
    tags: ["academic", "poster", "data-science"],
  },
] as const;

export function getMediaByRoute(targetRoute: string): readonly MediaItem[] {
  return mediaManifest.filter((item) => item.targetRoute === targetRoute);
}

export function getMediaById(id: string): MediaItem | undefined {
  return mediaManifest.find((item) => item.id === id);
}
