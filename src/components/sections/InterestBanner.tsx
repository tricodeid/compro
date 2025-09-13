
import React from 'react';
import Link from 'next/link';

const InterestBanner = () => {
  return (
    <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x800?text=Industrial+Background")' }}>
      <div className="absolute inset-0 bg-black opacity-40 backdrop-filter backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10 flex justify-end">
        <div className="text-white text-right max-w-xl">
          <h2 className="text-4xl font-bold mb-4">INTERESTED IN THE LEAK SEALING ACTIVITY?</h2>
          <p className="text-lg mb-8">
            Whether you are in charge of maintenance in your plant or a mechanical contractor, PETROSEAL will help you to set up and organize your leak sealing structure !
          </p>
          <Link href="/contact" className="bg-blue-800 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InterestBanner;
