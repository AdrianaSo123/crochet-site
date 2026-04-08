# Sprint 2 — Shop Page & Product Card

**Goal:** Users can browse all products in a responsive grid with correct sold-out handling.

| # | Task | Spec Ref |
|---|------|----------|
| 1 | Build `ProductCard` component (image, name, price, shortDescription, "View Details" CTA) | §4.3, §5.2 |
| 2 | Implement "Sold Out" badge on `ProductCard` for `available: false` | §5.2 |
| 3 | Disable/hide "View Details" CTA when `available: false` | §5.2 |
| 4 | Build `ProductGrid` component (responsive grid layout) | §4.3 |
| 5 | Build `/shop` page — load products from JSON at build time, render `ProductGrid` | §5.2 |
| 6 | Handle empty product list — show "No products available" message | §9 |
| 7 | Verify grid is responsive across Mobile / Tablet / Desktop breakpoints | §6 |
| 8 | Use Next.js `Image` component with `imageAlt` for all product images | §7, §8 |

## Definition of Done
- [ ] `/shop` renders all products from JSON at build time
- [ ] Sold-out products show badge; "View Details" is disabled
- [ ] Grid is responsive at all breakpoints
- [ ] Empty state is handled
