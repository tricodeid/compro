'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const rotatingPhrases = [
    { en: 'SINCE 1974', id: 'SEJAK 1974' },
    { en: 'PRODUCTS & ASSISTANCE', id: 'PRODUK & BANTUAN' },
    { en: 'SAFETY and QUALITY', id: 'KESELAMATAN dan KUALITAS' },
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % rotatingPhrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);

  const content = {
    en: {
      staticTitle: 'INDUSTRIAL ON LINE LEAK SEALING',
      description: 'Our job: <span class="font-bold">the repair of industrial leaks</span> without plant shutdown. Our company has been developing and designing products and procedures to fix – on line – any types of industrial leakages.',
    },
    id: {
      staticTitle: 'PERBAIKAN KEBOCORAN INDUSTRI ONLINE',
      description: 'Pekerjaan kami: <span class="font-bold">perbaikan kebocoran industri</span> tanpa mematikan pabrik. Perusahaan kami telah mengembangkan dan merancang produk dan prosedur untuk memperbaiki – secara on line – segala jenis kebocoran industri.',
    },
  };

  const currentContent = content[language];
  const currentRotatingPhrase = rotatingPhrases[currentPhraseIndex][language];

  return (
    <section className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/images/9121424.jpg)' }}>
      <div className="backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-48 text-left flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            {currentContent.staticTitle} <span className="text-[#B8B880]">{currentRotatingPhrase}</span>
          </h1>
          <div className="w-24 h-1 bg-white mt-4"></div>
          <p className="mt-8 text-base md:text-lg max-w-2xl text-white" dangerouslySetInnerHTML={{ __html: currentContent.description }} />
          <div className="w-full flex justify-center mt-16">
            <a href="#introduction" className="animate-bounce text-white">
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