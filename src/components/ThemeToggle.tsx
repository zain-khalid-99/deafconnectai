import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import React from 'react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className="glass p-3 rounded-[2px] hover:bg-[rgba(120,120,120,0.1)] transition-all active:scale-95 group border border-[var(--color-border)]"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{ 
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 180,
            scale: theme === 'dark' ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute inset-0"
        >
          <Moon className="w-5 h-5 text-[var(--color-text-primary)]" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -180,
            scale: theme === 'light' ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute inset-0"
        >
          <Sun className="w-5 h-5 text-[var(--color-text-primary)]" />
        </motion.div>
      </div>
    </button>
  );
};
