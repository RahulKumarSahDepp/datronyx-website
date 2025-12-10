"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  TrendingUp,
  BrainCircuit,
  Mail,
  CalendarDays
} from "lucide-react";

// --- 1. DATA: Featured Insights ---
const featuredInsights = [
  {
    id: 1,
    category: "Strategic AI",
    title: "The CEO's Guide to Autonomous Decision Layers",
    readTime: "5 min read",
    icon: BrainCircuit,
    color: "indigo",
    date: "OCT 24, 2025",
    tag: "Must Read"
  },
  {
    id: 2,
    category: "Data Engineering",
    title: "Migrating from Snowflake to Databricks: A Cost Analysis",
    readTime: "8 min read",
    icon: Cpu,
    color: "cyan",
    date: "OCT 22, 2025",
    tag: "Technical"
  },
  {
    id: 3,
    category: "Market Intelligence",
    title: "Predictive Commerce: Q4 2025 Forecasts",
    readTime: "4 min read",
    icon: TrendingUp,
    color: "fuchsia",
    date: "OCT 18, 2025",
    tag: "Report"
  }
];

// --- 2. VISUAL: The Knowledge Stack ---
const KnowledgeStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredInsights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1200px]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-[350px] h-[350px] bg-indigo-600/20 blur-[100px] rounded-full mix-blend-screen"
        />
        <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      <div className="relative w-[340px] h-[420px]">
        <AnimatePresence mode="popLayout">
            {featuredInsights.map((item, index) => {
                const offset = (index - activeIndex + featuredInsights.length) % featuredInsights.length;
                if (offset > 2) return null;

                const yOffset = offset * 24;
                const scale = 1 - offset * 0.06;
                const opacity = 1 - offset * 0.4;
                const zIndex = 30 - offset;
                const isActive = offset === 0;

                const colorMap: Record<string, any> = {
                    indigo: { border: "border-indigo-500/50", glow: "shadow-[0_0_50px_-10px_rgba(99,102,241,0.4)]", text: "text-indigo-400", bg: "bg-indigo-500/10" },
                    cyan:   { border: "border-cyan-500/50", glow: "shadow-[0_0_50px_-10px_rgba(34,211,238,0.4)]", text: "text-cyan-400", bg: "bg-cyan-500/10" },
                    fuchsia:{ border: "border-fuchsia-500/50", glow: "shadow-[0_0_50px_-10px_rgba(232,121,249,0.4)]", text: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
                };
                
                const theme = colorMap[item.color];

                return (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        initial={{ opacity: 0, y: 80, scale: 0.9 }}
                        animate={{ opacity: opacity, y: yOffset, scale: scale, zIndex: zIndex }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`absolute top-0 left-0 w-full bg-[#0B0F1A]/90 backdrop-blur-2xl border rounded-2xl p-7 shadow-2xl flex flex-col justify-between h-full ${isActive ? `${theme.border} ${theme.glow}` : "border-white/5"}`}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl border border-white/5 ${theme.bg} ${theme.text}`}>
                                    <item.icon size={22} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-400 border border-white/5">{item.tag}</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <span className={`text-xs font-bold uppercase tracking-widest ${theme.text}`}>{item.category}</span>
                                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                            <span className="text-xs text-slate-500 font-mono flex items-center gap-2"><CalendarDays size={12} />{item.date}</span>
                            <div className={`text-xs font-bold flex items-center gap-2 ${theme.text} group cursor-pointer`}>Read Now <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></div>
                        </div>
                        {isActive && (
                             <motion.div 
                                initial={{ top: 0, opacity: 0 }}
                                animate={{ top: "100%", opacity: [0, 1, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className={`absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-${item.color}-400 to-transparent opacity-50`}
                             />
                        )}
                    </motion.div>
                );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- 3. BACKGROUND ---
const BackgroundTexture = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[#020617]" />
    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)' }} />
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020617] to-transparent z-10" />
  </div>
);

// --- 4. MAIN COMPONENT ---
export default function KnowledgeHeroRefined() {

  // Function to scroll to the footer
  const scrollToFooter = () => {
    // Looks for element with id="newsletter" first, then "footer"
    const footerElement = document.getElementById('newsletter') || document.getElementById('footer');
    
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: just scroll to bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-36 pb-20 lg:pt-48 overflow-hidden bg-[#020617]">
      <BackgroundTexture />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* --- LEFT SIDE --- */}
            <div className="relative z-20">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-indigo-300 uppercase">Live_Intelligence_Feed</span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8">
                    DECODE THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white">FUTURE.</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl font-light border-l-2 border-indigo-500/30 pl-6">
                    We don't write "blogs." We document the <span className="text-white font-medium">engineering blueprints</span> for the next era of enterprise. Access high-frequency insights on AI architecture, data governance, and predictive commerce.
                </motion.p>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-5">
                    
                    {/* Primary Button */}
                    <Link href="#latest" className="group relative overflow-hidden rounded-lg bg-white px-8 py-4 transition-all hover:bg-indigo-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10 flex items-center gap-2 text-sm font-bold text-slate-950">
                            Explore The Stream <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    
                    {/* Secondary Button - Scrolls to Footer */}
                    <button 
                        onClick={scrollToFooter}
                        className="flex items-center gap-2 px-8 py-4 text-slate-300 font-medium hover:text-white transition-colors border border-slate-700 hover:border-indigo-500 rounded-lg bg-[#0B0F1A]"
                    >
                        <Mail size={16} className="text-indigo-400" />
                        Subscribe to Protocol
                    </button>

                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 flex items-center gap-12 pt-8 border-t border-white/5">
                    <div>
                        <div className="text-3xl font-bold text-white tracking-tight">12k+</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Engineers Subscribed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white tracking-tight">Weekly</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Deep Dives</div>
                    </div>
                </motion.div>
            </div>

            {/* --- RIGHT SIDE --- */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
                <KnowledgeStack />
                <div className="absolute -top-10 -right-10 flex flex-col items-end gap-2 opacity-20">
                     <div className="w-24 h-1 bg-indigo-500 rounded-full" />
                     <div className="w-16 h-1 bg-cyan-500 rounded-full" />
                     <div className="w-8 h-1 bg-white rounded-full" />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}