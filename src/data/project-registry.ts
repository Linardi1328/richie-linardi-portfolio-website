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
    caseStudy: {
      problem:
        "Courtside scoring and bracket management at multi-division 3x3 tournaments were historically reliant on paper sheets or uncoordinated manual entries, creating score calculation delays, risk of bracket progression errors, and physical congestion around the tournament control desk.",
      intendedUsers:
        "Tournament directors, table scorekeepers, court marshals, competing 3x3 athletes, and live on-site/remote spectators.",
      personalContribution:
        "End-to-end architecture and implementation: engineered Google Apps Script scoring triggers, automated tiebreaker and bracket progression calculations, and built the edge-distributed Cloudflare Workers spectator feed.",
      technicalApproach:
        "Architected a decoupled edge read layer using Cloudflare Workers to cache and distribute match states, shielding the underlying Google Sheets and Apps Script backend from concurrent spectator read spikes during peak tournament hours.",
      verifiedOutcomes:
        "Successfully delivered live scoring and automated division brackets across 118 matches, 2 courts, and 4 divisions during the one-day event on 24 October 2026 with zero court downtime. Highlighted requirements for local offline tolerance in future platforms.",
    },
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
      "An Athlete Passport and sports opportunity platform connecting athletes, teams, and tournament organisers with role-based authorization, competition records, and registration validation.",
    repositoryUrl: "https://github.com/Linardi1328",
    phase: "In development",
    currentStatus:
      "Athlete Passport vision & tournament registration in development · pilot acceptance ongoing",
    statusVerifiedAt: "2026-11-15",
    catalogueState: "catalogue",
    sortOrder: 15,
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Role Authorization",
      "Athlete Passport",
    ],
    caseStudy: {
      problem:
        "Grassroots and amateur athletes lack a consolidated, portable competition passport, while tournament organizers struggle with manual document verification, scattered team rosters, and unstandardized entry eligibility.",
      intendedUsers:
        "Competitive basketball athletes, developmental academies, club managers, and tournament organizers seeking streamlined player registration.",
      personalContribution:
        "Product vision and full-stack engineering: designing database models, authentication roles, athlete passport schemas, and tournament registration workflows.",
      technicalApproach:
        "Full-stack Next.js and TypeScript application backed by Supabase and PostgreSQL, implementing row-level security policies, role-based access control, and human-in-the-loop document validation.",
      verifiedOutcomes:
        "Core athlete profile, competition history, and tournament sign-up flows implemented and undergoing pilot acceptance testing. Credible athlete assessment remains a long-term exploratory direction; no commercial launch or federation certification claimed.",
    },
    boundaries: [
      "In active development; pilot acceptance validation ongoing.",
      "No claims of association certification, official federation endorsement, commercial launch, or unrestricted production registration.",
      "Supports athlete profiles, verified competition records, and human-supervised registration workflows.",
      "Credible athlete assessment represents a long-term exploration direction.",
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
      "Developer-managed tournament operations & spectator feeds · V1 operational validation ongoing",
    statusVerifiedAt: "2026-11-15",
    catalogueState: "catalogue",
    sortOrder: 25,
    tags: [
      "TypeScript",
      "React",
      "Cloudflare",
      "Tournament Operations",
      "Live Brackets",
    ],
    caseStudy: {
      problem:
        "Amateur basketball tournaments require dedicated digital operations—dynamic schedules, court assignments, real-time score updates, and automated bracket progression—without the overhead and lock-in of generic SaaS platforms.",
      intendedUsers:
        "Tournament organizers, court coordinators, statistics teams, and spectators following tournament live progression.",
      personalContribution:
        "System architecture and operational design: building real-time match state synchronization, bracket progression engines, and branded responsive spectator feeds.",
      technicalApproach:
        "Modular TypeScript and React architecture with edge distribution on Cloudflare, engineered for low-latency score updates, clean bracket rendering, and resilience against event-day connectivity constraints.",
      verifiedOutcomes:
        "Core tournament lifecycle, live bracket logic, and spectator views implemented and undergoing V1 operational validation. Distinct from the completed KHLIM 3x3 Live event deployment.",
    },
    boundaries: [
      "In active development; V1 operational validation ongoing.",
      "Developer-managed tournament platform; not launched as a self-service commercial SaaS product.",
      "Distinct from the completed KHLIM 3x3 Live V1 event deployment.",
      "Designed to address event-day offline tolerance, scoring ergonomics, and multi-division bracket progression.",
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
    caseStudy: {
      problem:
        "Quantitative market models frequently suffer from lookahead bias, data leakage, and unconstrained paper risk assumptions when translating research concepts into systematic software.",
      intendedUsers:
        "Quantitative developers and data science researchers evaluating walk-forward model reliability and risk boundary enforcement.",
      personalContribution:
        "Design and implementation of leak-free feature pipelines, walk-forward validation harnesses, backtesting logic, and fail-closed deterministic execution boundaries.",
      technicalApproach:
        "Python, pandas, and scikit-learn pipeline implementing strict chronological training-test splits, transaction cost modeling, drawdown limits, and independent safety gates.",
      verifiedOutcomes:
        "Released v2.0.0-beta.1 quantitative research baseline. Explicitly confined to historical walk-forward research; live trading is strictly prohibited with zero profitability claims.",
    },
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
    statusVerifiedAt: "2026-05-31",
    catalogueState: "catalogue",
    sortOrder: 45,
    tags: [
      "JavaScript",
      "HTML/CSS",
      "Data Visualisation",
      "Public Datasets",
      "Vega-Lite",
      "TopoJSON",
    ],
    boundaries: [
      "Completed academic project for FIT2179 Data Visualisation.",
      "Visualises public tourism datasets through interactive maps and time-series charts.",
    ],
    caseStudy: {
      academicContext: {
        institution: "Monash University Malaysia",
        unit: "FIT2179 — Data Visualisation",
        period: "Semester 1, 2026",
        disclaimer:
          "Academic coursework project developed at Monash University Malaysia. This represents coursework rather than a commercial deployment.",
      },
      problem:
        "Post-pandemic tourism recovery across Malaysia required accessible analytical exploration of multi-dimensional indicators—spanning state-by-state visitor volume, hotel occupancy rates, and regional expenditure distribution—synthesised from official public records.",
      intendedUsers:
        "Students, researchers, and public observers analyzing regional Malaysian tourism trends and post-pandemic recovery patterns.",
      learningObjectives: [
        "Multi-dimensional visual encoding of temporal, categorical, and geospatial public datasets.",
        "Geospatial choropleth mapping using embedded TopoJSON geometries and custom territory insets.",
        "Effective visual narrative design following established perceptual and visual communication principles.",
      ],
      technicalApproach:
        "Engineered an interactive web dashboard utilizing Vega-Lite declarative specifications embedded in a responsive web layout. Built state-level geospatial choropleth maps with embedded TopoJSON geometries and territory insets for Penang, Kuala Lumpur, and Putrajaya, paired with multi-series temporal line charts, a pre-COVID seasonal heat matrix, regional share comparisons, and inbound expenditure waterfall breakdowns.",
      personalContribution:
        "Designed the dashboard visual hierarchy and layout, authored declarative Vega-Lite specifications, integrated embedded TopoJSON state boundaries, structured responsive CSS styling, and cleaned public tourism datasets, utilizing GenAI tools for ideation, specification debugging, and wording refinement while retaining full design ownership and submission responsibility.",
      technicalSkills: [
        "Vega-Lite",
        "JavaScript",
        "TopoJSON & Spatial Mapping",
        "Data Transformation",
        "Exploratory Data Analysis",
        "Responsive Web Presentation",
      ],
      verifiedOutcomes:
        "Publicly deployed interactive web dashboard accessible via GitHub Pages, enabling exploratory inspection across state tourist arrivals, hotel occupancy percentages, and tourist expenditure metrics without requiring live database backends.",
      limitations:
        "Based on static historical public datasets (2015–2022); does not connect to live government transactional feeds or provide real-time updates.",
    },
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
    deploymentUrl: "https://richielinardi.vercel.app",
    repositoryUrl:
      "https://github.com/Linardi1328/richie-linardi-portfolio-website",
    phase: "Production release",
    release: "v1.0.0",
    currentStatus:
      "Production released 15 Nov 2026 · dual-identity architecture · released & maintained",
    statusVerifiedAt: "2026-11-15",
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
    caseStudy: {
      problem:
        "Personal digital presence was fragmented across platforms without verified source-of-truth evidence, making it difficult to present both technical software capabilities and serious competitive athletic achievements in a single coherent experience.",
      intendedUsers:
        "Prospective engineering employers, technical collaborators, academic evaluators, and athletic scouts.",
      personalContribution:
        "Sole design and engineering: architected dual-identity narrative, implemented cinematic editorial layouts, authored regression test suites, and established the verified Vercel production deployment pipeline.",
      technicalApproach:
        "Next.js App Router, React 19, TypeScript, Manrope typography, custom responsive CSS without bloated runtime animation libraries, and strict CI enforcement covering linting, typechecks, truth contracts, and browser tests.",
      verifiedOutcomes:
        "Production released on 15 November 2026 at richielinardi.vercel.app with 100% route verification across 26 sitemap endpoints, zero detected axe-core accessibility violations, and genuine 404 gates for excluded historical assets.",
    },
    boundaries: [
      "Production released on 15 November 2026 under verified Vercel hosting.",
      "Dual-identity narrative connects data science engineering with competitive basketball.",
      "Automated CI validation enforces linting, typechecks, formatting, truth contracts, and browser regression suites.",
      "Historical preview deployments remain protected under separate SSO access controls.",
    ],
    evidence: [
      {
        kind: "deployment",
        label: "Live production deployment",
        href: "https://richielinardi.vercel.app",
      },
      {
        kind: "repository",
        label: "Public source repository",
        href: "https://github.com/Linardi1328/richie-linardi-portfolio-website",
      },
      {
        kind: "documentation",
        label: "Production release handover specification",
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
