'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Clients = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "OUR CLIENTS",
      clientLogoAlt: "Client Logo",
    },
    id: {
      title: "KLIEN KAMI",
      clientLogoAlt: "Logo Klien",
    },
  };

  const currentContent = translations[language];

  const logos = [
    'https://via.placeholder.com/128x128?text=Company+A',
    'https://via.placeholder.com/128x128?text=Company+B',
    'https://via.placeholder.com/128x128?text=Company+C',
    'https://via.placeholder.com/128x128?text=Company+D',
    'https://via.placeholder.com/128x128?text=Company+E',
    'https://via.placeholder.com/128x128?text=Company+F',
  ];

  return (
    <section className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{currentContent.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((src, i) => (
            <Image key={i} src={src} alt={`${currentContent.clientLogoAlt} ${i + 1}`} width={128} height={128} className="w-32 h-32 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;