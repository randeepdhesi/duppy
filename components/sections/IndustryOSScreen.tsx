import React from 'react'

function hexA(hex: string, a: number): string {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
  const bigint = parseInt(full, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r},${g},${b},${a})`
}

function TopTabs({ mutedColor = '#9a9a9a', textColor = '#e9e9ea' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 18px 14px' }}>
      <div style={{ width: 38, height: 38, borderRadius: 19, background: '#1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2a2a' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke={mutedColor} strokeWidth="1.8"/>
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke={mutedColor} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#141414', border: '1px solid #252525', borderRadius: 999, padding: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999, background: '#242424', color: textColor, fontSize: 14, fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 5h16v11H8l-4 4V5z" stroke={textColor} strokeWidth="1.8" strokeLinejoin="round"/>
          </svg>
          Chat
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999, color: mutedColor, fontSize: 14, fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke={mutedColor} strokeWidth="1.8"/>
            <rect x="14" y="3" width="7" height="7" rx="1" stroke={mutedColor} strokeWidth="1.8"/>
            <rect x="3" y="14" width="7" height="7" rx="1" stroke={mutedColor} strokeWidth="1.8"/>
            <rect x="14" y="14" width="7" height="7" rx="1" stroke={mutedColor} strokeWidth="1.8"/>
          </svg>
          Catalog
        </div>
      </div>
      <div style={{ width: 38, height: 38, borderRadius: 19, background: '#1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2a2a' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke={mutedColor} strokeWidth="1.8"/>
          <path d="M8 8h8M8 12h8M8 16h5" stroke={mutedColor} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

function TryCard({ text, accentColor }: { text: string; accentColor: string }) {
  return (
    <div style={{ position: 'relative', background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '14px 16px 14px 18px', color: '#e9e9ea', fontSize: 13.5, lineHeight: 1.4, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 10, bottom: 10, width: 3, borderRadius: 2, background: accentColor }}/>
      {text}
    </div>
  )
}

function GhostMark({ size = 12, color = '#7a7a7a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M3 11a9 9 0 0 1 18 0v10l-2.25-1.8-2.25 1.8-2.25-1.8L12 21l-2.25-1.8L7.5 21l-2.25-1.8L3 21V11z" fill={color}/>
      <circle cx="9" cy="11" r="1.6" fill="#0a0a0a"/>
      <circle cx="15" cy="11" r="1.6" fill="#0a0a0a"/>
    </svg>
  )
}

// ─── Logos ───────────────────────────────────────────────────────────

function FreightLinkLogo() {
  return (
    <svg width="110" height="78" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 8 36 L 8 58 L 44 58 L 44 36 L 38 22 L 16 22 L 8 36 Z" fill="#89CFF0"/>
      <path d="M 18 28 L 34 28 L 38 36 L 18 36 Z" fill="#00008B"/>
      <rect x="46" y="20" width="60" height="38" rx="3" fill="#89CFF0"/>
      <rect x="52" y="32" width="48" height="2" fill="#00008B" opacity="0.4"/>
      <circle cx="22" cy="64" r="10" fill="#00008B"/>
      <circle cx="22" cy="64" r="4" fill="#89CFF0"/>
      <circle cx="68" cy="64" r="10" fill="#00008B"/>
      <circle cx="68" cy="64" r="4" fill="#89CFF0"/>
      <circle cx="92" cy="64" r="10" fill="#00008B"/>
      <circle cx="92" cy="64" r="4" fill="#89CFF0"/>
      <rect x="42" y="38" width="6" height="4" rx="1" fill="#00008B"/>
    </svg>
  )
}

function SummitAutoLogo() {
  return (
    <svg width="100" height="84" viewBox="0 0 100 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 4 L 92 20 L 92 50 C 92 68 74 80 50 82 C 26 80 8 68 8 50 L 8 20 Z" fill="#9E1B32" stroke="#FFFFFF" strokeWidth="2"/>
      <path d="M 20 62 L 38 34 L 50 52 L 62 28 L 80 62 Z" fill="#FFFFFF"/>
      <path d="M 28 62 L 42 42 L 52 58 L 64 38 L 76 62 Z" fill="#9E1B32" opacity="0.35"/>
      <circle cx="62" cy="26" r="2.5" fill="#FFFFFF"/>
    </svg>
  )
}

function LexingtonLawLogo() {
  return (
    <svg width="86" height="92" viewBox="0 0 80 86" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="6" width="52" height="4" rx="1" fill="#C5B358"/>
      <rect x="36" y="14" width="8" height="50" fill="#C5B358"/>
      <rect x="28" y="64" width="24" height="4" rx="1" fill="#C5B358"/>
      <rect x="20" y="70" width="40" height="4" rx="1" fill="#C5B358"/>
      <rect x="16" y="22" width="48" height="2" rx="1" fill="#C5B358"/>
      <path d="M 20 24 L 24 36 L 16 36 Z" fill="#C5B358" opacity="0.85"/>
      <rect x="14" y="36" width="12" height="2" rx="1" fill="#C5B358"/>
      <path d="M 60 24 L 64 36 L 56 36 Z" fill="#C5B358" opacity="0.85"/>
      <rect x="54" y="36" width="12" height="2" rx="1" fill="#C5B358"/>
      <circle cx="40" cy="4" r="3" fill="#C5B358"/>
    </svg>
  )
}

// ─── Brand configs ───────────────────────────────────────────────────

interface BrandConfig {
  name: string
  osName: string
  tagline: string
  accent: string
  Logo: React.ReactNode
  composerPlaceholder: string
  composerChip: string
  prompts: string[]
}

const FREIGHT_LINK: BrandConfig = {
  name: 'FREIGHT LINK',
  osName: 'Freight OS',
  tagline: 'Your voice-powered AI Operator.\nWired into every system your fleet runs on.',
  accent: '#89CFF0',
  Logo: <FreightLinkLogo />,
  composerPlaceholder: 'Ask about loads, drivers, routes...',
  composerChip: 'All Fleets',
  prompts: [
    'Where is Driver 402 and the current ETA for Delta?',
    'Find an available driver for the Seattle backhaul.',
    'Summarize fleet fuel spend vs. mileage for the week.',
    'List all trucks due for inspection this month.',
  ],
}

const SUMMIT_AUTO: BrandConfig = {
  name: 'SUMMIT AUTO GROUP',
  osName: 'Summit OS',
  tagline: 'Your voice-powered AI Operator.\nWired into every system your dealership runs on.',
  accent: '#FFFFFF',
  Logo: <SummitAutoLogo />,
  composerPlaceholder: 'Ask about inventory, leads, service...',
  composerChip: 'All Inventory',
  prompts: [
    'Show 2025 SUVs on the lot with black leather.',
    'Draft a test-drive invite for the Miller lead.',
    'Current trade-in value for a 2021 F-150 (80k km)?',
    'Show the next open slot for a full vehicle detail.',
  ],
}

const LEXINGTON_LAW: BrandConfig = {
  name: 'LEXINGTON LAW',
  osName: 'Lexington OS',
  tagline: 'Your voice-powered AI Operator.\nWired into every system your practice runs on.',
  accent: '#C5B358',
  Logo: <LexingtonLawLogo />,
  composerPlaceholder: 'Ask about cases, billing, filings...',
  composerChip: 'All Matters',
  prompts: [
    'Summarize the last three filings on the Henderson case.',
    "Log 45m to Smith file for 'Contract Review'.",
    "Search database for 'West Coast Ventures' interactions.",
    'Draft a corporate retainer using our standard template.',
  ],
}

// ─── Main screen component ───────────────────────────────────────────

function IndustryOSScreen({ brand }: { brand: BrandConfig }) {
  const BG = '#0a0a0a'
  const TEXT = '#e9e9ea'
  const GREEN = '#4ade80'

  return (
    <div style={{ width: '100%', height: '100%', background: BG, display: 'flex', flexDirection: 'column', color: TEXT, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", WebkitFontSmoothing: 'antialiased' }}>
      <TopTabs />
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '4px 20px 0' }}>

        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          <div style={{ position: 'relative', width: 130, height: 104, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: -10, background: `radial-gradient(circle at 50% 50%, ${hexA(brand.accent, 0.14)}, ${hexA(brand.accent, 0)} 60%)`, pointerEvents: 'none' }}/>
            <div style={{ position: 'relative' }}>{brand.Logo}</div>
          </div>
        </div>

        {/* Brand name */}
        <div style={{ textAlign: 'center', color: brand.accent, fontSize: 11, fontWeight: 700, letterSpacing: 3, marginTop: 12, marginBottom: 22 }}>{brand.name}</div>

        {/* Status */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: GREEN }}/>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>{brand.osName}</div>
        </div>

        <div style={{ textAlign: 'center', color: '#b8b8b8', fontSize: 13.5, lineHeight: 1.5, marginBottom: 22, padding: '0 10px', whiteSpace: 'pre-line' }}>{brand.tagline}</div>

        <div style={{ textAlign: 'center', color: brand.accent, fontSize: 11, fontWeight: 700, letterSpacing: 3, marginBottom: 14 }}>TRY ASKING</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {brand.prompts.map((p, i) => (
            <TryCard key={i} text={p} accentColor={brand.accent} />
          ))}
        </div>

        <div style={{ flex: 1 }}/>

        {/* Composer */}
        <div style={{ border: `1px solid ${hexA(brand.accent, 0.45)}`, borderRadius: 18, padding: '14px 14px 12px', background: '#0f0f0f', marginBottom: 8 }}>
          <div style={{ color: '#6e6e6e', fontSize: 14, padding: '2px 2px 14px' }}>{brand.composerPlaceholder}</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ background: '#242424', color: '#c9c9c9', fontSize: 12, padding: '6px 12px', borderRadius: 999 }}>{brand.composerChip}</div>
            <div style={{ width: 34, height: 34, borderRadius: 17, background: brand.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3"   y="8"  width="2.6" height="8"  rx="1" fill="#0a0a0a"/>
                <rect x="7.2" y="5"  width="2.6" height="14" rx="1" fill="#0a0a0a"/>
                <rect x="11.4" y="2" width="2.6" height="20" rx="1" fill="#0a0a0a"/>
                <rect x="15.6" y="5" width="2.6" height="14" rx="1" fill="#0a0a0a"/>
                <rect x="19.8" y="8" width="2.6" height="8"  rx="1" fill="#0a0a0a"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Powered by Duppy */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 0 18px', color: '#6a6a6a', fontSize: 11, fontWeight: 600, letterSpacing: 1.4, whiteSpace: 'nowrap' }}>
          <GhostMark size={12} color="#6a6a6a"/>
          <span>POWERED BY DUPPY</span>
        </div>
      </div>
    </div>
  )
}

export function FreightLinkScreen() { return <IndustryOSScreen brand={FREIGHT_LINK} /> }
export function SummitAutoScreen()  { return <IndustryOSScreen brand={SUMMIT_AUTO} /> }
export function LexingtonLawScreen(){ return <IndustryOSScreen brand={LEXINGTON_LAW} /> }
