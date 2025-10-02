'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const ImageGrid = () => {
  const { language } = useLanguage();
  const initialImages = [
    'https://leaksealing.com/wp-content/uploads/2016/05/collierbagues-1030x773.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/DSC00259.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/fuite-chapelle-ronde-1030x773.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/fuite-gland-packing.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/fuite-sur-brides.png',
    'https://leaksealing.com/wp-content/uploads/2016/05/ligne-torche-3-1030x773.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/P1000064.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/PHOTO-4-1030x773.jpg',
    'https://leaksealing.com/wp-content/uploads/2016/05/PICT0009-1030x773.jpg',
  ];

  const [images, setImages] = useState(initialImages);
  const fallbackImage = '/images/9121424.jpg';

  const handleImageError = (index: number) => {
    const newImages = [...images];
    newImages[index] = fallbackImage;
    setImages(newImages);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing modal when clicking buttons
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing modal when clicking buttons
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, images.length]);

  const translations = {
    en: {
      industrialImage: 'Industrial Image',
      enlargedIndustrialImage: 'Enlarged industrial image',
      close: 'Close',
      previousImage: 'Previous Image',
      nextImage: 'Next Image',
    },
    id: {
      industrialImage: 'Gambar Industri',
      enlargedIndustrialImage: 'Gambar industri yang diperbesar',
      close: 'Tutup',
      previousImage: 'Gambar Sebelumnya',
      nextImage: 'Gambar Berikutnya',
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-16 bg-[#f5f7fa]" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {images.map((src, i) => (
            <div 
                key={i} 
                className="relative w-full h-32 sm:h-40 md:h-48 cursor-pointer overflow-hidden rounded-md shadow-md group"
                onClick={() => openModal(i)}
                data-aos="zoom-in" data-aos-delay={i * 100}
              >
                <Image 
                  src={src} 
                  alt={`${currentContent.industrialImage} ${i + 1}`} 
                  layout="fill"
                  objectFit="cover" 
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  onError={() => handleImageError(i)}
                />
              </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-[9999] flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white text-2xl bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all duration-300 ease-in-out hover:rotate-90 z-50 cursor-pointer"
              aria-label={currentContent.close}
            >
              &times;
            </button>

            {/* Prev Button */}
            <button 
              onClick={showPrevImage}
              className="absolute left-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer"
              aria-label={currentContent.previousImage}
            >
              &#10094;
            </button>

            {/* Image and Counter */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-[90%] h-[80%]">
                    <Image 
                        src={images[currentImageIndex]} 
                        alt={`${currentContent.enlargedIndustrialImage} ${currentImageIndex + 1}`} 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                        onError={() => handleImageError(currentImageIndex)}
                    />
                </div>
                <p className="text-white text-lg mt-4">{currentImageIndex + 1} / {images.length}</p>
            </div>

            {/* Next Button */}
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
    </section>
  );
};

export default ImageGrid;