import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Duppy — Your Invisible Operator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const GHOST_BODY =
  'M 478.35 53.57 L 538.96 54.65 L 591.99 64.39 L 624.46 74.13 L 679.65 99.03 L 725.11 128.25 L 761.9 159.63 L 797.62 199.68 L 826.84 244.05 L 841.99 274.35 L 859.31 321.97 L 867.97 357.68 L 873.38 402.06 L 873.38 748.38 L 869.05 764.61 L 860.39 778.68 L 844.16 792.75 L 823.59 800.32 L 687.23 800.32 L 668.83 805.74 L 661.26 810.06 L 535.71 934.52 L 517.32 944.26 L 496.75 946.43 L 480.52 943.18 L 462.12 932.36 L 344.16 814.39 L 329 804.65 L 312.77 800.32 L 177.49 800.32 L 162.34 796 L 151.52 789.5 L 142.86 781.93 L 134.2 770.02 L 126.62 747.29 L 126.62 403.14 L 130.95 365.26 L 138.53 330.63 L 150.43 292.75 L 162.34 265.69 L 181.82 229.98 L 213.2 186.69 L 248.92 149.89 L 285.71 120.67 L 320.35 99.03 L 372.29 75.22 L 432.9 58.98 L 461.04 54.65 L 477.27 54.65 Z'

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
            width: 800,
            height: 500,
            borderRadius: 9999,
            background: 'radial-gradient(ellipse at center, rgba(232,148,58,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Horizontal logo lockup */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 48,
          }}
        >
          {/* Ghost — actual brand path, 1000x1000 viewBox */}
          <svg width="160" height="160" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={GHOST_BODY} fill="#E8943A" />
            <circle cx="348.48" cy="416.13" r="88.20" fill="#0C0A07" />
            <circle cx="652.60" cy="416.13" r="88.20" fill="#0C0A07" />
          </svg>

          {/* DUPPY wordmark */}
          <div
            style={{
              fontSize: 144,
              fontWeight: 800,
              color: '#F5F0E8',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            DUPPY
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: '#9E9589',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Your Invisible Operator
        </div>
      </div>
    ),
    { ...size }
  )
}
