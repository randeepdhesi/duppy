import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'
import IndustryCard from '@/components/ui/IndustryCard'

const industries = [
  {
    num: '01',
    name: 'Building Supply & Lumber',
    desc: 'Counter staff juggling BisTrack, email, and spreadsheets to serve one customer.',
    integrations: ['BisTrack', 'Spruce', 'DMSi', 'Outlook'],
  },
  {
    num: '02',
    name: 'Trucking & Freight',
    desc: 'Dispatch living in four systems while drivers wait on the phone for load details.',
    integrations: ['TMS', 'ELD', 'Outlook', 'Google Workspace'],
  },
  {
    num: '03',
    name: 'Auto Dealerships',
    desc: 'Inventory in one system, leads in another, service in a third — nothing talks to anything.',
    integrations: ['DMS', 'CRM', 'Outlook', 'Calendar'],
  },
  {
    num: '04',
    name: 'Wholesale Distribution',
    desc: 'Orders, invoicing, and customer follow-up split across software your team barely uses.',
    integrations: ['ERP', 'CRM', 'Outlook', 'QuickBooks'],
  },
  {
    num: '05',
    name: 'Legal & Professional Services',
    desc: 'Billing, case files, and client comms each living in a different tool.',
    integrations: ['Practice Mgmt', 'Billing', 'Outlook', 'Calendar'],
  },
  {
    num: '06',
    name: 'Electrical & HVAC Wholesale',
    desc: 'Same operational complexity as building supply — inventory, quotes, deliveries — with no integrated layer.',
    integrations: ['ERP', 'Outlook', 'Quoting', 'Calendar'],
  },
]

export default function IndustryGrid() {
  return (
    <section className="relative bg-duppy-dark py-24 px-6 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection className="mb-12">
          <SectionLabel light className="mb-4 block">Six industries. One operating layer.</SectionLabel>
          <p className="text-duppy-muted text-lg max-w-xl">
            Each deployment is trained on your data, connected to your tools, and branded to your company.
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <FadeInSection key={ind.num} delay={i * 0.07}>
              <IndustryCard {...ind} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
