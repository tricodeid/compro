'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import AboutPetroseal from '@/components/sections/AboutPetroseal';

export default function ApplicationPage() {
  const { language } = useLanguage();

  const translations = {
    en: {
      heroTitle: "ARE YOU IN CHARGE OF MAINTENANCE?",
      heroSubtitle: "Whether you are a plant maintenance manager or a mechanical maintenance contractor, Petroseal is ready to help you to set up and develop your own leak sealing organization.",
      contactUs: "CONTACT US",
      learnMore: "LEARN MORE",
      experienceTitle: "PETROSEAL IS YOUR INSURANCE TO BENEFIT A 40 YEAR EXPERIENCE IN LEAK SEALING WITH PROVEN PROCEDURES AND UNRIVALLED PRODUCTS... UNANIMOUSLY RECOGNIZED WORLDWIDE !",
      feature1Title: "A MASTERED IMPLEMENTATION",
      feature1Text: "Acquired through a complete training programme",
      feature2Title: "THE INTEGRATION OF NEW SKILLS",
      feature2Text: "Thanks to our theoretical and practical training stages",
      feature3Title: "A COMMITMENT TO QUALITY",
      feature3Text: "By benefiting our long experience, you acquire a proven know-how and high quality sealing components",
      feature4Title: "CONSULTING SERVICES",
      feature4Text: "Get all the required information to advise and inform your clients before, during and after the job performance.",
      advantagesTitle: "WHAT ARE THE ADVANTAGES?",
      advantage1Title: "A FULL TRAINING",
      advantage1Text: "Becoming an authorised Petroseal Leaksealer, is having the guarantee of receiving a full training, both theoretical and practical to our Leaksealing solutions application.",
      advantage2Title: "A CONTINUOUS ASSISTANCE",
      advantage2Text: "Our Sales Engineers bring a continuous technical and commercial assistance to our Leaksealer partners worldwide.",
      advantage3Title: "TECHNICAL EXPERTISE",
      advantage3Text: "Petroseal Label allows every one involved in the Leaksealing process (prescriber, ordering person, client), to get guarantees on the technical skills of the service and job performance.",
      advantageText: "Moreover, as an authorized Petroseal Leaksealer, you also enjoy a full range of services related to this activity.",
      howTitle: "HOW?",
      howText1: "By following our full training, you will be able to:",
      howList1: "Manufacture, yourself or by a third party, the metallic sealing enclosures according to the calculations and drawings supplied by PETROSEAL.",
      howList2: "Keep an adequate stock of sealing consumables (compound, injection valves and fittings..)",
      howList3: "Get full and diverse hydraulic injection equipments, made by Petroseal.",
      howList4: "Maintain your staff expertise thanks to our theoretical and practical training. Please note that retraining sessions are also available.",
      howList5: "Perform Leaksealing jobs by yourself with the assistance of Petroseal sales engineers.",
      howText2: "Theoretical courses are taken care by our Sales Engineers in a classroom. The practical step is performed onsite by a high skilled Leaksealing specialist who has many years of experience working at Petroseal.",
      whereTitle: "WHERE ?",
      whereText1: "At your place:",
      whereText2: "Supervised by our",
      whereText3: "Leaksealer expert",
      whereText4: ", your operators would put into practice the strong theoretical bases they have studied by performing – onsite – Leaksealing jobs on real leakage previously pinpointed by you. It is also possible to show our technology on a test bench inside a workshop (supplied with steam or water) made by you following specifications we would have agreed on.",
      whereText5: "At our place:",
      whereText6: "Petroseal owns an electric steam boiler which produces 25 bars pressure and 200°C temperature. Our boiler is connected to a test bench on which we can deal with lots of cases of leaky static equipment, such as: Leakage on flanges and valve bonnet gaskets, on valve gland packing, on pipes (elbows, straight parts, tapping)",
      whereText7: "So, join in! Just contact our Exports team by phone at",
      joinUs: "Join us",
    },
    id: {
      heroTitle: "APAKAH ANDA BERTANGGUNG JAWAB ATAS PEMELIHARAAN?",
      heroSubtitle: "Baik Anda seorang manajer pemeliharaan pabrik atau kontraktor pemeliharaan mekanis, Petroseal siap membantu Anda untuk mendirikan dan mengembangkan organisasi penyegelan kebocoran Anda sendiri.",
      contactUs: "HUBUNGI KAMI",
      learnMore: "PELAJARI LEBIH LANJUT",
      experienceTitle: "PETROSEAL ADALAH JAMINAN ANDA UNTUK MENDAPATKAN MANFAAT DARI PENGALAMAN 40 TAHUN DALAM PENYEGELAN KEBOCORAN DENGAN PROSEDUR YANG TERBUKTI DAN PRODUK YANG TAK TERTANDINGI... DIAKUI SECARA BULAT DI SELURUH DUNIA!",
      feature1Title: "IMPLEMENTASI YANG DIKUASAI",
      feature1Text: "Diperoleh melalui program pelatihan yang lengkap",
      feature2Title: "INTEGRASI KETERAMPILAN BARU",
      feature2Text: "Berkat tahap pelatihan teoretis dan praktis kami",
      feature3Title: "KOMITMEN TERHADAP KUALITAS",
      feature3Text: "Dengan memanfaatkan pengalaman panjang kami, Anda memperoleh pengetahuan yang terbukti dan komponen penyegelan berkualitas tinggi",
      feature4Title: "LAYANAN KONSULTASI",
      feature4Text: "Dapatkan semua informasi yang diperlukan untuk memberi saran dan menginformasikan klien Anda sebelum, selama, dan setelah pelaksanaan pekerjaan.",
      advantagesTitle: "APA KEUNTUNGANNYA?",
      advantage1Title: "PELATIHAN LENGKAP",
      advantage1Text: "Menjadi Leaksealer resmi Petroseal, berarti memiliki jaminan menerima pelatihan lengkap, baik teoretis maupun praktis untuk aplikasi solusi Leaksealing kami.",
      advantage2Title: "BANTUAN BERKELANJUTAN",
      advantage2Text: "Insinyur Penjualan kami memberikan bantuan teknis dan komersial berkelanjutan kepada mitra Leaksealer kami di seluruh dunia.",
      advantage3Title: "KEAHLIAN TEKNIS",
      advantage3Text: "Label Petroseal memungkinkan setiap orang yang terlibat dalam proses Leaksealing (pemberi resep, pemesan, klien), untuk mendapatkan jaminan atas keterampilan teknis layanan dan kinerja pekerjaan.",
      advantageText: "Selain itu, sebagai Leaksealer resmi Petroseal, Anda juga menikmati berbagai layanan terkait aktivitas ini.",
      howTitle: "BAGAIMANA?",
      howText1: "Dengan mengikuti pelatihan lengkap kami, Anda akan dapat:",
      howList1: "Memproduksi, sendiri atau oleh pihak ketiga, penutup penyegelan logam sesuai dengan perhitungan dan gambar yang disediakan oleh PETROSEAL.",
      howList2: "Menyimpan stok bahan habis pakai penyegelan yang memadai (senyawa, katup injeksi, dan fiting..)",
      howList3: "Dapatkan peralatan injeksi hidrolik yang lengkap dan beragam, buatan Petroseal.",
      howList4: "Menjaga keahlian staf Anda berkat pelatihan teoretis dan praktis kami. Perlu diketahui bahwa sesi pelatihan ulang juga tersedia.",
      howList5: "Lakukan pekerjaan Leaksealing sendiri dengan bantuan insinyur penjualan Petroseal.",
      howText2: "Kursus teoretis ditangani oleh Insinyur Penjualan kami di ruang kelas. Langkah praktis dilakukan di lokasi oleh spesialis Leaksealing yang sangat terampil yang memiliki pengalaman bertahun-tahun bekerja di Petroseal.",
      whereTitle: "DI MANA?",
      whereText1: "Di tempat Anda:",
      whereText2: "Diawasi oleh",
      whereText3: "ahli Leaksealer",
      whereText4: "kami, operator Anda akan mempraktikkan dasar-dasar teoretis yang kuat yang telah mereka pelajari dengan melakukan – di lokasi – pekerjaan Leaksealing pada kebocoran nyata yang sebelumnya Anda tunjukkan. Dimungkinkan juga untuk menunjukkan teknologi kami di bangku tes di dalam bengkel (disuplai dengan uap atau air) yang Anda buat mengikuti spesifikasi yang telah kita sepakati.",
      whereText5: "Di tempat kami:",
      whereText6: "Petroseal memiliki ketel uap listrik yang menghasilkan tekanan 25 bar dan suhu 200°C. Ketel kami terhubung ke bangku tes di mana kami dapat menangani banyak kasus peralatan statis yang bocor, seperti: Kebocoran pada gasket flensa dan tutup katup, pada pengepakan kelenjar katup, pada pipa (siku, bagian lurus, sadapan)",
      whereText7: "Jadi, bergabunglah! Cukup hubungi tim Ekspor kami melalui telepon di",
      joinUs: "Bergabunglah dengan kami",
    },
  };

  const currentContent = translations[language];

  return (
    <main className="font-sans">
      <Header />
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://leaksealing.com/wp-content/uploads/2015/10/image-appilcateur.png)' }} data-aos="fade-in">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{currentContent.heroTitle}</h1>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto">{currentContent.heroSubtitle}</p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-900 transition">{currentContent.contactUs}</a>
            <a href="#learn" className="bg-white text-blue-900 px-6 py-2 rounded hover:bg-blue-100 transition">{currentContent.learnMore}</a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & 4 FEATURES SECTION */}
      <section className="py-16 bg-white text-[#222]" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-10">{currentContent.experienceTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center mb-2 text-2xl">✔️</div>
              <h3 className="font-bold mb-1">{currentContent.feature1Title}</h3>
              <p className="text-gray-600 text-sm">{currentContent.feature1Text}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center mb-2 text-2xl">🛠️</div>
              <h3 className="font-bold mb-1">{currentContent.feature2Title}</h3>
              <p className="text-gray-600 text-sm">{currentContent.feature2Text}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center mb-2 text-2xl">✔️</div>
              <h3 className="font-bold mb-1">{currentContent.feature3Title}</h3>
              <p className="text-gray-600 text-sm">{currentContent.feature3Text}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center mb-2 text-2xl">🤍</div>
              <h3 className="font-bold mb-1">{currentContent.feature4Title}</h3>
              <p className="text-gray-600 text-sm">{currentContent.feature4Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="bg-white pb-0" data-aos="fade-up">
        <div className="w-full h-64 md:h-80 relative">
          <Image src="https://leaksealing.com/wp-content/uploads/2015/10/image-appilcateur.png" alt="Workers" fill className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-10 mt-10">{currentContent.advantagesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-2 text-2xl">🎓</div>
              <h3 className="font-bold mb-1">{currentContent.advantage1Title}</h3>
              <p className="text-gray-600 text-sm">{currentContent.advantage1Text}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-2 text-2xl">🛟</div>
              <h3 className="font-bold mb-1">{currentContent.advantage2Title}</h3>
              <p className="text-gray-600 text-sm">{currentContent.advantage2Text}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-2 text-2xl">⚙️</div>
              <h3 className="font-bold mb-1">{currentContent.advantage3Title}</h3>
              <p className="text-gray-600 text-sm">{currentContent.advantage3Text}</p>
            </div>
          </div>
          <p className="text-center text-gray-600 text-lg mb-8">{currentContent.advantageText}</p>
        </div>
      </section>

      {/* HOW SECTION */}
      <section className="py-16 bg-white text-[#222]" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">{currentContent.howTitle}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">{currentContent.howText1}</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>{currentContent.howList1}</li>
              <li>{currentContent.howList2}</li>
              <li>{currentContent.howList3}</li>
              <li>{currentContent.howList4}</li>
              <li>{currentContent.howList5}</li>
            </ul>
            <p>{currentContent.howText2}</p>
          </div>
        </div>
      </section>

      {/* WHERE SECTION */}
      <section className="py-16 bg-white text-[#222]" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8">{currentContent.whereTitle}</h2>
          <div className="max-w-5xl mx-auto mb-8">
            <p className="mb-6"><span className="text-blue-800 font-bold">{currentContent.whereText1}</span> {currentContent.whereText2} <span className="italic">{currentContent.whereText3}</span>{currentContent.whereText4}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Image src="/application-where1.jpg" alt="Where 1" width={250} height={180} className="rounded object-cover w-full h-32 md:h-40" />
              <Image src="/application-where2.jpg" alt="Where 2" width={250} height={180} className="rounded object-cover w-full h-32 md:h-40" />
              <Image src="/application-where3.jpg" alt="Where 3" width={250} height={180} className="rounded object-cover w-full h-32 md:h-40" />
              <Image src="/application-where4.jpg" alt="Where 4" width={250} height={180} className="rounded object-cover w-full h-32 md:h-40" />
            </div>
            <p className="mb-6"><span className="text-blue-800 font-bold">{currentContent.whereText5}</span> {currentContent.whereText6}</p>
            <p>{currentContent.whereText7} <span className="text-blue-800 font-bold">+33 2 35 55 04 70</span> or fulfil our online form, below:</p>
          </div>
          <div className="flex justify-center">
            <a href="#join" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-16 rounded text-lg transition">{currentContent.joinUs}</a>
          </div>
        </div>
      </section>

      <AboutPetroseal />
      <Footer />
    </main>
  );
}
