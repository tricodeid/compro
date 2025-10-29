'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <nav className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6">
          <ul className="flex space-x-4 xl:space-x-6">
            {navLinks.map(link => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href} className="relative">
                  <Link href={link.href} className={`text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive ? 'text-[#dc2626]' : 'text-gray-700 hover:text-blue-800'
                  }`}>
                    {link.label}
                  </Link>
                  {isActive && (
                    <div className="absolute -top-2 left-0 right-0 h-1 bg-[#dc2626]"></div>
                  )}
                </li>
              );
            })}
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
        <div className="flex items-center p-4 border-b">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="https://petroseal.com.my/wp-content/uploads/2019/01/complete-logo-1.png-small-1.png"
              alt="Petroseal Logo"
              width={300}
              height={150}
              priority
            />
          </Link>
        </div>
        <nav className="p-4">
          <ul className="flex flex-col space-y-3">
            {navLinks.map(link => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href} className="relative">
                  <Link 
                    href={link.href} 
                    className={`block py-3 px-4 text-base font-medium rounded-md transition-colors ${
                      isActive ? 'text-[#dc2626] bg-gray-100' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#dc2626]"></div>
                  )}
                </li>
              );
            })}
          </ul>
          {/* Social Media Icons in Mobile Menu */}
          <div className="flex items-center space-x-2 mt-6 pt-6 border-t border-gray-200">
            <a 
              href="https://www.facebook.com/Petroseal-Engineering-Sdn-Bhd-222898397756111/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white p-2 rounded transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://petroseal.com.my/#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white p-2 rounded transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
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
