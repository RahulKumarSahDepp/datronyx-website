"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, LineChart, PieChart } from "lucide-react";

export default function AnalyticsHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-950/30 border border-blue-500/20 backdrop-blur-md"
        >
           <LineChart size={14} className="text-blue-400" />
           <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">
             Service Class: Analytics
           </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Turning Raw Signals into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            Executive Clarity.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          In a world flooded with data, clarity is the ultimate competitive advantage. 
          We convert fragmented noise into decision-ready intelligence—fast, accurate, and contextual.
        </motion.p>

        {/* Floating Icons Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative h-24 w-full max-w-xl mx-auto flex justify-center items-center gap-8"
        >
           <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl shadow-2xl backdrop-blur-sm animate-float-slow">
              <BarChart2 className="text-indigo-400 w-8 h-8" />
           </div>
           <div className="h-[1px] w-12 bg-gradient-to-r from-indigo-500/50 to-transparent" />
           <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl shadow-2xl backdrop-blur-sm animate-float-delayed">
              <PieChart className="text-cyan-400 w-8 h-8" />
           </div>
        </motion.div>

      </div>
    </section>
  );
}