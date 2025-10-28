'use client';

import React from 'react';
import Image from 'next/image';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function WhoWeArePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'WHO WE ARE',
      subtitle: 'Challenging ourselves to bring new and original ways of thinking',
      description1: 'Established in 2005, Petroseal Engineering Sdn Bhd. specializes in repair, retrofitting, refurbishment, Substitution, Re-Engineering services for all types of Internationally reputed mechanical seals covering all market segments and operating in some of the most demanding applications through the Process Industry.',
      description2: 'In everything we do we believe in challenging the status quo. We believe in thinking differently. We do this by providing uncompromised services for any brand of mechanical seal. Petroseal exists because you deserve this choice.',
      description3: 'With our in-depth understanding of the importance of plant up-time and performance, Petroseal independently repairs and extends the services life of the many different mechanical seal types and brands used through the industry.',
      cardTitle: 'SOLUTION FOCUSED LEGAL THINKING',
      cardContent: 'Customer satisfaction and integrity in dealing with our clients constitute the cornerstones of our firm and its conduct. Each client is an individual with individual needs. We treat our clients as such.'
    },
    id: {
      title: 'SIAPA KAMI',
      subtitle: 'Menantang diri sendiri untuk membawa cara berpikir baru dan orisinil',
      description1: 'Didirikan pada tahun 2005, Petroseal Engineering Sdn Bhd. mengkhususkan diri dalam perbaikan, retrofitting, refurbishment, Substitusi, layanan Re-Engineering untuk semua jenis mechanical seals bereputasi Internasional yang mencakup semua segmen pasar dan beroperasi di beberapa aplikasi paling menuntut melalui Industri Proses.',
      description2: 'Dalam segala hal yang kami lakukan, kami percaya pada menantang status quo. Kami percaya pada berpikir berbeda. Kami melakukan ini dengan menyediakan layanan tanpa kompromi untuk merek mechanical seal apa pun. Petroseal ada karena Anda layak mendapatkan pilihan ini.',
      description3: 'Dengan pemahaman mendalam kami tentang pentingnya waktu operasi dan kinerja pabrik, Petroseal secara independen memperbaiki dan memperpanjang masa pakai layanan dari berbagai jenis dan merek mechanical seal yang digunakan di industri.',
      cardTitle: 'SOLUSI FOKUS PEMIKIRAN LEGAL',
      cardContent: 'Kepuasan pelanggan dan integritas dalam berurusan dengan klien kami merupakan landasan perusahaan kami dan perilakunya. Setiap klien adalah individu dengan kebutuhan individu. Kami memperlakukan klien kami seperti itu.'
    }
  };

  const currentContent = content[language];

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-96 overflow-hidden"
        style={{
          backgroundImage: 'url(https://petroseal.com.my/wp-content/uploads/2019/01/504.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxWidth: '100%',
          height: '400px'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-aos="fade-up">
            {currentContent.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            {/* Image Card - Top */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              <div className="h-1 bg-red-600"></div>
              <div className="p-8">
                <div className="relative w-full h-auto">
                  <Image
                    src="https://petroseal.com.my/wp-content/uploads/2019/02/petroseal-brochure-1.png"
                    alt="Petroseal Brochure"
                    width={1200}
                    height={1050}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              </div>
            </div>

            {/* Text Card - Bottom */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
              <div className="h-1 bg-red-600"></div>
              <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-6 uppercase">
                  {currentContent.cardTitle}
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>{currentContent.description1}</p>
                  <p>{currentContent.description2}</p>
                  <p>{currentContent.description3}</p>
                  <p className="font-semibold">{currentContent.cardContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

