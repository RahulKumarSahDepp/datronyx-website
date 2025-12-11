"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Unlock, 
  Search, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Layers,
  ArrowRight
} from 'lucide-react';

// --- DATA: HONEST & VIBRANT ---
const coreValues = [
  {
    id: "01",
    title: "You Own The Code",
    subtitle: "No Vendor Lock-In",
    description: "Most agencies hold your IP hostage. We don't. We build it, deploy it, and hand over the keys. It's your data, your infrastructure, your asset.",
    icon: Unlock,
    gradientTitle: "from-emerald-400 to-teal-300",
    iconColor: "text-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "02",
    title: "No 'Black Box' Magic",
    subtitle: "Explainable AI",
    description: "If our AI recommends a decision, we tell you exactly why. We build transparent systems that your auditors and investors can actually understand.",
    icon: Search,
    gradientTitle: "from-blue-400 to-indigo-300",
    iconColor: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "03",
    title: "Business First",
    subtitle: "ROI Focused",
    description: "We don't use 'cool' tech just because it's trendy. We only build what directly drives revenue or cuts costs for your specific business model.",
    icon: Target,
    gradientTitle: "from-amber-400 to-orange-300",
    iconColor: "text-amber-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]",
    border: "group-hover:border-amber-500/50"
  },
  {
    id: "04",
    title: "Bank-Grade Security",
    subtitle: "Zero-Trust",
    description: "We treat your data like a vault. Security isn't an 'add-on' we charge extra for; it's baked into the foundation of every line of code we write.",
    icon: ShieldCheck,
    gradientTitle: "from-rose-400 to-red-300",
    iconColor: "text-rose-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(251,113,133,0.3)]",
    border: "group-hover:border-rose-500/50"
  },
  {
    id: "05",
    title: "We Don't Guess",
    subtitle: "Precision Engineering",
    description: "In finance and healthcare, 'close enough' is dangerous. We build deterministic pipelines that give you exact numbers, not rough estimates.",
    icon: TrendingUp,
    gradientTitle: "from-cyan-400 to-sky-300",
    iconColor: "text-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
    border: "group-hover:border-cyan-500/50"
  },
  {
    id: "06",
    title: "Scale When Ready",
    subtitle: "Modular Growth",
    description: "Don't over-build. We create modular systems. Start with a lean MVP today, and expand to millions of users tomorrow without rewriting.",
    icon: Layers,
    gradientTitle: "from-fuchsia-400 to-purple-300",
    iconColor: "text-fuchsia-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(232,121,249,0.3)]",
    border: "group-hover:border-fuchsia-500/50"
  },
];

// --- ANIMATION ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CoreValuesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#020617] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-900/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#020617] to-[#020617]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
               <div className="h-0.5 w-8 bg-indigo-500" />
               <span className="text-indigo-400 font-mono text-xs font-bold tracking-widest uppercase">The Datronyx Promise</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Honest Engineering. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                No Hype. Just Results.
              </span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg max-w-md md:text-right leading-relaxed font-light"
          >
            We operate on a strict code of transparency. You deserve to know exactly what you're paying for and how it works.
          </motion.p>
        </div>

        {/* --- GRID --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`
                  group relative p-8 h-full bg-[#0B0F19] rounded-3xl border border-white/5 
                  transition-all duration-300 hover:-translate-y-1
                  ${value.border} ${value.glow}
                `}
              >
                {/* 1. Subtle Inner Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  {/* Icon Container */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center 
                    bg-slate-900 border border-white/10 shadow-inner
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <Icon className={value.iconColor} size={22} strokeWidth={1.5} />
                  </div>

                  {/* ID / Subtitle Pill */}
                  <span className={`
                    text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full 
                    bg-white/5 text-slate-400 border border-white/5 
                    group-hover:bg-white/10 group-hover:text-white transition-colors
                  `}>
                    {value.subtitle}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${value.gradientTitle}`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {value.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent group-hover:from-white/20 transition-colors" />
                </div>

                {/* 2. Abstract Geometric Decor (Bottom Right) */}
                <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <ArrowRight className={value.iconColor} size={24} />
                </div>
                

{/* [Image of data pipeline architecture diagram] */}

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}