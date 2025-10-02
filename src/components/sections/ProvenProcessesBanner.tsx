'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const ProvenProcessesBanner = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "PROVEN PROCESSES",
      subtitle: "The basic principle of our technology consists in applying the following steps",
    },
    id: {
      title: "PROSES TERBUKTI",
      subtitle: "Prinsip dasar teknologi kami terdiri dari penerapan langkah-langkah berikut",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-12 bg-blue-800 text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4" data-aos="zoom-in">{currentContent.title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-white" data-aos="fade-up" data-aos-delay="200">{currentContent.subtitle}</p>
      </div>
    </section>
  );
};

export default ProvenProcessesBanner;