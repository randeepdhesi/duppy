import FadeInSection from '@/components/ui/FadeInSection'

export default function CtaSection() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-purple-50/40 py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-8 leading-tight">
            Ready to put an AI operator to work in your business?
          </h2>
          <a
            href="mailto:hello@duppy.ai"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#5a32a3] transition-colors mb-6"
          >
            Get in touch
          </a>
          <p className="text-[#6B7280] text-base">See a live demo in under 2 minutes.</p>
        </FadeInSection>
      </div>
    </section>
  )
}
