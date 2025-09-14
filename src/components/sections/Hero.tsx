'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'INDUSTRIAL ON LINE LEAK SEALING BY PETROSEAL SINCE 1974',
      subtitle: 'PRODUCTS & ASSISTANCE<br/>SAFETY and QUALITY',
      description: 'Our job: <span class="font-bold">the repair of industrial leaks</span> without plant shutdown. Since 1974, our company has been developing and designing products and procedures to fix – on line – any types of industrial leakages.',
    },
    id: {
      title: 'PERBAIKAN KEBOCORAN INDUSTRI ONLINE OLEH PETROSEAL SEJAK 1974',
      subtitle: 'PRODUK & BANTUAN<br/>KESELAMATAN dan KUALITAS',
      description: 'Pekerjaan kami: <span class="font-bold">perbaikan kebocoran industri</span> tanpa mematikan pabrik. Sejak 1974, perusahaan kami telah mengembangkan dan merancang produk dan prosedur untuk memperbaiki – secara on line – segala jenis kebocoran industri.',
    },
  };

  const currentContent = content[language];

  return (
    <section className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/images/9121424.jpg)' }}>
      <div className="backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-48 text-left flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-3xl text-yellow-400 mt-4" dangerouslySetInnerHTML={{ __html: currentContent.subtitle }} />
          <div className="w-24 h-1 bg-white mt-4"></div>
          <p className="mt-8 text-base md:text-lg max-w-2xl" dangerouslySetInnerHTML={{ __html: currentContent.description }} />
          <div className="w-full flex justify-center mt-16">
            <a href="#introduction" className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;