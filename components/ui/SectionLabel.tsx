interface Props {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: Props) {
  return (
    <span className={`text-accent text-xs font-semibold uppercase tracking-widest ${className}`}>
      {children}
    </span>
  )
}
