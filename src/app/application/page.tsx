'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Application() {
  const { language } = useLanguage();

  const translations = {
    en: {
      pageTitle: "APPLICATIONS",
      sectionTitle: "INDUSTRIAL APPLICATIONS",
      sectionSubtitle: "Our proven sealing products can be applied to a wide range of leaking fluids and equipment in various industries.",
      equipmentTitle: "Types of Equipment",
      equipmentList: [
        "Flanges, valve bonnets, heat exchangers, blind flanges, manholes",
        "Valve stuffing boxes and valve bodies",
        "Pinholes, cracks, welds on pipes",
        "Corroded pipes, branches, pipe fittings",
      ],
      industriesTitle: "Industries Served",
      industriesList: [
        "Oil refineries, petrochemical and chemical plants",
        "Thermal and nuclear power plants",
        "Steel mills, cellulose and paper mills, sugar refineries",
        "Waste treatment plants, town heating networks",
        "Any industry processing steam 24 hours a day",
      ],
    },
    id: {
      pageTitle: "APLIKASI",
      sectionTitle: "APLIKASI INDUSTRI",
      sectionSubtitle: "Produk penyegel kami yang terbukti dapat diterapkan pada berbagai cairan bocor dan peralatan di berbagai industri.",
      equipmentTitle: "Jenis Peralatan",
      equipmentList: [
        "Flensa, bonet katup, penukar panas, flensa buta, lubang orang",
        "Kotak isian katup dan badan katup",
        "Lubang jarum, retakan, lasan pada pipa",
        "Pipa berkarat, cabang, fitting pipa",
      ],
      industriesTitle: "Industri yang Dilayani",
      industriesList: [
        "Kilang minyak, pabrik petrokimia dan kimia",
        "Pembangkit listrik termal dan nuklir",
        "Pabrik baja, pabrik selulosa dan kertas, pabrik gula",
        "Pabrik pengolahan limbah, jaringan pemanas kota",
        "Industri apa pun yang memproses uap 24 jam sehari",
      ],
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
              <h2 className="text-2xl font-bold mb-2">{currentContent.equipmentTitle}</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                {currentContent.equipmentList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentContent.industriesTitle}</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                {currentContent.industriesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}