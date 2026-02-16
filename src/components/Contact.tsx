
import React from 'react';
import { CONTACT } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to <br /><span className="text-gradient">Accelerate?</span></h2>
            <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
              We're based in the heart of Noida's tech hub, helping brands worldwide architect sustainable digital growth.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-green-400 transition-colors">{CONTACT.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call/WhatsApp</h4>
                  <a href={`tel:${CONTACT.phone.replace(/\-/g, '')}`} className="text-gray-400 hover:text-green-400 transition-colors">{CONTACT.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Office Address</h4>
                  <p className="text-gray-400 leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50 appearance-none">
                  <option className="bg-[#05070A]">Brand Identity</option>
                  <option className="bg-[#05070A]">Performance Ads</option>
                  <option className="bg-[#05070A]">Ecommerce Setup</option>
                  <option className="bg-[#05070A]">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50 min-h-[150px]"></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-brand text-black font-bold rounded-xl hover:scale-[1.02] transition-transform">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
