# Industries Page — Design Spec
_2026-04-24_

## Overview

A dedicated `/industries` page that argues Duppy works across any operationally complex business while anchoring credibility in building supply. Matches the homepage in visual feel, typography, component style, and color palette. Four sections: hero, industry grid, building supply deep-dive, catch-all closer.

---

## Routing

- New Next.js page at `app/industries/page.tsx`
- Nav "Industries" link updated from `#industries` → `/industries`
- Reuses existing `Nav` and `Footer` components
- Page wraps sections in `<main>` identical to `app/page.tsx`

---

## Section 1 — Hero

**Background:** `bg-duppy-dark` (#0A0A0A)  
**Layout:** Full-width, centered content, `py-32 px-6`

**SectionLabel:** "Built to adapt" (light variant, amber)

**Headline (Fraunces serif, clamp 36px→64px):**
> One operator. Every industry.

**Amber emphasis:** "Every industry." in `text-duppy-amber italic`

**Subhead (DM Sans, text-lg, duppy-muted, max-w-2xl centered):**
> Duppy connects to whatever your business already runs on — ERP, email, calendar, CRM — and gives your team one interface to run all of it. The operator is ours. Everything else is yours.

**Decorative elements:**
- Ghost mark (large, ~340px, white, 3% opacity, `ghost-float`, right side, partially off-canvas) — same treatment as homepage hero
- Subtle amber radial glow bottom-left, same as other dark sections

**No CTA button in hero** — page earns it at the bottom.

---

## Section 2 — Industry Card Grid

**Background:** `bg-duppy-dark` (continues from hero, separated by a subtle border-t border-white/[0.06])  
**Layout:** `py-28 px-6`, max-w-7xl centered

**Intro copy (above grid):**
- SectionLabel: "Six industries. One operating layer."
- No headline — the grid speaks for itself. One short line of body copy: "Each deployment is trained on your data, connected to your tools, and branded to your company."

**Grid:** 2×3 on desktop (`grid-cols-2 lg:grid-cols-3`), 1-col on mobile. `gap-5`.

**Card design:** Identical to homepage industry cards —
- `bg-white/[0.04]` surface, `border border-white/8`, `rounded-2xl`, `p-8`
- Hover: `bg-white/[0.07]`, `border-duppy-amber/25`, amber top-border sweep (`scale-x-0 → scale-x-100`)
- Number: italic Fraunces, `text-duppy-amber/30` → `text-duppy-amber/60` on hover
- Industry name: Fraunces serif, 18px, white
- Description: DM Sans, `text-sm`, `text-duppy-muted`
- Integration tags: small muted pills at bottom of card — e.g. `BisTrack · Outlook · Google Workspace`

**Six cards:**

| # | Industry | Pain line | Integrations shown |
|---|---|---|---|
| 01 | Building Supply & Lumber | Counter staff juggling BisTrack, email, and spreadsheets to serve one customer. | BisTrack · Spruce · DMSi · Outlook |
| 02 | Trucking & Freight | Dispatch living in four systems while drivers wait on the phone for load details. | TMS · ELD · Outlook · Google Workspace |
| 03 | Auto Dealerships | Inventory in one system, leads in another, service in a third — nothing talks to anything. | DMS · CRM · Outlook · Calendar |
| 04 | Wholesale Distribution | Orders, invoicing, and customer follow-up split across software your team barely uses. | ERP · CRM · Outlook · QuickBooks |
| 05 | Legal & Professional Services | Billing, case files, and client comms each living in a different tool. | Practice Mgmt · Billing · Outlook · Calendar |
| 06 | Electrical & HVAC Wholesale | Same operational complexity as building supply — inventory, quotes, deliveries — with no integrated layer. | ERP · Outlook · Quoting · Calendar |

---

## Section 3 — Building Supply Deep-Dive

**Background:** `bg-duppy-cream-alt` (light, matches CTA section) — creates a deliberate break from the dark run  
**Layout:** `py-28 px-6`, max-w-7xl, two-column on desktop (copy left, terminal right), stacked on mobile

**SectionLabel:** "Where we started"

**Headline (Fraunces serif, clamp 32px→52px, text-duppy-text):**
> Built from the inside out.

**Body copy (DM Sans, text-lg, text-duppy-body, max-w-lg):**
> Duppy started in building supply because that's where the problem is most visible. Years spent inside the industry — watching counter staff switch between BisTrack and Outlook and spreadsheets to handle a single customer — made it obvious that the tools weren't the problem. The missing layer was.
>
> BisTrack knows your inventory. Outlook knows your customers. Your calendar knows your schedule. Duppy connects all three and gives your team one place to run everything.

**Integration logos:** Same muted logo strip as the homepage — BisTrack, Spruce, DMSi, Google Workspace, Outlook — at low opacity with hover lift. Label above: "Connects to the tools you already use."

**Right column — DuppyTerminal component:**
Reuse the existing `DuppyTerminal` component from the homepage. Same dark glass terminal, same amber accents. This grounds the section in something concrete and visual.

**Below the two columns — Crown OS proof point:**
A slim `border-t border-duppy-cream-deep/60` rule, then a single line in muted italic Fraunces:
> *"Crown OS is live at Crown Building Supplies — inventory, orders, invoices, and emails, all from one command."*
Amber ghost icon (14px) to the left. No button — just the statement.

---

## Section 4 — Catch-All Closer

**Background:** `bg-duppy-dark`  
**Layout:** `py-28 px-6`, max-w-3xl centered, full-width

**SectionLabel:** "Built for yours too"

**Headline (Fraunces serif, clamp 32px→52px, white):**
> If your team juggles more than one system, Duppy can run it.

**Body copy (DM Sans, text-lg, text-duppy-muted, centered, max-w-xl):**
> Every business has its own tools, its own language, and its own way of working. Duppy learns all of it. If your operation runs on software that doesn't talk to itself — and your people pay the price — that's exactly what Duppy is built to fix.

**Floating ghost:** Amber ghost, `ghost-float`, centered above the headline — same treatment as the homepage CTA section. Size 72px desktop, 96px mobile.

**CTA button (amber, with ghost icon left, same as nav/CTA section):**
> Tell us about your operation → `mailto:hello@duppy.ai`

---

## Components Reused

| Component | Where used |
|---|---|
| `Nav` | Page shell |
| `Footer` | Page shell |
| `GhostIcon` | Hero decoration, catch-all float, Crown proof point |
| `SectionLabel` | All four sections |
| `FadeInSection` | Cards, deep-dive columns, catch-all |
| `DuppyTerminal` | Building supply deep-dive right column |
| `MarqueeBand` | Optional — one amber band between grid and deep-dive |

## New Components

| Component | Purpose |
|---|---|
| `IndustryCard` | Extracted card with number, name, desc, integration tags, hover effects. Used in grid. |

---

## Visual Rhythm (section backgrounds in order)

```
Hero             → dark
Card Grid        → dark (border-t separator)
Deep-Dive        → cream/light
Catch-All Closer → dark
Footer           → dark
```

Same light/dark alternation as the homepage — one cream break in the middle provides visual relief without breaking the brand feel.

---

## Copy Guardrails

- No "B2B", no "enterprise", no "SMB" — describe operations plainly
- No "12,000 dealers" stat or any dealer count figures
- No mention of specific Duppy pricing
- "Powered by Duppy" attribution language used sparingly (Crown OS proof point only)
- Avoid "seamless", "leverage", "synergy", "streamline" — describe the actual action

---

## Out of Scope

- Individual industry sub-pages (future)
- Industry-specific demo request forms (future)
- Animated phone mockups on this page (already on homepage)
