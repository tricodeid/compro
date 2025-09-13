
import React from 'react';
import Link from 'next/link';

const CallToActionBanner = () => {
  return (
    <section className="bg-[#394959] py-20 text-white transition-all duration-300">
      <div className="container mx-auto px-4 text-center">
        <Link href="/processes" className="text-4xl font-bold">
          Learn More about our processes.
        </Link>
      </div>
    </section>
  );
};

export default CallToActionBanner;
