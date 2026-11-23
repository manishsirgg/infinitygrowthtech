import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages & Pricing' },
  { href: '/marketplaces', label: 'Amazon & Flipkart' },
  { href: '/work', label: 'Our work' },
  { href: '/about', label: 'About' },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a0d]/95 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" aria-label="Infinity Growth Tech homepage" className="flex items-center gap-3">
          <img src="/brand-mark.svg" alt="" aria-hidden="true" width={48} height={48} className="h-12 w-12 shrink-0 rounded-lg object-contain" />
          <span className="text-sm font-extrabold uppercase tracking-[.11em] sm:text-base">Infinity <span className="text-[#4ade80]">Growth Tech</span></span>
        </Link>
        <nav aria-label="Primary" className="order-3 flex w-full flex-wrap items-center gap-5 text-sm text-[#c0ccd1] sm:order-none sm:w-auto lg:gap-8">
          {links.map(link => <Link key={link.href} className="hover:text-[#4ade80]" href={link.href}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="button-outline text-sm">Let's talk <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </header>
  );
}
