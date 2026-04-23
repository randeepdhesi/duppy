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
  const bodyPath = 'M 20,1 C 9,1 2,8 2,17 L 2,30 Q 2,38 8,38 Q 11,38 13,34 Q 15,30 17,34 Q 19,38 20,38 Q 21,38 23,34 Q 25,30 27,34 Q 29,38 32,38 Q 38,38 38,30 L 38,17 C 38,8 31,1 20,1 Z'

  if (outline) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <path d={bodyPath} stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
        <circle cx="15" cy="18" r="2" stroke={color} strokeWidth="1.5" />
        <circle cx="25" cy="18" r="2" stroke={color} strokeWidth="1.5" />
      </svg>
    )
  }

  // Transparent punch-through eyes: sub-paths combined with body using evenodd fill rule
  if (bgColor === 'transparent') {
    const eyePaths =
      'M12.8,18 a2.2,2.2 0 1,0 4.4,0 a2.2,2.2 0 1,0 -4.4,0 ' +
      'M22.8,18 a2.2,2.2 0 1,0 4.4,0 a2.2,2.2 0 1,0 -4.4,0'
    if (withWisp) {
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
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
        viewBox="0 0 40 40"
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
      viewBox="0 0 40 40"
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
      <circle cx="15" cy="18" r="2.2" fill={bgColor ?? 'white'} fillOpacity="0.95" />
      <circle cx="25" cy="18" r="2.2" fill={bgColor ?? 'white'} fillOpacity="0.95" />
      <circle cx="15.6" cy="18.5" r="0.9" fill={color} fillOpacity="0.5" />
      <circle cx="25.6" cy="18.5" r="0.9" fill={color} fillOpacity="0.5" />
    </svg>
  )
}
