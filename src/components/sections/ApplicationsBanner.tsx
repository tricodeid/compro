'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const ApplicationsBanner = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "A WIDE RANGE OF INDUSTRIAL APPLICATIONS",
    },
    id: {
      title: "BERBAGAI MACAM APLIKASI INDUSTRI",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-12 bg-blue-800 text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{currentContent.title}</h2>
      </div>
    </section>
  );
};

export default ApplicationsBanner;