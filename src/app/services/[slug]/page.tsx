import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { findService, serviceCatalog } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return serviceCatalog.map(service => ({ slug: service.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug);
  if (!service) return { title: 'Service not found' };
  return { title: service.title, description: service.summary, alternates: { canonical: `/services/${service.slug}` } };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = findService((await params).slug);
  if (!service) notFound();
  return <div className="container-shell py-16 md:py-24">
    <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#b7c6cb] hover:text-[#4ade80]"><ArrowLeft size={16} aria-hidden="true" /> All services</Link>
    <header className="grid-halo mt-10 rounded-2xl border border-white/10 px-7 py-16 md:px-14">
      <p className="eyebrow">{service.category} / Digital solutions</p>
      <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">{service.title}</h1>
      <p className="muted mt-7 max-w-3xl text-lg leading-8">{service.summary}</p>
      <Link href="/contact" className="button-primary mt-10">Discuss this service <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </header>
    <section className="grid gap-10 py-20 md:grid-cols-2">
      <div><p className="eyebrow">Who it's for</p><h2 className="mt-4 text-3xl font-bold">Built for your situation.</h2><p className="muted mt-5 leading-8">{service.audience}</p></div>
      <div><p className="eyebrow">What we aim to improve</p><h2 className="mt-4 text-3xl font-bold">The intended outcomes</h2><ul className="mt-6 space-y-4">{service.outcomes.map(item=><li className="flex items-start gap-3 text-[#c9d5d9]" key={item}><CheckCircle2 className="mt-1 shrink-0 text-[#4ade80]" size={18} aria-hidden="true" />{item}</li>)}</ul></div>
    </section>
    <section className="panel p-8 md:p-12"><p className="eyebrow">Typical scope</p><h2 className="mt-4 text-3xl font-bold">What the engagement may include</h2><div className="mt-9 grid gap-4 md:grid-cols-2">{service.deliverables.map((item,index)=><div className="border-t border-white/15 py-5" key={item}><span className="eyebrow">0{index+1}</span><p className="mt-3 text-lg font-semibold">{item}</p></div>)}</div><p className="muted mt-4 text-sm">Final deliverables, integrations, costs and timelines are agreed in writing for each project.</p></section>
    <section className="py-20"><p className="eyebrow">Process</p><h2 className="mt-4 text-3xl font-bold">How we approach the work</h2><div className="mt-9 grid gap-5 md:grid-cols-4">{service.process.map((step,index)=><div key={step} className="border-t border-[#40515a] pt-5"><span className="eyebrow">0{index+1}</span><p className="mt-4 leading-7">{step}</p></div>)}</div></section>
    <section className="border-t border-white/10 py-16"><p className="eyebrow">Common questions</p><h2 className="mt-4 text-3xl font-bold">Frequently asked questions</h2><div className="mt-7 max-w-4xl divide-y divide-white/10">{service.faq.map(item=><div key={item.question} className="py-6"><h3 className="text-xl font-bold">{item.question}</h3><p className="muted mt-3 leading-7">{item.answer}</p></div>)}</div></section>
    <section className="panel p-8 md:p-12"><h2 className="text-3xl font-bold">Let's define the right scope.</h2><p className="muted mt-4 max-w-2xl leading-7">Share your goals and what you already have in place. We'll discuss an appropriate next step, without promising outcomes we cannot verify.</p><Link href="/contact" className="button-primary mt-7">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
  </div>;
}
