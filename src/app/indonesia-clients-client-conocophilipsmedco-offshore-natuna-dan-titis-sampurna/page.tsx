'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function IndonesiaClientsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageKey, setImageKey] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  // Gallery images with aspect ratio data
  const imagesData = [
    { src: 'https://petroseal.com.my/wp-content/uploads/2019/12/df644635-a33a-4215-aed6-5a5802ed5812-400x300.jpg', width: 400, height: 300 }, // kiri atas
    { src: 'https://petroseal.com.my/wp-content/uploads/2019/12/70c16fdd-e15e-4384-8b57-49eae7312caa-400x533.jpg', width: 400, height: 533 }, // tengah atas
    { src: 'https://petroseal.com.my/wp-content/uploads/2019/12/87c445c0-3180-46db-abbf-cfcbe3aa459f-400x533.jpg', width: 400, height: 533 }, // kanan atas
    { src: 'https://petroseal.com.my/wp-content/uploads/2019/12/cfcdcba4-c3f6-475a-bd19-1075f7c1cae8-400x300.jpg', width: 400, height: 300 }, // kiri tengah
    { src: 'https://petroseal.com.my/wp-content/uploads/2019/12/d2c847e9-4c1a-4f1b-8bf3-eea76094cd50-400x300.jpg', width: 400, height: 300 }, // tengah tengah
    { src: 'https://petroseal.com.my/wp-content/uploads/2019/12/f08ee412-1c41-4d64-a172-00ad6a3ab593-400x300.jpg', width: 400, height: 300 }, // kanan tengah
    { src: 'https://petroseal.com.my/wp-content/uploads/2019/12/ab6cc018-0a15-4cd6-8d3e-d016cef55bd8-400x533.jpg', width: 400, height: 533 }, // tengah paling bawah (certificate)
  ];

  const images = imagesData.map(img => img.src);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Trigger fade animation when image changes
  useEffect(() => {
    setImageKey(prev => prev + 1);
  }, [currentImageIndex]);

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
  }, [modalOpen, images.length]);

  // Auto-scroll thumbnail sidebar to center active thumbnail
  useEffect(() => {
    if (!modalOpen || !thumbnailRefs.current[currentImageIndex] || !thumbnailContainerRef.current) return;

    const thumbnailContainer = thumbnailContainerRef.current;
    const thumbnail = thumbnailRefs.current[currentImageIndex];
    
    if (!thumbnail || !thumbnailContainer) return;

    const containerHeight = thumbnailContainer.clientHeight;
    const thumbnailHeight = thumbnail.clientHeight;
    
    const containerScrollTop = thumbnailContainer.scrollTop;
    const thumbnailTop = thumbnail.offsetTop;
    
    const thumbnailVisibleTop = thumbnailTop - containerScrollTop;
    const thumbnailCenter = thumbnailVisibleTop + (thumbnailHeight / 2);
    const containerCenter = containerHeight / 2;
    
    const scrollOffset = thumbnailCenter - containerCenter;
    const newScrollPosition = containerScrollTop + scrollOffset;
    
    thumbnailContainer.scrollTo({
      top: newScrollPosition,
      behavior: 'smooth'
    });
  }, [currentImageIndex, modalOpen, images.length]);

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 pl-4" data-aos="fade-up">
            Indonesia Clients client-Conocophilips, Medco offshore Natuna, dan Titis Sampurna
          </h1>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-6xl mx-auto">
            {imagesData.slice(0, 6).map((imageData, index) => {
              const aspectRatio = (imageData.height / imageData.width * 100).toFixed(2);
              return (
                <div
                  key={index}
                  className="relative w-full overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => openModal(index)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{ paddingBottom: `${aspectRatio}%` }}
                >
                  <Image
                    src={imageData.src}
                    alt={`Indonesia Clients ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  <Image
                    src={imageData.src}
                    alt={`Indonesia Clients ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>

          {/* Certificate Section - Larger image below */}
          <div className="max-w-xs mx-auto" data-aos="fade-up" data-aos-delay="600">
            <div
              className="relative w-full overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openModal(6)}
              style={{ paddingBottom: `${(imagesData[6].height / imagesData[6].width * 100).toFixed(2)}%` }}
            >
              <Image
                src={imagesData[6].src}
                alt="Certificate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
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
          <div className="flex-1 flex items-center justify-center relative p-8">
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

            {/* Main Image with fade animation */}
            <img 
              key={imageKey}
              src={images[currentImageIndex]} 
              alt={`Indonesia Clients ${currentImageIndex + 1}`}
              className="max-w-[calc(100%-12rem)] max-h-full object-contain animate-[fadeInDown_0.5s_ease-out]"
              style={{ maxWidth: '75%' }}
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
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Sidebar - Right */}
          <div ref={thumbnailContainerRef} className="w-52 bg-gray-100 overflow-y-auto flex flex-col gap-3 px-2" style={{ height: '100%', paddingTop: 'calc(50vh - 240px)', paddingBottom: 'calc(50vh - 240px)' }}>
            {images.map((src, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (thumbnailRefs.current) {
                    thumbnailRefs.current[index] = el;
                  }
                }}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-full cursor-pointer rounded overflow-hidden border-[3px] transition-all ${
                  currentImageIndex === index 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-transparent hover:border-gray-300'
                }`}
                style={{ width: '100%', paddingBottom: '100%', position: 'relative', height: 0 }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: currentImageIndex === index ? 1 : 0.7, transition: 'opacity 0.3s ease-in-out' }}>
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

