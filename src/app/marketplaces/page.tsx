import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, PackageCheck, ShieldCheck } from 'lucide-react';
import { packageGroups, marketplaceExtras } from '@/lib/packages';

export const metadata: Metadata = {
  title: 'Amazon & Flipkart Seller Account Services',
  description: 'Seller account onboarding assistance, catalogue listings, account care and marketplace campaign support for Amazon and Flipkart sellers in India.',
  alternates: { canonical: '/marketplaces' },
};

const marketplace = packageGroups.find(group => group.id === 'marketplaces');
export default function MarketplacePage() {
  if (!marketplace) return null;
  return <main className="container-shell py-16 md:py-24">
    <p className="eyebrow">Amazon & Flipkart solutions</p>
    <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">Your products. <span className="gradient-text">Better managed.</span></h1>
    <p className="muted mt-7 max-w-3xl text-lg leading-8">From account onboarding guidance to catalogue optimisation and ongoing marketplace coordination, choose the support your selling operations need. Services are available to eligible businesses across India.</p>
    <div className="mt-8 flex flex-wrap gap-3">
      <Link href="/contact?subject=Marketplace%20Services" className="button-primary">Talk about marketplace selling <ArrowUpRight size={17} aria-hidden="true"/></Link>
      <Link href="/packages#marketplaces" className="button-outline">Compare all packages</Link>
    </div>
    <div className="mt-16 grid gap-5 md:grid-cols-2">
      {marketplace.packages.map(pkg=><article className="panel p-7 md:p-8" key={pkg.title}>
        <PackageCheck className="text-[#4ade80]" aria-hidden="true"/>
        <h2 className="mt-5 text-2xl font-bold">{pkg.title}</h2>
        <p className="muted mt-2">{pkg.description}</p>
        <p className="mt-5 text-3xl font-extrabold text-[#4ade80]">{pkg.price} <span className="text-sm font-normal text-[#b5c4c8]">/ {pkg.unit}</span></p>
        <ul className="mt-7 space-y-3">{pkg.features.map(item=><li key={item} className="flex gap-3 text-[#d3e0e1]"><CheckCircle2 className="mt-1 shrink-0 text-[#4ade80]" size={18} aria-hidden="true"/>{item}</li>)}</ul>
        <p className="muted mt-6 text-sm">{pkg.note}</p>
        <Link href={`/contact?subject=Marketplace%20Services&package=${encodeURIComponent(pkg.title)}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#4ade80]">Request this package <ArrowUpRight size={16} aria-hidden="true"/></Link>
      </article>)}
    </div>
    <section className="mt-14 panel p-7 md:p-9">
      <h2 className="text-2xl font-bold">Additional marketplace support</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">{marketplaceExtras.map(item=><div key={item.title} className="border-t border-white/15 pt-4"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-xl font-bold text-[#4ade80]">{item.price}</p></div>)}</div>
    </section>
    <section className="mt-10 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0c1216] p-7 md:p-9">
      <div className="flex items-center gap-3"><ShieldCheck aria-hidden="true" className="text-[#4ade80]"/><h2 className="text-2xl font-bold">Responsible seller support</h2></div>
      <p className="muted max-w-4xl leading-7">Seller eligibility, registration approval, tax documentation, applicable platform fees, shipping, inventory, order fulfilment and customer obligations remain subject to marketplace requirements and the client's responsibilities. We do not promise account approval, sales volumes or rankings. Ad spend and paid tools are separate.</p>
    </section>
  </main>;
}
