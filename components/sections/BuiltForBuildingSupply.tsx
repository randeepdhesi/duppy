import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

export default function BuiltForBuildingSupply() {
  return (
    <section id="industries" className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <SectionLabel className="mb-4 block">Industry focus</SectionLabel>
            <h2 className="text-4xl font-bold text-[#111111] tracking-tight mb-6 leading-tight">
              Built for building supply.
              <br />
              Ready for anything.
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              We started in lumber and building materials because we know the industry. Duppy sits on top of
              BisTrack, Spruce, and DMSi — the ERPs that run this space — and makes them actually usable.
              But the architecture works anywhere.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div
              data-testid="industry-image-placeholder"
              className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center"
            >
              <p className="text-gray-400 text-sm">Image coming soon</p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
