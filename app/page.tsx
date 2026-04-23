import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import MarqueeBand from '@/components/ui/MarqueeBand'
import WhatMakesDuppy from '@/components/sections/WhatMakesDuppy'
import StatsBanner from '@/components/sections/StatsBanner'
import HowItWorks from '@/components/sections/HowItWorks'
import PoweredByDuppy from '@/components/sections/PoweredByDuppy'
import BuiltForBuildingSupply from '@/components/sections/BuiltForBuildingSupply'
import CaseStudy from '@/components/sections/CaseStudy'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBand variant="dark" />
        <WhatMakesDuppy />
        <StatsBanner />
        <HowItWorks />
        <MarqueeBand variant="amber" />
        <PoweredByDuppy />
        <BuiltForBuildingSupply />
        <CaseStudy />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
