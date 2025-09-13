'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const CallToActionBanner = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      text: "Learn More about our processes.",
    },
    id: {
      text: "Pelajari Lebih Lanjut tentang proses kami.",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-16 bg-blue-800 text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <Link href="/processes" className="text-3xl md:text-4xl font-bold">
          {currentContent.text}
        </Link>
      </div>
    </section>
  );
};

export default CallToActionBanner;