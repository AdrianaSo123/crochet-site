# Sprint 3 — Product Detail Page

**Goal:** Users can navigate to a product detail page and initiate contact to purchase.

| # | Task | Spec Ref |
|---|------|----------|
| 1 | Create `/product/[id]` dynamic route using App Router | §4.2 |
| 2 | Implement `generateStaticParams` to pre-generate all product pages | §5.3 |
| 3 | Display large image, name, price, full description | §5.3 |
| 4 | Add "Contact to Purchase" CTA linking to `/contact` | §5.3 |
| 5 | Replace CTA with "Sold Out" indicator for `available: false` | §5.3 |
| 6 | Call `notFound()` for invalid product IDs | §5.3, §9 |
| 7 | Create custom 404 page with link back to `/shop` | §5.3 |
| 8 | Use Next.js `Image` with `imageAlt` for product image | §7, §8 |

## Definition of Done
- [ ] All product detail pages statically generated
- [ ] Invalid IDs render the custom 404 page
- [ ] 404 page includes `/shop` link
- [ ] Sold-out products show indicator instead of CTA
