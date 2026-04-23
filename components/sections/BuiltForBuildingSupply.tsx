import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

const industries = [
  {
    num: '01',
    name: 'Building Supply',
    desc: 'Deep ERP integrations for BisTrack, Spruce, and DMSi. Our home base.',
  },
  {
    num: '02',
    name: 'Trucking & Logistics',
    desc: 'Dispatch, manifests, and delivery coordination — all from a single voice command.',
  },
  {
    num: '03',
    name: 'Real Estate',
    desc: 'Listings, CRM, calendar, and client communications wired together.',
  },
  {
    num: '04',
    name: 'Wholesale Distribution',
    desc: 'Inventory, order management, invoicing, and customer follow-up in one interface.',
  },
]

export default function BuiltForBuildingSupply() {
  return (
    <section id="industries" className="relative bg-duppy-dark py-28 px-6 overflow-hidden border-t border-white/[0.06]">
      <div
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 pointer-events-none ghost-float"
        aria-hidden="true"
      >
        <GhostIcon size={320} color="white" className="opacity-[0.03]" bgColor="transparent" />
      </div>

      {/* Amber glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(232,148,58,0.07) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <FadeInSection>
            <SectionLabel light className="mb-4 block">Any industry</SectionLabel>
            <h2
              className="text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Built for any industry.{' '}
              <span className="block sm:inline"><em className="text-duppy-amber">Designed for yours.</em></span>
            </h2>
            <p className="text-duppy-muted text-lg leading-relaxed mb-6">
              Duppy adapts to how you actually work. It learns your specific inventory, pricing, and daily tasks so you never have to explain the basics.
            </p>

            <div className="flex flex-wrap gap-2">
              {['BisTrack', 'Spruce', 'DMSi', 'Google Workspace', 'Outlook', 'Salesforce'].map((erp) => (
                <span
                  key={erp}
                  className="text-xs font-medium text-duppy-muted border border-white/10 bg-white/5 px-3 py-1.5 rounded-[6px]"
                >
                  {erp}
                </span>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div
              data-testid="industry-image-placeholder"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="group relative bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-duppy-amber/25 transition-all duration-300"
                >
                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-duppy-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

                  <span
                    className="text-duppy-amber/30 group-hover:text-duppy-amber/60 transition-colors duration-300 block mb-3"
                    style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '12px', fontStyle: 'italic' }}
                  >
                    {ind.num}
                  </span>
                  <p
                    className="text-white mb-2"
                    style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '18px' }}
                  >
                    {ind.name}
                  </p>
                  <p className="text-duppy-muted text-sm leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
