"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Bot } from "lucide-react";

// Particle component: Changed to Cyan/Blue
const NeuralNode = ({ top, left, delay }: { top: string; left: string; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
    style={{ top, left }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

export default function AIHero() {
  const [nodes, setNodes] = useState<{top: string, left: string, delay: number}[]>([]);

  useEffect(() => {
    setNodes(Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5
    })));
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
      
      {/* Background Neural Grid - Changed to Indigo */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #6366f1 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Deep Glows - Blue/Violet instead of Pink */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Neural Nodes */}
      {nodes.map((node, i) => (
        <NeuralNode key={i} {...node} />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Badge - Indigo/Cyan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-950/30 border border-indigo-500/20 backdrop-blur-md"
        >
           <BrainCircuit size={14} className="text-cyan-400" />
           <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">
             Artificial Intelligence Layer
           </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Predicting the Future. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
            Changing the Present.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          AI is no longer just an advantage; it is a necessity. From custom LLM agents to predictive engines, 
          we transform businesses into fully autonomous, insight-driven entities.
        </motion.p>

        {/* Visual: The AI Core - Changed to Violet/Blue */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative h-40 w-full max-w-3xl mx-auto flex justify-center items-center"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-xl" />
           
           <div className="grid grid-cols-3 gap-8 items-center w-full">
              {/* Left: Input */}
              <div className="text-right hidden md:block">
                 <div className="text-xs font-mono text-slate-500 mb-1">INPUT STREAM</div>
                 <div className="h-1 w-full bg-gradient-to-l from-indigo-500 to-transparent opacity-50" />
              </div>

              {/* Center: The Brain */}
              <div className="relative flex justify-center">
                 <div className="w-20 h-20 rounded-2xl bg-[#0B0F19] border border-indigo-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)] animate-pulse-slow">
                    <Bot size={40} className="text-indigo-400" />
                 </div>
                 {/* Orbiting particles */}
                 <div className="absolute inset-0 border border-dashed border-indigo-500/20 rounded-full w-32 h-32 -top-6 -left-6 animate-spin-slow" />
              </div>

              {/* Right: Output */}
              <div className="text-left hidden md:block">
                 <div className="text-xs font-mono text-slate-500 mb-1">INTELLIGENCE</div>
                 <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-transparent opacity-50" />
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}