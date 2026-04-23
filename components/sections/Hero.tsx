import FadeInSection from '@/components/ui/FadeInSection'
import Button from '@/components/ui/Button'
import GhostIcon from '@/components/icons/GhostIcon'
import CrownOSScreen from '@/components/sections/CrownOSScreen'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-duppy-dark flex items-center overflow-hidden grain-overlay">

      {/* Amber glow — top left */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[45vw] h-[60vh] rounded-full pointer-events-none glow-pulse"
        style={{ background: 'radial-gradient(ellipse, rgba(232,148,58,0.18) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — Headline + CTAs */}
          <FadeInSection>
            <div className="flex items-center gap-3 mb-10">
              <GhostIcon size={20} color="#E8943A" />
              <span className="text-duppy-amber text-xs font-semibold uppercase tracking-[0.18em]">
                YOUR INVISIBLE OPERATOR
              </span>
            </div>

            <h1
              className="text-white leading-[1.05] tracking-tight mb-8"
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(50px, 4vw, 56px)',
                fontStyle: 'italic',
              }}
            >
              One command.
              <br />
              <span style={{ color: '#E8943A' }}>Every task handled.</span>
            </h1>

            <p className="text-duppy-muted leading-relaxed max-w-md mb-12" style={{ fontSize: 'clamp(16px, 1.6vw, 19px)' }}>
              Meet Duppy, the invisible intelligence behind your operation. Speak or type to check inventory, draft quotes, and update accounts instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#how-it-works" variant="primary" size="large">
                See it in action
              </Button>
              <Button href="mailto:hello@duppy.ai" variant="outline" size="large">
                Get in touch
              </Button>
            </div>

            {/* Placeholder logo strip */}
            <div className="mt-10 pt-8 border-t border-white/10 text-center lg:text-left">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-5">Trusted by operators across North America</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-4">
                {/* Crown Supply */}
                <div className="flex items-center gap-1.5 opacity-25 hover:opacity-40 transition-opacity duration-200">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L13 4v4c0 3-2.5 4.5-6 5-3.5-.5-6-2-6-5V4z" fill="white"/></svg>
                  <span style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>CROWN</span>
                </div>
                {/* Ridgeline */}
                <div className="flex items-center gap-1.5 opacity-25 hover:opacity-40 transition-opacity duration-200">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 9L5 2l3 4 2-3 3 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>RIDGELINE</span>
                </div>
                {/* Summit */}
                <div className="flex items-center gap-1.5 opacity-25 hover:opacity-40 transition-opacity duration-200">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.5"/><circle cx="7" cy="7" r="2" fill="white"/></svg>
                  <span style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>SUMMIT</span>
                </div>
                {/* Northfield */}
                <div className="flex items-center gap-1.5 opacity-25 hover:opacity-40 transition-opacity duration-200">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><rect x="1" y="1" width="10" height="12" rx="1.5" stroke="white" strokeWidth="1.5"/><path d="M3.5 5h5M3.5 8h3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <span style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>NORTHFIELD</span>
                </div>
              </div>
            </div>

          </FadeInSection>

          {/* Right — Crown OS phone mockup */}
          <FadeInSection delay={0.15} className="flex flex-col items-center gap-6">
            <div className="relative flex items-center gap-6">
              {/* Decorative ghost — floats to the left of the phone, desktop only */}
              <div className="hidden lg:block pointer-events-none ghost-float opacity-20 self-start mt-16" aria-hidden="true">
                <GhostIcon size={56} color="white" bgColor="transparent" />
              </div>

              <div className="relative" style={{ width: 280, height: Math.round(852 * 280 / 393) }}>
                {/* Warm glow behind */}
                <div
                  className="absolute inset-0 scale-125 rounded-[50px] blur-3xl pointer-events-none glow-pulse"
                  style={{ background: 'radial-gradient(ellipse, rgba(179,135,75,0.22) 0%, transparent 65%)' }}
                  aria-hidden="true"
                />

                {/* Phone at native 393px, scaled down to 280px display */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 393,
                    height: 852,
                    transform: `scale(${280 / 393})`,
                    transformOrigin: 'top left',
                  }}
                >
                  <CrownOSScreen />
                </div>

                {/* Glassmorphism play button */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
                  <div className="relative flex items-center justify-center">
                    {/* Pulse ring */}
                    <div
                      className="absolute rounded-full animate-ping"
                      style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.12)', animationDuration: '2.4s' }}
                    />
                    {/* Glass button */}
                    <button
                      className="relative flex items-center justify-center rounded-full cursor-pointer"
                      style={{
                        width: 70,
                        height: 70,
                        background: 'rgba(255,255,255,0.14)',
                        backdropFilter: 'blur(14px)',
                        WebkitBackdropFilter: 'blur(14px)',
                        border: '1px solid rgba(255,255,255,0.28)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.22)',
                      }}
                      aria-label="Play demo video"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 3 }}>
                        <path d="M7 4.5v15l11-7.5z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ghost trio — mobile only, sits below the phone */}
            <div className="flex lg:hidden items-end gap-5 opacity-15 pointer-events-none" aria-hidden="true">
              <GhostIcon size={22} color="white" className="mb-2" bgColor="transparent" />
              <GhostIcon size={32} color="white" bgColor="transparent" />
              <GhostIcon size={18} color="white" className="mb-3" bgColor="transparent" />
            </div>
          </FadeInSection>
        </div>

        {/* Ghost trio — bottom right, desktop only */}
        <div className="absolute bottom-10 right-6 hidden xl:flex items-end gap-6 opacity-15 pointer-events-none" aria-hidden="true">
          <GhostIcon size={28} color="white" className="mb-2" bgColor="transparent" />
          <GhostIcon size={38} color="white" bgColor="transparent" />
          <GhostIcon size={22} color="white" className="mb-3" bgColor="transparent" />
        </div>
      </div>
    </section>
  )
}
