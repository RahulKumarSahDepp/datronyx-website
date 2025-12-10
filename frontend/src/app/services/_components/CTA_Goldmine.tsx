"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Hexagon, Sparkles } from "lucide-react";

export default function CTA_Goldmine() {
  const containerRef = useRef(null);
  
  // State for particles to prevent hydration mismatch (Server vs Client)
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random values only on the client side
    const newParticles = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * 800 - 400, // Random X position relative to center
      y: Math.random() * 300 + 100, // Random starting Y position
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 3,
    }));
    setParticles(newParticles);
  }, []);

  // Parallax for the background grid
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* The "Goldmine" Glow (Bottom Center) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[500px] bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.1)_0%,transparent_70%)] blur-[80px]" />
        
        {/* The Perspective Grid (Floor) */}
        <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b1a_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b1a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" 
        />
        
        {/* Floating Gold Particles (Hydration Safe) */}
        <div className="absolute inset-0 flex justify-center">
             {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-400/60 rounded-full shadow-[0_0_10px_#f59e0b]"
                    initial={{ x: p.x, y: p.y, opacity: 0 }}
                    animate={{ 
                        y: [p.y, p.y - 150], 
                        opacity: [0, 1, 0] 
                    }}
                    transition={{ 
                        duration: p.duration, 
                        repeat: Infinity, 
                        delay: p.delay,
                        ease: "easeInOut" 
                    }}
                />
             ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* --- BADGE --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-8 uppercase tracking-widest"
        >
            <Hexagon size={12} className="fill-current" />
            Strategic Asset Discovery
        </motion.div>

        {/* --- HEADLINE --- */}
        <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight mb-8"
        >
            IS YOUR DATA AN ASSET <br />
            OR A <span className="text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-rose-600">LIABILITY?</span>
        </motion.h2>

        {/* --- SUBTEXT --- */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
            You are sitting on a <span className="text-amber-200 font-medium border-b border-amber-500/30 pb-0.5">goldmine of information</span>. 
            Most companies let it rust in spreadsheets. Let us help you refine it into a competitive weapon.
        </motion.p>

        {/* --- ACTION AREA --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
            {/* Primary Button: The "Refiner" */}
            <Link href="/contact" className="group relative">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500" />
                
                {/* Button Body */}
                <div className="relative flex items-center gap-3 bg-[#0f0a05] text-white px-8 py-5 rounded-lg border border-amber-500/30 group-hover:border-amber-400 transition-colors overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine transition-all duration-1000" />
                    
                    <Sparkles size={18} className="text-amber-400" />
                    <span className="font-bold tracking-wide uppercase text-sm md:text-base">
                        Book a Free Architecture Audit
                    </span>
                    <ArrowRight size={18} className="text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
            </Link>

            {/* Secondary Button: The "Proof" */}
            <Link href="/solutions" className="group flex items-center gap-3 px-6 py-4 rounded-lg hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
                <FileText size={18} className="group-hover:text-amber-400 transition-colors" />
                <span className="font-mono text-sm uppercase tracking-wide decoration-slate-700 underline underline-offset-4 group-hover:decoration-amber-400/50">
                    See The Tech
                </span>
            </Link>
        </motion.div>

        {/* --- SOCIAL PROOF / TRUST TICKER --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-4"
        >
            <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">
                The Datronyx Standard
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-mono text-slate-500">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> 30-Day ROI Roadmap</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> No Vendor Lock-in</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Zero-Trust Security</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
}