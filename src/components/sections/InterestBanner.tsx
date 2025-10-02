
'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const InterestBanner = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "INTERESTED IN THE LEAK SEALING ACTIVITY?",
      description: "Whether you are in charge of maintenance in your plant or a mechanical contractor, PETROSEAL will help you to set up and organize your leak sealing structure !",
      learnMore: "Learn More",
    },
    id: {
      title: "TERTARIK DENGAN AKTIVITAS PENYEGELAN KEBOCORAN?",
      description: "Baik Anda bertanggung jawab atas pemeliharaan di pabrik Anda atau kontraktor mekanik, PETROSEAL akan membantu Anda untuk mengatur dan mengorganisir struktur penyegelan kebocoran Anda!",
      learnMore: "Pelajari Lebih Lanjut",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x800?text=Industrial+Background")' }} data-aos="fade-up">
      <div className="absolute inset-0 bg-black opacity-40 backdrop-filter backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10 flex justify-end">
        <div className="text-white text-right max-w-xl">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-left">{currentContent.title}</h2>
          <p className="text-lg mb-8" data-aos="fade-left" data-aos-delay="200">
            {currentContent.description}
          </p>
          <Link href="/contact" className="bg-blue-800 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors" data-aos="zoom-in" data-aos-delay="400">
            {currentContent.learnMore}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InterestBanner;
