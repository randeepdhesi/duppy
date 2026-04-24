import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Duppy — Your Invisible Operator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    }
  ).then((r) => r.text())

  const match = css.match(/src: url\((.+?)\) format\('woff2'\)/)
  if (!match) throw new Error('Could not parse font URL from Google Fonts CSS')
  return fetch(match[1]).then((r) => r.arrayBuffer())
}

export default async function Image() {
  const [dmSansBold, dmSansRegular] = await Promise.all([
    loadGoogleFont('DM+Sans', 700),
    loadGoogleFont('DM+Sans', 400),
  ])

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
          fontFamily: 'DM Sans, sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle amber glow behind content */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 400,
            borderRadius: 9999,
            background: 'radial-gradient(ellipse at center, rgba(232,148,58,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Ghost icon */}
        <svg width="72" height="72" viewBox="0 0 32 32">
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
            fontSize: 128,
            fontWeight: 700,
            color: '#F5F0E8',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginTop: 28,
          }}
        >
          DUPPY
        </div>

        {/* Amber rule */}
        <div
          style={{
            width: 48,
            height: 2,
            backgroundColor: '#E8943A',
            marginTop: 28,
            borderRadius: 1,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: '#9E9589',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginTop: 24,
          }}
        >
          Your invisible operator.
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: '#E8943A',
            letterSpacing: '0.1em',
            marginTop: 48,
            opacity: 0.8,
          }}
        >
          duppy.ai
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'DM Sans', data: dmSansBold, style: 'normal', weight: 700 },
        { name: 'DM Sans', data: dmSansRegular, style: 'normal', weight: 400 },
      ],
    }
  )
}
