import React from 'react';
import Image from 'next/image';

const Products = () => {
  const images = [
    'https://via.placeholder.com/300x200?text=Product+1',
    'https://via.placeholder.com/300x200?text=Product+2',
    'https://via.placeholder.com/300x200?text=Product+3',
    'https://via.placeholder.com/300x200?text=Product+4',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((src, i) => (
            <div key={i} className="text-center">
              <Image src={src} alt={`Product ${i + 1}`} width={300} height={200} className="w-full h-56 object-cover rounded-md mb-4 shadow-md" />
              <h3 className="text-xl font-bold text-gray-800">Product {i + 1}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;