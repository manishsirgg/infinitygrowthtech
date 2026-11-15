import Link from 'next/link';
export function SiteFooter() {
  return <footer className="rule py-10">
    <div className="container-shell flex flex-col gap-5 text-sm text-[#a0b0b8] sm:flex-row sm:items-center sm:justify-between">
      <div><p className="font-bold text-white">Infinity Growth Tech</p><p>Build smarter. Grow faster. Operate better.</p></div>
      <div className="flex flex-wrap gap-5"><Link href="/services">Services</Link><Link href="/work">Our work</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></div>
      <p>© {new Date().getFullYear()} Infinity Growth Tech</p>
    </div>
  </footer>;
}
