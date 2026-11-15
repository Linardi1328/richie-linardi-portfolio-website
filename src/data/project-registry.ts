import type { PortfolioProject, ProjectCardData } from "@/types/project";

export const projectRegistry = [
  {
    slug: "khlim-3x3-live",
    title: "KHLIM 3x3 Live V1",
    summary:
      "A real-time tournament scoring engine, automated bracket calculation system, and edge-distributed spectator feed deployed for 118 matches across 2 courts and 4 divisions at the KHLIM 3x3 Tournament.",
    deploymentUrl: "https://prod.khlim-3x3-live.workers.dev/",
    repositoryUrl: "https://github.com/Linardi1328",
    phase: "Deployed event system",
    release: "v1.0.0",
    currentStatus:
      "Deployed 24 Oct 2026 · 118 matches · 2 courts · 4 divisions",
    statusVerifiedAt: "2026-10-24",
    catalogueState: "featured",
    sortOrder: 5,
    tags: [
      "Cloudflare Workers",
      "Google Apps Script",
      "Google Sheets",
      "Live Scoring",
      "Edge Feed",
    ],
    boundaries: [
      "Completed one-day tournament deployment executed on 24 October 2026.",
      "Live deployment availability reflects documented Cloudflare Worker runtime.",
      "Decoupled public spectator read traffic from courtside scoring sheets to preserve execution quotas.",
      "Tournament experience provided requirements for caching and offline tolerance in next-generation platforms.",
    ],
    evidence: [
      {
        kind: "deployment",
        label: "Live Cloudflare Worker deployment",
        href: "https://prod.khlim-3x3-live.workers.dev/",
      },
      {
        kind: "documentation",
        label: "Tournament operations and bracket schema specification",
      },
    ],
  },
  {
    slug: "kynexa",
    title: "KYNEXA",
    summary:
      "A sports opportunity and registration platform connecting athletes, teams, and tournament organisers with role-based authorization and registration validation.",
    repositoryUrl: "https://github.com/Linardi1328",
    phase: "In development",
    currentStatus:
      "Next.js/TypeScript and Supabase/PostgreSQL registration · pilot acceptance ongoing",
    statusVerifiedAt: "2026-11-14",
    catalogueState: "catalogue",
    sortOrder: 15,
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Role Authorization",
    ],
    boundaries: [
      "In active development; pilot acceptance validation ongoing.",
      "No real-user public registration or commercial launch is claimed.",
      "Supports player profiles and tournament sign-up workflows under human review.",
    ],
    evidence: [
      {
        kind: "documentation",
        label: "Architecture, database schema, and authorization specification",
      },
    ],
  },
  {
    slug: "rivora",
    title: "RIVORA",
    summary:
      "A developer-managed basketball tournament operations platform providing branded spectator experiences, live schedules, real-time scores, standings, and automated bracket progression.",
    repositoryUrl: "https://github.com/Linardi1328",
    phase: "In development",
    currentStatus:
      "Tournament operations and branded spectator feeds · V1 validation ongoing",
    statusVerifiedAt: "2026-11-14",
    catalogueState: "catalogue",
    sortOrder: 25,
    tags: [
      "TypeScript",
      "React",
      "Cloudflare",
      "Tournament Operations",
      "Live Brackets",
    ],
    boundaries: [
      "In active development; V1 operational validation ongoing.",
      "Developer-managed platform; not launched as a self-service SaaS product.",
      "Distinct from the completed KHLIM 3x3 Live V1 event deployment.",
    ],
    evidence: [
      {
        kind: "documentation",
        label: "Tournament lifecycle and bracket progression specification",
      },
    ],
  },
  {
    slug: "spy-market-agent",
    title: "AXIOM QUANTUM",
    summary:
      "A leakage-aware SPY market-research and paper-operation system with deterministic safety gates, audit artifacts, walk-forward research, and explicit fail-closed execution boundaries.",
    repositoryUrl: "https://github.com/Linardi1328",
    phase: "Quantitative research",
    release: "v2.0.0-beta.1",
    currentStatus:
      "SPY research baseline · walk-forward evaluation and independent risk controls",
    statusVerifiedAt: "2026-10-22",
    catalogueState: "featured",
    sortOrder: 35,
    tags: [
      "Python",
      "pandas",
      "scikit-learn",
      "Walk-forward ML",
      "Risk Controls",
    ],
    boundaries: [
      "Experimental research software; not investment advice.",
      "No approved shadow or paper model currently exists.",
      "Live trading is strictly prohibited; no profitability claims are made.",
      "Per résumé V4, private repository links remain unlinked.",
    ],
    evidence: [
      {
        kind: "release",
        label: "Public v2.0.0-beta.1 research release state",
      },
      {
        kind: "documentation",
        label: "Walk-forward evaluation and risk boundary specifications",
      },
    ],
  },
  {
    slug: "tourism-dashboard",
    title: "Tourism in Malaysia Interactive Dashboard",
    summary:
      "An interactive data visualisation dashboard analysing Malaysian tourism recovery patterns, hotel occupancy rates, and regional expenditure public datasets across historical and post-pandemic periods.",
    deploymentUrl: "https://linardi1328.github.io/FIT2179_DV2/",
    repositoryUrl: "https://github.com/Linardi1328/FIT2179_DV2",
    phase: "Completed academic project",
    release: "v1.0",
    currentStatus: "Completed academic work · public interactive web dashboard",
    statusVerifiedAt: "2026-04-30",
    catalogueState: "catalogue",
    sortOrder: 45,
    tags: [
      "JavaScript",
      "HTML/CSS",
      "Data Visualisation",
      "Public Datasets",
      "Vega-Lite",
    ],
    boundaries: [
      "Completed academic project for FIT2179 Data Visualisation.",
      "Visualises public tourism datasets through interactive maps and time-series charts.",
    ],
    evidence: [
      {
        kind: "deployment",
        label: "Public interactive dashboard deployment",
        href: "https://linardi1328.github.io/FIT2179_DV2/",
      },
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/FIT2179_DV2",
      },
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    summary:
      "A cinematic editorial portfolio and dual-identity digital profile engineered with Next.js, React, TypeScript, and Tailwind CSS, featuring verified project case studies, optimized photography, accessibility, and automated CI validation.",
    repositoryUrl:
      "https://github.com/Linardi1328/richie-linardi-portfolio-website",
    phase: "In development",
    currentStatus:
      "Active project · evidence-led case studies and automated validation",
    statusVerifiedAt: "2026-11-14",
    catalogueState: "catalogue",
    sortOrder: 55,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Accessibility",
      "CI",
    ],
    boundaries: [
      "Active portfolio project in continuous development.",
      "Strictly adheres to content truth, verified credentials, and responsive accessibility gates.",
    ],
    evidence: [
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/richie-linardi-portfolio-website",
      },
    ],
  },
  {
    slug: "personal-project-operator",
    title: "Personal Project Operator",
    summary:
      "A phone-controlled project command center that combines live GitHub state, deterministic planning, controlled write approvals, and a bounded development-run lifecycle for managing personal software projects.",
    repositoryUrl: "https://github.com/Linardi1328/personal-project-operator",
    phase: "Approval-gated operator",
    currentStatus: "Phone-controlled project operations · read-only by default",
    statusVerifiedAt: "2026-10-22",
    catalogueState: "catalogue",
    sortOrder: 65,
    tags: ["Node.js", "GitHub", "Telegram", "Automation"],
    boundaries: [
      "Production operations remain separately permission-gated.",
      "External writes use explicit approval contracts rather than implicit agent autonomy.",
      "GitHub remains the project source of truth.",
    ],
    evidence: [
      {
        kind: "documentation",
        label: "Public README reviewed 22 October 2026",
        href: "https://github.com/Linardi1328/personal-project-operator/blob/main/README.md",
      },
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
    slug: "khlim-digital-ecosystem",
    title: "KHLIM Digital Sports Ecosystem",
    summary:
      "A production-oriented sports platform connecting public discovery, family accounts, programmes, memberships, billing, staff operations, and future athlete services through one shared backend and account ecosystem.",
    repositoryUrl: "https://github.com/Linardi1328/khlim-digital-ecosystem",
    phase: "Integration / hardening",
    currentStatus:
      "Public/member and admin surfaces · integration and workflow hardening",
    statusVerifiedAt: "2026-10-22",
    catalogueState: "catalogue",
    sortOrder: 75,
    tags: ["Next.js", "NestJS", "PostgreSQL", "Supabase", "Prisma"],
    boundaries: [
      "Production payment success must remain provider-authoritative and fail closed without a real gateway.",
      "Unsupported admin operations remain blocked until backend integration exists.",
    ],
    evidence: [
      {
        kind: "documentation",
        label: "Public README reviewed 22 October 2026",
        href: "https://github.com/Linardi1328/khlim-digital-ecosystem/blob/main/README.md",
      },
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
    ],
  },
  {
    slug: "rbl-content-engine",
    title: "RBL Content Engine",
    summary:
      "An evidence-driven manual content pipeline that separates factual project verification from platform strategy, producing platform-native drafts and storyboards while preserving human approval before publication.",
    repositoryUrl: "https://github.com/Linardi1328/rbl-content-engine",
    phase: "V1 workflow completion",
    currentStatus:
      "Offline weekly packages implemented · downstream publishing approval-gated",
    statusVerifiedAt: "2026-10-22",
    catalogueState: "catalogue",
    sortOrder: 85,
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
        kind: "documentation",
        label: "Public README reviewed 22 October 2026",
        href: "https://github.com/Linardi1328/rbl-content-engine/blob/main/README.md",
      },
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/rbl-content-engine",
      },
    ],
  },
  {
    slug: "ledgerpilot-ai",
    title: "LedgerPilot AI",
    summary:
      "A human-supervised accounting workflow platform that turns document evidence into reviewable accounting decisions while preserving deterministic controls, reviewer authority, audit history, and reconciliation evidence.",
    repositoryUrl: "https://github.com/Linardi1328/ledgerpilot-ai",
    phase: "Human review workflow",
    currentStatus:
      "Archival reference · excluded from active portfolio showcase",
    statusVerifiedAt: "2026-10-22",
    catalogueState: "unlisted",
    sortOrder: 100,
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Next.js"],
    boundaries: [
      "Archival project entry; excluded from active portfolio presentation.",
      "AI and rule output remains recommendation input until an authorized human outcome exists.",
      "No autonomous payments or supplier-bank-detail changes.",
    ],
    evidence: [
      {
        kind: "documentation",
        label: "Public README reviewed 22 October 2026",
        href: "https://github.com/Linardi1328/ledgerpilot-ai/blob/main/README.md",
      },
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/ledgerpilot-ai",
      },
    ],
  },
  {
    slug: "khlim-assist",
    title: "KHLIM Assist",
    summary:
      "A multilingual event-support assistant foundation with typed knowledge retrieval, AI interpretation, deterministic policy decisions, and stored draft responses for human-controlled operations.",
    repositoryUrl: "https://github.com/Linardi1328/khlim-assist",
    phase: "AI FAQ foundation",
    currentStatus:
      "Archival reference · excluded from active portfolio showcase",
    statusVerifiedAt: "2026-10-22",
    catalogueState: "unlisted",
    sortOrder: 110,
    tags: ["Python", "FastAPI", "PostgreSQL", "OpenAI", "WhatsApp"],
    boundaries: [
      "Archival project entry; excluded from active portfolio presentation.",
      "Participant AI auto-replies remain disabled.",
      "Provider-generated drafts must remain grounded in approved knowledge.",
    ],
    evidence: [
      {
        kind: "documentation",
        label: "Public README reviewed 22 October 2026",
        href: "https://github.com/Linardi1328/khlim-assist/blob/main/README.md",
      },
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/khlim-assist",
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
    sortOrder: 120,
    tags: ["React", "TypeScript", "Vite", "Simulation", "Vitest"],
    boundaries: [
      "Prototype state is client-side and in-memory.",
      "No production authentication, backend, optimization solver, or production LLM is connected.",
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
    ],
  },
] as const satisfies readonly PortfolioProject[];

export const publicProjectCatalogue: readonly PortfolioProject[] =
  projectRegistry
    .filter(
      (project: PortfolioProject) =>
        project.catalogueState !== "candidate" &&
        project.catalogueState !== "unlisted",
    )
    .toSorted((left, right) => left.sortOrder - right.sortOrder);

export const candidateProjects: readonly PortfolioProject[] = projectRegistry
  .filter((project: PortfolioProject) => project.catalogueState === "candidate")
  .toSorted((left, right) => left.sortOrder - right.sortOrder);

export const projectCards: ProjectCardData[] = publicProjectCatalogue.map(
  (project) => ({
    deploymentUrl: project.deploymentUrl,
    description: project.summary,
    href: project.deploymentUrl ?? project.repositoryUrl,
    status: project.currentStatus,
    tags: [...project.tags],
    title: project.title,
  }),
);

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projectRegistry.find((project) => project.slug === slug);
}
