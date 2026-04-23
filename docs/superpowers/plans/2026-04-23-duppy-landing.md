# duppy.ai Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the duppy.ai marketing landing page as a Next.js 14 App Router site with Tailwind CSS and Framer Motion scroll animations.

**Architecture:** Nine section components in `components/sections/`, shared UI primitives in `components/ui/` and `components/icons/`, composed in `app/page.tsx`. `FadeInSection` is the only `'use client'` animation wrapper — all section components are Server Components. `Nav` is `'use client'` for scroll and hamburger state.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion 11, Inter (next/font/google), Jest + @testing-library/react

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/layout.tsx` | Inter font, metadata, html/body wrapper |
| `app/globals.css` | Tailwind imports, scroll-behavior smooth |
| `app/page.tsx` | Compose all 9 sections |
| `tailwind.config.ts` | Custom accent/dark/card-dark colors |
| `components/ui/FadeInSection.tsx` | `'use client'` — framer-motion scroll fade wrapper |
| `components/ui/Button.tsx` | Primary + outline button variants |
| `components/ui/SectionLabel.tsx` | Small purple uppercase label |
| `components/icons/GhostIcon.tsx` | Inline ghost SVG, size + color props |
| `components/sections/Nav.tsx` | `'use client'` sticky nav, scroll state, hamburger |
| `components/sections/Hero.tsx` | Dark hero, ghost bg, glow, headline, two buttons |
| `components/sections/WhatMakesDuppy.tsx` | Light, 3 bordered hover cards |
| `components/sections/HowItWorks.tsx` | Dark, phone placeholder with purple glow |
| `components/sections/PoweredByDuppy.tsx` | Light, 3 branded OS phone placeholders |
| `components/sections/BuiltForBuildingSupply.tsx` | Off-white, 2-col text + image placeholder |
| `components/sections/QuoteSection.tsx` | Dark, pull quote with purple left border |
| `components/sections/CtaSection.tsx` | White + purple gradient tint, CTA button |
| `components/sections/Footer.tsx` | Dark, brand + links + copyright |
| `jest.config.ts` | Next.js jest preset, jsdom, module alias |
| `jest.setup.ts` | @testing-library/jest-dom |
| `__mocks__/framer-motion.tsx` | Mock motion.div, useInView → always true |

---

### Task 1: Scaffold project and configure Tailwind

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `app/globals.css` (via create-next-app)
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Scaffold the Next.js project**

Run inside `/Users/randeepdhesi/Duppy`:
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --eslint --import-alias "@/*"
```
Accept all defaults. If asked about Turbopack, choose No.

- [ ] **Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

- [ ] **Step 3: Replace tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#6C3FC5',
        'duppy-dark': '#0A0A0A',
        'duppy-quote': '#111111',
        'duppy-card-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 4: Replace app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```
Expected: server starts on http://localhost:3000 with no compilation errors.

- [ ] **Step 6: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js 14 with Tailwind and Framer Motion"
```

---

### Task 2: Configure Jest test infrastructure

**Files:**
- Create: `jest.config.ts`
- Create: `jest.setup.ts`
- Create: `__mocks__/framer-motion.tsx`
- Modify: `package.json` (add test scripts)

- [ ] **Step 1: Install test dependencies**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

- [ ] **Step 2: Create jest.config.ts**

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

export default createJestConfig(config)
```

- [ ] **Step 3: Create jest.setup.ts**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Create __mocks__/framer-motion.tsx**

```tsx
import React from 'react'

const motion = {
  div: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <div ref={ref} {...props}>{children}</div>
  )),
  section: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <section ref={ref} {...props}>{children}</section>
  )),
  nav: React.forwardRef(({ children, ...props }: any, ref: any) => (
    <nav ref={ref} {...props}>{children}</nav>
  )),
}

const useInView = () => true
const AnimatePresence = ({ children }: any) => <>{children}</>

module.exports = { motion, useInView, AnimatePresence }
```

- [ ] **Step 5: Add test scripts to package.json**

In `package.json` under `"scripts"`, add:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 6: Verify jest runs**

```bash
npm test -- --passWithNoTests
```
Expected: exits 0, "Test Suites: 0 skipped" or similar.

