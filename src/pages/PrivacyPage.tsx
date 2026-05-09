import React from 'react';

export const PrivacyPage = () => (
  <div className="py-48 px-8 max-w-4xl mx-auto text-[var(--color-text-primary)]">
    <h1 className="text-5xl font-display mb-12">Privacy Policy</h1>
    <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
    <p className="mb-8 font-light text-[var(--color-text-secondary)]">We collect minimal data necessary to provide our AI communication services, primarily focus on gesture recognition data and voice input processed securely.</p>
    <h2 className="text-2xl font-bold mb-4">2. Data Usage</h2>
    <p className="mb-8 font-light text-[var(--color-text-secondary)]">Data is used strictly to improve gesture recognition and voice translation algorithms.</p>
    <h2 className="text-2xl font-bold mb-4">3. Security</h2>
    <p className="mb-8 font-light text-[var(--color-text-secondary)]">We employ state-of-the-art encryption to protect your data at rest and in transit.</p>
  </div>
);
