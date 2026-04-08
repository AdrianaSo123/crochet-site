# Sprint 6 — Polish, Accessibility & Deployment

**Goal:** Site meets accessibility, performance, and UI/UX requirements; deployed to Vercel.

| # | Task | Spec Ref |
|---|------|----------|
| 1 | Audit all pages for semantic HTML structure | §8 |
| 2 | Verify all images have `imageAlt` alt text | §8 |
| 3 | Check color contrast meets WCAG AA (4.5:1 for normal text) | §8 |
| 4 | Verify keyboard navigability across all pages and interactive elements | §8 |
| 5 | Add placeholder/blur fallback for broken images | §9 |
| 6 | Run Lighthouse / WebPageTest — verify LCP < 2s on 4G | §7 |
| 7 | Apply consistent spacing, rounded elements, and pastel color palette site-wide | §6 |
| 8 | Mobile-first responsive QA across all pages | §6 |
| 9 | Deploy to Vercel, set `NEXT_PUBLIC_FORMSPREE_URL` env var in project settings | §10 |
| 10 | Verify preview deployments work on feature branches | §10 |
| 11 | Confirm all Definition of Done criteria are met | §14 |

## Definition of Done
- [ ] Lighthouse accessibility score ≥ 90
- [ ] LCP < 2s on simulated 4G
- [ ] Site live on Vercel production URL
- [ ] All §14 Definition of Done criteria satisfied
