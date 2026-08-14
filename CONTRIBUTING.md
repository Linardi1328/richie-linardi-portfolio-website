# Contributing

## Workflow

1. Branch from `main` using the phase naming convention.
2. Keep each branch focused on its phase objective.
3. Run validation before opening a pull request.
4. Open a PR using the project template below.
5. Merge only after review, owner testing, and approval.

## Branch Names

```text
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

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Content Rules

- Only include verified personal projects.
- Never include Healthy Bite.
- Keep ProofLab hidden until meaningful development begins.
- Mark project status accurately.
- Do not overstate athletic representation, roles, dates, outcomes, or impact.
- Keep one canonical current resume.

## Design Rules

- Build reusable primitives before page-specific styling.
- Keep professional, basketball, data, and audit components visually related.
- Respect `prefers-reduced-motion` for motion-heavy interactions.
- Preserve real URLs for the professional and basketball sides.

## Pull Request Template

```markdown
## Objective

## What Changed

## Screenshots

## Tests Run

## Accessibility

## Responsive Testing

## Known Limitations

## Owner Testing Required
```
