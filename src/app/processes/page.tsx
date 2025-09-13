import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const DummyImageGrid = ({ count = 5 }) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
    {Array.from({ length: count }).map((_, i) => (
      <Image key={i} src="/images/9121424.jpg" alt="Process Example" width={300} height={200} className="rounded shadow object-cover w-full h-48" />
    ))}
  </div>
);

export default function Processes() {
  return (
    <main className="font-sans">
      <Header />
      {/* HEADER SECTION */}
      <section className="bg-[#394959] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">OUR PROCESSES</h1>
        </div>
      </section>

      {/* GASKETS SECTION */}
      <section className="bg-white text-[#394959] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOB ON GASKETS OF BOLTED ASSEMBLIES</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">A safe and non destructive process !</p>
          <p className="text-base md:text-lg text-center text-gray-600 max-w-4xl mx-auto mb-10 font-light">
            Depending on the size of flanges, our clamps are designed in two or more sections. The thickness of our clamp varies according the fluid pressure and its material is adapted to the fluid and temperature. Most of our clamps are machined with peripheral side lips. The caulking of these lips leads to a perfect mechanical adjusting of the clamp. Our injection valves are positioned (placed) <span className="text-blue-700 font-semibold">between</span> stud/bolts to guarantee an homogeneous and complete compound filling.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">Stiffeners</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">With the view to limiting even more the stress on the flanges’ stud/bolts during the injection stage, all our clamps are designed with safety retainers called “stiffeners”.</p>
          <DummyImageGrid count={5} />

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">GASKET OF FLAT FACE FLANGES</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">In case of a leak on the gasket of flat face flanges, the sealing is obtained by injecting a clamp machined with a central groove and by installing and injecting ring adaptors on all stud/bolts.</p>
          <DummyImageGrid count={5} />
        </div>
      </section>

      {/* PIPES SECTION */}
      <section className="bg-white text-[#394959] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOB ON PIPES</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">The pipe is covered with a metal enclosure which is progressively filled up with our sealing compound.</p>

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">WITH PROTECTIVE SLEEVE</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">In order to limit the potential risks of compound intrusion into the pipe line, a protective sleeve could be placed over the leaking point before installing and injecting the metal enclosure.</p>
          <DummyImageGrid count={5} />

          <h3 className="text-2xl md:text-3xl font-bold text-left mb-2 mt-12">BACK CLAMP</h3>
          <p className="text-lg md:text-xl text-left text-gray-600 mb-4 font-light">When the leak is located on the weld seam, we foresee its degradation and further potential disconnection over time by systematically designing a strong back clamp device, either connected to the metal box itself or separate.</p>
          <DummyImageGrid count={5} />
        </div>
      </section>

      {/* PREMOULDED BOX SECTION */}
      <section className="bg-[#f5f7fa] text-[#394959] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">PREMOULDED BOX</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">The leaking pipes showing a high corrosion level and very thin residual thicknesses will be dealt by means of a “premoulded box”, without injecting sealing compound.</p>
          <DummyImageGrid count={5} />
          <p className="text-xl text-center text-gray-600 mt-4 font-light">Whatever the pipe conditions are, the inside of our metal enclosures are fully “injected” or “premoulded” so that no void capacity is created !</p>
        </div>
      </section>

      {/* VALVE GLAND PACKINGS SECTION */}
      <section className="bg-white text-[#394959] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOB ON VALVE GLAND PACKINGS</h2>
          <p className="text-xl md:text-2xl text-center text-gray-500 mb-6 font-light">A leak located on a valve stuffing box is usually dealt with a G Clamp placed around the packing box area. Then, a drill is operated all through the G Clamp down to the packing. This “break through” method creates a channel for injecting our sealing compound.</p>
          <p className="text-xl text-center text-gray-600 mb-4 font-light">If our on-site assessment shows that the nuts of the packing gland flange are faulty or damaged, strengthening metal blocks will be installed before injecting sealing compound.</p>
          <p className="text-xl text-center text-gray-600 mb-4 font-light">Petroseal enjoys a wide range of standard and customised G Clamps, even for jobs on hazardous leaking fluids.</p>
          <DummyImageGrid count={5} />
        </div>
      </section>

      {/* STATIC DEVICES SECTION */}
      <section className="bg-[#f5f7fa] text-[#394959] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-2">LEAK SEALING JOBS ON OTHER STATIC DEVICES</h2>
          <DummyImageGrid count={7} />
        </div>
      </section>
      <Footer />
    </main>
  );
}