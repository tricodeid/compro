'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function ActivitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of 10 activity images
  const activityImages = [
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
    '/images/9121424.jpg',
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activityImages.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + activityImages.length) % activityImages.length);
  };

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-8" data-aos="fade-up">
            Activities
          </h1>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activityImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-64 overflow-hidden rounded shadow-md cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                onClick={() => openModal(index)}
              >
                <Image
                  src={src}
                  alt={`Activity ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                    View Image
                  </span>
                </div>
              </div>
            ))}
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
                  src={activityImages[currentImageIndex]} 
                  alt={`Activity ${currentImageIndex + 1}`} 
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <p className="text-white text-lg mt-4 font-medium">
                {currentImageIndex + 1} / {activityImages.length}
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

