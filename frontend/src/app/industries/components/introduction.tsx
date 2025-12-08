"use client";

import React from "react";
// Added 'Variants' to the import
import { motion, Variants } from "framer-motion";
import { 
  Briefcase,   // Business
  Stethoscope, // Healthcare
  ShoppingCart,// Retail
  Factory,     // Manufacturing
  Zap,         // Energy
  Globe,       // Logistics
  ArrowRight,
  Database
} from "lucide-react";

// --- Animation Variants ---

// Fixed: Added ': Variants' type
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// Fixed: Added ': Variants' type
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- Sub-Component: The Transformation Visual ---

const TransformationVisual = () => {
  const industries = [
    { icon: Briefcase, color: "text-sky-400", bg: "bg-sky-500/20", border: "border-sky-500/30" },
    { icon: Stethoscope, color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/30" },
    { icon: ShoppingCart, color: "text-amber-400", bg: "bg-amber-500/20", border: "border-amber-500/30" },
    { icon: Factory, color: "text-rose-400", bg: "bg-rose-500/20", border: "border-rose-500/30" },
    { icon: Globe, color: "text-indigo-400", bg: "bg-indigo-500/20", border: "border-indigo-500/30" },
  ];

  return (
    <div className="relative w-full h-[450px] bg-gray-900/40 border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center backdrop-blur-sm">
      
      {/* 1. Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* 2. Left Side: Chaos (Raw Data) */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`chaos-${i}`}
            className="absolute w-2 h-2 bg-gray-600/50 rounded-full"
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: ['10%', '80%', '40%'], 
              y: [Math.random() * 400, Math.random() * 400],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      {/* 3. The Prism (The Bridge) */}
      <div className="relative z-10 w-24 h-64 bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-x border-indigo-500/30 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.2)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
        
        {/* Animated Core */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border border-indigo-500/50 border-dashed"
        />
        <Database className="absolute w-6 h-6 text-white" />
      </div>

      {/* 4. Right Side: Order (Industry Solutions) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex flex-col justify-center gap-4 px-8">
        {industries.map((item, i) => (
          <motion.div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl border ${item.border} ${item.bg} backdrop-blur-md w-full max-w-[200px]`}
            initial={{ x: -50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 3,
              repeatType: "reverse"
            }}
          >
            <item.icon className={`w-5 h-5 ${item.color}`} />
            <div className="h-2 w-16 bg-white/20 rounded-full" />
            <div className="h-2 w-8 bg-white/10 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Connecting Beams */}
      <div className="absolute top-1/2 left-[30%] right-[50%] h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-indigo-500" />
      <div className="absolute top-1/2 left-[50%] right-[10%] h-[2px] bg-gradient-to-r from-indigo-500 to-transparent opacity-50" />

    </div>
  );
};

export default function IndustryIntro() {
  const darkBg = "#0A0D1E";

  return (
    <section 
      className="relative w-full py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: darkBg }}
    >
      {/* Background Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: Text Content --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              <span>Tailored For Impact</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-6">
              Data Solutions That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-400 to-blue-700">
                Fit Your Industry.
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 leading-relaxed">
              Every industry faces unique challenges—fragmented data, slow decision-making, operational inefficiencies, and competitive pressures.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 leading-relaxed border-l-4 border-indigo-500 pl-6">
              <span className="text-blue-700 font-semibold">Datronyx bridges the gap</span> between raw data and actionable insights, delivering tailored solutions that transform your operations, accelerate growth, and maximize ROI.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <button className="group inline-flex items-center font-bold text-white transition-colors hover:text-indigo-400">
                <span className="border-b border-white/30 pb-1 group-hover:border-indigo-400">
                  See Solutions
                </span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: Visual Animation --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TransformationVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}