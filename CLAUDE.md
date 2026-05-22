# Click Dudes — Claude Instruction System

## Brand Context

**Company:** Click Dudes
**Tagline:** Turning Clicks Into Revenue
**Category:** AI-powered ad-tech, monetization, and advertising platform
**Audience:** Web publishers, app publishers, CTV publishers
**Products:** Google AdX, Header Bidding, AI Optimization, Premium Demand, Smart Ad Solutions
**Tone:** Premium, confident, intelligent, futuristic — not corporate, not cheap, not playful
**Visual Identity:** Light futuristic robotic AI SaaS — think Apple meets Vercel meets a sci-fi dashboard

---

## Build Rules (Non-Negotiable)

1. **Build one phase at a time.** Never generate an entire page or the full site at once.
2. **Verify before advancing.** Each phase must be reviewed and approved before the next begins.
3. **300-line file limit.** No single file exceeds 300 lines. Split into subcomponents if needed.
4. **One component per file.** No multi-component files.
5. **No dark theme.** This is a light theme only. Background starts near-white with cool blue tint.
6. **No template look.** Every decision must feel custom-crafted and intentional.
7. **No random colors.** Every color must come from the design token system defined below.
8. **No `any` types.** Use `unknown` + narrowing, or define the interface.
9. **Clean TypeScript only.** No JavaScript files. No `.js` in `src/`.
10. **No barrel files.** Never create `index.ts` re-export files. Always import from full paths.

---

## Tech Stack

```
Framework:      Next.js 15 (App Router)
Language:       TypeScript 5 (strict mode)
Styling:        Tailwind CSS 3
UI Primitives:  shadcn/ui (Radix UI base)
Icons:          lucide-react
Animation:      Framer Motion 11, GSAP 3 + ScrollTrigger
Smooth Scroll:  Lenis 1
3D:             Three.js, React Three Fiber, @react-three/drei
Fonts:          Geist (display/headings), Inter (body)
```

---

## Design Token System

### Colors

Never use raw hex values in components. Only use the Tailwind token names defined here.

```
Brand
  brand-navy       → #07112F   (Deep Navy — headings, text-primary)
  brand-purple     → #8B5CF6   (Purple — primary accent, CTAs)
  brand-violet     → #A855F7   (Neon Violet — hover states, alternate CTAs)
  brand-blue       → #60A5FA   (Sky Blue — secondary accent)
  brand-cyan       → #67E8F9   (Soft Cyan — highlights, gradient ends)
  brand-green      → #10B981   (Success Green — positive states)

Surface
  surface-base     → #F8FAFF   (page background)
  surface-section  → #EEF2FF   (alternate section background)
  surface-card     → #FFFFFF   (card background)

Text
  text-primary     → #07112F   (headings, strong body)
  text-secondary   → #374151   (secondary body)
  text-muted       → #9CA3AF   (captions, labels)
  text-accent      → #8B5CF6   (links, highlights)

Border
  border           → rgba(7,17,47,0.08)
  glass border     → rgba(139,92,246,0.14)
```

### Gradients — CSS var names (use via className or style)

```
--grad-brand         purple → blue     (primary CTA gradient)
--grad-violet-blue   violet → blue     (alternate CTA gradient)
--grad-purple-cyan   purple → cyan     (highlight gradient)
--grad-hero          light diagonal    (hero section bg)
--grad-navy          navy → dark-navy  (dark contrast sections)
--grad-text          purple → cyan     (gradient text)
```

### CSS Utility Classes (defined in globals.css)

```
Gradient text:    .text-gradient  .text-gradient-brand  .text-gradient-violet  .text-gradient-cyan
Glassmorphism:    .glass  .glass-strong  .glass-subtle  .glass-dark
Glow shadows:     .glow-purple  .glow-violet  .glow-blue  .glow-cyan  .glow-sm
Bg gradients:     .bg-gradient-brand  .bg-gradient-violet-blue  .bg-gradient-purple-cyan  .bg-gradient-navy  .bg-gradient-hero
Section bgs:      .section-base  .section-alt  .section-white  .section-navy  .section-hero
Card base:        .card-base  .card-navy
Glow blobs:       .blob-purple  .blob-violet  .blob-cyan
Typography:       .tracking-display  .tracking-heading  .tracking-label  .text-balance
```

