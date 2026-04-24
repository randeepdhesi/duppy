# Industries Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `/industries` page that shows Duppy's six target industries and building supply deep-dive, matching the homepage in visual quality and component patterns.

**Architecture:** New Next.js App Router page at `app/industries/page.tsx` composed of five new section components. One shared UI component (`IndustryCard`) extracted for reuse in the grid. All components follow the existing pattern: TypeScript, Tailwind, Fraunces/DM Sans fonts, existing UI primitives (`GhostIcon`, `SectionLabel`, `FadeInSection`). Nav "Industries" link updated from anchor to route.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4, React Testing Library + Jest, existing components in `components/sections/` and `components/ui/`.

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Create | `components/ui/IndustryCard.tsx` | Single industry card: number, name, desc, integration tags, hover effects |
| Create | `components/ui/__tests__/IndustryCard.test.tsx` | Tests for IndustryCard |
| Create | `components/sections/IndustryHero.tsx` | Page hero: headline, subhead, ghost mark |
| Create | `components/sections/__tests__/IndustryHero.test.tsx` | Tests for IndustryHero |
| Create | `components/sections/IndustryGrid.tsx` | 6-card grid section using IndustryCard |
| Create | `components/sections/__tests__/IndustryGrid.test.tsx` | Tests for IndustryGrid |
| Create | `components/sections/BuildingSupplyDeepDive.tsx` | Light-bg deep-dive: copy, terminal demo, integration list, Crown proof |
| Create | `components/sections/__tests__/BuildingSupplyDeepDive.test.tsx` | Tests for BuildingSupplyDeepDive |
| Create | `components/sections/IndustryCatchAll.tsx` | Dark closer: headline, body, amber CTA button |
| Create | `components/sections/__tests__/IndustryCatchAll.test.tsx` | Tests for IndustryCatchAll |
| Create | `app/industries/page.tsx` | Page shell: Nav + five sections + Footer + metadata |
| Modify | `components/sections/Nav.tsx` | Change Industries href from `#industries` to `/industries` |
| Modify | `components/sections/__tests__/Nav.test.tsx` | Update href assertion to match `/industries` |

---

## Task 1: IndustryCard component

**Files:**
- Create: `components/ui/IndustryCard.tsx`
- Create: `components/ui/__tests__/IndustryCard.test.tsx`

- [ ] **Step 1: Write the failing test**

```typescript
// components/ui/__tests__/IndustryCard.test.tsx
import { render, screen } from '@testing-library/react'
import IndustryCard from '../IndustryCard'

describe('IndustryCard', () => {
  const props = {
    num: '01',
    name: 'Building Supply & Lumber',
    desc: 'Counter staff juggling multiple systems to serve one customer.',
    integrations: ['BisTrack', 'Spruce', 'Outlook'],
  }

  it('renders the industry number', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('renders the industry name', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText('Building Supply & Lumber')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText(/Counter staff juggling/i)).toBeInTheDocument()
  })

  it('renders all integration tags joined with ·', () => {
    render(<IndustryCard {...props} />)
    expect(screen.getByText('BisTrack · Spruce · Outlook')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest components/ui/__tests__/IndustryCard.test.tsx --no-coverage
```

Expected: FAIL — `IndustryCard` module not found.

- [ ] **Step 3: Implement IndustryCard**

```typescript
// components/ui/IndustryCard.tsx
interface Props {
  num: string
  name: string
  desc: string
  integrations: string[]
}

export default function IndustryCard({ num, name, desc, integrations }: Props) {
  return (
    <div className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-duppy-amber/25 transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-duppy-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
      <span
        className="text-duppy-amber/30 group-hover:text-duppy-amber/60 transition-colors duration-300 block mb-3"
        style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '12px', fontStyle: 'italic' }}
      >
        {num}
      </span>
      <p
        className="text-white mb-2"
        style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px' }}
      >
        {name}
      </p>
      <p className="text-duppy-muted text-sm leading-relaxed mb-4">{desc}</p>
      <p className="text-duppy-muted/50 text-xs tracking-wide">
        {integrations.join(' · ')}
      </p>
    </div>
  )
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest components/ui/__tests__/IndustryCard.test.tsx --no-coverage
```

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/ui/IndustryCard.tsx components/ui/__tests__/IndustryCard.test.tsx
git commit -m "feat: add IndustryCard UI component"
```

---

## Task 2: IndustryHero section

**Files:**
- Create: `components/sections/IndustryHero.tsx`
- Create: `components/sections/__tests__/IndustryHero.test.tsx`

- [ ] **Step 1: Write the failing test**

```typescript
// components/sections/__tests__/IndustryHero.test.tsx
import { render, screen } from '@testing-library/react'
import IndustryHero from '../IndustryHero'

