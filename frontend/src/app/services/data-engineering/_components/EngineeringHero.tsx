"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Server, Workflow } from "lucide-react";

export default function EngineeringHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Deep Industrial Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Tech Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-900 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        >
           <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
           <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
             Infrastructure Grade
           </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Architecting the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Digital Backbone.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Without strong foundations, AI is just a concept. We build the resilient, cloud-native 
          data architectures that ensure your business flows without interruption.
        </motion.p>

        {/* Visual Metaphor: The Connected Nodes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative h-32 w-full max-w-3xl mx-auto flex justify-between items-center px-8 sm:px-20"
        >
           {/* Connecting Line */}
           <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -z-10">
              <motion.div 
                className="h-full bg-blue-500/50 w-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
              />
           </div>

           {/* Nodes */}
           <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-[#0B0F19] border border-blue-500/30 rounded-xl shadow-lg shadow-blue-900/20">
                 <Database className="text-blue-400 w-6 h-6" />
              </div>
              <span className="text-xs text-slate-500 font-mono uppercase">Ingest</span>
           </div>

           <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-[#0B0F19] border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-900/20">
                 <Workflow className="text-cyan-400 w-6 h-6" />
              </div>
              <span className="text-xs text-slate-500 font-mono uppercase">Transform</span>
           </div>

           <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-[#0B0F19] border border-teal-500/30 rounded-xl shadow-lg shadow-teal-900/20">
                 <Server className="text-teal-400 w-6 h-6" />
              </div>
              <span className="text-xs text-slate-500 font-mono uppercase">Serve</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
}