import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
export const metadata: Metadata = { title: "Privacy Policy", description: "How Infinity Growth Tech handles information submitted through this website and related enquiry channels." };
const sections = [
  {
    "title": "Scope and contact",
    "paragraphs": [
      "Infinity Growth Tech operates this business website. This notice covers website browsing and enquiries, not every client project or separately operated product. Project-specific processing and responsibilities are agreed separately."
    ]
  },
  {
    "title": "Information we receive",
    "paragraphs": [
      "Our enquiry form collects your name, email address, optional phone number, service interest, project message and selected package if provided. Campaign source and UTM parameters may accompany the enquiry. Please do not submit passwords, payment card details, identity documents or other sensitive information through this form.",
      "When you contact us directly by phone, email or WhatsApp, we receive the information you choose to provide. Website hosting and security services may process technical request information, such as IP address, browser information and diagnostic logs."
    ]
  },
  {
    "title": "Why we use information",
    "paragraphs": [
      "We use enquiry information to understand your requirements, respond, prepare proposals, coordinate requested services and maintain relevant business records. Security checks help prevent spam and abuse. Campaign attribution helps understand how enquiries reach us. We do not treat an enquiry as permission to receive unrelated promotional campaigns."
    ]
  },
  {
    "title": "Service providers and external links",
    "paragraphs": [
      "The website uses Vercel hosting, Supabase for enquiry records and Cloudflare Turnstile for verification. Turnstile receives a verification token and may receive the originating IP address. If you choose WhatsApp, email or another external service, that provider handles information under its own terms. Project-specific providers are identified as appropriate in the engagement."
    ]
  },
  {
    "title": "Storage, retention and security",
    "paragraphs": [
      "Enquiry records are stored in the configured Supabase database. Retention depends on the purpose of the enquiry, any resulting engagement, applicable recordkeeping duties and legitimate dispute or security needs. Contact us to request deletion. We use server-side verification and restrict access through application credentials; no online system can be guaranteed completely secure. Provider infrastructure may process information outside India."
    ]
  },
  {
    "title": "Your choices and requests",
    "paragraphs": [
      "You may contact us to request access, correction, deletion, withdrawal of consent where relevant, or to raise a privacy concern. We may need to verify your identity and assess applicable obligations before acting. You can decline to submit the form and use another contact channel. Withdrawal does not affect processing already lawfully carried out."
    ]
  },
  {
    "title": "Children and changes",
    "paragraphs": [
      "This business website is intended for adults and business representatives. Please do not provide children's personal data through the enquiry form. We may update this notice when our practices change; the date above identifies the current version."
    ]
  }
];
export default function PolicyPage() {
 return <article className="container-shell py-10 md:py-20"><div className="max-w-3xl"><p className="eyebrow">Infinity Growth Tech · Customer information</p><h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Privacy Policy</h1><p className="muted mt-4 leading-7">How Infinity Growth Tech handles information submitted through this website and related enquiry channels.</p><p className="mt-3 text-xs text-[#a0b0b8]">Last updated: 28 November 2026</p><nav aria-label="On this page" className="panel mt-6 p-4"><p className="font-semibold">On this page</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{sections.map((s,i)=><a key={s.title} href={'#section-'+i} className="text-sm text-[#4ade80] hover:underline">{s.title}</a>)}</div></nav><div className="mt-7 space-y-6">{sections.map((s,i)=><section id={'section-'+i} key={s.title} className="border-b border-white/10 pb-6"><h2 className="text-xl font-bold">{s.title}</h2>{s.paragraphs.map((p,j)=><p key={j} className="muted mt-3 leading-7">{p}</p>)}</section>)}</div><p className="muted mt-4 text-sm leading-7">Provider information: <a className="text-[#4ade80]" href="https://vercel.com/legal/privacy-notice">Vercel</a> · <a className="text-[#4ade80]" href="https://supabase.com/privacy">Supabase</a> · <a className="text-[#4ade80]" href="https://www.cloudflare.com/turnstile-privacy-policy/">Cloudflare Turnstile Privacy Addendum</a>.</p><div className="panel mt-7 p-5"><h2 className="font-bold">Questions or requests?</h2><p className="muted mt-2 break-all"><a href={'mailto:'+site.email} className="text-[#4ade80]">{site.email}</a></p><p className="muted mt-2"><a href={'tel:'+site.tel}>{site.phone}</a></p><Link href="/contact" className="button-outline mt-4">Contact us</Link></div><nav aria-label="Related information" className="mt-5 flex flex-wrap gap-4 text-sm text-[#4ade80]"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund-policy">Cancellations &amp; refunds</Link><Link href="/cookie-policy">Cookies</Link><Link href="/faq">FAQs</Link></nav></div></article>;
}
