"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, ArrowRight } from "lucide-react";

// --- Abstract Dashboard Hero Visual ---
const AbstractDashboard = () => {
  return (
    <div className="relative w-full h-[400px] perspective-1000">
        <motion.div 
            initial={{ rotateX: 20, rotateY: -20, opacity: 0 }}
            animate={{ rotateX: 10, rotateY: -10, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-[#0f172a] border border-blue-500/20 rounded-xl shadow-2xl overflow-hidden transform-style-3d"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)' }}
        >
            {/* Vintage CRT Scanline Overlay (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />

            {/* Fake Header */}
            <div className="h-8 bg-[#1e293b] border-b border-blue-500/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            {/* Dashboard Grid */}
            <div className="p-4 grid grid-cols-3 gap-4 h-full relative z-10">
                {/* Widget 1: Main Chart */}
                <div className="col-span-2 row-span-2 bg-blue-500/5 rounded-lg p-4 border border-blue-500/10 flex flex-col">
                    <div className="h-4 w-32 bg-blue-500/20 rounded mb-4" />
                    <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
                        {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-90" 
                            />
                        ))}
                    </div>
                </div>

                {/* Widget 2: Stat */}
                <div className="bg-blue-500/5 rounded-lg p-4 border border-blue-500/10">
                    <div className="h-3 w-16 bg-blue-500/20 rounded mb-2" />
                    <div className="text-2xl font-bold text-gray-200">2,405</div>
                    <div className="text-xs text-emerald-400 mt-1">+12.5%</div>
                </div>

                {/* Widget 3: Stat */}
                <div className="bg-blue-500/5 rounded-lg p-4 border border-blue-500/10">
                     <div className="h-3 w-16 bg-blue-500/20 rounded mb-2" />
                    <div className="text-2xl font-bold text-gray-200">85.2%</div>
                    <div className="text-xs text-emerald-400 mt-1">Target Met</div>
                </div>

                 {/* Widget 4: Line Chart */}
                 <div className="col-span-3 h-24 bg-blue-500/5 rounded-lg p-4 border border-blue-500/10 flex items-center">
                    <svg className="w-full h-full overflow-visible">
                        <motion.path 
                            d="M0 50 Q 50 20, 100 40 T 200 30 T 300 60 T 400 20" 
                            fill="none" 
                            stroke="#60a5fa" 
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                        />
                    </svg>
                 </div>
            </div>
        </motion.div>
    </div>
  )
}

export default function BIAnalyticsHero() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-20 lg:py-28 overflow-hidden bg-[#0A0D1E]">
        {/* --- VINTAGE BACKGROUND LAYERS --- */}
        
        {/* 1. Grain/Noise Texture */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* 2. Radial Vignette (Darkens corners) */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,10,30,0.8)_100%)]" />

        {/* 3. Subtle Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* 4. Ambient Colored Glow (Deep Blue) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full z-0" />


        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                    <BarChart3 className="w-3 h-3 text-blue-400" />
                    <span>Business Intelligence</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                    Turn raw data into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-500">
                        trusted decisions.
                    </span>
                </h1>

                <p className="text-lg text-blue-100/70 mb-8 max-w-xl leading-relaxed">
                    Stop drowning in spreadsheets. We design intuitive, high-performance dashboards and reporting systems that leaders actually use to drive growth.
                </p>

                <div className="flex flex-wrap gap-4">
                    {/* UPDATED BUTTON: Datronyx Blue */}
                    <a 
                        href="/contact" 
                        className="group relative px-7 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center"
                    >
                        Get BI Consultation
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                    
                    <a 
                        href="/services" 
                        className="px-7 py-3.5 bg-transparent border border-blue-500/30 text-blue-200 font-medium rounded-full hover:border-blue-400 hover:text-white transition-all hover:bg-blue-500/10"
                    >
                        View Examples
                    </a>
                </div>
            </motion.div>

            {/* Hero Visual (Abstract Dashboard) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:block"
            >
                <AbstractDashboard />
            </motion.div>
        </div>
      </section>
  );
}