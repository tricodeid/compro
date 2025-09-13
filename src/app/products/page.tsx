'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Products() {
  const { language } = useLanguage();

  const translations = {
    en: {
      pageTitle: "OUR PRODUCTS",
      sectionTitle: "LEAK SEALING PRODUCTS",
      sectionSubtitle: "Find out the whole range of leak sealing items from Petroseal. Our products are designed for reliability, safety, and efficiency in industrial leak repair.",
      compoundTitle: "Sealing Compounds",
      compoundText: "Specially formulated for high pressure and temperature applications.",
      enclosuresTitle: "Metal Enclosures",
      enclosuresText: "Custom designed to fit any leaking equipment and environment.",
      equipmentTitle: "Hydraulic Equipment",
      equipmentText: "For safe and effective injection of sealing compounds.",
    },
    id: {
      pageTitle: "PRODUK KAMI",
      sectionTitle: "PRODUK PENYEGEL KEBOCORAN",
      sectionSubtitle: "Temukan seluruh rangkaian item penyegel kebocoran dari Petroseal. Produk kami dirancang untuk keandalan, keamanan, dan efisiensi dalam perbaikan kebocoran industri.",
      compoundTitle: "Senyawa Penyegel",
      compoundText: "Diformulasikan khusus untuk aplikasi tekanan dan suhu tinggi.",
      enclosuresTitle: "Selungkup Logam",
      enclosuresText: "Dirancang khusus agar sesuai dengan peralatan dan lingkungan yang bocor.",
      equipmentTitle: "Peralatan Hidrolik",
      equipmentText: "Untuk injeksi senyawa penyegel yang aman dan efektif.",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#f5f7fa] p-8 rounded shadow text-center">
              <h2 className="text-2xl font-bold mb-2">{currentContent.compoundTitle}</h2>
              <p className="text-gray-700">{currentContent.compoundText}</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow text-center">
              <h2 className="text-2xl font-bold mb-2">{currentContent.enclosuresTitle}</h2>
              <p className="text-gray-700">{currentContent.enclosuresText}</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow text-center">
              <h2 className="text-2xl font-bold mb-2">{currentContent.equipmentTitle}</h2>
              <p className="text-gray-700">{currentContent.equipmentText}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}