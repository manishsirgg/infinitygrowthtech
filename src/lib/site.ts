export const site = {
  name: 'Infinity Growth Tech',
  url: 'https://infinitygrowthtech.com',
  description: 'Websites, digital platforms, marketing and automation designed for growing businesses.',
  email: 'hello@infinitygrowthtech.com', // Confirm inbox before enabling published contact details.
} as const;

export const offices = [
  {
    city: 'Indore',
    label: 'Indore Office',
    address: 'C.S. Residency, 525, MR-6, Mahalaxmi Nagar',
    region: 'Indore, Madhya Pradesh 452010, India',
  },
  {
    city: 'Noida',
    label: 'Noida Office',
    address: 'A-84, Sector 3',
    region: 'Noida, Uttar Pradesh 201301, India',
  },
] as const;

export const services = [
  { number: '01', name: 'Build', slug: 'build', title: 'Digital experiences that work.', description: 'High-performance websites, landing pages, commerce and custom digital platforms.', items: ['Websites & landing pages', 'E-commerce & LMS', 'Custom software'] },
  { number: '02', name: 'Grow', slug: 'grow', title: 'Marketing with a clear purpose.', description: 'Audience acquisition, search visibility and conversion-focused digital campaigns.', items: ['SEO & content', 'Performance marketing', 'Brand & creative'] },
  { number: '03', name: 'Automate', slug: 'automate', title: 'Make every process count.', description: 'Practical integrations and workflows that reduce manual effort and organise opportunities.', items: ['Lead management', 'CRM workflows', 'AI-assisted operations'] },
] as const;

export const featuredWork = [
  { name: 'Vidya Infinity', category: 'Education platform', description: 'A digital platform for discovering educational programmes, institutions and learning opportunities.', href: 'https://vidyainfinity.com', slug: 'vidya-infinity' },
  { name: 'Brick Infinity', category: 'Property platform', description: 'Digital property discovery and listing experience designed around real estate enquiries.', href: 'https://brickinfinity.com', slug: 'brick-infinity' },
  { name: 'EvoLeveX', category: 'Content ecosystem', description: 'A multi-format publishing and audience platform focused on personal performance.', href: 'https://evolevex.com', slug: 'evolevex' },
] as const;
