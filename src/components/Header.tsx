
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#05070A]/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                <path d="M4 18V9M9 18V6M14 18V3M19 18V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M3 21H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight uppercase leading-none">Infinity Growth</span>
            <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase mt-0.5">Tech</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
          <a href="#advisor" className="hover:text-green-400 transition-colors">AI Advisor</a>
          <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
        </nav>

        <a href="https://wa.me/918989601701" target="_blank" rel="noopener noreferrer" className="bg-gradient-brand text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
