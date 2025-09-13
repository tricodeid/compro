
import React from 'react';
import Link from 'next/link';

const AboutPetroseal = () => {
  return (
    <section className="bg-[#394959] text-white py-16" data-aos="fade-up">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">ABOUT PETROSEAL</h3>
          <p>Designer, manufacturer and supplier of home made sealing compounds worldwide</p>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-white mb-4">PETROSEAL</h3>
          <p>B.P. 104</p>
          <p>F-76430 Saint-Romain-De-Colbosc</p>
          <p>France</p>
          <p className="mt-4">Tel: +33 2 35 55 04 70</p>
          <p>Fax: +33 2 35 20 67 26</p>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-white mb-4">FIDGI GROUP (HOLDING COMPANY)</h3>
          <p>Parc d&apos;Activités de l&apos;Aérodrome</p>
          <p>BP 104 - 76430 ST ROMAIN DE COLBOSC</p>
          <p>France</p>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-white mb-4">Site Map</h3>
          <ul>
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/processes" className="hover:text-white">Processes</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/application" className="hover:text-white">Application</Link></li>
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPetroseal;
