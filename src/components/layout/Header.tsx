'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/core-business', label: 'Our Core Business' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/activities', label: 'Activities' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/news', label: 'News' },
    { href: '/contact-us', label: 'Contact Us' },
  ];


  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`transition-all duration-300 ${isScrolled ? 'w-64 sm:w-72' : 'w-72 sm:w-80'}`}>
          <Link href="/">
            <Image
              src="https://petroseal.com.my/wp-content/uploads/2019/01/complete-logo-1.png-small-1.png"
              alt="Petroseal Logo"
              width={600}
              height={300}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center lg:space-x-6 xl:space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map(link => (
              <li key={link.href}><Link href={link.href} className="text-lg font-medium text-gray-700 hover:text-blue-800 transition-colors duration-200">{link.label}</Link></li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
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
      <div className={`lg:hidden fixed top-0 right-0 h-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out w-3/4 max-w-xs ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="https://petroseal.com.my/wp-content/uploads/2019/01/complete-logo-1.png-small-1.png"
              alt="Petroseal Logo"
              width={300}
              height={150}
              priority
            />
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-blue-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <li key={link.href}><Link href={link.href} className="block py-3 px-4 text-xl font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-800 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>{link.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
