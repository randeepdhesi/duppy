import type { Metadata } from 'next'
import Nav from '@/components/sections/Nav'
import IndustryHero from '@/components/sections/IndustryHero'
import IndustryGrid from '@/components/sections/IndustryGrid'
import MarqueeBand from '@/components/ui/MarqueeBand'
import BuildingSupplyDeepDive from '@/components/sections/BuildingSupplyDeepDive'
import IndustryCatchAll from '@/components/sections/IndustryCatchAll'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Industries — Duppy',
  description: 'Duppy builds AI operating systems for any operationally complex business. Built for building supply, trucking, auto dealerships, wholesale distribution, legal services, and more.',
}

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        <IndustryHero />
        <IndustryGrid />
        <MarqueeBand variant="amber" />
        <BuildingSupplyDeepDive />
        <IndustryCatchAll />
      </main>
      <Footer />
    </>
  )
}
