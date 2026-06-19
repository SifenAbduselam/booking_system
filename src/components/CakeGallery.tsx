import React from "react";
import { business } from "@/config/business";

const CakeGallery = () => {
  return (
    <section id="cakes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Signature Cakes
          </h2>
          <p className="text-gray-600 mt-3">
            Handcrafted luxury cakes made for unforgettable moments
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {business.cakes.map((cake, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >

              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                <span className="text-4xl">🍰</span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {cake.name}
                </h3>

                <p className="text-rose-600 font-bold mt-2">
                  {cake.price}
                </p>

                <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition">
                  Order Now
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CakeGallery;