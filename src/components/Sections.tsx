import { motion } from "motion/react";
import { Eye, Mic2, Network, ShieldCheck, Speaker, Zap, Activity, Cpu, Layers, Scan } from "lucide-react";
import React, { cloneElement as reactCloneElement } from "react";
import MagicBento, { CardItem } from "./ui/MagicBento";

export const Stats = () => {
  const stats = [
    { label: "Hand Landmarks Per Hand", value: "21+", sub: "3D Spatial Mapping" },
    { label: "Features Extracted Per Frame", value: "126", sub: "Deep Signal Data" },
    { label: "Model Training Accuracy", value: "~95%", sub: "Validated Results" },
    { label: "Inference Latency", value: "<15ms", sub: "Real-Time Processing" }
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
      description: "Detects live ASL gestures through webcam input using MediaPipe 3D hand landmark extraction and deep learning inference pipelines.",
      label: "Intelligence",
      color: "rgba(0, 0, 0, 0.4)",
      icon: <Scan size={18} />
    },
    {
      title: "Bidirectional Communication",
      description: "Supports both Sign-to-Voice and Voice-to-Text communication for seamless interaction between deaf and hearing users.",
      label: "Two-Way AI",
      color: "rgba(0, 0, 0, 0.4)",
      icon: <Layers size={18} />
    },
    {
      title: "Text-to-Speech Output",
      description: "Detected sign sequences are transformed into natural spoken audio using intelligent offline speech synthesis systems.",
      label: "Synthesis",
      color: "rgba(0, 0, 0, 0.4)",
      icon: <Speaker size={18} />
    },
    {
      title: "126-Feature AI Processing",
      description: "Processes 126-dimensional landmark vectors from two-hand tracking for improved sign discrimination and recognition accuracy.",
      label: "Neural",
      color: "rgba(0, 0, 0, 0.4)",
      icon: <Cpu size={18} />
    },
    {
      title: "Real-Time Voice Recognition",
      description: "Captures spoken audio through microphone input and converts speech into readable text for deaf users instantly.",
      label: "Speech AI",
      color: "rgba(0, 0, 0, 0.4)",
      icon: <Mic2 size={18} />
    },
    {
      title: "Scalable Accessibility Architecture",
      description: "Designed for future expansion including mobile AI deployment, multilingual sign support, and enterprise accessibility integrations.",
      label: "Growth",
      color: "rgba(0, 0, 0, 0.0)",
      icon: <Network size={18} />
    }
  ];

  return (
    <section id="features" className="py-32 px-8 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-blue)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-[2px] mb-6"
          >
            <Zap size={12} className="text-brand-blue" />
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue">Core Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-medium text-[var(--color-text-primary)] mb-8 leading-none tracking-[-0.06em]"
          >
            Real-time accessibility <br/><span className="text-brand-blue opacity-30">powered by AI.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed tracking-tight"
          >
            DeafConnect AI combines MediaPipe landmark detection, TensorFlow neural networks, speech recognition, and intelligent sentence processing to enable seamless communication between deaf and hearing individuals.
          </motion.p>
        </div>

        <MagicBento 
          data={bentoData}
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={false}
          clickEffect={false}
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
