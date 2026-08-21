# Richie Linardi Portfolio — Projects Overview Final Specification

Status: **Design/content specification locked for the next visual-design pass**  
Status snapshot verified from GitHub: **2026-08-21**

## 1. Purpose

The Projects interface should prove that Richie can build, reason about, document, test, and constrain real software systems.

It is **not** a repository directory and should not feel like a GitHub profile clone. The page should communicate:

1. what problem each project tackles;
2. what kind of system it is;
3. where it genuinely is today;
4. what technology and engineering ideas it demonstrates;
5. what evidence exists;
6. what its current limitations are.

The visual hierarchy should reward maturity and evidence rather than exaggerating every project equally.

---

## 2. Final public project set

### Featured project

#### SPY Market Agent
**Role on page:** Primary featured technical project / strongest Data Science + ML research proof.

**Public summary**  
Leakage-aware SPY market-research and paper-operation research system with reproducible historical evaluation, audit artifacts, risk controls, and fail-closed safety gates.

**Current status**  
`v2.0.0-beta.1 released · Version 2 Phase 5 safety/recovery scaffold active`

**Truthful boundary**  
No approved paper model currently exists. New Phase 5 broker submission remains separately gated. Live trading is prohibited.

**Primary lenses**  
Data Science · Machine Learning · Quantitative Research · Backend · Risk Controls

**Core stack**  
Python · scikit-learn · FastAPI · SQLite · Alpaca paper/market-data boundaries

**Primary proof**  
Release/tag, repository, research/evaluation documentation, test/quality gates, backtest/research artifacts where public-safe, architecture/case study.

---

### Core systems

#### Personal Project Operator
**Role on page:** Most actively evolving developer-tool / automation system.

**Public summary**  
Phone-first project orchestration system connecting project state, GitHub, OpenClaw/Telegram workflows, controlled Codex execution, isolated workspaces, and deterministic automation boundaries.

**Current status**  
`Phase 6E · deterministic automated test runner foundation merged`

**Truthful boundary**  
The current Phase 6E path is still bounded/local and does not automatically review, merge, deploy, roll back, or expose `/ppo continue`.

**Primary lenses**  
Automation · Developer Tools · Systems Engineering · Safety · Orchestration

**Core stack**  
Node.js · GitHub · OpenClaw · Telegram · Codex workflow · Linux sandboxing

**Primary proof**  
Repository, phase documentation, tests, deterministic command examples, security boundaries, development run-state architecture.

#### LedgerPilot AI
**Role on page:** Strongest audit/accounting + controlled AI workflow project.

**Public summary**  
Human-supervised accounting workflow assistant that turns synthetic document inputs into traceable extraction, deterministic accounting decisions, proposed journals, and review tasks while preserving human judgement and audit history.

**Current status**  
`Phase 5 · Human Review first slice merged`

**Truthful boundary**  
The current system does not represent recommendations as approvals and does not perform payments, production tax advice, real client processing, SQL Account export, or autonomous posting.

**Primary lenses**  
Auditing · Accounting Systems · AI Assistance · Backend · Data Integrity

**Core stack**  
Python · FastAPI · PostgreSQL · SQLAlchemy · Pydantic · Alembic

**Primary proof**  
Repository, domain/control docs, API boundaries, test suite, migrations, human-review flow, audit/event model.

#### KHLIM Assist
**Role on page:** Multilingual AI + deterministic support-routing project.

**Public summary**  
Multilingual event-support assistant foundation combining typed knowledge retrieval, bounded conversation context, AI interpretation, deterministic GREEN/YELLOW/RED decisions, and stored draft responses.

**Current status**  
`v0.1 Phase 2 · AI FAQ Engine`

**Truthful boundary**  
Participant AI auto-replies remain disabled. Phase 2 stores drafts and stops before autonomous participant messaging.

**Primary lenses**  
AI · Multilingual Systems · Retrieval · Policy Engines · Messaging

**Core stack**  
Python · FastAPI · PostgreSQL · OpenAI/Groq provider abstraction · WhatsApp sandbox

