import React from 'react';
import { motion } from "motion/react";
import { Cpu, Globe, GraduationCap, Hospital, Laptop, Layout, Smartphone, UserRound, Mic, FileText } from "lucide-react";
import LogoLoop, { LogoItem } from "./ui/LogoLoop";
import { 
  SiTensorflow, 
  SiPython, 
  SiNumpy, 
  SiOpencv, 
  SiStreamlit, 
  SiPytorch,
  SiGooglecloud,
  SiFastapi,
  SiMediafire
} from 'react-icons/si';

export const TechLogosLoop = () => {
  const techLogos: LogoItem[] = [
    { node: <SiTensorflow />, title: "TensorFlow" },
    { node: <SiPython />, title: "Python" },
    { node: <SiNumpy />, title: "NumPy" },
    { node: <SiOpencv />, title: "OpenCV" },
    { node: <SiStreamlit />, title: "Streamlit" },
    { node: <SiPytorch />, title: "PyTorch" },
    { node: <SiGooglecloud />, title: "Google Cloud" },
    { node: <SiFastapi />, title: "FastAPI" },
    { node: <span className="text-xl font-display font-medium tracking-tighter">MediaPipe</span>, title: "MediaPipe" },
    { node: <span className="text-xl font-display font-medium tracking-tighter">LSTM</span>, title: "LSTM" },
  ];

  return (
    <div className="py-12 border-y border-[var(--color-border)] bg-brand-blue/[0.01]">
      <div className="max-w-7xl mx-auto px-8 mb-6">
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-text-secondary)] opacity-50 text-center lg:text-left">
          Our Intelligence Stack
        </p>
      </div>
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={32}
        gap={80}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        className="opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
      />
    </div>
  );
};

