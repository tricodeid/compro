
import React from 'react';
import Link from 'next/link';

const CallToActionBanner = () => {
  return (
    <section className="py-16 bg-blue-800 text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 text-center">
        <Link href="/processes" className="text-4xl font-bold">
          Learn More about our processes.
        </Link>
      </div>
    </section>
  );
};

export default CallToActionBanner;
