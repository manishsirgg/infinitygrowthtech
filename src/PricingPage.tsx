import React from 'react';

type PricingCardProps = {
  title: string;
  price: string;
  gstNote?: string;
  features?: string[];
  highlight?: boolean;
  badgeLabel?: string;
  subtitle?: string;
  ctaLabel?: 'Get Started' | 'Choose Plan';
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  gstNote = 'Excl. GST',
  features = [],
  highlight = false,
  badgeLabel,
  subtitle,
  ctaLabel = 'Get Started',
}) => (
  <article
    className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,168,0.2)] ${
      highlight
        ? 'border-[#00E5A8] bg-gradient-to-b from-[#00E5A8]/15 to-[#111827]'
        : 'border-white/10 bg-[#111827]'
    }`}
  >
    <div className="mb-5 flex items-start justify-between gap-3">
      <div>
        <h3 className="text-lg font-bold text-white md:text-xl">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-[#A1A1AA]">{subtitle}</p> : null}
      </div>
      {badgeLabel ? (
        <span className="rounded-full border border-[#00E5A8]/40 bg-[#00E5A8]/20 px-3 py-1 text-xs font-semibold text-[#00E5A8]">{badgeLabel}</span>
      ) : null}
    </div>
    <div className="mb-5">
      <p className="text-2xl font-extrabold text-white md:text-3xl">{price}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#A1A1AA]">{gstNote}</p>
    </div>
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
    <a
      href="https://wa.me/918989601701"
      className="mt-auto pt-6 block w-full rounded-xl border border-[#00E5A8]/40 bg-[#00E5A8]/10 px-4 py-2.5 text-center text-sm font-semibold text-[#00E5A8] transition-all hover:scale-[1.02] hover:bg-[#00E5A8]/20"
    >
      {ctaLabel}
    </a>
  </article>
);

const sectionTitle = 'mb-3 text-2xl font-bold text-white md:text-3xl';
const sectionSubtitle = 'mb-8 max-w-4xl text-sm text-[#A1A1AA] md:text-base';
const gridThree = 'grid gap-6 md:grid-cols-2 xl:grid-cols-3';

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

        <section id="branding" className="mb-16 md:mb-24">
          <h2 className={sectionTitle}>Branding Packages</h2>
          <div className={gridThree}>
            <PricingCard title="Premium Logo" price="₹6,049" features={['3 Concepts', '5 Revisions', 'Mockups', 'Social Profile', 'Source Files']} />
            <PricingCard title="Logo + Stationery" price="₹8,799" features={['Everything above', 'Business Card', 'Letterhead', 'Envelope']} />
            <PricingCard title="Brand Identity" price="₹16,499" features={['Unlimited revisions', 'Guidelines', 'Animation', 'Social kit']} ctaLabel="Choose Plan" />
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className={sectionTitle}>Website + Combos</h2>
          <p className={sectionSubtitle}>Fast-track offer: Launch in as little as 7–14 days based on scope.</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <PricingCard title="One Page Website" price="₹19,999" features={['Modern & clean responsive design', 'Lead capture form', 'WhatsApp floating button', 'Google Map integration', 'Social media links', 'Dynamic portfolio section', 'Dynamic services/products section', 'Email integration for leads', 'On-page SEO', 'Graphics included']} />
            <PricingCard title="Starter" price="₹24,999" features={['Premium logo design', 'One page business website', 'Mobile responsive design', 'Lead capture form', 'WhatsApp button integration', 'Basic SEO setup', 'Social media profile-ready assets']} ctaLabel="Choose Plan" />
            <PricingCard title="Growth" price="₹32,999" highlight badgeLabel="Most Chosen" features={['Logo + office stationery', 'One page business website', 'Advanced UI/UX layout', 'Lead generation system', 'WhatsApp + email integration', 'SEO optimization', 'Portfolio + services sections']} ctaLabel="Choose Plan" />
            <PricingCard title="Elite" price="₹44,999" features={['Complete brand identity kit', 'One page business website', 'Brand guidelines', 'Social media kit', 'Logo animation', 'Conversion-focused layout', 'Full visual identity system']} ctaLabel="Choose Plan" />
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2 md:mb-24">
          <PricingCard title="Ecommerce" price="₹59,999" features={['Up to 100 products', 'Payment integration', 'Inventory', 'WhatsApp', 'SEO + analytics']} />
          <PricingCard title="LMS" price="₹79,999+" features={['Courses', 'Dashboard', 'Payments', 'Certificates']} />
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className={sectionTitle}>Social Media Setup &amp; Management</h2>
          <p className={sectionSubtitle}>Choose platform-wise setup or monthly growth management based on your business needs.</p>
          <h3 className="mb-5 text-xl font-semibold text-white">Setup Plans</h3>
          <div className={`${gridThree} mb-10`}>
            <PricingCard title="Meta Setup" price="₹6,999" features={['Facebook page optimization', 'Instagram business profile optimization', 'Bio, branding & CTA setup', 'Highlights setup', 'Profile image/cover guidance']} />
            <PricingCard title="Google Business Profile Setup" price="₹3,999" features={['Google Business Profile setup/optimization', 'Business info structuring', 'SEO keyword optimization', 'Location & contact setup', 'Service/category optimization']} />
            <PricingCard title="YouTube Channel Setup" price="₹7,999" features={['Channel setup/optimization', 'Banner & branding guidance', 'SEO-friendly channel description', 'Keyword setup', 'Basic upload structure']} />
          </div>
          <h3 className="mb-5 text-xl font-semibold text-white">Monthly Growth Plans</h3>
          <div className={gridThree}>
            <PricingCard title="Meta Growth" price="₹14,999/month" features={['Instagram + Facebook management', 'Content planning', 'Post creatives', 'Captions & hashtags', 'Basic engagement handling']} />
            <PricingCard title="Meta + Google Growth" price="₹19,999/month" highlight badgeLabel="Most Popular" features={['Meta management', 'Google Business Profile optimization', 'Regular posting', 'Review visibility support', 'Monthly performance insights']} ctaLabel="Choose Plan" />
            <PricingCard title="Full Growth System" price="₹29,999/month" features={['Meta + Google + YouTube management', 'Reels/shorts support', 'Content strategy', 'Engagement-focused execution', 'Growth-oriented monthly plan']} />
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className={sectionTitle}>Paid Ads Management</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <PricingCard title="Ads Setup" price="₹9,999" features={['Meta/Google ad account setup', 'Pixel/conversion tracking setup', 'Audience research', 'Campaign structure setup', 'Initial ad creative guidance']} />
            <PricingCard title="Monthly Ads Management" price="₹14,999/month" features={['Campaign creation & optimization', 'Audience targeting', 'A/B testing', 'Performance monitoring', 'ROI-focused strategy']} />
          </div>
          <p className="mt-5 rounded-xl border border-white/10 bg-[#111827] p-4 text-sm text-[#A1A1AA]">Ad spend is separate and paid directly by the client.</p>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className={sectionTitle}>Amazon &amp; Flipkart Seller Services</h2>
          <div className={gridThree}>
            <PricingCard title="Amazon Seller Setup" price="₹9,999/platform" features={['Seller account setup support', 'Documentation guidance', 'Dashboard configuration', 'Payment setup guidance', 'Shipping settings support']} />
            <PricingCard title="Flipkart Seller Setup" price="₹9,999/platform" features={['Seller account setup support', 'Documentation guidance', 'Dashboard configuration', 'Payment setup guidance', 'Shipping settings support']} />
            <PricingCard title="Marketplace Management Combo" price="₹24,999/month" highlight badgeLabel="Best Value" features={['Amazon + Flipkart management', 'Product listing support', 'Catalog optimization', 'Inventory/order support', 'Performance monitoring']} ctaLabel="Choose Plan" />
          </div>
          <p className="mt-5 rounded-xl border border-white/10 bg-[#111827] p-4 text-sm text-[#A1A1AA]">Single platform monthly management: ₹14,999/month/platform Excl. GST</p>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className={sectionTitle}>Packaging Design Services</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <PricingCard title="Cosmetics Packaging" price="₹8,799" features={['2 unique packaging concepts', 'Revisions on final design', 'Realistic mockup presentation', 'CMYK print-ready design', 'Source files']} />
            <PricingCard title="Food Product Packaging" price="₹7,699" features={['2 packaging design concepts', 'Revisions on final design', 'Product mockup', 'Print-ready files', 'Source files']} />
            <PricingCard title="Product Box Packaging" price="₹7,699" features={['2 box packaging concepts', 'Revisions on final design', 'Mockup presentation', 'CMYK print-ready files', 'Source files']} />
            <PricingCard title="Product Label / Sticker Design" price="₹5,499" features={['2 label concepts', 'Revisions on final design', 'Mockup preview', 'Print-ready files', 'Source files']} />
            <PricingCard title="Bottle Label Design" price="₹5,499" features={['2 bottle label concepts', 'Revisions on final design', 'Mockup preview', 'Print-ready files', 'Source files']} />
          </div>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2 md:mb-24">
          <PricingCard title="Video Editing" price="₹1,000/minute" features={['Reels/shorts editing', 'Ad video editing', 'Smooth transitions', 'Text animations', 'Background music', 'Basic color correction']} />
          <PricingCard title="Custom Software" price="Pricing based on requirements" gstNote="Excl. GST if applicable" features={['SaaS', 'CRM', 'Automation', 'APIs']} ctaLabel="Choose Plan" />
        </section>

        <section id="final-cta" className="rounded-2xl border border-[#3B82F6]/40 bg-[#111827] p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Scale Your Business?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#A1A1AA]">Priority onboarding closes soon. Secure your growth sprint now.</p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://wa.me/918989601701" className="w-full rounded-xl bg-[#00E5A8] px-7 py-3 text-center font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">Get Started</a>
            <a href="/?scrollTo=contact#contact" className="w-full rounded-xl border border-white/20 px-7 py-3 text-center font-semibold transition-transform hover:scale-[1.03] hover:border-[#3B82F6] sm:w-auto">Contact Now</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
