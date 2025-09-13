
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const NewsEvents = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "NEWS & EVENTS",
      news1Title: "New Partnership Announced",
      news1Date: "Date: September 1, 2025",
      news1Description: "Petroseal is proud to announce a new strategic partnership with a leading industrial solutions provider to expand our reach and services.",
      news2Title: "Upcoming Industry Expo",
      news2Date: "Date: October 15, 2025",
      news2Description: "Join us at the annual Industrial Solutions Expo where we will be showcasing our latest leak sealing technologies.",
      news3Title: "Successful Project Completion",
      news3Date: "Date: August 20, 2025",
      news3Description: "We successfully completed a challenging leak sealing project for a major petrochemical plant, ensuring minimal downtime.",
    },
    id: {
      title: "BERITA & ACARA",
      news1Title: "Kemitraan Baru Diumumkan",
      news1Date: "Tanggal: 1 September 2025",
      news1Description: "Petroseal dengan bangga mengumumkan kemitraan strategis baru dengan penyedia solusi industri terkemuka untuk memperluas jangkauan dan layanan kami.",
      news2Title: "Pameran Industri Mendatang",
      news2Date: "Tanggal: 15 Oktober 2025",
      news2Description: "Bergabunglah dengan kami di Pameran Solusi Industri tahunan di mana kami akan memamerkan teknologi penyegelan kebocoran terbaru kami.",
      news3Title: "Penyelesaian Proyek yang Berhasil",
      news3Date: "Tanggal: 20 Agustus 2025",
      news3Description: "Kami berhasil menyelesaikan proyek penyegelan kebocoran yang menantang untuk pabrik petrokimia besar, memastikan waktu henti minimal.",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{currentContent.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{currentContent.news1Title}</h3>
            <p className="text-gray-600 text-sm mb-4">{currentContent.news1Date}</p>
            <p className="text-gray-700">{currentContent.news1Description}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{currentContent.news2Title}</h3>
            <p className="text-gray-600 text-sm mb-4">{currentContent.news2Date}</p>
            <p className="text-gray-700">{currentContent.news2Description}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{currentContent.news3Title}</h3>
            <p className="text-gray-600 text-sm mb-4">{currentContent.news3Date}</p>
            <p className="text-gray-700">{currentContent.news3Description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
