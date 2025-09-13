'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Introduction = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'INDUSTRIAL LEAK SEALING EXPERTS',
      description: 'Since 1974, Petroseal has been developing and designing products and procedures to fix – on line – any types of industrial leakages. We provide proven sealing solutions for a wide range of industries, ensuring safety and quality without plant shutdown.',
    },
    id: {
      title: 'AHLI PERBAIKAN KEBOCORAN INDUSTRI',
      description: 'Sejak 1974, Petroseal telah mengembangkan dan merancang produk dan prosedur untuk memperbaiki – secara on line – segala jenis kebocoran industri. Kami menyediakan solusi penyegelan yang terbukti untuk berbagai industri, memastikan keamanan dan kualitas tanpa mematikan pabrik.',
    },
  };

  const currentContent = content[language];

  return (
    <section id="introduction" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-[#394959] mb-8">
          {currentContent.title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          {currentContent.description}
        </p>
      </div>
    </section>
  );
};

export default Introduction;