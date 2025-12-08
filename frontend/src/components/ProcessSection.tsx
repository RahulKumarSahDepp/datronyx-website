"use client";

import React, { useState, useRef, MouseEvent } from 'react';
// FIX 1: Explicitly import 'Variants' type so TypeScript knows what it is
import { motion, Variants } from 'framer-motion';
import { 
  ScanSearch, 
  DraftingCompass, 
  Code2, 
  Rocket, 
  Infinity as InfinityIcon, // Renamed to avoid conflict with JS global 'Infinity'
  ArrowRight,
  TerminalSquare,
  Sparkles
} from 'lucide-react';

// --- TYPES ---
interface ProcessStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

// --- DATA ---
const processStages: ProcessStep[] = [
  {
    id: "audit",
    number: "01",
    title: "System Reconnaissance",
    subtitle: "Discovery & Audit",
    description: "We map your current data infrastructure to identify hidden bottlenecks and untaped value sources.",
    icon: ScanSearch,
    details: ["Infrastructure Mapping", "Data Quality Scoring", "KPI Definition"],
  },
  {
    id: "design",
    number: "02",
    title: "The Blueprint",
    subtitle: "Solution Architecture",
    description: "Designing the skeleton of your new intelligence layer. We select the optimal stack for your specific scale.",
    icon: DraftingCompass,
    details: ["Stack Selection", "Schema Modeling", "Security Protocol"],
  },
  {
    id: "build",
    number: "03",
    title: "Precision Engineering",
    subtitle: "Development Phase",
    description: "We build robust pipelines and train custom models, prioritizing code quality and processing speed.",
    icon: Code2,
    details: ["Pipeline Construction", "Model Training", "Latency Optimization"],
  },
  {
    id: "deploy",
    number: "04",
    title: "Seamless Integration",
    subtitle: "Deployment",
    description: "Deploying the solution into your live environment with zero disruption, ensuring immediate data flow.",
    icon: Rocket,
    details: ["CI/CD Pipeline", "API Integration", "User Acceptance"],
  },
  {
    id: "scale",
    number: "05",
    title: "Autonomous Evolution",
    subtitle: "Optimization",
    description: "We set up automated monitoring and retraining loops to ensure your models get smarter over time.",
    icon: InfinityIcon,
    details: ["Drift Monitoring", "Auto-Scaling", "Continuous Support"],
  },
];

// --- ANIMATION VARIANTS (Defined Globally) ---

// FIX 2: Explicitly type this as 'Variants' to fix the "variable" red line
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
};

// --- COMPONENT: PROCESS CARD ---
const ProcessCard = ({ 
    stage, 
    index, 
    setHoveredIndex 
}: { 
    stage: ProcessStep; 
    index: number; 
    setHoveredIndex: (idx: number | null) => void;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
      // FIX 3: cardVariants is now guaranteed to be defined and typed
      variants={cardVariants}
      className="group relative h-full rounded-2xl border border-slate-800 bg-[#0B0F19] overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.15), rgba(139,92,246,0.15), rgba(236,72,153,0.15), transparent 50%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative h-full p-6 md:p-8 flex flex-col z-10">
        <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={12} />
                {stage.subtitle}
            </span>
            <span className="font-mono text-2xl font-bold text-slate-700/50 group-hover:text-indigo-500/30 transition-colors">
                {stage.number}
            </span>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
            {stage.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors flex-grow">
            {stage.description}
        </p>
        <div className="mt-auto pt-6 border-t border-slate-800/50 group-hover:border-indigo-500/20 transition-colors">
            <ul className="space-y-3">
                {stage.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-medium text-slate-500 group-hover:text-indigo-300 transition-colors">
                        <TerminalSquare size={14} className="mt-0.5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </motion.div>
  );
};


export default function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-700 backdrop-blur-md">
             <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Workflow Protocol</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            From Chaos to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              Engineered Clarity.
            </span>
          </h2>
        </div>

        {/* --- PROCESS PIPELINE --- */}
        <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
          
          {/* CONNECTING LINE */}
          <div className="absolute top-0 bottom-0 left-8 md:left-0 md:top-12 md:bottom-auto md:w-full md:h-[2px] w-[2px] bg-slate-800">
            <motion.div 
              className="absolute bg-gradient-to-r from-indigo-500 to-cyan-400 md:h-full md:w-1/3 w-full h-1/3 opacity-50 blur-sm"
              animate={{ 
                left: ["-100%", "100%"],
                top: ["-100%", "100%"]
              }}
              // FIX 4: 'repeat: Infinity' works perfectly here inside 'transition'
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative">
            {processStages.map((stage, index) => {
              const Icon = stage.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div key={index} className="relative flex flex-col items-center md:items-start pl-20 md:pl-0">
                  
                  {/* --- STEP NODE (Icon circle on the line) --- */}
                  <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:top-0 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center z-20 pointer-events-none">
                     
                     {/* Outer Ring - Scales and glows on hover */}
                     <div 
                        className={`absolute inset-0 rounded-full border-4 transition-all duration-500 ease-out 
                        ${isHovered 
                            ? 'border-indigo-500/50 bg-indigo-500/10 scale-110 shadow-[0_0_30px_rgba(99,102,241,0.5)]' 
                            : 'border-slate-800 bg-[#020617]'}`} 
                     />
                     
                     {/* Inner Icon Container - Fills with color on hover */}
                     <div 
                        className={`relative w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border transition-all duration-500
                        ${isHovered 
                            ? 'bg-indigo-600 border-indigo-400 text-white shadow-inner scale-105' 
                            : 'bg-slate-900 border-slate-700 text-slate-400'}`}
                     >
                        <Icon size={20} className="md:w-6 md:h-6" />
                     </div>
                  </div>

                  {/* --- CARD CONTAINER --- */}
                  <div className="md:mt-28 w-full relative z-10 h-full">
                    <ProcessCard 
                        stage={stage} 
                        index={index} 
                        setHoveredIndex={setHoveredIndex} // Pass controller down
                    />
                  </div>

                  {/* Mobile Connector Arrow */}
                  {index !== processStages.length - 1 && (
                      <div className="md:hidden absolute -bottom-8 left-[-32px] text-slate-800">
                          <div className="h-8 w-[2px] bg-slate-800 mx-auto" />
                      </div>
                  )}

                </div>
              );
            })}
          </div>
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 text-center">
             <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-sm uppercase tracking-wider overflow-hidden hover:bg-indigo-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
             </button>
        </div>

      </div>
    </section>
  );
}