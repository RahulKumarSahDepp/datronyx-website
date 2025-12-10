"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Landmark, 
    HeartPulse, 
    ShoppingCart, 
    Factory, 
    Zap, 
    Briefcase, 
    AlertTriangle, 
    CheckCircle2,
    TrendingUp, 
    ChevronDown,
    Sparkles,
    ShieldAlert,
    Cpu
} from "lucide-react";

// --- 1. BACKGROUND EFFECTS ---

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const starCount = 20; 
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
          className="absolute bg-indigo-200 rounded-full"
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
      className="absolute inset-0 opacity-[0.07]" 
      style={{
        backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
        backgroundSize: '40px 40px' 
      }}
    />
  </div>
);

const VintageOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
  </div>
);

// --- 2. REFINED DATA (PLAIN ENGLISH & HIGH IMPACT) ---

const industryData = [
    {
        title: "Finance & Banking",
        tagline: "Risk & Fraud",
        icon: Landmark,
        color: "blue",
        // The Pain (Simple)
        painPoint: "Fraudsters are getting smarter, and manual checks are slowing down your good customers.",
        // The Fix (The "Engine")
        solution: "We build AI that spots fake transactions in milliseconds, blocking thieves while letting real customers pass instantly.",
        // The Win (Outcome)
        outcome: "Zero false positives and automated compliance reporting.",
    },
    {
        title: "Healthcare",
        tagline: "Patient Data",
        icon: HeartPulse,
        color: "emerald",
        painPoint: "Doctors are drowning in paperwork and disjointed data systems instead of treating patients.",
        solution: "We unify patient records into one simple dashboard and predict health risks before they become emergencies.",
        outcome: "30% less admin time and improved patient recovery rates.",
    },
    {
        title: "Retail & E-Commerce",
        tagline: "Inventory & Sales",
        icon: ShoppingCart,
        color: "pink",
        painPoint: "You're either running out of best-sellers or stuck with warehouses full of unsold items.",
        solution: "Our demand engine predicts exactly what will sell next week based on trends, weather, and history.",
        outcome: "Stockouts eliminated and profit margins optimized.",
    },
    {
        title: "Manufacturing",
        tagline: "Operations",
        icon: Factory,
        color: "amber",
        painPoint: "Machines break unexpectedly, halting the entire production line and costing thousands per hour.",
        solution: "We install 'listening' AI that detects mechanical issues days before the machine actually fails.",
        outcome: "Zero unplanned downtime and optimized maintenance schedules.",
    },
    {
        title: "Energy & Utilities",
        tagline: "Distribution",
        icon: Zap,
        color: "cyan",
        painPoint: "Wasting energy during low-demand hours and struggling to meet spikes in usage.",
        solution: "Smart grid analytics that balance load automatically, saving energy and preventing blackouts.",
        outcome: "Lower operational costs and a greener footprint.",
    },
    {
        title: "Government",
        tagline: "Public Service",
        icon: Briefcase,
        color: "indigo",
        painPoint: "Slow, bureaucratic processes and data silos that prevent efficient public service.",
        solution: "Secure data pipelines that automate resource allocation and improve transparency.",
        outcome: "Faster citizen services and audit-ready transparency.",
    },
];

// --- 3. UI COMPONENTS ---

