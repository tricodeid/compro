'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

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
  const { language } = useLanguage();
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

  const translations = {
    en: {
      pageTitle: "OUR PROCESSES",
      gasketsSectionTitle: "LEAK SEALING JOB ON GASKETS OF BOLTED ASSEMBLIES",
      gasketsSubtitle: "A safe and non destructive process !",
      gasketsDescription: `Depending on the size of flanges, our clamps are designed in two or more sections. The thickness of our clamp varies according the fluid pressure and its material is adapted to the fluid and temperature. Most of our clamps are machined with peripheral side lips. The caulking of these lips leads to a perfect mechanical adjusting of the clamp. Our injection valves are positioned (placed) <span class="text-blue-700 font-semibold">between</span> stud/bolts to guarantee an homogeneous and complete compound filling.`,
      stiffenersTitle: "Stiffeners",
      stiffenersDescription: "With the view to limiting even more the stress on the flanges’ stud/bolts during the injection stage, all our clamps are designed with safety retainers called “stiffeners”.",
      flatFaceFlangesTitle: "GASKET OF FLAT FACE FLANGES",
      flatFaceFlangesDescription: "In case of a leak on the gasket of flat face flanges, the sealing is obtained by injecting a clamp machined with a central groove and by installing and injecting ring adaptors on all stud/bolts.",
      pipesSectionTitle: "LEAK SEALING JOB ON PIPES",
      pipesSubtitle: "The pipe is covered with a metal enclosure which is progressively filled up with our sealing compound.",
      protectiveSleeveTitle: "WITH PROTECTIVE SLEEVE",
      protectiveSleeveDescription: "In order to limit the potential risks of compound intrusion into the pipe line, a protective sleeve could be placed over the leaking point before installing and injecting the metal enclosure.",
      backClampTitle: "BACK CLAMP",
      backClampDescription: "When the leak is located on the weld seam, we foresee its degradation and further potential disconnection over time by systematically designing a strong back clamp device, either connected to the metal box itself or separate.",
      premouldedBoxSectionTitle: "PREMOULDED BOX",
      premouldedBoxSubtitle: "The leaking pipes showing a high corrosion level and very thin residual thicknesses will be dealt by means of a “premoulded box”, without injecting sealing compound.",
      premouldedBoxDescription: "Whatever the pipe conditions are, the inside of our metal enclosures are fully “injected” or “premoulded” so that no void capacity is created !",
      valveGlandPackingsSectionTitle: "LEAK SEALING JOB ON VALVE GLAND PACKINGS",
      valveGlandPackingsSubtitle: "A leak located on a valve stuffing box is usually dealt with a G Clamp placed around the packing box area. Then, a drill is operated all through the G Clamp down to the packing. This “break through” method creates a channel for injecting our sealing compound.",
      valveGlandPackingsDescription1: "If our on-site assessment shows that the nuts of the packing gland flange are faulty or damaged, strengthening metal blocks will be installed before injecting sealing compound.",
      valveGlandPackingsDescription2: "Petroseal enjoys a wide range of standard and customised G Clamps, even for jobs on hazardous leaking fluids.",
      staticDevicesSectionTitle: "LEAK SEALING JOBS ON OTHER STATIC DEVICES",
    },
    id: {
      pageTitle: "PROSES KAMI",
      gasketsSectionTitle: "PEKERJAAN PERBAIKAN KEBOCORAN PADA GASKET RAKITAN BAUT",
      gasketsSubtitle: "Proses yang aman dan tidak merusak!",
      gasketsDescription: `Tergantung pada ukuran flensa, klem kami dirancang dalam dua atau lebih bagian. Ketebalan klem kami bervariasi sesuai dengan tekanan fluida dan materialnya disesuaikan dengan fluida dan suhu. Sebagian besar klem kami dikerjakan dengan bibir samping periferal. Pengisian bibir ini menghasilkan penyesuaian mekanis klem yang sempurna. Katup injeksi kami diposisikan (ditempatkan) <span class="text-blue-700 font-semibold">di antara</span> stud/baut untuk menjamin pengisian senyawa yang homogen dan lengkap.`,
      stiffenersTitle: "Penguat",
      stiffenersDescription: "Dengan tujuan untuk lebih membatasi tekanan pada stud/baut flensa selama tahap injeksi, semua klem kami dirancang dengan penahan pengaman yang disebut 'penguat'.",
      flatFaceFlangesTitle: "GASKET FLENSA MUKA DATAR",
      flatFaceFlangesDescription: "Dalam kasus kebocoran pada gasket flensa muka datar, penyegelan diperoleh dengan menyuntikkan klem yang dikerjakan dengan alur tengah dan dengan memasang serta menyuntikkan adaptor cincin pada semua stud/baut.",
      pipesSectionTitle: "PEKERJAAN PERBAIKAN KEBOCORAN PADA PIPA",
      pipesSubtitle: "Pipa ditutup dengan selungkup logam yang secara progresif diisi dengan senyawa penyegel kami.",
      protectiveSleeveTitle: "DENGAN LENGAN PELINDUNG",
      protectiveSleeveDescription: "Untuk membatasi potensi risiko intrusi senyawa ke dalam jalur pipa, selongsong pelindung dapat ditempatkan di atas titik kebocoran sebelum memasang dan menyuntikkan selungkup logam.",
      backClampTitle: "KLEM BELAKANG",
      backClampDescription: "Ketika kebocoran terletak pada sambungan las, kami memperkirakan degradasi dan potensi pemutusan lebih lanjut dari waktu ke waktu dengan secara sistematis merancang perangkat klem belakang yang kuat, baik yang terhubung ke kotak logam itu sendiri atau terpisah.",
      premouldedBoxSectionTitle: "KOTAK PRA-CETAK",
      premouldedBoxSubtitle: "Pipa yang bocor menunjukkan tingkat korosi yang tinggi dan ketebalan sisa yang sangat tipis akan ditangani dengan 'kotak pra-cetak', tanpa menyuntikkan senyawa penyegel.",
      premouldedBoxDescription: "Apapun kondisi pipanya, bagian dalam selungkup logam kami sepenuhnya 'disuntikkan' atau 'pra-cetak' sehingga tidak ada kapasitas kosong yang tercipta!",
      valveGlandPackingsSectionTitle: "PEKERJAAN PERBAIKAN KEBOCORAN PADA KEMASAN KELENJAR KATUP",
      valveGlandPackingsSubtitle: "Kebocoran yang terletak pada kotak isian katup biasanya ditangani dengan Klem G yang ditempatkan di sekitar area kotak kemasan. Kemudian, pengeboran dilakukan melalui Klem G hingga ke kemasan. Metode 'terobosan' ini menciptakan saluran untuk menyuntikkan senyawa penyegel kami.",
      valveGlandPackingsDescription1: "Jika penilaian di lokasi kami menunjukkan bahwa mur flensa kelenjar kemasan rusak atau rusak, blok logam penguat akan dipasang sebelum menyuntikkan senyawa penyegel.",
      valveGlandPackingsDescription2: "Petroseal memiliki berbagai macam Klem G standar dan yang disesuaikan, bahkan untuk pekerjaan pada cairan bocor berbahaya.",
      staticDevicesSectionTitle: "PEKERJAAN PERBAIKAN KEBOCORAN PADA PERANGKAT STATIS LAINNYA",
    },
  };

  const currentContent = translations[language];

  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20" data-aos="fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">{currentContent.pageTitle}</h1>
        </div>
      </section>

      <section className="bg-white text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">{currentContent.gasketsSectionTitle}</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">{currentContent.gasketsSubtitle}</p>
          <p className="text-base md:text-lg text-center text-gray-600 max-w-4xl mx-auto mb-10 font-light" dangerouslySetInnerHTML={{ __html: currentContent.gasketsDescription }} />

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">{currentContent.stiffenersTitle}</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">{currentContent.stiffenersDescription}</p>
          <DummyImageGrid galleryId="stiffeners" onImageClick={openModal} />

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">{currentContent.flatFaceFlangesTitle}</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">{currentContent.flatFaceFlangesDescription}</p>
          <DummyImageGrid galleryId="gasket" onImageClick={openModal} />
        </div>
      </section>

      <section className="bg-white text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">{currentContent.pipesSectionTitle}</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">{currentContent.pipesSubtitle}</p>

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">{currentContent.protectiveSleeveTitle}</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">{currentContent.protectiveSleeveDescription}</p>
          <DummyImageGrid galleryId="sleeve" onImageClick={openModal} />

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">{currentContent.backClampTitle}</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">{currentContent.backClampDescription}</p>
          <DummyImageGrid galleryId="backClamp" onImageClick={openModal} />
        </div>
      </section>

      <section className="bg-[#f5f7fa] text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">{currentContent.premouldedBoxSectionTitle}</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">{currentContent.premouldedBoxSubtitle}</p>
          <DummyImageGrid galleryId="premoulded" onImageClick={openModal} />
          <p className="text-xl text-center text-gray-600 mt-4 font-light">{currentContent.premouldedBoxDescription}</p>
        </div>
      </section>

      <section className="bg-white text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">{currentContent.valveGlandPackingsSectionTitle}</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">{currentContent.valveGlandPackingsSubtitle}</p>
          <p className="text-xl text-center text-gray-600 mb-4 font-light">{currentContent.valveGlandPackingsDescription1}</p>
          <p className="text-xl text-center text-gray-600 mb-4 font-light">{currentContent.valveGlandPackingsDescription2}</p>
          <DummyImageGrid galleryId="valve" onImageClick={openModal} />
        </div>
      </section>

      <section className="bg-[#f5f7fa] text-[#394959] py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">{currentContent.staticDevicesSectionTitle}</h2>
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
