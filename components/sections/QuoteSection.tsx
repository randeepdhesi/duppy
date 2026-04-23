import FadeInSection from '@/components/ui/FadeInSection'

export default function QuoteSection() {
  return (
    <section className="bg-[#111111] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <blockquote className="border-l-4 border-accent pl-8 mb-8">
            <p className="text-white text-2xl md:text-[28px] font-medium leading-relaxed">
              &ldquo;BisTrack must be an acceptable bookkeeping tool, however, it is a dismal failure as a
              sales tool.&rdquo;
            </p>
            <footer className="mt-4 text-[#6B7280] text-sm">
              — BisTrack user review, Software Advice
            </footer>
          </blockquote>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <p className="text-white text-xl font-bold pl-8">
            We built the layer that fixes this.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
