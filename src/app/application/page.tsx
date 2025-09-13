import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Application() {
  return (
    <main className="font-sans">
      <Header />
      <section className="bg-[#394959] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-light tracking-wide mb-4">APPLICATIONS</h1>
        </div>
      </section>
      <section className="py-16 bg-white text-[#394959]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-light text-center mb-2">INDUSTRIAL APPLICATIONS</h2>
          <p className="text-2xl text-center text-gray-500 mb-8 font-light">Our proven sealing products can be applied to a wide range of leaking fluids and equipment in various industries.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">Types of Equipment</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Flanges, valve bonnets, heat exchangers, blind flanges, manholes</li>
                <li>Valve stuffing boxes and valve bodies</li>
                <li>Pinholes, cracks, welds on pipes</li>
                <li>Corroded pipes, branches, pipe fittings</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Industries Served</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>Oil refineries, petrochemical and chemical plants</li>
                <li>Thermal and nuclear power plants</li>
                <li>Steel mills, cellulose and paper mills, sugar refineries</li>
                <li>Waste treatment plants, town heating networks</li>
                <li>Any industry processing steam 24 hours a day</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
