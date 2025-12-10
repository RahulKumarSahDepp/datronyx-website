"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, 
  Bot, 
  Network, 
  ArrowUpRight, 
  Sparkles,
  TrendingUp,
  FileText,
  User,
  LucideIcon
} from "lucide-react";

// --- TYPES ---
interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
}

// --- DATA ---
const aiServices: ServiceData[] = [
  {
    id: "predictive",
    title: "Predictive Modeling",
    subtitle: "Regression & Classification",
    description: "Use Cases: Customer Churn Prediction, Loan Default Risk, Inventory Demand Forecasting.",
    outcome: "You stop reacting to problems and start preventing them.",
    icon: TrendingUp,
  },
  {
    id: "genai",
    title: "Generative AI Agents",
    subtitle: "LLMs & Neural Search",
    description: "Use Cases: Internal Knowledge Bots, Automated Document Processing, Smart Customer Support.",
    outcome: "Massive reduction in manual overhead and instant access to institutional knowledge.",
    icon: Bot,
  },
  {
    id: "recs",
    title: "Recommendation Engines",
    subtitle: "Personalization Algorithms",
    description: "Use Cases: Product upsells, Dynamic Pricing, User Retention.",
    outcome: "Directly increasing the Lifetime Value (LTV) of every customer.",
    icon: Network,
  },
];

// --- VISUAL 1: PREDICTIVE CHART (The "Seeing Around Corners" Effect) ---
const PredictiveVisual = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
    <div className="absolute inset-0 bg-grid-slate-800/[0.2] -z-10" />
    
    {/* The Graph Container */}
    <div className="w-full h-64 relative border-l border-b border-slate-600 flex items-end">
        {/* Historical Data (Solid Line) */}
        <svg className="absolute inset-0 w-full h-full overflow-visible">
            <motion.path 
                d="M0,150 C50,140 100,160 150,100 C200,40 250,80 300,60"
                fill="none"
                stroke="#94a3b8" // Slate-400
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* The "Future" Prediction (Dashed & Colored) */}
            <motion.path 
                d="M300,60 C350,40 400,10 450,5"
                fill="none"
                stroke="#8b5cf6" // Violet-500
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            />
            
            {/* The "Current Moment" Marker */}
            <motion.circle 
                cx="300" cy="60" r="4" fill="#fff"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            />
            
            {/* Prediction Label */}
            <motion.g
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2 }}
            >
                <rect x="360" y="0" width="100" height="24" rx="4" fill="#8b5cf6" />
                <text x="375" y="16" fill="white" fontSize="10" fontFamily="monospace" fontWeight="bold">PREDICTED +42%</text>
            </motion.g>
        </svg>
    </div>
    <div className="w-full flex justify-between text-xs font-mono text-slate-500 mt-4 uppercase">
        <span>Q1 Historical</span>
        <span className="text-violet-400">Q2 Forecast</span>
    </div>
  </div>
);

// --- VISUAL 2: GEN AI PROCESSING (The "Document Scan") ---
const GenAIVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
      {/* Abstract Document */}
      <div className="w-48 h-64 bg-slate-800 border border-slate-600 rounded-lg p-4 space-y-3 relative overflow-hidden group">
         {/* Text Lines */}
         <div className="w-3/4 h-2 bg-slate-600 rounded animate-pulse" />
         <div className="w-full h-2 bg-slate-600 rounded animate-pulse delay-75" />
         <div className="w-5/6 h-2 bg-slate-600 rounded animate-pulse delay-150" />
         <div className="w-full h-2 bg-slate-600 rounded animate-pulse delay-200" />
         
         {/* The "Scanner" Bar */}
         <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
         />
      </div>

      {/* Floating Sparkles/Insight */}
      <motion.div 
        className="absolute -right-4 top-1/3 bg-violet-600 text-white p-3 rounded-xl shadow-xl border border-violet-400/50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Sparkles size={16} className="mb-1" />
        <div className="text-[10px] font-mono leading-tight">
            Insight Extracted:<br/>
            <span className="font-bold">Risk Level: LOW</span>
        </div>
      </motion.div>
  </div>
);

