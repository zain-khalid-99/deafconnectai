import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getSupabase } from '../lib/supabase';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: { subscription } } = getSupabase().auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    
    // Initial user check
    getSupabase().auth.getUser().then(({ data: { user } }) => setUser(user));

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass flex items-center justify-between w-full max-w-7xl px-4 md:px-8 py-3 md:py-4 rounded-[50px] shadow-lg border border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-[2px] flex items-center justify-center shadow-sm">
            <Zap className="text-[var(--color-bg)] w-5 h-5" fill="currentColor" />
          </div>
          <span className="font-display font-extrabold text-xl tracking-[-0.05em] text-[var(--color-text-primary)]">DeafConnect<span className="text-brand-blue">AI</span></span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
          <a href="#features" className="hover:text-brand-blue transition-colors">Features</a>
          <a href="#tech" className="hover:text-brand-blue transition-colors">Technology</a>
          <a href="#workflow" className="hover:text-brand-blue transition-colors">How It Works</a>
          <a href="#use-cases" className="hover:text-brand-blue transition-colors">Use Cases</a>
          <a href="#roadmap" className="hover:text-brand-blue transition-colors">Roadmap</a>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          {user ? (
            <Link to="/dashboard" className="hidden sm:block bg-brand-blue text-[var(--color-bg)] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-sm hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)]">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="hidden sm:block bg-brand-blue text-[var(--color-bg)] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-sm hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)]">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-white/[0.05] dark:bg-white/[0.03] blur-[130px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-white/[0.03] dark:bg-white/[0.02] blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 dark:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-text-secondary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-text-secondary)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      </div>
    </div>
  );
};
