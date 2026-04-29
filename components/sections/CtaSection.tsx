import FadeInSection from '@/components/ui/FadeInSection'
import GhostIcon from '@/components/icons/GhostIcon'

export default function CtaSection() {
  return (
    <section id="contact" className="relative bg-duppy-cream-alt py-32 px-6 overflow-hidden">
      {/* Ghost cluster — right side */}
      <div className="absolute right-[-20px] bottom-[-20px] pointer-events-none" aria-hidden="true">
        <div className="flex items-end gap-3 opacity-[0.10]">
          <GhostIcon size={60} color="#0C0A07" bgColor="transparent" />
          <GhostIcon size={100} color="#0C0A07" bgColor="transparent" />
          <GhostIcon size={72} color="#0C0A07" bgColor="transparent" />
        </div>
      </div>

      {/* Amber glow */}
      <div
        className="absolute top-0 left-0 w-[40vw] h-[40vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(232,148,58,0.12) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeInSection>
          <div className="flex justify-center mb-8">
            <div className="[&>svg]:!w-full [&>svg]:!h-full w-24 h-24 md:w-[72px] md:h-[72px]">
              <GhostIcon size={96} color="#E8943A" className="ghost-float" />
            </div>
          </div>

          <h2
            className="text-duppy-text leading-tight mb-4"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            Ready to meet your
            <br />
            <em>invisible operator?</em>
          </h2>

          <p className="text-duppy-body text-lg mb-10">
            In 15 minutes, we'll show you Duppy running your actual workflow.
          </p>

          <a
            href="https://cal.com/duppy/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-duppy-amber text-white font-semibold text-lg px-10 py-4 rounded-[12px] hover:bg-duppy-amber-dark transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <GhostIcon size={22} color="white" bgColor="transparent" />
            See It Live
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
