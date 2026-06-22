import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Logo from "/logo.webp";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { business } from "@/config/business";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: " Subscribed ",
      description: "You've successfully subscribed to our newsletter.",
    });

    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Bakersly Logo"
                  className="h-[120px] w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-6">
              Crafting delicious, health-conscious cakes and desserts with
              natural ingredients. Every bite is a celebration of flavor and
              wellness.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-rose-600 text-white"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="bg-rose-600 text-white px-4 py-2 rounded font-semibold hover:bg-rose-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-rose-200 transition-colors duration-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-rose-200 transition-colors duration-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-rose-200 transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
       <ul className="space-y-2 text-sm">
  {[
    { id: "home", to: "/", label: "Home" },
    { id: "about", to: "/about", label: "About Us" },
    { id: "recipes", to: "/recipes", label: "Recipes" },
    { id: "blog", to: "/blog", label: "Blog" },
    { id: "faq", to: "/faq", label: "FAQ" },
    { id: "contact", to: "/contact", label: "Contact" },
  ].map(({ id, to, label }) => (
    <li key={id}>
      <Link
        to={to}
        className="text-gray-300 hover:text-rose-400 transition-colors"
      >
        {label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 123 Addis Abeba</p>
              <p>Bethel</p>
              <p>📞 +1 {business.phone}</p>
              <p>✉️ {business.email}</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Opening Hours</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <p>Mon-Fri: 8AM - 8PM</p>
                <p>Saturday: 9AM - 9PM</p>
                <p>Sunday: 10AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Bakersly Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
