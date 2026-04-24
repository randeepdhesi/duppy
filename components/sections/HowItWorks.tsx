import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'
import ActionSequence from '@/components/sections/ActionSequence'

const steps = [
  {
    num: '1',
    action: '"Check if we have 16 pieces of NewTechWood for Pacific Coast Builders."',
    result: '24 units confirmed in warehouse. Pacific Coast account and last-order pricing loaded instantly.',
  },
  {
    num: '2',
    action: '"Draft the order and apply their contract rate."',
    result: 'Order created in BisTrack. Contract pricing applied. Invoice ready to send.',
  },
  {
    num: '3',
    action: '"Send Jim the invoice and book the delivery for Friday, April 24, 2026."',
    result: 'Quote emailed. Friday delivery scheduled. Customer notified. Everything logged.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-duppy-dark py-28 px-6 overflow-hidden grain-overlay">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,148,58,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="mb-16">
          <SectionLabel light className="mb-4 block">How it works</SectionLabel>
          <h2
            className="text-white leading-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            Just talk to it.
          </h2>
        </FadeInSection>

        {/* Items centered — phone height drives the row height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Action sequence demo */}
          <FadeInSection delay={0.1}>
            <ActionSequence />
          </FadeInSection>

          {/* Right: Steps — centered vertically with the phone */}
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <FadeInSection key={i} delay={0.15 + i * 0.1}>
                <div className="group bg-duppy-card rounded-2xl p-6 border border-white/5 hover:border-duppy-amber/20 hover:shadow-[0_0_30px_rgba(232,148,58,0.07)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-7 h-7 rounded-full bg-duppy-amber/15 flex items-center justify-center text-duppy-amber text-xs font-bold shrink-0">
                      {step.num}
                    </span>
                    <div className="flex-1 h-px bg-white/8" />
                  </div>
                  <p
                    className="text-white/90 mb-2"
                    style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '17px', fontStyle: 'italic' }}
                  >
                    {step.action}
                  </p>
                  <p className="text-duppy-muted text-sm leading-relaxed">{step.result}</p>
                </div>
              </FadeInSection>
            ))}

            <FadeInSection delay={0.5}>
              <div className="flex items-center gap-3 px-2 mt-2">
                <GhostIcon size={16} color="#E8943A" className="opacity-60" />
                <p className="text-duppy-muted/60 text-xs md:text-sm">Three tasks. Under 10 seconds. Your invisible operator handled everything.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
