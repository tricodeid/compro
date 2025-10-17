'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function NewsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);

  // Training For Clients images
  const trainingImages = [
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
  ];

  // Witness Test images
  const witnessTestImages = [
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
  ];

  const openModal = (gallery: string[], index: number) => {
    setCurrentGallery(gallery);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentGallery.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Training For Clients Section */}
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-8">
              Training For Clients
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {trainingImages.slice(0, 3).map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-64 overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => openModal(trainingImages, index)}
                >
                  <Image
                    src={src}
                    alt={`Training ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {trainingImages.slice(3, 5).map((src, index) => (
                <div
                  key={index + 3}
                  className="relative w-full h-64 overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => openModal(trainingImages, index + 3)}
                >
                  <Image
                    src={src}
                    alt={`Training ${index + 4}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Witness Test Section */}
          <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-8">
              Witness Test By Rapid Pengerang Personel
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {witnessTestImages.slice(0, 3).map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-64 overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => openModal(witnessTestImages, index)}
                >
                  <Image
                    src={src}
                    alt={`Witness Test ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <div
                className="relative w-full h-80 overflow-hidden shadow-md cursor-pointer group"
                onClick={() => openModal(witnessTestImages, 3)}
              >
                <Image
                  src={witnessTestImages[3]}
                  alt="Witness Test 4"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* News Category Buttons */}
          <div className="flex flex-col items-center gap-6 py-12" data-aos="fade-up" data-aos-delay="200">
            <button className="px-16 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-lg transition-colors duration-300 shadow-md">
              INDONESIA NEWS
            </button>
            <button className="px-16 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-lg transition-colors duration-300 shadow-md">
              VIETNAM NEWS
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Image Viewer */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white text-3xl bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300 z-50 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Previous Button */}
            <button 
              onClick={showPrevImage}
              className="absolute left-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              &#10094;
            </button>

            {/* Image Container */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <div className="relative w-[85%] h-[80%]">
                <Image 
                  src={currentGallery[currentImageIndex]} 
                  alt={`News Image ${currentImageIndex + 1}`} 
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <p className="text-white text-lg mt-4 font-medium">
                {currentImageIndex + 1} / {currentGallery.length}
              </p>
            </div>

            {/* Next Button */}
            <button 
              onClick={showNextImage}
              className="absolute right-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all cursor-pointer"
              aria-label="Next Image"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

