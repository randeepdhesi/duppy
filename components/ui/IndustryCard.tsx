interface Props {
  num: string
  name: string
  desc: string
  integrations: string[]
}

export default function IndustryCard({ num, name, desc, integrations }: Props) {
  return (
    <div className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-duppy-amber/25 transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-duppy-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
      <span
        className="text-duppy-amber/30 group-hover:text-duppy-amber/60 transition-colors duration-300 block mb-3"
        style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '12px', fontStyle: 'italic' }}
      >
        {num}
      </span>
      <p
        className="text-white mb-2"
        style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px' }}
      >
        {name}
      </p>
      <p className="text-duppy-muted text-sm leading-relaxed mb-4">{desc}</p>
      <p className="text-duppy-muted/50 text-xs tracking-wide">
        {integrations.join(' · ')}
      </p>
    </div>
  )
}