### Typography Scale

```
Display:   72px / line-height 80px / tracking -0.04em / Geist Bold
H1:        56px / 64px / -0.03em / Geist Bold
H2:        40px / 48px / -0.02em / Geist SemiBold
H3:        28px / 36px / -0.01em / Geist SemiBold
H4:        20px / 28px / 0em    / Geist Medium
Body LG:   18px / 28px / 0em    / Inter Regular
Body:      16px / 24px / 0em    / Inter Regular
Small:     14px / 20px / 0em    / Inter Regular
Label:     12px / 16px / 0.06em / Inter Medium Uppercase
```

### Spacing

```
Section Y padding:   py-32 (desktop)  →  py-16 (mobile)
Container max-width: max-w-7xl with px-6 (mobile) px-8 (tablet) px-12 (desktop)
Card padding:        p-8 (lg)  p-6 (md)  p-4 (sm)
Grid gap:            gap-6 (default)  gap-4 (tight)  gap-12 (loose)
Border radius:       rounded-2xl (cards)  rounded-xl (buttons)  rounded-full (pills)
```

### Glassmorphism Recipe

Never approximate glass manually — always use the utility class:

```
.glass         → bg rgba(255,255,255,0.72) + blur(20px) + purple border (0.14 opacity) + layered shadow
.glass-strong  → bg rgba(255,255,255,0.88) + blur(24px) + stronger border + larger shadow
.glass-subtle  → bg rgba(255,255,255,0.50) + blur(12px) — for nested surfaces
.glass-dark    → bg rgba(255,255,255,0.05) + blur(20px) — for use on navy bg
```

Add `rounded-2xl` and appropriate padding separately. Never use `bg-gray-*` as glass.
Never add dark overlays on a glass surface — this is a **light theme only**.

---

## Folder Architecture Rules

```
src/
  app/              Next.js App Router pages only — no logic here
    (marketing)/    Route group for all public marketing pages
  components/
    ui/             shadcn/ui primitives — never edit these files
    layout/         Navbar, Footer, Section, Container, Grid
    common/         Shared non-layout, non-marketing components
    marketing/      Page-section components (Hero, FeatureCard, etc.)
    canvas/         Three.js / R3F scenes — all dynamic imports
    animations/     Framer Motion wrappers, stagger groups
  lib/
    utils.ts        cn() helper only
    gsap.ts         GSAP plugin registration
    lenis.ts        Lenis provider and hook
    metadata.ts     generateMetadata helpers
  hooks/            Custom React hooks — one hook per file
  styles/           globals.css and animations.css only
  types/            Shared TypeScript interfaces — index.ts allowed here only
  config/
    site.ts         Nav links, social links, metadata defaults
    theme.ts        Design token constants mirrored as TypeScript
```

Rules:
- `app/` holds only page.tsx, layout.tsx, loading.tsx, error.tsx — no logic
- No component defined inside a page file
- `components/ui/` is sacred — never manually edit shadcn output files
- `canvas/` components must always be loaded with `next/dynamic` + `ssr: false`
- Hooks must start with `use` and live only in `src/hooks/`

---

## Component Rules

### Structure

Every component file must follow this order:

```typescript
// 1. Imports
// 2. TypeScript interface (Props)
// 3. Variant/constant definitions (outside component)
// 4. Framer Motion variants (outside component, if used)
// 5. Component function (named export)
// 6. No default export (except page.tsx files)
```

### TypeScript

```typescript
// CORRECT
interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  variant?: "default" | "glass"
}

// WRONG — never do this
const FeatureCard = ({ title, description, icon, variant = "default" }: any) => {
```

