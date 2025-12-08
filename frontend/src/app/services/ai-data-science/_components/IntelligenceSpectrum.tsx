"use client";

import React from "react";
import { motion } from "framer-motion";
import { LineChart, MessageSquareCode } from "lucide-react";

export default function IntelligenceSpectrum() {
  return (
    <section className="py-24 bg-[#050914] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Dual Engine of <span className="text-indigo-500">Innovation</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine classical machine learning with cutting-edge generative AI to solve problems with maximum precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. PREDICTIVE (Classical ML - Emerald/Green) */}
          <motion.div 
            id="predictive"
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden scroll-mt-32"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20">
                <LineChart size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Predictive Engines</h3>
              <p className="text-emerald-400/80 font-mono text-sm mb-6">Forecasting / Optimization / Risk</p>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                Anticipate the future. We build regression and classification models that analyze historical data to forecast demand, detect fraud, and optimize resources.
              </p>

              <div className="pl-4 border-l-2 border-emerald-500/30 space-y-2">
                 <p className="text-sm text-slate-300">"What will happen next quarter?"</p>
                 <p className="text-sm text-slate-300">"Which customers are at risk?"</p>
              </div>
            </div>
          </motion.div>

          {/* 2. GENERATIVE (LLMs - Violet/Indigo) */}
          <motion.div 
            id="generative"
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-violet-500/50 transition-all duration-500 overflow-hidden scroll-mt-32"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 text-violet-400 border border-violet-500/20">
                <MessageSquareCode size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Generative Agents</h3>
              <p className="text-violet-400/80 font-mono text-sm mb-6">Custom LLMs / RAG / Automation</p>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                Automate the complex. We deploy custom Large Language Models trained on your proprietary data to handle document analysis, support, and content generation.
              </p>

              <div className="pl-4 border-l-2 border-violet-500/30 space-y-2">
                 <p className="text-sm text-slate-300">"Summarize these 10,000 contracts."</p>
                 <p className="text-sm text-slate-300">"Draft a response based on policy."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}