import React from 'react';
import { motion } from 'motion/react';
import { BackgroundEffects } from '../components/Layout';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AuthWrapper = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-[var(--color-bg)]">
      <BackgroundEffects />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-md z-10"
      >
        <div className="glass-card mb-8 p-10 rounded-[28px] border border-[var(--color-border)] shadow-2xl backdrop-blur-3xl bg-[var(--color-bg)]/80">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-brand-blue rounded-[8px] flex items-center justify-center shadow-lg shadow-brand-blue/20">
              <Zap className="text-[var(--color-bg)] w-6 h-6" fill="currentColor" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-[-0.05em] text-[var(--color-text-primary)]">DeafConnect<span className="text-brand-blue">AI</span></span>
          </div>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display font-bold text-[var(--color-text-primary)] mb-3">{title}</h1>
            <p className="text-[var(--color-text-secondary)] font-light">{subtitle}</p>
          </div>
          
          {children}
        </div>
      </motion.div>
    </div>
  );
};
