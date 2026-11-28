import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight, BookOpenText, Building2, Check, ChevronRight,
  Code2, GraduationCap, Layers3, Megaphone, Workflow,
} from 'lucide-react';
import { serviceCatalog, portfolioProjects } from '@/lib/content';

const pillars = [
  { title: 'Build', subtitle: 'Digital products engineered to last', description: 'Websites, custom applications and commerce experiences designed around the way your business actually works.', Icon: Code2, slugs: ['website-development', 'ecommerce-lms', 'custom-software'] },
  { title: 'Grow', subtitle: 'A clearer path to customers', description: 'Search, paid campaigns and content systems aligned with customer intent and measurable commercial objectives.', Icon: Megaphone, slugs: ['seo-content', 'ai-search-visibility', 'social-media-management', 'performance-marketing'] },
  { title: 'Automate', subtitle: 'Less repetitive work. More clarity.', description: 'Connected lead workflows, practical AI integrations and systems that help teams operate consistently.', Icon: Workflow, slugs: ['ai-automation'] },
] as const;

const industries = [
  { title: 'Education & Training', description: 'Websites, course discovery, admissions enquiries and learning platforms.', Icon: GraduationCap },
  { title: 'Real Estate', description: 'Property discovery experiences, enquiry capture and business websites.', Icon: Building2 },
  { title: 'Professional Services', description: 'Credible online presence, lead journeys and operational workflows.', Icon: Layers3 },
  { title: 'Marketplace Sellers', description: 'Amazon and Flipkart seller onboarding, listings and ongoing account care.', Icon: Building2 },
] as const;

