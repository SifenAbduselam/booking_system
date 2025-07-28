import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-rose-600 text-white py-2">
      <div className="max-w-7xl mx-auto xs:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center text-sm">
          {/* Contact Details */}
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            {/* Phone - hidden on xs */}
            <div className="hidden sm:flex items-center" aria-label="Phone contact">
              <Phone className="h-4 w-4 mr-2 mt-[1px]" aria-hidden="true" />
              <span>+1 (555) 123-4567</span>
            </div>

            {/* Email */}
            <div className="flex items-center" aria-label="Email contact">
              <Mail className="h-4 w-4 mr-2 mt-[1px]" aria-hidden="true" />
              <span>info@bakersly.com</span>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 me-[10px] sm:me-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-rose-200 transition-colors duration-200"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-rose-200 transition-colors duration-200"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-rose-200 transition-colors duration-200"
            >
              <Twitter className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
