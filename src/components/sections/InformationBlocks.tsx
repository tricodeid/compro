
import React from 'react';

const InformationBlocks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 text-black">WHICH LEAKING FLUIDS ?</h3>
            <p className="text-gray-700">
              Our proven sealing products can be applied on numerous leaking fluids such as steam, air, water, hydrocarbons, chemicals, acids….
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-black">WHICH PRESSURE AND TEMPERATURE?</h3>
            <p className="text-gray-700">
              Depending on operating parameters and subject to the technical feasibility after on site expertise, our range of products and services allow to perform leak sealing jobs on pressure up to 240 kg/cm2 and temperatures ranging from -180°C to +700°C
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-black">WHICH EQUIPMENTS ?</h3>
            <p className="text-gray-700">
              Any types of gaskets on bolted assemblies: flanges, valve bonnets, heat exchangers, blind flanges, manholes… valve stuffing boxes and valve bodies. Pinholes, cracks, welds on pipes, corroded pipes, branches and any kind of pipe fittings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-black">WHICH INDUSTRIES?</h3>
            <p className="text-gray-700">
              Oil refineries, petrochemical and chemical plants, thermal and nuclear power plants, steel mills, cellulose and paper mills, sugar refineries, waste treatment plants, town heating networks as well as any other industries processing steam 24 hours a day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationBlocks;
