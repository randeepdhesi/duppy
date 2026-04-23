import FadeInSection from '@/components/ui/FadeInSection'
import Button from '@/components/ui/Button'
import GhostIcon from '@/components/icons/GhostIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[600px] h-[600px] rounded-full bg-accent opacity-[0.12] blur-[120px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <GhostIcon size={480} color="white" className="opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeInSection>
          <h1 className="text-4xl md:text-[64px] font-bold text-white leading-tight tracking-tight mb-6">
            Your business already has the tools.
            <br />
            It just needs a brain.
          </h1>
          <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mx-auto mb-10">
            Duppy builds AI operating systems that connect your ERP, email, calendar, and CRM into one
            voice-driven interface — branded to your company, trained on your data, deployed in days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#how-it-works" variant="primary" size="large">
              See it in action
            </Button>
            <Button href="#about" variant="outline" size="large">
              Learn more
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
