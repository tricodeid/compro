
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; Copyright - Petroseal - Agence: SWAP42 - Communication</p>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li><Link href="/processes" className="hover:text-white">Processes</Link></li>
          <li><Link href="/products" className="hover:text-white">Products</Link></li>
          <li><Link href="/application" className="hover:text-white">Application</Link></li>
          <li><Link href="/about" className="hover:text-white">About us</Link></li>
          <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
