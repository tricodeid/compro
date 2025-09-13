
import React from 'react';

const NewsEvents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">NEWS & EVENTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">New Partnership Announced</h3>
            <p className="text-gray-600 text-sm mb-4">Date: September 1, 2025</p>
            <p className="text-gray-700">Petroseal is proud to announce a new strategic partnership with a leading industrial solutions provider to expand our reach and services.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Upcoming Industry Expo</h3>
            <p className="text-gray-600 text-sm mb-4">Date: October 15, 2025</p>
            <p className="text-gray-700">Join us at the annual Industrial Solutions Expo where we will be showcasing our latest leak sealing technologies.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Successful Project Completion</h3>
            <p className="text-gray-600 text-sm mb-4">Date: August 20, 2025</p>
            <p className="text-gray-700">We successfully completed a challenging leak sealing project for a major petrochemical plant, ensuring minimal downtime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
