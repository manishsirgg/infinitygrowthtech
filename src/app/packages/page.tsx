import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { packageGroups } from '@/lib/packages';
import { site } from '@/lib/site';
import { PackageCatalogue } from '@/components/package-catalogue';

export const metadata: Metadata = {
  title: 'Service Packages & Pricing 2027',
  description: 'Explore transparent packages for Instagram, Facebook, LinkedIn, YouTube, strategic content and media production, photography, videography, Google, Meta and LinkedIn Ads, SEO, AEO, GEO, AI search visibility, websites, e-commerce, custom web applications, SaaS, maintenance, Amazon and Flipkart seller services, WhatsApp, email, CRM, AI and branding across India.',
  alternates: { canonical: '/packages' },
};

const industries = ['Food & Hospitality', 'Retail & E-commerce', 'Education & Training', 'Real Estate', 'Healthcare & Wellness', 'Professional Services', 'Manufacturing & Industrial', 'Travel & Tourism', 'Beauty & Lifestyle', 'Technology & SaaS', 'Personal Brands', 'Local Businesses', 'Logistics & Distribution', 'B2B Enterprises', 'Startups & Emerging Brands'];


export default function PackagesPage() {
  const growth = packageGroups.find(g=>g.id==='industry-growth')!;
  return <div>
    <section className="hero-field border-b border-white/10 py-10 md:py-16">
      <div className="container-shell">
        <p className="eyebrow">2027 services and pricing</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight md:text-6xl">Digital growth for every business. <span className="gradient-text">Start small. Scale confidently.</span></h1>
        <p className="muted mt-4 max-w-3xl text-lg leading-8">From emerging businesses to established enterprises, choose an integrated growth plan, a focused individual service or a custom technology partnership. We tailor the strategy to your business, whatever your industry.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contact?subject=Package%20Consultation" className="button-primary">Request a consultation <ArrowUpRight size={18} aria-hidden="true"/></Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button-outline">Ask on WhatsApp <MessageCircle size={18} aria-hidden="true"/></a>
        </div>
        <p className="mt-4 text-sm text-[#b5c4c8]">Published prices are in INR for standard scopes, excluding applicable GST, ad spend and third-party fees. International, multi-location and customised projects are quoted separately based on scope and support needs.</p>
      </div>
    </section>

    <section id="industry-growth" className="container-shell scroll-mt-28 py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="eyebrow">Integrated growth</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{growth.title}</h2><p className="muted mt-2 max-w-3xl">{growth.subtitle}</p></div>
        <a href="#service-catalogue" className="button-outline">Browse individual services <ArrowUpRight size={16} aria-hidden="true"/></a>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{growth.packages.map(pkg=><article key={pkg.title} className="panel flex flex-col p-5"><h3 className="text-xl font-bold">{pkg.title}</h3><p className="muted mt-2 text-sm">{pkg.description}</p><p className="mt-4 text-3xl font-black text-[#4ade80]">{pkg.price}{!pkg.price.startsWith('Custom')&&<span className="ml-2 text-sm font-medium text-[#b4c5c9]">/ {pkg.unit}</span>}</p><details className="mt-4 flex-1 border-t border-white/10 pt-4"><summary className="cursor-pointer text-sm font-semibold">View deliverables & scope</summary><ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-[#dce7e8]">{pkg.features.map(f=><li key={f}>{f}</li>)}</ul><p className="muted mt-3 text-xs leading-5">{pkg.note}</p></details><Link href={'/contact?subject=Package%20Consultation&package='+encodeURIComponent(pkg.title)} className="button-outline mt-4">Request package <ArrowUpRight size={16} aria-hidden="true"/></Link></article>)}</div>
      <div className="mt-6 panel flex flex-wrap items-center justify-between gap-4 p-5"><div><h3 className="font-bold">Not sure which plan is right?</h3><p className="muted mt-1 text-sm">Share your business goals and budget for a tailored recommendation.</p></div><Link href="/contact?subject=Package%20Consultation" className="button-primary">Request a consultation <ArrowUpRight size={16} aria-hidden="true"/></Link></div>
    </section>
    <div className="border-y border-white/10 bg-[#0c1216]"><PackageCatalogue /></div>
    <section id="industries" className="container-shell scroll-mt-28 pt-10">
      <details className="panel p-5"><summary className="cursor-pointer font-bold">Industries we serve</summary><p className="muted mt-3">One growth partner. Every industry. Every stage.</p><div className="mt-4 flex flex-wrap gap-2">{industries.map(i=><span key={i} className="rounded-full border border-white/10 px-3 py-2 text-sm">{i}</span>)}</div></details>
    </section>
    <section className="container-shell py-10 md:py-14">
      <details className="panel p-5 md:p-7"><summary className="cursor-pointer font-bold">Commercial terms & payment information</summary><div className="mt-4">
        <div className="flex items-center gap-3"><ShieldCheck className="text-[#4ade80]" size={26} aria-hidden="true"/><h2 className="text-2xl font-bold">Clear scope. Transparent terms.</h2></div>
        <div className="mt-7 grid gap-5 text-sm leading-7 text-[#c5d5d8] md:grid-cols-2 lg:grid-cols-3">
          <p>Fixed prices cover the stated standard scope; prices marked + are starting estimates. International, multi-location and customised engagements are quoted separately based on scope and support needs. All fees exclude applicable GST.</p>
          <p>Advertising spend, marketplace fees, hosting, messaging, software and AI usage are charged separately.</p>
          <p>Client-supplied materials are assumed unless production is contracted. Content quantities are monthly totals, not per platform, unless stated otherwise. One consolidated revision round is included unless stated otherwise.</p>
          <p>Development projects require an agreed written scope. Standard websites: 50% advance and 50% before handover. Larger commerce and software projects: proposed 40/30/20/10 milestone payments, confirmed in the agreement.</p>
          <p>Development fees exclude domain, hosting, premium software, payment gateway fees, copywriting and photography unless included. Post-launch bug support covers agreed functionality only; ongoing care and new features are separate. Commerce and custom project revisions and support are agreed in writing.</p>
          <p>Monthly work is billed in advance; initial engagement and renewal terms are agreed in writing.</p>
          <p>Client accounts, domains, data and advertising budgets stay client-owned; deliverable rights follow the agreement.</p>
          <p>Sales, leads, rankings, followers, ad outcomes and marketplace approvals are not guaranteed.</p>
        </div>
      </div></details>
      <div className="hero-field mt-6 rounded-2xl border border-[#4ade80]/25 p-8 md:p-12">
        <h2 className="text-3xl font-extrabold">Your next growth chapter starts here.</h2>
        <p className="muted mt-4 max-w-2xl">Tell us your goals and current setup. We'll recommend a realistic scope and prepare a written proposal.</p>
        <Link href="/contact?subject=Package%20Consultation" className="button-primary mt-7">Request a proposal <ArrowUpRight size={17} aria-hidden="true"/></Link>
      </div>
    </section>

  </div>;
}
