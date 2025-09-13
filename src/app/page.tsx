import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import ImageGrid from '@/components/sections/ImageGrid';
import ApplicationsBanner from '@/components/sections/ApplicationsBanner';
import InformationBlocks from '@/components/sections/InformationBlocks';
import ProvenProcessesBanner from '@/components/sections/ProvenProcessesBanner';
import Phases from '@/components/sections/Phases';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import ClientLogosCarousel from '@/components/sections/ClientLogosCarousel';
import CallToActionBlocks from '@/components/sections/CallToActionBlocks';
import AboutPetroseal from '@/components/sections/AboutPetroseal';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="font-sans bg-white">
      <Header />
      <Hero />
      <div className="bg-white">
        <Introduction />
      </div>
      <div className="bg-[#f5f7fa]">
        <ImageGrid />
      </div>
      <div className="bg-white">
        <ApplicationsBanner />
        <InformationBlocks />
      </div>
      <div className="bg-[#f5f7fa]">
        <ProvenProcessesBanner />
      </div>
      <div className="bg-white">
        <Phases />
      </div>
      <div className="bg-[#f5f7fa]">
        <CallToActionBanner />
        <ClientLogosCarousel />
      </div>
      <div className="bg-white">
        <CallToActionBlocks />
        <AboutPetroseal />
      </div>
      <Footer />
    </main>
  );
}