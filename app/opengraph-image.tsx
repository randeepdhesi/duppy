import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Duppy — Your Invisible Operator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const GHOST_BODY = 'M 20,1 C 9,1 2,8 2,17 L 2,30 Q 2,38 8,38 Q 11,38 13,34 Q 15,30 17,34 Q 19,38 20,38 Q 21,38 23,34 Q 25,30 27,34 Q 29,38 32,38 Q 38,38 38,30 L 38,17 C 38,8 31,1 20,1 Z'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0C0A07',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 400,
            borderRadius: 9999,
            background: 'radial-gradient(ellipse at center, rgba(232,148,58,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Horizontal logo lockup */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 44,
          }}
        >
          {/* Ghost — exact paths from GhostIcon, no background container */}
          <svg width="164" height="164" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={GHOST_BODY} fill="#E8943A" />
            <circle cx="15" cy="18" r="2.2" fill="#0C0A07" fillOpacity="0.95" />
            <circle cx="25" cy="18" r="2.2" fill="#0C0A07" fillOpacity="0.95" />
            <circle cx="15.6" cy="18.5" r="0.9" fill="#E8943A" fillOpacity="0.5" />
            <circle cx="25.6" cy="18.5" r="0.9" fill="#E8943A" fillOpacity="0.5" />
          </svg>

          {/* DUPPY wordmark */}
          <div
            style={{
              fontSize: 140,
              fontWeight: 800,
              color: '#F5F0E8',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            DUPPY
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
