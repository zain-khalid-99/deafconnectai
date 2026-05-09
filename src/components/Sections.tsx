import { motion } from "motion/react";
import { Eye, Mic2, Network, ShieldCheck, Speaker } from "lucide-react";
import React, { cloneElement as reactCloneElement } from "react";
import MagicBento, { CardItem } from "./ui/MagicBento";

export const Stats = () => {
  const stats = [
    { label: "Hand Landmarks Tracked", value: "21", sub: "Global Standard" },
    { label: "Features Processed Per Frame", value: "63", sub: "High-Frequency" },
    { label: "Model Training Accuracy", value: "~95%", sub: "Validated Results" },
    { label: "AI Processing Speed", value: "Real-Time", sub: "Zero Latency" }
  ];

  return (
    <section className="py-24 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
              className="glass-card p-10 rounded-[2px] text-center group hover:bg-brand-blue/[0.03] transition-all border-dashed"
            >
              <div className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] mb-3 group-hover:text-brand-blue transition-colors tracking-[-0.05em]">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-text-secondary)] mb-1 opacity-80">
                {stat.label}
              </div>
              <div className="text-[9px] text-[var(--color-text-secondary)] font-medium opacity-50 italic tracking-wide">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  const bentoData: CardItem[] = [
    {
      title: "Real-Time Sign Detection",
      description: "Advanced MediaPipe hand tracking detects and processes live hand gestures with high precision using AI-powered landmark recognition.",
      label: "Intelligence",
      color: "rgba(0, 0, 0, 0.4)"
    },
    {
      title: "Voice-to-Text Translation",
      description: "Convert spoken language into real-time readable text instantly, helping deaf individuals communicate effortlessly in everyday conversations.",
      label: "Audio AI",
      color: "rgba(0, 0, 0, 0.4)"
    },
    {
      title: "Text-to-Speech Output",
      description: "Transform detected sign language into natural voice responses using intelligent offline speech synthesis systems.",
      label: "Synthesis",
      color: "rgba(0, 0, 0, 0.4)"
    },
    {
      title: "AI Gesture Recognition",
      description: "Deep-learning-powered LSTM sequence modeling captures movement patterns across frames for accurate gesture understanding.",
      label: "Neural",
      color: "rgba(0, 0, 0, 0.4)"
    },
    {
      title: "Offline AI Processing",
      description: "Built to operate without constant internet dependency, ensuring reliable accessibility anywhere, anytime.",
      label: "Edge",
      color: "rgba(0, 0, 0, 0.4)"
    },
    {
      title: "Scalable Architecture",
      description: "Designed for future expansion with support for larger vocabularies, sentence prediction, multilingual systems, and mobile deployment.",
      label: "Growth",
      color: "rgba(0, 0, 0, 0.0)"
    }
  ];

  return (
    <section id="features" className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4"
          >
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-medium text-[var(--color-text-primary)] mb-8 leading-none tracking-[-0.06em]"
          >
            Built for intelligent, <br/><span className="text-brand-blue opacity-30">human communication.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed tracking-tight"
          >
            DeafConnect AI combines computer vision, speech intelligence, and deep learning into a seamless communication platform designed for inclusivity at scale.
          </motion.p>
        </div>

        <MagicBento 
          data={bentoData}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={400}
          glowColor="0, 102, 255"
        />
      </div>
    </section>
  );
};


const LayersIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const Layers = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
