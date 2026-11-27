import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { packageGroups, marketplaceExtras } from '@/lib/packages';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Packages & Pricing 2027',
  description: 'Explore transparent packages for Instagram, Facebook, LinkedIn, YouTube, content production, Google, Meta and LinkedIn Ads, SEO, websites, e-commerce, custom web applications, SaaS, maintenance, Amazon and Flipkart seller services, WhatsApp, email, CRM, AI and branding across India.',
  alternates: { canonical: '/packages' },
};

const industries = ['Food & Hospitality', 'Retail & E-commerce', 'Education & Training', 'Real Estate', 'Healthcare & Wellness', 'Professional Services', 'Manufacturing & Industrial', 'Travel & Tourism', 'Beauty & Lifestyle', 'Technology & SaaS', 'Personal Brands', 'Local Businesses', 'Logistics & Distribution', 'B2B Enterprises', 'Startups & Emerging Brands'];

const platformStrategies = [
  { name: 'Instagram', focus: 'Discovery & engagement', detail: 'Reels, carousels, visual storytelling and audience engagement.', metrics: 'Reach, shares, saves, watch time and enquiries' },
  { name: 'Facebook', focus: 'Community & conversion', detail: 'Local promotions, customer stories, offers and community content.', metrics: 'Local reach, engagement, traffic and enquiries' },
  { name: 'LinkedIn', focus: 'Authority & professional growth', detail: 'Thought leadership, industry insights, case studies and professional carousels.', metrics: 'Relevant followers, engagement and business enquiries' },
  { name: 'YouTube', focus: 'Discoverability & retention', detail: 'Topic research, hooks, thumbnails, SEO, Shorts and retention strategy.', metrics: 'Views, subscribers, CTR, watch time and retention' },
];

const slugify = (text: string) => encodeURIComponent(text);

