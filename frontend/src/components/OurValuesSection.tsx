"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Binary, 
  BoxSelect, 
  GitPullRequest, 
  Fingerprint, 
  Scale, 
  Eye, 
  Terminal
} from 'lucide-react';

// --- STRATEGIC CONTENT: ENGINEERING PHILOSOPHIES ---
const coreValues = [
  {
    id: "01",
    title: "Deterministic Precision",
    subtitle: "Accuracy > Speed",
    description: "In data science, 'close enough' is a failure. We architect pipelines that prioritize data integrity and mathematical exactitude over shortcuts.",
    icon: Binary,
    color: "from-blue-500 to-indigo-500",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/20"
  },
  {
    id: "02",
    title: "White-Box Intelligence",
    subtitle: "Explainable AI",
    description: "We reject black boxes.  We engineer transparent models where every decision path is traceable, auditable, and fully explainable.",
    icon: Eye,
    color: "from-emerald-500 to-teal-500",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-emerald-500/20"
  },
  {
    id: "03",
    title: "Sovereign Infrastructure",
    subtitle: "You Own Everything",
    description: "No vendor lock-in. No hidden IP. We build systems that belong to you, ensuring your data moat remains your competitive advantage.",
    icon: Fingerprint,
    color: "from-purple-500 to-fuchsia-500",
    border: "group-hover:border-purple-500/50",
    shadow: "group-hover:shadow-purple-500/20"
  },
  {
    id: "04",
    title: "Anti-Fragile Systems",
    subtitle: "Resilience Engineering",
    description: "We design for failure. Our architectures use self-healing ETL pipelines and redundant nodes to thrive under stress and volatility.",
    icon: BoxSelect,
    color: "from-amber-500 to-orange-500",
    border: "group-hover:border-amber-500/50",
    shadow: "group-hover:shadow-amber-500/20"
  },
  {
    id: "05",
    title: "Modular Scalability",
    subtitle: "Composable Tech",
    description: "We avoid monolithic traps. Using microservices and containerization, we build fluid systems that scale horizontally as you grow.",
    icon: GitPullRequest,
    color: "from-cyan-500 to-sky-500",
    border: "group-hover:border-cyan-500/50",
    shadow: "group-hover:shadow-cyan-500/20"
  },
  {
    id: "06",
    title: "Ethical Alignment",
    subtitle: "Responsible AI",
    description: "We embed bias detection and ethical guardrails into the foundation of every model, ensuring your AI scales safely and fairly.",
    icon: Scale,
    color: "from-rose-500 to-pink-500",
    border: "group-hover:border-rose-500/50",
    shadow: "group-hover:shadow-rose-500/20"
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CoreDNASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND FX --- */}
      {/* Circuit Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236366f1' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-700 backdrop-blur-md">
             <Terminal size={14} className="text-indigo-400" />
             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">System Protocols</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">Datronyx DNA.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            We don't operate on vague promises. We operate on a strict code of engineering excellence, transparency, and architectural rigor.
          </p>
        </div>

        {/* --- GRID --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`
                  group relative p-8 h-full bg-[#0B0F19] border border-slate-800 rounded-3xl 
                  overflow-hidden transition-all duration-500 
                  ${value.border} hover:bg-slate-900 ${value.shadow}
                `}
              >
                {/* 1. Laser Scan Effect (Top to Bottom) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* 2. Top Bar Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* 3. Tech Corners (Brackets) */}
                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-slate-700 group-hover:border-indigo-500 transition-colors" />
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-slate-700 group-hover:border-indigo-500 transition-colors" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-slate-700 group-hover:border-indigo-500 transition-colors" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-slate-700 group-hover:border-indigo-500 transition-colors" />

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-slate-950 border border-slate-800 group-hover:border-slate-600 transition-colors relative`}>
                    <Icon className="text-white relative z-10" size={20} />
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 rounded-xl`} />
                  </div>
                  
                  {/* ID Number */}
                  <span className="font-mono text-xs font-bold text-slate-600 group-hover:text-slate-400 transition-colors">
                    //{value.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <span className={`text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${value.color} mb-2 block`}>
                    {value.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {value.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}