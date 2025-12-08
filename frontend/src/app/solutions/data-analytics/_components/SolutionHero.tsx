"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Activity } from "lucide-react";

export default function SolutionHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
      
      {/* Background: The Signal */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
         <div className="w-[200vw] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
         <div className="absolute w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-md"
        >
           <Activity size={14} className="text-cyan-400" />
           <span className="text-xs font-bold tracking-widest text-cyan-300 uppercase">
             Datronyx Analytics
           </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
        >
          Turning Raw Signals into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            Executive Clarity.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Businesses generate more data than ever, yet most is ignored. We transform this chaos into systems that <span className="text-white font-medium">think, predict, and optimize</span> the very core of your operations.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
           <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all hover:scale-105">
             Start Analyzing Better
           </button>
        </motion.div>

      </div>
    </section>
  );
}