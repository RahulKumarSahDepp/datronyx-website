"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Scaling, 
  ArrowRight, 
  Users, 
  Trophy,
  Lock
} from 'lucide-react';

// --- DATA: THE "UNFAIR ADVANTAGE" ---
const advantages = [
  {
    id: "speed",
    tag: "Speed",
    title: "Deployment Velocity",
    metric: "4x Faster",
    metricDesc: "Time-to-insight vs. in-house teams",
    description: "Don't wait 6 months for a dashboard. We deploy MVP decision engines in weeks, not quarters.",
    icon: Zap,
    gradient: "from-amber-400 to-orange-500",
    bgClass: "md:col-span-2", // Wide Card
  },
  {
    id: "risk",
    tag: "Security",
    title: "Fortress Governance",
    metric: "ISO 27001",
    metricDesc: "Bank-grade compliance standards",
    description: "Your data never leaves your environment. We build secure pipelines inside your walls.",
    icon: Lock,
    gradient: "from-emerald-400 to-teal-500",
    bgClass: "md:col-span-1", // Square Card
  },
  {
    id: "quality",
    tag: "Accuracy",
    title: "Precision AI",
    metric: "99.9%",
    metricDesc: "Model relevance on proprietary data",
    description: "Generic models hallucinate. We train bespoke agents on your specific data topology.",
    icon: Cpu,
    gradient: "from-blue-400 to-indigo-500",
    bgClass: "md:col-span-1", // Square Card
  },
  {
    id: "talent",
    tag: "Expertise",
    title: "The Top 1%",
    metric: "Sen. Only",
    metricDesc: "No juniors. No learning on your dime.",
    description: "Access a cohesive unit of Senior Architects and ML Engineers who have solved this problem 50+ times.",
    icon: Users,
    gradient: "from-fuchsia-400 to-pink-500",
    bgClass: "md:col-span-2", // Wide Card
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

// --- COMPONENT: ADVANTAGE CARD ---
const AdvantageCard = ({ item }: { item: typeof advantages[0] }) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={`relative group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0F19] p-8 ${item.bgClass} hover:border-white/20 transition-colors duration-500`}
    >
      {/* 1. Subtle Gradient Glow on Hover */}
      <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-[80px] rounded-full transition-opacity duration-500 pointer-events-none`} />

      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
           <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
           </div>
           <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5 bg-white/5 text-slate-400`}>
             {item.tag}
           </span>
        </div>

        {/* The "Hero" Metric */}
        <div className="mb-6">
            <h4 className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-2 tracking-tight`}>
                {item.metric}
            </h4>
            <p className="text-sm font-mono text-slate-500 uppercase tracking-wide border-l-2 border-white/10 pl-3">
                {item.metricDesc}
            </p>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
            {item.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md">
            {item.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default function WhyDatronyx() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#020617] overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
                <Trophy size={16} className="text-amber-400" />
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">The Datronyx Edge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Stop settling for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200">
                average analytics.
              </span>
            </h2>
          </div>
          
          <p className="text-slate-400 text-lg max-w-sm md:text-right">
             We bridge the gap between "messy data" and "profitable decisions" faster than anyone else.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {advantages.map((item) => (
             <AdvantageCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-16 flex justify-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl text-slate-900 font-bold text-lg hover:bg-slate-200 transition-all active:scale-95"
          >
            <span>Start Your Transformation</span>
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} className="text-white" />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-1 rounded-xl blur opacity-20 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-40 transition-opacity duration-500" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}