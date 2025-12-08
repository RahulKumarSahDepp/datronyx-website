"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Rocket, 
  ShieldCheck, 
  BrainCircuit, 
  Microscope, 
  ArrowRight, 
  Gem, 
  Layers
} from 'lucide-react';

// --- DATA: THE "UNFAIR ADVANTAGE" ---
const benefits = [
  {
    id: "velocity",
    title: "Market Velocity",
    subtitle: "Speed to Insight",
    description: "Traditional analytics take months. We deploy MVP pipelines in weeks. Get answers while your competitors are still setting up meetings.",
    icon: Rocket,
    color: "from-amber-500 to-orange-500",
    colSpan: "md:col-span-2 lg:col-span-2", // Bento Grid: Wide Card
  },
  {
    id: "security",
    title: "Fortress Governance",
    subtitle: "Zero-Trust Architecture",
    description: "We don't extract your data; we fortify it. Our solutions operate entirely within your secure environment, ensuring absolute compliance.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "precision",
    title: "Precision Engineering",
    subtitle: "Custom AI Models",
    description: "Generic models hallucinate. We train bespoke AI agents on *your* specific data topology for 99.9% relevance.",
    icon: Microscope,
    color: "from-cyan-500 to-blue-500",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "scale",
    title: "Infinite Scalability",
    subtitle: "Cloud Native",
    description: "Built on serverless architectures that auto-scale from 100 to 100 million requests without you lifting a finger.",
    icon: Layers,
    color: "from-violet-500 to-purple-500",
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "talent",
    title: "Elite Squads",
    subtitle: "Top 1% Talent",
    description: "Stop hiring freelancers. Access a pre-vetted, cohesive unit of Senior Data Architects and ML Engineers instantly.",
    icon: Gem,
    color: "from-pink-500 to-rose-500",
    colSpan: "md:col-span-3 lg:col-span-3", // Full Width
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

// --- COMPONENT: BENTO CARD ---
const BenefitCard = ({ item }: { item: typeof benefits[0] }) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0B0F19] ${item.colSpan}`}
    >
      {/* 1. Dynamic Hover Gradient Background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${item.color}`} />
      
      {/* 2. Top "Circuit" Line Decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-white/20 transition-colors" />

      <div className="relative h-full p-8 flex flex-col z-10">
        
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
           <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
           </div>
           <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors border border-slate-800 rounded-full px-3 py-1">
             {item.subtitle}
           </span>
        </div>

        {/* Content Section */}
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
            {item.title}
          </h3>
          <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
            {item.description}
          </p>
        </div>

        {/* Decorative 'Shine' effect on hover */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default function BenefitsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND FX --- */}
      {/* Hexagon Mesh Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Deep Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-700 backdrop-blur-md">
             <BrainCircuit size={14} className="text-emerald-400" />
             <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">The Competitive Edge</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Why Visionaries Choose <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              Datronyx.
            </span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            We don't just "handle data." We engineer <span className="text-white font-semibold">intelligence moats</span> that put your business years ahead of the market.
          </p>
        </div>

        {/* --- BENTO GRID --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((item) => (
             <BenefitCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="mt-20 flex flex-col items-center"
        >
            <div className="p-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-shadow duration-500">
              <Link
                href="/contact"
                className="flex items-center gap-3 px-10 py-4 bg-[#020617] rounded-full text-white font-bold text-lg hover:bg-slate-900 transition-colors"
              >
                Claim Your Advantage
                <ArrowRight size={20} className="text-emerald-400" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500 font-mono">
                Limited availability for Q3 2025 Architecture Reviews.
            </p>
        </motion.div>

      </div>
    </section>
  );
}