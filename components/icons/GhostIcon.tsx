interface Props {
  size?: number
  color?: string
  className?: string
}

export default function GhostIcon({ size = 24, color = 'currentColor', className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C7.58 2 4 5.58 4 10v11l3-2.5 3 2.5 2-2 2 2 3-2.5 3 2.5V10c0-4.42-3.58-8-8-8z" />
      <circle cx="9.5" cy="10.5" r="1.5" fill="white" />
      <circle cx="14.5" cy="10.5" r="1.5" fill="white" />
    </svg>
  )
}
