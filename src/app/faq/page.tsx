import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Practical answers about choosing a package, working with us and managing ongoing services." };
const sections = [
  {
    "title": "Choosing a package",
    "paragraphs": [
      "You can choose a focused service, an integrated growth plan or request a tailored proposal. Published prices cover the stated scope; we recommend a consultation when requirements are unclear."
    ]
  },
  {
    "title": "How projects start",
    "paragraphs": [
      "We discuss objectives, existing assets, budget and timeline, then agree deliverables, access requirements, payment milestones and review points before starting."
    ]
  },
  {
    "title": "Are GST and advertising included?",
    "paragraphs": [
      "Published fees exclude applicable GST, media spend and separately identified third-party charges unless the proposal states otherwise."
    ]
  },
  {
    "title": "Do you work outside Indore?",
    "paragraphs": [
      "Yes. We offer remote engagements across India and consider international projects with scope-based quotations."
    ]
  },
  {
    "title": "What is the difference between SEO, AEO and GEO?",
    "paragraphs": [
      "SEO improves conventional search discoverability; AEO focuses on answer-ready information; GEO focuses on visibility in generative AI responses. Unified packages combine traditional and AI search work. Weekly and daily AI monitoring options are billed monthly."
    ]
  },
  {
    "title": "Who owns the accounts and files?",
    "paragraphs": [
      "Client accounts, domains, data and advertising budgets remain client-owned. Deliverable rights and source-file handover are specified in the agreement."
    ]
  },
  {
    "title": "Can I cancel or change a package?",
    "paragraphs": [
      "Yes, subject to the agreed scope, renewal terms and committed costs. See our cancellation and refund policy for how requests are assessed."
    ]
  },
  {
    "title": "Do you provide ongoing support?",
    "paragraphs": [
      "Website care, CRM care, automation care and AI assistant care are available in defined scopes. New functionality and major changes are separately quoted."
    ]
  }
];
export default function PolicyPage() {
 return <article className="container-shell py-10 md:py-20"><div className="max-w-3xl"><p className="eyebrow">Infinity Growth Tech · Customer information</p><h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Frequently Asked Questions</h1><p className="muted mt-4 leading-7">Practical answers about choosing a package, working with us and managing ongoing services.</p><p className="mt-3 text-xs text-[#a0b0b8]">Last updated: 28 November 2026</p><nav aria-label="On this page" className="panel mt-6 p-4"><p className="font-semibold">On this page</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{sections.map((s,i)=><a key={s.title} href={'#section-'+i} className="text-sm text-[#4ade80] hover:underline">{s.title}</a>)}</div></nav><div className="mt-7 space-y-6">{sections.map((s,i)=><section id={'section-'+i} key={s.title} className="border-b border-white/10 pb-6"><h2 className="text-xl font-bold">{s.title}</h2>{s.paragraphs.map((p,j)=><p key={j} className="muted mt-3 leading-7">{p}</p>)}</section>)}</div><div className="panel mt-7 p-5"><h2 className="font-bold">Questions or requests?</h2><p className="muted mt-2 break-all"><a href={'mailto:'+site.email} className="text-[#4ade80]">{site.email}</a></p><p className="muted mt-2"><a href={'tel:'+site.tel}>{site.phone}</a></p><Link href="/contact" className="button-outline mt-4">Contact us</Link></div><nav aria-label="Related information" className="mt-5 flex flex-wrap gap-4 text-sm text-[#4ade80]"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund-policy">Cancellations &amp; refunds</Link><Link href="/cookie-policy">Cookies</Link><Link href="/faq">FAQs</Link></nav></div></article>;
}
