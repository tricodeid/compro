'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

// Type definitions for vendor-prefixed fullscreen methods
interface DocumentWithFullscreen extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

interface ElementWithFullscreen extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

const Engineering = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: 'ENGINEERING',
      description: 'Our team is experienced in mechanical seal supply, service and repair which serve the Malaysia, Indonesia, Vietnam oil and gas industry. With our strong engineering background, we determined to deliver the best for our client.',
    },
    id: {
      title: 'TEKNIK',
      description: 'Tim kami berpengalaman dalam pasokan, layanan, dan perbaikan mechanical seal yang melayani industri minyak dan gas Malaysia, Indonesia, Vietnam. Dengan latar belakang teknik kami yang kuat, kami bertekad untuk memberikan yang terbaik bagi klien kami.',
    },
  };

  const currentContent = content[language];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (isFullscreen) {
      exitFullscreen();
    }
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

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Image - Clickable */}
          <div className="w-full max-w-2xl mb-8 cursor-pointer" data-aos="fade-up" onClick={openModal}>
            <Image 
              src="https://petroseal.com.my/wp-content/uploads/2019/01/oil.png" 
              alt="Engineering" 
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* Content */}
          <div className="w-full border-t-4 border-red-600 pt-8 text-center max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3a4a5c] mb-6">
              {currentContent.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {currentContent.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
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

            {/* Fullscreen Button (Square) */}
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
          </div>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <Image 
              src="https://petroseal.com.my/wp-content/uploads/2019/01/oil.png" 
              alt="Engineering - Full View" 
              width={1200}
              height={900}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Engineering;

