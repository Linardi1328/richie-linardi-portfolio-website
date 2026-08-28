export type ProfessionalProject = {
  description: string;
  href: string;
  status: string;
  tags: string[];
  title: string;
};

export type ProfessionalMilestone = {
  description: string;
  label: string;
  title: string;
};

export const professionalHomeData = {
  navigation: [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Technical Focus" },
  ],
  hero: {
    eyebrow: "Computer Science · Data Science · AI Systems",
    title: "I build domain-specific AI systems with controlled automation.",
    description:
      "I’m Richie Linardi, a Computer Science student at Monash University Malaysia focused on data science, AI, automation, and reliable software engineering. My active work is being consolidated into larger platforms where AI adds reasoning, natural-language interfaces, and bounded automation without replacing deterministic core systems.",
    tags: ["Python", "TypeScript", "Applied AI", "Automation", "System design"],
  },
  projects: [
    {
      title: "KHLIM Digital Ecosystem",
      description:
        "A modular sports-business platform for KHLIM Basketball Academy spanning family accounts, programmes, memberships, payments, scheduling, operations, and athlete development. KHLIM Assist is being absorbed as its AI customer-intelligence layer, with receptionist, operations, and future sports-intelligence capabilities behind fail-closed controls.",
      status: "Platform consolidation active · AI foundation in development",
      tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "AI agents"],
      href: "https://github.com/Linardi1328/khlim-digital-ecosystem",
    },
    {
      title: "LedgerPilot AI",
      description:
        "A human-supervised accounting operations platform that combines secure document intake, deterministic accounting controls, review workflows, and an approval-gated AI operations layer for explanations and exception assistance.",
      status: "Phase 5 review work active · AI operations foundation in development",
      tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Applied AI"],
      href: "https://github.com/Linardi1328/ledgerpilot-ai",
    },
    {
      title: "RBL Media Intelligence",
      description:
        "An evidence-driven sports media pipeline evolving from the RBL Content Engine. ProofLab-style verification is being integrated directly into the content workflow so future AI generation must use verified claims and remain human-approved before publication.",
      status: "Content Engine + verification consolidation active",
      tags: ["Python", "Verification", "Generative AI", "Content systems", "Human review"],
      href: "https://github.com/Linardi1328/rbl-content-engine",
    },
    {
      title: "Personal Project Operator",
      description:
        "A phone-first command center for coordinating development across my active platforms. It is evolving toward specialized planning and review agents while keeping GitHub writes, execution, and other consequential actions behind deterministic approval policies.",
      status: "Agent operations foundation in development",
      tags: ["Node.js", "Agents", "GitHub", "OpenClaw", "Automation"],
      href: "https://github.com/Linardi1328/personal-project-operator",
    },
    {
      title: "Market Intelligence Platform",
      description:
        "A risk-controlled quantitative research system currently centered on SPY, with leakage-aware ML, walk-forward research, auditable shadow/paper infrastructure, and a new read-only AI analyst boundary for explaining verified evidence without controlling signals or execution.",
      status: "SPY v2.0.0-beta.1 · AI analyst foundation in development",
      tags: ["Python", "ML research", "Risk controls", "FastAPI", "AI analyst"],
      href: "https://github.com/Linardi1328/spy-market-agent",
    },
  ] satisfies ProfessionalProject[],
  milestones: [
    {
      label: "Platform direction",
      title: "Consolidated applied-AI systems",
      description:
        "Consolidating related sub-projects into larger domain platforms so verification, automation, data, and AI capabilities strengthen one shared product roadmap instead of fragmenting development.",
    },
    {
      label: "Education",
      title: "Bachelor of Computer Science",
      description:
        "Monash University Malaysia · Data Science specialization · Expected 2027.",
    },
  ] satisfies ProfessionalMilestone[],
  technicalFocus: [
    "Python",
    "FastAPI",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Machine learning",
    "AI agents",
    "Tool calling",
    "Automation",
    "Human-in-the-loop systems",
  ],
};
