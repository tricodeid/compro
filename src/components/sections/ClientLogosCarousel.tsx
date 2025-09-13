'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Define some generic SVG logos as React components with hardcoded grayscale colors
const Logo1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 10L10 30L40 50L70 30L40 10Z" fill="#9CA3AF" />
    <text x="80" y="40" fontFamily="sans-serif" fontSize="30" fill="#4B5563">Generic</text>
  </svg>
);

const Logo2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="20" fill="#9CA3AF" />
    <text x="60" y="40" fontFamily="sans-serif" fontSize="30" fill="#4B5563">Solutions</text>
  </svg>
);

const Logo3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10H50V50H10z" fill="#9CA3AF" />
    <path d="M55 10H95V50H55z" fill="#9CA3AF" opacity="0.7" />
    <text x="105" y="40" fontFamily="sans-serif" fontSize="30" fill="#4B5563">Global</text>
  </svg>
);

const Logo4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5L55 55H5L30 5Z" fill="#9CA3AF" />
    <text x="65" y="40" fontFamily="sans-serif" fontSize="30" fill="#4B5563">Apex Inc.</text>
  </svg>
);

const Logo5 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30 C 30 10, 50 50, 70 30" stroke="#9CA3AF" strokeWidth="4" fill="none" />
    <text x="80" y="40" fontFamily="sans-serif" fontSize="30" fill="#4B5563">Waveform</text>
  </svg>
);

const Logo6 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="40" height="40" rx="5" fill="#9CA3AF" />
    <text x="60" y="40" fontFamily="sans-serif" fontSize="30" fill="#4B5563">Block Co.</text>
  </svg>
);

const ClientLogosCarousel = () => {
  const { language } = useLanguage();
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  const translations = {
    en: {
      title: "THEY TRUST US",
    },
    id: {
      title: "MEREKA MEMPERCAYAI KAMI",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-16 bg-[#f5f7fa]" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{currentContent.title}</h2>
        <div className="relative w-full overflow-hidden group">
          <div className="flex w-max animate-marquee-grouped group-hover:pause-animation">
            {/* Render logos */}
            {logos.map((Logo, i) => (
              <div key={i} className="mx-8 flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-300">
                <Logo className="h-12 w-auto" />
              </div>
            ))}
            {/* Duplicate logos for continuous scroll effect */}
            {logos.map((Logo, i) => (
              <div key={i + logos.length} className="mx-8 flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-300">
                <Logo className="h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;