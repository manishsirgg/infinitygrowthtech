import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Megaphone, Workflow } from 'lucide-react';
import { services } from '@/lib/site';
import { portfolioProjects } from '@/lib/content';

const icons = [Code2, Megaphone, Workflow] as const;

export default function HomePage() {
  return <>
    <section className="grid-halo relative overflow-hidden py-24 md:py-36">
      <div className="container-shell relative">
        <p className="eyebrow mb-7">Digital engineering · Growth strategy · Automation</p>
        <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,7.4rem)] font-black leading-[.99] tracking-[-.065em]">Build smarter.<br /><span className="gradient-text">Grow further.</span></h1>
        <p className="muted mt-8 max-w-2xl text-lg leading-8 md:text-xl">We create websites, digital platforms, marketing systems and practical automations for ambitious businesses ready to strengthen their online presence.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="button-primary">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <Link href="/work" className="button-outline">Explore our work <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-[#9bacb3] md:flex-row md:items-center md:gap-8">
          <span className="font-bold uppercase tracking-widest text-[#dce6e9]">End-to-end capabilities</span>
          <span>Strategy & design</span><span>Development</span><span>Marketing</span><span>Automation</span>
        </div>
      </div>
    </section>

    <section id="solutions" className="py-24">
      <div className="container-shell">
        <p className="eyebrow">What we do</p>
        <div className="mt-4 mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">One partner. Three ways to move forward.</h2>
          <p className="muted max-w-sm leading-7">Integrated technology and growth capabilities tailored to your business needs.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return <article key={service.slug} className="panel flex min-h-[370px] flex-col p-7">
              <div className="flex items-start justify-between"><Icon aria-hidden="true" className="text-[#4ade80]" size={30} /><span className="text-xs font-bold tracking-widest text-[#6d858d]">{service.number}</span></div>
              <p className="eyebrow mt-11">{service.name}</p>
              <h3 className="mt-3 text-2xl font-bold">{service.title}</h3>
              <p className="muted mt-4 leading-7">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-[#c3d1d5]">{service.items.map(item=><li key={item} className="flex items-center gap-2"><CheckCircle2 size={15} className="text-[#4ade80]" aria-hidden="true" />{item}</li>)}</ul>
            </article>;
          })}
        </div>
        <div className="mt-9"><Link href="/services" className="button-outline">Explore all services <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section id="work" className="border-y border-white/10 bg-[#0d1317] py-24">
      <div className="container-shell">
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">Real platforms. Real execution.</h2>
        <p className="muted mt-5 max-w-2xl leading-7">These are ventures developed and operated within our own portfolio—not external client case studies. Explore examples of our technical and product capabilities.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {portfolioProjects.map(work=><article key={work.slug} className="panel flex flex-col p-7">
            <p className="eyebrow">{work.type}</p><h3 className="mt-7 text-2xl font-bold">{work.name}</h3>
            <p className="muted mt-4 flex-1 leading-7">{work.summary}</p>
            <Link className="mt-9 inline-flex items-center gap-2 font-bold text-[#4ade80] hover:text-[#a2fac0]" href={`/work/${work.slug}`}>View project <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </article>)}
        </div>
        <div className="mt-9"><Link href="/work" className="button-outline">See all selected work <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section id="approach" className="py-24"><div className="container-shell">
      <p className="eyebrow">How we work</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">Clarity before complexity.</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-4">{[['01','Discover','Understand the business problem.'],['02','Plan','Define priorities, scope and measurable goals.'],['03','Build','Design, develop and test the solution.'],['04','Improve','Review performance and iterate.']].map(([n,t,d])=><div key={n} className="border-t border-[#40515a] pt-6"><span className="eyebrow">{n}</span><h3 className="mt-5 text-xl font-bold">{t}</h3><p className="muted mt-3 leading-7">{d}</p></div>)}</div>
    </div></section>

    <section className="pb-24"><div className="container-shell"><div className="panel grid-halo flex flex-col items-start gap-7 p-9 md:p-14">
      <p className="eyebrow">Let's talk about what's next</p>
      <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">Your next chapter starts with a useful conversation.</h2>
      <p className="muted max-w-2xl leading-7">Tell us what you're building or trying to improve. We'll help identify a realistic starting point.</p>
      <Link className="button-primary" href="/contact">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div></div></section>
  </>;
}
