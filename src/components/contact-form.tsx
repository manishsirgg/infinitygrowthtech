'use client';

import Script from 'next/script';
import { useEffect, useRef, useState, type FormEvent } from 'react';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [notice, setNotice] = useState('');
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [selectedPackage, setSelectedPackage] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedPackage = params.get('package')?.trim().slice(0, 160) || '';
    const requestedSubject = params.get('subject') || '';
    setSelectedPackage(requestedPackage);
    if (formRef.current && requestedSubject) {
      const subject = formRef.current.elements.namedItem('subject');
      if (subject instanceof HTMLSelectElement && Array.from(subject.options).some(option => option.value === requestedSubject)) {
        subject.value = requestedSubject;
      }
    }
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!siteKey || status === 'sending') return;
    const form = formRef.current;
    if (!form) return;

    const values = new FormData(form);
    const campaign = new URLSearchParams(window.location.search);
    setStatus('sending');
    setNotice('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.get('name'),
          email: values.get('email'),
          phone: values.get('phone'),
          subject: values.get('subject'),
          message: [selectedPackage ? `Package enquiry: ${selectedPackage}` : '', String(values.get('message') || '')].filter(Boolean).join('\n\n'),
          website: values.get('website'),
          turnstileToken: values.get('cf-turnstile-response'),
          source: 'website-contact',
          utm_source: campaign.get('utm_source') ?? '',
          utm_medium: campaign.get('utm_medium') ?? '',
          utm_campaign: campaign.get('utm_campaign') ?? '',
        }),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || 'Submission unsuccessful.');
      setStatus('success');
      setNotice('Thank you. Your enquiry has been received.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setNotice(error instanceof Error ? error.message : 'Unable to send your enquiry.');
    }
  }

  return <form ref={formRef} onSubmit={submit} className="panel space-y-4 p-4 sm:p-8">
    {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />}
    <div><label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Name</label><input id="contact-name" name="name" required autoComplete="name" minLength={2} maxLength={120} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white" /></div>
    <div><label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">Email</label><input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={240} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white" /></div>
    <div><label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold">Phone (optional)</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white" /></div>
    <div><label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold">What can we help with?</label><select id="contact-subject" name="subject" required className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white"><option>Website or Digital Platform</option><option>Marketing &amp; Growth</option><option>Package Consultation</option><option>Marketplace Services</option><option>Automation</option><option>AI Visibility Audit</option><option>Social Media Consultation</option><option>Content Production</option><option>Content Production Consultation</option><option>Brand Strategy Consultation</option><option>Website Scope Consultation</option><option>Other</option></select></div>
    {selectedPackage && <p className="rounded-lg border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-3 text-sm text-[#aef7c8]">Enquiring about: <strong>{selectedPackage}</strong></p>}
    <div><label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Project details</label><textarea id="contact-message" name="message" placeholder="Tell us about your business, goals, budget or timeline." required minLength={10} maxLength={5000} rows={5} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white" /></div>
    <div className="absolute left-[-9999px]" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="text-sm text-[#a0b0b8]">We use the information provided to review and respond to your enquiry. Please do not include sensitive financial or personal information.</p>
    {siteKey ? <div className="cf-turnstile" data-sitekey={siteKey} data-theme="dark" /> : <p role="alert" className="text-sm text-amber-200">Online enquiries are being configured. Please return shortly.</p>}
    <button type="submit" disabled={!siteKey || status === 'sending' || status === 'success'} className="button-primary w-full disabled:opacity-50 sm:w-auto">{status === 'sending' ? 'Sending…' : status === 'success' ? 'Enquiry received' : 'Send enquiry'}</button>
    {notice && <p role={status === 'error' ? 'alert' : 'status'} className={status === 'error' ? 'text-sm text-red-300' : 'text-sm text-[#4ade80]'}>{notice}</p>}
  </form>;
}
