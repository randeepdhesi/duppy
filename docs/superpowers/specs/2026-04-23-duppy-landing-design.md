# duppy.ai Landing Page — Design Spec
**Date:** 2026-04-23
**Status:** Approved

---

## Overview

A marketing landing page for duppy.ai — a company that builds custom AI operating systems for businesses. The design takes inspiration from kraken.com and phantom.com: purple accents on predominantly light/white layouts, with dark sections used sparingly for contrast. The feel is clean, spacious, and premium. NOT a full dark theme.

---

## Stack

- **Framework:** Next.js 14, App Router
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Inter from Google Fonts (via `next/font/google`)

---

## Architecture

```
app/
  layout.tsx          # font setup, metadata
  page.tsx            # imports all sections in order
components/
  ui/
    Button.tsx        # reusable button variants
    SectionLabel.tsx  # small purple label above headings
  sections/
    Nav.tsx
    Hero.tsx
    WhatMakesDuppy.tsx
    HowItWorks.tsx
    PoweredByDuppy.tsx
    BuiltForBuildingSupply.tsx
    QuoteSection.tsx
    CtaSection.tsx
    Footer.tsx
```

---

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#FFFFFF` | Most content sections |
| `bg-dark` | `#0A0A0A` | Hero, HowItWorks, Footer |
| `bg-quote` | `#111111` | Quote section |
| `bg-offwhite` | `#F9FAFB` | BuiltForBuildingSupply |
| `text-heading` | `#111111` | Headings on light sections |
| `text-body` | `#6B7280` | Body text on light sections |
| `text-light-heading` | `#FFFFFF` | Headings on dark sections |
| `text-light-body` | `#9CA3AF` | Body text on dark sections |
| `accent` | `#6C3FC5` | Buttons, ghost icon, highlights, labels, card icons |
| `card-border` | `#E5E7EB` | Card borders on light sections |
| `card-dark` | `#1A1A1A` | Card backgrounds on dark sections |

---

## Typography

- **Font:** Inter (Google Fonts)
- **Hero headline:** 64px bold desktop / 36px mobile, letter-spacing -1px
- **Section headings:** 40px bold, letter-spacing -0.5px
- **Body:** 18px, line-height 1.6
- **Small labels:** 13px uppercase, letter-spacing 0.08em, accent color

---

## Section Rhythm

Dark → Light → Dark → Light → Light(off-white) → Dark → Light → Dark

| # | Section | Background |
|---|---------|------------|
| 0 | Nav | Transparent over hero; white + blur after scroll |
| 1 | Hero | `#0A0A0A` |
| 2 | What Makes Duppy Different | `#FFFFFF` |
| 3 | How It Works | `#0A0A0A` |
| 4 | Powered By Duppy | `#FFFFFF` |
| 5 | Built For Building Supply | `#F9FAFB` |
| 6 | Quote Section | `#111111` |
| 7 | CTA Section | `#FFFFFF` with subtle purple gradient tint at bottom |
| 8 | Footer | `#0A0A0A` |

---

## Section Specs

### Nav
- **Sticky**, `position: fixed`, full width, `z-50`
- **Default state (over hero):** fully transparent, white text/links
- **Scrolled state (past hero):** white background, `backdrop-blur-md`, `border-b border-gray-100`, dark text/links — triggered when `window.scrollY > 50` via scroll event listener
- **Left:** Purple ghost icon SVG + "duppy.ai" in lowercase bold (Inter)
- **Right:** "How it works" / "Industries" / "About" as nav links + "Get in touch" purple filled button
- **Mobile:** hamburger icon toggles a slide-down menu with same links stacked vertically; closes on nav link click or hamburger toggle

### Hero
- **Full viewport height** (`min-h-screen`)
- **Background:** `#0A0A0A`
- **Decorative:** Ghost silhouette SVG centered at 4% opacity; radial purple glow (`#6C3FC5` at ~15% opacity) behind center text, `blur-3xl`, roughly 600px diameter
- **Layout:** Centered vertically and horizontally
- **Headline (white):** "Your business already has the tools. It just needs a brain."
- **Subline (gray `#9CA3AF`):** "Duppy builds AI operating systems that connect your ERP, email, calendar, and CRM into one voice-driven interface — branded to your company, trained on your data, deployed in days."
- **Buttons:**
  - "See it in action" — purple fill (`#6C3FC5`), white text, rounded-full, px-8 py-4
  - "Learn more" — white outline, white text, rounded-full, px-8 py-4

