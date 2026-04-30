import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '/?page=pricing' },
  { label: 'AI Advisor', href: '#advisor' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05070A]/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
              <path d="M4 18V9M9 18V6M14 18V3M19 18V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M3 21H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-xl tracking-tight uppercase leading-none">Infinity Growth</span>
            <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase mt-0.5">Tech</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-green-400 transition-colors">{link.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Linkedin size={18} /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Instagram size={18} /></a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Facebook size={18} /></a>
          </div>
          <a href="https://wa.me/918989601701" target="_blank" rel="noopener noreferrer" className="bg-gradient-brand text-black px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all">
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-white/10 text-gray-200"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden border-t border-white/10 bg-[#05070A]/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-5 space-y-5">
            <nav className="flex flex-col gap-3 text-base font-medium">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="rounded-lg px-3 py-2 text-gray-300 hover:bg-white/5 hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-4 text-gray-400">
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Linkedin size={18} /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Instagram size={18} /></a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Facebook size={18} /></a>
            </div>
            <a href="https://wa.me/918989601701" target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-brand text-black px-5 py-3 rounded-xl text-sm font-bold" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
