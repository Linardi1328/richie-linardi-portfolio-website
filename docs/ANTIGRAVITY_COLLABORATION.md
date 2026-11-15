# Antigravity Frontend Collaboration Contract

> Current direction: [Editorial redesign · 23 October 2026](EDITORIAL_REDESIGN_2026-10-23.md). The owner requested a full replacement of the prior design and effects. Use the new screenshots and brief for visual refinement; earlier flipbook, landscape, and motion references are historical.

Google Antigravity is used as a frontend implementation and browser-QA collaborator. It does not replace the repository's source-of-truth rules, owner review, or CI gates.

Workspace-scoped custom agents live under `.agents/agents/<agent-name>/agent.md` and are committed with the repository so the same specialized behaviors are discoverable from the workspace.

## Role split

```text
Portfolio architecture / data truth / integration review
  -> repository contracts, project registry, evidence boundaries, design references

Antigravity frontend agents
  -> implementation, browser verification, responsive review, accessibility review

Owner
  -> visual acceptance, content acceptance, final merge approval
```

## Required workflow for visual implementation

1. Read the current editorial design brief and screenshots linked above.
2. Read `docs/FRONTEND_REFERENCE_RESEARCH.md` for secondary references. The historical signature-motion trial is superseded by the owner’s full redesign request.
3. Read the typed content layer before rendering project or achievement claims.
4. Produce or review an implementation plan before broad page changes.
5. Implement one bounded interface or system slice at a time.
6. Launch the local application and verify it in a real browser.
7. Capture screenshots or visual artifacts at representative target sizes. For motion changes, also capture comparable before/after recordings, cancelled gestures and reduced-motion behavior; still images alone do not verify timing or continuity.
8. Compare the implementation against the approved reference and document deliberate differences.
9. Run repository validation.
10. Submit through a PR for owner review; do not bypass CI or owner acceptance.

## Responsive verification matrix

Every major interface must be checked across behavior classes, not one generic tablet breakpoint:

- compact phone;
- large phone;
- foldable / opened foldable where practical;
- small tablet portrait and landscape;
- standard tablet portrait and landscape;
- large tablet / iPad Pro class portrait and landscape;
- Surface-style 2-in-1 / touch laptop;
- laptop;
- desktop;
- wide desktop / ultrawide where layout expansion matters.

Also verify:

- touch input;
- precise pointer / hover input;
- keyboard navigation;
- reduced motion;
- zoom / text scaling where practical.

## Truth boundary

Generated mockup text and external reference-site content are never factual source-of-truth for this portfolio.

Project statuses and boundaries come from `src/data/project-registry.ts` and the underlying project repositories. Basketball achievements, statistics, media, education, experience, and contact information require their own verified structured data before production publication.

If a design calls for a metric, timestamp, live status, achievement, project milestone, employer, role, quote, article, or contact detail that is not verified, render an explicit placeholder or omit the claim. Do not invent it.

## Manual edit labels

Production components should preserve stable searchable annotations when they materially help manual refinement, for example:

```tsx
{
  /* [SHELL: flipbook-root] */
}
{
  /* [SECTION: professional-projects] */
}
{
  /* [CARD: spy-market-agent] */
}
{
  /* [MODULE: live-operating-proof] */
}
{
  /* [RESPONSIVE: tablet-landscape] */
}
```

Do not add noisy labels to every primitive. Label meaningful composition boundaries, cards, interactive modules, and responsive behavior that the owner may reasonably want to tune later.
