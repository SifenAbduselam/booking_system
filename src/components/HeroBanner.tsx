import React from "react";
import { Link } from "react-router-dom";
import { business } from "@/config/business";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* ===== LIGHTER OVERLAY (So the cake is visible!) ===== */}
      {/* Changed from heavy brown to a lighter black/dark gradient so the image pops */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D09]/80 via-transparent to-[#1A0D09]/40" />

      {/* ===== DECORATIVE GOLD CORNER ACCENTS ===== */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#D4AF37]/40 hidden lg:block animate-fade-in-up delay-100" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-[#D4AF37]/40 hidden lg:block animate-fade-in-up delay-100" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-[#D4AF37]/40 hidden lg:block animate-fade-in-up delay-100" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#D4AF37]/40 hidden lg:block animate-fade-in-up delay-100" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Small decorative sparkle label */}
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up delay-100">
          <Sparkles size={14} className="text-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
            Handcrafted Luxury
          </span>
          <Sparkles size={14} className="text-[#D4AF37]" />
        </div>

        {/* Gold decorative line */}
        <div className="w-16 h-[1px] bg-[#D4AF37]/50 mx-auto mb-6 animate-fade-in-up delay-100" />

        {/* Main Title — Smaller, Elegant, Golden */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37] leading-tight mb-4 drop-shadow-lg animate-fade-in-up delay-200">
          {business.hero.title.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-white italic font-light text-3xl sm:text-4xl md:text-5xl">
            {business.hero.title.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-light animate-fade-in-up delay-300">
          {business.hero.subtitle}
        </p>

        {/* Gold decorative line */}
        <div className="w-16 h-[1px] bg-[#D4AF37]/50 mx-auto mb-8 animate-fade-in-up delay-300" />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
          
          {/* Primary Button — Solid Gold */}
          <Link
            to="/#cakes"
            className="group bg-[#D4AF37] text-[#1A0D09] px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#E5C158] transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/30 flex items-center gap-2"
          >
            View Our Cakes
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Button — Gold Outline */}
          <Link
            to="/book"
            className="group border border-[#D4AF37] text-[#D4AF37] px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#1A0D09] transition-all duration-300 flex items-center gap-2"
          >
            Book Now
          </Link>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in-up delay-500">
          <div className="text-center">
            <p className="text-[#D4AF37] text-2xl font-bold">500+</p>
            <p className="text-gray-300 text-[10px] uppercase tracking-wider mt-1">Cakes Delivered</p>
          </div>
          <div className="w-[1px] h-10 bg-[#D4AF37]/20 hidden md:block" />
          <div className="text-center">
            <p className="text-[#D4AF37] text-2xl font-bold">100%</p>
            <p className="text-gray-300 text-[10px] uppercase tracking-wider mt-1">Premium Ingredients</p>
          </div>
          <div className="w-[1px] h-10 bg-[#D4AF37]/20 hidden md:block" />
          <div className="text-center">
            <p className="text-[#D4AF37] text-2xl font-bold">5★</p>
            <p className="text-gray-300 text-[10px] uppercase tracking-wider mt-1">Customer Rating</p>
          </div>
        </div>
      </div>

      {/* ===== ZIGZAG/WAVE BOTTOM DIVIDER ===== */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
            fill="#1A0D09"
            className="animate-fade-in-up delay-500"
          />
          <path 
            d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,85.3C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="#D4AF37"
            opacity="0.3"
            className="animate-fade-in-up delay-500"
          />
        </svg>
      </div>

      {/* ===== SCROLL DOWN INDICATOR ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70 z-30">
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
};

export default HeroBanner;