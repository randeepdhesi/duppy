import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <SectionLabel className="mb-4 block">How it works</SectionLabel>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-12">
            One voice command. Every system handled.
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="flex justify-center mb-12">
            <div data-testid="phone-placeholder" className="relative w-full max-w-[380px]">
              <div className="absolute inset-0 bg-accent opacity-20 blur-3xl rounded-3xl scale-75 pointer-events-none" />
              <div className="relative bg-[#1A1A1A] rounded-3xl border border-white/10 aspect-[9/19] flex items-center justify-center">
                <p className="text-[#6B7280] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl mx-auto">
            Your counter person says one sentence. Duppy checks inventory, drafts the order, sends the invoice,
            and schedules delivery. All logged in your ERP.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
