'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutUs() {
  const { language } = useLanguage();

  const translations = {
    en: {
      pageTitle: "ABOUT US",
      sectionTitle: "ABOUT PETROSEAL",
      sectionSubtitle: "Designer, manufacturer and supplier of home made sealing compounds worldwide. Since 1974, Petroseal has been a pioneer in industrial leak sealing technology.",
      visionTitle: "Our Vision",
      visionText: "To provide reliable, safe, and innovative leak sealing solutions for industries worldwide, ensuring operational continuity and safety.",
      contactTitle: "Contact Information",
      contactAddress: "B.P. 104, F-76430 Saint-Romain-De-Colbosc, France",
      contactTel: "Tel: +33 2 35 55 04 70",
      contactFax: "Fax: +33 2 35 20 67 26",
    },
    id: {
      pageTitle: "TENTANG KAMI",
      sectionTitle: "TENTANG PETROSEAL",
      sectionSubtitle: "Perancang, produsen, dan pemasok senyawa penyegel buatan sendiri di seluruh dunia. Sejak 1974, Petroseal telah menjadi pelopor dalam teknologi perbaikan kebocoran industri.",
      visionTitle: "Visi Kami",
      visionText: "Menyediakan solusi perbaikan kebocoran yang andal, aman, dan inovatif untuk industri di seluruh dunia, memastikan kelangsungan operasional dan keamanan.",
      contactTitle: "Informasi Kontak",
      contactAddress: "B.P. 104, F-76430 Saint-Romain-De-Colbosc, Prancis",
      contactTel: "Telp: +33 2 35 55 04 70",
      contactFax: "Faks: +33 2 35 20 67 26",
    },
  };

  const currentContent = translations[language];

  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20" data-aos="fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">{currentContent.pageTitle}</h1>
        </div>
      </section>
      <section className="py-16 bg-white text-[#394959]" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">{currentContent.sectionTitle}</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-8 font-light">{currentContent.sectionSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentContent.visionTitle}</h2>
              <p className="text-gray-700 text-lg">{currentContent.visionText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentContent.contactTitle}</h2>
              <ul className="text-gray-700 text-lg">
                <li>{currentContent.contactAddress}</li>
                <li>{currentContent.contactTel}</li>
                <li>{currentContent.contactFax}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}