'use client';

import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://petroseal.com.my/wp-content/uploads/2015/02/banner-home.jpg)',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h1>
            <div className="w-24 h-0.5 bg-white mx-auto mb-4"></div>
            <p className="text-lg md:text-xl">Our team of experts are ready to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://petroseal.com.my/wp-content/uploads/2015/02/banner-home.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-[#2b313c] bg-opacity-90"></div>
        
        {/* Background with world map pattern and glowing elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Glowing light elements */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-green-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Let's Get Started */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                LET&apos;S GET STARTED
              </h2>
              <p className="text-lg mb-8 italic leading-relaxed text-white">
                We&apos;re here to help answer your questions. Our experts are on hand to help inform you of every aspect regarding your topic. We take great pride in using our expertise for you and look forward to hearing from you.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/Petroseal-Engineering-Sdn-Bhd-222898397756111/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#d61d1b] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#d61d1b] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/60986868825" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#d61d1b] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:sales@petroseal.com.my" 
                  className="w-12 h-12 bg-[#d61d1b] hover:bg-[#b91c1c] flex items-center justify-center rounded transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-[#d61d1b] rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-[#d61d1b] rounded"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-[#d61d1b] rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-[#d61d1b] rounded"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#d61d1b] hover:bg-[#b91c1c] text-white font-bold transition-colors duration-300 rounded"
                  >
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b" data-aos="fade-up">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Address</h3>
              <p className="text-gray-700 font-semibold">USA OFFICE:</p>
              <p className="text-gray-600">10762 Briar Forest Dr, Houston, TX 77042,</p>
              <p className="text-gray-600">USA</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Phone</h3>
              <p className="text-gray-600">Tel :+1 832-833-3340 (Houston )</p>
            </div>
          </div>

          {/* Malaysia Office */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Address</h3>
              <p className="text-gray-700 font-semibold">MALAYSIA OFFICE:</p>
              <p className="text-gray-600">PETROSEAL ENGINEERING SDN BHD</p>
              <p className="text-gray-600">36, Jalan Putra A/2 Bandar Putra,</p>
              <p className="text-gray-600">24000 Kemaman Terengganu,</p>
              <p className="text-gray-600">MALAYSIA</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Phone</h3>
              <p className="text-gray-600">Tel : 609 868 6825</p>
              <p className="text-gray-600">Fax : 609 868 6979</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Email</h3>
              <p className="text-gray-600">Email : sales@petroseal.com.my</p>
            </div>
          </div>

          {/* Indonesia Office */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Address</h3>
              <p className="text-gray-700 font-semibold">INDONESIA OFFICE:</p>
              <p className="text-gray-600">Jl. Green Ville Raya, Blok A,No.7</p>
              <p className="text-gray-600">Jakarta Barat 11510, Indonesia</p>
              <p className="text-gray-600">INDONESIA</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Phone</h3>
              <p className="text-gray-600">Tel : +62 812-8411-7300 (Jakarta)</p>
            </div>
          </div>

          {/* Vietnam Office */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Address</h3>
              <p className="text-gray-700 font-semibold">VIETNAM OFFICE:</p>
              <p className="text-gray-600">Block 3C – No. 973 – 30/4 Street, Ward 11, Vung</p>
              <p className="text-gray-600">Tau S. R. Viet Nam</p>
              <p className="text-gray-600">VIETNAM</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <svg className="w-16 h-16 text-[#dc2626]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3a4a5c] mb-4">Phone</h3>
              <p className="text-gray-600">Tel : +84-64 355 4715</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

