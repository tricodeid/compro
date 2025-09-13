import React from 'react';
import Image from 'next/image';

const Clients = () => {
  const logos = [
    'https://via.placeholder.com/128x128?text=Company+A',
    'https://via.placeholder.com/128x128?text=Company+B',
    'https://via.placeholder.com/128x128?text=Company+C',
    'https://via.placeholder.com/128x128?text=Company+D',
    'https://via.placeholder.com/128x128?text=Company+E',
    'https://via.placeholder.com/128x128?text=Company+F',
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">OUR CLIENTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((src, i) => (
            <Image key={i} src={src} alt={`Client Logo ${i + 1}`} width={128} height={128} className="w-32 h-32 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;