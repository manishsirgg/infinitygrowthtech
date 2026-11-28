import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { serviceCatalog } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Digital & Technology Services',
  description: 'Explore website development, digital marketing, custom software, SEO and practical automation solutions from Infinity Growth Tech.',
};

export default function ServicesPage() {
  return <div className="container-shell py-10 sm:py-8 sm:py-14 md:py-24">
    <p className="eyebrow">What we can build together</p>
    <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl md:text-7xl">Digital solutions, <span className="gradient-text">designed around your goals.</span></h1>
    <p className="muted mt-7 max-w-3xl text-base leading-7 md:text-lg md:leading-8">From launching a strong digital presence to improving customer acquisition and business workflows, explore the capabilities we can tailor to your next project.</p>
    <div className="mt-9 flex flex-wrap gap-3">
      <Link href="/packages" className="button-primary">View packages &amp; starting prices <ArrowUpRight size={17} aria-hidden="true"/></Link>
      <Link href="/packages#marketplaces" className="button-outline">Amazon &amp; Flipkart seller packages <ArrowUpRight size={17} aria-hidden="true"/></Link>
    </div>
    <section className="mt-6 panel p-4 sm:p-6"><h2 className="text-xl font-bold">Explore specialist services</h2><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">{[['Instagram & Facebook','social-media'],['LinkedIn','linkedin-marketing'],['YouTube','youtube-marketing'],['AI Search · AEO & GEO','ai-search-visibility'],['Content production','video-youtube'],['WhatsApp & email','customer-communication'],['Amazon & Flipkart','marketplaces'],['Branding','branding-growth'],['CRM & AI','crm-automation']].map(([label,id])=><Link key={id} href={'/packages#'+id} className="flex min-h-12 items-center justify-between gap-2 rounded-lg border border-white/15 p-3 text-sm font-semibold hover:border-[#4ade80]">{label}<ArrowUpRight size={15} className="shrink-0 text-[#4ade80]" aria-hidden="true"/></Link>)}</div></section><div className="mt-7 md:mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {serviceCatalog.map(service => <article className="panel flex flex-col p-5 md:p-7" key={service.slug}>
        <p className="eyebrow">{service.category}</p>
        <h2 className="mt-5 text-2xl font-bold">{service.title}</h2>
        <p className="muted mt-4 flex-1 leading-7">{service.summary}</p>
        <Link href={`/services/${service.slug}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-[#4ade80] hover:text-[#a2fac0]">Explore service <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </article>)}
    </div>
    <div className="panel mt-14 flex flex-col items-start gap-5 p-8 md:p-11">
      <h2 className="text-3xl font-bold">Not sure which approach fits?</h2>
      <p className="muted max-w-2xl leading-7">Tell us your objective, constraints and current systems. We can help identify a sensible starting scope.</p>
      <Link className="button-primary" href="/contact">Discuss your project <ArrowUpRight size={17} aria-hidden="true" /></Link>
    </div>
  </div>;
}
