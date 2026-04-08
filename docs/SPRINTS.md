# Crochet Shop — Sprint Plan

Each sprint has its own file in `docs/sprints/`.

| Sprint | Title | File |
|--------|-------|------|
| 1 | Project Setup & Data Foundation | [sprint-1.md](sprints/sprint-1.md) |
| 2 | Shop Page & Product Card | [sprint-2.md](sprints/sprint-2.md) |
| 3 | Product Detail Page | [sprint-3.md](sprints/sprint-3.md) |
| 4 | Home Page | [sprint-4.md](sprints/sprint-4.md) |
| 5 | About & Contact Pages | [sprint-5.md](sprints/sprint-5.md) |
| 6 | Polish, Accessibility & Deployment | [sprint-6.md](sprints/sprint-6.md) |

---

## Sprint 1 — Project Setup & Data Foundation
**Goal:** Bootstrapped Next.js project, Tailwind configured, product data in place, and shared layout components built.

| # | Task | Spec Ref |
|---|------|----------|
| 1 | Initialize Next.js app with App Router | §3 |
| 2 | Configure Tailwind CSS | §3 |
| 3 | Create `Navbar` component (links to all routes) | §4.3 |
| 4 | Create `Footer` component | §4.3 |
| 5 | Set up shared root layout with `Navbar` and `Footer` | §4.3 |
| 6 | Create `/data/products.json` with at least 6 seed products | §4.1 |
| 7 | Validate JSON matches schema (`id`, `name`, `price`, `category`, `image`, `imageAlt`, `shortDescription`, `description`, `featured`, `available`) | §4.1 |
| 8 | Add `.env.local` with placeholder `NEXT_PUBLIC_FORMSPREE_URL` | §10 |
| 9 | Add product images to `/public/images/products/` | §4.1 |

**Definition of Done:**
- App runs locally at `localhost:3000`
- Navbar and Footer render on all pages
- `products.json` passes schema validation

---

## Sprint 2 — Shop Page & Product Card
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

**Definition of Done:**
- `/shop` renders all products from JSON at build time
- Sold-out products show badge; "View Details" is disabled
- Grid is responsive at all breakpoints
- Empty state is handled

---

## Sprint 3 — Product Detail Page
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

**Definition of Done:**
- All product detail pages statically generated
- Invalid IDs render the custom 404 page
- 404 page includes `/shop` link
- Sold-out products show indicator instead of CTA

---

## Sprint 4 — Home Page
**Goal:** Landing page communicates brand and surfaces featured products.

| # | Task | Spec Ref |
|---|------|----------|
| 1 | Build `HeroSection` component (business name, tagline, "Shop Now" CTA → `/shop`) | §4.3, §5.1 |
| 2 | Build `/` Home Page | §5.1 |
| 3 | Implement featured product logic: filter `featured: true` && `available: true`, fallback to first available if < 3 | §5.1 |
| 4 | Display 3–6 featured products using `ProductCard` | §5.1 |
| 5 | Add brief About preview section (short text + link to `/about`) | §5.1 |
| 6 | Verify page communicates brand identity clearly | §5.1 |

**Definition of Done:**
- Hero renders with correct CTA
- Featured products displayed following fallback logic
- About preview links to `/about`

---

## Sprint 5 — About & Contact Pages
**Goal:** About page tells the creator story; Contact page enables customer outreach.

| # | Task | Spec Ref |
|---|------|----------|
| 1 | Build `/about` page with creator story and handmade emphasis | §5.4 |
| 2 | Ensure About page styling is consistent with rest of site | §5.4 |
| 3 | Build `ContactForm` component (name, email, message fields) | §4.3, §5.5 |
| 4 | Wire form submission to Formspree via `NEXT_PUBLIC_FORMSPREE_URL` | §5.5 |
| 5 | Implement client-side validation: name + email required, valid email format | §5.5 |
| 6 | Show confirmation message on successful submission | §5.5 |
| 7 | Show error message on failed submission | §5.5 |
| 8 | Build `/contact` page with `ContactForm`, email link, or Instagram link | §5.5 |

**Definition of Done:**
- `/about` is content-complete and consistently styled
- Contact form submits to Formspree
- Validation, success, and error states all function correctly

---

## Sprint 6 — Polish, Accessibility & Deployment
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

**Definition of Done:**
- Lighthouse accessibility score ≥ 90
- LCP < 2s on simulated 4G
- Site live on Vercel production URL
- All §14 Definition of Done criteria satisfied
