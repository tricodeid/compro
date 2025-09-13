
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`font-bold text-blue-800 transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
          <Link href="/">PETROSEAL</Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-blue-800">Home</Link></li>
              <li><Link href="/processes" className="text-sm text-gray-600 hover:text-blue-800">Processes</Link></li>
              <li><Link href="/products" className="text-sm text-gray-600 hover:text-blue-800">Products</Link></li>
              <li><Link href="/application" className="text-sm text-gray-600 hover:text-blue-800">Application</Link></li>
              <li><Link href="/about-us" className="text-sm text-gray-600 hover:text-blue-800">About us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-blue-800">Contact</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-blue-800">Blog</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2 ml-4">
            <button className="text-sm" title="English">EN</button>
            <button className="text-sm" title="Français">FR</button>
            <button className="text-sm" title="Español">ES</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
