
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#394959] text-white bg-cover bg-center" style={{ backgroundImage: 'url("/industrial-plant.jpg")' }}>
      <div className="container mx-auto px-4 py-48 text-left flex flex-col items-start">
        <h1 className="text-6xl font-bold leading-tight">
          INDUSTRIAL ON LINE LEAK SEALING BY PETROSEAL SINCE 1974
        </h1>
        <p className="text-yellow-400 text-3xl mt-4">PRODUCTS & ASSISTANCE<br/>SAFETY and QUALITY</p>
        <div className="w-24 h-1 bg-white mt-4"></div>
        <p className="mt-8 text-lg max-w-2xl">Our job: <span className="font-bold">the repair of industrial leaks</span> without plant shutdown. Since 1974, our company has been developing and designing products and procedures to fix – on line – any types of industrial leakages.</p>
        <div className="w-full flex justify-center mt-16">
          <a href="#introduction" className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
