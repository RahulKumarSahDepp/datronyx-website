"use client";

import React from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Database,
  ShieldCheck,
  TrendingUp,
  Zap,
  BarChart3,
  AlertCircle
} from "lucide-react";

// --- 1. VISUAL: THE CONNECTED ENGINE ---
const ConnectedEngine = () => {
  const orbitalPlaneTilt = { rotateX: 60 };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px] pointer-events-none">
      
      {/* --- SVG CONNECTOR LINES (The Data Flow) --- */}
      <svg className="absolute inset-0 w-full h-full z-10 overflow-visible">
        <defs>
            <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
            </linearGradient>
        </defs>

        {/* Path 1: Bottom Card -> Center */}
        <motion.path 
            d="M 100 480 C 150 480, 250 350, 300 300"
            fill="none"
            stroke="url(#flow-grad)"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        />
        {/* Animated Particle: Input */}
        <motion.circle r="3" fill="#fbbf24">
            <animateMotion 
                dur="3s" 
                repeatCount="indefinite" 
                path="M 100 480 C 150 480, 250 350, 300 300"
                keyPoints="0;1"
                keyTimes="0;1"
            />
        </motion.circle>

        {/* Path 2: Center -> Top Card */}
        <motion.path 
            d="M 300 300 C 350 250, 450 120, 500 120"
            fill="none"
            stroke="url(#flow-grad)"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.5 }}
        />
        {/* Animated Particle: Output */}
        <motion.circle r="4" fill="#22d3ee">
            <animateMotion 
                dur="3s" 
                repeatCount="indefinite" 
                path="M 300 300 C 350 250, 450 120, 500 120"
                keyPoints="0;1"
                keyTimes="0;1"
                begin="1.5s"
            />
        </motion.circle>
      </svg>

      {/* --- FLOATING CARDS (The Before & After) --- */}
      
      {/* Card 1: INPUT (Bottom Left) - Unoptimized */}
      <motion.div 
        initial={{ opacity: 0, x: -30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-16 left-4 md:left-12 z-30 bg-[#0F1423]/90 backdrop-blur border border-slate-700/50 p-4 rounded-xl shadow-2xl flex items-center gap-4 w-[240px]"
      >
        <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <AlertCircle size={20} className="text-amber-500" />
        </div>
        <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">Input: Raw Data</div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
                Unoptimized
                <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">Low Util</span>
            </div>
        </div>
        {/* Connection node */}
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]" />
      </motion.div>

      {/* Card 2: OUTPUT (Top Right) - Profit */}
      <motion.div 
        initial={{ opacity: 0, x: 30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute top-16 right-4 md:right-12 z-30 bg-[#0F1423]/90 backdrop-blur border border-indigo-500/30 p-4 rounded-xl shadow-2xl shadow-indigo-500/10 flex items-center gap-4 w-[240px]"
      >
        {/* Connection node */}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
        
        <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
            <TrendingUp size={20} className="text-cyan-400" />
        </div>
        <div>
            <div className="text-[10px] text-indigo-300 uppercase tracking-wider font-bold mb-0.5">Output: Insight</div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
                Profit Growth
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">+24%</span>
            </div>
        </div>
      </motion.div>


      {/* --- THE ENGINE (Orbital System) --- */}
      
      {/* Central Glow */}
      <motion.div 
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-0 w-[160px] h-[160px] bg-indigo-600/20 rounded-full blur-[50px] mix-blend-screen"
      />

      {/* Orbit 1: Data */}
      <motion.div
        className="absolute w-[480px] h-[480px] border border-slate-700/30 rounded-full"
        style={orbitalPlaneTilt}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617] border border-cyan-500/50 p-1.5 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Database size={14} className="text-cyan-400" />
         </div>
      </motion.div>

      {/* Orbit 2: Logic */}
      <motion.div
        className="absolute w-[340px] h-[340px] border border-indigo-500/20 rounded-full border-dashed"
        style={orbitalPlaneTilt}
        animate={{ rotateZ: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
         <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020617] border border-indigo-500/50 p-1.5 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <Cpu size={14} className="text-indigo-400" />
         </div>
      </motion.div>

      {/* Orbit 3: Action */}
      <motion.div
        className="absolute w-[200px] h-[200px] border-2 border-fuchsia-500/10 rounded-full"
        style={orbitalPlaneTilt}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
         <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#020617] border border-fuchsia-500/50 p-1.5 rounded-full shadow-[0_0_15px_rgba(232,121,249,0.3)]">
            <Zap size={12} className="text-fuchsia-400" />
         </div>
      </motion.div>

      {/* Center Core */}
      <div className="relative z-20 flex flex-col items-center justify-center">
         <div className="w-24 h-24 bg-[#0A0F1E] border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl relative">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-pulse" />
            <Terminal size={32} className="text-white relative z-10" />
         </div>
         <div className="mt-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="text-[10px] font-bold text-slate-300 tracking-[0.2em] uppercase">
                Datronyx Core
            </span>
         </div>
      </div>

    </div>
  );
};

// --- 2. BACKGROUND: CLEAN & DARK ---
const CleanGrid = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[#020617]" />
    <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
    />
  </div>
);

// --- 3. MAIN COMPONENT ---
export default function ServicesHeroClean() {
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 40, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 25 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  return (
    <section 
        onMouseMove={handleMouseMove}
        // Updated Padding: pt-32 for mobile, pt-48 for large screens
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-24 lg:pt-48"
    >
      <CleanGrid />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* --- LEFT: CLEAR & PROFESSIONAL COPY --- */}
            <div className="relative z-30">
                
                {/* Professional Tag */}
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-8"
                >
                    <div className="h-0.5 w-8 bg-indigo-500 rounded-full" />
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                        Data Intelligence Agency
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
                >
                    We Turn Complex Data Into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                        Profitable Decisions.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl"
                >
                    Most businesses are drowning in data but starving for insights. Datronyx builds the secure systems that organize your information and use AI to predict your next best move.
                </motion.p>

                {/* The "Outcome" Checklist */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 mb-10"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                            <ShieldCheck size={14} className="text-indigo-400" />
                        </div>
                        <span className="text-slate-300 text-sm"><strong>Unified Data:</strong> Stop using messy spreadsheets.</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                            <BarChart3 size={14} className="text-cyan-400" />
                        </div>
                        <span className="text-slate-300 text-sm"><strong>Profit Optimization:</strong> Automatically identify revenue gaps.</span>
                    </div>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/contact" className="px-8 py-3.5 bg-white text-slate-950 text-sm font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5">
                        Start Free Audit <ArrowRight size={16} />
                    </Link>
                    
                    <Link href="/solutions" className="px-8 py-3.5 border border-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:text-white hover:border-slate-500 transition-all bg-slate-900/50">
                        How It Works
                    </Link>
                </div>
            </div>

            {/* --- RIGHT: THE VISUAL (Connected) --- */}
            <motion.div 
                style={{ rotateX: mouseY, rotateY: mouseX }}
                className="relative h-full flex items-center justify-center lg:justify-end"
            >
                <div className="relative w-full scale-90 lg:scale-100">
                    <ConnectedEngine />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}