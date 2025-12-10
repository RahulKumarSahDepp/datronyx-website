"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  GitBranch,
  Activity,
  TrendingUp,
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
  Database,
  Network
} from "lucide-react";

// --- 1. STRUCTURED ATMOSPHERIC BACKGROUND ---
const PerspectiveGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Dark Gradient Base */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050A25] to-[#020617]" />
    
    {/* Perspective Grid Lines */}
    <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-20%) scale(2.5)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)'
        }}
    />

    {/* Ambient Light Orbs */}
    <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-indigo-800/20 rounded-full blur-[120px] mix-blend-screen" 
    />
    <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-cyan-800/20 rounded-full blur-[120px] mix-blend-screen" 
    />
  </div>
);

// --- 2. ROTATING TEXT (Kept the same, it works well) ---
const RotatingHeadline = () => {
  const words = ["Certainty.", "Growth.", "Revenue.", "Automated Action."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative h-[1.2em] w-[10ch] min-w-[220px] align-bottom overflow-hidden text-left -mb-2">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-110%", opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400 pb-2 leading-tight whitespace-nowrap font-extrabold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// --- 3. THE NEURAL NEXUS VISUAL (New & Stunning) ---
const ConnectionPath = ({ d, delay }: { d: string, delay: number }) => (
    <>
        {/* Base Path */}
        <path d={d} stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" fill="none" />
        {/* Moving Particle */}
        <motion.path
            d={d}
            stroke="url(#pulse-gradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: delay,
                repeatDelay: 0.5
            }}
        />
    </>
);

const NeuralNexusVisual = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto h-[450px] perspective-[1000px] mt-12 lg:mt-0 pointer-events-none">
      
      {/* Central Processing Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border-2 border-dashed border-indigo-500/40 relative flex items-center justify-center"
        >
             <div className="absolute inset-0 bg-indigo-600/20 blur-xl rounded-full animate-pulse" />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0B0F1A] border border-indigo-400/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)] z-30">
            <Cpu size={40} className="text-indigo-300" />
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono text-indigo-300 uppercase tracking-widest bg-[#020617] px-2">
            Datronyx Core
        </div>
      </div>

      {/* Satellite Nodes (Inputs & Outputs) */}
      <div className="absolute inset-0 z-10">
        <svg className="w-full h-full" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                </linearGradient>
            </defs>

            {/* Paths from Core to Outputs */}
            <ConnectionPath d="M300 225 C 380 225, 420 120, 480 120" delay={0} /> {/* Top Right */}
            <ConnectionPath d="M300 225 C 380 225, 420 225, 480 225" delay={0.8} /> {/* Mid Right */}
            <ConnectionPath d="M300 225 C 380 225, 420 330, 480 330" delay={1.6} /> {/* Bot Right */}

            {/* Paths from Inputs to Core */}
            <ConnectionPath d="M120 150 C 180 150, 220 225, 300 225" delay={0.4} /> {/* Top Left */}
            <ConnectionPath d="M120 300 C 180 300, 220 225, 300 225" delay={1.2} /> {/* Bot Left */}
        </svg>

        {/* Input Nodes (Raw Data) */}
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.5}} className="absolute top-[130px] left-[90px] p-3 rounded-xl bg-[#0F1425] border border-slate-700 shadow-lg flex items-center gap-3">
            <Database size={18} className="text-slate-400" />
            <span className="text-xs text-slate-300 font-mono">Raw Streams</span>
        </motion.div>
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:1.3}} className="absolute bottom-[130px] left-[90px] p-3 rounded-xl bg-[#0F1425] border border-slate-700 shadow-lg flex items-center gap-3">
            <Network size={18} className="text-slate-400" />
            <span className="text-xs text-slate-300 font-mono">Legacy APIs</span>
        </motion.div>

        {/* Output Nodes (Solutions) */}
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay:0.8}} className="absolute top-[100px] right-[50px] p-3 rounded-xl bg-[#0F1425] border border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.2)] flex items-center gap-3">
            <ShieldCheck size={18} className="text-rose-400" />
            <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Detect Risk</span>
                <span className="text-[10px] text-rose-400/70 font-mono">Real-time</span>
            </div>
        </motion.div>
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay:1.6}} className="absolute top-[205px] right-[30px] p-3 rounded-xl bg-[#0F1425] border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center gap-3">
            <TrendingUp size={18} className="text-cyan-400" />
             <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Predict Demand</span>
                <span className="text-[10px] text-cyan-400/70 font-mono">98% Accuracy</span>
            </div>
        </motion.div>
        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay:2.4}} className="absolute bottom-[100px] right-[50px] p-3 rounded-xl bg-[#0F1425] border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center gap-3">
            <Zap size={18} className="text-emerald-400" />
             <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Automate Action</span>
                <span className="text-[10px] text-emerald-400/70 font-mono">Zero-touch</span>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- MAIN HERO COMPONENT ---
export default function DatronyxHeroRefined() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center overflow-hidden border-b border-white/5 bg-[#020617]">
      
      <PerspectiveGrid />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-36 pb-20 lg:pt-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* --- LEFT COLUMN --- */}
            <div className="text-left relative z-20">
                
                {/* Terminal-style Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-indigo-500/20 bg-[#0A0F25] backdrop-blur-md mb-8 font-mono"
                >
                    <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs text-indigo-300 tracking-wider uppercase">
                        DATRONYX_OS :: <span className="text-emerald-400">ONLINE</span>
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
                    Transform Data <br />
                    Into <RotatingHeadline />
                </h1>

                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-light border-l-2 border-indigo-500/50 pl-6">
                    Stop building passive dashboards. We engineer <span className="text-white font-medium">autonomous decision layers</span> that connect raw signals directly to profitable actions.
                </p>

                <div className="flex flex-wrap gap-5">
                    <Link href="/contact" className="group relative overflow-hidden px-8 py-4 rounded-xl bg-white text-slate-950 text-base font-bold transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                            Start Transformation
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                         <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                    </Link>
                    
                    <Link href="/services" className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 text-base font-medium hover:border-indigo-400 hover:text-white transition-colors flex items-center gap-3 bg-[#0A0F25]/50 hover:bg-[#0A0F25]">
                        <GitBranch size={18} className="text-indigo-400" />
                        View Services
                    </Link>
                </div>

                {/* --- CREDIBILITY METRICS (Dashboard Style) --- */}
                <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                    {[
                        { icon: Zap, color: "text-amber-400", label: "Time-to-Value", value: "< 4 Weeks" },
                        { icon: Activity, color: "text-cyan-400", label: "Processing Latency", value: "Real-Time" },
                        { icon: Lock, color: "text-emerald-400", label: "Architecture", value: "Zero-Trust" }
                    ].map((metric, i) => (
                        <div key={i} className="flex flex-col p-4 rounded-xl bg-[#0A0F25]/50 border border-white/5">
                             <div className={`mb-3 ${metric.color}`}>
                                <metric.icon size={20} />
                             </div>
                            <div className="text-2xl font-bold text-white tracking-tight whitespace-nowrap">
                                {metric.value}
                            </div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1 font-mono">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- RIGHT COLUMN --- */}
            <div className="relative z-10 lg:-mr-12 xl:-mr-24">
                 <NeuralNexusVisual />
                 {/* Subtler glow behind the nexus */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-indigo-600/5 rounded-full blur-3xl -z-10 mix-blend-screen" />
            </div>

        </div>
      </div>
    </section>
  );
}