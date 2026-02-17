import React, { useState } from 'react';
import { CONTACT } from '../constants';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mbdayzrl", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Ready to <br />
              <span className="text-gradient">Accelerate?</span>
            </h2>

            <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
              We're based in the heart of Noida's tech hub, helping brands worldwide architect sustainable digital growth.
            </p>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 shrink-0">
                  ✉
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call/WhatsApp</h4>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\-/g, '')}`}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400 shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Office Address</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {CONTACT.address}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="glass p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-400/30 text-green-400 rounded-xl text-sm">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50 appearance-none"
                >
                  <option className="bg-[#05070A]">Brand Identity</option>
                  <option className="bg-[#05070A]">Performance Ads</option>
                  <option className="bg-[#05070A]">Ecommerce Setup</option>
                  <option className="bg-[#05070A]">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-green-400/50 min-h-[150px]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-brand text-black font-bold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
