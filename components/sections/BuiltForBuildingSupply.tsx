import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

const industries = [
  {
    num: '01',
    name: 'Building Supply',
    desc: 'BisTrack, Spruce, and DMSi all connected through one invisible operator. This is where we started.',
  },
  {
    num: '02',
    name: 'Trucking & Logistics',
    desc: 'Dispatch, manifests, and delivery coordination all managed through a single voice-powered operator.',
  },
  {
    num: '03',
    name: 'Real Estate',
    desc: 'Listings, CRM, calendar, and client communications all connected through one interface.',
  },
  {
    num: '04',
    name: 'Wholesale Distribution',
    desc: 'Inventory, orders, invoicing, and customer follow-up running through one interface your whole team can use.',
  },
]

const integrations = [
  {
    name: 'BisTrack',
    mark: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="1.5" y="5.5" width="19" height="13" rx="2" stroke="white" strokeWidth="1.5"/>
        <path d="M7 5.5V3.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 10v4M9 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Spruce',
    mark: (
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true">
        <path d="M9 1L17 9.5H12.5L16.5 15.5H10.5V21H7.5V15.5H1.5L5.5 9.5H1L9 1Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'DMSi',
    mark: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 3h7c4.4 0 8 3.6 8 8s-3.6 8-8 8H3V3z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 8h4a3 3 0 0 1 0 6H7V8z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    mark: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="white" aria-hidden="true">
        <path d="M11 1C5.5 1 1 5.5 1 11s4.5 10 10 10 10-4.5 10-10V9.5H11V13h5.8C15.8 15.8 13.6 17 11 17c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3 .6 4.1 1.6l2.8-2.8C16.2 2.2 13.7 1 11 1z"/>
      </svg>
    ),
  },
  {
    name: 'Outlook',
    mark: (
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="22" height="18" rx="2.5" stroke="white" strokeWidth="1.5"/>
        <path d="M1 6l11 7 11-7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    mark: (
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
        <path d="M11.5 5C12.5 3.5 14.2 2.5 16.2 2.5c3 0 5.4 2.1 5.9 4.9C23.4 7.8 24.5 9.1 24.5 10.7c0 1.9-1.5 3.3-3.3 3.3H6.8C5 14 3.5 12.5 3.5 10.7c0-1.6 1.1-2.9 2.6-3.2.3 0 .5-.1.8-.1.8-1.4 2.3-2.4 4-2.4z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function BuiltForBuildingSupply() {
  return (
    <section className="relative bg-duppy-dark py-28 px-6 overflow-hidden border-t border-white/[0.06]">
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
            <SectionLabel light className="mb-4 block">Built to adapt</SectionLabel>
            <h2
              className="text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Built for any industry.{' '}
              <span className="block sm:inline"><em className="text-duppy-amber">Designed for yours.</em></span>
            </h2>
            <p className="text-duppy-muted text-lg leading-relaxed mb-8">
              Every industry has its own language. Duppy learns yours, so your team gets an operator that already knows how your business works from day one.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6">
              {integrations.map(({ name, mark }) => (
                <div
                  key={name}
                  className="flex items-center gap-2.5 opacity-35 hover:opacity-60 transition-opacity duration-200"
                >
                  <div className="text-white flex-shrink-0">{mark}</div>
                  <span style={{ color: 'white', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                    {name}
                  </span>
                </div>
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
