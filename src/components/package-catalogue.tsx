'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Search } from 'lucide-react';
import { packageGroups, marketplaceExtras, type PackageGroup } from '@/lib/packages';
import { SocialPackageSelector } from '@/components/social-package-selector';
import { ProductionPackageBrowser } from '@/components/production-package-browser';

const families = [
  { title: 'Social media & content', ids: ['social-media','linkedin-marketing','youtube-marketing','combined-social','video-youtube'] },
  { title: 'Advertising & discovery', ids: ['paid-advertising','seo-discovery','customer-communication'] },
  { title: 'Websites & technology', ids: ['web-development','ecommerce-development','web-applications','website-care','crm-automation'] },
  { title: 'Commerce & brand', ids: ['marketplaces','branding-growth'] },
];
const shortNames: Record<string,string> = {
  'social-media':'Instagram & Facebook', 'linkedin-marketing':'LinkedIn', 'youtube-marketing':'YouTube',
  'combined-social':'Combined social plans', 'video-youtube':'Content & media production',
  'paid-advertising':'Paid advertising', 'seo-discovery':'SEO & Google Maps', 'customer-communication':'WhatsApp & email',
  'web-development':'Business websites', 'ecommerce-development':'E-commerce websites', 'web-applications':'Web apps & SaaS',
  'website-care':'Website & app care', 'crm-automation':'CRM, AI & automation', 'marketplaces':'Amazon & Flipkart', 'branding-growth':'Branding & identity'
};

const platformStrategies = [
  { name: 'Instagram', focus: 'Discovery & engagement', detail: 'Reels, carousels, visual storytelling and audience engagement.', metrics: 'Reach, shares, saves, watch time and enquiries' },
  { name: 'Facebook', focus: 'Community & conversion', detail: 'Local promotions, customer stories, offers and community content.', metrics: 'Local reach, engagement, traffic and enquiries' },
  { name: 'LinkedIn', focus: 'Authority & professional growth', detail: 'Thought leadership, industry insights, case studies and professional carousels.', metrics: 'Relevant followers, engagement and business enquiries' },
  { name: 'YouTube', focus: 'Discoverability & retention', detail: 'Topic research, hooks, thumbnails, SEO, Shorts and retention strategy.', metrics: 'Views, subscribers, CTR, watch time and retention' },
];

const slugify = (text: string) => encodeURIComponent(text);


