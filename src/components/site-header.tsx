'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages & Pricing' },
  { href: '/work', label: 'Our work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); document.getElementById('mobile-menu-toggle')?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const active = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a0d]/95 backdrop-blur-xl">
    <div className="container-shell flex min-h-16 items-center justify-between gap-3 py-2 lg:min-h-20 lg:py-3">
      <Link href="/" onClick={()=>setOpen(false)} aria-label="Infinity Growth Tech homepage" className="flex min-w-0 items-center gap-2">
        <img src="/brand-mark.svg" alt="" width={44} height={44} className="h-10 w-10 shrink-0 rounded-lg object-contain lg:h-11 lg:w-11"/>
        <span className="text-xs font-extrabold uppercase tracking-[.06em] sm:text-sm">Infinity <span className="text-[#4ade80]">Growth Tech</span></span>
      </Link>
      <nav aria-label="Primary" className="hidden items-center gap-5 text-sm lg:flex xl:gap-7">
        {links.filter(l=>l.href!=='/contact' && l.href!=='/').map(l=><Link key={l.href} href={l.href} aria-current={active(l.href)?'page':undefined} className={active(l.href)?'font-semibold text-[#4ade80]':'text-[#c0ccd1] hover:text-white'}>{l.label}</Link>)}
      </nav>
      <Link href="/contact" className="button-outline hidden text-sm lg:inline-flex">Let's talk <ArrowUpRight size={16} aria-hidden="true"/></Link>
      <button id="mobile-menu-toggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white lg:hidden">{open?<X size={23}/>:<Menu size={23}/>}</button>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="border-t border-white/10 bg-[#10171c] lg:hidden">
      <div className="container-shell grid max-h-[70dvh] gap-1 overflow-y-auto py-3">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} aria-current={active(l.href)?'page':undefined} className={`flex min-h-12 items-center justify-between rounded-lg px-3 text-sm font-semibold ${active(l.href)?'bg-[#4ade80]/10 text-[#4ade80]':'text-[#e7eef1] hover:bg-white/5'}`}>{l.label}<ArrowUpRight size={16} aria-hidden="true"/></Link>)}</div>
    </nav>
  </header>;
}
