import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import WhoWeAre from '@/components/sections/WhoWeAre';
import AskExpert from '@/components/sections/AskExpert';
import Engineering from '@/components/sections/Engineering';
import WorkTogether from '@/components/sections/WorkTogether';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Petroseal Engineering',
};

export default function Home() {
  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      <Hero />
      <WhoWeAre />
      <AskExpert />
      <Engineering />
      <WorkTogether />
      <Footer />
    </main>
  );
}