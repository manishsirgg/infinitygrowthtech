import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/contact', '/privacy'].map(path => ({ url: site.url + path, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : .4 }));
}
