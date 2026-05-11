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
          AI Infrastructure Stack
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
    { name: "MediaPipe", desc: "Real-time two-hand landmark detection optimized for CPU-based gesture tracking.", icon: <div className="w-8 h-8"><SiMediafire size="100%" /></div> },
    { name: "TensorFlow / Keras", desc: "Deep learning framework powering gesture classification and inference.", icon: <div className="w-8 h-8"><SiTensorflow size="100%" /></div> },
    { name: "OpenCV", desc: "Real-time webcam processing and computer vision pipeline management.", icon: <div className="w-8 h-8"><SiOpencv size="100%" /></div> },
    { name: "SpeechRecognition", desc: "Speech-to-text engine enabling hearing-to-deaf communication workflows.", icon: <div className="w-8 h-8"><Mic size="100%" /></div> },
    { name: "pyttsx3", desc: "Offline text-to-speech system for real-time voice generation.", icon: <div className="w-8 h-8"><FileText size="100%" /></div> },
    { name: "Streamlit", desc: "Interactive real-time application interface and accessibility dashboard.", icon: <div className="w-8 h-8"><SiStreamlit size="100%" /></div> },
    { name: "NumPy & Pandas", desc: "Feature engineering, preprocessing, and dataset management.", icon: <div className="w-8 h-8"><SiNumpy size="100%" /></div> },
    { name: "WLASL Dataset", desc: "Large-scale American Sign Language dataset used for AI model training.", icon: <div className="w-8 h-8"><Globe size="100%" /></div> }
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
            <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">Bidirectional AI Communication</div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em] mb-8">
              Two-way real-time communication powered by <span className="opacity-30">intelligent AI systems.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg font-light leading-relaxed mb-12">
              DeafConnect AI enables natural communication between deaf and hearing individuals through real-time gesture recognition, speech processing, and accessibility-focused AI workflows.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-10 rounded-[2px] border border-[var(--color-border)]">
              <h3 className="text-2xl font-bold mb-6 font-display tracking-tight">Sign Language → Speech</h3>
              <ul className="space-y-4">
                {[
                  "Webcam captures real-time hand gestures",
                  "MediaPipe detects 21 landmarks per hand",
                  "TensorFlow neural network predicts sign labels",
                  "AI builds contextual sentence outputs",
                  "Text converted into natural speech instantly"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 text-sm text-[var(--color-text-secondary)] font-light">
                    <span className="text-brand-blue font-bold">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-10 rounded-[2px] border border-[var(--color-border)]">
              <h3 className="text-2xl font-bold mb-6 font-display tracking-tight">Speech → Text</h3>
              <ul className="space-y-4">
                {[
                  "Microphone captures spoken language",
                  "SpeechRecognition processes audio input",
                  "Spoken sentences converted into readable text",
                  "Live captions displayed in real time",
                  "Creates seamless hearing-to-deaf communication"
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
    <section id="ai-model" className="py-32 px-8 bg-brand-blue/[0.02]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">Deep Learning System</div>
        <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em] mb-8">
          Engineered for real-time <span className="opacity-30">human gesture understanding.</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg font-light leading-relaxed mb-16">
          DeafConnect AI uses a deep neural architecture trained on the WLASL dataset using two-hand landmark extraction, Gaussian noise regularization, dropout optimization, and real-time inference systems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "Camera Input", "MediaPipe Detection", "Landmark Extraction", 
            "Feature Vector Processing", "Neural Network Inference", "Stability Filtering", "Sentence Generation", "Speech / Text Output"
          ].map((label, i) => (
            <span key={i} className="px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-[2px] text-[10px] uppercase font-bold tracking-widest text-brand-blue">
              {label}
            </span>
          ))}
        </div>
        
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg)] rounded-[2px] font-bold text-sm tracking-tighter">
          <div className="w-2 h-2 bg-brand-blue rounded-full" />
          85–95% Accuracy
        </div>
        <p className="mt-8 text-[10px] text-[var(--color-text-secondary)] opacity-50 uppercase tracking-widest">
          Performance varies depending on lighting, gesture visibility, background conditions, and camera positioning.
        </p>
      </div>
    </section>
  );
};

export const UseCases = () => {
  const cases = [
    { title: "Educational Institutions", desc: "Support inclusive classrooms and improve communication accessibility for deaf students and teachers.", icon: <GraduationCap /> },
    { title: "Healthcare & Emergency", desc: "Enable faster communication in hospitals, clinics, and emergency situations without requiring interpreters.", icon: <Hospital /> },
    { title: "Retail & Public Services", desc: "Improve accessibility in restaurants, banks, customer support centers, and public-facing businesses.", icon: <Laptop /> },
    { title: "Enterprise Accessibility", desc: "Empower organizations with inclusive communication systems powered by real-time AI.", icon: <UserRound /> }
  ];

  return (
    <section id="use-cases" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue mb-4">Real-World Accessibility</div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-[var(--color-text-primary)] tracking-[-0.04em]">
            Designed for practical <span className="opacity-30">communication environments.</span>
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
    { title: "Continuous Sentence Recognition", description: "Enable natural conversational sign interpretation beyond isolated gestures." },
    { title: "Mobile AI Applications", description: "Deploy lightweight AI models on Android and iOS devices." },
    { title: "Pakistani Sign Language Support", description: "Expand the platform beyond ASL to support regional sign systems." },
    { title: "AI Video Call Integration", description: "Integrate sign language accessibility into Zoom, Meet, and Teams environments." },
    { title: "Enterprise Accessibility APIs", description: "Provide scalable APIs for institutions, healthcare systems, and developers." },
    { title: "AI Signing Avatars", description: "Generate animated signing avatars for enhanced deaf-to-deaf communication." }
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
              DeafConnect AI is evolving into a scalable accessibility ecosystem focused on real-time intelligence, multilingual communication, and human-centered AI experiences.
            </p>
          </div>
          
          <div className="lg:col-span-8 space-y-4">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
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
