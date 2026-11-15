import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Infinity Growth Tech | Build. Grow. Automate.', template: '%s | Infinity Growth Tech' },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: 'website', siteName: site.name, title: 'Infinity Growth Tech | Build. Grow. Automate.', description: site.description, url: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#070a0d', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased"><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[100] focus:rounded-md focus:bg-[#4ade80] focus:px-4 focus:py-2 focus:text-black">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
