import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'
import Button from '@/components/ui/Button'

const industries = [
  {
    num: '01',
    name: 'Building Supply',
    desc: 'Every quote, order, and delivery update runs through one operator that already knows your ERP, your inbox, and exactly how your business moves product.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Trucking & Logistics',
    desc: 'Every load assignment, manifest, and driver check-in moves through one operator so your dispatch team always knows where things stand without chasing updates.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Law Firms',
    desc: 'Every new matter, billing reminder, and court date flows through one operator so your team spends their time on clients, not on tracking down information.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
        <path d="M7 21H17"/>
        <path d="M12 3v18"/>
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Wholesale Distribution',
    desc: 'Every purchase order, inventory update, and customer follow-up runs through one operator so your sales and ops teams are always working from the same picture.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v16h18"/>
        <path d="M18 17V9"/>
        <path d="M13 17V5"/>
        <path d="M8 17v-3"/>
      </svg>
    ),
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
    name: 'Google Workspace',
    mark: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="white" aria-hidden="true">
        <path d="M11 1C5.5 1 1 5.5 1 11s4.5 10 10 10 10-4.5 10-10V9.5H11V13h5.8C15.8 15.8 13.6 17 11 17c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3 .6 4.1 1.6l2.8-2.8C16.2 2.2 13.7 1 11 1z"/>
      </svg>
    ),
  },
  {
    name: 'Calendar',
    mark: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="1.5" y="3.5" width="19" height="17" rx="2" stroke="white" strokeWidth="1.5"/>
        <path d="M1.5 8.5h19" stroke="white" strokeWidth="1.5"/>
        <path d="M7 1.5v4M15 1.5v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="5.5" y="12" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="9.5" y="12" width="3" height="3" rx="0.5" fill="white"/>
        <rect x="13.5" y="12" width="3" height="3" rx="0.5" fill="white"/>
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

                  {/* Icon — top right */}
                  <div className="absolute top-7 right-7 text-duppy-amber opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                    {ind.icon}
                  </div>

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

        {/* Catch-all — mobile */}
        <FadeInSection delay={0.2} className="mt-10 md:hidden">
          <div className="flex items-start justify-center gap-3">
            <GhostIcon size={24} color="#E8943A" className="opacity-80 flex-shrink-0" />
            <p className="text-duppy-muted text-sm text-left">
              <span className="text-white/70">Not on the list?</span><br />
              Duppy can be tailored to any business.
            </p>
          </div>
        </FadeInSection>

        {/* Catch-all — desktop only */}
        <FadeInSection delay={0.2} className="mt-10 hidden md:block">
          <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/8 bg-white/[0.03] px-8 py-7">
            <div className="flex items-center gap-4">
              <GhostIcon size={32} color="#E8943A" bgColor="transparent" className="opacity-60 flex-shrink-0" />
              <p className="text-duppy-muted text-base leading-snug">
                <span className="text-white font-medium">Not on the list?</span>{' '}
                Duppy can be tailored to any business that runs on more than one tool.
              </p>
            </div>
            <Button href="https://cal.com/duppy/demo" variant="outline" size="default" className="whitespace-nowrap flex-shrink-0">
              Let&apos;s talk
            </Button>
          </div>
        </FadeInSection>

      </div>
    </section>
  )
}
