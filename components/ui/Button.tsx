interface Props {
  href: string
  variant?: 'primary' | 'outline'
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
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200'
  const sizes = {
    default: 'px-7 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  }
  const variants = {
    primary: 'bg-accent text-white hover:bg-[#5a32a3]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#111111]',
  }

  return (
    <a href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}
