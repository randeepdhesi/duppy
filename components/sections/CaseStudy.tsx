import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'
import CrownOSScreen from '@/components/sections/CrownOSScreen'
import CrownActionsScreen from '@/components/sections/CrownActionsScreen'

const stats = [
  { value: '10s', label: 'to handle a full order workflow' },
  { value: 'Zero', label: 'minutes of onboarding required' },
  { value: '3', label: 'systems connected on day one' },
]

export default function CaseStudy() {
  return (
    <section className="relative bg-duppy-mid py-28 px-6 overflow-hidden grain-overlay">
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none ghost-float"
        aria-hidden="true"
      >
        <GhostIcon size={380} color="white" className="opacity-[0.04]" withWisp bgColor="transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <FadeInSection>
            <SectionLabel light className="mb-6 block">Real results</SectionLabel>

            <h2
              className="text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(28px, 3.5vw, 46px)' }}
            >
              Operating in the real world.
            </h2>

            <p className="text-duppy-muted text-lg leading-relaxed mb-8">
              Crown Building Supplies connected their ERP, email, and CRM on day one. Now their reps check inventory, draft quotes, and close deals from the job site — no laptop, no hold music, no back-and-forth with the desk.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/8 rounded-xl p-4">
                  <p
                    className="text-white leading-none mb-1.5"
                    style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '32px', fontStyle: 'italic' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-duppy-muted text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-2 border-duppy-amber/40 pl-5">
              <p className="text-white/80 text-base leading-relaxed italic mb-3">
                "Our reps used to lose hours calling the desk to check inventory from a job site. Now they just ask the app and get an answer instantly. They are closing deals instead of waiting on hold."
              </p>
              <footer className="flex items-center gap-3">
                <cite className="text-duppy-muted text-sm not-italic">
                  Rob · Operations Director, Crown Building Supplies
                </cite>
              </footer>
            </blockquote>
          </FadeInSection>

          {/* Right: Two-phone showcase from Claude Design */}
          <FadeInSection delay={0.15}>
            <div className="flex justify-center">
            <div
              className="flex flex-col items-center gap-8 mx-auto [transform:scale(0.68)] sm:[transform:scale(0.85)] lg:[transform:scale(1)] origin-top [margin-bottom:-200px] sm:[margin-bottom:-90px] lg:mb-0"
              style={{ width: 460 }}
            >

              {/* Phones container */}
              <div className="relative w-full" style={{ height: 560 }}>

                {/* Back phone — Crown OS home, tilted left */}
                <div
                  className="absolute"
                  style={{
                    left: 0,
                    top: 90,
                    width: 220,
                    height: Math.round(852 * 220 / 393),
                    transform: 'rotate(-9deg)',
                    opacity: 0.82,
                    zIndex: 1,
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 393, height: 852, transform: `scale(${220 / 393})`, transformOrigin: 'top left' }}>
                    <CrownOSScreen />
                  </div>
                </div>

                {/* Front phone — Crown OS actions, tilted right */}
                <div
                  className="absolute"
                  style={{
                    right: 0,
                    top: 10,
                    width: 248,
                    height: Math.round(852 * 248 / 393),
                    transform: 'rotate(6deg)',
                    zIndex: 2,
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 393, height: 852, transform: `scale(${248 / 393})`, transformOrigin: 'top left' }}>
                    <CrownActionsScreen />
                  </div>
                </div>

              </div>

              {/* Powered by Duppy pill — clearly below both phones */}
              <div
                className="flex items-center gap-3 whitespace-nowrap"
                style={{
                  background: '#E8943A',
                  border: '1px solid #C97A28',
                  borderRadius: 999,
                  padding: '12px 24px',
                  boxShadow: '0 20px 40px rgba(232,148,58,0.35)',
                }}
              >
                <div style={{ width: 24, height: 24, borderRadius: 12, background: '#0C0A07', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GhostIcon size={13} color="#E8943A" />
                </div>
                <span style={{ color: '#1C1107', fontSize: 12, fontWeight: 700, letterSpacing: 3 }}>POWERED BY DUPPY</span>
              </div>

            </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