### What Makes Duppy Different
- **Background:** `#FFFFFF`
- **Label:** "Why Duppy" (accent, uppercase, small)
- **Heading:** "Three commitments that shape every deployment."
- **Three cards** in a row (stack on mobile), each: `bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm`
  - Hover: `translateY(-4px)`, shadow increases — CSS transition
  - Card 1: Inline SVG shield/badge icon in accent purple · "Your Brand" · "Every deployment carries your name, your colors, your identity. Your team sees their company, not ours."
  - Card 2: Inline SVG grid/layers icon in accent purple · "Your Systems" · "We connect to what you already use. BisTrack, Spruce, Google Workspace, whatever runs your operation. Nothing gets replaced."
  - Card 3: Inline SVG brain/sparkle icon in accent purple · "Your AI" · "Trained on your product catalog, your pricing, your customers. It doesn't guess. It knows."
  - Icons are simple inline SVGs — no external icon library dependency

### How It Works
- **Background:** `#0A0A0A`
- **Label:** "How it works" (accent)
- **Heading (white):** "One voice command. Every system handled."
- **Center:** Phone screenshot placeholder — `max-w-[380px]`, centered, `bg-[#1A1A1A] rounded-3xl`, subtle purple box-shadow/glow behind it
- **Body text (gray):** "Your counter person says one sentence. Duppy checks inventory, drafts the order, sends the invoice, and schedules delivery. All logged in your ERP."

### Powered By Duppy
- **Background:** `#FFFFFF`
- **Label:** "Your OS, our engine"
- **Heading:** "Your business. Your brand. Powered by Duppy."
- **Subline:** "Every customer gets their own branded operating system. Same brain, different face."
- **Three phone placeholders** side by side (stack on mobile):
  - "Crown OS" — gold accent (`#B8960C`)
  - "Southridge OS" — blue accent (`#2563EB`)
  - "Pacific OS" — green accent (`#16A34A`)
  - Each: `bg-[#1A1A1A] rounded-3xl` placeholder with label below

### Built For Building Supply
- **Background:** `#F9FAFB`
- **Label:** "Industry focus"
- **Two-column layout** (stack on mobile):
  - Left: Heading "Built for building supply. Ready for anything." + body copy about BisTrack/Spruce/DMSi
  - Right: Image/graphic placeholder — `bg-gray-200 rounded-2xl`, aspect-ratio 4/3
- **Body:** "We started in lumber and building materials because we know the industry. Duppy sits on top of BisTrack, Spruce, and DMSi — the ERPs that run this space — and makes them actually usable. But the architecture works anywhere."

### Quote Section
- **Background:** `#111111`
- **Pull quote (white, 28px, font-medium):** "BisTrack must be an acceptable bookkeeping tool, however, it is a dismal failure as a sales tool."
- **Purple left border:** `border-l-4 border-[#6C3FC5]`, `pl-8`
- **Attribution (small gray):** "— BisTrack user review, Software Advice"
- **Tagline below (white bold):** "We built the layer that fixes this."

### CTA Section
- **Background:** `#FFFFFF` with `bg-gradient-to-b from-white to-purple-50/30` at bottom
- **Heading:** "Ready to put an AI operator to work in your business?"
- **Button:** "Get in touch" — large, purple fill, centered, `href="mailto:hello@duppy.ai"` (placeholder until contact form exists)
- **Sub-text (gray):** "See a live demo in under 2 minutes."

### Footer
- **Background:** `#0A0A0A`
- **Left column:** Ghost icon + "duppy.ai" + "The spirit behind your operation" in small gray
- **Right columns:**
  - Product: "How it works", "Industries"
  - Company: "About", "Contact"
- **Bottom bar:** Divider + "© 2026 Duppy.ai. All rights reserved."

---

## Animations

- **Scroll fade-in:** Framer Motion `useInView` — each section/card fades in from `y: 20, opacity: 0` to `y: 0, opacity: 1`, duration 0.6s, ease "easeOut", `once: true`
- **Card hover:** CSS `transition-all duration-300` — `hover:-translate-y-1 hover:shadow-lg`
- **Nav transition:** CSS `transition-all duration-300` on background/border change
- **Ghost glow:** Static, no animation (keep it subtle and performant)

---

## Responsive Breakpoints

- **Mobile (<768px):**
  - Nav collapses to hamburger
  - Hero headline: 36px
  - Cards stack vertically
  - Phone placeholders stack vertically
  - Two-column sections stack
- **Tablet (768px–1024px):**
  - Cards: 2-col grid
  - Phone placeholders: 2-col grid
- **Desktop (≥1024px):**
  - Full layouts as described above

---

## Ghost Icon

A simple ghost SVG for the nav logo and hero background:
- Nav: ~28px, filled purple (`#6C3FC5`)
- Hero background: large (400–500px), white at 4% opacity, `pointer-events-none`

---

## Notes

- All screenshot placeholders (`Crown OS`, `Southridge OS`, `Pacific OS`, phone in HowItWorks) are styled `div` containers — real screenshots dropped in later
- No external dependencies beyond Next.js, Tailwind, Framer Motion, and next/font
- Ghost SVG drawn inline (no external asset needed at launch)
