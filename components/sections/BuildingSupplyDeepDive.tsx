import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import GhostIcon from '@/components/icons/GhostIcon'

const integrations = ['BisTrack', 'Spruce', 'DMSi', 'Google Workspace', 'Outlook']

function TerminalDemo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/[0.12]" />
        <div className="ml-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-duppy-amber/80" />
          <span className="text-duppy-muted text-xs tracking-[0.15em] uppercase">
            Crown OS · Powered by Duppy
          </span>
        </div>
      </div>
      <div className="p-6 space-y-5">
        <div className="flex gap-3 items-start">
          <span className="text-duppy-amber font-mono text-sm mt-0.5 flex-shrink-0">›</span>
          <p className="text-white/80 text-sm font-mono leading-relaxed">
            Pull inventory on 16&apos; Norwegian Fluted in Teak, create an order for Pacific Coast Builders, and email Jim the invoice.
          </p>
        </div>
        <div className="border-t border-white/[0.08] pt-5 space-y-3">
          <p className="text-duppy-amber text-xs uppercase tracking-[0.18em] font-semibold">Done.</p>
          <p className="text-duppy-muted text-sm font-mono leading-relaxed">
            16 pieces confirmed at Burnaby. Order #4821 created in BisTrack. Invoice sent to jim@pacificcoastbuilders.com — $3,117.76 + tax. Delivery set for Friday.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function BuildingSupplyDeepDive() {
  return (
    <section className="relative bg-duppy-cream-alt py-28 px-6 overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(232,148,58,0.06) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <FadeInSection>
            <SectionLabel className="mb-5 block">Where we started</SectionLabel>
            <h2
              className="text-duppy-text leading-tight mb-6"
              style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Built from the inside out.
            </h2>
            <div className="space-y-4 text-duppy-body text-lg leading-relaxed mb-10">
              <p>
                Duppy started in building supply because that&apos;s where the problem is most visible. Years spent inside the industry — watching counter staff switch between BisTrack and Outlook and spreadsheets to handle a single customer — made it obvious that the tools weren&apos;t the problem. The missing layer was.
              </p>
              <p>
                BisTrack knows your inventory. Outlook knows your customers. Your calendar knows your schedule. Duppy connects all three and gives your team one place to run everything.
              </p>
            </div>

            <p className="text-duppy-body/60 text-sm uppercase tracking-widest font-semibold mb-4">
              Connects to the tools you already use
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="text-duppy-body/40 hover:text-duppy-body/70 transition-colors text-sm font-semibold tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-2.5 pt-8 border-t border-duppy-cream-deep/60">
              <GhostIcon size={14} color="#E8943A" className="opacity-70 flex-shrink-0 mt-0.5" />
              <p
                className="text-duppy-body/60 text-sm italic leading-relaxed"
                style={{ fontFamily: 'var(--font-fraunces), serif' }}
              >
                Crown OS is live at Crown Building Supplies — inventory, orders, invoices, and emails, all from one command.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <TerminalDemo />
          </FadeInSection>

        </div>
      </div>
    </section>
  )
}
