'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function ActivitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(10).fill(false));
  const [imageKey, setImageKey] = useState(0);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  // Array of activity images with fallback to dummy images
  const activityImages = [
    'https://petroseal.com.my/wp-content/uploads/2019/11/a1.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a2.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a3.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a4.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/A5.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a6.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a7.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a8.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a9.png',
    'https://petroseal.com.my/wp-content/uploads/2019/11/a10.png',
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

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const getImageSrc = (index: number) => {
    return imageErrors[index] ? dummyImages[index] : activityImages[index];
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
  }, [modalOpen]);

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
  }, [currentImageIndex, modalOpen]);

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
                  src={getImageSrc(index)}
                  alt={`Activity ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 4}
                  unoptimized
                  onError={() => handleImageError(index)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Image
                    src={getImageSrc(index)}
                    alt={`Activity ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index < 4}
                    unoptimized
                  />
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

            {/* Main Image with fade animation */}
            <img 
              key={imageKey}
              src={getImageSrc(currentImageIndex)} 
              alt={`Activity ${currentImageIndex + 1}`}
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
              {currentImageIndex + 1} / {activityImages.length}
            </div>
          </div>

          {/* Thumbnail Sidebar - Right */}
          <div ref={thumbnailContainerRef} className="w-52 bg-gray-100 overflow-y-auto flex flex-col gap-3 px-2" style={{ height: '100%', paddingTop: 'calc(50vh - 240px)', paddingBottom: 'calc(50vh - 240px)' }}>
            {activityImages.map((src, index) => (
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
                    src={getImageSrc(index)}
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

