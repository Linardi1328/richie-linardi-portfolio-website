# Roadmap

## Product Goal

Build and publicly launch a premium interactive personal portfolio for Richie Linardi with two connected interfaces:

- Professional side: projects, technical work, audit experience, analysis, and problem solving.
- Basketball side: athlete journey, Indonesia representation, statistics leadership, youth development, girls basketball, 3x3 events, and community impact.

Signature concept:

```text
One journey. Two sides. The same discipline.
```

## Phases

Current active development phase: `v0.2 - Design System`.

| Version | Phase                  | Objective                                                          |
| ------- | ---------------------- | ------------------------------------------------------------------ |
| v0.1    | Foundation             | Repository, toolchain, docs, CI, structure, local checks           |
| v0.2    | Design System          | Colors, typography, UI primitives, temporary `/design-system` page |
| v0.3    | Professional Interface | Publishable professional homepage                                  |
| v0.4    | Project Engine         | Reusable `/projects/[slug]` case-study framework                   |
| v0.5    | Projects               | SPY, LedgerPilot, Tourism Dashboard, Survival Game content         |
| v0.6    | Athlete Interface      | Basketball homepage and impact sections                            |
| v0.7    | Two-Sided Experience   | Signature page-flip route transition                               |
| v0.8    | Supporting Pages       | About, experience, journey, resume                                 |
| v0.9    | Hardening              | Responsive, accessibility, testing, performance, SEO               |
| v1.0    | Public Launch          | Production deployment and acceptance testing                       |

## Phase 0 Exit Criteria

Automated checks:

```text
npm run lint          PASS
npm run typecheck     PASS
npm run format:check  PASS
npm run build         PASS
```

Owner smoke test:

```text
npm run dev           PASS
HTTP page load        PASS
```

Pull requests must also receive a passing GitHub Actions validation run before merge unless the workflow infrastructure itself is the change being reviewed and the checks have been independently verified.

## Development Branches

```text
main
  phase/01-foundation
  phase/02-design-system
  phase/03-professional-home
  phase/04-case-study-engine
  phase/05-project-content
  phase/06-basketball-interface
  phase/07-page-flip
  phase/08-experience-pages
  phase/09-responsive-accessibility
  phase/10-testing-hardening
  phase/11-production-launch
```

## Version 1.0 Definition of Done

- Professional interface is production quality.
- Basketball interface is production quality.
- Page-flip transition works across real routes.
- Four verified project case studies are complete.
- About, experience, journey, and resume pages are complete.
- Responsive layouts are complete.
- Accessibility has been reviewed to practical WCAG AA standards.
- SEO and social sharing metadata are configured.
- Performance and security are reviewed.
- Automated and owner acceptance tests pass.
- Production Vercel deployment is live.