### className

Always use `cn()` from `@/lib/utils` for merging:

```typescript
import { cn } from "@/lib/utils"

className={cn(
  "base-classes",
  variant === "glass" && "glass-classes",
  className
)}
```

### Server vs Client

- Default to Server Components
- Add `"use client"` only when the component uses: hooks, event listeners, browser APIs, Framer Motion, GSAP
- Never add `"use client"` to a layout or page that can stay server-rendered

### Images

Always use `next/image`. Never use `<img>` tags.

```typescript
import Image from "next/image"
// Always provide width + height or fill + sizes
```

---

## Animation Rules

### System Layers (in priority order)

```
Layer 1 — Lenis         Smooth scroll — global, always on
Layer 2 — GSAP          Scroll-triggered animations, timelines, counters
Layer 3 — Framer Motion UI micro-interactions, entrance animations, hover states
Layer 4 — R3F / Three   3D background scenes only
```

### Framer Motion

- Define variants **outside** the component function — never inline
- Always use `viewport={{ once: true, margin: "-100px" }}` on scroll-triggered variants
- Use `layout` prop only when animating layout changes
- Wrap staggered lists in a `motion.div` with `variants={containerVariants}`

```typescript
// CORRECT — defined outside component
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// WRONG — never inline
<motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }}>
```

### GSAP

- Always use `useGSAP()` from `@gsap/react` — never raw `useEffect` for GSAP
- Always return cleanup: `useGSAP(() => { ... }, { scope: containerRef })`
- Register all plugins at module level in `src/lib/gsap.ts`, import that file once in root layout

### Lenis

- Access via `useLenis()` hook only
- Never instantiate Lenis inside a component — use the global provider

### Reduced Motion

Every animated component must respect `prefers-reduced-motion`:

```typescript
const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

// Skip GSAP timelines entirely
// Use opacity-only Framer Motion fallback
```

### Prohibited Animation Patterns

- No CSS `transition` on elements controlled by GSAP — pick one system per element
- No `animate` on mount without `initial` defined
- No infinite looping animations that distract from content
- No animations that block content rendering
- No skeleton loaders that flash — use subtle fade-in only

---

## Cinematic AI Interface Direction

This section is the authoritative visual direction for every homepage section and inner page. It overrides any generic SaaS template instincts. Every section must pass every rule here before it is considered complete.

### Core Experience Goal

The website must feel like **an intelligent cinematic monetization operating system** — not a marketing site, not a template, not a brochure. The visitor should feel they have stepped inside a premium AI product.

Reference mood: Apple spatial computing × Stripe's editorial precision × Linear's motion intelligence × Vercel's developer minimalism × a sci-fi enterprise dashboard.

### Rule 1 — Layered Interface Depth

Every section must have at least three depth layers:

```
Foreground   — interactive UI elements, text, CTAs
Midground    — floating glass cards, animated widgets, metrics
Background   — atmospheric gradient, glow orbs, soft particle haze
```

No section may be flat. If a section only has text on a plain background, it is incomplete.

### Rule 2 — Floating Premium Panels

Every card or panel on the site must:
- Float subtly (y: 0 → -8px → 0 loop, 4–7s duration, ease-in-out)
- Use glass blur (`.glass` or `.glass-strong` — never opaque white unless intentionally card-base)
- Have soft glow edge on the prominent side (`box-shadow: 0 0 0 1px rgba(139,92,246,0.15), 0 8px 40px rgba(139,92,246,0.12)`)
- Respond to hover with a gentle lift and brighter glow
- Use `FloatingMetricCard`, `GlassPanel`, or `GlassCard` — never plain `<div>` for premium content

### Rule 3 — AI Environment Feel

The interface must feel alive and intelligent:
- Metrics animate on scroll entry (CountUp)
- Text reveals on scroll (TextReveal)
- Backgrounds pulse gently (GradientOrb with `animate`)
- Interactive elements respond magnetically (MagneticWrapper)
- Status indicators breathe (LiveDot)
- No section should be completely static

