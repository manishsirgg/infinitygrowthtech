import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { packageGroups, marketplaceExtras } from '@/lib/packages';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Packages & Pricing 2027',
  description: 'Explore transparent packages for social media, video, YouTube, Google and Meta Ads, SEO, websites, Amazon and Flipkart seller services, WhatsApp, email, CRM, AI and branding across India.',
  alternates: { canonical: '/packages' },
};

const slugify = (text: string) => encodeURIComponent(text);

export default function PackagesPage() {
  return <main>
    <section className="hero-field border-b border-white/10 py-16 md:py-24">
      <div className="container-shell">
        <p className="eyebrow">2027 services and pricing</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">Find the right starting point. <span className="gradient-text">Build for what comes next.</span></h1>
        <p className="muted mt-7 max-w-3xl text-lg leading-8">Transparent starting prices and clearly defined services for businesses across India. Choose a focused package or discuss an integrated growth partnership.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact?subject=Package%20Consultation" className="button-primary">Discuss a package <ArrowUpRight size={18} aria-hidden="true"/></Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button-outline">Ask on WhatsApp <MessageCircle size={18} aria-hidden="true"/></a>
        </div>
        <p className="mt-6 text-sm text-[#b5c4c8]">All prices are in INR, exclude applicable GST and cover a defined standard scope. Advertising budgets, platform fees and third-party costs are separate.</p>
      </div>
    </section>
    <section className="container-shell py-10" aria-label="Package categories">
      <h2 className="text-lg font-bold">Explore by service</h2>
      <nav className="mt-5 flex flex-wrap gap-2">
        {packageGroups.map(group => <a key={group.id} href={`#${group.id}`} className="rounded-full border border-white/20 px-4 py-2 text-sm text-[#d0dcde] transition-colors hover:border-[#4ade80] hover:text-[#4ade80]">{group.title}</a>)}
      </nav>
    </section>
    {packageGroups.map((group,index) => <section key={group.id} id={group.id} className={index%2===0?'scroll-mt-28 py-16 md:py-20':'scroll-mt-28 border-y border-white/10 bg-[#0c1216] py-16 md:py-20'}>
      <div className="container-shell">
        <p className="eyebrow">Solution {String(index+1).padStart(2,'0')}</p>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{group.title}</h2><p className="muted mt-3 text-lg">{group.subtitle}</p></div>
          {group.id==='marketplaces' && <Link href="/marketplaces" className="inline-flex items-center gap-2 font-semibold text-[#4ade80]">Explore seller solutions <ArrowUpRight size={17} aria-hidden="true"/></Link>}
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {group.packages.map((pkg) => <article key={pkg.title} className="panel flex min-w-0 flex-col p-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="mt-2 text-sm text-[#b3c6c8]">{pkg.description}</p>
              <p className="mt-6 break-words text-3xl font-black text-[#4ade80]">{pkg.price}<span className="ml-2 text-sm font-medium text-[#b4c5c9]">/ {pkg.unit}</span></p>
              <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
                {pkg.features.map(feature=><li key={feature} className="flex items-start gap-2 text-sm leading-6 text-[#dce7e8]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#4ade80]" aria-hidden="true"/><span>{feature}</span></li>)}
              </ul>
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="min-h-10 text-xs leading-5 text-[#a4b8bd]">{pkg.note}</p>
              <Link href={`/contact?subject=Package%20Consultation&package=${slugify(pkg.title)}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#4ade80]/60 px-4 py-3 text-sm font-semibold text-[#4ade80] transition-colors hover:bg-[#4ade80]/10">Request this package <ArrowUpRight size={16} aria-hidden="true"/></Link>
            </div>
          </article>)}
        </div>
        {group.id==='marketplaces' && <div className="mt-7 panel flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-bold">Also available individually</p><p className="muted mt-1 text-sm">{marketplaceExtras.map(extra=>`${extra.title}: ${extra.price}`).join(' · ')}</p></div>
          <Link href="/marketplaces" className="shrink-0 font-semibold text-[#4ade80]">Marketplace details <ArrowUpRight className="inline" size={16} aria-hidden="true"/></Link>
        </div>}
      </div>
    </section>)}
    <section className="container-shell py-16 md:py-20">
      <div className="panel p-7 md:p-10">
        <div className="flex items-center gap-3"><ShieldCheck className="text-[#4ade80]" size={26} aria-hidden="true"/><h2 className="text-2xl font-bold">Clear scope. Transparent terms.</h2></div>
        <div className="mt-7 grid gap-5 text-sm leading-7 text-[#c5d5d8] md:grid-cols-2 lg:grid-cols-3">
          <p>All fees are in INR excluding applicable GST. Listed prices are starting prices for defined standard scopes.</p>
          <p>Advertising spend, marketplace fees, hosting, messaging, software and AI usage are charged separately.</p>
          <p>Client-supplied materials are assumed unless production is contracted. One consolidated revision round is included unless stated otherwise.</p>
          <p>Monthly work is billed in advance; ongoing engagements typically start with a three-month commitment.</p>
          <p>Client accounts, domains, data and advertising budgets stay client-owned; deliverable rights follow the agreement.</p>
          <p>Sales, leads, rankings, followers, ad outcomes and marketplace approvals are not guaranteed.</p>
        </div>
      </div>
      <div className="hero-field mt-10 rounded-2xl border border-[#4ade80]/25 p-8 md:p-12">
        <h2 className="text-3xl font-extrabold">Your next growth chapter starts here.</h2>
        <p className="muted mt-4 max-w-2xl">Tell us your goals and current setup. We'll recommend a realistic scope and prepare a written proposal.</p>
        <Link href="/contact?subject=Package%20Consultation" className="button-primary mt-7">Request a proposal <ArrowUpRight size={17} aria-hidden="true"/></Link>
      </div>
    </section>
  </main>;
}
