'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import AboutPetroseal from '@/components/sections/AboutPetroseal';

export default function Blog() {
  const { language } = useLanguage();

  const translations = {
    en: {
      pageTitle: "BLOG & NEWS",
      sectionTitle: "LATEST ARTICLES",
      sectionSubtitle: "Read the latest news, updates, and insights from Petroseal about industrial leak sealing technology and best practices.",
      article1Title: "How to Seal Industrial Leaks Without Shutdown",
      article1Text: "Discover the proven methods and products for online leak sealing in critical industries.",
      article2Title: "Safety and Quality in Leak Sealing",
      article2Text: "Learn about our commitment to safety and quality in every project we undertake.",
      article3Title: "Innovations in Sealing Compounds",
      article3Text: "Explore the latest advancements in sealing technology from Petroseal.",
    },
    id: {
      pageTitle: "BLOG & BERITA",
      sectionTitle: "ARTIKEL TERBARU",
      sectionSubtitle: "Baca berita, pembaruan, dan wawasan terbaru dari Petroseal tentang teknologi penyegelan kebocoran industri dan praktik terbaik.",
      article1Title: "Cara Menyegel Kebocoran Industri Tanpa Penghentian Operasi",
      article1Text: "Temukan metode dan produk terbukti untuk penyegelan kebocoran online di industri kritis.",
      article2Title: "Keamanan dan Kualitas dalam Penyegelan Kebocoran",
      article2Text: "Pelajari tentang komitmen kami terhadap keamanan dan kualitas dalam setiap proyek yang kami lakukan.",
      article3Title: "Inovasi dalam Senyawa Penyegel",
      article3Text: "Jelajahi kemajuan terbaru dalam teknologi penyegelan dari Petroseal.",
    },
  };

  const currentContent = translations[language];

  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20" data-aos="fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">{currentContent.pageTitle}</h1>
        </div>
      </section>
      <section className="py-16 bg-white text-[#394959]" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">{currentContent.sectionTitle}</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-8 font-light">{currentContent.sectionSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#f5f7fa] p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{currentContent.article1Title}</h2>
              <p className="text-gray-700">{currentContent.article1Text}</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{currentContent.article2Title}</h2>
              <p className="text-gray-700">{currentContent.article2Text}</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{currentContent.article3Title}</h2>
              <p className="text-gray-700">{currentContent.article3Text}</p>
            </div>
          </div>
        </div>
      </section>
      <AboutPetroseal />
      <Footer />
    </main>
  );
}