'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Timeline ─────────────────────────────────────────────────────────────────
const DUR = 12 // seconds, then loops

function useLoopTime() {
  const [time, setTime] = useState(0)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts
      const elapsed = (ts - startRef.current) / 1000
      setTime(elapsed % DUR)
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return time
}

// ─── Easing + helpers ─────────────────────────────────────────────────────────
function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}

function easeOutCubic(t: number) {
  return (--t) * t * t + 1
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

function fadeInUp(t: number, start: number, dur = 0.55) {
  const p = clamp((t - start) / dur, 0, 1)
  const e = easeOutCubic(p)
  return { opacity: e, transform: `translateY(${(1 - e) * 14}px)` }
}

// ─── Design tokens ────────────────────────────────────────────────────────────
const GOLD      = '#C99A4E'
const GOLD_SOFT = '#8a6b37'
const BG        = '#0a0a0a'
const TEXT      = '#e9e9ea'
const MUTED     = '#9a9a9a'
const GREEN     = '#4ade80'
const FONT      = "'Inter', system-ui, sans-serif"

// ─── Icons ────────────────────────────────────────────────────────────────────
function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="12" cy="12" r="10" stroke={GREEN} strokeWidth="1.8"/>
      <path d="M8 12l3 3 5-6" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GhostMini() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M3 11a9 9 0 0 1 18 0v10l-2.25-1.8-2.25 1.8-2.25-1.8L12 21l-2.25-1.8L7.5 21l-2.25-1.8L3 21V11z" fill="#6a6a6a"/>
      <circle cx="9" cy="11" r="1.6" fill={BG}/>
      <circle cx="15" cy="11" r="1.6" fill={BG}/>
    </svg>
  )
}

// ─── Top navigation bar (static) ──────────────────────────────────────────────
function TopTabs() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 18px 14px',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      background: BG, zIndex: 5, position: 'relative',
    }}>
      <div style={{ width: 38, height: 38, borderRadius: 19, background: '#1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2a2a' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke={MUTED} strokeWidth="1.8"/>
          <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke={MUTED} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#141414', border: '1px solid #252525', borderRadius: 999, padding: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999, background: '#242424', color: TEXT, fontSize: 14, fontWeight: 500, fontFamily: FONT }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M4 5h16v11H8l-4 4V5z" stroke={TEXT} strokeWidth="1.8" strokeLinejoin="round"/>
          </svg>
          Chat
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999, color: MUTED, fontSize: 14, fontWeight: 500, fontFamily: FONT }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke={MUTED} strokeWidth="1.8"/>
            <rect x="14" y="3" width="7" height="7" rx="1" stroke={MUTED} strokeWidth="1.8"/>
            <rect x="3" y="14" width="7" height="7" rx="1" stroke={MUTED} strokeWidth="1.8"/>
            <rect x="14" y="14" width="7" height="7" rx="1" stroke={MUTED} strokeWidth="1.8"/>
          </svg>
          Catalog
        </div>
      </div>

      <div style={{ width: 38, height: 38, borderRadius: 19, background: '#1f1f1f', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2a2a' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke={MUTED} strokeWidth="1.8"/>
          <path d="M8 8h8M8 12h8M8 16h5" stroke={MUTED} strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

// ─── Animated feed items ───────────────────────────────────────────────────────
function UserMessage({ t }: { t: number }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 14, ...fadeInUp(t, 0.0, 0.7) }}>
      <div style={{
        maxWidth: '88%', background: '#1f1f1f', color: TEXT,
        borderRadius: 18, borderBottomRightRadius: 6,
        padding: '11px 14px', fontSize: 13.5, lineHeight: 1.45,
        border: '1px solid #2a2a2a', fontFamily: FONT,
      }}>
        I need 16 pieces of 16-foot Norwegian Fluted Siding in Teak, draft an order and send an invoice to Jim at Pacific Coast Builders. Delivery Friday, April 24, 2026.
      </div>
    </div>
  )
}

function CheckRow({ t, text, start }: { t: number; text: string; start: number }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      background: '#161616', border: '1px solid #222',
      borderRadius: 14, padding: '11px 14px',
      ...fadeInUp(t, start, 0.5),
    }}>
      <CheckCircle/>
      <div style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.4, fontFamily: FONT }}>{text}</div>
    </div>
  )
}

