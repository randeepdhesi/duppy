interface Props {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className = '', light = false }: Props) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? 'text-duppy-amber-light' : 'text-duppy-amber'
      } ${className}`}
    >
      {children}
    </span>
  )
}
