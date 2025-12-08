"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Layers, 
  Database, 
  BrainCircuit, 
  Cpu, 
  Code2,
  TerminalSquare
} from "lucide-react";

// --- 1. Define Types ---
interface StarData {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

// --- 2. Star Component (Receives deterministic props) ---
const Star = ({ top, left, delay, duration }: { top: number; left: number; delay: number; duration: number }) => (
  <motion.div
    className="absolute w-[2px] h-[2px] bg-white rounded-full"
    style={{ top: `${top}%`, left: `${left}%` }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0, 1, 0], 
      scale: [0.5, 1.5, 0.5] 
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay 
    }}
  />
);

// --- 3. The "Service Stack" Visual ---
const ServiceStackVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1000px]">
      
      {/* Central Connecting Beam */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "80%" }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute w-[2px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent z-0"
      />

      {/* Layer 3: Intelligence (Top) */}
      <motion.div
        className="absolute top-[10%] z-30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-fuchsia-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="relative w-64 p-4 bg-[#0B0F19]/90 border border-fuchsia-500/30 backdrop-blur-md rounded-xl flex items-center gap-4 shadow-2xl shadow-fuchsia-900/20 transform hover:scale-105 transition-transform duration-300">
             <div className="p-3 bg-fuchsia-500/20 rounded-lg text-fuchsia-400">
                <BrainCircuit size={24} />
             </div>
             <div>
                <h4 className="text-white font-bold text-sm">AI Intelligence</h4>
                <p className="text-fuchsia-200/60 text-xs">Predictive Models & LLMs</p>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Layer 2: Engineering (Middle) */}
      <motion.div
        className="absolute top-[40%] z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="relative w-72 p-4 bg-[#0B0F19]/90 border border-cyan-500/30 backdrop-blur-md rounded-xl flex items-center gap-4 shadow-2xl shadow-cyan-900/20 transform hover:scale-105 transition-transform duration-300 ml-12">
             <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                <Code2 size={24} />
             </div>
             <div>
                <h4 className="text-white font-bold text-sm">Data Engineering</h4>
                <p className="text-cyan-200/60 text-xs">Pipelines & Transformation</p>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Layer 1: Infrastructure (Bottom) */}
      <motion.div
        className="absolute top-[70%] z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="relative w-64 p-4 bg-[#0B0F19]/90 border border-indigo-500/30 backdrop-blur-md rounded-xl flex items-center gap-4 shadow-2xl shadow-indigo-900/20 transform hover:scale-105 transition-transform duration-300">
             <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Database size={24} />
             </div>
             <div>
                <h4 className="text-white font-bold text-sm">Infrastructure</h4>
                <p className="text-indigo-200/60 text-xs">Cloud & Warehousing</p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- 4. Main Component ---
export default function ServicesHero() {
  // FIX: Use state to hold random data, ensuring it only exists on client
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    // Generate stars only after component mounts (Client-side)
    const generatedStars = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#020617] pt-20">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
          }}
        />
      </div>

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Stars - Rendered from State */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <Star 
            key={star.id} 
            top={star.top} 
            left={star.left} 
            delay={star.delay} 
            duration={star.duration}
          />
        ))}
      </div>

      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Copy */}
          <div className="max-w-2xl">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-700 backdrop-blur-md"
            >
               <Layers size={14} className="text-cyan-400" />
               <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                 Service Capabilities
               </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Full-Stack Data & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                AI Engineering.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 mb-8 leading-relaxed font-light"
            >
              We don't just advise; we build. From hardening your data infrastructure to deploying autonomous AI agents, Datronyx provides the technical backbone for your digital transformation.
            </motion.p>

            {/* Capabilities Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
                {['ETL Pipelines', 'Lakehouse Arch', 'LLM Integration', 'Predictive Modeling'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-indigo-300 bg-indigo-950/50 border border-indigo-500/20 rounded-md">
                        {tag}
                    </span>
                ))}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="group relative px-8 py-4 bg-white text-slate-950 text-base font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  View Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 text-slate-300 font-medium hover:text-white transition-colors flex items-center gap-2 border border-transparent hover:border-slate-700 rounded-lg">
                <TerminalSquare size={18} className="text-indigo-500" />
                Book Consultation
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Service Stack Visual */}
          <div className="hidden lg:block relative">
             <ServiceStackVisual />
          </div>

        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}