const steps = [
  { number: '01', name: 'Discover', description: 'Understand your business, constraints and immediate priorities.' },
  { number: '02', name: 'Design', description: 'Agree the solution, clear deliverables and realistic milestones.' },
  { number: '03', name: 'Deliver', description: 'Build, review and launch with quality checks and a proper handover.' },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero-field relative overflow-hidden border-b border-white/10">
        <div className="container-shell grid items-center gap-12 py-10 sm:py-14 md:py-24 lg:grid-cols-[1.12fr_.88fr] lg:gap-16 lg:py-36">
          <div className="relative z-10">
            <p className="eyebrow mb-6">Digital Growth, AI & Technology Solutions</p>
            <h1 className="max-w-4xl text-[clamp(2.65rem,6.8vw,6.7rem)] font-black leading-[1.02] tracking-[-.06em]">
              Build smarter.<br /><span className="gradient-text">Grow with purpose.</span>
            </h1>
            <p className="muted mt-7 max-w-2xl text-base leading-7 md:text-lg md:leading-8 md:text-xl">
              From websites and software to social media, search visibility, branding and intelligent automation, we connect technology and marketing to help businesses build, market, optimise and scale.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="button-primary">Discuss your project <ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link href="/packages" className="button-outline">View packages &amp; prices <ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
            <p className="mt-7 text-sm text-[#b2c2c8]">Architecting Digital Growth. Transparent pricing, clear deliverables and tailored solutions for businesses in India and beyond.</p>
          </div>
          <div aria-label="Illustrative overview of three connected business capabilities" className="hero-diagram panel relative isolate min-h-[250px] overflow-hidden p-5 sm:min-h-[430px] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(74,222,128,.13),transparent_60%)]" aria-hidden="true" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-4 sm:gap-8">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[.15em] text-[#9fb4ba]"><span>Integrated capabilities</span><span className="text-[#4ade80]">IGT / 2.0</span></div>
              <div className="mx-auto grid h-16 w-16 sm:h-24 sm:w-24 place-items-center rounded-[2rem] border border-[#4ade80]/40 bg-[#4ade80]/10 text-6xl font-semibold text-[#4ade80] shadow-[0_0_70px_rgba(74,222,128,.17)]" aria-hidden="true">∞</div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {pillars.map(({ title, Icon }) => (
                  <div key={title} className="rounded-xl border border-white/15 bg-[#101a1d]/90 px-2 py-3 sm:py-5 text-center sm:px-4">
                    <Icon className="mx-auto mb-3 text-[#4ade80]" size={23} aria-hidden="true" />
                    <span className="font-bold">{title}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-[#a8b7bc]">A unified approach—not a claim of client results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pt-7" aria-label="Popular solutions"><p className="eyebrow">Find what you need</p><div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">{[['Websites & apps','web-development'],['Social media','social-media'],['AI search · AEO & GEO','ai-search-visibility'],['CRM & automation','crm-automation']].map(([label,id])=><Link key={id} href={'/packages#'+id} className="panel flex min-h-16 items-center justify-between gap-2 p-3 text-sm font-semibold hover:border-[#4ade80]">{label}<ArrowUpRight size={16} className="shrink-0 text-[#4ade80]" aria-hidden="true"/></Link>)}</div></section>
      <section id="solutions" className="py-10 sm:py-14 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div><p className="eyebrow">Our capabilities</p><h2 className="mt-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Three disciplines.<br />One connected strategy.</h2></div>
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-[#4ade80] hover:text-[#a6fac1]">Explore all services <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
          <div className="mt-6 md:mt-11 grid gap-5 lg:grid-cols-3">
            {pillars.map(({ title, subtitle, description, Icon, slugs }, index) => (
              <article key={title} className="panel group flex flex-col p-7 md:p-8">
                <div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-xl border border-[#4ade80]/25 bg-[#4ade80]/10"><Icon className="text-[#4ade80]" aria-hidden="true" size={26}/></span><span className="text-xs font-bold tracking-[.18em] text-[#8c9fa5]">0{index + 1}</span></div>
                <h3 className="mt-5 text-2xl md:text-3xl font-extrabold">{title}</h3>
                <p className="mt-3 text-lg font-semibold text-[#c7d7dc]">{subtitle}</p>
                <p className="muted mt-4 leading-7">{description}</p>
                <div className="mt-5 flex-1 border-t border-white/10 pt-5">
                  {slugs.map(slug => { const service = serviceCatalog.find(item => item.slug === slug); return service ? (
                    <Link key={slug} href={`/services/${slug}`} className="flex items-center justify-between gap-3 rounded-lg py-3 text-sm text-[#d8e4e8] hover:text-[#4ade80]">
                      <span>{service.title}</span><ChevronRight size={16} aria-hidden="true" />
                    </Link>
                  ) : null; })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-white/10 bg-[#0c1216] py-10 sm:py-14 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="eyebrow">Selected work</p><h2 className="mt-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Platforms we've developed.<br /><span className="text-[#a8b7bc]">Ideas we've put into practice.</span></h2></div>
            <Link href="/work" className="inline-flex items-center gap-2 font-semibold text-[#4ade80] hover:text-[#a6fac1]">View our portfolio <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
          <p className="muted mt-6 max-w-3xl leading-7">Explore selected first-party ventures demonstrating our experience across education, property and content platforms. These are our own projects—not external client results.</p>
          <div className="mt-6 md:mt-11 grid gap-5 md:grid-cols-3">
            {portfolioProjects.map((project,index) => (
              <article key={project.slug} className="panel group flex flex-col overflow-hidden">
                <div className="portfolio-surface flex min-h-[180px] flex-col justify-between border-b border-white/10 p-6" aria-hidden="true">
                  <span className="text-xs font-semibold uppercase tracking-[.16em] text-[#a0b5ba]">First-party venture · 0{index+1}</span>
                  <div className="flex items-end justify-between gap-4"><span className="max-w-[220px] text-2xl font-black leading-tight tracking-tight text-white">{project.name}</span><ArrowUpRight size={27} className="text-[#4ade80]" /></div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow">{project.type}</p>
                  <p className="muted mt-4 flex-1 leading-7">{project.summary}</p>
                  <Link href={`/work/${project.slug}`} className="mt-7 inline-flex items-center gap-2 font-semibold text-[#4ade80] hover:text-[#a6fac1]">View project details <ArrowRight size={18} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#95a8ae]">Project panels are branded illustrations, not screenshots. Each project detail page links to its live website.</p>
        </div>
      </section>

      <section id="industries" className="py-10 sm:py-14 md:py-24">
        <div className="container-shell">
          <p className="eyebrow">Industry understanding</p>
          <h2 className="mt-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Technology works better when it understands the business.</h2>
          <div className="mt-5 md:mt-10 grid gap-5 md:grid-cols-3">
            {industries.map(({ title, description, Icon }) => (
              <div className="panel p-5 md:p-7" key={title}><Icon aria-hidden="true" className="text-[#4ade80]" size={29}/><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="muted mt-4 leading-7">{description}</p></div>
            ))}
          </div>
          <p className="muted mt-6 text-sm">These are areas of focus, not claims of completed independent client engagements.</p>
        </div>
      </section>

      <section id="approach" className="border-y border-white/10 bg-[#0c1216] py-10 sm:py-14 md:py-24">
        <div className="container-shell">
          <p className="eyebrow">Our approach</p>
          <h2 className="mt-4 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Clear scope. Thoughtful execution.</h2>
          <div className="mt-6 md:mt-11 grid gap-5 md:grid-cols-3">
            {steps.map(step => (
              <div key={step.number} className="border-t border-[#40515a] pt-7"><span className="eyebrow">{step.number}</span><h3 className="mt-6 text-2xl font-bold">{step.name}</h3><p className="muted mt-4 max-w-sm leading-7">{step.description}</p></div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#b7c7cb]"><Check size={18} className="text-[#4ade80]"/><span>Defined deliverables</span><span aria-hidden="true">·</span><Check size={18} className="text-[#4ade80]"/><span>Reviewable milestones</span><span aria-hidden="true">·</span><Check size={18} className="text-[#4ade80]"/><span>Practical handover</span></div>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-24">
        <div className="container-shell">
          <div className="panel hero-field grid items-center gap-5 overflow-hidden p-5 md:grid-cols-[1fr_auto] md:p-14">
            <div><p className="eyebrow">What's next for your business?</p><h2 className="mt-5 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Bring us the challenge.<br /><span className="gradient-text">We'll help shape the starting point.</span></h2><p className="muted mt-6 max-w-2xl leading-7">Tell us what you're building or trying to improve. We can discuss what makes sense technically and commercially before proposing a project.</p></div>
            <Link href="/packages" className="button-primary">Explore our pricing <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[#a5b5bb]"><BookOpenText size={18} aria-hidden="true" /> Looking for a specific capability? <Link href="/services" className="text-[#4ade80] hover:underline">Browse all services <ArrowRight size={15} className="inline" aria-hidden="true" /></Link></p>
        </div>
      </section>
    </>
  );
}
