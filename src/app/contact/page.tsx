import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { offices, site } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact', description: 'Discuss a website, digital platform, marketing or automation project with Infinity Growth Tech. Find our Indore and Noida offices.' };

export default function ContactPage() {
  return <section className="container-shell py-10 sm:py-8 sm:py-14 md:py-24">
    <p className="eyebrow">Start a conversation</p>
    <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Tell us what you're working on.</h1>
    <p className="muted mt-6 max-w-2xl text-base leading-7 md:text-lg md:leading-8">Tell us about your business, the service you need, your budget and your timeline. We will discuss a practical scope, recommend suitable options and prepare a proposal where appropriate.</p>
    <div className="mt-5 md:mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Contact options">
      <a className="panel flex items-start gap-3 p-4 hover:border-[#4ade80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4ade80]" href={"mailto:" + site.email}>
        <Mail className="mt-1 shrink-0 text-[#4ade80]" aria-hidden="true" /><span className="min-w-0"><span className="block font-semibold text-white">Email us</span><span className="mt-1 block break-all text-sm text-[#c0ccd1]">{site.email}</span></span>
      </a>
      <a className="panel flex items-start gap-4 p-5 hover:border-[#4ade80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4ade80]" href={"tel:" + site.tel}>
        <Phone className="mt-1 shrink-0 text-[#4ade80]" aria-hidden="true" /><span><span className="block font-semibold text-white">Call or text</span><span className="mt-1 block text-sm text-[#c0ccd1]">{site.phone}</span></span>
      </a>
      <a className="panel flex items-start gap-4 p-5 hover:border-[#4ade80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4ade80]" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mt-1 shrink-0 text-[#4ade80]" aria-hidden="true" /><span><span className="block font-semibold text-white">Chat on WhatsApp</span><span className="mt-1 block text-sm text-[#c0ccd1]">{site.phone}</span></span>
      </a>
    </div>
    <div id="enquiry" className="mt-6 max-w-2xl"><h2 className="mb-3 text-2xl font-bold">Send an enquiry</h2><ContactForm /><p className="muted mt-4 text-sm">Already working with us? <a href="/support" className="text-[#4ade80]">Visit client support</a>.</p></div>

    <section aria-labelledby="our-offices-heading" className="mt-10 border-t border-white/10 pt-7 md:mt-20 md:pt-12">
      <p className="eyebrow">Our locations</p>
      <h2 id="our-offices-heading" className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Visit our offices</h2>
      <p className="muted mt-4 max-w-2xl leading-7">Infinity Growth Tech has offices in Indore and Noida. Please contact us before visiting to arrange an appointment.</p>
      <div className="mt-5 md:mt-8 grid gap-5 md:grid-cols-2">
        {offices.map((office) => (
          <article key={office.city} className="panel p-6 sm:p-8">
            <MapPin className="text-[#4ade80]" size={26} aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold text-white">{office.label}</h3>
            <address className="muted mt-3 not-italic leading-7">
              <span className="block">{office.address}</span>
              <span className="block">{office.region}</span>
            </address>
          </article>
        ))}
      </div>
    </section>
  </section>;
}
