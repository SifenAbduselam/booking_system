import React from "react";
import { Link } from "react-router-dom";
import { business } from "@/config/business";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      
      {/* Background Image (Replace URL with your chocolate cake image later) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Dark Overlay to make golden text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0D09]/95 via-[#2A1610]/85 to-[#1A0D09]/70" />

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content (Left Side) */}
          <div className="text-center lg:text-left">
            {/* Small luxury badge */}
            <div className="inline-flex items-center gap-2 mb-6 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                {business.tagline}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-bold text-[#D4AF37] mb-6 leading-tight drop-shadow-2xl">
              {business.hero.title.split(' ').slice(0, -2).join(' ')}
              <span className="block text-white italic font-light">
                {business.hero.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-[#E5C158]/90 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-lg">
              {business.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary Button - Filled Gold */}
              <Link
                to="/#cakes"
                className="bg-[#D4AF37] text-[#2A1610] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#E5C158] hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/50 text-center"
              >
                View Cakes
              </Link>
              
              {/* Secondary Button - Outlined Gold */}
              <Link
                to="/#order"
                className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#2A1610] hover:scale-105 transform transition-all duration-300 backdrop-blur-sm text-center"
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* Featured Cake Image (Right Side) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative glow behind the cake */}
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full scale-75"></div>

            {/* Cake Image Container */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury chocolate cake"
                className="w-full max-w-md h-[450px] object-cover rounded-2xl shadow-2xl border-2 border-[#D4AF37]/30 hover:scale-105 transition-transform duration-500"
                loading="eager"
              />

              {/* Floating Price Tag */}
              <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-[#2A1610] px-6 py-3 rounded-full shadow-xl font-bold text-sm uppercase tracking-wider">
                Starting at 1200 ETB
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -right-8 w-12 h-12 bg-[#2A1610]/80 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍫</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;