**Primary proof**  
Repository, evaluation fixtures, decision-policy documentation, tests, provider/draft-grounding regressions, architecture.

---

### Emerging / product-foundation builds

#### RBL Content Engine
**Role on page:** New evidence-verification + content-systems experiment.

**Public summary**  
Evidence-driven content pipeline that separates factual project verification from platform strategy before producing human-reviewed, platform-native content drafts and storyboards.

**Current status**  
`Phase 0 manual pilot · platform intelligence and direction inputs established`

**Truthful boundary**  
No automatic publishing, paid API actions, customer messaging, guaranteed-performance claims, autonomous video creation, or ProofLab integration.

**Primary lenses**  
Content Systems · Verification · Automation · Platform Strategy · AI-adjacent Workflows

**Core stack**  
Python standard library first · deterministic offline pipeline · structured evidence/research fixtures

**Primary proof**  
Repository, claim-verification model, platform-research lineage, deterministic treatments/storyboards, test fixtures.

#### KHLIM Super App
**Role on page:** Product/architecture foundation demonstrating larger-system thinking.

**Public summary**  
Production-oriented digital-platform concept for KHLIM Basketball Club connecting players, parents, coaches, and administrators around training, attendance, development, competitions, rewards, communication, and club operations.

**Current status**  
`Phase 0 · product definition and engineering preparation`

**Truthful boundary**  
The project is currently planning/pre-development; application code is not yet the proof point. Product, architecture, privacy, role, workflow, and roadmap documentation are.

**Primary lenses**  
Product Engineering · System Architecture · Privacy · Role-Based Systems · Sports Technology

**Planned architecture direction**  
Mobile app + admin web + modular backend + PostgreSQL/object storage, with explicit role/privacy boundaries.

**Primary proof**  
Product brief, MVP scope, architecture, module boundaries, security/privacy planning, user workflows, ADRs, development roadmap.

#### Richie Linardi Portfolio Website
**Role on page:** Meta project / UI engineering / personal product system.

**Public summary**  
Interactive two-sided portfolio product designed to connect professional and basketball identities through a shared design system and eventual signature page-flip experience.

**Current status**  
`v0.3 professional homepage merged · project/case-study system is the next implementation stage`

**Truthful boundary**  
The basketball interface and signature page-flip are design/planned work, not yet implemented production features.

**Primary lenses**  
Next.js · TypeScript · UI/UX · Design Systems · Content Architecture

**Core stack**  
Next.js · React · TypeScript · Tailwind CSS

**Primary proof**  
Repository, design system, CI validation, professional homepage, future versioned design references, implementation-vs-reference reviews.

---

## 3. Projects deliberately not shown as primary public cards

Raw university/course repositories should not automatically appear in the main portfolio grid just because they exist on GitHub. They can be promoted later only when a piece of academic work is curated into a standalone case study with:

- clear ownership/contribution;
- no academic-integrity or assessment-disclosure concern;
- a useful problem statement;
- cleaned documentation;
- safe/public data;
- evidence worth showing to an employer.

The public page should favor a smaller set of intentional projects over an indiscriminate repository dump.

Existing hidden/excluded portfolio projects remain outside this interface.

---

## 4. Final information architecture

### A. Hero / page thesis

**Eyebrow**  
`PROFESSIONAL SIDE · PROJECTS`

**Title**  
`Projects built around evidence, systems, and real constraints.`

**Supporting copy**  
A concise statement explaining the range: data science, AI, automation, accounting/audit systems, developer tooling, and product engineering.

**Background language**  
Subtle financial chart/grid + code/data-node + statistical geometry. Decorative only; no fake data labels.

Do **not** put a giant portrait in the hero. The Projects page should prioritize the work. A compact identity card/mark can appear to the side on desktop if needed.

### B. Lens filters

Multi-category filtering:

- All
- Data / ML
- AI / Automation
- Finance / Audit
- Systems / Developer Tools
- Product / Web

Filters should change the project set without changing the underlying status/proof data.

### C. Featured project

SPY Market Agent receives the largest editorial card.

