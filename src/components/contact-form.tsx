'use client';

import { useState, type FormEvent } from 'react';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState('sending');
    try {
      const response = await fetch('https://formsubmit.co/ajax/manishsirgg@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      });
      if (!response.ok) throw new Error('Submission failed');
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  }

  return <form onSubmit={submit} className="panel space-y-5 p-6 sm:p-8">
    <div><label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">Name</label><input id="contact-name" name="name" required autoComplete="name" maxLength={120} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white" /></div>
    <div><label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">Email</label><input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={240} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white" /></div>
    <div><label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold">What can we help with?</label><select id="contact-subject" name="subject" required className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white"><option>Website or Digital Platform</option><option>Marketing & Growth</option><option>Automation</option><option>Other</option></select></div>
    <div><label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">Project details</label><textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={5} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3 text-white" /></div>
    <p className="text-sm text-[#a0b0b8]">Your details are used to respond to your enquiry. Please do not submit sensitive personal information.</p>
    <button type="submit" disabled={state === 'sending'} className="button-primary disabled:opacity-50">{state === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
    {state === 'success' && <p role="status" className="text-sm text-[#4ade80]">Your enquiry has been submitted.</p>}
    {state === 'error' && <p role="alert" className="text-sm text-red-300">We could not send your enquiry. Please try again later.</p>}
  </form>;
}
