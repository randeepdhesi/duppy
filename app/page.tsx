import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import WhatMakesDuppy from '@/components/sections/WhatMakesDuppy'
import HowItWorks from '@/components/sections/HowItWorks'
import PoweredByDuppy from '@/components/sections/PoweredByDuppy'
import BuiltForBuildingSupply from '@/components/sections/BuiltForBuildingSupply'
import QuoteSection from '@/components/sections/QuoteSection'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatMakesDuppy />
        <HowItWorks />
        <PoweredByDuppy />
        <BuiltForBuildingSupply />
        <QuoteSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
