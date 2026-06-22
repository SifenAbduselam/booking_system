import React from "react";
import { business } from "@/config/business";

const PriceList = () => {
  return (
    <section id="prices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            simple & transparent 
          </h2>
          <p className="text-gray-600 mt-3">
            cakes affordable for every celebration
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {business.cakes.map((cake, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {cake.name}
              </h3>

              <p className="text-rose-600 text-2xl font-bold mt-4">
                {cake.price}
              </p>

              <p className="text-gray-500 mt-3 text-sm">
               pefrect for every celebration
              </p>

              <button className="mt-6 w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition">
                order now
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PriceList;