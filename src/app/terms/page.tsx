import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
export const metadata: Metadata = { title: "Terms of Service", description: "Website information and the commercial framework for Infinity Growth Tech engagements." };
const sections = [
  {
    "title": "Website and proposals",
    "paragraphs": [
      "Published packages are standard service scopes and starting prices, not an automatic acceptance of an order. A project starts only when both parties agree the written scope, price, responsibilities and payment terms. If a signed agreement differs from general website information, that agreement governs the engagement, subject to applicable law."
    ]
  },
  {
    "title": "Pricing and third-party fees",
    "paragraphs": [
      "Prices are in INR excluding applicable GST. Prices marked + are starting estimates. Advertising spend, hosting, domain registration, subscriptions, messaging, marketplace fees and AI usage are separate unless specifically included. International, multi-location and customised work is quoted separately."
    ]
  },
  {
    "title": "Payment and scope",
    "paragraphs": [
      "Standard website projects generally use 50% advance and 50% before handover. Larger commerce and software projects may use agreed milestone payments such as 40/30/20/10. Monthly services are billed in advance. The written proposal confirms actual payment dates, deliverables, revision limits and acceptance criteria. Changes beyond scope require agreement."
    ]
  },
  {
    "title": "Client responsibilities and approvals",
    "paragraphs": [
      "Clients provide accurate information, lawful content, access and timely approvals. Client accounts, domains, data and advertising budgets remain client-owned. Delays in access or approvals can affect schedules. Clients are responsible for platform eligibility, product compliance and permissions for supplied assets."
    ]
  },
  {
    "title": "Ownership and third-party services",
    "paragraphs": [
      "Rights in deliverables, source files and licences follow the written agreement and payment terms. Third-party software, stock assets, fonts and platform services remain subject to their licences. Do not submit confidential credentials through public enquiry forms."
    ]
  },
  {
    "title": "Performance and availability",
    "paragraphs": [
      "We work toward agreed objectives but cannot guarantee search rankings, AI citations, follower growth, sales, leads, platform approvals or uninterrupted third-party services. AI-generated outputs require suitable review. New AEO/GEO subscriptions depend on platform readiness."
    ]
  },
  {
    "title": "Support and disputes",
    "paragraphs": [
      "Support, warranty, renewal and cancellation arrangements are defined in the agreement. Contact us to resolve scope, delivery or billing concerns. Nothing here excludes rights or remedies that cannot lawfully be excluded."
    ]
  }
];
export default function PolicyPage() {
 return <article className="container-shell py-10 md:py-20"><div className="max-w-3xl"><p className="eyebrow">Infinity Growth Tech · Customer information</p><h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Terms of Service</h1><p className="muted mt-4 leading-7">Website information and the commercial framework for Infinity Growth Tech engagements.</p><p className="mt-3 text-xs text-[#a0b0b8]">Last updated: 28 November 2026</p><nav aria-label="On this page" className="panel mt-6 p-4"><p className="font-semibold">On this page</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{sections.map((s,i)=><a key={s.title} href={'#section-'+i} className="text-sm text-[#4ade80] hover:underline">{s.title}</a>)}</div></nav><div className="mt-7 space-y-6">{sections.map((s,i)=><section id={'section-'+i} key={s.title} className="border-b border-white/10 pb-6"><h2 className="text-xl font-bold">{s.title}</h2>{s.paragraphs.map((p,j)=><p key={j} className="muted mt-3 leading-7">{p}</p>)}</section>)}</div><div className="panel mt-7 p-5"><h2 className="font-bold">Questions or requests?</h2><p className="muted mt-2 break-all"><a href={'mailto:'+site.email} className="text-[#4ade80]">{site.email}</a></p><p className="muted mt-2"><a href={'tel:'+site.tel}>{site.phone}</a></p><Link href="/contact" className="button-outline mt-4">Contact us</Link></div><nav aria-label="Related information" className="mt-5 flex flex-wrap gap-4 text-sm text-[#4ade80]"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund-policy">Cancellations &amp; refunds</Link><Link href="/cookie-policy">Cookies</Link><Link href="/faq">FAQs</Link></nav></div></article>;
}
