
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-green-400">Architecting Digital Growth</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
          Scale Your Business <br />
          <span className="text-gradient">To Infinity</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
          The ultimate growth partner for modern brands. We combine data-driven marketing with world-class creative engineering to dominate your market.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-gradient-brand text-black font-bold rounded-xl hover:scale-105 transition-transform">
            Explore Services
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
            Free Consultation
          </a>
        </div>

        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="aspect-video glass rounded-2xl overflow-hidden p-2">
            <img 
              src="https://picsum.photos/seed/infinity/1200/675" 
              alt="Digital Growth" 
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="text-left">
                <p className="text-2xl font-bold text-green-400">250%+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Avg Client Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
