'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

import { useState, useRef, useEffect } from 'react';

// Type definitions for vendor-prefixed fullscreen methods
interface DocumentWithFullscreen extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

interface ElementWithFullscreen extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export default function CoreBusinessPage() {
  const [activeTab, setActiveTab] = useState<'malaysia' | 'indonesia' | 'vietnam'>('malaysia');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    'https://petroseal.com.my/wp-content/uploads/2019/01/mech1.png',
    'https://petroseal.com.my/wp-content/uploads/2019/01/mech2.png',
    'https://petroseal.com.my/wp-content/uploads/2019/01/mech3.png',
    'https://petroseal.com.my/wp-content/uploads/2019/01/mech4.png',
    'https://petroseal.com.my/wp-content/uploads/2019/01/mech5.png',
    'https://petroseal.com.my/wp-content/uploads/2019/01/mech6.png',
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isFullscreen) exitFullscreen();
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const elem = modalRef.current as ElementWithFullscreen | null;
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  const exitFullscreen = () => {
    const doc = document as DocumentWithFullscreen;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  const togglePlay = () => {
    if (!isPlaying) {
      // Start slideshow
      setIsPlaying(true);
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      intervalRef.current = interval;
    } else {
      // Stop slideshow
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, images.length, closeModal]);

  const clients = {
    malaysia: [
      'PETRONAS CHEMICALS ETHYLENE',
      'PETRONAS CHEMICALS DERIVATIVES',
      'PETRONAS CHEMICALS AMMONIA',
      'PETRONAS CHEMICALS LDPE',
      'PETRONAS CHEMICALS MTBE',
      'PETRONAS PENAPISAN TERENGGANU',
      'GAS PROCESSING KERTEH',
      'GAS PROCESSING SANTONG',
      'CENTRALISED UTILITI FACILITIES (CUF) GEBENG',
      'CENTRALISED UTILITI FACILITIES (CUF) KERTEH',
      'EXPORT TERMINAL TANJUNG SULONG',
      'PETRONAS FERTILIZER KEDAH',
      'PROPANE DEHYDROGENATION PLANT',
      'MALAYSIA LNG SDN BHD',
      'ENQUEST PETROLEUM PRODUCTION MALAYSIA LTD',
      'VENATOR ASIA SDN BHD',
      'EASTMAN CHEMICAL MALAYSIA',
      'LYNAS MALAYSIA',
      'YTL POWER SEVICES SDN BHD',
      'ARKEMA THIOCHEMICALS',
      'MURPHY OIL MALAYSIA',
      'PETRONAS REFINERY AND PETROCHEMICALS IN INTEGRATED DEVELOPMENT(RAPID)',
      'LOTTE CHECMICAL TITAN SDN BHD',
      'LOTTE UBE SYNTHETIC RUBBER SDN BHD',
      'SYNTHOMER SDN BHD',
      'BASF PETRONAS CHECMICAL SDN BHD',
      'PETRONAS UREA PLANT SAMUR',
      'SARAWAK SHELL',
      'FPG OLEOCHEMICALS SDN BHD',
    ],
    indonesia: [
      'PT PERTAMINA (PERSERO)',
      'PT CHANDRA ASRI PETROCHEMICAL',
      'PT PUPUK KALTIM',
      'PT BADAK NGL',
      'PT INDO ACIDATAMA',
    ],
    vietnam: [
      'PETROVIETNAM',
      'VIETSOVPETRO',
      'BINH SON REFINERY',
      'NGHI SON REFINERY',
      'PV GAS',
    ],
  };

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      <section className="py-16 bg-white border-t-4 border-[#dc2626]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-8" data-aos="fade-up">
                Our Core Business
              </h1>
              
              <div className="grid grid-cols-2 gap-4">
                {images.map((src, index) => (
                  <div 
                    key={index} 
                    className="relative w-full h-64 overflow-hidden rounded shadow-md cursor-pointer group bg-gray-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    onClick={() => openModal(index)}
                    style={{ minHeight: '256px', backgroundColor: '#f8f9fa' }}
                  >
                    <Image
                      src={src}
                      alt={`Mechanical Seal ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index === 0}
                      onError={() => {
                        console.log('Image failed to load:', src);
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', src);
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                      <Image
                        src={src}
                        alt={`Mechanical Seal ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Partner Section */}
              <div className="mb-8" data-aos="fade-left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3a4a5c] mb-6">
                  PETROSEAL<br />
                  INTERNATIONAL<br />
                  PARTNER
                </h2>
                <div className="flex justify-center my-8">
                  <Image
                    src="https://petroseal.com.my/wp-content/uploads/2019/01/Untitled-3-1.png"
                    alt="Petroseal International Partner"
                    width={256}
                    height={128}
                    className="object-contain"
                    style={{ width: 'auto', height: 'auto' }}
                    onError={() => {
                      console.log('Partner logo failed to load');
                    }}
                    onLoad={() => console.log('Partner logo loaded successfully')}
                  />
                </div>
              </div>

              {/* Client List Section */}
              <div className="border-t-4 border-[#dc2626] pt-6" data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-xl md:text-2xl font-bold text-[#3a4a5c] mb-4">
                  Client List
                </h3>
                
                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('malaysia')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === 'malaysia'
                        ? 'bg-[#3a4a5c] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    MALAYSIA
                  </button>
                  <button
                    onClick={() => setActiveTab('indonesia')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === 'indonesia'
                        ? 'bg-[#3a4a5c] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    INDONESIA
                  </button>
                  <button
                    onClick={() => setActiveTab('vietnam')}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === 'vietnam'
                        ? 'bg-[#3a4a5c] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    VIETNAM
                  </button>
                </div>

                {/* Client List */}
                <div className="bg-gray-50 p-6 rounded max-h-[600px] overflow-y-auto">
                  <p className="text-sm font-medium text-gray-700 mb-4">
                    PROJECT LIST PETROSEAL ENGINEERING SDN BHD FOR MECHANICAL SEAL 2019
                  </p>
                  <ul className="space-y-2">
                    {clients[activeTab].map((client, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#dc2626] mr-2">•</span>
                        <span className="text-sm text-gray-700">{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
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

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors duration-200"
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

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center transition-colors duration-200"
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
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
              title="Previous"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
            </button>

            {/* Main Image */}
            <img 
              src={images[currentImageIndex]} 
              alt={`Mechanical Seal ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Next Button (Down Arrow) */}
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
              title="Next"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Sidebar - Right */}
          <div className="w-48 bg-gray-100 p-4 overflow-y-auto flex flex-col gap-3">
            {images.map((src, index) => (
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

