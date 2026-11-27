'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { productionCategories, type ServicePackage } from '@/lib/packages';

export function ProductionPackageBrowser({ packages }: { packages: ServicePackage[] }) {
  const [active, setActive] = useState<string>(productionCategories[0].id);
  const category = productionCategories.find(c => c.id === active) ?? productionCategories[0];
  const titles: readonly string[] = category.packageTitles;
  const visible = packages.filter(p => titles.includes(p.title));
  return <div className="mt-8">
    <div className="panel p-5 sm:p-7">
      <h3 className="text-xl font-bold">Production expertise, without a management retainer</h3>
      <p className="muted mt-3 max-w-3xl leading-7">Choose a specialist production service or a monthly content partnership. We combine human creative direction with AI-assisted workflows where appropriate. Publishing, account management, audience analytics and paid advertising are separate services.</p>
      <p className="mt-5 text-sm font-semibold">Explore production services</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter production packages">
        {productionCategories.map(c => <button key={c.id} type="button" aria-pressed={active === c.id} onClick={() => setActive(c.id)} className={`rounded-lg border px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4ade80] ${active === c.id ? 'border-[#4ade80] bg-[#4ade80]/10 text-[#4ade80]' : 'border-white/20 text-[#d0dcde] hover:border-[#4ade80]'}`}>{c.title}</button>)}
      </div>
    </div>
    <div aria-live="polite" className="mt-6"><h3 className="text-2xl font-bold">{category.title}</h3><p className="muted mt-2 text-sm">{visible.length} packages · Prices exclude applicable GST</p></div>
    <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {visible.map(pkg => <article key={pkg.title} className="panel flex min-w-0 flex-col p-6">
        <div className="flex-1">
          <h4 className="text-xl font-bold">{pkg.title}</h4>
          <p className="mt-2 text-sm text-[#b3c6c8]">{pkg.description}</p>
          <p className="mt-6 break-words text-3xl font-black text-[#4ade80]">{pkg.price}{!pkg.price.startsWith('Custom') && <span className="ml-2 text-sm font-medium text-[#b4c5c9]">/ {pkg.unit}</span>}</p>
          <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">{pkg.features.map(feature => <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-[#dce7e8]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#4ade80]" aria-hidden="true"/><span>{feature}</span></li>)}</ul>
        </div>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-xs leading-5 text-[#a4b8bd]">{pkg.note}</p>
          <Link href={`/contact?subject=Content%20Production&package=${encodeURIComponent(pkg.title)}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#4ade80]/60 px-4 py-3 text-sm font-semibold text-[#4ade80] transition-colors hover:bg-[#4ade80]/10">Request this package <ArrowUpRight size={16} aria-hidden="true"/></Link>
        </div>
      </article>)}
    </div>
    <div className="panel mt-8 p-5 sm:p-7">
      <h3 className="text-xl font-bold">Clear production scope</h3>
      <p className="muted mt-3 text-sm leading-7">Standard creative and editing services include one consolidated revision. Additional revisions, rush delivery, extensive raw footage, advanced effects, premium AI credits, licensed stock, music, travel, studio and specialist crew are quoted separately where applicable. Mobile content shoots and professional camera production are distinct services. Custom shoots require an agreed shot list, deliverables, rights and written scope before production.</p>
      <Link href="/contact?subject=Content%20Production%20Consultation" className="button-outline mt-5">Discuss your production requirements <ArrowUpRight size={16} aria-hidden="true"/></Link>
    </div>
  </div>;
}
