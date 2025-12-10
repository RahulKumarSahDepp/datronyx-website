"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown,
  Factory,
  Landmark,
  ShoppingBag,
  Cpu,
  Terminal,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react'; 

// --- TYPES ---
interface ImpactMetric {
  label: string;
  value: string;
  subtext: string;
  isPositiveTrend: boolean;
}

interface IndustryData {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  metrics: ImpactMetric[];
  accentColor: string; 
  gradient: string;
  codeSnippet: string; 
}

// --- DATA ---
const industries: IndustryData[] = [
  {
    id: 'fintech',
    name: 'Fintech & Banking',
    tagline: "The 'False Positive' Killer",
    icon: Landmark,
    accentColor: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/5",
    codeSnippet: "Analyzing: 14,203 txn/sec > Fraud Risk: <0.01%",
    metrics: [
      { label: "False Positives Avoided", value: "42,000+", subtext: "Legit customers approved instantly", isPositiveTrend: true },
      { label: "Compliance Audit Time", value: "-85%", subtext: "Automated KYC/AML reporting", isPositiveTrend: false },
    ]
  },
  {
    id: 'manufacturing',
    name: 'Industrial IoT',
    tagline: "Predictive Maintenance Engine",
    icon: Factory,
    accentColor: "text-amber-400",
    gradient: "from-amber-500/20 to-orange-500/5",
    codeSnippet: "Sensor ID: #884-X > Vibration Anomaly Detected > Work Order Sent",
    metrics: [
      { label: "Downtime Prevented", value: "128 hrs", subtext: "In last quarter alone", isPositiveTrend: false },
      { label: "Maintenance ROI", value: "4.2x", subtext: "Yield increase via calibration", isPositiveTrend: true },
    ]
  },
  {
    id: 'retail',
    name: 'Retail Logistics',
    tagline: "Inventory Velocity Control",
    icon: ShoppingBag,
    accentColor: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/5",
    codeSnippet: "SKU: Winter-Jacket > Region: North > Re-Order Triggered",
    metrics: [
      { label: "Dead Stock Reduction", value: "$1.2M", subtext: "Capital freed for reinvestment", isPositiveTrend: true },
      { label: "Return Rate (RTO)", value: "-18%", subtext: "High-risk user filtering", isPositiveTrend: false },
    ]
  },
];

export default function DatronyxCredibility() {
  const [activeTab, setActiveTab] = useState(industries[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="w-full bg-[#020617] text-white py-24 px-4 relative overflow-hidden border-b border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10"> 
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* --- LEFT COLUMN: NARRATIVE --- */}
            <div className="lg:col-span-5 space-y-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </div>
                        <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">System Operational</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        We Don't Build Dashboards. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            We Build Decision Engines.
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Dashboards are for looking backwards. Datronyx engines look forward. We deploy autonomous agents that clean data, predict risks, and trigger actions before you even open your laptop.
                    </p>
                </motion.div>

                {/* Vertical Tab Selector */}
                <div className="space-y-3">
                    {industries.map((ind) => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveTab(ind)}
                            className={`
                                w-full text-left p-4 rounded-xl border transition-all duration-300 group relative z-20
                                ${activeTab.id === ind.id 
                                    ? 'bg-white/5 border-blue-500/50 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]' 
                                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10 text-slate-500'}
                            `}
                        >
                            <div className="flex justify-between items-center">
                                <span className={`font-semibold flex items-center gap-3 ${activeTab.id === ind.id ? 'text-white' : 'group-hover:text-slate-300'}`}>
                                    <ind.icon size={18} className={activeTab.id === ind.id ? ind.accentColor : 'text-slate-600'} />
                                    {ind.name}
                                </span>
                                {activeTab.id === ind.id && <ChevronRight size={16} className="text-blue-400" />}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* --- RIGHT COLUMN: INTERACTIVE VISUAL --- */}
            <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                    >
                        {/* The "Card" Container */}
                        <div className="relative rounded-3xl border border-white/10 bg-[#0B0F19] overflow-hidden shadow-2xl backdrop-blur-xl">
                            
                            {/* BUG FIX: Added pointer-events-none to background layer */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.gradient} opacity-100 transition-colors duration-500 pointer-events-none`} />

                            {/* Top Bar - Added relative z-10 to ensure it's above background */}
                            <div className="relative z-10 h-12 border-b border-white/10 bg-black/20 flex items-center px-6 gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <div className="ml-4 flex items-center gap-2 text-[10px] font-mono text-slate-500">
                                    <Terminal size={10} />
                                    <span>DATRONYX_CORE_V2.1 // {activeTab.id.toUpperCase()}_MODULE</span>
                                </div>
                            </div>

                            {/* Main Content - BUG FIX: Added relative z-10 here */}
                            <div className="relative z-10 p-8">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{activeTab.tagline}</h3>
                                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/30 w-fit px-2 py-1 rounded border border-white/5">
                                            <Cpu size={12} className={activeTab.accentColor} />
                                            {activeTab.codeSnippet}
                                        </div>
                                    </div>
                                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${activeTab.accentColor}`}>
                                        <activeTab.icon size={32} />
                                    </div>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {activeTab.metrics.map((metric, idx) => (
                                        <div key={idx} className="relative group p-5 rounded-2xl bg-black/20 border border-white/5 hover:border-white/20 transition-all duration-300">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{metric.label}</span>
                                                {metric.isPositiveTrend ? (
                                                    <TrendingUp size={16} className="text-emerald-400" />
                                                ) : (
                                                    <TrendingDown size={16} className={activeTab.accentColor} />
                                                )}
                                            </div>
                                            <div className="text-3xl font-bold text-white mb-1 tracking-tight">{metric.value}</div>
                                            <div className="text-xs text-slate-400 font-medium">{metric.subtext}</div>
                                            
                                            {/* Decorative Corner */}
                                            <div className={`absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-tl ${activeTab.gradient} pointer-events-none`} />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Link */}
                                <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/5">
                                    <p className="text-sm text-slate-500">
                                        Processing 1M+ data points daily
                                    </p>
                                    <Link 
                                      href="/solutions" 
                                      className="group relative z-20 flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                                    >
                                        See the solutions 
                                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
      </div>
    </section>
  );
}