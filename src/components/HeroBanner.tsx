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
       
        

        {/* Bottom Stats */}
       
      </div>

      {/* ===== SCROLL DOWN INDICATOR ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </div>
    </section>
  );
};

export default HeroBanner;