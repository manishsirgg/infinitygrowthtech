import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Selected Work & Product Portfolio',
  description: 'Explore first-party platforms developed within the Infinity Growth Tech ecosystem, including education, property and publishing projects.',
};

export default function WorkPage() {
  return <div className="container-shell py-20 md:py-28">
    <p className="eyebrow">Our work</p>
    <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Products we've <span className="gradient-text">built and developed.</span></h1>
    <p className="muted mt-7 max-w-3xl text-lg leading-8">These examples come from our own ventures. They are presented to demonstrate product thinking and implementation capabilities, not as independent customer case studies or client performance results.</p>
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {portfolioProjects.map(project => <article key={project.slug} className="panel flex flex-col p-8">
        <p className="eyebrow">{project.type}</p><h2 className="mt-5 text-3xl font-bold">{project.name}</h2>
        <p className="muted mt-4 flex-1 leading-7">{project.summary}</p>
        <Link href={`/work/${project.slug}`} className="mt-9 inline-flex items-center gap-2 font-semibold text-[#4ade80] hover:text-[#a2fac0]">Explore project <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </article>)}
    </div>
    <div className="mt-16"><Link href="/contact" className="button-primary">Have a similar project? Let's talk <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
  </div>;
}
