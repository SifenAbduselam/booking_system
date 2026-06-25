import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { business } from "@/config/business";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Sticky nav with dark chocolate background. overflow-visible allows the diamond button to pop out slightly!
    <nav className="sticky top-0 z-50 w-full bg-[#2A1610] shadow-lg overflow-visible">
      
      {/* Background Image with Dark Overlay for readability */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606913084603-f5a0fc6ec8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", 
        }}
      />
      {/* Gradient overlay to ensure text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A1610]/80 to-[#1A0D09]/100" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 overflow-visible">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-[#D4AF37] tracking-wider drop-shadow-md">
              {business.name}
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* 1. ABOUT US Link with Hover Card */}
            <div className="relative group">
              <button className="text-[#D4AF37] hover:text-white transition-colors font-medium text-sm uppercase tracking-wide flex items-center gap-1">
                About Us 
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#1A0D09] border border-[#D4AF37]/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-5">
                  <h3 className="text-[#D4AF37] text-lg font-bold mb-3 border-b border-[#D4AF37]/20 pb-2">Our Story</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Welcome to {business.name}. We are passionate about crafting luxury cakes for life's finest moments in the heart of {business.location}.
                  </p>
                  <p className="text-gray-400 text-xs italic">
                    "Premium ingredients, elegant designs, unforgettable taste."
                  </p>
                </div>
                {/* Little arrow pointing up to the button */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1A0D09] border-l border-t border-[#D4AF37]/30 rotate-45"></div>
              </div>
            </div>

            {/* 2. CONTACT US Link with Hover Card */}
            <div className="relative group">
              <button className="text-[#D4AF37] hover:text-white transition-colors font-medium text-sm uppercase tracking-wide flex items-center gap-1">
                Contact Us 
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {/* Aligned to the right (right-0) so it doesn't go off-screen */}
              <div className="absolute top-full right-0 mt-4 w-72 bg-[#1A0D09] border border-[#D4AF37]/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-5">
                  <h3 className="text-[#D4AF37] text-lg font-bold mb-3 border-b border-[#D4AF37]/20 pb-2">Get in Touch</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2 text-gray-300">
                      <Phone size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span>{business.phone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300">
                      <Mail size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span>{business.email}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-300">
                      <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span>{business.location}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 right-6 w-4 h-4 bg-[#1A0D09] border-l border-t border-[#D4AF37]/30 rotate-45"></div>
              </div>
            </div>

            {/* 3. PRODUCTS Link with Hover Dropdown Card */}
            <div className="relative group">
              <button className="text-[#D4AF37] hover:text-white transition-colors font-medium text-sm uppercase tracking-wide flex items-center gap-1">
                Products 
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-[#1A0D09] border border-[#D4AF37]/30 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-5">
                  <h3 className="text-[#D4AF37] text-lg font-bold mb-3 border-b border-[#D4AF37]/20 pb-2">Our Signature Cakes</h3>
                  <ul className="space-y-3">
                    {business.cakes.map((cake, index) => (
                      <li key={index} className="flex justify-between items-center text-white hover:text-[#D4AF37] transition-colors cursor-pointer group/item">
                        <span className="font-medium text-sm">{cake.name}</span>
                        <span className="text-[#D4AF37] font-bold text-sm bg-[#2A1610] px-2 py-1 rounded">
                          {cake.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1A0D09] border-l border-t border-[#D4AF37]/30 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* 4. BOOK NOW Button (Diamond Shape) */}
          <div className="hidden md:flex items-center justify-center">
            <Link to="/book" className="relative w-16 h-16 flex items-center justify-center group">
              {/* The Diamond Background (Rotated Square) */}
              <div className="absolute inset-0 bg-[#D4AF37] transform rotate-45 transition-all group-hover:bg-[#E5C158] group-hover:scale-110 shadow-lg group-hover:shadow-[#D4AF37]/50"></div>
              {/* The Text (Counter-Rotated to stay horizontal) */}
              <span className="relative z-10 text-[#2A1610] font-bold text-[10px] text-center leading-tight uppercase">
                Book<br/>Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#D4AF37] hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Simplified for small screens) */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3 bg-[#1A0D09]/95 p-4 rounded-lg mt-2 border border-[#D4AF37]/20">
              <Link to="/about" className="text-[#D4AF37] hover:text-white font-medium py-2 border-b border-[#D4AF37]/10" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/contact" className="text-[#D4AF37] hover:text-white font-medium py-2 border-b border-[#D4AF37]/10" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              <Link to="/products" className="text-[#D4AF37] hover:text-white font-medium py-2 border-b border-[#D4AF37]/10" onClick={() => setIsMenuOpen(false)}>Products</Link>
              {/* Standard pill button for mobile to ensure it's easy to tap */}
              <Link to="/book" className="bg-[#D4AF37] text-[#2A1610] px-6 py-3 rounded-full text-sm font-bold text-center hover:bg-[#E5C158] transition-colors mt-2" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;