### Rule 4 — Enterprise AI Lighting System

Required lighting vocabulary — use at least 2 per section:

```
Radial glow        → GradientOrb, large, low-opacity (0.10–0.18), top-center or top-left
Edge lighting      → thin gradient border on glass panels (brand-purple/15 → transparent)
Holographic highlight → shimmer or subtle gradient shift on hover (bg-gradient-brand applied subtly)
Atmospheric depth  → background uses grad-hero or layered section-base + orbs
Depth shadow       → glass panels: 0 20px 60px rgba(7,17,47,0.08)
```

Explicitly forbidden lighting:
- Harsh neon outlines (no solid neon borders)
- Cyberpunk color chaos (no RGB rainbow effects)
- Gaming aesthetics (no pixel glow, no retro scan lines)

### Rule 5 — Section Transitions

Between sections, use at least one of:
- Gradient blending (bottom of section A fades into top of section B via shared gradient)
- Glow fade (GradientOrb at section boundary, bridging both sections)
- Blur dissolve (content fades in from subtle blur)
- Z-depth shift (floating element from one section overlaps the next)

Never hard-cut from section to section with a flat color border.

### Rule 6 — Typography Direction

All headings must be:
- **Oversized** — hero h1 at display scale (text-display), section h2 at text-h2 minimum
- **High contrast** — `text-primary` on light backgrounds always
- **Gradient-accented** — key words or entire headings use `text-gradient`, `text-gradient-brand`, or `text-gradient-violet`
- **Tracking-tight** — `tracking-heading` or `tracking-display` on all headings
- **Balanced** — `text-balance` on all headings, `text-pretty` on subtext

Never use default font weight. All headings: `font-bold` or `font-semibold`.

### Rule 7 — Motion Quality Standards

All motion must feel:
- **Calm** — duration 0.5–0.8s for entrance, 3–7s for ambient loops
- **Luxurious** — ease-out-expo `[0.16, 1, 0.3, 1]` for entrances, `easeInOut` for loops
- **Intelligent** — stagger groups: child delay 0.06–0.1s, never all at once
- **Purposeful** — every animation communicates something (importance, state, depth)

Explicitly forbidden motion:
- Bounce easing on hero content
- Rapid transitions under 0.2s on large elements
- Multiple animations fighting for attention in the same viewport
- Looping effects that complete in under 2 seconds

### Rule 8 — Dashboard Ecosystem

Hero and any section featuring the product must include:
- At least 3 `FloatingMetricCard` components with live CountUp
- A `GlassPanel` or `DashboardPanel` as the primary interface element
- Animated data visualization (chart, graph, or sparkline)
- Revenue intelligence copy (CPM, fill rate, ROAS, revenue lift, etc.)
- `LiveDot` status indicators on at least one widget
- Depth layering: floating cards stacked at different z-indices

---

## Logo Rules

- The Click Dudes wordmark must always render in `grad-brand` (purple → blue gradient) as a CSS text gradient
- Logo minimum size: 120px wide on desktop, 100px on mobile
- Logo must never be placed on a dark background
- Logo must never be distorted, rotated, or recolored outside the gradient
- Favicon: simplified geometric mark version (not full wordmark)
- The robotic AI mascot (when used): always white/glass with purple glow — never colored directly

---

## SEO Rules

- Every page must export a `generateMetadata()` function
- Title format: `{Page Name} — Click Dudes | Turning Clicks Into Revenue`
- Every page must have: `title`, `description`, `openGraph`, `twitter`, `canonical`
- All images must have `alt` text — descriptive, not generic
- Semantic HTML: use `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` correctly
- Heading hierarchy: one `<h1>` per page, logical `<h2>` → `<h3>` descent

---

## Accessibility Rules

