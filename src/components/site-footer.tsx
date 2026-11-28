import Link from 'next/link';
import { offices, site } from '@/lib/site';

export function SiteFooter() {
  return <footer className="rule py-7 md:py-10">
    <div className="container-shell grid gap-6 text-sm text-[#a0b0b8] md:grid-cols-[1fr_auto] lg:grid-cols-[1.2fr_1.6fr_auto]">
      <div>
        <p className="font-bold text-white">Infinity Growth Tech</p>
        <p className="mt-1">{site.tagline}</p>
        <div className="mt-4 flex flex-col gap-3">
          <a className="break-all hover:text-[#4ade80]" href={"mailto:" + site.email}>{site.email}</a>
          <a className="hover:text-[#4ade80]" href={"tel:" + site.tel}>{site.phone} · Call / SMS</a>
          <a className="hover:text-[#4ade80]" href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {offices.map(office => (
          <div key={office.city}>
            <p className="font-semibold text-white">{office.label}</p>
            <p className="mt-1 leading-6">{office.address}, {office.region}</p>
          </div>
        ))}
      </div>
      <nav aria-label="Footer" className="grid grid-cols-2 content-start gap-x-4 gap-y-3 sm:flex sm:flex-wrap md:col-span-2 lg:col-span-1 lg:flex-col">
        <Link href="/services">Services</Link><Link href="/packages">Packages &amp; Pricing</Link><Link href="/work">Our work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/faq">FAQs</Link><Link href="/support">Client support</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link><Link href="/refund-policy">Cancellations &amp; refunds</Link><Link href="/cookie-policy">Cookie Policy</Link>
      </nav>
    </div>
    <div className="container-shell mt-6 border-t border-white/10 pt-5 text-xs text-[#82969e]">
      © {new Date().getFullYear()} Infinity Growth Tech
    </div>
  </footer>;
}
