'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Stats = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "PETROSEAL IN THE WORLD",
      mapAlt: "World Map",
      stat1Value: "+40",
      stat1Label: "Years of experience",
      stat2Value: "+1000",
      stat2Label: "Projects completed",
      stat3Value: "+50",
      stat3Label: "Countries served",
      stat4Value: "+200",
      stat4Label: "Happy clients",
    },
    id: {
      title: "PETROSEAL DI DUNIA",
      mapAlt: "Peta Dunia",
      stat1Value: "+40",
      stat1Label: "Tahun pengalaman",
      stat2Value: "+1000",
      stat2Label: "Proyek selesai",
      stat3Value: "+50",
      stat3Label: "Negara dilayani",
      stat4Value: "+200",
      stat4Label: "Klien senang",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-20 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{currentContent.title}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image src="https://via.placeholder.com/600x400?text=World+Map" alt={currentContent.mapAlt} width={600} height={400} className="w-full h-auto rounded-md shadow-md" />
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-8 mt-8 md:mt-0 md:ml-12">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-800">{currentContent.stat1Value}</p>
              <p className="text-gray-700">{currentContent.stat1Label}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-800">{currentContent.stat2Value}</p>
              <p className="text-gray-700">{currentContent.stat2Label}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-800">{currentContent.stat3Value}</p>
              <p className="text-gray-700">{currentContent.stat3Label}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-800">{currentContent.stat4Value}</p>
              <p className="text-gray-700">{currentContent.stat4Label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
