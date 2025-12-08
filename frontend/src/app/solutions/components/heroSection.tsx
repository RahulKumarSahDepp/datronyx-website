"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  Database,    // Data (Left)
  BrainCircuit,// Intelligence (Top)
  Rocket,      // Action (Bottom-Left)
  Lightbulb,   // New: Insights (Bottom-Right)
  PlayCircle,
  Sparkles
} from "lucide-react";

// --- Background Components (Scoped) ---

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const starCount = 40; 
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-blue-100 rounded-full"
          style={{ top: star.top, left: star.left, width: star.size, height: star.size, opacity: star.opacity }}
          animate={{ opacity: [star.opacity, 1, star.opacity] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const TechnicalGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div 
      className="absolute inset-0 opacity-[0.05]" // Opacity set to 4%
      style={{
        backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
        backgroundSize: '50px 50px' 
      }}
    />
  </div>
);

const VintageOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    {/* Noise - Increased intensity */}
    <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay">
      <svg className="w-full h-full"><filter id="noiseFilterHero"><feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noiseFilterHero)" /></svg>
    </div>
    
    {/* Scanlines */}
    <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5))",
          backgroundSize: "100% 3px"
        }}
    />

    {/* Stronger Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a1f_100%)]" />
  </div>
);

// --- Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
  }
};

// --- Sub-Component: The Orbiting Solution Visual ---

const SolutionOrbit = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
      
      {/* 1. The Core (Central Intelligence Hub) */}
      <div className="relative z-20"> 
        <motion.div 
          className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 blur-2xl absolute inset-0 opacity-50"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="w-32 h-32 rounded-full bg-gray-900 border border-indigo-500/30 flex items-center justify-center relative backdrop-blur-md shadow-[0_0_50px_rgba(99,102,241,0.3)]">
           <Sparkles className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* 2. Orbiting Rings */}
      {/* Adjusted sizes for 4 nodes, keeping the visual balance */}
      {[1, 2, 3].map((ring, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-indigo-500/10 z-10"
          style={{ 
            width: `${250 + i * 120}px`, // Slightly smaller inner ring
            height: `${250 + i * 120}px`,
            borderStyle: i === 1 ? "dashed" : "solid"
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* 3. Floating Solution Nodes */}
      
      {/* Node 1: DATA (Left Side) */}
      <motion.div
        className="absolute w-24 h-24 bg-gray-900/80 border border-cyan-500/30 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-cyan-500/10 z-30"
        animate={{ 
          y: [-10, 10, -10],
          x: [-200, -210, -200], 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "40%" }} 
      >
        <Database className="w-9 h-9 text-cyan-400 mb-1" />
        <span className="text-[11px] font-bold text-cyan-200 tracking-wider uppercase">Data</span>
      </motion.div>

      {/* Node 2: AI CORE (Top Center) */}
      <motion.div
        className="absolute w-24 h-24 bg-gray-900/80 border border-purple-500/30 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-purple-500/10 z-30"
        animate={{ 
          y: [-200, -210, -200], 
          x: [-10, 10, -10], 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ left: "50%", marginLeft: "-48px" }} 
      >
        <BrainCircuit className="w-9 h-9 text-purple-400 mb-1" />
        <span className="text-[11px] font-bold text-purple-200 tracking-wider uppercase">AI Core</span>
      </motion.div>

      {/* Node 3: ACTION (Bottom-Left Side) */}
      <motion.div
        className="absolute w-24 h-24 bg-gray-900/80 border border-emerald-500/30 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-emerald-500/10 z-30"
        animate={{ 
          y: [170, 180, 170], // Shifted to bottom-left area
          x: [-120, -130, -120] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ top: "50%" }} // Positioned relative to center
      >
        <Rocket className="w-9 h-9 text-emerald-400 mb-1" />
        <span className="text-[11px] font-bold text-emerald-200 tracking-wider uppercase">Action</span>
      </motion.div>

      {/* Node 4: NEW - INSIGHTS (Bottom-Right Side) */}
      <motion.div
        className="absolute w-24 h-24 bg-gray-900/80 border border-orange-500/30 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-orange-500/10 z-30"
        animate={{ 
          y: [170, 180, 170], // Shifted to bottom-right area
          x: [120, 130, 120] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ top: "50%" }} // Positioned relative to center
      >
        <Lightbulb className="w-9 h-9 text-orange-400 mb-1" />
        <span className="text-[11px] font-bold text-orange-200 tracking-wider uppercase">Insights</span>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-10 overflow-visible">
        <defs>
            <linearGradient id="line-grad-1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#06b6d4" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
            <linearGradient id="line-grad-2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
            <linearGradient id="line-grad-3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
            <linearGradient id="line-grad-4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f97316" /><stop offset="100%" stopColor="#6366f1" /></linearGradient> {/* New gradient for Insights */}
        </defs>
        
        {/* Line 1: Data (Left) to Center */}
        <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Line 2: AI (Top) to Center */}
        <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#line-grad-2)" strokeWidth="2" strokeDasharray="5,5" />
        
        {/* Line 3: Action (Bottom-Left) to Center */}
        <line x1="35%" y1="70%" x2="50%" y2="50%" stroke="url(#line-grad-3)" strokeWidth="2" strokeDasharray="5,5" />

        {/* Line 4: NEW - Insights (Bottom-Right) to Center */}
        <line x1="65%" y1="70%" x2="50%" y2="50%" stroke="url(#line-grad-4)" strokeWidth="2" strokeDasharray="5,5" />
      </svg>

    </div>
  );
}

// --- Main Hero Component ---

export default function SolutionsHero() {
  const darkBg = "#050a1f"; 

  return (
    <section 
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0"
      style={{ 
        backgroundColor: darkBg,
        filter: 'sepia(5%) contrast(105%)' // Global filter for vintage effect
      }}
    >
      {/* --- Background Ambient Effects --- */}
      <TechnicalGrid />
      <StarBackground />
      <VintageOverlay />
      
      {/* Custom ambient glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none z-0" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT: Typography & Content --- */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl"
          >
            {/* Pill Badge */}
            <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-200 text-xs font-bold tracking-widest uppercase">
                End-to-End Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={textVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Solutions That Turn Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligence.</span>
              <br />
              Intelligence Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Action.</span>
            </motion.h1>

            <motion.p variants={textVariants} className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              Datronyx delivers end-to-end, AI-driven solutions that help companies modernize their data stack, accelerate decision-making, and unlock measurable business outcomes.
            </motion.p>

            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)] hover:-translate-y-1">
                Explore Our Solutions
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button className="group flex items-center justify-center px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-full hover:border-white hover:bg-white/5 transition-all duration-300">
                <PlayCircle className="w-5 h-5 mr-2 text-gray-400 group-hover:text-white transition-colors" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: 3D Animation --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <SolutionOrbit />
          </motion.div>

        </div>
      </div>
    </section>
  );
}