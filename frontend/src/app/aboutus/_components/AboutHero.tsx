"use client";

import React, { useEffect, useState } from "react";
// FIX 1: Import 'Variants' type
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { 
  ArrowDown, 
  Binary, 
  Cpu, 
  Target 
} from "lucide-react";

// --- ANIMATION VARIANTS ---
// FIX 2: Explicitly type these variables so the red lines disappear
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
  },
};

// --- SUB-COMPONENT: FLOATING PARTICLE ---
const FloatingParticle = ({ delay, top, left }: { delay: number, top: string, left: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 0.5, 0], scale: [0, 1.5, 0], y: -50 }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"
    style={{ top, left }}
  />
);

export default function AboutHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); 
  
  const words = ["Architects", "Engineers", "Pioneers"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#020617]">
      
      {/* --- 1. CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none perspective-[500px]">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 opacity-20"
        >
          <div 
            className="w-full h-[200%] absolute -top-1/2 left-0 origin-bottom"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.3) 100%), 
                                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              transform: 'rotateX(60deg)',
            }}
          />
        </motion.div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />
      
      <FloatingParticle top="30%" left="20%" delay={0} />
      <FloatingParticle top="70%" left="80%" delay={2} />
      <FloatingParticle top="40%" left="60%" delay={1} />
      <FloatingParticle top="80%" left="10%" delay={3} />

      {/* --- 2. MAIN CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* BADGE */}
          <motion.div variants={textVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase">
                Est. 2025 • The Origin Story
              </span>
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1 
            variants={textVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            We Are The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
               Algorithmic {words[index]}
            </span>
          </motion.h1>

          {/* SUBTEXT - FIX 3: Cleaned up JSX Syntax here */}
          <motion.p 
            variants={textVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
          >
            Born in 2025 to solve the data crisis of the decade. While the world chased trends,{" "}
            <strong className="text-white font-medium">Datronyx</strong>{" "}
            was built to engineer the infrastructure of the future.
          </motion.p>

          {/* STATS / PILLARS ROW */}
          <motion.div 
            variants={textVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl"
          >
             {/* Pillar 1 */}
             <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex justify-center mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
                   <Binary size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Data First</h3>
                <p className="text-slate-500 text-sm">Chaos engineered into clarity.</p>
             </div>

             {/* Pillar 2 */}
             <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                   <Cpu size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">AI Native</h3>
                <p className="text-slate-500 text-sm">Intelligence at the core.</p>
             </div>

             {/* Pillar 3 */}
             <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-fuchsia-500/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex justify-center mb-4 text-fuchsia-400 group-hover:scale-110 transition-transform">
                   <Target size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Impact Driven</h3>
                <p className="text-slate-500 text-sm">Results, not just reports.</p>
             </div>
          </motion.div>

        </motion.div>
      </div>

      {/* --- 3. SCROLL INDICATOR --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Explore Our Journey</span>
        <ArrowDown size={18} className="text-indigo-400" />
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

    </section>
  );
}