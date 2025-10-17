'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'ENGINEERING SERVICES WITH A GLOBAL REPUTATION',
      subtitle: 'Constantly challenging ourselves to deliver more to our clients',
      button: "LET'S GET STARTED",
    },
    id: {
      title: 'LAYANAN TEKNIK DENGAN REPUTASI GLOBAL',
      subtitle: 'Terus menantang diri kami untuk memberikan lebih banyak kepada klien kami',
      button: 'MARI MULAI',
    },
  };

  const currentContent = content[language];

  return (
    <section className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: 'url(https://petroseal.com.my/wp-content/uploads/2015/02/HOMEPAGE_black.png)', maxWidth: '100%' }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative container mx-auto px-4 py-32 md:py-40 text-center flex flex-col items-center justify-center h-[600px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-5xl" data-aos="fade-up">
          {currentContent.title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white max-w-3xl" data-aos="fade-up" data-aos-delay="100">
          {currentContent.subtitle}
        </p>
        <button 
          className="mt-10 px-10 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-lg transition-colors duration-300"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {currentContent.button}
        </button>
      </div>
    </section>
  );
};

export default Hero;