- [ ] **Step 7: Commit**

```bash
git add jest.config.ts jest.setup.ts __mocks__/ package.json
git commit -m "feat: add Jest + Testing Library infrastructure with framer-motion mock"
```

---

### Task 3: FadeInSection animation wrapper

**Files:**
- Create: `components/ui/__tests__/FadeInSection.test.tsx`
- Create: `components/ui/FadeInSection.tsx`

- [ ] **Step 1: Write failing test**

Create `components/ui/__tests__/FadeInSection.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import FadeInSection from '../FadeInSection'

describe('FadeInSection', () => {
  it('renders children', () => {
    render(<FadeInSection><p>Test content</p></FadeInSection>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('passes className to wrapper', () => {
    render(<FadeInSection className="my-custom"><span>hi</span></FadeInSection>)
    expect(screen.getByText('hi').closest('.my-custom')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="FadeInSection"
```
Expected: FAIL — "Cannot find module '../FadeInSection'"

- [ ] **Step 3: Create FadeInSection component**

Create `components/ui/FadeInSection.tsx`:
```tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeInSection({ children, className = '', delay = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="FadeInSection"
```
Expected: PASS — 2 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/ui/FadeInSection.tsx components/ui/__tests__/FadeInSection.test.tsx
git commit -m "feat: add FadeInSection scroll animation wrapper"
```

---

### Task 4: GhostIcon SVG component

**Files:**
- Create: `components/icons/__tests__/GhostIcon.test.tsx`
- Create: `components/icons/GhostIcon.tsx`

- [ ] **Step 1: Write failing test**

Create `components/icons/__tests__/GhostIcon.test.tsx`:
```tsx
import { render } from '@testing-library/react'
import GhostIcon from '../GhostIcon'