describe('IndustryHero', () => {
  it('renders the main headline', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/One operator/i)).toBeInTheDocument()
  })

  it('renders the amber emphasis text', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/Every industry/i)).toBeInTheDocument()
  })

  it('renders the subheadline', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/connects to whatever your business already runs on/i)).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<IndustryHero />)
    expect(screen.getByText(/Built to adapt/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest components/sections/__tests__/IndustryHero.test.tsx --no-coverage
```

Expected: FAIL — `IndustryHero` module not found.

- [ ] **Step 3: Implement IndustryHero**

```typescript
// components/sections/IndustryHero.tsx
import GhostIcon from '@/components/icons/GhostIcon'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeInSection from '@/components/ui/FadeInSection'

export default function IndustryHero() {
  return (
    <section className="relative bg-duppy-dark pt-40 pb-28 px-6 overflow-hidden">
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none ghost-float"
        aria-hidden="true"
      >
        <GhostIcon size={340} color="white" className="opacity-[0.03]" bgColor="transparent" />
      </div>
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(232,148,58,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="max-w-3xl">
          <SectionLabel light className="mb-5 block">Built to adapt</SectionLabel>
          <h1
            className="text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            One operator.{' '}
            <em className="text-duppy-amber">Every industry.</em>
          </h1>
          <p className="text-duppy-muted text-lg leading-relaxed max-w-2xl">
            Duppy connects to whatever your business already runs on — ERP, email, calendar, CRM — and gives your team one interface to run all of it. The operator is ours. Everything else is yours.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest components/sections/__tests__/IndustryHero.test.tsx --no-coverage
```

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/IndustryHero.tsx components/sections/__tests__/IndustryHero.test.tsx
git commit -m "feat: add IndustryHero section"
```

---

## Task 3: IndustryGrid section

**Files:**
- Create: `components/sections/IndustryGrid.tsx`
- Create: `components/sections/__tests__/IndustryGrid.test.tsx`

- [ ] **Step 1: Write the failing test**

```typescript
// components/sections/__tests__/IndustryGrid.test.tsx
import { render, screen } from '@testing-library/react'
import IndustryGrid from '../IndustryGrid'

describe('IndustryGrid', () => {
  it('renders all six industry names', () => {
    render(<IndustryGrid />)
    expect(screen.getByText('Building Supply & Lumber')).toBeInTheDocument()
    expect(screen.getByText('Trucking & Freight')).toBeInTheDocument()
    expect(screen.getByText('Auto Dealerships')).toBeInTheDocument()
    expect(screen.getByText('Wholesale Distribution')).toBeInTheDocument()
    expect(screen.getByText('Legal & Professional Services')).toBeInTheDocument()
    expect(screen.getByText('Electrical & HVAC Wholesale')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<IndustryGrid />)
    expect(screen.getByText(/Six industries/i)).toBeInTheDocument()
  })

  it('renders the intro copy', () => {
    render(<IndustryGrid />)
    expect(screen.getByText(/trained on your data/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest components/sections/__tests__/IndustryGrid.test.tsx --no-coverage
```

Expected: FAIL — `IndustryGrid` module not found.

- [ ] **Step 3: Implement IndustryGrid**

```typescript
// components/sections/IndustryGrid.tsx
import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import IndustryCard from '@/components/ui/IndustryCard'

const industries = [
  {
    num: '01',
    name: 'Building Supply & Lumber',
    desc: 'Counter staff juggling BisTrack, email, and spreadsheets to serve one customer.',
    integrations: ['BisTrack', 'Spruce', 'DMSi', 'Outlook'],
  },
  {
    num: '02',
    name: 'Trucking & Freight',
    desc: 'Dispatch living in four systems while drivers wait on the phone for load details.',
    integrations: ['TMS', 'ELD', 'Outlook', 'Google Workspace'],
  },
  {
    num: '03',
    name: 'Auto Dealerships',
    desc: 'Inventory in one system, leads in another, service in a third — nothing talks to anything.',
    integrations: ['DMS', 'CRM', 'Outlook', 'Calendar'],
  },
  {
    num: '04',
    name: 'Wholesale Distribution',
    desc: 'Orders, invoicing, and customer follow-up split across software your team barely uses.',
    integrations: ['ERP', 'CRM', 'Outlook', 'QuickBooks'],
  },
  {
    num: '05',
    name: 'Legal & Professional Services',
    desc: 'Billing, case files, and client comms each living in a different tool.',
    integrations: ['Practice Mgmt', 'Billing', 'Outlook', 'Calendar'],
  },
  {
    num: '06',
    name: 'Electrical & HVAC Wholesale',
    desc: 'Same operational complexity as building supply — inventory, quotes, deliveries — with no integrated layer.',
    integrations: ['ERP', 'Outlook', 'Quoting', 'Calendar'],
  },
]

export default function IndustryGrid() {
  return (
    <section className="relative bg-duppy-dark py-24 px-6 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="mb-12">
          <SectionLabel light className="mb-4 block">Six industries. One operating layer.</SectionLabel>
          <p className="text-duppy-muted text-lg max-w-xl">
            Each deployment is trained on your data, connected to your tools, and branded to your company.
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <FadeInSection key={ind.num} delay={i * 0.07}>
              <IndustryCard {...ind} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest components/sections/__tests__/IndustryGrid.test.tsx --no-coverage
```

Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/IndustryGrid.tsx components/sections/__tests__/IndustryGrid.test.tsx
git commit -m "feat: add IndustryGrid section"
```

---

## Task 4: BuildingSupplyDeepDive section

**Files:**
- Create: `components/sections/BuildingSupplyDeepDive.tsx`
- Create: `components/sections/__tests__/BuildingSupplyDeepDive.test.tsx`

- [ ] **Step 1: Write the failing test**

```typescript
// components/sections/__tests__/BuildingSupplyDeepDive.test.tsx
import { render, screen } from '@testing-library/react'
import BuildingSupplyDeepDive from '../BuildingSupplyDeepDive'

describe('BuildingSupplyDeepDive', () => {
  it('renders the section label', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Where we started/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Built from the inside out/i)).toBeInTheDocument()
  })

  it('renders the founder-market copy', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/missing layer/i)).toBeInTheDocument()
  })

  it('renders the Crown OS proof point', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Crown OS is live/i)).toBeInTheDocument()
  })

  it('renders BisTrack in the integration list', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getAllByText(/BisTrack/i).length).toBeGreaterThan(0)
  })

  it('renders the terminal demo command', () => {
    render(<BuildingSupplyDeepDive />)
    expect(screen.getByText(/Norwegian Fluted/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest components/sections/__tests__/BuildingSupplyDeepDive.test.tsx --no-coverage
```

Expected: FAIL — `BuildingSupplyDeepDive` module not found.

- [ ] **Step 3: Implement BuildingSupplyDeepDive**

```typescript
// components/sections/BuildingSupplyDeepDive.tsx
import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

const integrations = ['BisTrack', 'Spruce', 'DMSi', 'Google Workspace', 'Outlook']

function TerminalDemo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
        <div className="ml-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-duppy-amber/80" />
          <span className="text-duppy-muted text-xs tracking-[0.15em] uppercase">
            Crown OS · Powered by Duppy
          </span>
        </div>
      </div>
      <div className="p-6 space-y-5">
        <div className="flex gap-3 items-start">
          <span className="text-duppy-amber font-mono text-sm mt-0.5 flex-shrink-0">›</span>
          <p className="text-white/80 text-sm font-mono leading-relaxed">
            Pull inventory on 16' Norwegian Fluted in Teak, create an order for Pacific Coast Builders, and email Jim the invoice.
          </p>
        </div>
        <div className="border-t border-white/[0.08] pt-5 space-y-3">
          <p className="text-duppy-amber text-xs uppercase tracking-[0.18em] font-semibold">Done.</p>
          <p className="text-duppy-muted text-sm font-mono leading-relaxed">
            16 pieces confirmed at Burnaby. Order #4821 created in BisTrack. Invoice sent to jim@pacificcoastbuilders.com — $3,117.76 + tax. Delivery set for Friday.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BuildingSupplyDeepDive() {
  return (
    <section className="relative bg-duppy-cream-alt py-28 px-6 overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(232,148,58,0.06) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <FadeInSection>
            <SectionLabel className="mb-5 block">Where we started</SectionLabel>
            <h2
              className="text-duppy-text leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Built from the inside out.
            </h2>
            <div className="space-y-4 text-duppy-body text-lg leading-relaxed mb-10">
              <p>
                Duppy started in building supply because that's where the problem is most visible. Years spent inside the industry — watching counter staff switch between BisTrack and Outlook and spreadsheets to handle a single customer — made it obvious that the tools weren't the problem. The missing layer was.
              </p>
              <p>
                BisTrack knows your inventory. Outlook knows your customers. Your calendar knows your schedule. Duppy connects all three and gives your team one place to run everything.
              </p>
            </div>

            <p className="text-duppy-body/60 text-sm uppercase tracking-widest font-semibold mb-4">
              Connects to the tools you already use
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="text-duppy-body/40 hover:text-duppy-body/70 transition-colors text-sm font-semibold tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-2.5 pt-8 border-t border-duppy-cream-deep/60">
              <GhostIcon size={14} color="#E8943A" className="opacity-70 flex-shrink-0 mt-0.5" />
              <p
                className="text-duppy-body/60 text-sm italic leading-relaxed"
                style={{ fontFamily: 'var(--font-fraunces), serif' }}
              >
                Crown OS is live at Crown Building Supplies — inventory, orders, invoices, and emails, all from one command.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <TerminalDemo />
          </FadeInSection>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest components/sections/__tests__/BuildingSupplyDeepDive.test.tsx --no-coverage
```

Expected: PASS — 6 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/BuildingSupplyDeepDive.tsx components/sections/__tests__/BuildingSupplyDeepDive.test.tsx
git commit -m "feat: add BuildingSupplyDeepDive section"
```

---

## Task 5: IndustryCatchAll section

**Files:**
- Create: `components/sections/IndustryCatchAll.tsx`
- Create: `components/sections/__tests__/IndustryCatchAll.test.tsx`

- [ ] **Step 1: Write the failing test**

```typescript
// components/sections/__tests__/IndustryCatchAll.test.tsx
import { render, screen } from '@testing-library/react'
import IndustryCatchAll from '../IndustryCatchAll'

describe('IndustryCatchAll', () => {
  it('renders the section label', () => {
    render(<IndustryCatchAll />)
    expect(screen.getByText(/Built for yours too/i)).toBeInTheDocument()
  })

  it('renders the headline', () => {
    render(<IndustryCatchAll />)
    expect(screen.getByText(/juggles more than one system/i)).toBeInTheDocument()
  })

  it('renders the body copy', () => {
    render(<IndustryCatchAll />)
    expect(screen.getByText(/its own tools/i)).toBeInTheDocument()
  })

  it('renders the CTA button linking to email', () => {
    render(<IndustryCatchAll />)
    const link = screen.getByText(/Tell us about your operation/i).closest('a')!
    expect(link).toHaveAttribute('href', 'mailto:hello@duppy.ai')
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest components/sections/__tests__/IndustryCatchAll.test.tsx --no-coverage
```

Expected: FAIL — `IndustryCatchAll` module not found.

- [ ] **Step 3: Implement IndustryCatchAll**

```typescript
// components/sections/IndustryCatchAll.tsx
import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

export default function IndustryCatchAll() {
  return (
    <section className="relative bg-duppy-dark py-28 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(232,148,58,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeInSection>
          <div className="flex justify-center mb-8">
            <div className="[&>svg]:!w-full [&>svg]:!h-full w-24 h-24 md:w-[72px] md:h-[72px]">
              <GhostIcon size={96} color="#E8943A" className="ghost-float" />
            </div>
          </div>
          <SectionLabel light className="mb-5 block">Built for yours too</SectionLabel>
          <h2
            className="text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            If your team juggles more than one system,{' '}
            <em className="text-duppy-amber">Duppy can run it.</em>
          </h2>
          <p className="text-duppy-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Every business has its own tools, its own language, and its own way of working. Duppy learns all of it. If your operation runs on software that doesn't talk to itself — and your people pay the price — that's exactly what Duppy is built to fix.
          </p>
          <a
            href="mailto:hello@duppy.ai"
            className="inline-flex items-center gap-3 bg-duppy-amber text-white font-semibold text-lg px-10 py-4 rounded-[12px] hover:bg-duppy-amber-dark transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <GhostIcon size={20} color="white" bgColor="transparent" />
            Tell us about your operation
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest components/sections/__tests__/IndustryCatchAll.test.tsx --no-coverage
```

Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/IndustryCatchAll.tsx components/sections/__tests__/IndustryCatchAll.test.tsx
git commit -m "feat: add IndustryCatchAll section"
```

---

## Task 6: Industries page

**Files:**
- Create: `app/industries/page.tsx`

- [ ] **Step 1: Create the page**

```typescript
// app/industries/page.tsx
import type { Metadata } from 'next'
import Nav from '@/components/sections/Nav'
import IndustryHero from '@/components/sections/IndustryHero'
import IndustryGrid from '@/components/sections/IndustryGrid'
import MarqueeBand from '@/components/ui/MarqueeBand'
import BuildingSupplyDeepDive from '@/components/sections/BuildingSupplyDeepDive'
import IndustryCatchAll from '@/components/sections/IndustryCatchAll'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Industries — Duppy',
  description: 'Duppy builds AI operating systems for any operationally complex business. Built for building supply, trucking, auto dealerships, wholesale distribution, legal services, and more.',
}

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        <IndustryHero />
        <IndustryGrid />
        <MarqueeBand variant="amber" />
        <BuildingSupplyDeepDive />
        <IndustryCatchAll />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Run all new tests together to confirm everything still passes**

```bash
npx jest components/ui/__tests__/IndustryCard.test.tsx components/sections/__tests__/IndustryHero.test.tsx components/sections/__tests__/IndustryGrid.test.tsx components/sections/__tests__/BuildingSupplyDeepDive.test.tsx components/sections/__tests__/IndustryCatchAll.test.tsx --no-coverage
```

Expected: PASS — 17 tests pass across 5 suites.

- [ ] **Step 4: Commit**

```bash
git add app/industries/page.tsx
git commit -m "feat: add /industries page"
```

---

## Task 7: Update Nav link + push

**Files:**
- Modify: `components/sections/Nav.tsx` lines 6–10 (navLinks array)
- Modify: `components/sections/__tests__/Nav.test.tsx`

- [ ] **Step 1: Update the navLinks array in Nav.tsx**

Find this in `components/sections/Nav.tsx`:
```typescript
const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
]
```

Replace with:
```typescript
const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '#about' },
]
```

- [ ] **Step 2: Update the Nav test**

Find this in `components/sections/__tests__/Nav.test.tsx`:
```typescript
it('renders all three nav links', () => {
```

Read the full test and locate any assertion checking for `#industries`. Update it to `/industries`. The exact test content will vary — open the file and search for `#industries` or `industries` and update the href value accordingly.

- [ ] **Step 3: Run Nav test to confirm it passes**

```bash
npx jest components/sections/__tests__/Nav.test.tsx --no-coverage
```

Expected: PASS.

- [ ] **Step 4: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit and push**

```bash
git add components/sections/Nav.tsx components/sections/__tests__/Nav.test.tsx
git commit -m "feat: update Industries nav link to /industries route"
git push origin main
```

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Covered by |
|---|---|
| `/industries` route | Task 6 |
| Hero: "Built to adapt" label, "One operator. Every industry." headline | Task 2 |
| Hero: subhead copy, ghost mark, amber glow | Task 2 |
| 6 industry cards in 2×3 grid, numbered 01–06 | Tasks 1 + 3 |
| Card: name, pain line, integration tags, hover amber top-border | Task 1 |
| Industry order: Building Supply, Trucking, Auto, Wholesale, Legal, Electrical | Task 3 |
| Amber MarqueeBand between grid and deep-dive | Task 6 |
| Deep-dive: light background, founder-market copy, no dealer count | Task 4 |
| Deep-dive: integration list (BisTrack, Spruce, DMSi, Workspace, Outlook) | Task 4 |
| Deep-dive: terminal demo with Norwegian Fluted command | Task 4 |
| Deep-dive: Crown OS proof point italic line | Task 4 |
| Catch-all: ghost float, "Built for yours too", plain-language copy | Task 5 |
| Catch-all: amber CTA "Tell us about your operation" → mailto | Task 5 |
| Nav "Industries" link updated to `/industries` | Task 7 |
| Page metadata (title + description) | Task 6 |
| No B2B jargon, no dealer count stats | Verified in copy above |
