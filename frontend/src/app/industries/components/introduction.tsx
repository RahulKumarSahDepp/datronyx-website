"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Briefcase,   
  Stethoscope, 
  ShoppingCart,
  Factory,     
  Zap,         
  Globe,       
  ArrowRight,
  Database,
  AlertOctagon,
  CheckCircle2
} from "lucide-react";

// --- Animation Variants ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- Sub-Component: The "Data Prism" Visual ---
// Concept: Raw, chaotic white noise enters -> gets processed -> exits as distinct colored industry value.

const DataPrismVisual = () => {
  const outputs = [
    { icon: Briefcase, color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20", label: "Fintech Risk" },
    { icon: Stethoscope, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", label: "Patient Care" },
    { icon: ShoppingCart, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20", label: "Inventory" },
    { icon: Factory, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", label: "Predictive Ops" },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px]">
      
      {/* 1. Background Glow */}
      <div className="absolute inset-0 bg-indigo-900/10 blur-3xl rounded-full" />

      {/* 2. The Core (The Prism) */}
      <div className="relative z-20 w-32 h-32 rounded-2xl bg-[#0B0F19] border border-indigo-500/50 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.3)] backdrop-blur-xl">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0 rounded-2xl border border-indigo-400/30 border-dashed"
         />
         <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
            <Database className="text-white w-6 h-6" />
         </div>
         <div className="absolute -bottom-8 text-[10px] font-mono text-indigo-300 tracking-widest uppercase">
            Context Engine
         </div>
      </div>

      {/* 3. Input Stream (Raw Chaos) - Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] h-20 overflow-hidden mask-image-gradient-r">
         {[...Array(8)].map((_, i) => (
            <motion.div
               key={i}
               className="absolute h-[1px] bg-slate-500/50"
               style={{ top: `${Math.random() * 100}%`, left: 0, right: 0 }}
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "linear" }}
            />
         ))}
         <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 border border-slate-700 px-3 py-1 rounded text-[10px] text-slate-400 font-mono">
            RAW_DATA
         </div>
      </div>

      {/* 4. Output Streams (Structured Value) - Right */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] flex flex-col justify-center gap-4 pl-8 border-l border-white/5">
         {outputs.map((item, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.2 }}
               className={`flex items-center gap-3 p-3 rounded-lg border ${item.border} ${item.bg} backdrop-blur-sm relative overflow-hidden group`}
            >
               {/* Beam Effect */}
               <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.color.replace('text', 'bg')} opacity-50`} />
               
               <item.icon className={`w-5 h-5 ${item.color}`} />
               <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase tracking-wide">{item.label}</span>
                  <span className={`text-[10px] ${item.color} opacity-80 font-mono`}>Optimized</span>
               </div>
            </motion.div>
         ))}
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 pointer-events-none z-10" width="100%" height="100%">
         <line x1="35%" y1="50%" x2="45%" y2="50%" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1" />
      </svg>

    </div>
  );
};

export default function IndustryIntro() {
  return (
    <section className="relative w-full py-24 bg-[#020617] border-b border-white/5">
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT: The Provocative Copy --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            {/* The Hook Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-bold uppercase tracking-widest mb-8">
              <AlertOctagon className="w-3 h-3" />
              <span>The "Universal" Trap</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              A Hospital is Not <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400">
                a Hedge Fund.
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
              So why use the same generic analytics tools for both?
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6 mb-10">
                <p className="text-slate-400 leading-relaxed">
                    Most data projects fail because they ignore <span className="text-white font-medium">context</span>. An anomaly in retail is a "trend." An anomaly in aviation is a "crisis." 
                </p>
                
                <div className="pl-6 border-l-2 border-indigo-500 space-y-4">
                    <p className="text-lg text-white font-medium italic">
                        "Datronyx rejects the 'one-size-fits-all' approach. We build domain-aware engines that understand the physics of your specific industry."
                    </p>
                </div>
            </motion.div>

            {/* Checklist of what we replace */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Compliance-First Models</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Legacy System Integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Real-Time Latency</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Zero-Trust Security</span>
                </div>
            </motion.div>

          </motion.div>

          {/* --- RIGHT: The Data Prism Visual --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <DataPrismVisual />
            
            {/* Contextual Note */}
            <div className="absolute -bottom-4 right-8 text-right">
                <div className="text-[10px] text-slate-500 font-mono uppercase">
                    Datronyx // Logic Core
                </div>
                <div className="text-xs text-indigo-400">
                    Contextualizing 4TB/Day
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}