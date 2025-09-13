'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      copyright: "&copy; Copyright - Petroseal - Agency: SWAP42 - Communication",
      home: "Home",
      processes: "Processes",
      products: "Products",
      application: "Application",
      aboutUs: "About us",
      contact: "Contact",
      blog: "Blog",
    },
    id: {
      copyright: "&copy; Hak Cipta - Petroseal - Agensi: SWAP42 - Komunikasi",
      home: "Beranda",
      processes: "Proses",
      products: "Produk",
      application: "Aplikasi",
      aboutUs: "Tentang Kami",
      contact: "Kontak",
      blog: "Blog",
    },
  };

  const currentContent = translations[language];

  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0" dangerouslySetInnerHTML={{ __html: currentContent.copyright }}></p>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
          <li><Link href="/" className="hover:text-white">{currentContent.home}</Link></li>
          <li><Link href="/processes" className="hover:text-white">{currentContent.processes}</Link></li>
          <li><Link href="/products" className="hover:text-white">{currentContent.products}</Link></li>
          <li><Link href="/application" className="hover:text-white">{currentContent.application}</Link></li>
          <li><Link href="/about-us" className="hover:text-white">{currentContent.aboutUs}</Link></li>
          <li><Link href="/contact" className="hover:text-white">{currentContent.contact}</Link></li>
          <li><Link href="/blog" className="hover:text-white">{currentContent.blog}</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;