Desktop composition:
- left: real/generated-for-project visual area (chart/research UI only when it represents the actual system);
- center: title, summary, boundaries;
- right/bottom: current status, technical tags, proof actions.

Actions:
- `View case study` when the case study exists;
- `View repository` always when public;
- optional `Release / docs` proof link.

### D. Core systems grid

Three high-information cards:
- Personal Project Operator
- LedgerPilot AI
- KHLIM Assist

Each gets enough height for:
- system icon/visual;
- name;
- one-sentence problem/system summary;
- explicit current milestone;
- 3–5 stack tags;
- proof actions.

The cards should not use identical decorative screenshots. Visuals should reflect each system:
- PPO: terminal/orchestration/workspace graph;
- LedgerPilot: document → controls → journal → human review workflow;
- KHLIM Assist: multilingual conversation → knowledge → policy → draft flow.

### E. Emerging builds row

Smaller but still serious cards:
- RBL Content Engine
- KHLIM Super App
- Portfolio Website

These cards must visibly communicate maturity:
- `Early stage`
- `Planning / foundation`
- `Active development`

Do not visually imply that planning documentation is equivalent to a production application.

### F. Build principles / proof strip

Short, evidence-backed principles shared across the projects:

- **Traceability** — claims and outputs retain evidence/lineage.
- **Deterministic boundaries** — rules and permissions constrain AI/automation.
- **Human control where judgement matters** — accounting, messaging, publishing, deployment, execution.
- **Testing before promotion** — projects expose explicit validation/quality gates.
- **Limitations are part of the interface** — public cards state what is not yet implemented.

This section replaces generic skill-marketing language.

### G. Bottom CTA

Two actions:
- `Explore case studies`
- `Browse GitHub repositories`

Optional third text link:
- `How I build` → future experience/about methodology section.

---

## 5. Card anatomy

Every public project card should be generated from the same structured model.

Required public fields:

```ts
interface PortfolioProject {
  id: string;
  slug: string;
  name: string;
  shortSummary: string;
  maturity: "released" | "active" | "prototype" | "foundation" | "planning";
  currentMilestone: string;
  truthfulBoundary: string;
  categories: ProjectCategory[];
  stack: string[];
  repositoryUrl?: string;
  caseStudySlug?: string;
  proofLinks: ProjectProofLink[];
  media: ProjectMediaRef[];
  featuredRank?: number;
  visibility: "public" | "hidden";
  verifiedAt: string;
}
```

Internal/optional fields may track:
- current commit/tag;
- source README/PR/commit;
- status provenance;
- last owner review;
- future roadmap stage;
- public-safe screenshot readiness.

---

## 6. Status system

Status is never inferred from color alone.

Recommended labels:

- **Released** — public release/tag exists.
- **Active development** — implemented work is actively progressing.
- **Prototype / pilot** — working bounded experiment.
- **Foundation** — architecture/first controlled slice exists.
- **Planning** — product/engineering definition, not application implementation.

Each project can also show a separate `currentMilestone` string.

Example:

```text
Released
v2.0.0-beta.1 · Phase 5 scaffold active
```

This prevents awkward statuses such as calling a project simply “Completed” while it is still evolving.

---

## 7. Proof system

A project can expose multiple proof types:

```ts
type ProjectProofKind =
  | "repository"
  | "release"
  | "architecture"
  | "tests"
  | "documentation"
  | "demo"
  | "screenshot"
  | "case-study";
```

The overview should surface **2–3 strongest proofs**, not every link.

The case-study page can expose the full evidence set.

No generated interface image should be presented as proof of an implemented feature. Generated/mock UI must be labelled as concept/design reference if shown.

---

## 8. Media rules

Project visuals should come from this priority order:

1. real product/system screenshots;
2. real architecture/flow diagrams;
3. real charts/research outputs that are safe to publish;
4. intentionally designed explanatory illustrations based on the actual architecture;
5. abstract branded fallback graphic.

Avoid fake dashboard screenshots that imply functionality that does not exist.

Each project gets its own media directory later:

```text
public/projects/
  spy-market-agent/
  personal-project-operator/
  ledgerpilot-ai/
  khlim-assist/
  rbl-content-engine/
  khlim-super-app/
  portfolio-website/
```

---

## 9. Visual direction

### Palette
- Black / near-black foundation
- Deep navy / blue for professional technical surfaces
- White / ivory for readable content
- Gold for hierarchy, prestige, selection, and proof emphasis

### Background motifs
Use subtle layers only:
- statistical lines / distribution geometry;
- market/candlestick silhouettes around SPY;
- document/audit geometry around LedgerPilot;
- node/workflow graphs around automation systems;
- terminal/code-line texture around developer tooling.

No decorative motif should compete with project names or status.

### Typography
- Editorial/serif display can be used for page/featured-project titles.
- Clean sans for system descriptions, status, evidence, and technical tags.
- Monospace only for code/status fragments where meaningful.

---

## 10. Responsive behavior

### Desktop
- Featured SPY card spans the main content width or a 2/3 + 1/3 composition.
- Core systems: 3-column grid when space permits.
- Emerging builds: 3 smaller cards or a horizontal evidence row.

### Tablet
- Featured card stacks internally.
- Core cards: 2 columns, final card full/centered as needed.
- Emerging cards: 2 columns → 1.

### Mobile
- No sidebar.
- Filters horizontally scroll or wrap accessibly.
- Featured project becomes a single vertical evidence card.
- All other cards are one column.
- Status and boundary text remain visible; do not hide important truth for space.
- Stack tags cap visually with `+N` expansion if needed.

---

## 11. Future-growth behavior

Adding a project should not require changing JSX layout.

Normal workflow:

1. add one `PortfolioProject` record;
2. add proof links;
3. add media when available;
4. set maturity/category/featured rank;
5. set `verifiedAt`;
6. run data validation;
7. page automatically places it in the appropriate group/filter.

Recommended ordering algorithm:

1. featured rank;
2. maturity weight;
3. manually controlled public order within group;
4. `verifiedAt` only as a staleness signal, **not** as automatic importance.

When the page exceeds roughly 9–12 projects, add pagination or a compact archive rather than shrinking cards.

---

## 12. Status-staleness protection

Project status changes frequently. Each record should carry `verifiedAt` and ideally source provenance.

Before a public release/deployment:
- check the current repo default branch;
- check current release/milestone wording;
- update stale status strings;
- owner-review any changed public claim.

Optional development-only validation can warn when `verifiedAt` exceeds a chosen age threshold.

---

## 13. Content hierarchy for the final visual draft

The next generated reference image should show, in this order:

1. compact RBL navigation/header;
2. Projects thesis hero with technical/statistical background;
3. filter row;
4. large SPY Market Agent feature;
5. three core-system cards: PPO, LedgerPilot, KHLIM Assist;
6. emerging-build strip: RBL Content Engine, KHLIM Super App, Portfolio Website;
7. proof/build-principles strip;
8. case-study / GitHub CTA;
9. restrained footer.

The image must be tall enough to represent the actual page; do **not** force it into 16:9.

---

## 14. Acceptance criteria for the design image

The design is accepted only if:
- all seven public projects are visible or clearly discoverable;
- SPY Market Agent has clear featured hierarchy;
- PPO reflects its newer Phase 6E maturity, not old Phase 1.5 copy;
- LedgerPilot reflects Phase 5 human review;
- KHLIM Assist keeps auto-reply boundaries truthful;
- RBL Content Engine is clearly early-stage/pilot;
- KHLIM Super App is clearly planning/pre-development;
- the Portfolio Website does not pretend the flip interaction is already implemented;
- cards emphasize proof and current boundaries, not marketing hype;
- future project additions do not require a redesign;
- the visual system remains blue + gold + black + white;
- the page feels connected to the professional face of the main flipbook homepage.

---

## 15. Design decision

**Locked direction:** Evidence-first editorial project catalogue with one featured mature project, a core-systems grid, an honest emerging-build layer, and reusable proof/status architecture.

This specification should be used as the source for the next `Projects Overview v2` reference image and later implementation.
