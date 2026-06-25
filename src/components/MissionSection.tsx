import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

const videoRef = useRef<HTMLVideoElement>(null);
useEffect(() => {
  if (videoRef.current) {
    videoRef.current.playbackRate = 0.5;
  }
}, []);
const MissionSection = () => {
  return (
    <section className="relative w-full bg-[#1A0D09] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* ===== LEFT SIDE - TEXT CONTENT ===== */}
        <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
          {/* Decorative gold line */}
          <div className="w-16 h-[2px] bg-[#D4AF37]/50 mb-8" />
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D4AF37] leading-tight mb-6">
            PEOPLE FIRST,
            <br />
            PURPOSE DRIVEN
          </h2>
          
          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
            Amazing Cake Shop is a mission-driven bakery creating quality jobs through the craft of artisan baking.
          </p>
          
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            Come try Addis Ababa's finest luxury cakes and naturally crafted desserts for your special moments.
          </p>
          
          {/* CTA Button */}
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 bg-[#D4AF37] text-[#1A0D09] px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-[#E5C158] transition-all duration-300 w-fit"
          >
            Learn More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Decorative gold line at bottom */}
          <div className="w-16 h-[2px] bg-[#D4AF37]/50 mt-10 lg:mt-auto" />
        </div>

        {/* ===== RIGHT SIDE - SLOWED VIDEO ===== */}
        <div className="relative h-[400px] lg:h-auto">
          {/* Video Container */}
          <div className="absolute inset-0">
           <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
>
              {/* Replace with your actual video path */}
              <source
                src="/videos/baking-process.mp4"
                type="video/mp4"
              />
              {/* Fallback image if video doesn't load */}
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Baking process"
                className="w-full h-full object-cover"
              />
            </video>
            
            {/* Overlay gradient for smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#1A0D09]/20 to-transparent" />
          </div>
          
          {/* Optional: Gold border accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/30" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37]/30" />
        </div>
        
      </div>
    </section>
  );
};

export default MissionSection;