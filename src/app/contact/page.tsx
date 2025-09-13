import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-light tracking-wide mb-4">CONTACT</h1>
        </div>
      </section>
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-2">CONTACT US</h2>
          <p className="text-2xl text-center text-gray-500 mb-8 font-light">Get in touch with Petroseal for more information about our products and services.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <ul className="text-gray-700 text-lg">
                <li>B.P. 104, F-76430 Saint-Romain-De-Colbosc, France</li>
                <li>Tel: +33 2 35 55 04 70</li>
                <li>Fax: +33 2 35 20 67 26</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Form</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-3 py-2" />
                <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded px-3 py-2" />
                <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded px-3 py-2" rows={4}></textarea>
                <button type="submit" className="bg-[#394959] text-white px-6 py-2 rounded font-bold">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
