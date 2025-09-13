'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// SVG Flag Components
const FlagUK = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
  </svg>
);

const FlagID = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
    <rect fill="#fff" width="900" height="600"/>
    <rect fill="#ce1126" width="900" height="300"/>
  </svg>
);


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const translations = {
    en: {
      home: 'Home',
      processes: 'Processes',
      products: 'Products',
      application: 'Application',
      aboutUs: 'About us',
      contact: 'Contact',
      blog: 'Blog',
    },
    id: {
      home: 'Beranda',
      processes: 'Proses',
      products: 'Produk',
      application: 'Aplikasi',
      aboutUs: 'Tentang Kami',
      contact: 'Kontak',
      blog: 'Blog',
    },
  };

  const currentContent = translations[language];

  const navLinks = [
    { href: '/', label: currentContent.home },
    { href: '/processes', label: currentContent.processes },
    { href: '/products', label: currentContent.products },
    { href: '/application', label: currentContent.application },
    { href: '/about-us', label: currentContent.aboutUs },
    { href: '/contact', label: currentContent.contact },
    { href: '/blog', label: currentContent.blog },
  ];

  const LanguageSwitcher = () => (
    <div className="flex items-center space-x-3 ml-4 border-l pl-4">
      <button 
        onClick={() => setLanguage('en')} 
        className={`cursor-pointer rounded-sm transition-all duration-200 ${language === 'en' ? 'ring-1 ring-blue-800' : 'opacity-60 hover:opacity-100'}`}
        title="English"
      >
        <FlagUK className="w-8 h-auto" />
      </button>
      <button 
        onClick={() => setLanguage('id')} 
        className={`cursor-pointer rounded-sm transition-all duration-200 ${language === 'id' ? 'ring-1 ring-blue-800' : 'opacity-60 hover:opacity-100'}`}
        title="Indonesia"
      >
        <FlagID className="w-8 h-auto" />
      </button>
    </div>
  );

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`font-bold text-blue-800 transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
          <Link href="/">PETROSEAL</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {navLinks.map(link => (
              <li key={link.href}><Link href={link.href} className="text-sm text-gray-600 hover:text-blue-800">{link.label}</Link></li>
            ))}
          </ul>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 text-gray-600 hover:text-blue-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Side-Drawer Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out w-64 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="mt-20 p-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <li key={link.href}><Link href={link.href} className="text-lg text-gray-700 hover:text-blue-800" onClick={() => setIsMenuOpen(false)}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center pt-4 border-t">
           <LanguageSwitcher />
        </div>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
