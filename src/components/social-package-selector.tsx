'use client';

import { useState } from 'react';
import Link from 'next/link';
import { packageGroups } from '@/lib/packages';

const options = [
  { label: 'Instagram & Facebook', id: 'social-media' },
  { label: 'LinkedIn', id: 'linkedin-marketing' },
  { label: 'YouTube', id: 'youtube-marketing' },
] as const;

export function SocialPackageSelector() {
  const [selected, setSelected] = useState<string[]>(['social-media']);
  const [tier, setTier] = useState(1);
  const plans = options.filter(o => selected.includes(o.id)).map(o => packageGroups.find(g => g.id === o.id)!.packages[tier]);
  const total = plans.reduce((sum, p) => sum + Number(p.price.replace(/[^0-9]/g, '')), 0);
  const comboName = selected.length === 3 ? '360° Social Growth' : selected.length === 2 ? selected.includes('social-media') ? selected.includes('linkedin-marketing') ? 'Social Authority' : 'Social & Video Growth' : 'Professional Influence' : '';
  const combo = packageGroups.find(g => g.id === 'combined-social')?.packages.find(p => p.title === comboName);
  const enquiry = (name: string) => '/contact?subject=Social%20Media%20Consultation&package=' + encodeURIComponent(name);

  return <div className="panel mt-8 p-5 sm:p-8">
    <p className="eyebrow">Find your plan</p>
    <h3 className="mt-3 text-2xl font-bold">Build your social media growth package</h3>
    <fieldset className="mt-5">
      <legend className="font-semibold">Choose your platforms</legend>
      <div className="mt-3 flex flex-wrap gap-3">{options.map(o => <label key={o.id} className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm">
        <input type="checkbox" className="accent-[#4ade80]" checked={selected.includes(o.id)} onChange={e => setSelected(prev => e.target.checked ? [...prev, o.id] : prev.filter(id => id !== o.id))} />{o.label}
      </label>)}</div>
    </fieldset>
    <fieldset className="mt-5">
      <legend className="font-semibold">Choose your standalone tier</legend>
      <div className="mt-3 flex flex-wrap gap-3">{['Entry', 'Growth', 'Pro / Authority'].map((label, i) => <label key={label} className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm">
        <input type="radio" name="social-tier" className="accent-[#4ade80]" checked={tier === i} onChange={() => setTier(i)} />{label}
      </label>)}</div>
    </fieldset>
    <div aria-live="polite" className="mt-6 border-t border-white/10 pt-6">
      {plans.length ? <><p className="muted text-sm">Selected standalone plans: {plans.map(p => p.title).join(' + ')}</p><p className="mt-2 text-3xl font-black text-[#4ade80]">₹{total.toLocaleString('en-IN')}<span className="ml-2 text-sm font-medium text-white">/ month</span></p><Link href={enquiry(plans.map(p => p.title).join(' + '))} className="button-outline mt-4">Discuss selected plans</Link></> : <p className="muted">Choose at least one platform to see pricing.</p>}
      {combo && <div className="mt-5 rounded-lg border border-white/20 p-4"><p className="font-semibold">Alternative combined plan: {combo.title}</p><p className="mt-2 text-2xl font-bold text-[#4ade80]">{combo.price}/month</p><p className="muted mt-2 text-sm">Combined plans have their own deliverables, not the full sum of standalone tiers.</p><a href="#combined-social" className="mt-3 inline-block text-sm font-semibold text-[#4ade80]">Compare combined plan details</a><div><Link href={enquiry(combo.title)} className="button-outline mt-3">Discuss combined plan</Link></div></div>}
    </div>
    <p className="muted mt-4 text-xs">Excludes applicable GST and third-party costs.</p>
  </div>;
}
