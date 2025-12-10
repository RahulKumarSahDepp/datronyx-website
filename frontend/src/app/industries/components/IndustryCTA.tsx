"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Calendar,
  MessageSquare,
  Sparkles
} from "lucide-react";
import Link from "next/link";

// --- BACKGROUND COMPONENT ---
const WarpSpeedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid Floor */}
    <div 
      className="absolute inset-0 opacity-[0.05]" 
      style={{
        backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
      }}
    />
    
    {/* Central Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full" />
    
    {/* Moving Particles */}
    {[...Array(20)].map((_, i) => (
        <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ 
                x: Math.random() * 1000 - 500, 
                y: Math.random() * 500 - 250, 
                opacity: 0 
            }}
            animate={{ 
                z: [0, 500], 
                opacity: [0, 1, 0],
                scale: [0, 2]
            }}
            transition={{ 
                duration: Math.random() * 2 + 1, 
                repeat: Infinity, 
                delay: Math.random() * 2 
            }}
            style={{ left: '50%', top: '50%' }}
        />
    ))}
  </div>
);

export default function IndustryCTA() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#020617] border-t border-white/5">
      
      <WarpSpeedBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* 1. The Hook Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-8"
        >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </div>
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                Accepting New Partners
            </span>
        </motion.div>

        {/* 2. The Headline */}
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
            Stop Guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Start Engineering.
            </span>
        </motion.h2>

        {/* 3. The Pitch */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
            Your industry is evolving faster than your legacy systems can handle. 
            We build the autonomous data infrastructure that keeps you ahead of the curve.
        </motion.p>

        {/* 4. The Value Stack (Checkmarks) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        >
            {[
                "Free Architecture Audit",
                "Senior Engineers Only",
                "Results in < 4 Weeks"
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    {item}
                </div>
            ))}
        </motion.div>

        {/* 5. The "Shiny" Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
            {/* Primary CTA */}
            <Link 
                href="/contact"
                className="group relative inline-flex h-14 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto"
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 gap-3">
                    <Calendar className="w-5 h-5 text-indigo-400" />
                    Book Strategy Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>

            {/* Secondary CTA */}
            <Link 
                href="/solutions"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-medium hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto justify-center"
            >
                <Terminal className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                View Technical Capabilities
            </Link>
        </motion.div>

      </div>
    </section>
  );
}