function BisTrackCard({ t, start }: { t: number; start: number }) {
  const items = [
    'Order #CRN-2026-4281',
    'Pacific Coast Builders',
    "16 pcs — UH61-16 Norwegian Fluted Siding, Teak, 16′",
    'Total: $3,117.76 + tax',
    'Delivery: Friday, April 24, 2026',
    'Invoice sent to jim.johnson@pacificbuilders.com',
  ]
  return (
    <div style={{
      position: 'relative', background: '#14110a',
      border: `1px solid ${GOLD_SOFT}`, borderRadius: 14,
      padding: '12px 12px 12px 14px', overflow: 'hidden', marginTop: 10,
      ...fadeInUp(t, start, 0.7),
    }}>
      <div style={{ position: 'absolute', left: 0, top: 10, bottom: 10, width: 3, borderRadius: 2, background: GOLD }}/>
      <div style={{ color: GOLD, fontSize: 12.5, fontWeight: 600, marginBottom: 8, fontFamily: FONT }}>
        All actions logged in BisTrack
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: TEXT, fontSize: 12, lineHeight: 1.4, fontFamily: FONT }}>
            <span style={{ color: GOLD, flexShrink: 0, lineHeight: 1.4 }}>✓</span>
            <span style={{ flex: 1, minWidth: 0 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActionButtons({ t, start }: { t: number; start: number }) {
  return (
    <div style={{ display: 'flex', gap: 10, marginTop: 14, ...fadeInUp(t, start, 0.5) }}>
      {['View Order', 'Edit Order'].map(label => (
        <div key={label} style={{
          border: `1px solid ${GOLD_SOFT}`, borderRadius: 10, padding: '9px 16px',
          color: GOLD, fontSize: 13.5, fontWeight: 500, fontFamily: FONT,
        }}>
          {label}
        </div>
      ))}
    </div>
  )
}

// Whole feed scrolls up at 7.2s so user message exits and BisTrack is visible
function Feed({ t }: { t: number }) {
  const scrollPx = 130 * easeInOutCubic(clamp((t - 7.2) / 2.0, 0, 1))

  return (
    <div style={{ transform: `translateY(${-scrollPx}px)`, display: 'flex', flexDirection: 'column' }}>
      <UserMessage t={t}/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <CheckRow t={t} text="Inventory checked — 34 pieces in stock at Abbotsford" start={1.5}/>
        <CheckRow t={t} text="Order #CRN-2026-4281 created — 16 pcs UH61-16 Teak" start={2.5}/>
        <CheckRow t={t} text="Invoice $3,117.76 + tax sent to jim.johnson@pacificbuilders.com" start={3.5}/>
        <CheckRow t={t} text="Delivery scheduled — Friday, April 24, 2026" start={4.5}/>
      </div>
      <BisTrackCard t={t} start={5.5}/>
      <ActionButtons t={t} start={6.8}/>
    </div>
  )
}

// Composer pinned at bottom
function Composer() {
  return (
    <div style={{ padding: '10px 16px 0', background: BG, position: 'relative', zIndex: 5 }}>
      <div style={{ border: `1px solid ${GOLD_SOFT}`, borderRadius: 18, padding: '14px 14px 12px', background: '#0f0f0f' }}>
        <div style={{ color: '#6e6e6e', fontSize: 14, padding: '2px 2px 14px', fontFamily: FONT }}>
          Ask about products, specs...
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ background: '#242424', color: '#c9c9c9', fontSize: 12, padding: '6px 12px', borderRadius: 999, fontFamily: FONT }}>
            All Inventory
          </div>
          <div style={{ width: 34, height: 34, borderRadius: 17, background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="3"    y="8"  width="2.6" height="8"  rx="1" fill="#1a1306"/>
              <rect x="7.2"  y="5"  width="2.6" height="14" rx="1" fill="#1a1306"/>
              <rect x="11.4" y="2"  width="2.6" height="20" rx="1" fill="#1a1306"/>
              <rect x="15.6" y="5"  width="2.6" height="14" rx="1" fill="#1a1306"/>
              <rect x="19.8" y="8"  width="2.6" height="8"  rx="1" fill="#1a1306"/>
            </svg>
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 6, padding: '10px 0 18px',
        color: '#6a6a6a', fontSize: 11, fontWeight: 600, letterSpacing: 1.4,
        whiteSpace: 'nowrap', fontFamily: FONT,
      }}>
        <GhostMini/>
        <span>POWERED BY DUPPY</span>
      </div>
    </div>
  )
}

// ─── Public component ─────────────────────────────────────────────────────────
export default function ActionSequence() {
  const t = useLoopTime()

  const DISPLAY_W = 280
  const SCALE = DISPLAY_W / 393
  const DISPLAY_H = Math.round(852 * SCALE)

  return (
    <div data-testid="phone-placeholder" className="mx-auto" style={{ width: DISPLAY_W, height: DISPLAY_H, position: 'relative' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 393, height: 852,
        transform: `scale(${SCALE})`,
        transformOrigin: 'top left',
      }}>
        <div style={{
          width: 393, height: 852,
          borderRadius: 55, background: '#000', overflow: 'hidden',
          boxShadow: '0 0 0 2px #1c1c1c, 0 0 0 12px #0a0a0a, 0 0 0 14px #2a2a2a, 0 50px 120px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.4)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: BG, display: 'flex', flexDirection: 'column', color: TEXT }}>
            <TopTabs/>
            <div style={{ flex: 1, overflow: 'hidden', position: 'relative', padding: '16px 16px 0' }}>
              <Feed t={t}/>
            </div>
            <Composer/>
          </div>
        </div>
      </div>
    </div>
  )
}
