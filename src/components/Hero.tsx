import { motion, useScroll, useTransform } from "motion/react";
import { Activity, Layers } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/Button";
import CurvedLoop from "./ui/CurvedLoop";
import LineWaves from "./ui/LineWaves";

export const AIVisualization = () => {
  // Simulate hand landmark points
  const points = [
    { x: 200, y: 350, id: 'wrist' },
    { x: 150, y: 300, id: 'thumb1' }, { x: 110, y: 240, id: 'thumb2' }, { x: 90, y: 190, id: 'thumb3' },
    { x: 190, y: 220, id: 'index1' }, { x: 185, y: 160, id: 'index2' }, { x: 180, y: 110, id: 'index3' },
    { x: 230, y: 210, id: 'middle1' }, { x: 235, y: 140, id: 'middle2' }, { x: 240, y: 90, id: 'middle3' },
    { x: 270, y: 230, id: 'ring1' }, { x: 280, y: 165, id: 'ring2' }, { x: 290, y: 120, id: 'ring3' },
    { x: 310, y: 270, id: 'pinky1' }, { x: 330, y: 220, id: 'pinky2' }, { x: 350, y: 180, id: 'pinky3' },
  ];

  const connections = [
    ['wrist', 'thumb1'], ['thumb1', 'thumb2'], ['thumb2', 'thumb3'],
    ['wrist', 'index1'], ['index1', 'index2'], ['index2', 'index3'],
    ['wrist', 'middle1'], ['middle1', 'middle2'], ['middle2', 'middle3'],
    ['wrist', 'ring1'], ['ring1', 'ring2'], ['ring2', 'ring3'],
    ['wrist', 'pinky1'], ['pinky1', 'pinky2'], ['pinky2', 'pinky3'],
  ];

  return (
    <div className="relative w-full aspect-square max-w-sm lg:max-w-md mx-auto">
      {/* Glow effect under the hand */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-brand-blue/20 blur-[100px] rounded-full scale-75 animate-pulse" />
      
      {/* Floating Panel 1: Confidence */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -right-4 lg:right-0 glass-card p-4 rounded-[2px] z-10 w-40 lg:w-44 shadow-2xl border border-[var(--color-border)]"
      >
        <div className="flex items-center gap-2 mb-2 text-brand-blue">
          <Activity size={14} />
          <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">AI Confidence</span>
        </div>
        <div className="text-2xl lg:text-3xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.05em]">95.2%</div>
        <div className="w-full h-1 bg-brand-blue/10 rounded-[2px] mt-2 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "95.2%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
            className="h-full bg-brand-blue" 
          />
        </div>
      </motion.div>

      {/* Floating Panel 2: Transcript */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute bottom-4 -left-4 lg:left-0 glass-card p-4 lg:p-5 rounded-[2px] z-10 w-56 lg:w-64 shadow-2xl border border-[var(--color-border)]"
      >
        <div className="flex items-center gap-2 mb-2 lg:mb-3 text-brand-blue">
          <Layers size={14} />
          <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">Live Neural Processing</span>
        </div>
        <p className="text-xs lg:text-sm font-light text-[var(--color-text-secondary)] italic leading-relaxed tracking-tight">
          "Pioneering accessibility through deep spatial recognition models."
        </p>
      </motion.div>

      {/* Small Recognition Indicators */}
      <div className="absolute top-1/2 -left-12 lg:-left-20 flex flex-col gap-2">
        {['Gesture Detected', 'AI Recognition Active', 'Speech Converted'].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + (i * 0.2) }}
            className="bg-[var(--color-bg)] border border-[var(--color-border)] px-3 py-1.5 rounded-[2px] shadow-sm flex items-center gap-2"
          >
            <div className="w-1 h-1 bg-brand-blue rounded-full" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* SVG Hand Tracking */}
      <motion.svg 
        viewBox="0 0 450 450" 
        className="w-full h-full relative z-0"
        animate={{ rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <radialGradient id="pointGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-brand-blue)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-brand-blue)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections */}
        {connections.map(([startId, endId], i) => {
          const start = points.find(p => p.id === startId)!;
          const end = points.find(p => p.id === endId)!;
          return (
            <motion.line
              key={i}
              x1={start.x} y1={start.y}
              x2={end.x} y2={end.y}
              stroke="var(--color-brand-blue)"
              strokeOpacity="0.4"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
            />
          );
        })}

        {/* Landmarks */}
        {points.map((p, i) => (
          <motion.g
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + (i * 0.03) }}
          >
            <circle cx={p.x} cy={p.y} r="8" fill="url(#pointGlow)" opacity="0.3" />
            <circle cx={p.x} cy={p.y} r="3" fill="var(--color-brand-blue)" stroke="var(--color-bg)" strokeWidth="1" />
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
};

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-32 lg:pt-48 pb-10 px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Line Waves */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none opacity-40 dark:opacity-20 z-0 scale-150">
        <LineWaves 
          speed={0.15}
          innerLineCount={40}
          outerLineCount={45}
          warpIntensity={0.8}
          rotation={-35}
          brightness={0.15}
          color1="#ffffff"
          color2="#ffffff"
          color3="#ffffff"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
        <motion.div style={{ y: y2, opacity }} className="flex-1 text-center lg:text-left z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-[2px] mb-8"
          >
            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
            <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-brand-blue">
               AI-Powered Accessibility Platform
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium text-[var(--color-text-primary)] leading-[0.95] lg:leading-[0.9] tracking-[-0.04em] mb-10"
          >
            Breaking communication barriers with <span className="text-brand-blue text-glow">real-time AI</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-xl mb-12 leading-relaxed font-light mx-auto lg:mx-0"
          >
            DeafConnect AI transforms sign language into seamless communication using deep learning, real-time gesture recognition, speech intelligence, and accessibility-first AI systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
          >
            <Button variant="primary" className="w-full sm:w-auto min-w-[180px] lg:min-w-[200px]">
              Try Live Demo
            </Button>
            <Button variant="glass" className="w-full sm:w-auto min-w-[180px] lg:min-w-[200px]">
              See How It Works
            </Button>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: y1 }} className="flex-1 w-full flex justify-center items-center">
          <AIVisualization />
        </motion.div>
      </div>

      {/* Curved Loop integration */}
      <div className="absolute bottom-0 left-0 w-full opacity-50 dark:opacity-30 pointer-events-none lg:pointer-events-auto">
        <CurvedLoop 
          marqueeText="BREAKING ✦ BARRIERS ✦ BUILDING ✦ CONNECTIONS ✦ DEAFCONNECT AI ✦ "
          speed={0.8}
          curveAmount={300}
          direction="left"
          interactive
          className="font-display font-black tracking-[-0.05em] uppercase text-[var(--color-text-primary)] opacity-5"
        />
      </div>
    </section>
  );
};
