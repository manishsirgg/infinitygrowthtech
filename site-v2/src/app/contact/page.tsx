import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Contact', description: 'Discuss a website, digital platform, marketing or automation project with Infinity Growth Tech.' };
export default function ContactPage() {
  return <section className="container-shell min-h-[65vh] py-24">
    <p className="eyebrow">Start a conversation</p>
    <h1 className="mt-5 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">Tell us what you're working on.</h1>
    <p className="muted mt-6 max-w-2xl text-lg leading-8">We are preparing a secure, managed enquiry process for Infinity Growth Tech 2.0. Until it is ready, please use the contact form on our current live website.</p>
    <div className="mt-10 flex flex-wrap gap-4"><a href="https://infinitygrowthtech.com/#contact" className="button-primary">Visit current contact form</a><Link href="/" className="button-outline">Back to homepage</Link></div>
  </section>;
}
