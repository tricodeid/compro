"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageGrid = () => {
  // Use the local dummy image and create an array of 9 images
  const images = Array(9).fill('/images/9121424.jpg');

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

  // Add keyboard navigation
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


  return (
    <section className="py-16 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div 
                key={i} 
                className="relative w-full h-48 cursor-pointer overflow-hidden rounded-md shadow-md group"
                onClick={() => openModal(i)}
              >
                <Image 
                  src={src} 
                  alt={`Industrial Image ${i + 1}`} 
                  layout="fill"
                  objectFit="cover" 
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white text-2xl bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all duration-300 ease-in-out hover:rotate-90 z-50 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Prev Button */}
            <button 
              onClick={showPrevImage}
              className="absolute left-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              &#10094;
            </button>

            {/* Image and Counter */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-[90%] h-[80%]">
                    <Image 
                        src={images[currentImageIndex]} 
                        alt={`Enlarged industrial image ${currentImageIndex + 1}`} 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <p className="text-white text-lg mt-4">{currentImageIndex + 1} / {images.length}</p>
            </div>

            {/* Next Button */}
            <button 
              onClick={showNextImage}
              className="absolute right-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer"
              aria-label="Next Image"
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