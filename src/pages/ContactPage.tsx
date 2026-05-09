import React from 'react';
import { Button } from '../components/ui/Button';

export const ContactPage = () => (
  <div className="py-48 px-8 max-w-4xl mx-auto text-[var(--color-text-primary)]">
    <h1 className="text-5xl font-display mb-12">Contact Us</h1>
    <p className="mb-8">Have questions or feedback? Reach out to us.</p>
    <form className="space-y-6">
        <input type="text" placeholder="Name" className="w-full p-4 border rounded-[2px] bg-transparent" />
        <input type="email" placeholder="Email" className="w-full p-4 border rounded-[2px] bg-transparent" />
        <textarea placeholder="Message" className="w-full p-4 border rounded-[2px] bg-transparent" rows={5}></textarea>
        <Button variant="primary">Send Message</Button>
    </form>
  </div>
);
