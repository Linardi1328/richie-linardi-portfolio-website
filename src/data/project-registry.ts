import type { PortfolioProject, ProjectCardData } from "@/types/project";

export const projectRegistry = [
  {
    slug: "spy-market-agent",
    title: "SPY Market Agent",
    summary:
      "A leakage-aware SPY market-research and paper-operation system with deterministic safety gates, audit artifacts, walk-forward research, and explicit fail-closed execution boundaries.",
    repositoryUrl: "https://github.com/Linardi1328/spy-market-agent",
    phase: "Phase 5",
    release: "v2.0.0-beta.1",
    currentStatus: "v2.0.0-beta.1 · Phase 5 safety/recovery scaffold active",
    statusVerifiedAt: "2026-08-31",
    catalogueState: "featured",
    sortOrder: 10,
    tags: ["Python", "ML research", "FastAPI", "SQLite", "Alpaca paper"],
    boundaries: [
      "Experimental research software; not investment advice.",
      "No approved shadow or paper model currently exists.",
      "New Phase 5 broker submission remains blocked pending separate owner authorization.",
      "Live trading is prohibited.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/spy-market-agent",
      },
      {
        kind: "release",
        label: "Public v2.0.0-beta.1 release state",
      },
      {
        kind: "documentation",
        label: "Phase 5 production-paper specification and recovery runbook",
      },
    ],
  },
  {
    slug: "personal-project-operator",
    title: "Personal Project Operator",
    summary:
      "A phone-controlled project command center that combines live GitHub state, deterministic planning, controlled write approvals, and a bounded development-run lifecycle for managing personal software projects.",
    repositoryUrl: "https://github.com/Linardi1328/personal-project-operator",
    phase: "Phase 6 complete",
    currentStatus: "Phase 6 complete · integrated user acceptance",
    statusVerifiedAt: "2026-08-31",
    catalogueState: "catalogue",
    sortOrder: 20,
    tags: ["Node.js", "GitHub", "Telegram", "OpenClaw", "Automation"],
    boundaries: [
      "Production operations remain separately permission-gated.",
      "External writes use explicit approval contracts rather than implicit agent autonomy.",
      "GitHub remains the project source of truth.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/personal-project-operator",
      },
      {
        kind: "tests",
        label: "Phase 6 integrated user-acceptance contract",
      },
    ],
  },
  {
    slug: "ledgerpilot-ai",
    title: "LedgerPilot AI",
    summary:
      "A human-supervised accounting workflow platform that turns document evidence into reviewable accounting decisions while preserving deterministic controls, reviewer authority, audit history, and reconciliation evidence.",
    repositoryUrl: "https://github.com/Linardi1328/ledgerpilot-ai",
    phase: "Phase 6",
    currentStatus:
      "Phase 6 · bank reconciliation foundation and controlled human outcomes",
    statusVerifiedAt: "2026-08-31",
    catalogueState: "catalogue",
    sortOrder: 30,
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Next.js"],
    boundaries: [
      "AI and rule output remains recommendation input until an authorized human outcome exists.",
      "No autonomous payments or supplier-bank-detail changes.",
      "No production accounting-platform or MyInvois integration is implied by the current prototype.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/ledgerpilot-ai",
      },
      {
        kind: "documentation",
        label: "Human review and reconciliation domain documentation",
      },
      {
        kind: "tests",
        label:
          "Backend, authorization, review, and reconciliation test coverage",
      },
    ],
  },
  {
    slug: "khlim-assist",
    title: "KHLIM Assist",
    summary:
      "A multilingual event-support assistant foundation with typed knowledge retrieval, AI interpretation, deterministic GREEN/YELLOW/RED policy decisions, and stored draft responses for human-controlled operations.",
    repositoryUrl: "https://github.com/Linardi1328/khlim-assist",
    phase: "v0.1 Phase 2",
    currentStatus: "v0.1 Phase 2 · AI FAQ Engine · auto-replies disabled",
    statusVerifiedAt: "2026-08-31",
    catalogueState: "catalogue",
    sortOrder: 40,
    tags: ["Python", "FastAPI", "PostgreSQL", "OpenAI", "WhatsApp"],
    boundaries: [
      "Participant AI auto-replies remain disabled.",
      "Provider-generated drafts must remain grounded in approved knowledge and deterministic policy decisions.",
      "Production handoff, registration/payment lookup, and autonomous workflows are not yet implemented.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/khlim-assist",
      },
      {
        kind: "documentation",
        label:
          "Phase 2 architecture, privacy, taxonomy, and acceptance documentation",
      },
    ],
  },
  {
    slug: "rbl-content-engine",
    title: "RBL Content Engine",
    summary:
      "An evidence-driven manual content pipeline that separates factual project verification from platform strategy, producing platform-native drafts and storyboards while preserving human approval before publication.",
    repositoryUrl: "https://github.com/Linardi1328/rbl-content-engine",
    phase: "Phase 0 manual pilot",
    currentStatus: "Phase 0 · manual pilot · human approval required",
    statusVerifiedAt: "2026-08-31",
    catalogueState: "catalogue",
    sortOrder: 50,
    tags: [
      "Python",
      "Content systems",
      "Verification",
      "Storyboards",
      "Offline pipeline",
    ],
    boundaries: [
      "Project claims must trace to project evidence.",
      "Phase 0 does not publish content or message customers.",
      "Human approval is required before publication.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/rbl-content-engine",
      },
      {
        kind: "documentation",
        label: "Phase 0 evidence and platform-intelligence specification",
      },
    ],
  },
  {
    slug: "khlim-digital-ecosystem",
    title: "KHLIM Digital Sports Ecosystem",
    summary:
      "A production-oriented sports platform connecting public discovery, family accounts, programmes, memberships, billing, staff operations, and future athlete services through one shared backend and account ecosystem.",
    repositoryUrl: "https://github.com/Linardi1328/khlim-digital-ecosystem",
    phase: "Integration / pre-alpha hardening",
    currentStatus:
      "Integration / pre-alpha hardening · real staff access and account controls connected",
    statusVerifiedAt: "2026-08-31",
    catalogueState: "catalogue",
    sortOrder: 60,
    tags: ["Next.js", "NestJS", "PostgreSQL", "Supabase", "Prisma"],
    boundaries: [
      "Production payment success must remain provider-authoritative and fail closed without a real gateway.",
      "Unsupported admin operations remain blocked until backend integration exists.",
      "The native Super App remains a later client of the same platform rather than a separate backend.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/khlim-digital-ecosystem",
      },
      {
        kind: "tests",
        label:
          "Browser, authorization, persistence, payment, and build workflows",
      },
      {
        kind: "documentation",
        label: "Pre-alpha test plan and production architecture documentation",
      },
    ],
  },
  {
    slug: "event-twin",
    title: "Event Twin",
    summary:
      "A hackathon-built event operations prototype that simulates disruptions, forecasts operational impact, recommends deterministic recovery plans, supports check-in and team formation, and synchronizes organizer, judge, and participant views in-session.",
    repositoryUrl: "https://github.com/Linardi1328/ai-hackathon-promptwars",
    phase: "Hackathon MVP",
    currentStatus: "Hackathon MVP · public deterministic frontend demo",
    statusVerifiedAt: "2026-08-31",
    catalogueState: "candidate",
    sortOrder: 70,
    tags: ["React", "TypeScript", "Vite", "Simulation", "Vitest"],
    boundaries: [
      "Prototype state is client-side and in-memory.",
      "No production authentication, backend, optimization solver, or production LLM is connected.",
      "Operational forecasts and recommendations are deterministic prototype logic.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/ai-hackathon-promptwars",
      },
      {
        kind: "deployment",
        label: "Public hackathon deployment",
        href: "https://event-twin-hackathon-202-f5263.web.app",
      },
      {
        kind: "tests",
        label: "Vitest simulation and interaction coverage",
      },
    ],
  },
] as const satisfies readonly PortfolioProject[];

export const publicProjectCatalogue = projectRegistry
  .filter((project) => project.catalogueState !== "candidate")
  .toSorted((left, right) => left.sortOrder - right.sortOrder);

export const candidateProjects = projectRegistry
  .filter((project) => project.catalogueState === "candidate")
  .toSorted((left, right) => left.sortOrder - right.sortOrder);

export const projectCards: ProjectCardData[] = publicProjectCatalogue.map(
  (project) => ({
    description: project.summary,
    href: project.repositoryUrl,
    status: project.currentStatus,
    tags: [...project.tags],
    title: project.title,
  }),
);

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projectRegistry.find((project) => project.slug === slug);
}
