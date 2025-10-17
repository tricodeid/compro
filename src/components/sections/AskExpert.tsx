'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const AskExpert = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'QUESTIONS ABOUT OUR SERVICES? ASK OUR EXPERTS.',
      button: 'ASK AN EXPERT',
    },
    id: {
      title: 'PERTANYAAN TENTANG LAYANAN KAMI? TANYA AHLI KAMI.',
      button: 'TANYA AHLI',
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-16 md:py-20 bg-[#3a4a5c]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left max-w-3xl"
            data-aos="fade-right"
          >
            {currentContent.title}
          </h2>
          <button 
            className="px-10 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-lg transition-colors duration-300 whitespace-nowrap"
            data-aos="fade-left"
          >
            {currentContent.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AskExpert;

