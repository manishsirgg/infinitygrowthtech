import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Code2, Megaphone, Workflow } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Infinity Growth Tech’s approach to practical technology, marketing and business automation solutions.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <div className="container-shell py-20 md:py-28">
    <p className="eyebrow">About Infinity Growth Tech</p>
    <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Technology should <span className="gradient-text">solve business problems.</span></h1>
    <p className="muted mt-8 max-w-3xl text-lg leading-8">Infinity Growth Tech combines software development, digital experience design and marketing thinking to help businesses build stronger foundations for growth.</p>
    <section className="mt-16 grid gap-8 md:grid-cols-[1fr_1fr]">
      <div className="panel p-8 md:p-10"><p className="eyebrow">Our perspective</p><h2 className="mt-5 text-3xl font-bold">A connected approach</h2><p className="muted mt-5 leading-8">A website, an advertising campaign and a customer follow-up process should not work in isolation. We start with the business objective and design solutions around the customer journey and day-to-day operations.</p></div>
      <div className="panel p-8 md:p-10"><p className="eyebrow">Our experience</p><h2 className="mt-5 text-3xl font-bold">Built through real ventures</h2><p className="muted mt-5 leading-8">Our first-party digital projects span education, property and publishing. They demonstrate practical product and development experience; they are not presented as independent client engagements.</p><Link href="/work" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#4ade80]">Explore selected work <ArrowUpRight size={18} aria-hidden="true"/></Link></div>
    </section>
    <section className="py-20"><p className="eyebrow">What we bring together</p><div className="mt-8 grid gap-5 md:grid-cols-3">
      {[
        {title:'Engineering', description:'Websites, custom software and digital product development.', Icon:Code2},
        {title:'Growth',description:'Search, content, paid marketing and conversion thinking.',Icon:Megaphone},
        {title:'Operations',description:'Connected systems, lead management and practical automation.',Icon:Workflow}
      ].map(({title,description,Icon})=><div className="border-t border-[#40515a] pt-7" key={title}><Icon className="text-[#4ade80]" size={28} aria-hidden="true"/><h3 className="mt-5 text-2xl font-bold">{title}</h3><p className="muted mt-4 leading-7">{description}</p></div>)}
    </div></section>
    <div className="panel p-8 md:p-12"><h2 className="text-3xl font-bold">Have a project in mind?</h2><p className="muted mt-4 max-w-2xl leading-7">Start with a conversation about your goals, existing systems, budget and timeline.</p><Link href="/contact" className="button-primary mt-7">Discuss your project <ArrowUpRight size={18} aria-hidden="true"/></Link></div>
  </div>;
}
