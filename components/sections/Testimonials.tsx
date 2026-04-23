import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

const testimonials = [
  {
    quote: "Used to take me 10 minutes to pull a quote and send it. Now I just talk to it and it's done in 30 seconds. My customers think I'm superhuman.",
    name: 'Mike R.',
    title: 'Counter Manager',
    company: 'Pacific Lumber Co.',
    initials: 'MR',
  },
  {
    quote: "I sent three custom quotes from a jobsite last week without opening my laptop once. My close rate is up and I'm home earlier.",
    name: 'Sarah T.',
    title: 'Outside Sales Rep',
    company: 'Westcoast Building Supply',
    initials: 'ST',
  },
  {
    quote: "My team started using it the same day we deployed it. Zero training, zero complaints. They just started getting faster.",
    name: 'David K.',
    title: 'General Manager',
    company: 'Alpine Supply Co.',
    initials: 'DK',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#E8943A" aria-hidden="true">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative bg-duppy-cream py-28 px-6 overflow-hidden">
      {/* Ghost watermark */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none ghost-drift"
        aria-hidden="true"
      >
        <GhostIcon size={400} color="#E8943A" className="opacity-[0.04]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="mb-16">
          <SectionLabel className="mb-4 block">What operators say</SectionLabel>
          <h2
            className="text-duppy-text leading-tight max-w-xl"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            The people who use it say it best.
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 border border-duppy-cream-deep shadow-sm hover:shadow-[0_8px_40px_rgba(28,25,21,0.10)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col gap-5">
                <Stars />

                <blockquote
                  className="text-duppy-text leading-relaxed flex-1"
                  style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '17px', fontStyle: 'italic' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-duppy-cream-deep">
                  <div className="w-9 h-9 rounded-full bg-duppy-amber/15 flex items-center justify-center shrink-0">
                    <span className="text-duppy-amber text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-duppy-text text-sm font-semibold">{t.name}</p>
                    <p className="text-duppy-muted text-xs">{t.title} · {t.company}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
