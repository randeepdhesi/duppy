import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

const osInstances = [
  { name: 'Crown OS', accent: '#B8960C' },
  { name: 'Southridge OS', accent: '#2563EB' },
  { name: 'Pacific OS', accent: '#16A34A' },
]

export default function PoweredByDuppy() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">Your OS, our engine</SectionLabel>
          <h2 className="text-4xl font-bold text-[#111111] tracking-tight mb-4">
            Your business. Your brand. Powered by Duppy.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Every customer gets their own branded operating system. Same brain, different face.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {osInstances.map((os, i) => (
            <FadeInSection key={os.name} delay={i * 0.1} className="flex flex-col items-center">
              <div className="relative w-full max-w-[180px]">
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: os.accent }}
                />
                <div
                  className="relative bg-[#1A1A1A] rounded-3xl border aspect-[9/19] flex flex-col items-center justify-center gap-2"
                  style={{ borderColor: `${os.accent}40` }}
                >
                  <div className="w-8 h-1 rounded-full" style={{ backgroundColor: os.accent }} />
                  <p className="text-white/30 text-xs">Soon</p>
                </div>
              </div>
              <p className="mt-4 font-semibold text-[#111111] text-sm">{os.name}</p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
