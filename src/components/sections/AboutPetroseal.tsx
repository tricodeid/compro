'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const AboutPetroseal = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      aboutPetroseal: "ABOUT PETROSEAL",
      aboutPetrosealDescription: "Designer, manufacturer and supplier of home made sealing compounds worldwide",
      petrosealAddress: "PETROSEAL",
      petrosealAddressLine1: "B.P. 104",
      petrosealAddressLine2: "F-76430 Saint-Romain-De-Colbosc",
      petrosealAddressLine3: "France",
      petrosealTel: "Tel: +33 2 35 55 04 70",
      petrosealFax: "Fax: +33 2 35 20 67 26",
      fidgiGroup: "FIDGI GROUP (HOLDING COMPANY)",
      fidgiGroupAddressLine1: "Parc d’Activités de l’Aérodrome",
      fidgiGroupAddressLine2: "BP 104 - 76430 ST ROMAIN DE COLBOSC",
      fidgiGroupAddressLine3: "France",
      siteMap: "SITE MAP",
      home: "Home",
      processes: "Processes",
      products: "Products",
      application: "Application",
      aboutUs: "About us",
      contact: "Contact",
      blog: "Blog",
    },
    id: {
      aboutPetroseal: "TENTANG PETROSEAL",
      aboutPetrosealDescription: "Perancang, produsen, dan pemasok senyawa penyegel buatan sendiri di seluruh dunia",
      petrosealAddress: "PETROSEAL",
      petrosealAddressLine1: "B.P. 104",
      petrosealAddressLine2: "F-76430 Saint-Romain-De-Colbosc",
      petrosealAddressLine3: "Prancis",
      petrosealTel: "Tel: +33 2 35 55 04 70",
      petrosealFax: "Fax: +33 2 35 20 67 26",
      fidgiGroup: "FIDGI GROUP (PERUSAHAAN INDUK)",
      fidgiGroupAddressLine1: "Parc d’Activités de l’Aérodrome",
      fidgiGroupAddressLine2: "BP 104 - 76430 ST ROMAIN DE COLBOSC",
      fidgiGroupAddressLine3: "Prancis",
      siteMap: "PETA SITUS",
      home: "Beranda",
      processes: "Proses",
      products: "Produk",
      application: "Aplikasi",
      aboutUs: "Tentang kami",
      contact: "Kontak",
      blog: "Blog",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="bg-[#394959] text-white py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">{currentContent.aboutPetroseal}</h3>
          <p>{currentContent.aboutPetrosealDescription}</p>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-white mb-4">{currentContent.petrosealAddress}</h3>
          <p>{currentContent.petrosealAddressLine1}</p>
          <p>{currentContent.petrosealAddressLine2}</p>
          <p>{currentContent.petrosealAddressLine3}</p>
          <p className="mt-4">{currentContent.petrosealTel}</p>
          <p>{currentContent.petrosealFax}</p>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-white mb-4">{currentContent.fidgiGroup}</h3>
          <p>{currentContent.fidgiGroupAddressLine1}</p>
          <p>{currentContent.fidgiGroupAddressLine2}</p>
          <p>{currentContent.fidgiGroupAddressLine3}</p>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-white mb-4">{currentContent.siteMap}</h3>
          <ul>
            <li><Link href="/" className="hover:text-white">{currentContent.home}</Link></li>
            <li><Link href="/processes" className="hover:text-white">{currentContent.processes}</Link></li>
            <li><Link href="/products" className="hover:text-white">{currentContent.products}</Link></li>
            <li><Link href="/application" className="hover:text-white">{currentContent.application}</Link></li>
            <li><Link href="/about" className="hover:text-white">{currentContent.aboutUs}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{currentContent.contact}</Link></li>
            <li><Link href="/blog" className="hover:text-white">{currentContent.blog}</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPetroseal;