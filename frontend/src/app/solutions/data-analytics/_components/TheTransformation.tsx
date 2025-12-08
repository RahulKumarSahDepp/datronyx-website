"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";

export default function TheTransformation() {
  return (
    <section className="py-24 bg-[#050914] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Narrative */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Evolving from <span className="text-slate-500 line-through decoration-red-500/50">Guesswork</span> to <span className="text-cyan-400">Precision.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Your team no longer guesses. Your decisions no longer lag. Datronyx transforms scattered data into a single pane of truth.
          </p>
          
          <div className="space-y-6">
             <div className="pl-6 border-l-2 border-cyan-500/30">
                <h4 className="text-white font-bold mb-1">Before Datronyx</h4>
                <p className="text-slate-500 text-sm">Fragmented spreadsheets, delayed reports, and conflicting numbers.</p>
             </div>
             <div className="pl-6 border-l-2 border-cyan-500">
                <h4 className="text-white font-bold mb-1">After Datronyx</h4>
                <p className="text-cyan-200/80 text-sm">Automated insights, predictive visibility, and boardroom-ready clarity.</p>
             </div>
          </div>
        </div>

        {/* Right: The Visual Metaphor */}
        <div className="relative h-[400px] bg-slate-900/50 rounded-2xl border border-slate-800 p-8 flex flex-col justify-center items-center">
           
           {/* Floating Elements converging */}
           <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                 <motion.div 
                   key={i}
                   initial={{ x: Math.random() * 400 - 200, y: Math.random() * 400 - 200, opacity: 0 }}
                   whileInView={{ x: 0, y: 0, opacity: 1 }}
                   transition={{ duration: 1.5, delay: i * 0.1 }}
                   className="absolute top-1/2 left-1/2 w-2 h-2 bg-slate-600 rounded-full"
                 />
              ))}
           </div>

           {/* Central Core */}
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.5 }}
             className="relative z-10 w-48 h-48 bg-[#0B0F19] border border-cyan-500/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]"
           >
              <div className="text-center">
                 <Layers size={32} className="text-cyan-400 mx-auto mb-2" />
                 <p className="text-white font-bold text-sm">Single Source<br/>of Truth</p>
              </div>
           </motion.div>

        </div>

      </div>
    </section>
  );
}