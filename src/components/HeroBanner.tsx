import React from "react";
import { Link } from "react-router-dom";
import HeroImage from '../assets/image/welcome-to-bakersly.webp';

const HeroBanner = () => {
  return (
    <section
      // Background gradient and padding for spacing
      className="relative bg-gradient-to-br from-pink-50 to-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: single column on small, two columns on large */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to
              <span className="block text-rose-600">Bakersly</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Discover delicious, healthy recipes and inspiring stories that
              celebrate the joy of natural, wholesome desserts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="#"
                className="border-2 border-rose-600 bg-rose-600 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-700 hover:border-rose-700 transition-colors duration-200 text-center"
              >
                Explore Recipes
              </Link>
              <Link
                to="#"
                className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-600 hover:text-white transition-colors duration-200 text-center"
              >
                Read Blogs
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <img
              src={HeroImage}
              alt="Delicious desserts welcoming you to Bakersly"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              loading="eager"
            />
            
            {/* Decorative emoji elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center opacity-80">
              <span className="text-2xl">🍓</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center opacity-60">
              <span className="text-lg">🫐</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
