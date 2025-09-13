
import React from 'react';

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Online Leak Sealing</h3>
            <p>We provide online leak sealing services for various industries.</p>
          </div>
          <div className="text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Composite Repair</h3>
            <p>We offer composite repair services for pipelines and other equipment.</p>
          </div>
          <div className="text-center">
            <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-xl font-bold mb-2">Hot Tapping</h3>
            <p>We provide hot tapping services to add new connections to existing pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
