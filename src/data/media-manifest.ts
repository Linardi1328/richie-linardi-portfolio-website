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
  mediaType: "image/jpeg" | "image/png" | "image/svg+xml" | "video/mp4";
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
  {
    id: "richie-professional-portrait",
    filename: "/portraits/richie-professional.jpg",
    targetRoute: "/about",
    mediaType: "image/jpeg",
    provenance: "1. Approved original media",
    caption: "Richie Linardi · Professional portrait",
    altText: "Richie Linardi wearing a black blazer and white shirt",
    creditSource: "Owner personal archive",
    usageStatus: "REVIEW_REQUIRED",
    verificationBasis: "Personal photograph owned by Richie Linardi.",
    boundaryNote:
      "Subject to final personal review before commercial release; approved for preview prototype.",
    mobileBehavior:
      "Contained in a responsive 4:5 aspect ratio card; priority loading above the fold on About and Resume; zero layout shift.",
    width: 420,
    height: 420,
    aspectRatio: "1/1",
    tags: ["professional", "portrait", "identity"],
  },
  {
    id: "spy-market-architecture-diagram",
    filename: "/projects/spy-market/architecture-diagram.svg",
    targetRoute: "/projects/spy-market-agent",
    mediaType: "image/svg+xml",
    provenance: "4. Generated decorative diagram",
    caption:
      "SPY Market Agent · Walk-Forward Research Engine & Paper-Only Safety Gates",
    altText:
      "Technical system architecture diagram showing SPY Market Agent data ingestion, regime detection, 7 ML models, deterministic safety gate, Alpaca paper execution, and SQLite audit trail",
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
    id: "ledgerpilot-review-pipeline",
    filename: "/projects/ledgerpilot/human-review-pipeline.svg",
    targetRoute: "/projects/ledgerpilot-ai",
    mediaType: "image/svg+xml",
    provenance: "4. Generated decorative diagram",
    caption:
      "LedgerPilot AI · 6-Step Human-in-the-Loop Accounting Workflow & Review Gates",
    altText:
      "Diagram of 6-step human-supervised accounting process: Intake, Validation, Recommendation, Human Review, Audit Log, and ERP Export",
    creditSource:
      "Public source repository specification (Linardi1328/ledgerpilot-ai)",
    usageStatus: "VERIFIED",
    verificationBasis:
      "Derived strictly from src/data/project-registry.ts ledgerpilot-ai specification (evidence intake, rule validation, advisory recommendation, human reviewer gate, audit history, bank reconciliation foundation).",
    boundaryNote:
      "Autonomous financial transactions and automated payments strictly prohibited; human approval required for every journal mutation.",
    mobileBehavior:
      "Responsive SVG with 16:9 intrinsic viewBox (800x450); fluid scaling across desktop, tablet, and mobile with high-contrast text.",
    width: 800,
    height: 450,
    aspectRatio: "16/9",
    tags: ["software", "architecture", "human-in-the-loop", "accounting"],
  },
  {
    id: "khlim-policy-engine",
    filename: "/projects/khlim/policy-decision-engine.svg",
    targetRoute: "/projects/khlim-assist",
    mediaType: "image/svg+xml",
    provenance: "4. Generated decorative diagram",
    caption:
      "KHLIM Assist · Multilingual Assistant Workflow, Policy Decisions, and Organizer Oversight",
    altText:
      "Workflow diagram of participant message arrival, typed knowledge retrieval, GREEN/YELLOW/RED policy engine, draft response preview, and organizer oversight with auto-replies disabled",
    creditSource:
      "Public source repository specification (Linardi1328/khlim-assist)",
    usageStatus: "VERIFIED",
    verificationBasis:
      "Derived strictly from src/data/project-registry.ts khlim-assist specification (typed knowledge retrieval, policy engine, draft preview, organizer oversight).",
    boundaryNote:
      "Direct participant auto-replies strictly disabled; all draft communications require explicit organizer sign-off.",
    mobileBehavior:
      "Responsive SVG with 16:9 intrinsic viewBox (800x450); scales cleanly to all viewports without horizontal overflow.",
    width: 800,
    height: 450,
    aspectRatio: "16/9",
    tags: ["software", "architecture", "controlled-ai", "safety-engine"],
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
] as const;

export function getMediaByRoute(targetRoute: string): readonly MediaItem[] {
  return mediaManifest.filter((item) => item.targetRoute === targetRoute);
}

export function getMediaById(id: string): MediaItem | undefined {
  return mediaManifest.find((item) => item.id === id);
}
