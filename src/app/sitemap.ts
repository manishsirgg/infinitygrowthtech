import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { portfolioProjects, serviceCatalog } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/contact', '/privacy', '/services', '/work', ...serviceCatalog.map(service => `/services/${service.slug}`), ...portfolioProjects.map(project => `/work/${project.slug}`)];
  return paths.map(path => ({ url: site.url + (path === '/' ? '' : path), changeFrequency: 'monthly' as const, priority: path === '/' ? 1 : path === '/privacy' ? .2 : .7 }));
}
