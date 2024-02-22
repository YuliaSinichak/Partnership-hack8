import Header from './components/Header';
import Hero from './components/Hero';
import AboutHack from './components/AboutHack';
import ForCompany from './components/ForCompany';
import PartnershipSection from './components/Cart/PartnershipSection'
import Partners from './components/Partners'
import AboutBest from './components/AboutBest'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Hero />
      <AboutHack />
      <ForCompany />

      <PartnershipSection />

      <Partners />
      <AboutBest />
      <Contacts />
      <Footer />
    </main>
  )
}
