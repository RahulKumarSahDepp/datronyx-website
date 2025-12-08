"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

// --- SUB-COMPONENT: FLOATING PARTICLE ---
const FloatingParticle = ({ delay, top, left, size }: { delay: number, top: string, left: string, size: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: [0, 0.6, 0], y: -100 }}
    transition={{ duration: Math.random() * 5 + 5, delay, repeat: Infinity, ease: "linear" }}
    className={`absolute bg-indigo-500 rounded-full blur-[1px] ${size}`}
    style={{ top, left }}
  />
);

// Define type for particle data to keep TypeScript happy
interface ParticleData {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: number;
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<ParticleData[]>([]);

  // FIX: Generate random particles ONLY on the client-side after mount
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() > 0.5 ? 'w-1 h-1' : 'w-0.5 h-0.5',
      delay: i * 0.5
    }));
    setParticles(newParticles);
  }, []);
  
  // Mouse Position Logic for Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  // Parallax Scroll Effect
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-[89vh] flex items-center justify-center overflow-hidden bg-[#020617] perspective-[1000px] pt-20 pb-10"
    >
      
      {/* --- CINEMATIC BACKGROUND --- */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Grid Floor */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
          }}
        />
        
        {/* Deep Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {particles.map((particle) => (
            <FloatingParticle 
                key={particle.id}
                delay={particle.delay} 
                top={particle.top} 
                left={particle.left}
                size={particle.size}
            />
         ))}
      </div>


      {/* --- MAIN CONTENT WRAPPER --- */}
      <motion.div
        style={{
            rotateX: useTransform(mouseY, [-0.5, 0.5], [5, -5]),
            rotateY: useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
            y: textY
        }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        
        {/* Announcement Badge */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-slate-900/50 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:border-indigo-400 transition-colors cursor-default"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">
                Est. 2025 • Intelligence Redefined
            </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
            Empowering Future <br />
            <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                    Data & AI Innovation
                </span>
                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10" />
            </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
        >
            <span className="text-white font-medium">Hardened Data. Luminous Model.</span> <br/>
            Transforming raw complexity into actionable intelligence.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <Link href="/contact" className="group relative px-8 py-3.5 bg-white text-slate-950 text-lg font-bold rounded-lg overflow-hidden transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                    Let's Talk Strategy
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>

            <Link href="/services" className="px-8 py-3.5 text-slate-300 font-medium hover:text-white transition-colors flex items-center gap-2 group">
                <Terminal size={18} className="text-indigo-500 group-hover:text-cyan-400 transition-colors" />
                Explore Services
            </Link>
        </motion.div>

      </motion.div>
    </section>
  );
}