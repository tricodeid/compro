import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Blog() {
  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-light tracking-wide mb-4">BLOG & NEWS</h1>
        </div>
      </section>
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-2">LATEST ARTICLES</h2>
          <p className="text-2xl text-center text-gray-500 mb-8 font-light">Read the latest news, updates, and insights from Petroseal about industrial leak sealing technology and best practices.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#f5f7fa] p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">How to Seal Industrial Leaks Without Shutdown</h2>
              <p className="text-gray-700">Discover the proven methods and products for online leak sealing in critical industries.</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Safety and Quality in Leak Sealing</h2>
              <p className="text-gray-700">Learn about our commitment to safety and quality in every project we undertake.</p>
            </div>
            <div className="bg-[#f5f7fa] p-8 rounded shadow">
              <h2 className="text-2xl font-bold mb-2">Innovations in Sealing Compounds</h2>
              <p className="text-gray-700">Explore the latest advancements in sealing technology from Petroseal.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
