import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
export const metadata: Metadata = { title: "Cancellation & Refund Policy", description: "How cancellation, changes and refund requests are assessed for project and recurring services." };
const sections = [
  {
    "title": "Before work begins",
    "paragraphs": [
      "Contact us promptly if you need to cancel or change an accepted proposal. Eligibility for any refund depends on the written agreement, amounts paid, work already completed and committed third-party costs. We will review the request and explain the calculation."
    ]
  },
  {
    "title": "Project services",
    "paragraphs": [
      "Website development, branding, production and automation projects are delivered against agreed milestones. If a project is cancelled, completed work, agreed commitments and recoverable balances are assessed under the project agreement. We do not impose a blanket non-refundable rule on every payment."
    ]
  },
  {
    "title": "Recurring services",
    "paragraphs": [
      "Monthly management, monitoring and maintenance services are billed in advance. Renewal and cancellation notice periods follow the accepted proposal. Request cancellation before the next billing cycle where possible; third-party subscription commitments may affect the effective end date."
    ]
  },
  {
    "title": "Third-party charges",
    "paragraphs": [
      "Ad spend, platform subscriptions, software licences, hosting and other external purchases may be subject to the provider's own cancellation and refund rules. We will explain separately identified charges and any recoverable amounts."
    ]
  },
  {
    "title": "Requesting a refund",
    "paragraphs": [
      "Email us with the proposal or invoice reference, payment details sufficient to identify the transaction and the reason for the request. Do not send complete card numbers or passwords. We will review the circumstances and communicate eligibility, amount and expected processing time. Applicable statutory rights remain unaffected."
    ]
  }
];
export default function PolicyPage() {
 return <article className="container-shell py-10 md:py-20"><div className="max-w-3xl"><p className="eyebrow">Infinity Growth Tech · Customer information</p><h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Cancellation & Refund Policy</h1><p className="muted mt-4 leading-7">How cancellation, changes and refund requests are assessed for project and recurring services.</p><p className="mt-3 text-xs text-[#a0b0b8]">Last updated: 28 November 2026</p><nav aria-label="On this page" className="panel mt-6 p-4"><p className="font-semibold">On this page</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{sections.map((s,i)=><a key={s.title} href={'#section-'+i} className="text-sm text-[#4ade80] hover:underline">{s.title}</a>)}</div></nav><div className="mt-7 space-y-6">{sections.map((s,i)=><section id={'section-'+i} key={s.title} className="border-b border-white/10 pb-6"><h2 className="text-xl font-bold">{s.title}</h2>{s.paragraphs.map((p,j)=><p key={j} className="muted mt-3 leading-7">{p}</p>)}</section>)}</div><div className="panel mt-7 p-5"><h2 className="font-bold">Questions or requests?</h2><p className="muted mt-2 break-all"><a href={'mailto:'+site.email} className="text-[#4ade80]">{site.email}</a></p><p className="muted mt-2"><a href={'tel:'+site.tel}>{site.phone}</a></p><Link href="/contact" className="button-outline mt-4">Contact us</Link></div><nav aria-label="Related information" className="mt-5 flex flex-wrap gap-4 text-sm text-[#4ade80]"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund-policy">Cancellations &amp; refunds</Link><Link href="/cookie-policy">Cookies</Link><Link href="/faq">FAQs</Link></nav></div></article>;
}