export function PackageDetails({ group }: { group: PackageGroup }) {
  return <div>
        {group.id==='social-media' && <details className="mt-5 panel p-4 sm:p-5"><summary className="cursor-pointer font-semibold">Explore platform strategies and build a custom social plan</summary><div className="mt-5">
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
          <SocialPackageSelector />
        </div></details>}
        {group.id === 'video-youtube' ? <ProductionPackageBrowser packages={group.packages} /> : <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {group.packages.map((pkg) => <article key={pkg.title} className="panel flex min-w-0 flex-col p-5">
            <div className="flex-1">
              <h3 className="text-xl font-bold">{pkg.title}</h3>
              <p className="mt-2 text-sm text-[#b3c6c8]">{pkg.description}</p>
              <p className="mt-4 break-words text-2xl font-black text-[#4ade80]">{pkg.price}{!pkg.price.startsWith("Custom") && <span className="ml-2 text-sm font-medium text-[#b4c5c9]">/ {pkg.unit}</span>}</p>
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {pkg.features.map(feature=><li key={feature} className="flex items-start gap-2 text-sm leading-6 text-[#dce7e8]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#4ade80]" aria-hidden="true"/><span>{feature}</span></li>)}
              </ul>
            </div>
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-xs leading-5 text-[#a4b8bd]">{pkg.note}</p>
              <Link href={`/contact?subject=Package%20Consultation&package=${slugify(pkg.title)}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#4ade80]/60 px-4 py-3 text-sm font-semibold text-[#4ade80] transition-colors hover:bg-[#4ade80]/10">Request this package <ArrowUpRight size={16} aria-hidden="true"/></Link>
            </div>
          </article>)}
        </div>}
        {group.id==='web-development' && <details className="mt-5 panel p-5"><summary className="cursor-pointer font-bold">Website scope, page definitions & optional add-ons</summary>
          <h3 className="mt-4 text-lg font-bold">What counts as a page?</h3>
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
        </details>}
        {group.id==='marketplaces' && <div className="mt-7 panel flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-bold">Also available individually</p><p className="muted mt-1 text-sm">{marketplaceExtras.map(extra=>`${extra.title}: ${extra.price}`).join(' · ')}</p></div>
          <Link href="/contact?subject=Marketplace%20Services" className="shrink-0 font-semibold text-[#4ade80]">Discuss seller services <ArrowUpRight className="inline" size={16} aria-hidden="true"/></Link>
        </div>}
  </div>;
}

export function PackageCatalogue() {
  const groups = packageGroups.filter(g => g.id !== 'industry-growth');
  const [active, setActive] = useState('social-media');
  const [query, setQuery] = useState('');
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      if (groups.some(g => g.id === hash)) { setActive(hash); setQuery(''); }
    };
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => { window.removeEventListener('hashchange', sync); window.removeEventListener('popstate', sync); };
  // The catalogue is static.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const pick = (id: string) => { setActive(id); setQuery(''); window.history.replaceState(null, '', '#' + id); };
  const group = groups.find(g => g.id === active) ?? groups[0];
  const term = query.trim().toLowerCase();
  const matches = term ? groups.flatMap(g => g.packages.filter(p => [g.title,p.title,p.description,...p.features].join(' ').toLowerCase().includes(term)).map(p => ({group:g,p}))) : [];
  return <section id="service-catalogue" className="container-shell scroll-mt-28 py-12 md:py-16">
    <p className="eyebrow">Explore individual services</p>
    <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Find the right solution.</h2>
    <p className="muted mt-3 max-w-2xl">Choose a service category or search for a package. All pricing and deliverables remain available on this page.</p>
    <div className="relative mt-6 max-w-xl">
      <Search className="absolute left-4 top-3.5 text-[#a4b8bd]" size={20} aria-hidden="true"/>
      <input aria-label="Search individual packages" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search packages, e.g. LinkedIn or website" className="w-full rounded-xl border border-white/20 bg-[#0c1216] py-3 pl-12 pr-4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4ade80]"/>
    </div>
    <div className="mt-7 grid items-start gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
      <nav aria-label="Individual service categories" className="panel p-4">
        <details className="lg:hidden" open><summary className="cursor-pointer font-bold">Browse service categories</summary>
          <div className="mt-4">{families.map(f=><div key={f.title} className="mb-4"><p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#a4b8bd]">{f.title}</p><div className="flex flex-wrap gap-2">{f.ids.map(id=><button key={id} type="button" aria-pressed={!term && active===id} onClick={()=>pick(id)} className={`rounded-lg border px-3 py-2 text-left text-sm ${!term && active===id?'border-[#4ade80] text-[#4ade80]':'border-white/10 text-[#dce7e8]'}`}>{shortNames[id]}</button>)}</div></div>)}</div>
        </details>
        <div className="hidden lg:block">{families.map(f=><div key={f.title} className="mb-5 last:mb-0"><p className="mb-2 px-2 text-xs font-bold uppercase tracking-wide text-[#a4b8bd]">{f.title}</p>{f.ids.map(id=><button key={id} type="button" aria-pressed={!term && active===id} onClick={()=>pick(id)} className={`mb-1 block w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${!term && active===id?'bg-[#4ade80]/10 font-semibold text-[#4ade80]':'text-[#dce7e8] hover:bg-white/5'}`}>{shortNames[id]}</button>)}</div>)}</div>
      </nav>
      <div className="min-w-0" aria-live="polite">
        {term ? <div><h3 className="text-xl font-bold">{matches.length} matching packages</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{matches.map(({group:g,p})=><button key={g.id+p.title} type="button" onClick={()=>pick(g.id)} className="panel p-4 text-left hover:border-[#4ade80]"><span className="block text-xs text-[#a4b8bd]">{shortNames[g.id]}</span><span className="mt-1 block font-bold">{p.title}</span><span className="mt-2 block font-semibold text-[#4ade80]">{p.price}{!p.price.startsWith('Custom')?' / '+p.unit:''}</span><span className="mt-2 block text-xs text-[#a4b8bd]">View category and full details</span></button>)}</div>{!matches.length && <p className="muted mt-4">No matches. Try another service or clear your search.</p>}</div> : <section id={group.id} className="scroll-mt-28" key={group.id}><p className="text-xs font-semibold uppercase tracking-wide text-[#4ade80]">{group.packages.length} available packages</p><h3 className="mt-2 text-2xl font-extrabold md:text-3xl">{group.title}</h3><p className="muted mt-2 leading-7">{group.subtitle}</p><PackageDetails group={group}/></section>}
      </div>
    </div>
  </section>;
}
