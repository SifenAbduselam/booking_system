import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MissionSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down to 50% speed
    }
  }, []);

  return (
    <section className="relative w-full bg-[#1A0D09] overflow-hidden">
      {/* ===== TOP GOLD LINE ===== */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* ===== LEFT SIDE - TEXT CONTENT ===== */}
        <div className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
          
          {/* ===== LEFT BORDER LINE (like the image) ===== */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/30 to-[#D4AF37]" />
          
          {/* Decorative emblem/logo (optional - like in your image) */}
          <div className="mb-8">
            <svg 
              width="80" 
              height="80" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#D4AF37]"
            >
              <circle 
                cx="50" 
                cy="50" 
                r="48" 
                stroke="currentColor" 
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                stroke="currentColor" 
                strokeWidth="0.5"
              />
              {/* Wheat/grain design */}
              <path 
                d="M50 25 L50 65 M35 40 L50 25 L65 40 M40 55 L50 65 L60 55" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                fill="none"
              />
              {/* Waves at bottom */}
              <path 
                d="M30 70 Q50 75 70 70 M30 75 Q50 80 70 75" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none"
              />
            </svg>
          </div>
          
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
              <source
                src="/videos/baking-process.mp4"
                type="video/mp4"
              />
              {/* Fallback image if video doesn't load */}
            </video>
            
            {/* Overlay to darken video slightly */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
        
      </div>
      
      {/* ===== BOTTOM GOLD LINE ===== */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />
    </section>
  );
};

export default MissionSection;