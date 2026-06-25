import React from "react";
import { Link } from "react-router-dom";
import { business } from "@/config/business";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* ===== BACKGROUND IMAGE ===== */}
      {/* Replace this URL with your own chocolate cake image later! */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* ===== DARK CHOCOLATE OVERLAY ===== */}
      {/* Multiple layers for that rich, moody feel from your reference image */}
      <div className="absolute inset-0 bg-[#1A0D09]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0D09]/90 via-[#1A0D09]/60 to-[#1A0D09]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D09] via-transparent to-[#1A0D09]/40" />

      {/* ===== DECORATIVE GOLD CORNER ACCENTS ===== */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/30 hidden lg:block" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-[#D4AF37]/30 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-[#D4AF37]/30 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]/30 hidden lg:block" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        
        {/* Small decorative sparkle label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles size={16} className="text-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
            Handcrafted Luxury
          </span>
          <Sparkles size={16} className="text-[#D4AF37]" />
        </div>

        {/* Gold decorative line */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />

        {/* Main Title — Large, Elegant, Golden */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#D4AF37] leading-[1.1] mb-6 drop-shadow-2xl">
          {business.hero.title.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-white italic font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {business.hero.title.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {business.hero.subtitle}
        </p>

        {/* Gold decorative line */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-10" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          
          {/* Primary Button — Solid Gold */}
          <Link
            to="/#cakes"
            className="group bg-[#D4AF37] text-[#1A0D09] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#E5C158] transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/40 flex items-center gap-2"
          >
            View Our Cakes
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Button — Gold Outline */}
          <Link
            to="/book"
            className="group border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#1A0D09] transition-all duration-300 flex items-center gap-2"
          >
            Book Now
          </Link>
        </div>

        {/* Bottom Stats / Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-[#D4AF37] text-3xl font-bold">500+</p>
            <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">Cakes Delivered</p>
          </div>
          <div className="w-[1px] h-12 bg-[#D4AF37]/20 hidden md:block" />
          <div className="text-center">
            <p className="text-[#D4AF37] text-3xl font-bold">100%</p>
            <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">Premium Ingredients</p>
          </div>
          <div className="w-[1px] h-12 bg-[#D4AF37]/20 hidden md:block" />
          <div className="text-center">
            <p className="text-[#D4AF37] text-3xl font-bold">5★</p>
            <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">Customer Rating</p>
          </div>
        </div>
      </div>

      {/* ===== SCROLL DOWN INDICATOR ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#D4AF37]/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroBanner;