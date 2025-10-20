'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FacilitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(26).fill(false));

  // Array of facility images with fallback to dummy images
  const facilityImages = [
    'https://petroseal.com.my/wp-content/uploads/2019/11/f1-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f2-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f3-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f4-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f5-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f6-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f7-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f8-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f9-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f10-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f11-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f12-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f13-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f14-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f15-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f16-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f17-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/f18-400x400.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t1-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t2-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t3-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t4-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t5-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t6-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t7-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/t8-400x267.png',
  ];

  // Fallback dummy images from public folder
  const dummyImages = [
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
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % facilityImages.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + facilityImages.length) % facilityImages.length);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const getImageSrc = (index: number) => {
    return imageErrors[index] ? dummyImages[index] : facilityImages[index];
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        showNextImage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-8" data-aos="fade-up">
            Facilities
          </h1>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilityImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-64 overflow-hidden rounded shadow-md cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                onClick={() => openModal(index)}
              >
                <Image
                  src={getImageSrc(index)}
                  alt={`Facility ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 6}
                  unoptimized
                  onError={() => handleImageError(index)}
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
          className="fixed inset-0 bg-white z-[9999] flex"
          onClick={closeModal}
        >
          {/* Controls - Top Left */}
          <div className="absolute top-4 left-4 flex gap-2 z-50">
            {/* Close Button (X) */}
            <button
              onClick={closeModal}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors duration-200"
              title="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center p-8 relative">
            {/* Previous Button (Up Arrow) */}
            <button
              onClick={showPrevImage}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
              title="Previous"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
            </button>

            {/* Main Image */}
            <img 
              src={getImageSrc(currentImageIndex)} 
              alt={`Facility ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Next Button (Down Arrow) */}
            <button
              onClick={showNextImage}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
              title="Next"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {facilityImages.length}
            </div>
          </div>

          {/* Thumbnail Sidebar - Right */}
          <div className="w-48 bg-gray-100 p-4 overflow-y-auto flex flex-col gap-2">
            {facilityImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-full h-20 cursor-pointer rounded overflow-hidden border-2 transition-all ${
                  currentImageIndex === index 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={getImageSrc(index)}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

