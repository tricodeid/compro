
import React from 'react';
import Link from 'next/link';

const CallToActionBlocks = () => {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Interested in the leak sealing activity?</h3>
            <p className="text-gray-700 mb-4">
              Whether you are in charge of maintenance in your plant or a mechanical contractor, PETROSEAL will help you to set up and organize your leak sealing structure !
            </p>
            <Link href="/learn-more" className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">The Petroseal’s products</h3>
            <p className="text-gray-700 mb-4">
              Find out the whole range of leak sealing items from Petroseal.
            </p>
            <Link href="/products" className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">The Petroseal’s processes</h3>
            <p className="text-gray-700 mb-4">
              Our pioneering processes allow to perform a reliable and safe leak sealing.
            </p>
            <Link href="/processes" className="bg-blue-800 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBlocks;
