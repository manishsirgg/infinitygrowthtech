import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy information', robots: { index: false, follow: false } };
export default function PrivacyPage() {
 return <section className="container-shell min-h-[60vh] py-24"><p className="eyebrow">Privacy</p><h1 className="mt-4 text-4xl font-extrabold">Privacy information</h1><p className="muted mt-6 max-w-2xl leading-8">This is a development-stage website. A reviewed privacy policy describing actual data collection, retention, providers and contact procedures must be published before production launch or before collecting personal information in the new site.</p></section>;
}
