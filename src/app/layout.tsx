import type { Metadata, Viewport } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { site } from '@/lib/site';
import { MessageCircle } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Infinity Growth Tech | Digital Growth, AI & Technology Solutions', template: '%s | Infinity Growth Tech' },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: 'website', siteName: site.name, title: 'Infinity Growth Tech | Digital Growth, AI & Technology Solutions', description: site.description, url: '/', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Infinity Growth Tech — Architecting Digital Growth' }] },
  icons: {
    icon: [{ url: '/brand-mark.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: '/brand-mark.svg',
    apple: '/apple-icon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infinity Growth Tech | Digital Growth, AI & Technology Solutions',
    description: site.description,
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#070a0d', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased"><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[100] focus:rounded-md focus:bg-[#4ade80] focus:px-4 focus:py-2 focus:text-black">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Infinity Growth Tech on WhatsApp" title="Chat on WhatsApp" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-[40] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-[#06110a] shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4ade80] sm:bottom-6 sm:right-6"><MessageCircle aria-hidden="true" size={27} strokeWidth={2.5} /></a></body></html>;
}