export default function PackagesPage() {
  return <div>
    <section className="hero-field border-b border-white/10 py-16 md:py-24">
      <div className="container-shell">
        <p className="eyebrow">2027 services and pricing</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">Digital growth for every business. <span className="gradient-text">Start small. Scale confidently.</span></h1>
        <p className="muted mt-7 max-w-3xl text-lg leading-8">From emerging businesses to established enterprises, choose an integrated growth plan, a focused individual service or a custom technology partnership. We tailor the strategy to your business, whatever your industry.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact?subject=Package%20Consultation" className="button-primary">Request a consultation <ArrowUpRight size={18} aria-hidden="true"/></Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button-outline">Ask on WhatsApp <MessageCircle size={18} aria-hidden="true"/></a>
        </div>
        <p className="mt-6 text-sm text-[#b5c4c8]">Published prices are in INR for standard scopes, excluding applicable GST, ad spend and third-party fees. International, multi-location and customised projects are quoted separately based on scope and support needs.</p>
      </div>
    </section>
    <section className="container-shell py-10" aria-label="Package categories">
      <h2 className="text-lg font-bold">Explore growth bundles and individual services</h2>
      <nav className="mt-5 flex flex-wrap gap-2">
        {packageGroups.map(group => <a key={group.id} href={`#${group.id}`} className="rounded-full border border-white/20 px-4 py-2 text-sm text-[#d0dcde] transition-colors hover:border-[#4ade80] hover:text-[#4ade80]">{group.title}</a>)}
      </nav>
    </section>
    {packageGroups.map((group,index) => <div key={group.id}><section key={group.id} id={group.id} className={index%2===0?'scroll-mt-28 py-16 md:py-20':'scroll-mt-28 border-y border-white/10 bg-[#0c1216] py-16 md:py-20'}>
      <div className="container-shell">
        <p className="eyebrow">Solution {String(index+1).padStart(2,'0')}</p>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{group.title}</h2><p className="muted mt-3 text-lg">{group.subtitle}</p></div>
        </div>
        {group.id==='social-media' && <div className="mt-7">
          <h3 className="text-2xl font-bold">Different platforms. Different strategies. One growth partner.</h3>
          <p className="muted mt-3 max-w-3xl leading-7">Platform-specific planning, content and measurement — not identical posts everywhere. Choose a dedicated channel package or combine platforms with a defined monthly scope.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {platformStrategies.map(platform => <article key={platform.name} className="panel p-5">
              <p className="text-lg font-bold text-[#4ade80]">{platform.name}</p>
              <h4 className="mt-2 font-semibold">{platform.focus}</h4>
              <p className="muted mt-2 text-sm leading-6">{platform.detail}</p>
              <p className="mt-3 text-xs leading-5 text-[#c5d5d8]">KPIs: {platform.metrics}</p>
            </article>)}
          </div>
        </div>}
        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {group.packages.map((pkg) => <article key={pkg.title} className="panel flex min-w-0 flex-col p-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="mt-2 text-sm text-[#b3c6c8]">{pkg.description}</p>
              <p className="mt-6 break-words text-3xl font-black text-[#4ade80]">{pkg.price}{!pkg.price.startsWith("Custom") && <span className="ml-2 text-sm font-medium text-[#b4c5c9]">/ {pkg.unit}</span>}</p>
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
        {group.id==='web-development' && <div className="mt-8 panel p-6 md:p-8">
          <h3 className="text-xl font-bold">What counts as a page?</h3>
          <p className="muted mt-3 leading-7">A standard content page is one URL with an agreed number of content sections. Home, About, Services and Contact are typical examples. Multiple sections on the same URL are not separate pages. A five-page site might include Home, About, Services, Portfolio and Contact. Dynamic product, article and listing templates are scoped by module and content-entry allowance; login, checkout, dashboards and custom business logic are scoped by functionality.</p>
          <p className="muted mt-3 leading-7">Standard privacy, terms, cookie policy, disclaimer, 404 and enquiry confirmation pages are outside the page allowance where applicable, using client-approved content. Legal drafting and custom functionality are excluded.</p>
          <h4 className="mt-6 font-bold">Optional development add-ons</h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
            {[
              ['Additional standard content page','₹1,499+'],['Additional customised page','₹2,499+'],['Premium custom-designed page','₹3,999+'],['Additional standard section','₹499+'],['Advertising landing page','₹4,999+'],['Blog and standard CMS integration','₹7,999+'],['Advanced enquiry form','₹2,499+'],['Appointment booking integration','₹4,999+'],['Multilingual website setup','₹7,999+'],['Custom dashboard, authentication, database or API integration','Scope-based']
            ].map(([name, price]) => <div key={name} className="rounded-lg border border-white/10 p-3"><p>{name}</p><p className="mt-1 font-semibold text-[#4ade80]">{price}</p></div>)}
          </div>
          <p className="muted mt-4 text-sm">Add-ons apply only where not already included. Software, licences and subscriptions are extra.</p>
          <Link href="/contact?subject=Website%20Scope%20Consultation" className="button-outline mt-6">Discuss your website scope <ArrowUpRight size={16} aria-hidden="true"/></Link>
        </div>}
        {group.id==='marketplaces' && <div className="mt-7 panel flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-bold">Also available individually</p><p className="muted mt-1 text-sm">{marketplaceExtras.map(extra=>`${extra.title}: ${extra.price}`).join(' · ')}</p></div>
          <Link href="/contact?subject=Marketplace%20Services" className="shrink-0 font-semibold text-[#4ade80]">Discuss seller services <ArrowUpRight className="inline" size={16} aria-hidden="true"/></Link>
        </div>}
      </div>
    </section>{index===0 && <section id="industries" className="container-shell scroll-mt-28 py-12 md:py-16">
      <p className="eyebrow">Across industries</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">One Growth Partner. Every Industry. Every Stage.</h2>
      <p className="muted mt-4 max-w-3xl leading-7">Our packages define the deliverables; your business goals shape the strategy. Explore the sectors we can support, or discuss a tailored solution for your industry.</p>
      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{industries.map(industry => <div key={industry} className="panel flex items-center gap-2 p-4 text-sm font-medium"><CheckCircle2 size={16} className="shrink-0 text-[#4ade80]" aria-hidden="true"/><span>{industry}</span></div>)}</div>
      <div className="hero-field mt-10 rounded-2xl border border-[#4ade80]/25 p-6 sm:p-8 md:p-10">
        <p className="eyebrow">Personalised business solutions</p>
        <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">Not sure which package is right for your business?</h2>
        <p className="muted mt-4 max-w-2xl leading-7">Tell us about your business, goals and budget. We'll recommend a suitable strategy and scope without unnecessary services or expenses.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact?subject=Package%20Consultation" className="button-primary">Request a consultation <ArrowUpRight size={17} aria-hidden="true"/></Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button-outline">Discuss on WhatsApp <MessageCircle size={17} aria-hidden="true"/></a>
        </div>
      </div>
      <h2 className="mt-12 text-2xl font-extrabold">Individual Service Packages</h2>
      <p className="muted mt-2">Choose only the services your business needs.</p>
    </section>}</div>)}
    <section className="container-shell py-16 md:py-20">
      <div className="panel p-7 md:p-10">
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
      </div>
      <div className="hero-field mt-10 rounded-2xl border border-[#4ade80]/25 p-8 md:p-12">
        <h2 className="text-3xl font-extrabold">Your next growth chapter starts here.</h2>
        <p className="muted mt-4 max-w-2xl">Tell us your goals and current setup. We'll recommend a realistic scope and prepare a written proposal.</p>
        <Link href="/contact?subject=Package%20Consultation" className="button-primary mt-7">Request a proposal <ArrowUpRight size={17} aria-hidden="true"/></Link>
      </div>
    </section>
  </div>;
}
