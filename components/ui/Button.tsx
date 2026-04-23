interface Props {
  href: string
  variant?: 'primary' | 'outline' | 'outline-dark'
  size?: 'default' | 'large'
  children: React.ReactNode
  className?: string
}

export default function Button({
  href,
  variant = 'primary',
  size = 'default',
  children,
  className = '',
}: Props) {
  const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200'
  const sizes = {
    default: 'px-7 py-3 text-base rounded-[10px]',
    large: 'px-10 py-4 text-lg rounded-[12px]',
  }
  const variants = {
    primary: 'bg-duppy-amber text-white hover:bg-duppy-amber-dark shadow-sm hover:shadow-md',
    outline: 'border-2 border-white/40 text-white hover:border-white hover:bg-white/10',
    'outline-dark': 'border-2 border-duppy-text/20 text-duppy-text hover:border-duppy-amber hover:text-duppy-amber',
  }

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}
