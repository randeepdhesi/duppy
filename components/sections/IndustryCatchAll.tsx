import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

export default function IndustryCatchAll() {
  return (
    <section className="relative bg-duppy-dark py-28 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(232,148,58,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeInSection>
          <div className="flex justify-center mb-8">
            <div className="[&>svg]:!w-full [&>svg]:!h-full w-24 h-24 md:w-[72px] md:h-[72px]">
              <GhostIcon size={96} color="#E8943A" className="ghost-float" />
            </div>
          </div>
          <SectionLabel light className="mb-5 block">Built for yours too</SectionLabel>
          <h2
            className="text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            If your team juggles more than one system,{' '}
            <em className="text-duppy-amber">Duppy can run it.</em>
          </h2>
          <p className="text-duppy-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Every business has its own tools, its own language, and its own way of working. Duppy learns all of it. If your operation runs on software that doesn&apos;t talk to itself — and your people pay the price — that&apos;s exactly what Duppy is built to fix.
          </p>
          <a
            href="mailto:hello@duppy.ai"
            className="inline-flex items-center gap-3 bg-duppy-amber text-white font-semibold text-lg px-10 py-4 rounded-[12px] hover:bg-duppy-amber-dark transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <GhostIcon size={20} color="white" bgColor="transparent" />
            Tell us about your operation
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
