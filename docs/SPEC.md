# Personal Portfolio Website — Technical Specification

## 1. Overview

This project defines the implementation of a lightweight, responsive ecommerce-style website for a small crochet business.

The system is designed to:
- Showcase handmade crochet products
- Provide a clean browsing experience
- Enable customer contact for purchases
- Remain simple, maintainable, and deployable without backend complexity

This is v1 (static-first architecture) with optional extensibility for ecommerce features.

---

## 2. System Goals

### Primary Goals
- Present products in a visually appealing and organized way
- Communicate brand identity (handmade, cozy, personal)
- Enable users to view product details and initiate purchase/contact

### Non-Goals (v1)
- No authentication system
- No full ecommerce checkout system
- No database or CMS

---

## 3. Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | Next.js (App Router) |
| Styling     | Tailwind CSS         |
| Hosting     | Vercel               |
| Data Source | Local JSON           |

---

## 4. Architecture

### 4.1 Data Layer

Static JSON file:
```
/data/products.json
```

Schema:
```json
[
  {
    "id": "string",
    "name": "string",
    "price": number,
    "category": "string",
    "image": "string (path)",
    "imageAlt": "string",
    "description": "string",
    "shortDescription": "string",
    "featured": boolean,
    "available": boolean
  }
]
```

- `imageAlt`: Descriptive alt text for the product image (required for accessibility).
- `shortDescription`: Brief summary (max ~100 characters) shown on product cards in the Shop and Home Page.
- `featured`: If `true`, the product appears in the Home Page featured section.
- `available`: If `false`, the product is shown as sold out on the Shop and Product Detail pages.

### 4.2 Routing Structure

```
/                 → Home Page
/shop             → Product Listing
/product/[id]     → Product Detail
/about            → About Page
/contact          → Contact Page
```

### 4.3 Component & Page Architecture

**Reusable Components:**
- `Navbar`
- `HeroSection`
- `ProductCard`
- `ProductGrid`
- `Footer`
- `ContactForm`

All reusable components must be:
- Reusable
- Stateless where possible
- Styled via Tailwind

**Pages:**
- `HomePage`
- `ShopPage`
- `ProductDetailPage`
- `AboutPage`
- `ContactPage`

---

## 5. Functional Requirements

### 5.1 Home Page

**Requirements:**
- Display hero section with:
  - Business name
  - Tagline
  - Primary CTA ("Shop Now")
- Display featured products (3–6 items)
- Include brief About preview

**Acceptance Criteria:**
- User can understand brand immediately
- CTA leads to `/shop`
- Featured products are sourced from products where `featured: true` in `products.json`
- Only products with `available: true` are eligible for the featured section
- If fewer than 3 products are marked featured, fill remaining slots with the first available products (by order in JSON) that have `available: true`

---

### 5.2 Shop Page

**Requirements:**
- Display all products in a responsive grid
- Each product must show:
  - Image
  - Name
  - Price
  - Short description (from `shortDescription` field)
  - A "View Details" CTA linking to `/product/[id]`
  - Products with `available: false` must display a "Sold Out" badge and have their "View Details" CTA disabled or hidden
- Optional: Category filtering (v1 scope — if implemented, filter by `category` field client-side)

**Acceptance Criteria:**
- Grid adjusts across screen sizes
- Products are loaded at build time from local JSON
- Unavailable products appear in the grid with a visible "Sold Out" indicator
- If category filtering is implemented: selecting a category shows only matching products; an "All" option resets the filter

---

### 5.3 Product Detail Page

**Requirements:**
- Display:
  - Large image
  - Name
  - Price
  - Full description
- Include CTA: "Contact to Purchase" (links to `/contact`)
- If `available: false`, replace the CTA with a "Sold Out" indicator

**Acceptance Criteria:**
- Page is statically generated via product ID using `generateStaticParams`
- Invalid or unknown product IDs render a `notFound()` response, using Next.js's built-in 404 page
- The 404 page includes a link back to `/shop`

---

### 5.4 About Page

**Requirements:**
- Describe creator story
- Emphasize handmade aspect

**Acceptance Criteria:**
- Clear, readable content
- Consistent styling with rest of site

---

### 5.5 Contact Page

**Requirements:**
- Provide at least one of:
  - Contact form (name, email, message)
  - Email link
  - Instagram link
- If a contact form is included, form submissions must be handled via [Formspree](https://formspree.io) (no backend required). The form action URL must be stored in an environment variable (`NEXT_PUBLIC_FORMSPREE_URL`).

**Acceptance Criteria:**
- User can easily initiate contact
- Form (if present) validates basic input: name and email are required, email must be a valid format
- On successful submission, show a confirmation message to the user
- On failure, show an error message prompting the user to try again or use the email link

---

## 6. UI / UX Requirements

### Design Principles
- Warm, cozy aesthetic
- Minimalist layout
- Soft colors (pastels / neutrals)
- Rounded UI elements
- Consistent spacing

### Responsiveness
- Mobile-first design
- Breakpoints must support:
  - Mobile
  - Tablet
  - Desktop

---

## 7. Performance Requirements

- Optimize images using Next.js `Image` component
- Pages must achieve a Largest Contentful Paint (LCP) under 2 seconds on a simulated 4G connection (approx. 10 Mbps)
- Avoid unnecessary re-renders

---

## 8. Accessibility Requirements

- Semantic HTML structure
- Alt text for all images (sourced from `imageAlt` field in product schema)
- Sufficient color contrast (minimum WCAG AA: 4.5:1 for normal text)
- Keyboard navigability

---

## 9. Error Handling

- Invalid or missing product IDs: call `notFound()` to render Next.js's built-in 404 page, which includes a link back to `/shop`
- Empty product list: Shop page displays a "No products available" message
- Broken image rendering: use Next.js `Image` `onError` fallback or a placeholder image

---

## 10. Deployment

**Platform:** Vercel

Must support:
- Preview deployments
- Production deployment

**Required Environment Variables:**

| Variable                   | Required         | Description                            |
|----------------------------|------------------|----------------------------------------|
| `NEXT_PUBLIC_FORMSPREE_URL` | If form is used  | Formspree endpoint for contact form    |

---

## 11. Future Enhancements (Out of Scope for v1)

- Shopping cart functionality
- Stripe integration
- CMS (Sanity / Contentful)
- User accounts
- Order tracking

---

## 12. Version History

| Version | Date       | Notes                                    |
|---------|------------|------------------------------------------|
| v1.0    | 2026-04-06 | Initial spec — static-first architecture |

---

## 13. Constraints

- Keep implementation simple and readable
- Avoid overengineering
- No backend required for v1
- Prefer static generation where possible

---

## 14. Definition of Done

The system is complete when:
- All pages render correctly
- Navigation is functional
- Products are loaded at build time from local JSON
- UI is responsive across devices
- Code is modular and maintainable
- Site is successfully deployed on Vercel
