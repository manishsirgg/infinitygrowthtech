import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
export const metadata: Metadata = { title: "Cookie & Website Technologies Policy", description: "Information about essential website technologies, security checks and external services." };
const sections = [
  {
    "title": "Website operation",
    "paragraphs": [
      "Our public website uses ordinary web requests to deliver pages. Hosting and security infrastructure may process technical information and use necessary browser technologies. The source code reviewed does not include an advertising pixel or a dedicated marketing-cookie integration; live hosting and provider settings may differ."
    ]
  },
  {
    "title": "Verification and external services",
    "paragraphs": [
      "Cloudflare Turnstile helps protect the enquiry form from automated abuse and may process browser and device signals. Links to WhatsApp and other external websites take you to services with their own privacy and cookie practices."
    ]
  },
  {
    "title": "Analytics and preferences",
    "paragraphs": [
      "Where site traffic measurement is enabled, its processing depends on the provider and configuration. We do not claim that every third-party service is cookie-free. You can manage cookies and site data through your browser; restricting essential technologies may prevent form verification."
    ]
  },
  {
    "title": "Changes and contact",
    "paragraphs": [
      "We will update this information when website tracking or integrations change. If non-essential tracking is introduced, appropriate notices and controls should be provided as required."
    ]
  }
];
export default function PolicyPage() {
 return <article className="container-shell py-10 md:py-20"><div className="max-w-3xl"><p className="eyebrow">Infinity Growth Tech · Customer information</p><h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Cookie & Website Technologies Policy</h1><p className="muted mt-4 leading-7">Information about essential website technologies, security checks and external services.</p><p className="mt-3 text-xs text-[#a0b0b8]">Last updated: 28 November 2026</p><nav aria-label="On this page" className="panel mt-6 p-4"><p className="font-semibold">On this page</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{sections.map((s,i)=><a key={s.title} href={'#section-'+i} className="text-sm text-[#4ade80] hover:underline">{s.title}</a>)}</div></nav><div className="mt-7 space-y-6">{sections.map((s,i)=><section id={'section-'+i} key={s.title} className="border-b border-white/10 pb-6"><h2 className="text-xl font-bold">{s.title}</h2>{s.paragraphs.map((p,j)=><p key={j} className="muted mt-3 leading-7">{p}</p>)}</section>)}</div><p className="muted mt-4 text-sm">Read the <Link href="/privacy" className="text-[#4ade80]">Privacy Policy</Link> for enquiry data and provider details.</p><div className="panel mt-7 p-5"><h2 className="font-bold">Questions or requests?</h2><p className="muted mt-2 break-all"><a href={'mailto:'+site.email} className="text-[#4ade80]">{site.email}</a></p><p className="muted mt-2"><a href={'tel:'+site.tel}>{site.phone}</a></p><Link href="/contact" className="button-outline mt-4">Contact us</Link></div><nav aria-label="Related information" className="mt-5 flex flex-wrap gap-4 text-sm text-[#4ade80]"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund-policy">Cancellations &amp; refunds</Link><Link href="/cookie-policy">Cookies</Link><Link href="/faq">FAQs</Link></nav></div></article>;
}
