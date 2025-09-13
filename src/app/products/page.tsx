import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Products() {
  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-light tracking-wide mb-4">OUR PRODUCTS</h1>
        </div>
      </section>
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-2">LEAK SEALING PRODUCTS</h2>
          <p className="text-2xl text-center text-gray-500 mb-8 font-light">Find out the whole range of leak sealing items from Petroseal. Our products are designed for reliability, safety, and efficiency in industrial leak repair.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#f5f7fa] p-8 rounded shadow text-center">
              <h2 className="text-2xl font-bold mb-2">Sealing Compounds</h2>
              <p className="text-gray-700">Specially formulated for high pressure and temperature applications.</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow text-center">
              <h2 className="text-2xl font-bold mb-2">Metal Enclosures</h2>
              <p className="text-gray-700">Custom designed to fit any leaking equipment and environment.</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow text-center">
              <h2 className="text-2xl font-bold mb-2">Hydraulic Equipment</h2>
              <p className="text-gray-700">For safe and effective injection of sealing compounds.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
