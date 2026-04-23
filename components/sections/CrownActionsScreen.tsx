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

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: '#161616', border: '1px solid #222', borderRadius: 14, padding: '13px 14px' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
        <circle cx="12" cy="12" r="10" stroke={GREEN} strokeWidth="1.8"/>
        <path d="M8 12l3 3 5-6" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{ color: TEXT, fontSize: 13.5, lineHeight: 1.4, fontFamily: FONT }}>{children}</div>
    </div>
  )
}

function BisTrackCard() {
  const lines = [
    'Order #CRN-2026-4281',
    'Pacific Coast Builders',
    "16 pcs — UH61-16 Norwegian Fluted Siding, Teak, 16′",
    'Total: $3,117.76 + tax',
    'Delivery: Friday, April 24, 2026',
    'Invoice sent to jim.johnson@pacificbuilders.com',
  ]
  return (
    <div style={{ position: 'relative', background: '#14110a', border: `1px solid ${GOLD_SOFT}`, borderRadius: 14, padding: '14px 14px 14px 16px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 10, bottom: 10, width: 3, borderRadius: 2, background: GOLD }}/>
      <div style={{ color: GOLD, fontSize: 13.5, fontWeight: 600, marginBottom: 10, fontFamily: FONT }}>
        All actions logged in BisTrack
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {lines.map((line, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: TEXT, fontSize: 13, lineHeight: 1.4, fontFamily: FONT }}>
            <span style={{ color: GOLD, flexShrink: 0 }}>✓</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function OutlineBtn({ label }: { label: string }) {
  return (
    <div style={{ border: `1px solid ${GOLD_SOFT}`, borderRadius: 10, padding: '9px 16px', color: GOLD, fontSize: 13.5, fontWeight: 500, fontFamily: FONT }}>
      {label}
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

export default function CrownActionsScreen() {
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

        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '6px 16px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <CheckRow>Inventory checked — 34 pieces in stock at Abbotsford</CheckRow>
            <CheckRow>Order #CRN-2026-4281 created — 16 pcs UH61-16 Teak</CheckRow>
            <CheckRow>Invoice $3,117.76 + tax sent to jim.johnson@pacificbuilders.com</CheckRow>
            <CheckRow>Delivery scheduled — Friday, April 24, 2026</CheckRow>
          </div>

          <div style={{ height: 14 }}/>
          <BisTrackCard/>

          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <OutlineBtn label="View Order"/>
            <OutlineBtn label="Edit Order"/>
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
                  <rect x="3"    y="8"  width="2.6" height="8"  rx="1" fill="#1a1306"/>
                  <rect x="7.2"  y="5"  width="2.6" height="14" rx="1" fill="#1a1306"/>
                  <rect x="11.4" y="2"  width="2.6" height="20" rx="1" fill="#1a1306"/>
                  <rect x="15.6" y="5"  width="2.6" height="14" rx="1" fill="#1a1306"/>
                  <rect x="19.8" y="8"  width="2.6" height="8"  rx="1" fill="#1a1306"/>
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
