'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import Products from '@/components/sections/Products';

export default function ProductsPage() {
  const { language } = useLanguage();

  return (
    <main className="font-sans">
      <Header />
      <Products />
      <Footer />
    </main>
  );
}
