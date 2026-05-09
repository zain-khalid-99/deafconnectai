import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  loading = false, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group tracking-[-0.03em] hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.3)]";
  
  const variants = {
    primary: "bg-brand-blue text-[var(--color-bg)]",
    secondary: "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)]",
    glass: "glass text-[var(--color-text-primary)] border border-[var(--color-border)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      <motion.div
        initial={false}
        animate={{ opacity: loading ? 1 : 0, scale: loading ? 1 : 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="absolute inset-0 flex items-center justify-center bg-inherit"
      >
        <Loader2 className="w-6 h-6 animate-spin text-current" />
      </motion.div>
      
      <motion.span
        animate={{ opacity: loading ? 0 : 1, y: loading ? 10 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center gap-2"
      >
        {children}
      </motion.span>
      
      {/* Premium hover highlight */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </button>
  );
};
