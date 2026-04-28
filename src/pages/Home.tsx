import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import BenefitsBar from '../sections/BenefitsBar'
import StatsMarquee from '../sections/StatsMarquee'
import Services from '../sections/Services'
import Pricing from '../sections/Pricing'
import CTA from '../sections/CTA'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <BenefitsBar />
        <StatsMarquee />
        <Services />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