// Helper for dynamic colors
const getColorClasses = (color: string) => {
    const map: Record<string, any> = {
        blue:    { border: 'border-blue-500',    bg: 'bg-blue-500/10',    text: 'text-blue-400',    glow: 'shadow-blue-500/20', gradient: 'from-blue-500 to-indigo-500' },
        emerald: { border: 'border-emerald-500', bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-emerald-500/20', gradient: 'from-emerald-500 to-teal-500' },
        pink:    { border: 'border-pink-500',    bg: 'bg-pink-500/10',    text: 'text-pink-400',    glow: 'shadow-pink-500/20', gradient: 'from-pink-500 to-rose-500' },
        amber:   { border: 'border-amber-500',   bg: 'bg-amber-500/10',   text: 'text-amber-400',   glow: 'shadow-amber-500/20', gradient: 'from-amber-500 to-orange-500' },
        cyan:    { border: 'border-cyan-500',    bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    glow: 'shadow-cyan-500/20', gradient: 'from-cyan-500 to-sky-500' },
        indigo:  { border: 'border-indigo-500',  bg: 'bg-indigo-500/10',  text: 'text-indigo-400',  glow: 'shadow-indigo-500/20', gradient: 'from-indigo-500 to-violet-500' },
    };
    return map[color] || map.blue;
};

const IndustryCard = ({ data, isActive, onToggle }: { data: typeof industryData[0], isActive: boolean, onToggle: () => void }) => {
    const theme = getColorClasses(data.color);

    return (
        <motion.div
            layout
            onClick={onToggle}
            initial={false}
            animate={isActive ? "open" : "closed"}
            whileHover={{ scale: 1.01 }}
            className={`
                relative overflow-hidden rounded-2xl border cursor-pointer backdrop-blur-xl transition-all duration-500
                ${isActive 
                    ? `border-l-4 ${theme.border} bg-[#0f1629] shadow-2xl ${theme.glow}` 
                    : `border-slate-800 border-l-transparent bg-slate-900/40 hover:bg-slate-800/60`
                }
            `}
        >
            {/* Header Section */}
            <div className="p-6 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-5">
                    {/* Icon Box */}
                    <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300
                        ${isActive ? `bg-slate-900 ${theme.border} ${theme.text}` : 'bg-slate-900 border-slate-700 text-slate-500'}
                    `}>
                        <data.icon size={24} />
                    </div>

                    <div>
                        <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                            {data.title}
                        </h3>
                        <p className={`text-xs font-mono uppercase tracking-wider mt-1 ${isActive ? theme.text : 'text-slate-500'}`}>
                            {data.tagline}
                        </p>
                    </div>
                </div>

                <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                    ${isActive ? `${theme.border} ${theme.bg} ${theme.text} rotate-180` : 'border-slate-700 bg-slate-900 text-slate-500'}
                `}>
                    <ChevronDown size={16} />
                </div>
            </div>

            {/* Expanded Content - "The Problem vs The Solution" */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-8 pt-2">
                            <div className="w-full h-px bg-slate-800 mb-6" />
                            
                            <div className="grid gap-6">
                                {/* 1. The Pain Point (Red/Alert Theme) */}
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <ShieldAlert className="w-5 h-5 text-rose-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wide mb-1">The Struggle</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {data.painPoint}
                                        </p>
                                    </div>
                                </div>

                                {/* 2. The Solution (Theme Color) */}
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <Cpu className={`w-5 h-5 ${theme.text}`} />
                                    </div>
                                    <div>
                                        <h4 className={`text-xs font-bold uppercase tracking-wide mb-1 ${theme.text}`}>Datronyx Fix</h4>
                                        <p className="text-white text-sm leading-relaxed font-medium">
                                            {data.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* 3. The Outcome (Green/Success) */}
                                <div className="mt-2 p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    <span className="text-emerald-200 text-sm font-semibold">
                                        Result: {data.outcome}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- 4. MAIN COMPONENT ---

export default function IndustriesDetailed() {
    // Default open first item for better UX
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
            
            {/* Backgrounds */}
            <TechnicalGrid />
            <StarBackground />
            <VintageOverlay />
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-20 max-w-6xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest">
                            Real World Impact
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        We Don't Just Process Data. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            We Solve Business Pain.
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-lg"
                    >
                        Every industry has unique bottlenecks. We engineer custom intelligence layers to uncork them.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {industryData.map((data, index) => (
                        <IndustryCard
                            key={index}
                            data={data}
                            isActive={activeIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}