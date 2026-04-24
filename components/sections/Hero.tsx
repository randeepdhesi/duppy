'use client'

import { useState } from 'react'
import FadeInSection from '@/components/ui/FadeInSection'
import Button from '@/components/ui/Button'
import GhostIcon from '@/components/icons/GhostIcon'
import CrownOSScreen from '@/components/sections/CrownOSScreen'
import VideoModal from '@/components/ui/VideoModal'

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
    {videoOpen && <VideoModal src="/duppy-os.mp4" onClose={() => setVideoOpen(false)} />}
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
                fontSize: 'clamp(28px, 9vw, 56px)',
                fontStyle: 'italic',
              }}
            >
              Your tools, your team.
              <br />
              <span style={{ color: '#E8943A' }}>Finally connected.</span>
            </h1>

            <p className="text-duppy-muted leading-relaxed max-w-md mb-12" style={{ fontSize: 'clamp(16px, 1.6vw, 19px)' }}>
              Most businesses run on five separate tools that can't talk to each other. Duppy connects them so you can run your whole business from one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-200 bg-duppy-amber text-white hover:bg-duppy-amber-dark shadow-sm hover:shadow-md px-10 py-4 text-lg rounded-[12px] whitespace-nowrap"
              >
                See
                <GhostIcon size={20} color="white" bgColor="transparent" />
                DUPPY in action
              </button>
              <Button href="https://duppy.typeform.com/pricing" variant="outline" size="large" className="whitespace-nowrap">
                Get pricing for my team
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 text-center lg:text-left">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-semibold">Built for operators across North America</p>
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
                      onClick={() => setVideoOpen(true)}
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
    </>
  )
}
