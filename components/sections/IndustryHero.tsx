import GhostIcon from '@/components/icons/GhostIcon'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeInSection from '@/components/ui/FadeInSection'

export default function IndustryHero() {
  return (
    <section className="relative bg-duppy-dark pt-40 pb-28 px-6 overflow-hidden">
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none ghost-float"
        aria-hidden="true"
      >
        <GhostIcon size={340} color="white" className="opacity-[0.03]" bgColor="transparent" />
      </div>
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(232,148,58,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="max-w-3xl">
          <SectionLabel light className="mb-5 block">Built to adapt</SectionLabel>
          <h1
            className="text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            One operator.{' '}
            <em className="text-duppy-amber">Every industry.</em>
          </h1>
          <p className="text-duppy-muted text-lg leading-relaxed max-w-2xl">
            Duppy connects to whatever your business already runs on — ERP, email, calendar, CRM — and gives your team one interface to run all of it. The operator is ours. Everything else is yours.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
