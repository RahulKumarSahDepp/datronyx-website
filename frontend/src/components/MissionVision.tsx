"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, Eye, Gem, ArrowRight, Zap, Shield, Cpu, Activity, Layers } from "lucide-react";

// --- TYPE DEFINITIONS ---
interface ValueItem {
  label: string;
  icon: React.ElementType;
}

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  icon: React.ElementType;
}

// --- DATA ---
const missionData: CardData = {
  id: "mission",
  title: "Mission",
  subtitle: "Our Purpose",
  icon: Target,
  content: "We empower organizations to harness the full potential of their data through intelligent systems that improve efficiency, precision, and growth."
};

const visionData: CardData = {
  id: "vision",
  title: "Vision",
  subtitle: "Our North Star",
  icon: Eye,
  content: "To redefine enterprise decision-making through accessible, explainable, and highly scalable AI technologies, creating measurable impact for our clients."
};

const coreValues: ValueItem[] = [
  { label: "Innovation & Adaptation", icon: Zap },
  { label: "Integrity & Trust", icon: Shield },
  { label: "Excellence in Execution", icon: Activity },
  { label: "Transparency & Clarity", icon: Layers },
  { label: "Impact-driven Engineering", icon: Cpu },
];

// --- ANIMATIONS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function MissionVisionValues() {
  return (
    <section className="relative w-full text-slate-200 bg-[#020617] py-24 md:py-32 overflow-hidden">
      
      {/* --- 1. ARCHITECTURAL BACKGROUND --- */}
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Gradient for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.2),transparent_70%)]" />

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl"
        >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-indigo-500" />
              <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">The Datronyx Core</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Purpose</span>,<br /> 
              Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Principles</span>.
            </h2>
        </motion.div>

        {/* --- CONTENT GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          
          {/* --- LEFT COL: MISSION & VISION (Stacked or Side-by-Side) --- */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* MISSION CARD */}
            <motion.div variants={itemVariants} className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:bg-slate-800/60 hover:border-indigo-500/30">
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-500 shadow-lg">
                    <missionData.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      {missionData.title}
                      <span className="text-xs font-normal px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {missionData.subtitle}
                      </span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {missionData.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* VISION CARD */}
            <motion.div variants={itemVariants} className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:bg-slate-800/60 hover:border-cyan-500/30">
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-cyan-400 group-hover:text-white group-hover:bg-cyan-600 group-hover:border-cyan-500 transition-all duration-500 shadow-lg">
                    <visionData.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      {visionData.title}
                      <span className="text-xs font-normal px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {visionData.subtitle}
                      </span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {visionData.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          
          </div>

          {/* --- RIGHT COL: VALUES (Vertical Tech Stack) --- */}
          <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
             <div className="relative h-full bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col">
                
                {/* Values Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-slate-800 rounded-lg text-fuchsia-400">
                    <Gem size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Core Values</h3>
                </div>

                {/* Values Grid */}
                <div className="grid gap-3 flex-grow">
                  {coreValues.map((val, idx) => (
                    <div 
                      key={idx}
                      className="group/item flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 cursor-default"
                    >
                      <div className="p-2 rounded-lg bg-slate-950 text-slate-400 group-hover/item:text-fuchsia-400 group-hover/item:bg-fuchsia-500/10 transition-colors">
                        <val.icon size={20} />
                      </div>
                      <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">
                        {val.label}
                      </span>
                      {/* Subtle Arrow Reveal */}
                      <div className="ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                        <ArrowRight size={16} className="text-slate-500" />
                      </div>
                    </div>
                  ))}
                </div>

             </div>
          </motion.div>

        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-20 flex justify-center"
        >
           <button className="group relative px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold text-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Join the Mission <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button Shine Effect */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-200 via-cyan-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           </button>
        </motion.div>

      </div>
    </section>
  );
}