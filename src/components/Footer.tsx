import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 md:py-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
         <div className="h-8 sm:h-10 w-auto transition-transform duration-300 hover:scale-105">
  <img 
    src="/logo.svg" 
    alt="Infinity Growth Tech Logo" 
    className="h-8 sm:h-10 w-auto"
  />
          <span className="font-bold text-sm tracking-tighter uppercase">
            Infinity Growth Tech
            Architecting Business Growth
          </span>
        </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Infinity Growth Tech (Infinity Global Advisory). Architecting Digital Growth.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 transition-colors text-xs uppercase tracking-widest font-bold"
          >
            <Facebook size={18} />
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 transition-colors text-xs uppercase tracking-widest font-bold"
          >
           <Instagram size={18} />
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-400 transition-colors text-xs uppercase tracking-widest font-bold"
          >
            <Linkedin size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
