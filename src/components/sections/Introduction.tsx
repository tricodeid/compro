'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Introduction = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title1_part1: 'OUR JOB: ',
      title1_part2: 'THE REPAIR OF INDUSTRIAL',
      title2_part1: 'LEAKS',
      title2_part2: ' WITHOUT PLANT SHUTDOWN',
      description: 'Since 1974, our Company has been developing and designing products and procedures to fix – on line – any types of industrial leakages.',
    },
    id: {
      title1_part1: 'PEKERJAAN KAMI: ',
      title1_part2: 'PERBAIKAN KEBOCORAN INDUSTRIAL',
      title2_part1: 'KEBOCORAN',
      title2_part2: ' TANPA MEMATIKAN PABRIK',
      description: 'Sejak tahun 1974, Perusahaan kami telah mengembangkan dan merancang produk dan prosedur untuk memperbaiki – on line – semua jenis kebocoran industri.',
    },
  };

  const currentContent = content[language];

  return (
    <section id="introduction" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-8">
          {currentContent.title1_part1}
          <span className="text-[#394959]">{currentContent.title1_part2}</span>
          <br />
          <span className="text-[#394959]">{currentContent.title2_part1}</span>
          {currentContent.title2_part2}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          {currentContent.description}
        </p>
      </div>
    </section>
  );
};

export default Introduction;