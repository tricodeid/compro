'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiStatus, setApiStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [apiMessage, setApiMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);
    setApiStatus('idle');
    setApiMessage('');

    try {
      const body = new FormData();
      body.append('_wpcf7', '776');
      body.append('_wpcf7_version', '5.1.6');
      body.append('_wpcf7_locale', 'en_US');
      body.append('_wpcf7_unit_tag', 'wpcf7-f776-p744-o1');
      body.append('_wpcf7_container_post', '744');
      body.append('your-name', formData.name);
      body.append('your-email', formData.email);
      body.append('your-subject', formData.subject);
      body.append('your-message', formData.message);

      const res = await fetch('https://petroseal.com.my/wp-json/contact-form-7/v1/contact-forms/776/feedback', {
        method: 'POST',
        body,
      });

      const data = await res.json();
      if (data && data.status === 'mail_sent') {
        setApiStatus('success');
        setApiMessage(data.message || 'Your message was sent successfully. Thanks.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setApiStatus('error');
        setApiMessage(data?.message || 'Failed to send message.');
      }
    } catch (err) {
      setApiStatus('error');
      setApiMessage('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="font-sans bg-white">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <Image
            src="https://petroseal.com.my/wp-content/uploads/2015/02/avada-who-we-are-header.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 uppercase">GET IN TOUCH</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Our team of experts are ready to hear from you</p>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-gray-300"></div>

      {/* Let's Get Started Section */}
      <section 
        className="relative py-16 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://petroseal.com.my/wp-content/uploads/2015/02/banner-home.jpg)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#2b313c] bg-opacity-90">
          <Image
            src="https://petroseal.com.my/wp-content/uploads/2015/02/banner-home.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column - Let's Get Started */}
            <div className="text-white">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 uppercase">
                LET&apos;S GET STARTED
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 lg:mb-8 italic leading-relaxed">
                We&apos;re here to help answer your questions. Our experts are on hand to help inform you of every aspect regarding your topic. We take great pride in using our expertise for you and look forward to hearing from you.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-3 flex-wrap">
                <a 
                  href="https://www.facebook.com/Petroseal-Engineering-Sdn-Bhd-222898397756111/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dc2626] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://petroseal.com.my/#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dc2626] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/60986868825" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dc2626] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:sales@petroseal.com.my" 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dc2626] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-white font-medium mb-1 md:mb-2 text-xs sm:text-sm uppercase">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-white border border-gray-500 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#d61d1b] text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-1 md:mb-2 text-xs sm:text-sm uppercase">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-white border border-gray-500 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#d61d1b] text-sm md:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-1 md:mb-2 text-xs sm:text-sm uppercase">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-white border border-gray-500 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#d61d1b] text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-1 md:mb-2 text-xs sm:text-sm uppercase">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-white border border-gray-500 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-[#d61d1b] text-sm md:text-base"
                  ></textarea>
                </div>

                {apiStatus !== 'idle' && (
                  <div
                    className={`p-4 rounded-lg text-sm flex items-center justify-between ${
                      apiStatus === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-300' 
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {apiStatus === 'success' && (
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {apiStatus === 'error' && (
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="font-medium">{apiMessage}</span>
                    </div>
                    <button
                      onClick={() => setApiStatus('idle')}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className={`px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs md:text-sm uppercase transition-colors duration-300 rounded w-full md:w-auto inline-flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <svg className="animate-spin h-3 w-3 md:h-4 md:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                    )}
                    SUBMIT MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white border-t-4 border-[#dc2626]">
        <div className="container mx-auto px-4">
          {/* USA Office */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 pb-8 md:pb-12 border-b" data-aos="fade-up">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Address</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 font-semibold">USA OFFICE:</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">10762 Briar Forest Dr, Houston, TX 77042,</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">USA</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Phone</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Tel :+1 832-833-3340 (Houston )</p>
            </div>
          </div>

          {/* Malaysia Office */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 pb-8 md:pb-12 border-b" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Address</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 font-semibold">MALAYSIA OFFICE:</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">PETROSEAL ENGINEERING SDN BHD</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">36, Jalan Putra A/2 Bandar Putra,</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">24000 Kemaman Terengganu,</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">MALAYSIA</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Phone</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Tel : 609 868 6825</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Fax : 609 868 6979</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Email</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Email : sales@petroseal.com.my</p>
            </div>
          </div>

          {/* Indonesia Office */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Address</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 font-semibold">INDONESIA OFFICE:</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Komplek Ruko Siliwangi Blok D,</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Jl. Siliwangi No. 15,</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Kelurahan Depok, Kecamatan Pancoran Mas</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Kota Depok, Jawa Barat 16431, Indonesia.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Phone</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                Phone: 
                <a href="https://wa.me/6281226802362" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] hover:underline ml-1 break-all">
                  62-81226802362
                </a>
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Email</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">
                <a href="mailto:admin@petrosealindonesia.com" className="text-[#dc2626] hover:underline break-all">
                  admin@petrosealindonesia.com
                </a>
              </p>
            </div>
          </div>

          {/* Vietnam Office */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Address</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700 font-semibold">VIETNAM OFFICE:</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Block 3C – No. 973 – 30/4 Street, Ward 11, Vung</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Tau S. R. Viet Nam</p>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">VIETNAM</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#3a4a5c] mb-2 md:mb-3 lg:mb-4">Phone</h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-600">Tel : +84-64 355 4715</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

