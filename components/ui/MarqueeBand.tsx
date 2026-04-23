import GhostIcon from '@/components/icons/GhostIcon'

interface Props {
  variant?: 'dark' | 'amber'
}

const items = [
  'Order created',
  'Invoice sent',
  'Inventory checked',
  'ERP updated',
  'Customer emailed',
  'Delivery scheduled',
  'Quote drafted',
  'Everything handled',
]

export default function MarqueeBand({ variant = 'dark' }: Props) {
  const bg = variant === 'amber' ? 'bg-duppy-amber' : 'bg-duppy-mid'
  const textColor = variant === 'amber' ? 'text-white/80' : 'text-white/60'
  const iconColor = variant === 'amber' ? 'white' : '#E8943A'

  const content = items.flatMap((item, i) => [
    <span
      key={`text-${i}`}
      className={`text-xs font-semibold uppercase tracking-[0.16em] whitespace-nowrap px-6 ${textColor}`}
    >
      {item}
    </span>,
    <span key={`sep-${i}`} className="shrink-0 opacity-50" aria-hidden="true">
      <GhostIcon size={12} color={iconColor} />
    </span>,
  ])

  return (
    <div className={`${bg} py-4 overflow-hidden`} aria-hidden="true">
      <div className="marquee-track flex items-center will-change-transform">
        <div className="flex items-center">{content}</div>
        <div className="flex items-center" aria-hidden="true">{content}</div>
      </div>
    </div>
  )
}
