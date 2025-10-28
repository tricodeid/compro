'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const AskExpert = () => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showGlobalError, setShowGlobalError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const content = {
    en: {
      title: 'QUESTIONS ABOUT OUR SERVICES? ASK OUR EXPERTS.',
      button: 'ASK AN EXPERT',
      modalTitle: "Ask One of Our Experts!",
      modalDescription: "We're here to help answer your questions. Judicial matters can be complicated, our experts are on hand to help inform you of every aspect regarding your topic.",
      nameLabel: 'Your Name (required)',
      emailLabel: 'Your Email (required)',
      subjectLabel: 'Subject',
      messageLabel: 'Your Message',
      sendButton: 'SEND',
      errorRequired: 'Please fill in the required field.',
      errorEmail: 'Please enter a valid email address.',
      errorGlobal: 'VALIDATION ERRORS OCCURRED. PLEASE CONFIRM THE FIELDS AND SUBMIT IT AGAIN.',
      sending: 'SENDING...',
    },
    id: {
      title: 'PERTANYAAN TENTANG LAYANAN KAMI? TANYA AHLI KAMI.',
      button: 'TANYA AHLI',
      modalTitle: "Tanyakan Salah Satu Ahli Kami!",
      modalDescription: "Kami di sini untuk membantu menjawab pertanyaan Anda. Masalah hukum bisa rumit, tim ahli kami siap membantu memberi informasi mengenai setiap aspek topik Anda.",
      nameLabel: 'Nama Anda (wajib)',
      emailLabel: 'Email Anda (wajib)',
      subjectLabel: 'Subjek',
      messageLabel: 'Pesan Anda',
      sendButton: 'KIRIM',
      errorRequired: 'Harap isi field yang wajib diisi.',
      errorEmail: 'Harap masukkan alamat email yang valid.',
      errorGlobal: 'TERJADI ERROR VALIDASI. HARAP KONFIRMASI FIELD DAN KIRIM LAGI.',
      sending: 'MENGIRIM...',
    },
  };

  const currentContent = content[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = currentContent.errorRequired;
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = currentContent.errorRequired;
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = currentContent.errorEmail;
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = currentContent.errorRequired;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = currentContent.errorRequired;
      isValid = false;
    }

    setErrors(newErrors);
    setShowGlobalError(!isValid);
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setShowSpinner(true);
    setShowGlobalError(false);

    try {
      // Submit to Contact Form 7 API
      const formDataToSend = new FormData();
      formDataToSend.append('your-name', formData.name);
      formDataToSend.append('your-email', formData.email);
      formDataToSend.append('your-subject', formData.subject);
      formDataToSend.append('your-message', formData.message);

      const response = await fetch('https://petroseal.com.my/wp-json/contact-form-7/v1/contact-forms/661/feedback', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Success - close modal and reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({ name: '', email: '', subject: '', message: '' });
        setShowSpinner(false);
        handleCloseModal();
      } else {
        // Show error message
        setShowGlobalError(true);
        setShowSpinner(false);
      }
    } catch (error) {
      // Show error message
      console.log('Form submission error:', error);
      setShowGlobalError(true);
      setShowSpinner(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
    setShowGlobalError(false);
    setShowSpinner(false);
    setErrors({ name: '', email: '', subject: '', message: '' });
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const closeModal = () => {
    handleCloseModal();
  };

  return (
    <>
      <section className="py-16 md:py-20 bg-[#3a4a5c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left max-w-3xl"
              data-aos="fade-right"
            >
              {currentContent.title}
            </h2>
            <button 
              onClick={openModal}
              className="px-10 py-4 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-lg transition-colors duration-300 whitespace-nowrap"
              data-aos="fade-left"
            >
              {currentContent.button}
            </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <>
          {/* Backdrop with fade effect */}
          <div 
            className={`fixed inset-0 bg-black z-[9998] transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-50'}`}
            onClick={closeModal}
            data-aos="fade"
          />
          
          {/* Modal Content with slide down effect */}
          <div 
            className={`fixed inset-0 flex items-center justify-center z-[9999] p-4 pointer-events-none ${isClosing ? '' : ''}`}
          >
            <div 
              className={`bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto ${isClosing ? 'animate-fadeOutUp' : 'animate-fadeInDown'}`}
              onClick={(e) => e.stopPropagation()}
              data-aos="fade-down"
              data-aos-duration="400"
            >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">{currentContent.modalTitle}</h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row">
              {/* Left Section - Image and Description */}
              <div className="md:w-1/2 bg-gray-50 p-8">
                <div className="mb-6 relative w-full h-64">
                  <Image
                    src="https://petroseal.com.my/wp-content/uploads/2015/02/shaking-hands.png"
                    alt="Expert consultation"
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {currentContent.modalDescription}
                </p>
              </div>

              {/* Right Section - Contact Form */}
              <div className="md:w-1/2 p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {currentContent.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#dc2626] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {currentContent.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#dc2626] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {currentContent.subjectLabel}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#dc2626] ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {currentContent.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#dc2626] resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold rounded transition-colors duration-300 flex items-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting && (
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {isSubmitting ? currentContent.sending : currentContent.sendButton}
                    </button>
                  </div>

                  {/* Global Error Message with AOS animation */}
                  {showGlobalError && (
                    <div 
                      className="bg-red-50 border-2 border-red-500 rounded p-4 flex items-start gap-3 relative"
                      data-aos="fade-up"
                      data-aos-duration="400"
                    >
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-700 text-sm flex-1">{currentContent.errorGlobal}</p>
                      <button 
                        onClick={() => setShowGlobalError(false)}
                        className="text-red-500 hover:text-red-700 text-xl font-bold flex-shrink-0"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AskExpert;

