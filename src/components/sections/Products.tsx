'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Products = () => {
  const { language } = useLanguage();

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
    },
  };

  const currentContent = translations[language];

  return (
    <section className="bg-[#394959] text-white" data-aos="fade-up">
      {/* HEADER & HERO SECTION */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/product-can.png" // Ganti dengan gambar produk asli jika ada
            alt="Sealing Compound Can"
            width={260}
            height={320}
            className="rounded-lg shadow-lg bg-white p-2"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-lg md:text-xl mb-2">{currentContent.isoCertified}</p>
          <div className="h-1 w-24 bg-white mb-6"></div>
          <p className="text-lg mb-4 font-semibold text-gray-200">{currentContent.provenFormulations}</p>
          <p className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300">{currentContent.steamWaterAirAcids}</p>
          <p className="text-2xl md:text-3xl font-bold mb-2 text-yellow-300">{currentContent.hydrocarbonsByproducts}</p>
          <p className="mt-4 mb-2">{currentContent.readyToBeInjected}</p>
          <p className="text-gray-200 mb-6">{currentContent.halfPastyDescription}</p>
          {/* Specs */}
          <div className="flex gap-8 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">-180<sup>o</sup>C</span>
              <span className="text-sm mt-1">{currentContent.minTemp}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">+700<sup>o</sup>C</span>
              <span className="text-sm mt-1">{currentContent.maxTemp}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">240</span>
              <span className="text-base font-bold">Bar</span>
              <span className="text-sm mt-1">{currentContent.maxPressure}</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES & STICK IMAGE SECTION */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Blue stick image */}
        <div className="flex justify-center">
          <Image
            src="/product-stick-blue.png" // Ganti dengan gambar stick asli jika ada
            alt="Sealing Compound Stick"
            width={180}
            height={220}
            className="rounded-lg shadow-lg bg-white p-2"
          />
        </div>
        {/* Features List */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔗</span>
            <div>
              <h3 className="font-bold text-lg">{currentContent.traceability}</h3>
              <p>{currentContent.traceabilityDescription}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📦</span>
            <div>
              <h3 className="font-bold text-lg">{currentContent.packagingShelfLife}</h3>
              <p>{currentContent.packagingShelfLifeDescription}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">⏱️</span>
            <div>
              <h3 className="font-bold text-lg">{currentContent.availability}</h3>
              <p>{currentContent.availabilityDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS SECTION */}
      <div className="bg-[#2c3846] py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">1 000 000</div>
            <div className="text-sm">{currentContent.statsCansSold}</div>
          </div>
          <div>
            <div className="text-3xl font-bold">Every 60 seconds</div>
            <div className="text-sm">{currentContent.statsEvery60Seconds}</div>
          </div>
          <div>
            <div className="text-3xl font-bold">In more than 40</div>
            <div className="text-sm">{currentContent.statsCountriesServed}</div>
          </div>
        </div>
      </div>

      {/* VIDEO PRODUCTION SECTION */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{currentContent.productionTitle}</h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-200">{currentContent.productionDescription}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: currentContent.weightControl, src: '/video-thumb1.png' },
            { title: currentContent.sealingMachine, src: '/video-thumb2.png' },
            { title: currentContent.printing, src: '/video-thumb3.png' },
            { title: currentContent.labelling, src: '/video-thumb4.png' },
          ].map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-full h-40 mb-2">
                <Image src={v.src} alt={v.title} width={220} height={120} className="rounded-lg object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-50 rounded-full p-2">
                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <span className="mt-2 text-base font-semibold">{v.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* INJECTION EQUIPMENT SECTION */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{currentContent.injectionEquipmentTitle}</h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-200">{currentContent.injectionEquipmentDescription}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { src: '/equip1.png', alt: currentContent.handPump },
            { src: '/equip2.png', alt: currentContent.pneumaticPump },
            { src: '/equip3.png', alt: currentContent.jack1Stick },
            { src: '/equip4.png', alt: currentContent.jack4Stick },
          ].map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image src={e.src} alt={e.alt} width={220} height={120} className="rounded-lg object-contain bg-white p-2 mb-2" />
            </div>
          ))}
        </div>
      </div>

      {/* PREMOULDED SOLUTIONS SECTION */}
      <div className="bg-[#2c3846] py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Images */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <Image src="/premoulded1.png" alt="Premoulded Elbow" width={120} height={120} className="rounded-lg object-contain bg-white p-2" />
            <Image src="/premoulded2.png" alt="Premoulded Box" width={120} height={120} className="rounded-lg object-contain bg-white p-2" />
            <Image src="/premoulded3.png" alt="Premoulded Hex" width={120} height={120} className="rounded-lg object-contain bg-white p-2" />
            <Image src="/premoulded4.png" alt="Premoulded Elbow 2" width={120} height={120} className="rounded-lg object-contain bg-white p-2" />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{currentContent.premouldedSolutionsTitle}</h2>
            <p className="mb-4">{currentContent.premouldedSolutionsDescription}</p>
            <div className="flex gap-8 mb-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">160<sup>o</sup>C</span>
                <span className="text-sm mt-1">{currentContent.maxTempPremoulded}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">35</span>
                <span className="text-base font-bold">Bar</span>
                <span className="text-sm mt-1">{currentContent.maxPressurePremoulded}</span>
              </div>
            </div>
            <p className="mb-2">{currentContent.noInjectionDescription}</p>
            <div className="flex gap-8">
              <div>
                <span className="font-bold">{currentContent.elbowStandardSizes}</span><br />
                1/2” to 8”
              </div>
              <div>
                <span className="font-bold">{currentContent.straightStandardSizes}</span><br />
                1/2” to 10”
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="bg-[#394959] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{currentContent.getTechnicalDocumentation}</h2>
          <p className="mb-8">{currentContent.getTechnicalDocumentationDescription}</p>
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition">{currentContent.contactUs}</a>
        </div>
      </div>

      {/* FOOTER CONTACT INFO */}
      <div className="bg-[#222] py-12 text-gray-300">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-2">{currentContent.aboutPetroseal}</h3>
            <p>{currentContent.aboutPetrosealDescription}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">{currentContent.petrosealAddress}</h3>
            <p>{currentContent.petrosealAddressLine1}<br/>{currentContent.petrosealAddressLine2}<br/>{currentContent.petrosealAddressLine3}<br/>{currentContent.petrosealTel}<br/>{currentContent.petrosealFax}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">{currentContent.fidgiGroup}</h3>
            <p>{currentContent.fidgiGroupAddressLine1}<br/>{currentContent.fidgiGroupAddressLine2}<br/>{currentContent.fidgiGroupAddressLine3}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">{currentContent.siteMap}</h3>
            <ul>
              <li>{currentContent.home}</li>
              <li>{currentContent.processes}</li>
              <li className="font-bold text-white">{currentContent.products}</li>
              <li>{currentContent.application}</li>
              <li>{currentContent.aboutUs}</li>
              <li>{currentContent.contact}</li>
              <li>{currentContent.blog}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;