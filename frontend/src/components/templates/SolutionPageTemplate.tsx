"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LucideIcon, XCircle, Layers } from "lucide-react";
import Link from "next/link";

// --- RICH DATA INTERFACE ---
export interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  color: string; 
  gradient: string; 
  
  stats: { value: string; label: string }[];
  
  challenges: { title: string; desc: string }[]; // The "Pain"
  
  capabilities: {
    title: string;
    desc: string;
    icon: LucideIcon;
  }[];

  techStack: string[];

  useCases: {
    title: string;
    desc: string;
  }[];
}

export default function SolutionPageTemplate({ data }: { data: SolutionData }) {
  const accentColor = data.color.split("-")[1]; 

  return (
    <main className="bg-[#020617] min-h-screen pt-20">
      
      {/* HERO */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Dynamic Background Glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-${accentColor}-600/10 blur-[120px] rounded-full pointer-events-none`} />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-slate-900 border border-slate-700"
          >
             <span className={`text-xs font-bold tracking-widest uppercase ${data.color}`}>
               {data.subtitle}
             </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            {data.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto"
          >
            {data.description}
          </motion.p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 border-y border-white/5 bg-[#050914]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`text-4xl font-bold text-white mb-1 group-hover:${data.color} transition-colors`}>{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE CHALLENGE VS THE FIX */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: The Pain */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              The <span className="text-red-400">Friction</span> Points
            </h2>
            <div className="space-y-6">
              {data.challenges.map((challenge, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{challenge.title}</h4>
                    <p className="text-slate-400 text-sm">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Datronyx Architecture */}
          <div className="relative">
             <div className={`absolute inset-0 bg-gradient-to-r ${data.gradient} blur-3xl opacity-10`} />
             <div className="relative bg-slate-900/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className={data.color} />
                  The Engineered Solution
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  We don't apply patches; we re-architect the flow. By unifying your data streams into a cohesive, intelligent layer, we eliminate friction and unlock autonomous decision-making.
                </p>
                
                {/* Tech Stack Ticker */}
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-xs font-mono text-slate-500 uppercase mb-4">Powering Technology</p>
                  <div className="flex flex-wrap gap-2">
                    {data.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-24 bg-[#0B0F19] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Operational <span className={data.color}>Capabilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Specific, deployable modules designed for your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.capabilities.map((cap, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:bg-slate-900 hover:border-slate-600 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-${accentColor}-500/50 transition-colors`}>
                  <cap.icon className={`w-6 h-6 ${data.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-10 border-l-4 border-slate-700 pl-4">
          Real-World Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {data.useCases.map((useCase, i) => (
             <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/50 border border-slate-800/50">
                <CheckCircle2 className={`shrink-0 mt-1 ${data.color}`} size={20} />
                <div>
                   <h4 className="text-white font-bold text-base mb-1">{useCase.title}</h4>
                   <p className="text-slate-400 text-sm">{useCase.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b from-[#020617] to-${accentColor}-900/10 pointer-events-none`} />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to deploy this architecture?
          </h2>
          <Link 
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold transition-all hover:bg-${accentColor}-50 hover:scale-105`}
          >
            Start Your Transformation <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}