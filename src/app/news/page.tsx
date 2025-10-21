'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function NewsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Training For Clients images
  const trainingImages = [
    'https://petroseal.com.my/wp-content/uploads/2019/11/a11-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a12-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a13-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a14-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-04-at-12.14.29-PM-3-400x300.jpeg',
  ];

  // Witness Test images
  const witnessTestImages = [
    'https://petroseal.com.my/wp-content/uploads/2019/12/70c16fdd-e15e-4384-8b57-49eae7312caa-400x533.jpg',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a16-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a15-400x267.png',
    'https://petroseal.com.my/wp-content/uploads/2019/12/df644635-a33a-4215-aed6-5a5802ed5812-400x300.jpg',
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
  }, [modalOpen, currentGallery.length]);

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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                    <Image
                      src={src}
                      alt={`Training ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                    <Image
                      src={src}
                      alt={`Training ${index + 4}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                    <Image
                      src={src}
                      alt={`Witness Test ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                  <Image
                    src={witnessTestImages[3]}
                    alt="Witness Test 4"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
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
          className="fixed inset-0 bg-white z-[9999] flex"
          ref={modalRef}
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
              src={currentGallery[currentImageIndex]} 
              alt={`News Image ${currentImageIndex + 1}`}
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
              {currentImageIndex + 1} / {currentGallery.length}
            </div>
          </div>

          {/* Thumbnail Sidebar - Right */}
          <div className="w-48 bg-gray-100 p-4 overflow-y-auto flex flex-col gap-3">
            {currentGallery.map((src, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-full h-28 cursor-pointer rounded overflow-hidden border-2 transition-all ${
                  currentImageIndex === index 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={src}
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

