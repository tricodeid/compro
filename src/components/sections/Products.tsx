'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface AnimatedCounterProps {
  targetValue: number;
  unit?: string;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ targetValue, unit = '', duration = 1500, suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const isNegative = targetValue < 0;
    const absoluteTarget = Math.abs(targetValue);
    const incrementTime = 50; // ms

    const timer = setInterval(() => {
      const increment = absoluteTarget / (duration / incrementTime);
      startValue += increment;

      if (isNegative) {
        if (startValue >= absoluteTarget) {
          setCurrentValue(targetValue);
          clearInterval(timer);
        } else {
          setCurrentValue(-Math.floor(startValue));
        }
      } else {
        if (startValue >= absoluteTarget) {
          setCurrentValue(targetValue);
          clearInterval(timer);
        } else {
          setCurrentValue(Math.floor(startValue));
        }
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return (
    <span className="text-3xl font-bold">
      {currentValue}
      {unit && <sup>{unit}</sup>}
      {suffix}
    </span>
  );
};

const Products = () => {
  const { language } = useLanguage();

  const carouselImages = [
    'https://leaksealing.com/wp-content/uploads/2015/02/produit-pate-001.png',
    'https://leaksealing.com/wp-content/uploads/2015/02/produit-pate-002.png',
    'https://leaksealing.com/wp-content/uploads/2015/02/produit-pate-003.png',
    'https://leaksealing.com/wp-content/uploads/2015/02/produit-pate-004.png',
    'https://leaksealing.com/wp-content/uploads/2015/02/produit-pate-005.png',
  ];
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const translations = {
    en: {
      title: "“MADE IN FRANCE” SEALING COMPOUNDS",
      isoCertified: "ISO certified manufacturer since 1994",
      provenFormulations: "PROVEN FORMULATIONS FOR ALL TYPES OF LEAKAGES",
      steamWaterAirAcids: "STEAM – WATER – AIR – ACIDS",
      hydrocarbonsByproducts: "HYDROCARBONS BYPRODUCTS",
      readyToBeInjected: "READY TO BE INJECTED SEALING COMPOUNDS",
      halfPastyDescription: "Our sealing compounds are half-pasty and don’t need to be pre-heated before injection",
      minTemp: "Min Temp",
      maxTemp: "Max Temp",
      maxPressure: "Max Pressure",
      traceability: "TRACEABILITY",
      traceabilityDescription: "Each of the 70,000 cans we yearly produce bears a batch number, an expiry date and a legal labelling. Technical Data Sheets in various languages and Safety Materials Data Sheets complying with regulations applicable to mixtures and chemical preparations.",
      packagingShelfLife: "PACKAGING AND SHELF LIFE",
      packagingShelfLifeDescription: "PETROSEAL’s injectable sealing compounds are packed into metallic cans and enjoy a 2 year shelf life (3 years for nuclear grade compounds).",
      availability: "AVAILABILITY",
      availabilityDescription: "Last minute or planned requirements? Petroseal always keeps a permanent and consistent stock of the most frequently used sealing compound for immediate shipment.",
      statsCansSold: "Cans sold worldwide over the last 20 years.",
      statsEvery60Seconds: "a stick of product is injected somewhere in the world",
      statsCountriesServed: "countries our products and technology are applied",
      statsCansSoldValue: "1 000 000",
      statsEvery60SecondsValue: "Every 60 seconds",
      statsCountriesServedValue: "In more than 40",
      productionTitle: "An in-house production run under the highest quality controls",
      productionDescription: "From the mixture of selected raw ingredients to the final packaging, our laboratory technicians rigorously conform to the compounds formulas and manufacturing processes developed by the inventor",
      weightControl: "Weight control",
      sealingMachine: "Sealing machine",
      printing: "Printing",
      labelling: "Labelling",
      injectionEquipmentTitle: "INJECTION EQUIPMENTS",
      injectionEquipmentDescription: "To inject our sealing compounds, we use hydraulic equipments composed of twin effect pumps and jacks. This “twin effect” system, exclusively designed by Petroseal, is the only one allowing a “continuous” sealing compound injection.<br/>We offer various combinations according to the job conditions: for example, the hand pump with a “1 stick” jack ensures a controlled compression of the sealing compound inside the enclosure whereas a pneumatic pump with a “4 stick” jack allows a fast filling of significant compound volume.",
      handPump: "Hand Pump",
      pneumaticPump: "Pneumatic Pump",
      jack1Stick: "Jack 1 Stick",
      jack4Stick: "Jack 4 Stick",
      premouldedSolutionsTitle: "PREMOULDED SOLUTIONS",
      premouldedSolutionsDescription: "Ideal for severely corroded pipes that could not stand any compound injection pressure.<br/>Both for straight portions and for 90° long radius elbows",
      maxTempPremoulded: "Max Temp",
      maxPressurePremoulded: "Max Pressure",
      noInjectionDescription: "No in-situ compound injection: premoulded boxes are easily and quickly installed!",
      elbowStandardSizes: "Elbow standard sizes",
      straightStandardSizes: "Straight standard sizes",
      getTechnicalDocumentation: "GET THE TECHNICAL DOCUMENTATION",
      getTechnicalDocumentationDescription: "For all our sealing compounds, get the list of every product and technical specifications that fit your needs.",
      contactUs: "Contact us",
      aboutPetroseal: "ABOUT PETROSEAL",
      aboutPetrosealDescription: "Designer, manufacturer and supplier of home made sealing compounds worldwide",
      petrosealAddress: "PETROSEAL",
      petrosealAddressLine1: "B.P. 104",
      petrosealAddressLine2: "F-76430 Saint-Romain-De-Colbosc",
      petrosealAddressLine3: "France",
      petrosealTel: "Tel: +33 2 35 55 04 70",
      petrosealFax: "Fax: +33 2 35 20 67 26",
      fidgiGroup: "FIDGI GROUP (HOLDING COMPANY)",
      fidgiGroupAddressLine1: "Parc d’Activités de l’Aérodrome",
      fidgiGroupAddressLine2: "BP 104 - 76430 ST ROMAIN DE COLBOSC",
      fidgiGroupAddressLine3: "France",
      siteMap: "SITE MAP",
      home: "Home",
      processes: "Processes",
      products: "Products",
      application: "Application",
      aboutUs: "About us",
      contact: "Contact",
      blog: "Blog",
      sealingCompoundCanAlt: "Sealing Compound Can",
      sealingCompoundStickAlt: "Sealing Compound Stick",
      premouldedElbowAlt: "Premoulded Elbow",
      premouldedBoxAlt: "Premoulded Box",
      premouldedHexAlt: "Premoulded Hex",
      premouldedElbow2Alt: "Premoulded Elbow 2",
      elbowSizes: "1/2” to 8”",
      straightSizes: "1/2” to 10”",
    },
    id: {
      title: "SENYAWA PENYEGEL “BUATAN PRANCIS”",
      isoCertified: "Produsen bersertifikat ISO sejak 1994",
      provenFormulations: "FORMULASI TERBUKTI UNTUK SEMUA JENIS KEBOCORAN",
      steamWaterAirAcids: "UAP – AIR – UDARA – ASAM",
      hydrocarbonsByproducts: "HASIL SAMPING HIDROKARBON",
      readyToBeInjected: "SENYAWA PENYEGEL SIAP SUNTIK",
      halfPastyDescription: "Senyawa penyegel kami setengah kental dan tidak perlu dipanaskan sebelum disuntikkan",
      minTemp: "Suhu Min",
      maxTemp: "Suhu Maks",
      maxPressure: "Tekanan Maks",
      traceability: "KETERLACAKAN",
      traceabilityDescription: "Setiap 70.000 kaleng yang kami produksi setiap tahun memiliki nomor batch, tanggal kedaluwarsa, dan label hukum. Lembar Data Teknis dalam berbagai bahasa dan Lembar Data Bahan Keselamatan yang mematuhi peraturan yang berlaku untuk campuran dan sediaan kimia.",
      packagingShelfLife: "KEMASAN DAN MASA SIMPAN",
      packagingShelfLifeDescription: "Senyawa penyegel injeksi PETROSEAL dikemas dalam kaleng logam dan memiliki masa simpan 2 tahun (3 tahun untuk senyawa kelas nuklir).",
      availability: "KETERSEDIAAN",
      availabilityDescription: "Kebutuhan mendesak atau terencana? Petroseal selalu menyimpan stok permanen dan konsisten dari senyawa penyegel yang paling sering digunakan untuk pengiriman segera.",
      statsCansSold: "Kaleng terjual di seluruh dunia selama 20 tahun terakhir.",
      statsEvery60Seconds: "sebatang produk disuntikkan di suatu tempat di dunia",
      statsCountriesServed: "negara tempat produk dan teknologi kami diterapkan",
      statsCansSoldValue: "1 000 000",
      statsEvery60SecondsValue: "Setiap 60 detik",
      statsCountriesServedValue: "Di lebih dari 40",
      productionTitle: "Produksi internal yang dijalankan di bawah kontrol kualitas tertinggi",
      productionDescription: "Dari campuran bahan baku pilihan hingga pengemasan akhir, teknisi laboratorium kami secara ketat mematuhi formula senyawa dan proses manufaktur yang dikembangkan oleh penemu",
      weightControl: "Kontrol berat",
      sealingMachine: "Mesin penyegel",
      printing: "Pencetakan",
      labelling: "Pelabelan",
      injectionEquipmentTitle: "PERALATAN INJEKSI",
      injectionEquipmentDescription: "Untuk menyuntikkan senyawa penyegel kami, kami menggunakan peralatan hidrolik yang terdiri dari pompa efek ganda dan dongkrak. Sistem “efek ganda” ini, yang dirancang secara eksklusif oleh Petroseal, adalah satu-satunya yang memungkinkan injeksi senyawa penyegel “berkelanjutan”.<br/>Kami menawarkan berbagai kombinasi sesuai dengan kondisi pekerjaan: misalnya, pompa tangan dengan dongkrak “1 stik” memastikan kompresi senyawa penyegel yang terkontrol di dalam penutup, sedangkan pompa pneumatik dengan dongkrak “4 stik” memungkinkan pengisian cepat volume senyawa yang signifikan.",
      handPump: "Pompa Tangan",
      pneumaticPump: "Pompa Pneumatik",
      jack1Stick: "Dongkrak 1 Stik",
      jack4Stick: "Dongkrak 4 Stik",
      premouldedSolutionsTitle: "SOLUSI PRA-CETAK",
      premouldedSolutionsDescription: "Ideal untuk pipa yang sangat berkarat yang tidak dapat menahan tekanan injeksi senyawa.<br/>Baik untuk bagian lurus maupun untuk siku radius panjang 90°",
      maxTempPremoulded: "Suhu Maks",
      maxPressurePremoulded: "Tekanan Maks",
      noInjectionDescription: "Tidak ada injeksi senyawa di tempat: kotak pra-cetak mudah dan cepat dipasang!",
      elbowStandardSizes: "Ukuran standar siku",
      straightStandardSizes: "Ukuran standar lurus",
      getTechnicalDocumentation: "DAPATKAN DOKUMENTASI TEKNIS",
      getTechnicalDocumentationDescription: "Untuk semua senyawa penyegel kami, dapatkan daftar setiap produk dan spesifikasi teknis yang sesuai dengan kebutuhan Anda.",
      contactUs: "Hubungi kami",
      aboutPetroseal: "TENTANG PETROSEAL",
      aboutPetrosealDescription: "Perancang, produsen, dan pemasok senyawa penyegel buatan sendiri di seluruh dunia",
      petrosealAddress: "PETROSEAL",
      petrosealAddressLine1: "B.P. 104",
      petrosealAddressLine2: "F-76430 Saint-Romain-De-Colbosc",
      petrosealAddressLine3: "Prancis",
      petrosealTel: "Tel: +33 2 35 55 04 70",
      petrosealFax: "Fax: +33 2 35 20 67 26",
      fidgiGroup: "FIDGI GROUP (PERUSAHAAN INDUK)",
      fidgiGroupAddressLine1: "Parc d’Activités de l’Aérodrome",
      fidgiGroupAddressLine2: "BP 104 - 76430 ST ROMAIN DE COLBOSC",
      fidgiGroupAddressLine3: "Prancis",
      siteMap: "PETA SITUS",
      home: "Beranda",
      processes: "Proses",
      products: "Produk",
      application: "Aplikasi",
      aboutUs: "Tentang kami",
      contact: "Kontak",
      blog: "Blog",
      sealingCompoundCanAlt: "Kaleng Senyawa Penyegel",
      sealingCompoundStickAlt: "Stik Senyawa Penyegel",
      premouldedElbowAlt: "Siku Pra-cetak",
      premouldedBoxAlt: "Kotak Pra-cetak",
      premouldedHexAlt: "Hex Pra-cetak",
      premouldedElbow2Alt: "Siku Pra-cetak 2",
      elbowSizes: "1/2” hingga 8”",
      straightSizes: "1/2” hingga 10”",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="bg-white text-gray-800" data-aos="fade-up">
      {/* HEADER & HERO SECTION */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Product Image */}
        <div className="flex-1 flex justify-center relative w-full h-80" data-aos="fade-right"> {/* Added relative, w-full, h-80 for carousel container */}
          <Image
            src={carouselImages[currentCarouselIndex]}
            alt={currentContent.sealingCompoundCanAlt}
            layout="fill" // Use layout="fill" for responsive images in a container
            objectFit="contain" // Keep aspect ratio and fit within container
            className="rounded-lg shadow-lg bg-white p-2 transition-opacity duration-500" // Added transition for fade effect
          />
        </div>
        {/* Text Content */}
        <div className="flex-1" data-aos="fade-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800" data-aos="fade-left">{currentContent.title}</h1>
          <p className="text-lg md:text-xl mb-2 text-gray-800" data-aos="fade-left" data-aos-delay="100">{currentContent.isoCertified}</p>
          <div className="h-1 w-24 bg-white mb-6" data-aos="zoom-in" data-aos-delay="200"></div>
          <p className="text-lg mb-4 font-semibold text-gray-800" data-aos="fade-left" data-aos-delay="300">{currentContent.provenFormulations}</p>
          <p className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300" data-aos="fade-left" data-aos-delay="400">{currentContent.steamWaterAirAcids}</p>
          <p className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300" data-aos="fade-left" data-aos-delay="500">{currentContent.hydrocarbonsByproducts}</p>
          <p className="mt-4 mb-2 text-gray-800" data-aos="fade-left" data-aos-delay="600">{currentContent.readyToBeInjected}</p>
          <p className="text-gray-800 mb-6" data-aos="fade-left" data-aos-delay="700">{currentContent.halfPastyDescription}</p>
          {/* Specs */}
          <div className="flex gap-8 mt-8" data-aos="fade-up" data-aos-delay="800">
            <div className="flex flex-col items-center">
              <AnimatedCounter targetValue={-180} unit="o" suffix="C" />
              <span className="text-sm mt-1">{currentContent.minTemp}</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter targetValue={700} unit="o" suffix="C" />
              <span className="text-sm mt-1">{currentContent.maxTemp}</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter targetValue={240} suffix="" />
              <span className="text-base font-bold">Bar</span>
              <span className="text-sm mt-1">{currentContent.maxPressure}</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES & STICK IMAGE SECTION */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Blue stick image */}
        <div className="flex justify-center" data-aos="fade-right">
          <Image
            src="https://leaksealing.com/wp-content/uploads/2016/01/gal002.png"
            alt={currentContent.sealingCompoundStickAlt}
            width={180}
            height={220}
            className="rounded-lg shadow-lg bg-white p-2"
          />
        </div>
        {/* Features List */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="flex items-start gap-4" data-aos="fade-left" data-aos-delay="100">
            <span className="text-2xl">🔗</span>
            <div>
              <h3 className="font-bold text-lg">{currentContent.traceability}</h3>
              <p>{currentContent.traceabilityDescription}</p>
            </div>
          </div>
          <div className="flex items-start gap-4" data-aos="fade-left" data-aos-delay="200">
            <span className="text-2xl">📦</span>
            <div>
              <h3 className="font-bold text-lg">{currentContent.packagingShelfLife}</h3>
              <p>{currentContent.packagingShelfLifeDescription}</p>
            </div>
          </div>
          <div className="flex items-start gap-4" data-aos="fade-left" data-aos-delay="300">
            <span className="text-2xl">⏱️</span>
            <div>
              <h3 className="font-bold text-lg">{currentContent.availability}</h3>
              <p>{currentContent.availabilityDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS SECTION */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center text-gray-800">
          <div data-aos="zoom-in" data-aos-delay="100">
            <div className="text-3xl font-bold">{currentContent.statsCansSoldValue}</div>
            <div className="text-sm">{currentContent.statsCansSold}</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <div className="text-3xl font-bold">{currentContent.statsEvery60SecondsValue}</div>
            <div className="text-sm">{currentContent.statsEvery60Seconds}</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <div className="text-3xl font-bold">{currentContent.statsCountriesServedValue}</div>
            <div className="text-sm">{currentContent.statsCountriesServed}</div>
          </div>
        </div>
      </div>

      {/* VIDEO PRODUCTION SECTION */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800" data-aos="zoom-in">{currentContent.productionTitle}</h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-800" data-aos="fade-up">{currentContent.productionDescription}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: currentContent.weightControl, src: 'https://leaksealing.com/wp-content/uploads/2016/01/phase-1.jpg', youtubeLink: 'https://youtu.be/-PrdIpDYuhk' },
            { title: currentContent.sealingMachine, src: 'https://leaksealing.com/wp-content/uploads/2016/01/phase-2.jpg', youtubeLink: 'https://youtu.be/8byTni6ZBao' },
            { title: currentContent.printing, src: 'https://leaksealing.com/wp-content/uploads/2016/01/phase-3.jpg', youtubeLink: 'https://youtu.be/DMJWCpLe1vY' },
            { title: currentContent.labelling, src: 'https://leaksealing.com/wp-content/uploads/2016/01/phase-4.jpg', youtubeLink: 'https://youtu.be/GtO1HCZpRrI' },
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={i * 100}>
              <a href={v.youtubeLink} target="_blank" rel="noopener noreferrer" className="relative w-full h-40 mb-2 block"> {/* Added <a> tag */}
                <Image src={v.src} alt={v.title} width={220} height={120} className="rounded-lg object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 rounded-full p-2">
                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </a> {/* Closed <a> tag */}
              <span className="mt-2 text-base font-semibold text-gray-800">{v.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* INJECTION EQUIPMENT SECTION */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800" data-aos="zoom-in">{currentContent.injectionEquipmentTitle}</h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-800" dangerouslySetInnerHTML={{ __html: currentContent.injectionEquipmentDescription }} data-aos="fade-up" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {[
            { src: 'https://leaksealing.com/wp-content/uploads/2016/01/pompe-a-main-gif.png', alt: currentContent.handPump },
            { src: 'https://leaksealing.com/wp-content/uploads/2016/01/verin-1-batton-low-res.png', alt: currentContent.jack1Stick },
            { src: 'https://leaksealing.com/wp-content/uploads/2016/01/pompe2-low-res.png', alt: currentContent.pneumaticPump },
            { src: 'https://leaksealing.com/wp-content/uploads/2016/01/verin-4-batton-low-res.png', alt: currentContent.jack4Stick },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay={i * 100}>
              <Image src={e.src} alt={e.alt} width={300} height={200} className="rounded-lg object-contain bg-white p-2 mb-2" />
            </div>
          ))}
        </div>
      </div>

      {/* NEW IMAGE ROW BEFORE PREMOULDED SOLUTIONS */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative w-full h-[30rem] bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url(https://leaksealing.com/wp-content/uploads/2016/01/gal001.png)' }} data-aos="zoom-in" data-aos-delay="100"></div>
          <div className="relative w-full h-[30rem] bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url(https://leaksealing.com/wp-content/uploads/2016/01/gal002.png)' }} data-aos="zoom-in" data-aos-delay="200"></div>
          <div className="relative w-full h-[30rem] bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: 'url(https://leaksealing.com/wp-content/uploads/2016/01/gal004.png)' }} data-aos="zoom-in" data-aos-delay="300"></div>
        </div>
      </div>

      {/* PREMOULDED SOLUTIONS SECTION */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 text-gray-800">
          {/* Images */}
          <div className="flex-1 flex flex-col gap-4" data-aos="fade-right">
            <Image src="https://leaksealing.com/wp-content/uploads/2015/02/coude2-300x200.jpg" alt={currentContent.premouldedElbowAlt} width={300} height={200} className="rounded-lg object-contain bg-white p-2" data-aos="zoom-in" data-aos-delay="100" />
            <Image src="https://leaksealing.com/wp-content/uploads/2016/01/premoulded-elements-300x200.jpg" alt={currentContent.premouldedBoxAlt} width={300} height={200} className="rounded-lg object-contain bg-white p-2" data-aos="zoom-in" data-aos-delay="200" />
            <Image src="https://leaksealing.com/wp-content/uploads/2015/02/prem-coude-300x219.jpg" alt={currentContent.premouldedHexAlt} width={300} height={219} className="rounded-lg object-contain bg-white p-2" data-aos="zoom-in" data-aos-delay="300" />
          </div>
          {/* Text */}
          <div className="flex-1" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-left">{currentContent.premouldedSolutionsTitle}</h2>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: currentContent.premouldedSolutionsDescription }} data-aos="fade-left" data-aos-delay="100" />
            <div className="flex gap-8 mb-4">
                          <div className="flex flex-col items-center">
                            <AnimatedCounter targetValue={160} unit="o" suffix="C" />
                            <span className="text-sm mt-1">{currentContent.maxTempPremoulded}</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <AnimatedCounter targetValue={35} suffix="" />
                            <span className="text-base font-bold">Bar</span>
                            <span className="text-sm mt-1">{currentContent.maxPressurePremoulded}</span>
                          </div>            </div>
            <p className="mb-2" data-aos="fade-left" data-aos-delay="300">{currentContent.noInjectionDescription}</p>
            <div className="flex gap-8" data-aos="fade-up" data-aos-delay="400">
              <div>
                <span className="font-bold">{currentContent.elbowStandardSizes}</span><br />
                {currentContent.elbowSizes}
              </div>
              <div>
                <span className="font-bold">{currentContent.straightStandardSizes}</span><br />
                {currentContent.straightSizes}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="zoom-in">{currentContent.getTechnicalDocumentation}</h2>
          <p className="mb-8" data-aos="fade-up">{currentContent.getTechnicalDocumentationDescription}</p>
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition" data-aos="zoom-in" data-aos-delay="200">{currentContent.contactUs}</a>
        </div>
      </div>

      
    </section>
  );
};

export default Products;
