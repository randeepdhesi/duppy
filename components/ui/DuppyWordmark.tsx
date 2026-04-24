interface Props {
  width?: number
  showGhost?: boolean
  color?: string
  eyeColor?: string
  className?: string
}

// Ghost body path from duppy-mark.svg (1000×1000 coordinate space)
const GHOST_PATH =
  'M 478.35 53.57 L 538.96 54.65 L 591.99 64.39 L 624.46 74.13 L 679.65 99.03 L 725.11 128.25 L 761.9 159.63 L 797.62 199.68 L 826.84 244.05 L 841.99 274.35 L 859.31 321.97 L 867.97 357.68 L 873.38 402.06 L 873.38 748.38 L 869.05 764.61 L 860.39 778.68 L 844.16 792.75 L 823.59 800.32 L 687.23 800.32 L 668.83 805.74 L 661.26 810.06 L 535.71 934.52 L 517.32 944.26 L 496.75 946.43 L 480.52 943.18 L 462.12 932.36 L 344.16 814.39 L 329 804.65 L 312.77 800.32 L 177.49 800.32 L 162.34 796 L 151.52 789.5 L 142.86 781.93 L 134.2 770.02 L 126.62 747.29 L 126.62 403.14 L 130.95 365.26 L 138.53 330.63 L 150.43 292.75 L 162.34 265.69 L 181.82 229.98 L 213.2 186.69 L 248.92 149.89 L 285.71 120.67 L 320.35 99.03 L 372.29 75.22 L 432.9 58.98 L 461.04 54.65 L 477.27 54.65 Z'

export default function DuppyWordmark({
  width = 200,
  showGhost = false,
  color = '#FAFAF7',
  eyeColor = '#0E0E0E',
  className = '',
}: Props) {
  //
  // GEOMETRY
  // ViewBox: 0 0 2320 700. Letters on a 540-unit cap-height band (top=80, bottom=620).
  // Stems 110 wide. Letter slot pitch 450 (420 wide + 30 gap).
  // Slots: D=60, U=510, P1=960, P2=1410, Y=1840 (Y shifted 20px left to close gap).
  //
  // P bowls: radius 210, eye-hole radius 110.
  //   P1 center: (1170, 290)   P2 center: (1620, 290)
  //
  // Ghost alignment for showGhost variant:
  //   Ghost eyes in 1000×1000 space: cx=348.48, cx=652.60, cy=416.13
  //   Eye spacing ghost=304.12 → wordmark=450  →  scale=1.4796
  //   translate(654, -326) scale(1.4796) maps ghost eyes onto P bowl centers.
  //

  const wordmark = (
    <g>
      {/* ── D ─────────────────────────────────────────────────────── */}
      <path
        d="M 60 80 L 240 80 A 270 270 0 0 1 240 620 L 60 620 Z
           M 170 190 L 240 190 A 160 160 0 0 1 240 510 L 170 510 Z"
        fill={color}
        fillRule="evenodd"
      />

      {/* ── U ─────────────────────────────────────────────────────── */}
      <path
        fillRule="evenodd"
        d="M 510 80 L 930 80 L 930 410 A 210 210 0 0 1 510 410 Z
           M 620 80 L 820 80 L 820 420 A 100 100 0 0 1 620 420 Z"
        fill={color}
      />

      {/* ── P1 ── stem + bowl + eye ───────────────────────────────── */}
      <rect x="960" y="80" width="110" height="540" fill={color} />
      <circle cx="1170" cy="290" r="210" fill={color} />
      <circle cx="1170" cy="290" r="110" fill={eyeColor} />

      {/* ── P2 ── identical, +450 ─────────────────────────────────── */}
      <rect x="1410" y="80" width="110" height="540" fill={color} />
      <circle cx="1620" cy="290" r="210" fill={color} />
      <circle cx="1620" cy="290" r="110" fill={eyeColor} />

      {/* ── Y ── shifted 20px left vs original spec ───────────────── */}
      <path
        d="M 1840 80 L 1965 80 L 2050 290 L 2135 80 L 2260 80
           L 2105 455 L 2105 620 L 1995 620 L 1995 455 Z"
        fill={color}
      />
    </g>
  )

  if (showGhost) {
    // Ghost positioned so its eyes land exactly on P1/P2 bowl centers.
    // transform="translate(654, -326) scale(1.4796)" applied in ghost coord space.
    const height = Math.round(width * 1450 / 2320)
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 -300 2320 1450"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="DUPPY"
      >
        <g opacity="0.18" transform="translate(654, -326) scale(1.4796)">
          <path d={GHOST_PATH} fill="#E8943A" />
          <circle cx="348.48" cy="416.13" r="88.20" fill="#0E0E0E" />
          <circle cx="652.60" cy="416.13" r="88.20" fill="#0E0E0E" />
        </g>
        {wordmark}
      </svg>
    )
  }

  const height = Math.round(width * 700 / 2320)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 2320 700"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DUPPY"
    >
      {wordmark}
    </svg>
  )
}
