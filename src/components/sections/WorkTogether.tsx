'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const WorkTogether = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "LET'S WORK TOGETHER",
      description: 'We work as a single united team and give our clients the highest quality advice possible.',
      button: 'MAKE ENQUIRY',
    },
    id: {
      title: 'MARI BEKERJA SAMA',
      description: 'Kami bekerja sebagai satu tim yang bersatu dan memberikan nasihat berkualitas tertinggi kepada klien kami.',
      button: 'BUAT PERTANYAAN',
    },
  };

  const currentContent = content[language];

  return (
    <section className="relative py-20 md:py-32 bg-cover bg-center" style={{ 
      backgroundImage: 'url(https://petroseal.com.my/wp-content/uploads/2015/02/where-we-work-parallax.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="absolute inset-0 bg-white/50" style={{ backgroundBlendMode: 'overlay' }}></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" data-aos="fade-up" data-aos-delay="100"></div>
          <p 
            className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {currentContent.description}
          </p>
          <button 
            className="px-10 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-lg transition-colors duration-300"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            {currentContent.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;

