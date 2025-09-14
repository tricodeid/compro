'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import AboutPetroseal from '@/components/sections/AboutPetroseal';

export default function Contact() {
  const { language } = useLanguage();

  const translations = {
    en: {
      pageTitle: "CONTACT",
      sectionTitle: "CONTACT US",
      sectionSubtitle: "Get in touch with Petroseal for more information about our products and services.",
      contactInfoTitle: "Contact Information",
      contactAddress: "B.P. 104, F-76430 Saint-Romain-De-Colbosc, France",
      contactTel: "Tel: +33 2 35 55 04 70",
      contactFax: "Fax: +33 2 35 20 67 26",
      contactFormTitle: "Contact Form",
      formNamePlaceholder: "Your Name",
      formEmailPlaceholder: "Your Email",
      formMessagePlaceholder: "Your Message",
      formSubmitButton: "Send",
    },
    id: {
      pageTitle: "KONTAK",
      sectionTitle: "HUBUNGI KAMI",
      sectionSubtitle: "Hubungi Petroseal untuk informasi lebih lanjut tentang produk dan layanan kami.",
      contactInfoTitle: "Informasi Kontak",
      contactAddress: "B.P. 104, F-76430 Saint-Romain-De-Colbosc, Prancis",
      contactTel: "Telp: +33 2 35 55 04 70",
      contactFax: "Faks: +33 2 35 20 67 26",
      contactFormTitle: "Formulir Kontak",
      formNamePlaceholder: "Nama Anda",
      formEmailPlaceholder: "Email Anda",
      formMessagePlaceholder: "Pesan Anda",
      formSubmitButton: "Kirim",
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
              <h2 className="text-2xl font-bold mb-2">{currentContent.contactInfoTitle}</h2>
              <ul className="text-gray-700 text-lg">
                <li>{currentContent.contactAddress}</li>
                <li>{currentContent.contactTel}</li>
                <li>{currentContent.contactFax}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentContent.contactFormTitle}</h2>
              <form className="space-y-4">
                <input type="text" placeholder={currentContent.formNamePlaceholder} className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="email" placeholder={currentContent.formEmailPlaceholder} className="w-full border border-gray-300 rounded px-3 py-2" />
                <textarea placeholder={currentContent.formMessagePlaceholder} className="w-full border border-gray-300 rounded px-3 py-2" rows={4}></textarea>
                <button type="submit" className="bg-[#394959] text-white px-6 py-2 rounded font-bold">{currentContent.formSubmitButton}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <AboutPetroseal />
      <Footer />
    </main>
  );
}