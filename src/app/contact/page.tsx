import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = { title: 'Contact', description: 'Discuss a website, digital platform, marketing or automation project with Infinity Growth Tech.' };

export default function ContactPage() {
  return <section className="container-shell py-24">
    <p className="eyebrow">Start a conversation</p>
    <h1 className="mt-5 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">Tell us what you're working on.</h1>
    <p className="muted mt-6 max-w-2xl text-lg leading-8">Share your goals and the challenges you want to solve. We'll review your enquiry and discuss practical next steps.</p>
    <div className="mt-12 max-w-2xl"><ContactForm /></div>
  </section>;
}
