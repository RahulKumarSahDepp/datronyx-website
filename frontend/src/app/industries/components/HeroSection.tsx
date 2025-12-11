"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  Building2,   
  HeartPulse,  
  ShoppingBag, 
  Factory,     
  Database,    
  Sparkles
} from "lucide-react";

// --- 1. Background & Effects Components ---

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const starCount = 30;
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
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{ opacity: [star.opacity, 1, star.opacity] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const TechnicalGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px' 
        }}
      />
    </div>
  );
};

const VintageOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.80" 
              numOctaves="3" 
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4))",
          backgroundSize: "100% 4px"
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(2,6,23,0.8)_100%)]" />
    </div>
  );
};

// --- 2. Animation Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
  }
};

// --- 3. Industry Nexus Sub-Components ---

interface IndustryNodeProps {
  icon: React.ElementType;
  label: string;
  color: string;
  position: React.CSSProperties;
  delay: number;
}

const IndustryNode: React.FC<IndustryNodeProps> = ({ icon: Icon, label, color, position, delay }) => (
  <motion.div
    className={`absolute p-4 rounded-2xl bg-[#0B1026] border border-${color}-500/20 backdrop-blur-md shadow-lg flex items-center gap-3 z-30`}
    style={{ ...position, boxShadow: `0 0 20px -5px var(--tw-shadow-color)` }} 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
    transition={{ 
      opacity: { duration: 0.5, delay: delay },
      scale: { duration: 0.5, delay: delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
    }}
  >
    <div className={`p-2 rounded-lg bg-${color}-500/10 border border-${color}-500/20`}>
      <Icon className={`w-5 h-5 text-${color}-400`} />
    </div>
    <span className="text-sm font-semibold text-white tracking-wide">{label}</span>
  </motion.div>
);

const ConnectionLine = ({ colorId }: { colorId: 'finance' | 'healthcare' | 'retail' | 'manufacturing' }) => {
  const paths = {
    'finance':       "M 250 250 Q 150 150, 100 80",
    'healthcare':    "M 250 250 Q 350 150, 400 80",
    'retail':        "M 250 250 Q 150 350, 100 420",
    'manufacturing': "M 250 250 Q 350 350, 400 420",
  };

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
      <motion.path
        d={paths[colorId]}
        fill="none"
        stroke={`url(#grad-${colorId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      />
      <circle r="2" fill="white">
        <animateMotion dur="4s" repeatCount="indefinite" path={paths[colorId]} calcMode="linear" />
      </circle>
      <defs>
        <linearGradient id="grad-finance" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0" /> 
          <stop offset="100%" stopColor="#38bdf8" /> 
        </linearGradient>
        <linearGradient id="grad-healthcare" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="100%" stopColor="#10b981" /> 
        </linearGradient>
        <linearGradient id="grad-retail" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="100%" stopColor="#f59e0b" /> 
        </linearGradient>
        <linearGradient id="grad-manufacturing" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
          <stop offset="100%" stopColor="#f43f5e" /> 
        </linearGradient>
      </defs>
    </svg>
  )
}

const IndustryNexus = () => {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      <motion.div 
        className="relative z-30 w-28 h-28 rounded-full bg-[#0B1026] border border-indigo-500/30 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-indigo-500/10 rounded-full animate-pulse" />
        <Database className="w-10 h-10 text-indigo-200" />
      </motion.div>
      
      <div className="absolute inset-0 border border-indigo-500/10 rounded-full scale-[1.6]" />
      <div className="absolute inset-0 border border-indigo-500/5 rounded-full scale-[2.3] border-dashed opacity-50" />

      <IndustryNode icon={Building2} label="Finance" color="sky" position={{ top: '5%', left: '0%' }} delay={0.4} />
      <IndustryNode icon={HeartPulse} label="Healthcare" color="emerald" position={{ top: '5%', right: '0%' }} delay={0.6} />
      <IndustryNode icon={ShoppingBag} label="Retail" color="amber" position={{ bottom: '5%', left: '0%' }} delay={0.8} />
      <IndustryNode icon={Factory} label="Manufacturing" color="rose" position={{ bottom: '5%', right: '0%' }} delay={1.0} />

      <ConnectionLine colorId="finance" />
      <ConnectionLine colorId="healthcare" />
      <ConnectionLine colorId="retail" />
      <ConnectionLine colorId="manufacturing" />
    </div>
  );
};

// --- 4. Main Hero Component ---

export default function IndustriesHero() {
  return (
    <section 
      // FIX APPLIED HERE:
      // 1. Removed 'items-center' to stop vertical centering overlap.
      // 2. Changed 'lg:pt-0' to 'lg:pt-48' to clear the navbar.
      // 3. Changed 'pt-20' to 'pt-32' for better mobile spacing.
      className="relative w-full min-h-screen flex justify-center overflow-hidden bg-[#020617] pt-32 pb-24 lg:pt-48"
    >
      
      <TechnicalGrid />
      <StarBackground />
      <VintageOverlay />
      
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Added flex flex-col justify-center to the container to handle alignment nicely within the padded area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            {/* BADGE */}
            <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-indigo-200 text-xs font-semibold tracking-widest uppercase">
                Vertical Intelligence
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1 variants={textVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Domain-Specific <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-400 to-blue-700">
                Decision Engines.
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p variants={textVariants} className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Generic models fail in specific contexts. We engineer compliant, high-velocity data layers tailored to the unique physics of Finance, Healthcare, Retail, and Manufacturing.
            </motion.p>

            {/* ACTION BUTTONS (Functional Links) */}
            <motion.div variants={textVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                href="/solutions"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full focus:outline-none hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <Link 
                href="/contact"
                className="px-8 py-4 bg-transparent border border-slate-800 text-white font-medium rounded-full hover:border-indigo-400 hover:bg-indigo-950/30 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <IndustryNexus />
          </motion.div>

        </div>
      </div>
    </section>
  );
}