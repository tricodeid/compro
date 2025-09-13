'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const CallToActionBlocks = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      block1Title: "Interested in the leak sealing activity?",
      block1Text:
        "Whether you are in charge of maintenance in your plant or a mechanical contractor, PETROSEAL will help you to set up and organize your leak sealing structure!",
      block2Title: "The Petroseal’s products",
      block2Text: "Find out the whole range of leak sealing items from Petroseal.",
      block3Title: "The Petroseal’s processes",
      block3Text: "Our pioneering processes allow to perform a reliable and safe leak sealing.",
      learnMore: "Learn More",
    },
    id: {
      block1Title: "Tertarik dengan aktivitas penyegelan kebocoran?",
      block1Text:
        "Baik Anda bertanggung jawab atas pemeliharaan di pabrik Anda atau kontraktor mekanik, PETROSEAL akan membantu Anda untuk mengatur dan mengorganisir struktur penyegelan kebocoran Anda!",
      block2Title: "Produk Petroseal",
      block2Text: "Temukan seluruh rangkaian item penyegel kebocoran dari Petroseal.",
      block3Title: "Proses Petroseal",
      block3Text: "Proses perintis kami memungkinkan untuk melakukan penyegelan kebocoran yang handal dan aman.",
      learnMore: "Pelajari Lebih Lanjut",
    },
  };

  const currentContent = translations[language as 'en' | 'id'];

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">{currentContent.block1Title}</h3>
            <p className="text-gray-700 mb-4">{currentContent.block1Text}</p>
            <Link
              href="/learn-more"
              className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {currentContent.learnMore}
            </Link>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">{currentContent.block2Title}</h3>
            <p className="text-gray-700 mb-4">{currentContent.block2Text}</p>
            <Link
              href="/products"
              className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {currentContent.learnMore}
            </Link>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">{currentContent.block3Title}</h3>
            <p className="text-gray-700 mb-4">{currentContent.block3Text}</p>
            <Link
              href="/processes"
              className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {currentContent.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBlocks;