import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

const cards = [
  {
    num: '01',
    title: 'Your Brand',
    body: 'We build the operator to look like your company, with your logo, your colors, and your name on the screen. Everything your team sees belongs to your brand. Duppy stays completely invisible behind it.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3l2.5 5H9.5L12 3z" />
        <rect x="4" y="8" width="20" height="14" rx="2" />
        <path d="M10 22v-5h8v5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Every Tool',
    body: 'Duppy connects every tool your business already runs: your ERP, your email, your calendar, your CRM. Your team stops switching between systems and starts getting answers from one place.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="17" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="17" width="8" height="8" rx="1.5" />
        <rect x="17" y="17" width="8" height="8" rx="1.5" />
        <path d="M11 7h6M7 11v6M21 11v6M11 21h6" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Just Ask',
    body: "There's nothing to install and nobody to train. Your team just speaks or types in plain language, and Duppy executes the task across every connected system at once.",
    icon: null,
  },
]

export default function WhatMakesDuppy() {
  return (
    <section id="why-duppy" className="relative bg-duppy-cream py-28 px-6 overflow-hidden">
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none ghost-drift"
        aria-hidden="true"
      >
        <GhostIcon size={320} color="#E8943A" className="opacity-[0.06]" bgColor="transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="mb-20">
          <SectionLabel className="mb-4 block">Why Duppy</SectionLabel>
          <h2
            className="text-duppy-text leading-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(24px, 7vw, 52px)' }}
          >
            We don't replace anything.{' '}
            <span className="block sm:inline">We connect everything.</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeInSection key={card.title} delay={i * 0.1}>
              <div className="group relative bg-white rounded-2xl p-10 border border-duppy-cream-deep shadow-sm hover:shadow-[0_8px_40px_rgba(28,25,21,0.12)] hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden">
                {/* Hover accent top line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-duppy-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

                {/* Number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-duppy-amber/30 leading-none group-hover:text-duppy-amber/50 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '80px', fontStyle: 'italic', lineHeight: '0.85' }}
                  >
                    {card.num}
                  </span>

                  <div className="text-duppy-amber/50 group-hover:text-duppy-amber transition-colors duration-300 mt-2">
                    {card.icon ?? <GhostIcon size={44} color="currentColor" outline />}
                  </div>
                </div>

                <h3 className="text-duppy-text mb-4" style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '24px' }}>
                  {card.title}
                </h3>
                <p className="text-duppy-body leading-relaxed">{card.body}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
