'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const WhoWeAre = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      whoWeAre: 'WHO WE ARE',
      whoWeAreText1: 'Established in 2005, Petroseal Engineering Sdn Bhd. specializes in repair, retrofitting, refurbishment, Substitution, Re-Engineering services for all types of Internationally reputed mechanical seals covering all market segments and operating in some of the most demanding applications through the Process Industry.',
      whoWeAreText2: 'In everything we do we believe in challenging the status quo. We believe in thinking differently. We do this by providing uncompromised services for any brand of mechanical seal. Petroseal exists because you deserve this choice.',
      whoWeAreText3: 'With our in-depth understanding of the importance of plant up-time and performance, Petroseal independently repairs and extends the services life of the many different mechanical seal types and brands used through the industry.',
      button: 'LEARN MORE',
      vision: 'OUR VISION',
      visionText: 'Petroseal is determining to be a solution provider in the industry it serves and to establish and efficient and effective Quality Assurance System',
      mission: 'OUR MISSION',
      missionText: 'Petroseal Strives to be the best solution of mechanical seal provider and becoming leader of mechanical seal supplier and service center which comply with the international standard, codes, and specifications, in the country.',
    },
    id: {
      whoWeAre: 'SIAPA KAMI',
      whoWeAreText1: 'Didirikan pada tahun 2005, Petroseal Engineering Sdn Bhd. mengkhususkan diri dalam perbaikan, retrofitting, refurbishment, Substitusi, layanan Re-Engineering untuk semua jenis mechanical seals bereputasi Internasional yang mencakup semua segmen pasar dan beroperasi di beberapa aplikasi paling menuntut melalui Industri Proses.',
      whoWeAreText2: 'Dalam segala hal yang kami lakukan, kami percaya pada menantang status quo. Kami percaya pada berpikir berbeda. Kami melakukan ini dengan menyediakan layanan tanpa kompromi untuk merek mechanical seal apa pun. Petroseal ada karena Anda layak mendapatkan pilihan ini.',
      whoWeAreText3: 'Dengan pemahaman mendalam kami tentang pentingnya waktu operasi dan kinerja pabrik, Petroseal secara independen memperbaiki dan memperpanjang masa pakai layanan dari berbagai jenis dan merek mechanical seal yang digunakan di industri.',
      button: 'PELAJARI LEBIH LANJUT',
      vision: 'VISI KAMI',
      visionText: 'Petroseal bertekad menjadi penyedia solusi di industri yang dilayaninya dan untuk membangun Sistem Jaminan Kualitas yang efisien dan efektif',
      mission: 'MISI KAMI',
      missionText: 'Petroseal Berusaha menjadi solusi terbaik dari penyedia mechanical seal dan menjadi pemimpin pemasok mechanical seal dan pusat layanan yang sesuai dengan standar, kode, dan spesifikasi internasional, di negara ini.',
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - WHO WE ARE */}
          <div className="border-t-4 border-red-600 pt-8" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-6">
              {currentContent.whoWeAre}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{currentContent.whoWeAreText1}</p>
              <p>{currentContent.whoWeAreText2}</p>
              <p>{currentContent.whoWeAreText3}</p>
            </div>
            <button className="mt-8 px-8 py-3 bg-[#3a4a5c] hover:bg-[#2a3a4c] text-white font-bold transition-colors duration-300">
              {currentContent.button}
            </button>
          </div>

          {/* Right Column - VISION & MISSION */}
          <div className="space-y-10" data-aos="fade-left">
            {/* Vision */}
            <div className="border-t-4 border-red-600 pt-8">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3a4a5c]">
                  {currentContent.vision}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">Petroseal</span> {currentContent.visionText}
              </p>
            </div>

            {/* Mission */}
            <div className="border-t-4 border-red-600 pt-8">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3a4a5c]">
                  {currentContent.mission}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold">Petroseal</span> {currentContent.missionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

