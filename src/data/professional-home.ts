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
    eyebrow: "Computer Science · Data Science · Software Systems",
    title: "I build practical software with clear technical boundaries.",
    description:
      "I’m Richie Linardi, a Computer Science student at Monash University Malaysia focused on data science, AI, automation, and reliable software engineering. My portfolio work prioritizes traceability, testing, and honest system boundaries over inflated demos.",
    tags: ["Python", "TypeScript", "Data & AI", "Automation", "System design"],
  },
  projects: [
    {
      title: "SPY Market Agent",
      description:
        "A leakage-aware SPY research and paper-trading system with explicit risk controls, audit artifacts, and fail-closed model gates. Live trading remains prohibited.",
      status: "v2.0.0-beta.1 released · Phase 5 scaffold active",
      tags: ["Python", "ML research", "FastAPI", "SQLite", "Alpaca paper"],
      href: "https://github.com/Linardi1328/spy-market-agent",
    },
    {
      title: "LedgerPilot AI",
      description:
        "A human-supervised accounting assistant foundation for turning synthetic invoice data into reviewable accounting recommendations while preserving deterministic controls and audit history.",
      status: "Phase 4 accounting decision engine foundation merged",
      tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic"],
      href: "https://github.com/Linardi1328/ledgerpilot-ai",
    },
    {
      title: "KHLIM Assist",
      description:
        "A multilingual event-support assistant foundation with typed knowledge retrieval, deterministic GREEN/YELLOW/RED decisions, and stored draft responses. Participant auto-replies remain disabled.",
      status: "v0.1 Phase 2 · AI FAQ Engine",
      tags: ["Python", "FastAPI", "OpenAI", "WhatsApp sandbox", "PostgreSQL"],
      href: "https://github.com/Linardi1328/khlim-assist",
    },
    {
      title: "Personal Project Operator",
      description:
        "A phone-first project command-center prototype that maps concise /ppo commands into local project-operator output before live external integrations are enabled.",
      status: "Phase 1.5 · Telegram routing preparation",
      tags: ["Node.js", "OpenClaw", "Telegram", "GitHub workflow"],
      href: "https://github.com/Linardi1328/personal-project-operator",
    },
  ] satisfies ProfessionalProject[],
  milestones: [
    {
      label: "Teaching",
      title: "Teaching Associate · FIT1045",
      description: "Teaching Associate for FIT1045 at Monash University.",
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
    "API design",
    "Automation",
    "Testing",
    "Type safety",
  ],
};