describe('GhostIcon', () => {
  it('renders an SVG element', () => {
    const { container } = render(<GhostIcon size={24} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies the size prop to width and height', () => {
    const { container } = render(<GhostIcon size={48} />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveAttribute('width', '48')
    expect(svg).toHaveAttribute('height', '48')
  })

  it('applies the color prop as fill', () => {
    const { container } = render(<GhostIcon size={24} color="#6C3FC5" />)
    expect(container.querySelector('svg')).toHaveAttribute('fill', '#6C3FC5')
  })

  it('applies className to the SVG', () => {
    const { container } = render(<GhostIcon size={24} className="opacity-5" />)
    expect(container.querySelector('svg')).toHaveClass('opacity-5')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="GhostIcon"
```
Expected: FAIL — "Cannot find module '../GhostIcon'"

- [ ] **Step 3: Create GhostIcon component**

Create `components/icons/GhostIcon.tsx`:
```tsx
interface Props {
  size?: number
  color?: string
  className?: string
}

export default function GhostIcon({ size = 24, color = 'currentColor', className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ghost body: rounded top half, three scalloped points at bottom */}
      <path d="M12 2C7.58 2 4 5.58 4 10v11l3-2.5 3 2.5 2-2 2 2 3-2.5 3 2.5V10c0-4.42-3.58-8-8-8z" />
      {/* Eyes */}
      <circle cx="9.5" cy="10.5" r="1.5" fill="white" />
      <circle cx="14.5" cy="10.5" r="1.5" fill="white" />
    </svg>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="GhostIcon"
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/icons/GhostIcon.tsx components/icons/__tests__/GhostIcon.test.tsx
git commit -m "feat: add GhostIcon inline SVG component"
```

---

### Task 5: Button and SectionLabel UI components

**Files:**
- Create: `components/ui/__tests__/Button.test.tsx`
- Create: `components/ui/__tests__/SectionLabel.test.tsx`
- Create: `components/ui/Button.tsx`
- Create: `components/ui/SectionLabel.tsx`

- [ ] **Step 1: Write failing tests**

Create `components/ui/__tests__/Button.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import Button from '../Button'

describe('Button', () => {
  it('renders children text', () => {
    render(<Button href="#">Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as an anchor with correct href', () => {
    render(<Button href="/contact">Contact</Button>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/contact')
  })

  it('applies bg-accent for primary variant', () => {
    render(<Button href="#" variant="primary">Primary</Button>)
    expect(screen.getByRole('link').className).toMatch(/bg-accent/)
  })

  it('applies border class for outline variant', () => {
    render(<Button href="#" variant="outline">Outline</Button>)
    expect(screen.getByRole('link').className).toMatch(/border/)
  })
})
```

Create `components/ui/__tests__/SectionLabel.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import SectionLabel from '../SectionLabel'

describe('SectionLabel', () => {
  it('renders the label text', () => {
    render(<SectionLabel>Why Duppy</SectionLabel>)
    expect(screen.getByText('Why Duppy')).toBeInTheDocument()
  })

  it('has uppercase class', () => {
    render(<SectionLabel>Label</SectionLabel>)
    expect(screen.getByText('Label').className).toMatch(/uppercase/)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- --testPathPattern="Button|SectionLabel"
```
Expected: FAIL — modules not found.

- [ ] **Step 3: Create Button component**

Create `components/ui/Button.tsx`:
```tsx
interface Props {
  href: string
  variant?: 'primary' | 'outline'
  size?: 'default' | 'large'
  children: React.ReactNode
  className?: string
}

export default function Button({
  href,
  variant = 'primary',
  size = 'default',
  children,
  className = '',
}: Props) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200'
  const sizes = {
    default: 'px-7 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  }
  const variants = {
    primary: 'bg-accent text-white hover:bg-[#5a32a3]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#111111]',
  }

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}
```

- [ ] **Step 4: Create SectionLabel component**

Create `components/ui/SectionLabel.tsx`:
```tsx
interface Props {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: Props) {
  return (
    <span className={`text-accent text-xs font-semibold uppercase tracking-widest ${className}`}>
      {children}
    </span>
  )
}
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npm test -- --testPathPattern="Button|SectionLabel"
```
Expected: PASS — 4 + 2 = 6 tests pass.

- [ ] **Step 6: Commit**

```bash
git add components/ui/Button.tsx components/ui/SectionLabel.tsx components/ui/__tests__/
git commit -m "feat: add Button and SectionLabel UI primitives"
```

---

### Task 6: Nav component

**Files:**
- Create: `components/sections/__tests__/Nav.test.tsx`
- Create: `components/sections/Nav.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/Nav.test.tsx`:
```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Nav from '../Nav'

describe('Nav', () => {
  it('renders the duppy.ai logo text', () => {
    render(<Nav />)
    expect(screen.getByText('duppy.ai')).toBeInTheDocument()
  })

  it('renders all three nav links', () => {
    render(<Nav />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders the Get in touch button', () => {
    render(<Nav />)
    expect(screen.getAllByText('Get in touch').length).toBeGreaterThan(0)
  })

  it('shows mobile menu links after hamburger click', () => {
    render(<Nav />)
    fireEvent.click(screen.getByLabelText('Toggle menu'))
    // After open, "How it works" appears in both desktop (hidden) and mobile menu
    expect(screen.getAllByText('How it works').length).toBeGreaterThan(1)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="sections/__tests__/Nav"
```
Expected: FAIL — "Cannot find module '../Nav'"

- [ ] **Step 3: Create Nav component**

Create `components/sections/Nav.tsx`:
```tsx
'use client'

import { useState, useEffect } from 'react'
import GhostIcon from '@/components/icons/GhostIcon'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <GhostIcon size={28} color="#6C3FC5" />
          <span
            className={`font-bold text-lg lowercase tracking-tight transition-colors ${
              scrolled ? 'text-[#111111]' : 'text-white'
            }`}
          >
            duppy.ai
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-[#6B7280]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@duppy.ai"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5a32a3] transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
          <span className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
          <span className={`block w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#6B7280] font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@duppy.ai"
            className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#5a32a3] transition-colors text-center"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="sections/__tests__/Nav"
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/Nav.tsx components/sections/__tests__/Nav.test.tsx
git commit -m "feat: add Nav with scroll state and mobile hamburger menu"
```

---

### Task 7: Hero section

**Files:**
- Create: `components/sections/__tests__/Hero.test.tsx`
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/Hero.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Your business already has the tools/i)).toBeInTheDocument()
  })

  it('renders the subline', () => {
    render(<Hero />)
    expect(screen.getByText(/AI operating systems/i)).toBeInTheDocument()
  })

  it('renders the See it in action button', () => {
    render(<Hero />)
    expect(screen.getByText('See it in action')).toBeInTheDocument()
  })

  it('renders the Learn more button', () => {
    render(<Hero />)
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="sections/__tests__/Hero"
```
Expected: FAIL — "Cannot find module '../Hero'"

- [ ] **Step 3: Create Hero component**

Create `components/sections/Hero.tsx`:
```tsx
import FadeInSection from '@/components/ui/FadeInSection'
import Button from '@/components/ui/Button'
import GhostIcon from '@/components/icons/GhostIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
      {/* Radial purple glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[600px] h-[600px] rounded-full bg-accent opacity-[0.12] blur-[120px]" />
      </div>

      {/* Ghost silhouette */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <GhostIcon size={480} color="white" className="opacity-[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeInSection>
          <h1 className="text-4xl md:text-[64px] font-bold text-white leading-tight tracking-tight mb-6">
            Your business already has the tools.
            <br />
            It just needs a brain.
          </h1>
          <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto mb-10">
            Duppy builds AI operating systems that connect your ERP, email, calendar, and CRM into one
            voice-driven interface — branded to your company, trained on your data, deployed in days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#how-it-works" variant="primary" size="large">
              See it in action
            </Button>
            <Button href="#about" variant="outline" size="large">
              Learn more
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="sections/__tests__/Hero"
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/Hero.tsx components/sections/__tests__/Hero.test.tsx
git commit -m "feat: add Hero section with ghost silhouette and purple glow"
```

---

### Task 8: WhatMakesDuppy section

**Files:**
- Create: `components/sections/__tests__/WhatMakesDuppy.test.tsx`
- Create: `components/sections/WhatMakesDuppy.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/WhatMakesDuppy.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import WhatMakesDuppy from '../WhatMakesDuppy'

describe('WhatMakesDuppy', () => {
  it('renders the section label', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText('Why Duppy')).toBeInTheDocument()
  })

  it('renders the section heading', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText(/Three commitments/i)).toBeInTheDocument()
  })

  it('renders all three card titles', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText('Your Brand')).toBeInTheDocument()
    expect(screen.getByText('Your Systems')).toBeInTheDocument()
    expect(screen.getByText('Your AI')).toBeInTheDocument()
  })

  it('renders card body text', () => {
    render(<WhatMakesDuppy />)
    expect(screen.getByText(/Every deployment carries your name/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="WhatMakesDuppy"
```
Expected: FAIL — module not found.

- [ ] **Step 3: Create WhatMakesDuppy component**

Create `components/sections/WhatMakesDuppy.tsx`:
```tsx
import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

const cards = [
  {
    title: 'Your Brand',
    body: 'Every deployment carries your name, your colors, your identity. Your team sees their company, not ours.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#6C3FC5" />
      </svg>
    ),
  },
  {
    title: 'Your Systems',
    body: 'We connect to what you already use. BisTrack, Spruce, Google Workspace, whatever runs your operation. Nothing gets replaced.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1" fill="#6C3FC5" />
        <rect x="13" y="3" width="8" height="8" rx="1" fill="#6C3FC5" />
        <rect x="3" y="13" width="8" height="8" rx="1" fill="#6C3FC5" />
        <rect x="13" y="13" width="8" height="8" rx="1" fill="#6C3FC5" />
      </svg>
    ),
  },
  {
    title: 'Your AI',
    body: "Trained on your product catalog, your pricing, your customers. It doesn't guess. It knows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="#6C3FC5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
          stroke="#6C3FC5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function WhatMakesDuppy() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">Why Duppy</SectionLabel>
          <h2 className="text-4xl font-bold text-[#111111] tracking-tight max-w-2xl mx-auto">
            Three commitments that shape every deployment.
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeInSection key={card.title} delay={i * 0.1}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="mb-5">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{card.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{card.body}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="WhatMakesDuppy"
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/WhatMakesDuppy.tsx components/sections/__tests__/WhatMakesDuppy.test.tsx
git commit -m "feat: add WhatMakesDuppy section with three commitment cards"
```

---

### Task 9: HowItWorks section

**Files:**
- Create: `components/sections/__tests__/HowItWorks.test.tsx`
- Create: `components/sections/HowItWorks.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/HowItWorks.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import HowItWorks from '../HowItWorks'

describe('HowItWorks', () => {
  it('renders the section label', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/One voice command/i)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/counter person/i)).toBeInTheDocument()
  })

  it('renders the phone placeholder', () => {
    render(<HowItWorks />)
    expect(screen.getByTestId('phone-placeholder')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="HowItWorks"
```
Expected: FAIL — module not found.

- [ ] **Step 3: Create HowItWorks component**

Create `components/sections/HowItWorks.tsx`:
```tsx
import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <SectionLabel className="mb-4 block">How it works</SectionLabel>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-12">
            One voice command. Every system handled.
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="flex justify-center mb-12">
            <div data-testid="phone-placeholder" className="relative w-full max-w-[380px]">
              {/* Purple glow behind phone */}
              <div className="absolute inset-0 bg-accent opacity-20 blur-3xl rounded-3xl scale-75 pointer-events-none" />
              {/* Phone body */}
              <div className="relative bg-[#1A1A1A] rounded-3xl border border-white/10 aspect-[9/19] flex items-center justify-center">
                <p className="text-[#6B7280] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl mx-auto">
            Your counter person says one sentence. Duppy checks inventory, drafts the order, sends the invoice,
            and schedules delivery. All logged in your ERP.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="HowItWorks"
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/HowItWorks.tsx components/sections/__tests__/HowItWorks.test.tsx
git commit -m "feat: add HowItWorks section with phone placeholder and purple glow"
```

---

### Task 10: PoweredByDuppy section

**Files:**
- Create: `components/sections/__tests__/PoweredByDuppy.test.tsx`
- Create: `components/sections/PoweredByDuppy.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/PoweredByDuppy.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import PoweredByDuppy from '../PoweredByDuppy'

describe('PoweredByDuppy', () => {
  it('renders the section label', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText('Your OS, our engine')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText(/Your business\. Your brand\. Powered by Duppy\./i)).toBeInTheDocument()
  })

  it('renders all three OS labels', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText('Crown OS')).toBeInTheDocument()
    expect(screen.getByText('Southridge OS')).toBeInTheDocument()
    expect(screen.getByText('Pacific OS')).toBeInTheDocument()
  })

  it('renders the subline', () => {
    render(<PoweredByDuppy />)
    expect(screen.getByText(/Same brain, different face/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="PoweredByDuppy"
```
Expected: FAIL — module not found.

- [ ] **Step 3: Create PoweredByDuppy component**

Create `components/sections/PoweredByDuppy.tsx`:
```tsx
import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

const osInstances = [
  { name: 'Crown OS', accent: '#B8960C' },
  { name: 'Southridge OS', accent: '#2563EB' },
  { name: 'Pacific OS', accent: '#16A34A' },
]

export default function PoweredByDuppy() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">Your OS, our engine</SectionLabel>
          <h2 className="text-4xl font-bold text-[#111111] tracking-tight mb-4">
            Your business. Your brand. Powered by Duppy.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Every customer gets their own branded operating system. Same brain, different face.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {osInstances.map((os, i) => (
            <FadeInSection key={os.name} delay={i * 0.1} className="flex flex-col items-center">
              <div className="relative w-full max-w-[180px]">
                {/* Colored glow */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: os.accent }}
                />
                {/* Phone body */}
                <div
                  className="relative bg-[#1A1A1A] rounded-3xl border aspect-[9/19] flex flex-col items-center justify-center gap-2"
                  style={{ borderColor: `${os.accent}40` }}
                >
                  <div className="w-8 h-1 rounded-full" style={{ backgroundColor: os.accent }} />
                  <p className="text-white/30 text-xs">Soon</p>
                </div>
              </div>
              <p className="mt-4 font-semibold text-[#111111] text-sm">{os.name}</p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="PoweredByDuppy"
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/PoweredByDuppy.tsx components/sections/__tests__/PoweredByDuppy.test.tsx
git commit -m "feat: add PoweredByDuppy section with branded OS phone placeholders"
```

---

### Task 11: BuiltForBuildingSupply section

**Files:**
- Create: `components/sections/__tests__/BuiltForBuildingSupply.test.tsx`
- Create: `components/sections/BuiltForBuildingSupply.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/BuiltForBuildingSupply.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import BuiltForBuildingSupply from '../BuiltForBuildingSupply'

describe('BuiltForBuildingSupply', () => {
  it('renders the section label', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByText('Industry focus')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByText(/Built for building supply/i)).toBeInTheDocument()
  })

  it('renders BisTrack in body copy', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByText(/BisTrack/)).toBeInTheDocument()
  })

  it('renders the image placeholder', () => {
    render(<BuiltForBuildingSupply />)
    expect(screen.getByTestId('industry-image-placeholder')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="BuiltForBuildingSupply"
```
Expected: FAIL — module not found.

- [ ] **Step 3: Create BuiltForBuildingSupply component**

Create `components/sections/BuiltForBuildingSupply.tsx`:
```tsx
import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function BuiltForBuildingSupply() {
  return (
    <section id="industries" className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeInSection>
            <SectionLabel className="mb-4 block">Industry focus</SectionLabel>
            <h2 className="text-4xl font-bold text-[#111111] tracking-tight mb-6 leading-tight">
              Built for building supply.
              <br />
              Ready for anything.
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              We started in lumber and building materials because we know the industry. Duppy sits on top of
              BisTrack, Spruce, and DMSi — the ERPs that run this space — and makes them actually usable.
              But the architecture works anywhere.
            </p>
          </FadeInSection>

          {/* Right — image placeholder */}
          <FadeInSection delay={0.15}>
            <div
              data-testid="industry-image-placeholder"
              className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center"
            >
              <p className="text-gray-400 text-sm">Image coming soon</p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="BuiltForBuildingSupply"
```
Expected: PASS — 4 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/BuiltForBuildingSupply.tsx components/sections/__tests__/BuiltForBuildingSupply.test.tsx
git commit -m "feat: add BuiltForBuildingSupply two-column section"
```

---

### Task 12: QuoteSection

**Files:**
- Create: `components/sections/__tests__/QuoteSection.test.tsx`
- Create: `components/sections/QuoteSection.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/QuoteSection.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import QuoteSection from '../QuoteSection'

describe('QuoteSection', () => {
  it('renders the pull quote text', () => {
    render(<QuoteSection />)
    expect(screen.getByText(/dismal failure as a sales tool/i)).toBeInTheDocument()
  })

  it('renders the attribution', () => {
    render(<QuoteSection />)
    expect(screen.getByText(/Software Advice/i)).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<QuoteSection />)
    expect(screen.getByText(/We built the layer that fixes this/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="QuoteSection"
```
Expected: FAIL — module not found.

- [ ] **Step 3: Create QuoteSection component**

Create `components/sections/QuoteSection.tsx`:
```tsx
import FadeInSection from '@/components/ui/FadeInSection'

export default function QuoteSection() {
  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <blockquote className="border-l-4 border-accent pl-8 mb-8">
            <p className="text-white text-2xl md:text-[28px] font-medium leading-relaxed">
              &ldquo;BisTrack must be an acceptable bookkeeping tool, however, it is a dismal failure as a
              sales tool.&rdquo;
            </p>
            <footer className="mt-4 text-[#6B7280] text-sm">
              — BisTrack user review, Software Advice
            </footer>
          </blockquote>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="text-white text-xl font-bold pl-8">
            We built the layer that fixes this.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="QuoteSection"
```
Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/QuoteSection.tsx components/sections/__tests__/QuoteSection.test.tsx
git commit -m "feat: add QuoteSection with purple left border pull quote"
```

---

### Task 13: CtaSection

**Files:**
- Create: `components/sections/__tests__/CtaSection.test.tsx`
- Create: `components/sections/CtaSection.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/CtaSection.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import CtaSection from '../CtaSection'

describe('CtaSection', () => {
  it('renders the heading', () => {
    render(<CtaSection />)
    expect(screen.getByText(/Ready to put an AI operator/i)).toBeInTheDocument()
  })

  it('renders the Get in touch button linking to email', () => {
    render(<CtaSection />)
    const link = screen.getByText('Get in touch').closest('a')!
    expect(link).toHaveAttribute('href', 'mailto:hello@duppy.ai')
  })

  it('renders the sub-text', () => {
    render(<CtaSection />)
    expect(screen.getByText(/live demo/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="CtaSection"
```
Expected: FAIL — module not found.

- [ ] **Step 3: Create CtaSection component**

Create `components/sections/CtaSection.tsx`:
```tsx
import FadeInSection from '@/components/ui/FadeInSection'

export default function CtaSection() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-purple-50/40 py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-8 leading-tight">
            Ready to put an AI operator to work in your business?
          </h2>
          <a
            href="mailto:hello@duppy.ai"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#5a32a3] transition-colors mb-6"
          >
            Get in touch
          </a>
          <p className="text-[#6B7280] text-base">See a live demo in under 2 minutes.</p>
        </FadeInSection>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="CtaSection"
```
Expected: PASS — 3 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/CtaSection.tsx components/sections/__tests__/CtaSection.test.tsx
git commit -m "feat: add CtaSection with purple gradient and mailto CTA"
```

---

### Task 14: Footer

**Files:**
- Create: `components/sections/__tests__/Footer.test.tsx`
- Create: `components/sections/Footer.tsx`

- [ ] **Step 1: Write failing test**

Create `components/sections/__tests__/Footer.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders duppy.ai brand name', () => {
    render(<Footer />)
    expect(screen.getByText('duppy.ai')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/The spirit behind your operation/i)).toBeInTheDocument()
  })

  it('renders product links', () => {
    render(<Footer />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Industries')).toBeInTheDocument()
  })

  it('renders company links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 Duppy\.ai/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern="sections/__tests__/Footer"
```
Expected: FAIL — module not found.

- [ ] **Step 3: Create Footer component**

Create `components/sections/Footer.tsx`:
```tsx
import GhostIcon from '@/components/icons/GhostIcon'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <GhostIcon size={24} color="#6C3FC5" />
              <span className="text-white font-bold text-lg lowercase">duppy.ai</span>
            </div>
            <p className="text-[#6B7280] text-sm">The spirit behind your operation</p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#how-it-works" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    Industries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#about" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@duppy.ai" className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-[#6B7280] text-xs pt-8">© 2026 Duppy.ai. All rights reserved.</p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- --testPathPattern="sections/__tests__/Footer"
```
Expected: PASS — 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add components/sections/Footer.tsx components/sections/__tests__/Footer.test.tsx
git commit -m "feat: add Footer with brand, link columns, and copyright"
```

---

### Task 15: Wire up layout.tsx and page.tsx

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Duppy.ai — AI Operating Systems for Business',
  description:
    'Duppy builds AI operating systems that connect your ERP, email, calendar, and CRM into one voice-driven interface — branded to your company, trained on your data, deployed in days.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Replace app/page.tsx**

```tsx
import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import WhatMakesDuppy from '@/components/sections/WhatMakesDuppy'
import HowItWorks from '@/components/sections/HowItWorks'
import PoweredByDuppy from '@/components/sections/PoweredByDuppy'
import BuiltForBuildingSupply from '@/components/sections/BuiltForBuildingSupply'
import QuoteSection from '@/components/sections/QuoteSection'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatMakesDuppy />
        <HowItWorks />
        <PoweredByDuppy />
        <BuiltForBuildingSupply />
        <QuoteSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Run full test suite**

```bash
npm test
```
Expected: All tests pass — 30+ tests across 11 test files.

- [ ] **Step 4: Start dev server and visually verify**

```bash
npm run dev
```
Open http://localhost:3000. Verify in order:
- Dark hero with ghost silhouette and purple glow renders
- Nav is transparent over hero; white + blur after scrolling 50px
- Three commitment cards on white background
- Dark "How it works" section with phone placeholder
- Three branded OS phone placeholders on white
- Off-white two-column building supply section
- Dark quote section with purple left border
- White-to-purple-tint CTA section
- Dark footer with links and copyright
- Mobile (<768px): hamburger visible, cards stack, phones stack

- [ ] **Step 5: Final commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat: wire up layout and page — duppy.ai landing page complete"
```
