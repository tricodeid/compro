'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const Phases = () => {
  const phaseData = [
    {
      phase: 1,
      title: 'Phase 1',
      description: 'Assess the faulty device and take in-situ dimensions',
      image: '/images/9121424.jpg',
    },
    {
      phase: 2,
      title: 'Phase 2',
      description: 'Design and make a metal enclosure adapted to the working conditions of the leaking equipment and environment.',
      image: '/images/9121424.jpg',
    },
    {
      phase: 3,
      title: 'Phase 3',
      description: 'Bolt that metal enclosure around the leak and fill it with our sealing compounds by means of specific in-house hydraulic equipments.',
      image: '/images/9121424.jpg',
    },
  ];

  const images = phaseData.map(p => p.image);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const showNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const showPrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, showNextImage, showPrevImage, closeModal]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phaseData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-800 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                {item.phase}
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div 
                className="relative w-full h-48 cursor-pointer overflow-hidden rounded-md shadow-md group"
                onClick={() => openModal(index)}
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  layout="fill"
                  objectFit="cover" 
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
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
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white text-2xl bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all duration-300 ease-in-out hover:rotate-90 z-50 cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>

            <button 
              onClick={showPrevImage}
              className="absolute left-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer"
              aria-label="Previous Image"
            >
              &#10094;
            </button>

            <div className="relative flex flex-col items-center justify-center w-full h-full">
                <div className="relative w-[90%] h-[80%]">
                    <Image 
                        src={images[currentImageIndex]} 
                        alt={`Enlarged image ${currentImageIndex + 1}`} 
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <p className="text-white text-lg mt-4">{currentImageIndex + 1} / {images.length}</p>
            </div>

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

export default Phases;
