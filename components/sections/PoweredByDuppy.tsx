import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'
import { FreightLinkScreen, SummitAutoScreen, LexingtonLawScreen } from '@/components/sections/IndustryOSScreen'

const SCALE = 200 / 393
const PHONE_W = 200
const PHONE_H = Math.round(852 * SCALE)

const instances = [
  {
    Screen: FreightLinkScreen,
    accent: '#89CFF0',
    industry: 'Freight & Logistics',
    blurb: 'Dispatch, routing, and driver tracking managed through a single voice-powered operator.',
  },
  {
    Screen: SummitAutoScreen,
    accent: '#FFFFFF',
    industry: 'Auto Dealerships',
    blurb: 'Check live inventory, manage leads, and close deals without ever switching between systems.',
  },
  {
    Screen: LexingtonLawScreen,
    accent: '#C5B358',
    industry: 'Legal Services',
    blurb: 'Pull case files, schedule clients, and send updates through one interface built around your practice.',
  },
]

export default function PoweredByDuppy() {
  return (
    <section id="industries" className="relative bg-duppy-cream-alt py-28 px-6 overflow-hidden">
      {/* Ghost watermark */}
      <div
        className="absolute left-[-80px] top-1/2 -translate-y-[40%] pointer-events-none ghost-drift"
        aria-hidden="true"
      >
        <GhostIcon size={420} color="#0C0A07" className="opacity-[0.04]" bgColor="transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="mb-20">
          <SectionLabel className="mb-4 block">Your OS, our engine</SectionLabel>
          <h2
            className="text-duppy-text leading-tight max-w-2xl mb-4"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(20px, 6vw, 52px)' }}
          >
            Your business. Your brand. Powered by Duppy.
          </h2>
          <p className="text-duppy-body text-lg max-w-xl">
            We don't sell generic software. We build an invisible operator that connects every tool your business already uses and runs completely invisible behind your brand.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 max-w-5xl mx-auto">
          {instances.map(({ Screen, accent, industry, blurb }, i) => (
            <FadeInSection key={industry} delay={i * 0.1} className="flex flex-col items-center">

              {/* Phone frame */}
              <div className="relative" style={{ width: PHONE_W }}>
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-[36px] blur-2xl opacity-25 pointer-events-none scale-110"
                  style={{ backgroundColor: accent }}
                />
                {/* Frame */}
                <div
                  className="relative rounded-[28px] overflow-hidden border"
                  style={{ width: PHONE_W, height: PHONE_H, borderColor: `${accent}55`, boxShadow: '0 24px 60px rgba(0,0,0,0.3)' }}
                >
                  {/* Screen rendered at native 393px then scaled */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 393, height: 852, transform: `scale(${SCALE})`, transformOrigin: 'top left' }}>
                    <Screen />
                  </div>
                </div>
              </div>

              {/* Under-phone copy */}
              <div className="mt-6 text-center px-2">
                <p className="text-duppy-text text-base font-semibold uppercase tracking-widest mb-1.5">{industry}</p>
                <p className="text-duppy-text/80 text-base leading-snug">{blurb}</p>
              </div>

            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
