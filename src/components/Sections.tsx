import { motion } from "motion/react";
import { Eye, Mic2, Network, ShieldCheck, Speaker, Zap, Activity, Cpu, Layers, Scan, Check } from "lucide-react";
import React, { cloneElement as reactCloneElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/Button";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      title: "Real-Time Sign Detection",
      description: "Detects live ASL gestures through webcam input using MediaPipe 3D hand landmark extraction and deep learning inference pipelines.",
      label: "Intelligence",
      icon: <Scan size={24} className="text-brand-blue" />
    },
    {
      title: "Bidirectional Communication",
      description: "Supports both Sign-to-Voice and Voice-to-Text communication for seamless interaction between deaf and hearing users.",
      label: "Two-Way AI",
      icon: <Layers size={24} className="text-brand-blue" />
    },
    {
      title: "Text-to-Speech Output",
      description: "Detected sign sequences are transformed into natural spoken audio using intelligent offline speech synthesis systems.",
      label: "Synthesis",
      icon: <Speaker size={24} className="text-brand-blue" />
    },
    {
      title: "126-Feature AI Processing",
      description: "Processes 126-dimensional landmark vectors from two-hand tracking for improved sign discrimination and recognition accuracy.",
      label: "Neural",
      icon: <Cpu size={24} className="text-brand-blue" />
    },
    {
      title: "Real-Time Voice Recognition",
      description: "Captures spoken audio through microphone input and converts speech into readable text for deaf users instantly.",
      label: "Speech AI",
      icon: <Mic2 size={24} className="text-brand-blue" />
    },
    {
      title: "Scalable AI Architecture",
      description: "Designed for future expansion including mobile AI deployment, multilingual sign support, and enterprise accessibility integrations.",
      label: "Growth",
      icon: <Network size={24} className="text-brand-blue" />
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for cards
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true
        }
      });

      // Subtle floating animation for icons
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const icon = card.querySelector(".feature-icon");
        gsap.to(icon, {
          y: -8,
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-40 px-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-blue)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-8">
            <Zap size={12} className="text-brand-blue" />
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-blue">Core Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-medium text-[var(--color-text-primary)] mb-10 leading-[0.9] tracking-[-0.05em]">
            Precision Engineering <br/><span className="opacity-30">for Human Connection.</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-xl font-light leading-relaxed tracking-tight">
            Our neural architecture processes complex sign semantics in real-time, delivering a communication experience that feels natural, fluid, and invisible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="glass-card p-12 group hover:bg-brand-blue/[0.02] transition-all duration-700 relative overflow-hidden"
            >
              {/* Premium Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-brand-blue/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="feature-icon mb-10 inline-block p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 group-hover:border-brand-blue/30 transition-colors duration-500">
                  {feature.icon}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-blue mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {feature.label}
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 text-[var(--color-text-primary)] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] font-light leading-relaxed tracking-tight group-hover:text-[var(--color-text-primary)] transition-colors duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const plans = [
    {
      name: "Starter Plan",
      price: "$19.99",
      period: "/month",
      description: "Perfect for individuals and students.",
      features: [
        "Real-time Sign → Text Translation",
        "Voice → Text Communication",
        "Basic AI Sign Detection",
        "1 User Access",
        "Standard Camera Support",
        "Conversation History",
        "Community Support"
      ],
      buttonText: "Get Started",
      premium: false
    },
    {
      name: "Professional Plan",
      price: "$49.99",
      period: "/month",
      description: "Best for professionals, institutions, and small organizations.",
      features: [
        "Everything in Starter",
        "Sign → Voice Output",
        "Faster AI Processing",
        "Advanced Sentence Generation",
        "Multi-User Access",
        "Priority Support",
        "Extended Conversation Storage",
        "Improved Detection Accuracy",
        "Analytics Dashboard"
      ],
      buttonText: "Upgrade to Pro",
      premium: true
    },
    {
      name: "Custom Enterprise Plan",
      price: "Custom",
      period: "",
      description: "Designed for schools, hospitals, NGOs, and enterprises.",
      features: [
        "Fully Customized AI Models",
        "Institution-Specific Sign Training",
        "Unlimited Users",
        "Dedicated Cloud & GPU Resources",
        "API Integrations",
        "White-Label Solutions",
        "Enterprise Security",
        "Dedicated Account Manager",
        "Custom Accessibility Solutions",
        "24/7 Premium Support"
      ],
      buttonText: "Contact Sales",
      premium: false
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-40 px-8 relative bg-brand-blue/[0.01]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-display font-medium text-[var(--color-text-primary)] mb-8 tracking-[-0.05em]">
            Scalable Accessibility.
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] font-light max-w-2xl mx-auto">
            Choose the perfect plan for your communication needs, from personal learning to global enterprise deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`glass-card p-12 rounded-[2px] flex flex-col relative transition-all duration-500 ${
                plan.premium ? "border-brand-blue/50 bg-brand-blue/[0.04]" : "border-[var(--color-border)]"
              }`}
            >
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-blue text-black text-[10px] font-bold uppercase tracking-widest rounded-[2px]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium mb-2">{plan.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-light min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-medium">{plan.price}</span>
                  <span className="text-lg text-[var(--color-text-secondary)] font-light">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] font-light">
                    <Check size={16} className="text-brand-blue shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.premium ? "primary" : "glass"} 
                className="w-full h-14 text-sm font-bold tracking-widest uppercase"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
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