export const TechnologyStack = () => {
  const stack = [
    { name: "MediaPipe", desc: "Real-time 3D hand landmark detection optimized for low-latency gesture tracking.", icon: <SiMediafire className="w-8 h-8" /> },
    { name: "TensorFlow", desc: "Deep learning framework powering intelligent gesture classification and sequence modeling.", icon: <SiTensorflow className="w-8 h-8" /> },
    { name: "LSTM Networks", desc: "Sequential neural architecture designed for understanding movement across time.", icon: <Cpu className="w-8 h-8" /> },
    { name: "OpenCV", desc: "Computer vision pipeline enabling live webcam capture and frame preprocessing.", icon: <SiOpencv className="w-8 h-8" /> },
    { name: "SpeechRecognition", desc: "Real-time speech transcription system for accessible communication.", icon: <Mic className="w-8 h-8" /> },
    { name: "pyttsx3", desc: "Offline text-to-speech engine for natural voice output without internet dependency.", icon: <FileText className="w-8 h-8" /> },
    { name: "Streamlit", desc: "Interactive interface architecture designed for rapid accessibility-focused deployment.", icon: <SiStreamlit className="w-8 h-8" /> },
    { name: "NumPy", desc: "Efficient numerical processing for AI feature extraction and model inference.", icon: <SiNumpy className="w-8 h-8" /> }
  ];

  return (
    <section id="tech" className="py-32 px-8 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">Technology Stack</div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em]">
            Engineered with modern <br/><span className="opacity-30">AI infrastructure.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[2px] border border-[var(--color-border)] hover:border-brand-blue/30 transition-all"
            >
              <div className="text-brand-blue mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold text-brand-blue mb-3 font-display tracking-tight">{item.name}</h4>
              <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  return (
    <section id="workflow" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">System Workflow</div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em] mb-8">
              Two-way communication powered by <span className="opacity-30">intelligent AI.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg font-light leading-relaxed mb-12">
              DeafConnect AI enables seamless interaction between deaf individuals and hearing users through real-time bidirectional communication workflows.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-10 rounded-[2px] border border-[var(--color-border)]">
              <h3 className="text-2xl font-bold mb-6 font-display tracking-tight">Sign Language → Voice</h3>
              <ul className="space-y-4">
                {[
                  "Camera captures real-time hand movement",
                  "MediaPipe extracts 21 landmark points",
                  "AI converts landmarks into feature vectors",
                  "LSTM analyzes gesture sequences",
                  "System predicts sign meaning",
                  "Output converted into natural speech"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 text-sm text-[var(--color-text-secondary)] font-light">
                    <span className="text-brand-blue font-bold">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-10 rounded-[2px] border border-[var(--color-border)]">
              <h3 className="text-2xl font-bold mb-6 font-display tracking-tight">Voice → Text</h3>
              <ul className="space-y-4">
                {[
                  "Microphone captures spoken audio",
                  "Speech recognition processes voice input",
                  "AI converts speech into readable text",
                  "Text displayed instantly on-screen",
                  "Communication becomes accessible in real time"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 text-sm text-[var(--color-text-secondary)] font-light">
                    <span className="text-brand-blue font-bold">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AIModel = () => {
  const labels = [
    "Landmark Extraction", "Sequence Modeling", "Neural Processing", 
    "Temporal Analysis", "Gesture Classification", "Real-Time Prediction"
  ];

  return (
    <section className="py-32 px-8 bg-brand-blue/[0.02]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">Deep Learning Architecture</div>
        <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em] mb-8">
          Purpose-built for understanding <span className="opacity-30">human motion.</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg font-light leading-relaxed mb-16">
          Unlike static image models, sign language requires temporal understanding across multiple frames. DeafConnect AI uses LSTM neural networks to recognize motion patterns, sequence flow, and gesture dynamics in real time.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {labels.map((label, i) => (
            <span key={i} className="px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-[2px] text-[10px] uppercase font-bold tracking-widest text-brand-blue">
              {label}
            </span>
          ))}
        </div>
        
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg)] rounded-[2px] font-bold text-sm tracking-tighter">
          <div className="w-2 h-2 bg-brand-blue rounded-full" />
          ~95% Training Accuracy
        </div>
        <p className="mt-8 text-[10px] text-[var(--color-text-secondary)] opacity-50 uppercase tracking-widest">
          Performance may vary depending on lighting conditions and camera positioning.
        </p>
      </div>
    </section>
  );
};

export const UseCases = () => {
  const cases = [
    { title: "Educational Institutions", desc: "Enable inclusive classroom communication between students, teachers, and staff.", icon: <GraduationCap /> },
    { title: "Healthcare Environments", desc: "Improve communication accessibility in hospitals, clinics, and emergency situations.", icon: <Hospital /> },
    { title: "Customer Service", desc: "Support deaf individuals in retail stores, banks, restaurants, and public-facing businesses.", icon: <Laptop /> },
    { title: "Workplace Accessibility", desc: "Create inclusive professional environments with AI-assisted communication support.", icon: <UserRound /> }
  ];

  return (
    <section id="use-cases" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">Real-World Accessibility</div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em]">
            Designed for everyday <span className="opacity-30">communication.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className="glass-card p-12 rounded-[2px] border border-[var(--color-border)] flex gap-8 items-start"
            >
              <div className="text-brand-blue p-3 bg-brand-blue/10 rounded-[2px]">
                {React.cloneElement(c.icon as React.ReactElement, { size: 32 })}
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display mb-4 tracking-tight">{c.title}</h3>
                <p className="text-[var(--color-text-secondary)] font-light leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Roadmap = () => {
  const items = [
    { title: "Sentence-Level Recognition", description: "Advanced NLP for context-aware interpretation." },
    { title: "Transformer-Based AI Models", description: "State-of-the-art neural architecture for higher precision." },
    { title: "Multilingual Sign Support", description: "Bridging diverse global sign languages." },
    { title: "Mobile AI Applications", description: "On-the-go accessibility on all devices." },
    { title: "Real-Time Continuous Detection", description: "Seamless workflow for natural communication." }
  ];

  return (
    <section id="roadmap" className="py-32 px-8 bg-brand-blue/[0.02] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">Future Vision</div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em] mb-8">
              Building the <br/> future of <span className="text-brand-blue">accessibility.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] font-light">
              Our technological roadmap is committed to expanding the horizons of real-time sign language interpretation and accessibility.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="group relative p-1 rounded-[2px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                <div className="relative bg-[var(--color-bg)] p-10 border border-[var(--color-border)] group-hover:border-brand-blue/30 transition-colors duration-500 flex items-center gap-8">
                  <span className="text-5xl font-display font-black text-brand-blue opacity-20">0{i+1}</span>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-brand-blue transition-colors duration-300">{item.title}</h4>
                    <p className="text-[var(--color-text-secondary)] font-light max-w-md">{item.description}</p>
                  </div>
                  <motion.div 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                    className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:border-brand-blue group-hover:text-brand-blue transition-all"
                  >
                    <span className="text-2xl">+</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
