'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "CONTACT US",
      getInTouch: "Get in Touch",
      getInTouchDescription: "Have questions or need assistance? Fill out the form below or reach us directly.",
      address: "Address:",
      addressValue: "123 Industrial Park, City, Country",
      phone: "Phone:",
      phoneValue: "+1 (123) 456-7890",
      email: "Email:",
      emailValue: "info@petroseal.com",
      mapPlaceholder: "Map Placeholder",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendMessage: "Send Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
    },
    id: {
      title: "HUBUNGI KAMI",
      getInTouch: "Hubungi Kami",
      getInTouchDescription: "Punya pertanyaan atau butuh bantuan? Isi formulir di bawah ini atau hubungi kami secara langsung.",
      address: "Alamat:",
      addressValue: "123 Kawasan Industri, Kota, Negara",
      phone: "Telepon:",
      phoneValue: "+1 (123) 456-7890",
      email: "Email:",
      emailValue: "info@petroseal.com",
      mapPlaceholder: "Placeholder Peta",
      nameLabel: "Nama",
      emailLabel: "Email",
      messageLabel: "Pesan",
      sendMessage: "Kirim Pesan",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Email Anda",
      messagePlaceholder: "Pesan Anda",
    },
  };

  const currentContent = translations[language];

  return (
    <section className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="zoom-in">{currentContent.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-4">{currentContent.getInTouch}</h3>
            <p className="text-gray-700 mb-4">{currentContent.getInTouchDescription}</p>
            <p className="text-gray-700 mb-2"><strong>{currentContent.address}</strong> {currentContent.addressValue}</p>
            <p className="text-gray-700 mb-2"><strong>{currentContent.phone}</strong> {currentContent.phoneValue}</p>
            <p className="text-gray-700 mb-4"><strong>{currentContent.email}</strong> {currentContent.emailValue}</p>
            <div className="w-full h-64 bg-gray-300 rounded-md flex items-center justify-center text-gray-600">{currentContent.mapPlaceholder}</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-left">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">{currentContent.nameLabel}</label>
                <input type="text" id="name" placeholder={currentContent.namePlaceholder} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{currentContent.emailLabel}</label>
                <input type="email" id="email" placeholder={currentContent.emailPlaceholder} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{currentContent.messageLabel}</label>
                <textarea id="message" rows={4} placeholder={currentContent.messagePlaceholder} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button type="submit" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  {currentContent.sendMessage}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;