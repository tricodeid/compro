'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Type definitions for vendor-prefixed fullscreen methods
interface DocumentWithFullscreen extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

interface ElementWithFullscreen extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export default function NewsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [imageKey, setImageKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

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
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Trigger fade animation when image changes
  useEffect(() => {
    setImageKey(prev => prev + 1);
  }, [currentImageIndex]);

  // Auto-scroll thumbnail when image changes
  useEffect(() => {
    if (thumbnailRefs.current[currentImageIndex] && thumbnailContainerRef.current) {
      const thumbnailElement = thumbnailRefs.current[currentImageIndex];
      const containerElement = thumbnailContainerRef.current;
      
      if (thumbnailElement && containerElement) {
        const containerRect = containerElement.getBoundingClientRect();
        const thumbnailRect = thumbnailElement.getBoundingClientRect();
        
        const scrollTop = containerElement.scrollTop;
        const thumbnailTop = thumbnailElement.offsetTop;
        const thumbnailHeight = thumbnailElement.offsetHeight;
        const containerHeight = containerElement.offsetHeight;
        
        const targetScrollTop = thumbnailTop - (containerHeight / 2) + (thumbnailHeight / 2);
        
        containerElement.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: 'smooth'
        });
      }
    }
  }, [currentImageIndex]);

  // Fullscreen functionality
  const toggleFullscreen = async () => {
    if (!modalRef.current) return;

    try {
      if (!isFullscreen) {
        const element = modalRef.current as ElementWithFullscreen;
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          await element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          await element.msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        const doc = document as DocumentWithFullscreen;
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        } else if (doc.msExitFullscreen) {
          await doc.msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  // Autoplay functionality
  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPlaying(false);
    } else {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentGallery.length);
      }, 3000);
      setIsPlaying(true);
    }
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentGallery.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentGallery.length) % currentGallery.length);
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
  }, [modalOpen, currentGallery.length]);

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
  }, [currentImageIndex, modalOpen, currentGallery]);

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Training For Clients Section */}
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3a4a5c] mb-5 md:mb-6 lg:mb-8">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#3a4a5c] mb-5 md:mb-6 lg:mb-8">
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
            <a href="/indonesia-clients-client-conocophilipsmedco-offshore-natuna-dan-titis-sampurna" className="px-8 py-2 md:px-12 md:py-3 lg:px-16 lg:py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm md:text-base lg:text-lg transition-colors duration-300 shadow-md inline-block">
              INDONESIA NEWS
            </a>
            <a href="/indonesia-clients-client-conocophilipsmedco-offshore-natuna-dan-titis-sampurna" className="px-8 py-2 md:px-12 md:py-3 lg:px-16 lg:py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-sm md:text-base lg:text-lg transition-colors duration-300 shadow-md inline-block">
              VIETNAM NEWS
            </a>
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
            <button onClick={closeModal} className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors duration-200 cursor-pointer" title="Close">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center p-8 relative">
            {/* Previous Button (Up Arrow) */}
            <button
              onClick={showPrevImage}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10 cursor-pointer"
              title="Previous"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
            </button>

            {/* Main Image with fade animation */}
            <img 
              key={imageKey}
              src={currentGallery[currentImageIndex]} 
              alt={`News Image ${currentImageIndex + 1}`}
              className="max-w-[calc(100%-12rem)] max-h-full object-contain animate-[fadeInDown_0.5s_ease-out]"
              style={{ maxWidth: '75%' }}
            />

            {/* Next Button (Down Arrow) */}
            <button
              onClick={showNextImage}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10 cursor-pointer"
              title="Next"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {currentGallery.length}
            </div>
          </div>

          {/* Thumbnail Sidebar - Right (hidden on mobile/tablet) */}
          <div ref={thumbnailContainerRef} className="hidden md:flex md:w-52 bg-gray-100 overflow-y-auto flex-col gap-3 px-2" style={{ height: '100%', paddingTop: 'calc(50vh - 240px)', paddingBottom: 'calc(50vh - 240px)' }}>
            {currentGallery.map((src, index) => (
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

