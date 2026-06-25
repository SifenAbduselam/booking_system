import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/logo.webp";
import TopBar from "./TopBar";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const menuItems = [
    {
      id: "about",
      name: "About Us",
      href: "#about",
      description: "Learn about our luxury cake craftsmanship",
    },
    {
      id: "products",
      name: "Products",
      href: "#products",
      description: "Explore cakes, prices & collections",
    },
    {
      id: "contact",
      name: "Contact",
      href: "#contact",
      description: "Get in touch with our bakery",
    },
  ];

  return (
    <nav className="sticky top-0 z-50">

      {/* TOP BAR BACKGROUND IMAGE */}
      <div className="bg-[url('/cake-bg.jpg')] bg-cover bg-center">
        <div className="bg-black/60">
          <TopBar />
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-[#2A140D]/95 backdrop-blur-md border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <span className="text-[#D4AF37] text-2xl font-bold tracking-wide">
              Amazing Cake Shop
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 relative">

            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveHover(item.id)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <a
                  href={item.href}
                  className="text-[#F5E6B3] hover:text-[#D4AF37] transition"
                >
                  {item.name}
                </a>

                {/* HOVER CARD */}
                {activeHover === item.id && (
                  <div className="absolute top-10 left-0 w-64 bg-[#3B1F14] border border-[#D4AF37]/40 p-4 rounded-xl shadow-xl">
                    <p className="text-[#F5E6B3] text-sm">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* BOOK NOW BUTTON */}
          <div className="hidden md:block">
            <a
              href="#book"
              className="bg-[#D4AF37] text-[#2A140D] px-6 py-2 rounded-full font-semibold hover:bg-[#F5E6B3] transition"
            >
              Book Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#D4AF37]"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2A140D] border-t border-[#D4AF37]/30 px-6 py-4 space-y-4">

            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block text-[#F5E6B3]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#book"
              className="block bg-[#D4AF37] text-[#2A140D] text-center py-2 rounded-full font-semibold"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;