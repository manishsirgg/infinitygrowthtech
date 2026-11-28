import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { findProject, portfolioProjects } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return portfolioProjects.map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return { title: 'Project not found' };
  return { title: `${project.name} — Selected Work`, description: project.summary, alternates: { canonical: `/work/${project.slug}` } };
}

export default async function WorkDetailPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();
  return <div className="container-shell py-8 sm:py-14 md:py-24">
    <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[#b7c6cb] hover:text-[#4ade80]"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
    <header className="grid-halo mt-10 rounded-2xl border border-white/10 px-5 py-8 sm:px-7 md:px-14 md:py-16">
      <p className="eyebrow">{project.type} / First-party venture</p>
      <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl md:text-7xl">{project.name}</h1>
      <p className="muted mt-6 max-w-3xl text-base leading-7 md:text-lg md:leading-8">{project.summary}</p>
      <a href={project.url} rel="noopener noreferrer" target="_blank" className="button-outline mt-9">Visit live project <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>
    </header>
    <section className="grid gap-6 py-10 md:gap-12 md:py-20 md:grid-cols-2">
      <div><p className="eyebrow">Project overview</p><h2 className="mt-4 text-3xl font-bold">A practical demonstration of our capabilities.</h2><p className="muted mt-5 leading-8">{project.note}</p></div>
      <div><p className="eyebrow">Selected platform features</p><ul className="mt-6 space-y-5">{project.scope.map(item=><li key={item} className="flex gap-3 text-[#c9d5d9]"><CheckCircle2 size={19} className="mt-1 shrink-0 text-[#4ade80]" aria-hidden="true" />{item}</li>)}</ul></div>
    </section>
    <section className="panel p-5 md:p-12"><h2 className="text-3xl font-bold">Planning something similar?</h2><p className="muted mt-4 max-w-2xl leading-7">We can review your business requirements and recommend a realistic development scope.</p><Link href="/contact" className="button-primary mt-7">Discuss your project <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
  </div>;
}
