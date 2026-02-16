
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#080A0F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">High-Impact Services</h2>
          <div className="w-20 h-1 bg-gradient-brand mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-400 max-w-xl mx-auto">
            From visual storytelling to heavy-hitting paid acquisition, we provide everything your digital presence needs to dominate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 glass rounded-2xl hover:bg-white/[0.05] transition-all duration-500 border-b-2 border-transparent hover:border-green-400"
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
