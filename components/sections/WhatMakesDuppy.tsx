import FadeInSection from '@/components/ui/FadeInSection'
import SectionLabel from '@/components/ui/SectionLabel'

const cards = [
  {
    title: 'Your Brand',
    body: 'Every deployment carries your name, your colors, your identity. Your team sees their company, not ours.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#6C3FC5" />
      </svg>
    ),
  },
  {
    title: 'Your Systems',
    body: 'We connect to what you already use. BisTrack, Spruce, Google Workspace, whatever runs your operation. Nothing gets replaced.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1" fill="#6C3FC5" />
        <rect x="13" y="3" width="8" height="8" rx="1" fill="#6C3FC5" />
        <rect x="3" y="13" width="8" height="8" rx="1" fill="#6C3FC5" />
        <rect x="13" y="13" width="8" height="8" rx="1" fill="#6C3FC5" />
      </svg>
    ),
  },
  {
    title: 'Your AI',
    body: "Trained on your product catalog, your pricing, your customers. It doesn't guess. It knows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="#6C3FC5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
          stroke="#6C3FC5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function WhatMakesDuppy() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <SectionLabel className="mb-4 block">Why Duppy</SectionLabel>
          <h2 className="text-4xl font-bold text-[#111111] tracking-tight max-w-2xl mx-auto">
            Three commitments that shape every deployment.
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeInSection key={card.title} delay={i * 0.1}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full">
                <div className="mb-5">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{card.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{card.body}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
