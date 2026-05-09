import { Navbar, BackgroundEffects } from "./components/Layout";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./components/Hero";
import { Stats, Features } from "./components/Sections";
import { HowItWorks, TechnologyStack, AIModel, UseCases, Roadmap, TechLogosLoop } from "./components/ExtraSections";
import { Button } from "./components/ui/Button";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import CurvedLoop from "./components/ui/CurvedLoop";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { ContactPage } from "./pages/ContactPage";
import { LearningResourcesPage } from "./pages/LearningResourcesPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TechLogosLoop />
      
      <div className="py-20 opacity-80 overflow-hidden">
        <CurvedLoop 
          marqueeText="Breaking ✦ Barriers ✦ Building✦ connections✦ deaf connect✦"
          speed={0.5}
          curveAmount={100}
          direction="left"
          className="text-black dark:text-white opacity-20 font-display font-medium text-4xl"
        />
      </div>

      <Features />
      
      <HowItWorks />
      <TechnologyStack />
      <AIModel />
      <UseCases />
      <Roadmap />

      <section className="py-48 px-8 relative overflow-hidden bg-brand-blue/[0.02]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-medium text-[var(--color-text-primary)] mb-10 leading-[0.9] tracking-[-0.05em]">
            Communication should <br/> <span className="text-brand-blue text-glow">never be a barrier.</span>
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-12 font-light max-w-2xl mx-auto tracking-tight leading-relaxed">
            DeafConnect AI combines artificial intelligence and accessibility to create a future where communication is seamless, inclusive, and human-centered.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" className="w-full sm:w-auto min-w-[200px]">Launch Platform</Button>
            <Button variant="glass" className="w-full sm:w-auto min-w-[200px]">Request Demo</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${theme}`}>
        <BackgroundEffects />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <BackToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/learning-resources" element={<LearningResourcesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>

        <footer className="py-24 px-8 border-t border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
                  <div className="w-8 h-8 bg-brand-blue rounded-[2px] flex items-center justify-center shadow-sm">
                    <Zap className="text-[var(--color-bg)] w-5 h-5" fill="currentColor" />
                  </div>
                  <span className="font-display font-extrabold text-2xl tracking-[-0.05em] text-[var(--color-text-primary)]">DeafConnect<span className="text-brand-blue">AI</span></span>
                </div>
                <p className="text-[var(--color-text-secondary)] max-w-sm font-light leading-relaxed tracking-tight text-lg mx-auto md:mx-0">
                  AI-powered accessibility platform transforming communication through real-time sign language intelligence.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold uppercase tracking-widest text-[var(--color-text-primary)] text-xs mb-8">Navigation</h4>
                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] font-light">
                  <li><Link to="/#features" className="hover:text-brand-blue transition-colors">Features</Link></li>
                  <li><Link to="/#tech" className="hover:text-brand-blue transition-colors">Technology</Link></li>
                  <li><Link to="/learning-resources" className="hover:text-brand-blue transition-colors">Learning Resources</Link></li>
                  <li><Link to="/#workflow" className="hover:text-brand-blue transition-colors">How It Works</Link></li>
                  <li><Link to="/#use-cases" className="hover:text-brand-blue transition-colors">Use Cases</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest text-[var(--color-text-primary)] text-xs mb-8">Company</h4>
                <ul className="space-y-4 text-sm text-[var(--color-text-secondary)] font-light">
                  <li><Link to="/privacy" className="hover:text-brand-blue transition-colors">Privacy</Link></li>
                  <li><Link to="/terms" className="hover:text-brand-blue transition-colors">Terms</Link></li>
                  <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact</Link></li>
                  <li><Link to="/#roadmap" className="hover:text-brand-blue transition-colors">Roadmap</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-12 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-text-secondary)] opacity-50">
              <div>© 2025 DeafConnect AI. Built for inclusive communication.</div>
              <div className="flex items-center gap-8">
                <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Twitter</a>
                <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
