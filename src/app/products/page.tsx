'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import Products from '@/components/sections/Products';
import AboutPetroseal from '@/components/sections/AboutPetroseal';

export default function ProductsPage() {
  const { language } = useLanguage();

  return (
    <main className="font-sans">
      <TopBar />
      <Header />
      <Products />
      <AboutPetroseal />
      <Footer />
    </main>
  );
}