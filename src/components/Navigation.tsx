import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/logo.webp";
import TopBar from "./TopBar";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define navigation links
const menuItems = [
  { id: "home", name: "Home", href: "/" },
  { id: "cakes", name: "Cakes", href: "/#cakes" },
  { id: "prices", name: "Prices", href: "/#prices" },
  { id: "order", name: "Order", href: "/#order" },
  { id: "contact", name: "Contact Us", href: "/#contact" },
];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with contact info or social links */}
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={Logo}
                alt="Bakersly Logo"
                className="h-[80px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop navigation menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
             {menuItems.map(({ id, name, href }) => (
  <Link key={id} to={href}>
    {name}
  </Link>
))}
            </div>
          </div>

          {/* Desktop contact prompt (hidden on small screens) */}
          <div className="hidden lg:block">
            <span className="text-sm text-gray-600 font-medium">
              Follow us for tips & recipes
            </span>
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-rose-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu, shown only when toggled */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map(({ name, href }) => (
                <Link
                  key={name}
                  to={href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
