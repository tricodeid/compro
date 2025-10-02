'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function AboutUs() {
  const { language } = useLanguage();

  const translations = {
    en: {
      pageTitle: "ABOUT US",
      bannerTitle: "PETROSEAL",
      bannerSubtitle: "THE LEAKSEALING COMPANY",
      enlargedIndustrialImage: 'Enlarged industrial image',
      close: 'Close',
      previousImage: 'Previous Image',
      nextImage: 'Next Image',
      contact: "CONTACT"
    },
    id: {
      pageTitle: "TENTANG KAMI",
      bannerTitle: "PETROSEAL",
      bannerSubtitle: "PERUSAHAAN PENYEGEL KEBOCORAN",
      enlargedIndustrialImage: 'Gambar industri yang diperbesar',
      close: 'Tutup',
      previousImage: 'Gambar Sebelumnya',
      nextImage: 'Gambar Berikutnya',
      contact: "KONTAK"
    },
  };

  const currentContent = translations[language];

  const images = [
    'https://leaksealing.com/wp-content/uploads/2016/05/TE-INJECTE_2-705x529.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/fuite-bride_1-705x529.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/composés_1-705x346.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/boite3_2.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/IMG_0141-705x529.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/ligne-torche-3-705x529.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/01/DSC04251-397x705.jpg',
    'https://leaksealing.com/wp-content/uploads/2015/02/Screen-Shot-2015-10-26-at-21.55.35.png',
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const showPrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, showNextImage, showPrevImage]);

  const topImages = images.slice(0, 4);
  const bottomImages = images.slice(4, 8);

  return (
    <main className="font-sans">
      <Header />
      <section className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(https://leaksealing.com/wp-content/uploads/2016/05/apropos-fond.jpg)' }}>
        <div className="bg-[#2d5c88]/50">
          <div className="container mx-auto px-4 py-48 text-center flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-bold mb-2">{currentContent.bannerTitle}</h1>
            <p className="text-2xl mb-4">{currentContent.bannerSubtitle}</p>
            <div className="w-24 h-1 bg-white mb-8"></div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Manufacturer and Supplier */}
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8" data-aos="fade-up">
            MANUFACTURER AND SUPPLIER<br />OF LEAK SEALING COMPOUNDS
          </h2>
          <div className="w-24 h-1 bg-[#394959] mx-auto mb-12" data-aos="zoom-in" data-aos-delay="100"></div>
        </div>
      </section>

      {/* NEW SECTION: Who we are and What we do */}
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-4">Who we are ?</h3>
            <p className="text-lg text-gray-700">
              Designer, producer and distributor of sealing compounds, PETROSEAL has been offering for over 40 years a wide range of leak sealing compounds, suitable for all kind of leaking fluids, pressure and temperature.
            </p>
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">What we do…</h3>
            <p className="text-lg text-gray-700">
              Industrial leaks are a well-known concern to our clients in terms of safety, productivity loss and environment. Some critical leaks might also lead to plant shutdown if no technical alternative is quickly and safely offered. Our on line leak repair technology is the solution to any energy or processing plants which necessity to go on with production is imperative….not to say crucial
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our know-how and 40 years of experience */}
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-4">Our know-how</h3>
            <p className="text-lg text-gray-700">
              Each leak, each device, each environment is unique of its kind. This is why our technical solutions are engineered case by case. To sum up the complexity of on line leak sealing, we’d say that it consists in ‘’manufacturing and installing a metal enclosure around the leak and to under pressure inject one of our sealing compounds’’
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="300">
            <div className="flex items-center mb-4">
              <Image
                src="https://leaksealing.com/wp-content/uploads/2016/05/face-petroseal-copy-80x80.jpg"
                alt="face-petroseal"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mr-4"
              />
              <h3 className="text-2xl font-bold">40 years of experience…</h3>
            </div>
            <p className="text-lg text-gray-700">
              Created in 1974 by Mr Jean-Noël Lamotte, our family business now occupies a leading position in the on-line leak sealing market : today, our products and techniques are widely and successfully applied in more than 40 countries.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: PETROSEAL THROUGH IMAGES */}
      <section
        className="py-32 relative text-black flex items-center justify-center min-h-[50vh]"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url(https://leaksealing.com/wp-content/uploads/2016/05/PICT0003-1.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-white opacity-50 backdrop-blur-sm"></div> {/* Color overlay with blur */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold" data-aos="zoom-in">PETROSEAL THROUGH<br />IMAGES</h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4" data-aos="zoom-in" data-aos-delay="100"></div>
        </div>
      </section>

      {/* NEW SECTION: Image Grid */}
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {topImages.map((src, i) => (
              <div key={i} className="relative group cursor-pointer !h-48" data-aos="zoom-in" onClick={() => openModal(i)}>
                <Image src={src} alt={`Image ${i + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">View Image</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {bottomImages.map((src, i) => (
              <div key={i} className="relative group cursor-pointer !h-48" data-aos="zoom-in" onClick={() => openModal(i + 4)}>
                <Image src={src} alt={`Image ${i + 5}`} layout="fill" objectFit="cover" className="rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">View Image</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-[9999] flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white text-2xl bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all duration-300 ease-in-out hover:rotate-90 z-50 cursor-pointer"
              aria-label={currentContent.close}
            >
              &times;
            </button>

            <button 
              onClick={showPrevImage}
              className="absolute left-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer"
              aria-label={currentContent.previousImage}
            >
              &#10094;
            </button>

            <div className="relative flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-[90%] h-[80%]">
                    <Image 
                        src={images[currentImageIndex]} 
                        alt={`${currentContent.enlargedIndustrialImage} ${currentImageIndex + 1}`} 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <p className="text-white text-lg mt-4">{currentImageIndex + 1} / {images.length}</p>
            </div>

            <button 
              onClick={showNextImage}
              className="absolute right-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer"
              aria-label={currentContent.nextImage}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      {/* NEW SECTION: PETROSEAL WORLDWIDE */}
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">PETROSEAL WORLDWIDE</h2>
          <p className="text-xl sm:text-2xl mb-8" data-aos="fade-up" data-aos-delay="100">We act in more than 40 countries.</p>
          <div className="flex justify-center items-center gap-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
              <span className="text-lg font-semibold">End-users</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
              <span className="text-lg font-semibold">Contractors</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: World Map Visualization */}
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4">
          <div
            className="relative w-full h-96"
            data-aos="fade-up"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/42/World_map_blank_without_borders_colored.svg"
              alt="World Map"
              layout="fill"
              objectFit="cover"
              className="filter blur-sm" // Apply blur directly to the image
            />
            {/* Markers can be added here if needed, e.g., small colored divs with absolute positioning */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-[#394959]" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <Link href="/contact" className="text-2xl sm:text-3xl md:text-4xl font-bold" data-aos="zoom-in">
            {currentContent.contact}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
