import React from 'react';

type PricingCardProps = {
  title: string;
  price: string;
  features?: string[];
  highlight?: boolean;
  subtitle?: string;
  ctaLabel?: string;
};

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features = [], highlight = false, subtitle, ctaLabel = 'Book This Plan' }) => (
  <article
    className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,168,0.2)] ${
      highlight
        ? 'border-[#00E5A8] bg-gradient-to-b from-[#00E5A8]/15 to-[#111827]'
        : 'border-white/10 bg-[#111827]'
    }`}
  >
    <div className="mb-5 flex items-start justify-between gap-3">
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-[#A1A1AA]">{subtitle}</p> : null}
      </div>
      {highlight ? <span className="rounded-full border border-[#00E5A8]/40 bg-[#00E5A8]/20 px-3 py-1 text-xs font-semibold text-[#00E5A8]">Most Chosen</span> : null}
    </div>
    <p className="mb-5 text-3xl font-extrabold text-white">{price}</p>
    {features.length > 0 ? (
      <ul className="space-y-2 text-sm text-[#A1A1AA]">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#00E5A8]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    ) : null}
    <a href="https://wa.me/918989601701" className="mt-6 block w-full rounded-xl border border-[#00E5A8]/40 bg-[#00E5A8]/10 px-4 py-2.5 text-center text-sm font-semibold text-[#00E5A8] transition-all hover:scale-[1.02] hover:bg-[#00E5A8]/20">
      {ctaLabel}
    </a>
  </article>
);

const sectionTitle = 'mb-8 text-2xl font-bold text-white md:text-3xl';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <main className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <section className="mb-16 text-center md:mb-24">
          <p className="mx-auto mb-4 inline-flex rounded-full border border-[#00E5A8]/35 bg-[#00E5A8]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00E5A8]">
            Limited onboarding slots this month
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Architecting Business Growth</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-[#A1A1AA] md:text-xl">
            Complete Branding, Technology &amp; Marketing Systems to Scale Your Business
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/918989601701" className="w-full rounded-xl bg-[#00E5A8] px-7 py-3 text-center font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">Get Started Today</a>
            <a href="#branding" className="w-full rounded-xl border border-white/20 px-7 py-3 text-center font-semibold transition-transform hover:scale-[1.03] hover:border-[#00E5A8] sm:w-auto">View Packages</a>
          </div>
        </section>

        <section id="branding" className="mb-16 md:mb-20">
          <h2 className={sectionTitle}>Branding Packages</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard title="Premium Logo" price="₹6,049" features={['3 Concepts', '5 Revisions', 'Mockups', 'Social Profile', 'Source Files']} />
            <PricingCard title="Logo + Stationery" price="₹8,799" features={['Everything above', 'Business Card', 'Letterhead', 'Envelope']} />
            <PricingCard title="Brand Identity" price="₹16,499" highlight features={['Unlimited revisions', 'Guidelines', 'Animation', 'Social kit']} ctaLabel="Reserve Brand Identity" />
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className={sectionTitle}>Website + Combos</h2>
          <div className="mb-6 rounded-2xl border border-[#3B82F6]/40 bg-[#111827] p-5 text-sm text-[#A1A1AA] md:text-base">
            Fast-track offer: Launch in as little as 7–14 days based on scope.
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            <PricingCard title="One Page Website" price="₹19,999" features={['Responsive design', 'Lead form', 'WhatsApp button', 'SEO', 'Portfolio + services']} />
            <PricingCard title="Starter" price="₹24,999" />
            <PricingCard title="Growth" price="₹32,999" highlight ctaLabel="Choose Growth Plan" />
            <PricingCard title="Elite" price="₹44,999" />
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2 md:mb-20">
          <PricingCard title="Ecommerce" price="₹59,999" features={['Up to 100 products', 'Payment integration', 'Inventory', 'WhatsApp', 'SEO + analytics']} />
          <PricingCard title="LMS" price="₹79,999+" features={['Courses', 'Dashboard', 'Payments', 'Certificates']} />
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className={sectionTitle}>Social Media</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <PricingCard title="Setup" price="Meta ₹6,999 • Google ₹3,999 • YouTube ₹7,999" />
            <PricingCard title="Monthly" price="Meta ₹14,999 • Meta + Google ₹19,999 • Full System ₹29,999" highlight subtitle="₹19,999/month is our highest-converting package" ctaLabel="Lock ₹19,999 Plan" />
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-3 md:mb-20">
          <PricingCard title="Ads Setup" price="₹9,999" />
          <PricingCard title="Ads Monthly" price="₹14,999" subtitle="Ad spend is separate" />
          <PricingCard title="Marketplace" price="Setup ₹9,999/platform • Management ₹14,999/platform • Combo ₹24,999" highlight />
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className={sectionTitle}>Packaging</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <PricingCard title="Cosmetics" price="₹6,599" />
            <PricingCard title="Food" price="₹7,699" />
            <PricingCard title="Box" price="₹7,699" />
            <PricingCard title="Labels" price="₹5,499" />
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2 md:mb-20">
          <PricingCard title="Video Editing" price="₹1,000/min" features={['Reels', 'Ads', 'Transitions', 'Music']} />
          <PricingCard title="Custom Software" price="Pricing based on requirements" features={['SaaS', 'CRM', 'Automation', 'APIs']} subtitle="Request Custom Quote" ctaLabel="Get Custom Proposal" />
        </section>

        <section id="final-cta" className="rounded-2xl border border-[#3B82F6]/40 bg-[#111827] p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Scale Your Business?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#A1A1AA]">Priority onboarding closes soon. Secure your growth sprint now.</p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/918989601701" className="w-full rounded-xl bg-[#00E5A8] px-7 py-3 text-center font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">Get Started</a>
            <a href="/#contact" className="w-full rounded-xl border border-white/20 px-7 py-3 text-center font-semibold transition-transform hover:scale-[1.03] hover:border-[#3B82F6] sm:w-auto">Contact Now</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
