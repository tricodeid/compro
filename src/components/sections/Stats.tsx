import React from 'react';
import Image from 'next/image';

const Stats = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">PETROSEAL IN THE WORLD</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <Image src="https://via.placeholder.com/600x400?text=World+Map" alt="World Map" width={600} height={400} className="w-full h-auto rounded-md shadow-md" />
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-8 mt-8 md:mt-0 md:ml-12">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-800">+40</p>
              <p className="text-gray-700">Years of experience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-800">+1000</p>
              <p className="text-gray-700">Projects completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-800">+50</p>
              <p className="text-gray-700">Countries served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-800">+200</p>
              <p className="text-gray-700">Happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;