"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Layers, 
  Code, 
  Cpu, 
  BarChart3, 
  Database, 
  Zap,
  CheckCircle2,
  TerminalSquare,
  Server,
  Activity,
  GitCommit,
  Globe,
  Lock
} from "lucide-react";

// --- 1. BACKGROUND: THE DIGITAL RAIN ---
const CircuitFlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Dark Gradient Base */}
       <div className="absolute inset-0 bg-[#020617]" />
       
       {/* Vertical Data Lines */}
       <div className="absolute inset-0 opacity-20" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) scale(1.5)'
            }} 
       />

       {/* Moving Packets */}
       {[...Array(5)].map((_, i) => (
         <motion.div
            key={i}
            className="absolute w-[2px] h-[100px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{ left: `${15 + i * 20}%` }}
            animate={{ top: ["-10%", "120%"], opacity: [0, 1, 0] }}
            transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 0.5 
            }}
         />
       ))}
    </div>
  );
};

// --- 2. COMPONENT: THE ISOMETRIC STACK ---
const IsometricStack = ({ showCode }: { showCode: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px] z-20 cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Container for the Layers */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[340px] h-[420px] md:w-[400px] md:h-[500px]"
      >
        
        {/* --- LAYER 1: BOTTOM (INFRASTRUCTURE) --- */}
        <motion.div 
           className="absolute inset-0 bg-[#0f172a]/95 border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden group transition-all duration-500"
           style={{ transform: "translateZ(-60px)" }}
        >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-slate-700/50 bg-slate-900/50">
                <div className="flex items-center gap-2">
                    <Server size={14} className="text-blue-400" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">L1 // Infrastructure</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 relative">
                 <AnimatePresence mode="wait">
                    {showCode ? (
                        <motion.div 
                            key="tech-1"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="font-mono text-[10px] text-slate-400 space-y-3"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-slate-600 uppercase text-[9px]">Region</div>
                                    <div className="text-blue-300">us-east-1</div>
                                </div>
                                <div>
                                    <div className="text-slate-600 uppercase text-[9px]">Uptime</div>
                                    <div className="text-emerald-400">99.999%</div>
                                </div>
                                <div>
                                    <div className="text-slate-600 uppercase text-[9px]">Latency</div>
                                    <div className="text-blue-300">12ms <span className="text-slate-600">(avg)</span></div>
                                </div>
                                <div>
                                    <div className="text-slate-600 uppercase text-[9px]">Throughput</div>
                                    <div className="text-blue-300">4.2 GB/s</div>
                                </div>
                            </div>
                            <div className="h-px bg-slate-800 w-full my-2" />
                            <div className="flex items-center gap-2 text-slate-500">
                                <Lock size={10} />
                                <span>End-to-End Encryption: <span className="text-blue-400">AES-256</span></span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="viz-1"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="h-full flex items-center justify-center opacity-30"
                        >
                             <div className="grid grid-cols-4 gap-2 w-full">
                                {[...Array(16)].map((_,i) => (
                                    <div key={i} className="h-6 rounded bg-blue-500/20 animate-pulse border border-blue-500/10" style={{ animationDelay: `${i*0.05}s`}} />
                                ))}
                             </div>
                        </motion.div>
                    )}
                 </AnimatePresence>
            </div>
        </motion.div>


        {/* --- LAYER 2: MIDDLE (LOGIC/AI) --- */}
        <motion.div 
           className="absolute inset-0 bg-[#0B0F1A]/95 border border-indigo-500/40 rounded-xl shadow-[0_0_40px_rgba(99,102,241,0.15)] backdrop-blur-xl flex flex-col overflow-hidden"
           style={{ transform: "translateZ(20px) scale(0.96)" }}
        >
             <div className="flex justify-between items-center p-4 border-b border-indigo-500/20 bg-indigo-950/20">
                <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-indigo-400" />
                    <span className="text-[10px] font-mono text-indigo-300/80 uppercase tracking-widest">L2 // Logic Core</span>
                </div>
                <Activity size={12} className="text-indigo-500 animate-pulse" />
            </div>
            
            <div className="p-5 flex-1 relative flex items-center justify-center">
                 <AnimatePresence mode="wait">
                    {showCode ? (
                         <motion.div 
                            key="tech-2"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full font-mono text-[10px] space-y-2"
                        >
                            <div className="flex justify-between text-indigo-300/50 mb-2">
                                <span>EXECUTION_LOG</span>
                                <span>PID: 8192</span>
                            </div>
                            <div className="bg-black/40 rounded p-2 border border-indigo-500/20 space-y-1">
                                <p className="text-indigo-300"><span className="text-fuchsia-400">Input:</span> Vector_768xf</p>
                                <p className="text-indigo-300"><span className="text-fuchsia-400">Model:</span> Transformer_XL</p>
                                <p className="text-emerald-400">Confidence: 98.4%</p>
                            </div>
                            <div className="space-y-1 mt-2">
                                <div className="flex justify-between text-[9px] text-indigo-400">
                                    <span>Processing...</span>
                                    <span>14ms</span>
                                </div>
                                <div className="h-1 w-full bg-indigo-900 rounded overflow-hidden">
                                    <motion.div 
                                        animate={{ width: ["10%", "90%"] }} 
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut" }} 
                                        className="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" 
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="viz-2"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="relative w-28 h-28"
                        >
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-dashed border-indigo-500/50 rounded-full" />
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border border-indigo-400/30 rounded-full" />
                            
                            {/* Neural Nodes */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping" />
                                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-ping delay-75" />
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-150" />
                                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-ping delay-200" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                 </AnimatePresence>
            </div>
        </motion.div>

        {/* --- LAYER 3: TOP (INTERFACE/VALUE) --- */}
        <motion.div 
           className="absolute inset-0 bg-slate-900/90 border border-emerald-500/40 rounded-xl shadow-[0_20px_60px_rgba(16,185,129,0.15)] backdrop-blur-xl flex flex-col overflow-hidden"
           style={{ transform: "translateZ(100px) scale(0.92)" }}
        >
             <div className="flex justify-between items-center p-4 border-b border-emerald-500/20 bg-emerald-950/20">
                <div className="flex items-center gap-2">
                    <Globe size={14} className="text-emerald-400" />
                    <span className="text-[10px] font-mono text-emerald-300/80 uppercase tracking-widest">L3 // Interface</span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-emerald-400 font-bold">LIVE</span>
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-center relative">
                 <AnimatePresence mode="wait">
                    {showCode ? (
                         <motion.div 
                            key="tech-3"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="font-mono text-[10px]"
                        >
                            <div className="text-emerald-600 mb-1">// API Response</div>
                            <div className="text-slate-300 p-2 bg-black/40 rounded border border-emerald-500/10">
                                <span className="text-fuchsia-400">{"{"}</span>
                                <div className="pl-4">
                                    <p>"status": <span className="text-emerald-400">"success"</span>,</p>
                                    <p>"prediction": <span className="text-amber-300">4280.50</span>,</p>
                                    <p>"action": <span className="text-cyan-300">"BUY"</span>,</p>
                                    <p>"risk_score": <span className="text-emerald-400">0.02</span></p>
                                </div>
                                <span className="text-fuchsia-400">{"}"}</span>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="viz-3"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="space-y-4"
                        >
                             <div className="flex justify-between items-end h-24 px-2">
                                <div className="w-8 bg-emerald-500/20 rounded-t h-[40%]" />
                                <div className="w-8 bg-emerald-500/40 rounded-t h-[60%]" />
                                <div className="w-8 bg-emerald-500/30 rounded-t h-[50%]" />
                                <div className="w-8 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t h-[85%] relative group">
                                    {/* Tooltip */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        +42%
                                    </div>
                                </div>
                                <div className="w-8 bg-emerald-500/20 rounded-t h-[45%]" />
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

// --- 3. MAIN HERO COMPONENT ---
export default function SolutionsHeroUnique() {
  const [isTechView, setIsTechView] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#020617] overflow-hidden pt-24 pb-24 lg:pt-0 lg:pb-0">
      
      <CircuitFlow />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* --- LEFT: The Architect's Pitch --- */}
            <div>
                {/* Tech Toggle (Interactive Hook) */}
                <div className="flex items-center gap-3 mb-8">
                    <span className={`text-xs font-mono uppercase tracking-wider transition-colors ${!isTechView ? 'text-white font-bold' : 'text-slate-500'}`}>Business View</span>
                    <button 
                        onClick={() => setIsTechView(!isTechView)}
                        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isTechView ? 'bg-indigo-600' : 'bg-slate-700'}`}
                    >
                        <motion.div 
                            className="w-4 h-4 bg-white rounded-full shadow-md"
                            animate={{ x: isTechView ? 24 : 0 }}
                        />
                    </button>
                    <span className={`text-xs font-mono uppercase tracking-wider transition-colors ${isTechView ? 'text-white font-bold' : 'text-slate-500'}`}>Technical View</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                    Solve the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Unsolvable.
                    </span>
                </h1>

                <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                    Complex problems require structured architecture, not just tools. We layer 
                    <strong className="text-indigo-400"> intelligent data pipelines</strong> beneath 
                    <strong className="text-emerald-400"> intuitive interfaces</strong> to transform how your business operates.
                </p>

                <div className="flex flex-wrap items-center gap-5">
                    <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2 group">
                        Start Building
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-indigo-600" />
                    </Link>
                    
                    <div className="px-6 py-4 border border-slate-700 rounded-lg text-slate-400 font-mono text-sm flex items-center gap-3">
                        <TerminalSquare size={16} />
                        <span>v2.4.0 Stable</span>
                    </div>
                </div>

                {/* Micro-Features */}
                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-800 pt-8">
                    <div>
                        <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                            <Layers size={14} className="text-indigo-400" /> Modular Design
                        </h4>
                        <p className="text-xs text-slate-500">Components that scale with you.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
                            <Code size={14} className="text-emerald-400" /> Full Ownership
                        </h4>
                        <p className="text-xs text-slate-500">No black boxes. You own the code.</p>
                    </div>
                </div>
            </div>

            {/* --- RIGHT: The Isometric Visual --- */}
            <div className="relative flex items-center justify-center lg:justify-end">
                {/* Background Glow behind the stack */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
                
                <IsometricStack showCode={isTechView} />
                
                {/* Floating "Instruction" */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-10 right-10 text-[10px] text-slate-600 font-mono hidden lg:block"
                >
                    &lt; Hover to tilt /&gt;
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}