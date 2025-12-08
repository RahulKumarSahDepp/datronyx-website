"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    ArrowRight, 
    Database, 
    BrainCircuit, 
    Server, 
    Activity, 
    GitBranch, 
    RefreshCw,
    Box
} from "lucide-react";

// --- ANIMATED INFINITY LOOP VISUAL ---
const MLOpsInfiniteLoop = () => {
    // 1. Defined ViewBox dimensions
    const width = 600;
    const height = 300;

    // 2. Perfect Infinity Path Definition (Cubic Bezier)
    // Starts at Center (300, 150)
    // Loops Left (Top-Left -> Left-Edge -> Bottom-Left -> Center)
    // Loops Right (Top-Right -> Right-Edge -> Bottom-Right -> Center)
    // This creates a smooth, continuous figure-8 flow.
    const infinityPath = `
        M 300, 150
        C 200, 50 100, 50 100, 150
        C 100, 250 200, 250 300, 150
        C 400, 50 500, 50 500, 150
        C 500, 250 400, 250 300, 150
        Z
    `;

    return (
        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />

            {/* SVG Container */}
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full max-w-[600px] drop-shadow-2xl overflow-visible">
                <defs>
                    <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* The Infinity Path Track */}
                <path 
                    d={infinityPath} 
                    fill="none" 
                    stroke="url(#loopGradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="opacity-60"
                />

                {/* Moving Particle 1 (Standard Flow) */}
                <motion.circle r="4" fill="#60a5fa" filter="url(#glow)">
                    <animateMotion 
                        dur="8s" 
                        repeatCount="indefinite" 
                        path={infinityPath}
                        rotate="auto"
                    />
                </motion.circle>

                 {/* Moving Particle 2 (Offset Flow) */}
                 <motion.circle r="4" fill="#a78bfa" filter="url(#glow)">
                    <animateMotion 
                        dur="8s" 
                        repeatCount="indefinite" 
                        path={infinityPath}
                        keyPoints="0.5;1.5"
                        keyTimes="0;1"
                        rotate="auto"
                    />
                </motion.circle>
            </svg>

            {/* --- ICONS PLACED ALONG THE LOOP --- */}
            
            {/* 1. DATA (Top Left Arch) - Positioned at approx 25% width, 25% height */}
            <div className="absolute left-[18%] top-[18%] flex flex-col items-center transform -translate-x-1/2">
                <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 rounded-xl bg-[#0A0D1E] border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] z-10"
                >
                    <Database className="w-5 h-5 text-blue-400" />
                </motion.div>
                <div className="mt-2 px-2 py-0.5 rounded-full bg-blue-900/40 border border-blue-500/20 text-[10px] font-bold text-blue-300 uppercase tracking-wider backdrop-blur-md">
                    Data
                </div>
            </div>

            {/* 2. TRAIN (Bottom Left Arch) - Positioned at approx 25% width, 75% height */}
            <div className="absolute left-[18%] bottom-[18%] flex flex-col items-center transform -translate-x-1/2">
                <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-[#0A0D1E] border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] z-10"
                >
                    <BrainCircuit className="w-5 h-5 text-blue-400" />
                </motion.div>
                <div className="mt-2 px-2 py-0.5 rounded-full bg-blue-900/40 border border-blue-500/20 text-[10px] font-bold text-blue-300 uppercase tracking-wider backdrop-blur-md">
                    Train
                </div>
            </div>

             {/* 3. CENTER: REGISTRY (The Hub) - Exact Center */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-500/40"
                    animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0.4)", "0 0 40px rgba(139,92,246,0.6)", "0 0 20px rgba(59,130,246,0.4)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <Box className="w-7 h-7 text-white" />
                    {/* Orbiting Ring around center */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow" />
                </motion.div>
             </div>

            {/* 4. DEPLOY (Top Right Arch) - Positioned at approx 75% width, 25% height */}
            <div className="absolute right-[18%] top-[18%] flex flex-col items-center transform translate-x-1/2">
                <motion.div 
                    animate={{ y: [0, -5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-12 h-12 rounded-xl bg-[#0A0D1E] border border-violet-500/30 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] z-10"
                >
                    <Server className="w-5 h-5 text-violet-400" />
                </motion.div>
                <div className="mt-2 px-2 py-0.5 rounded-full bg-violet-900/40 border border-violet-500/20 text-[10px] font-bold text-violet-300 uppercase tracking-wider backdrop-blur-md">
                    Deploy
                </div>
            </div>

            {/* 5. MONITOR (Bottom Right Arch) - Positioned at approx 75% width, 75% height */}
            <div className="absolute right-[18%] bottom-[18%] flex flex-col items-center transform translate-x-1/2">
                <motion.div 
                    animate={{ y: [0, 5, 0] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="w-12 h-12 rounded-xl bg-[#0A0D1E] border border-violet-500/30 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] z-10"
                >
                    <Activity className="w-5 h-5 text-violet-400" />
                </motion.div>
                <div className="mt-2 px-2 py-0.5 rounded-full bg-violet-900/40 border border-violet-500/20 text-[10px] font-bold text-violet-300 uppercase tracking-wider backdrop-blur-md">
                    Monitor
                </div>
            </div>
            
            {/* Center Text Label below */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-medium text-gray-500">
                <RefreshCw className="w-3 h-3 animate-spin-reverse-slow" />
                <span>Continuous Feedback Loop</span>
            </div>
        </div>
    );
}

export default function MLOpsHero() {
    return (
        <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-24 bg-[#0A0D1E] overflow-hidden">
             {/* --- BACKGROUND LAYERS --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60a_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0D1E_90%)]" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                        <GitBranch className="w-3 h-3" />
                        <span>MLOps Implementation</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-white mb-6">
                        Reliable Model Delivery. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-700">
                            At Production Scale.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100/60 max-w-lg mb-10 leading-relaxed">
                        We bring software engineering rigor to machine learning. Build end-to-end pipelines, automated retraining systems, and robust model registries.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="/contact" 
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
                        >
                            Build an MLOps Plan
                        </a>
                        <a 
                            href="/services" 
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-blue-200 transition-all duration-200 bg-transparent border border-blue-500/30 rounded-full hover:border-blue-400 hover:text-white hover:bg-blue-500/10"
                        >
                            Explore Solutions 
                            <ArrowRight className="w-4 h-4 ml-2 opacity-70" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex justify-center items-center"
                >
                    <MLOpsInfiniteLoop />
                </motion.div>
            </div>
        </section>
    );
}