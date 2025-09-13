'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

// Data structure for separate galleries
const galleries = {
  stiffeners: Array.from({ length: 5 }, () => "/images/9121424.jpg"),
  gasket: Array.from({ length: 5 }, () => "/images/9121424.jpg"),
  sleeve: Array.from({ length: 5 }, () => "/images/9121424.jpg"),
  backClamp: Array.from({ length: 5 }, () => "/images/9121424.jpg"),
  premoulded: Array.from({ length: 5 }, () => "/images/9121424.jpg"),
  valve: Array.from({ length: 5 }, () => "/images/9121424.jpg"),
  static: Array.from({ length: 7 }, () => "/images/9121424.jpg"),
};

type GalleryId = keyof typeof galleries;

const DummyImageGrid = ({ galleryId, onImageClick }: { galleryId: GalleryId, onImageClick: (gallery: GalleryId, index: number) => void }) => {
  const images = galleries[galleryId];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-48 cursor-pointer overflow-hidden rounded-md shadow-md group" onClick={() => onImageClick(galleryId, i)}>
          <Image 
            src={src} 
            alt={`${galleryId} Example ${i + 1}`} 
            width={300} 
            height={200} 
            className="transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default function Processes() {
  const [modalState, setModalState] = useState<{ galleryId: GalleryId | null; index: number }>({ galleryId: null, index: 0 });

  const openModal = (galleryId: GalleryId, index: number) => {
    setModalState({ galleryId, index });
  };

  const closeModal = useCallback(() => {
    setModalState({ galleryId: null, index: 0 });
  }, []);

  const showNextImage = useCallback(() => {
    if (modalState.galleryId) {
      const gallery = galleries[modalState.galleryId];
      setModalState(prevState => ({ ...prevState, index: (prevState.index + 1) % gallery.length }));
    }
  }, [modalState.galleryId]);

  const showPrevImage = useCallback(() => {
    if (modalState.galleryId) {
      const gallery = galleries[modalState.galleryId];
      setModalState(prevState => ({ ...prevState, index: (prevState.index - 1 + gallery.length) % gallery.length }));
    }
  }, [modalState.galleryId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalState.galleryId) return;
      if (e.key === 'ArrowRight') showNextImage();
      else if (e.key === 'ArrowLeft') showPrevImage();
      else if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState.galleryId, showNextImage, showPrevImage, closeModal]);

  const currentGalleryImages = modalState.galleryId ? galleries[modalState.galleryId] : [];

  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20" data-aos="fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">OUR PROCESSES</h1>
        </div>
      </section>

      <section className="bg-white text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOB ON GASKETS OF BOLTED ASSEMBLIES</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">A safe and non destructive process !</p>
          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">Stiffeners</h3>
          <DummyImageGrid galleryId="stiffeners" onImageClick={openModal} />
          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">GASKET OF FLAT FACE FLANGES</h3>
          <DummyImageGrid galleryId="gasket" onImageClick={openModal} />
        </div>
      </section>

      <section className="bg-white text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOB ON PIPES</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">WITH PROTECTIVE SLEEVE</h3>
          <DummyImageGrid galleryId="sleeve" onImageClick={openModal} />
          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">BACK CLAMP</h3>
          <DummyImageGrid galleryId="backClamp" onImageClick={openModal} />
        </div>
      </section>

      <section className="bg-[#f5f7fa] text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">PREMOULDED BOX</h2>
          <DummyImageGrid galleryId="premoulded" onImageClick={openModal} />
        </div>
      </section>

      <section className="bg-white text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOB ON VALVE GLAND PACKINGS</h2>
          <DummyImageGrid galleryId="valve" onImageClick={openModal} />
        </div>
      </section>

      <section className="bg-[#f5f7fa] text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOBS ON OTHER STATIC DEVICES</h2>
          <DummyImageGrid galleryId="static" onImageClick={openModal} />
        </div>
      </section>

      {modalState.galleryId && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-white text-2xl bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all duration-300 ease-in-out hover:rotate-90 z-50 cursor-pointer" aria-label="Close">&times;</button>
            <button onClick={showPrevImage} className="absolute left-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer" aria-label="Previous Image">&#10094;</button>
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <div className="relative w-[90%] h-[80%]">
                <Image src={currentGalleryImages[modalState.index]} alt={`Enlarged image ${modalState.index + 1}`} layout="fill" objectFit="contain" className="rounded-md" />
              </div>
              <p className="text-white text-lg mt-4">{modalState.index + 1} / {currentGalleryImages.length}</p>
            </div>
            <button onClick={showNextImage} className="absolute right-4 text-white text-4xl z-50 p-4 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-all cursor-pointer" aria-label="Next Image">&#10095;</button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}