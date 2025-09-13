
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Our Services",
      onlineLeakSealingTitle: "Online Leak Sealing",
      onlineLeakSealingDescription: "We provide online leak sealing services for various industries.",
      compositeRepairTitle: "Composite Repair",
      compositeRepairDescription: "We offer composite repair services for pipelines and other equipment.",
      hotTappingTitle: "Hot Tapping",
      hotTappingDescription: "We provide hot tapping services to add new connections to existing pipelines.",
    },
    id: {
      title: "Layanan Kami",
      onlineLeakSealingTitle: "Penyegelan Kebocoran Online",
      onlineLeakSealingDescription: "Kami menyediakan layanan penyegelan kebocoran online untuk berbagai industri.",
      compositeRepairTitle: "Perbaikan Komposit",
      compositeRepairDescription: "Kami menawarkan layanan perbaikan komposit untuk pipa dan peralatan lainnya.",
      hotTappingTitle: "Hot Tapping",
      hotTappingDescription: "Kami menyediakan layanan hot tapping untuk menambahkan koneksi baru ke pipa yang ada.",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{currentContent.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-xl font-bold mb-2">{currentContent.onlineLeakSealingTitle}</h3>
            <p>{currentContent.onlineLeakSealingDescription}</p>
          </div>
          <div className="text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-xl font-bold mb-2">{currentContent.compositeRepairTitle}</h3>
            <p>{currentContent.compositeRepairDescription}</p>
          </div>
          <div className="text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-xl font-bold mb-2">{currentContent.hotTappingTitle}</h3>
            <p>{currentContent.hotTappingDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
