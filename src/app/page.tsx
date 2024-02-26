import AboutBest from "@/components/AboutBest";
import AboutHack from "@/components/AboutHack";
import PartnershipSection from "@/components/Cart/PartnershipSection";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import ForCompany from "@/components/ForCompany";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Statistic from "@/components/Statistic";
import Feedbacks from "@/components/Feedbacks";
import Portrait from "@/components/Portrait";
import Visitors from "@/components/Visitors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Hero />
      <AboutHack />
      <ForCompany />
      <Statistic />
      <Portrait />
      <Visitors />
      <PartnershipSection />

      <Partners />
      <Feedbacks />
      <AboutBest />
      <Contacts />
      <Footer />
    </main>
  );
}
