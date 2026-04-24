import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Duppy — Your Invisible Operator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

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
            gap: 40,
          }}
        >
          {/* Ghost logo mark */}
          <svg width="148" height="148" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7" fill="#1A1712" />
            <g transform="translate(4, 3)">
              <path
                d="M3 11a9 9 0 0 1 18 0v10l-2.25-1.8-2.25 1.8-2.25-1.8L12 21l-2.25-1.8L7.5 21l-2.25-1.8L3 21V11z M7.2 11a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 0 0-3.6 0 M13.2 11a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 0 0-3.6 0"
                fill="#E8943A"
                fillRule="evenodd"
              />
            </g>
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
