const GOLD = '#C99A4E'
const GOLD_SOFT = '#8a6b37'
const BG = '#0a0a0a'
const TEXT = '#e9e9ea'
const MUTED = '#9a9a9a'
const GREEN = '#4ade80'
const FONT = "'Inter', system-ui, sans-serif"

function TopTabs() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 18px 14px' }}>
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

function TryCard({ text }: { text: string }) {
  return (
    <div style={{ position: 'relative', background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '14px 16px 14px 18px', color: TEXT, fontSize: 13.5, lineHeight: 1.4, overflow: 'hidden', fontFamily: FONT }}>
      <div style={{ position: 'absolute', left: 0, top: 10, bottom: 10, width: 3, borderRadius: 2, background: GOLD }}/>
      {text}
    </div>
  )
}

function GhostMini({ size = 12, color = '#6a6a6a' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M3 11a9 9 0 0 1 18 0v10l-2.25-1.8-2.25 1.8-2.25-1.8L12 21l-2.25-1.8L7.5 21l-2.25-1.8L3 21V11z" fill={color}/>
      <circle cx="9" cy="11" r="1.6" fill={BG}/>
      <circle cx="15" cy="11" r="1.6" fill={BG}/>
      <circle cx="9.3" cy="10.7" r="0.55" fill={color}/>
      <circle cx="15.3" cy="10.7" r="0.55" fill={color}/>
    </svg>
  )
}

export default function CrownOSScreen() {
  return (
    <div style={{
      width: 393,
      height: 852,
      borderRadius: 55,
      background: '#000',
      overflow: 'hidden',
      boxShadow: '0 0 0 2px #1c1c1c, 0 0 0 12px #0a0a0a, 0 0 0 14px #2a2a2a, 0 50px 120px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.4)',
      flexShrink: 0,
    }}>
      <div style={{ width: '100%', height: '100%', background: BG, display: 'flex', flexDirection: 'column', color: TEXT }}>
        <TopTabs/>

        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '4px 20px 0' }}>

          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            <div style={{ position: 'relative', width: 130, height: 104, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: -10, background: 'radial-gradient(circle at 50% 50%, rgba(201,154,78,0.16), rgba(201,154,78,0) 60%)', pointerEvents: 'none' }}/>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/crown-logo.svg" alt="Crown Building Supplies" style={{ width: 120, height: 'auto', display: 'block', position: 'relative' }}/>
            </div>
          </div>

          <div style={{ textAlign: 'center', color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: 3, marginTop: 12, marginBottom: 22, fontFamily: FONT }}>
            CROWN BUILDING SUPPLIES
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: GREEN, flexShrink: 0 }}/>
            <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', fontFamily: FONT }}>Crown OS</div>
          </div>

          <div style={{ textAlign: 'center', color: '#b8b8b8', fontSize: 13.5, lineHeight: 1.5, marginBottom: 22, padding: '0 10px', fontFamily: FONT }}>
            Your voice-powered AI Operator.<br/>
            Wired into every system your business runs on.
          </div>

          <div style={{ textAlign: 'center', color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: 3, marginBottom: 14, fontFamily: FONT }}>
            TRY ASKING
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <TryCard text="What Crown locations do we have in Alberta?"/>
            <TryCard text="What's our stock on Norwegian Fluted Teak across all locations?"/>
            <TryCard text="Can you draft an email to Jim at Pacific Coast about his pending drywall order?"/>
            <TryCard text="What colors does Norwegian Fluted siding come in?"/>
          </div>

          <div style={{ flex: 1 }}/>

          {/* Composer */}
          <div style={{ border: `1px solid ${GOLD_SOFT}`, borderRadius: 18, padding: '14px 14px 12px', background: '#0f0f0f', marginBottom: 8 }}>
            <div style={{ color: '#6e6e6e', fontSize: 14, padding: '2px 2px 14px', fontFamily: FONT }}>
              Ask about products, specs...
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ background: '#242424', color: '#c9c9c9', fontSize: 12, padding: '6px 12px', borderRadius: 999, fontFamily: FONT }}>
                All Inventory
              </div>
              <div style={{ width: 34, height: 34, borderRadius: 17, background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="3"   y="8"  width="2.6" height="8"  rx="1" fill="#1a1306"/>
                  <rect x="7.2" y="5"  width="2.6" height="14" rx="1" fill="#1a1306"/>
                  <rect x="11.4" y="2" width="2.6" height="20" rx="1" fill="#1a1306"/>
                  <rect x="15.6" y="5" width="2.6" height="14" rx="1" fill="#1a1306"/>
                  <rect x="19.8" y="8" width="2.6" height="8"  rx="1" fill="#1a1306"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Powered by Duppy */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 0 18px', color: '#6a6a6a', fontSize: 11.5, fontWeight: 500, letterSpacing: 0.2, whiteSpace: 'nowrap', fontFamily: FONT }}>
            <GhostMini size={12} color="#6a6a6a"/>
            <span>POWERED BY DUPPY</span>
          </div>

        </div>
      </div>
    </div>
  )
}
