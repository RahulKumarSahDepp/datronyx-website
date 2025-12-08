"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader, processSteps } from "./DataStrategyUtilities";

export default function DataStrategyProcessCTA() {
  return (
    <>
      {/* --- PROCESS (Compact Glowing Data Stream) --- */}
      <section className="px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto">
          {/* FIX: Added the required 'badge' prop here */}
          <SectionHeader 
            badge="Our Process"
            title="How We Engage"
            subtitle="A proven methodology to move from chaos to clarity."
          />

          <div className="relative mt-16">
            {/* The Glowing Central Spine (Timeline Line) */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-30 md:-translate-x-1/2 rounded-full" />
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-indigo-400 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-6 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card Side */}
                  <div className={`flex-1 w-full pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                     <div className={`relative group p-5 rounded-xl bg-gray-900/40 border border-white/5 backdrop-blur-sm hover:bg-gray-800/40 hover:border-indigo-500/30 transition-all duration-500 ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                        {/* Decorative Corner Accent */}
                        <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0' : 'right-0 md:left-auto md:right-0'} w-8 h-8 border-t-2 border-l-2 border-white/5 rounded-tl-xl group-hover:border-indigo-500/50 transition-colors duration-500`} />
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                     </div>
                  </div>

                  {/* Center Node (The "Jewel") */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14">
                    {/* Outer Ripple */}
                    <div className="absolute inset-0 bg-indigo-500/10 rounded-full animate-pulse" />
                    {/* Core */}
                    <div className="relative w-10 h-10 rounded-full bg-gray-950 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)] z-10">
                       <div className={`w-2.5 h-2.5 rounded-full ${step.color} shadow-[0_0_8px_currentColor]`} />
                    </div>
                  </div>

                  {/* Empty Spacer Side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA (Compact Modern Card) --- */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto relative group">
          
          {/* Main Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-950 border border-white/10 shadow-2xl">
            
            {/* 1. Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            
            {/* 2. Spotlight Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-b from-indigo-500/20 to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 px-6 py-12 md:py-16 text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-6 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Ready to trust your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-700">data?</span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Schedule a discovery session to assess your current data maturity and receive a tailored roadmap.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-[0_0_30px_-10px_rgba(79,70,229,0.5)] focus:outline-none"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                
                <Link 
                   href="/case-studies"
                   className="px-6 py-3 text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          </div>

        </div>
      </section>
    </>
  );
}