// --- VISUAL 3: RECOMMENDATION NETWORK (The "Connections") ---
const RecEngineVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Central User Node */}
        <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <User className="text-slate-900" size={24} />
        </div>

        {/* Orbiting Product Nodes */}
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                className="absolute"
                initial={{ rotate: i * 120, opacity: 0, scale: 0 }}
                animate={{ rotate: i * 120 + 360, opacity: 1, scale: 1 }}
                transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 }
                }}
            >
                <div 
                    className="w-32 h-[2px] bg-gradient-to-r from-slate-700 to-transparent origin-left transform" 
                    style={{ transform: 'translateX(32px)' }} 
                />
                <motion.div 
                    className="absolute right-0 -top-6 w-32 -mr-32 bg-slate-800 border border-violet-500/30 p-2 rounded-lg backdrop-blur-md"
                    style={{ transform: `rotate(-${i * 120}deg)` }} // Counter-rotate to keep text upright (simplified)
                >
                    <div className="flex justify-between items-center mb-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-emerald-400 font-mono">98% MATCH</span>
                    </div>
                    <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[98%]" />
                    </div>
                </motion.div>
            </motion.div>
        ))}
    </div>
);


// --- MAIN COMPONENT ---
export default function AI_MachineLearning() {
  const [activeTab, setActiveTab] = useState<string>("predictive");

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
            >
                <div className="p-2 bg-violet-500/10 rounded-lg border border-violet-500/20">
                    <BrainCircuit size={20} className="text-violet-400" />
                </div>
                <span className="text-sm font-mono text-violet-400 uppercase tracking-widest">
                    AI & Machine Learning
                </span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
                Predictive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    Decision Layers.
                </span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-400 max-w-2xl font-light"
            >
                Stop looking in the rear-view mirror. We build the algorithmic infrastructure that helps you see around corners and automate complex reasoning.
            </motion.p>
        </div>

        {/* --- INTERACTIVE SPLIT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 h-auto lg:h-[500px]">
            
            {/* LEFT: THE MENU */}
            <div className="flex flex-col justify-center space-y-4">
                {aiServices.map((service) => (
                    <motion.button
                        key={service.id}
                        onClick={() => setActiveTab(service.id)}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`group relative text-left p-6 rounded-2xl transition-all duration-300 border ${
                            activeTab === service.id 
                                ? "bg-white/5 border-violet-500/50" 
                                : "bg-transparent border-transparent hover:bg-white/[0.02]"
                        }`}
                    >
                        {/* Active Glow Bar */}
                        {activeTab === service.id && (
                            <motion.div 
                                layoutId="activeGlow"
                                className="absolute left-0 top-0 bottom-0 w-1 bg-violet-500 rounded-l-2xl"
                            />
                        )}

                        <div className="flex items-start gap-4">
                            <div className={`mt-1 p-2 rounded-lg transition-colors ${
                                activeTab === service.id ? "bg-violet-500 text-white" : "bg-slate-800 text-slate-400"
                            }`}>
                                <service.icon size={20} />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 transition-colors ${
                                    activeTab === service.id ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                                }`}>
                                    {service.title}
                                </h3>
                                <p className="text-xs font-mono text-violet-400 uppercase tracking-wider mb-3">
                                    {service.subtitle}
                                </p>
                                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                                    {service.description}
                                </p>
                                <div className={`text-sm border-l-2 pl-3 py-1 transition-colors ${
                                     activeTab === service.id ? "border-emerald-500 text-emerald-400" : "border-slate-700 text-slate-600"
                                }`}>
                                    {service.outcome}
                                </div>
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* RIGHT: THE VISUAL SIMULATION WINDOW */}
            <div className="relative w-full h-[400px] lg:h-full bg-[#0B0F1A] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-[#020617] border-b border-slate-800 flex items-center px-4 justify-between z-20">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/20 border border-rose-500/50" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">
                        Simulation // {activeTab.toUpperCase()}
                    </div>
                </div>

                {/* Content Area */}
                <div className="pt-10 h-full w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full"
                        >
                            {activeTab === "predictive" && <PredictiveVisual />}
                            {activeTab === "genai" && <GenAIVisual />}
                            {activeTab === "recs" && <RecEngineVisual />}
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Overlay Texture */}
                <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

        </div>

      </div>
    </section>
  );
}