interface Props {
  size?: number
  color?: string
  className?: string
  withWisp?: boolean
  outline?: boolean
  bgColor?: string
}

export default function GhostIcon({
  size = 40,
  color = 'currentColor',
  className = '',
  withWisp = false,
  outline = false,
  bgColor,
}: Props) {
  const id = `ghost-wisp-${Math.random().toString(36).slice(2, 7)}`
  const bodyPath =
    'M 478.35 53.57 L 538.96 54.65 L 591.99 64.39 L 624.46 74.13 L 679.65 99.03 L 725.11 128.25 L 761.9 159.63 L 797.62 199.68 L 826.84 244.05 L 841.99 274.35 L 859.31 321.97 L 867.97 357.68 L 873.38 402.06 L 873.38 748.38 L 869.05 764.61 L 860.39 778.68 L 844.16 792.75 L 823.59 800.32 L 687.23 800.32 L 668.83 805.74 L 661.26 810.06 L 535.71 934.52 L 517.32 944.26 L 496.75 946.43 L 480.52 943.18 L 462.12 932.36 L 344.16 814.39 L 329 804.65 L 312.77 800.32 L 177.49 800.32 L 162.34 796 L 151.52 789.5 L 142.86 781.93 L 134.2 770.02 L 126.62 747.29 L 126.62 403.14 L 130.95 365.26 L 138.53 330.63 L 150.43 292.75 L 162.34 265.69 L 181.82 229.98 L 213.2 186.69 L 248.92 149.89 L 285.71 120.67 L 320.35 99.03 L 372.29 75.22 L 432.9 58.98 L 461.04 54.65 L 477.27 54.65 Z'

  if (outline) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path d={bodyPath} stroke={color} strokeWidth="30" strokeLinejoin="round" fill="none" />
        <circle cx="348.48" cy="416.13" r="88.20" stroke={color} strokeWidth="30" />
        <circle cx="652.60" cy="416.13" r="88.20" stroke={color} strokeWidth="30" />
      </svg>
    )
  }

  // Transparent punch-through eyes via evenodd fill rule
  if (bgColor === 'transparent') {
    const eyePaths =
      'M260.28,416.13 a88.20,88.20 0 1,0 176.40,0 a88.20,88.20 0 1,0 -176.40,0 ' +
      'M564.40,416.13 a88.20,88.20 0 1,0 176.40,0 a88.20,88.20 0 1,0 -176.40,0'
    if (withWisp) {
      return (
        <svg width={size} height={size} viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="1" />
              <stop offset="65%" stopColor={color} stopOpacity="0.7" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${bodyPath} ${eyePaths}`} fill={`url(#${id})`} fillRule="evenodd" />
        </svg>
      )
    }
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path d={`${bodyPath} ${eyePaths}`} fill={color} fillRule="evenodd" />
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {withWisp && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="65%" stopColor={color} stopOpacity="0.7" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      <path d={bodyPath} fill={withWisp ? `url(#${id})` : color} />
      <circle cx="348.48" cy="416.13" r="88.20" fill={bgColor ?? '#0E0E0E'} />
      <circle cx="652.60" cy="416.13" r="88.20" fill={bgColor ?? '#0E0E0E'} />
    </svg>
  )
}
