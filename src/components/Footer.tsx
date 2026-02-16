import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-brand rounded-md flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M4 18V9M9 18V6M14 18V3M19 18V12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-bold text-sm tracking-tighter uppercase">
            Infinity Growth Tech
          </span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Infinity Growth Tech. Architecting Digital Growth.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all"
          >
            <Facebook size={18} />
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all"
          >
           <Instagram size={18} />
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all"
          >
            <Linkedin size={18} />
          </a>

          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all"
          >
            <X size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
