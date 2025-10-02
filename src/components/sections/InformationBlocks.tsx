'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const InformationBlocks = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      fluidTitle: "WHICH LEAKING FLUIDS ?",
      fluidText: "Our proven sealing products can be applied on numerous leaking fluids such as steam, air, water, hydrocarbons, chemicals, acids….",
      pressureTempTitle: "WHICH PRESSURE AND TEMPERATURE?",
      pressureTempText: "Depending on operating parameters and subject to the technical feasibility after on site expertise, our range of products and services allow to perform leak sealing jobs on pressure up to 240 kg/cm2 and temperatures ranging from -180°C to +700°C",
      equipmentsTitle: "WHICH EQUIPMENTS ?",
      equipmentsText: "Any types of gaskets on bolted assemblies: flanges, valve bonnets, heat exchangers, blind flanges, manholes… valve stuffing boxes and valve bodies. Pinholes, cracks, welds on pipes, corroded pipes, branches and any kind of pipe fittings.",
      industriesTitle: "WHICH INDUSTRIES?",
      industriesText: "Oil refineries, petrochemical and chemical plants, thermal and nuclear power plants, steel mills, cellulose and paper mills, sugar refineries, waste treatment plants, town heating networks as well as any other industries processing steam 24 hours a day",
    },
    id: {
      fluidTitle: "CAIRAN BOCOR APA SAJA?",
      fluidText: "Produk penyegel kami yang terbukti dapat diterapkan pada berbagai cairan bocor seperti uap, udara, air, hidrokarbon, bahan kimia, asam….",
      pressureTempTitle: "TEKANAN DAN SUHU BERAPA?",
      pressureTempText: "Tergantung pada parameter operasi dan kelayakan teknis setelah keahlian di lokasi, berbagai produk dan layanan kami memungkinkan untuk melakukan pekerjaan penyegelan kebocoran pada tekanan hingga 240 kg/cm2 dan suhu mulai dari -180°C hingga +700°C",
      equipmentsTitle: "PERALATAN APA SAJA?",
      equipmentsText: "Segala jenis gasket pada rakitan baut: flensa, bonet katup, penukar panas, flensa buta, lubang orang… kotak isian katup dan badan katup. Lubang jarum, retakan, lasan pada pipa, pipa berkarat, cabang, dan segala jenis fitting pipa.",
      industriesTitle: "INDUSTRI APA SAJA?",
      industriesText: "Kilang minyak, pabrik petrokimia dan kimia, pembangkit listrik termal dan nuklir, pabrik baja, pabrik selulosa dan kertas, pabrik gula, pabrik pengolahan limbah, jaringan pemanas kota serta industri lain yang memproses uap 24 jam sehari",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 text-black">{currentContent.fluidTitle}</h3>
            <p className="text-sm sm:text-base text-gray-700">
              {currentContent.fluidText}
            </p>
          </div>
          <div data-aos="fade-left">
            <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 text-black">{currentContent.pressureTempTitle}</h3>
            <p className="text-sm sm:text-base text-gray-700">
              {currentContent.pressureTempText}
            </p>
          </div>
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 text-black">{currentContent.equipmentsTitle}</h3>
            <p className="text-sm sm:text-base text-gray-700">
              {currentContent.equipmentsText}
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-2 text-black">{currentContent.industriesTitle}</h3>
            <p className="text-sm sm:text-base text-gray-700">
              {currentContent.industriesText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationBlocks;