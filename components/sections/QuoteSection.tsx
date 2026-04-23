import FadeInSection from '@/components/ui/FadeInSection'
import GhostIcon from '@/components/icons/GhostIcon'

export default function QuoteSection() {
  return (
    <section className="relative bg-duppy-dark py-28 px-6 overflow-hidden grain-overlay">
      {/* Ghost — large, behind the quote */}
      <div
        className="absolute left-[-80px] top-1/2 -translate-y-1/2 pointer-events-none ghost-drift"
        aria-hidden="true"
      >
        <GhostIcon size={500} color="white" className="opacity-[0.03]" withWisp />
      </div>

      {/* Warm glow top right */}
      <div
        className="absolute top-0 right-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(232,148,58,0.08) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeInSection>
          {/* Decorative quote mark */}
          <div
            className="text-duppy-amber/15 leading-none mb-2 select-none"
            style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: '180px',
              lineHeight: '0.8',
            }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <blockquote>
            <p
              className="text-white leading-tight"
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(28px, 4.5vw, 60px)',
                fontStyle: 'italic',
              }}
            >
              BisTrack must be an acceptable bookkeeping tool, however, it is a{' '}
              <em className="text-duppy-amber not-italic">dismal failure as a sales tool.</em>
            </p>

            <footer className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-duppy-muted/40" />
              <cite className="text-duppy-muted text-sm not-italic">
                BisTrack user review, Software Advice
              </cite>
            </footer>
          </blockquote>
        </FadeInSection>

        <FadeInSection delay={0.2} className="mt-16">
          <div className="flex items-center gap-4">
            <GhostIcon size={28} color="#E8943A" />
            <p
              className="text-white"
              style={{
                fontFamily: 'var(--font-fraunces), serif',
                fontSize: 'clamp(20px, 2.5vw, 30px)',
              }}
            >
              We built the layer that fixes this.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