- All interactive elements must have `:focus-visible` ring styles
- Color contrast ratio minimum: 4.5:1 for body, 3:1 for large text
- All icons used standalone (without text label) must have `aria-label`
- All modals and dialogs: trap focus, close on Escape
- No motion-only communication — always pair animation with text or icon
- Skip-to-main-content link in root layout (visually hidden until focused)

---

## Mobile-First Rules

- All Tailwind classes default to mobile — layer up with `sm:` `md:` `lg:` `xl:`
- Touch targets: minimum 44×44px for all clickable elements
- No horizontal scroll on any viewport under 320px wide
- Hamburger menu replaces desktop nav on mobile — never hide-only
- Test every section at 375px, 768px, 1280px, 1440px

---

## Quality Checklist (Run Before Advancing Each Phase)

### Code Quality
- [ ] Zero TypeScript errors (`tsc --noEmit`)
- [ ] Zero ESLint errors or warnings
- [ ] No `any` types anywhere in new code
- [ ] No hardcoded color values (hex, rgb, hsl) outside `tailwind.config.ts`
- [ ] No file exceeds 300 lines
- [ ] All new components are named exports

### Visual Quality
- [ ] Matches the light futuristic robotic AI SaaS aesthetic
- [ ] No dark backgrounds or dark-mode styles
- [ ] All glass surfaces use the exact glassmorphism recipe
- [ ] Typography matches the defined scale (no ad-hoc font sizes)
- [ ] Spacing uses Tailwind tokens (no arbitrary values unless justified)
- [ ] Gradient text uses `grad-text` — not random gradients
- [ ] Purple glow applied to hero and key CTA elements only

### Responsive Quality
- [ ] Tested at 375px (mobile), 768px (tablet), 1280px (desktop), 1440px (wide)
- [ ] No layout breaks or overflow at any breakpoint
- [ ] Touch targets meet 44px minimum
- [ ] Navbar collapses correctly on mobile

### Animation Quality
- [ ] All Framer Motion variants defined outside component
- [ ] GSAP uses `useGSAP()` hook with cleanup
- [ ] Reduced motion respected — all animated components checked
- [ ] No animation conflicts between Framer Motion and GSAP on same element
- [ ] Animations are subtle and enhance content — not distracting

### Performance Quality
- [ ] No new `useEffect` that could be a Server Component instead
- [ ] All canvas/3D components use `next/dynamic` + `ssr: false`
- [ ] All images use `next/image` with explicit dimensions or `fill`
- [ ] No third-party scripts without `strategy="lazyOnload"`

### Accessibility Quality
- [ ] All interactive elements have visible focus styles
- [ ] All standalone icons have `aria-label`
- [ ] Heading hierarchy is logical on every new page/section
- [ ] No color-only information conveyance

---

## Phase Build Order

Complete each phase fully. Do not begin the next until the current is verified.

```
Phase 0   Project bootstrap, packages, config, CLAUDE.md
Phase 1   Core infrastructure (lib/, hooks/, providers, layout)
Phase 2   Design system components (GlassCard, GlowButton, GradientText, etc.)
Phase 3   Layout shell (Navbar, Footer, Section, Container)
Phase 4   Homepage (section by section — Hero first, then in order)
Phase 5   Inner pages (Pricing, Solutions ×3, Platform, About, Contact, Blog)
Phase 6   Polish, SEO, performance, accessibility, Lighthouse audit
```

Within Phase 4 and 5, build **one section or page at a time**. Never generate multiple page sections in a single response without being asked.

---

## What Claude Must Never Do

- Generate a complete page in one response
- Use dark backgrounds or dark-mode classes
- Use hardcoded hex/rgb colors in components
- Use `any` as a TypeScript type
- Skip the quality checklist before saying a phase is done
- Create barrel `index.ts` files in `components/` or `lib/`
- Add comments explaining what code does — code should be self-explanatory
- Add placeholder/lorem ipsum content — use real brand-aligned copy
- Create a "template-looking" layout — every element should feel purposeful
- Use cheap drop shadows or thick colored borders — follow the glassmorphism recipe
