import React from 'react';

export const LearningResourcesPage = () => {
  return (
    <div className="py-24 px-8 max-w-5xl mx-auto text-[var(--color-text-primary)] font-light leading-relaxed">
      <h1 className="text-4xl md:text-5xl font-display mb-12">Digital Pedagogies and Linguistic Equity</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">1. Free ASL Learning Platforms</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ASL University (Lifeprint):</strong> The gold standard for self-study and structured lessons.</li>
          <li><strong>Gallaudet ASL Connect:</strong> Academic-grade introductory videos and courses.</li>
          <li><strong>Oklahoma School for the Deaf:</strong> Full immersion online courses for real-world fluency.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">2. Pakistan Sign Language (PSL) Resources</h2>
        <p className="mb-4">Standardized resources to bridge regional language gaps.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>PSL Digital Lexicon:</strong> Access over 7,500 signs in Urdu and English.</li>
          <li><strong>Deaf Reach:</strong> Digital lexicons and teacher training programs.</li>
          <li><strong>Local Support (Lahore):</strong> Organizations like Hamza Foundation Academy for the Deaf.</li>
        </ul >
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">3. Augmentative & Alternative Communication (AAC)</h2>
        <p className="mb-4">Tools for non-verbal individuals to express themselves freely.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Pictalk AAC:</strong> 100% free; 40,000+ pictograms available offline.</li>
          <li><strong>Weave Chat:</strong> Customizable grid systems for multi-word message construction.</li>
          <li><strong>Spoken:</strong> AI-powered predictive text that learns user patterns for natural voice output.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">4. Community & Culture</h2>
        <p>Understanding Deaf culture is essential to allyship. We promote a "cultural model" of deafness, emphasizing linguistic preservation, social cohesion, and visual-first communication norms.</p>
      </section>
    </div>
  );
};
