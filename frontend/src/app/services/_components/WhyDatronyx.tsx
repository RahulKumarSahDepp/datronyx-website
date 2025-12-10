"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  ShieldCheck, 
  Unlock, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  LucideIcon // 1. Import this type
} from "lucide-react";

// --- 2. Define the Interface for the Props ---
interface PhilosophyCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

// --- COMPONENT: FEATURE CARD ---
// 3. Apply the interface here
const PhilosophyCard = ({ icon: Icon, title, subtitle, description, index }: PhilosophyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-700/50 to-slate-900/50"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

      {/* Card Content */}
      <div className="relative h-full bg-[#0B0F1A] border border-slate-800 p-8 rounded-xl overflow-hidden group-hover:border-slate-600 transition-colors duration-300">
        
        {/* Subtle Grid Background inside card */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Header */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
            <Icon size={24} className="text-slate-300 group-hover:text-indigo-400 transition-colors" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-wider">
            {subtitle}
          </p>
          
          <p className="text-slate-400 leading-relaxed">
            {description}
          </p>

          {/* Bottom "Active" Indicator */}
          <div className="mt-auto pt-8 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-slate-500 font-mono">SYSTEM ACTIVE</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function WhyDatronyx() {
  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      
      {/* Background Decoration: The "Targeting" Crosshairs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-px bg-indigo-500/30" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-indigo-500/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-indigo-500/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6 uppercase tracking-widest"
          >
            <Target size={12} />
            The Datronyx Methodology
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
          >
            Most dashboards are <br/>
            <span className="text-slate-600 line-through decoration-rose-500 decoration-4">digital wallpaper.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            We don’t just visualize data; we engineer outcomes. 
            We build the <span className="text-white font-semibold">Decision Engines</span> that tell you exactly what to do next.
          </motion.p>
        </div>

        {/* --- THE 3 PILLARS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1: Business First */}
          <PhilosophyCard 
            index={0}
            icon={TrendingUp}
            title="Business First, Code Second"
            subtitle="Metric-Driven Engineering"
            description="We don't write a single line of code until we identify the specific lever that drives your revenue. If it doesn't improve the bottom line, we don't build it."
          />

          {/* Pillar 2: Zero-Trust */}
          <PhilosophyCard 
            index={1}
            icon={ShieldCheck}
            title="Zero-Trust Accuracy"
            subtitle="Bank-Grade Governance"
            description="In Fintech and Healthcare, 'close enough' is a disaster. We build deterministic, audited pipelines. Your numbers will match reality, every single time."
          />

          {/* Pillar 3: No Black Boxes */}
          <PhilosophyCard 
            index={2}
            icon={Unlock}
            title="Radical Transparency"
            subtitle="You Own The IP"
            description="No vendor lock-in. No hidden logic. We build clear, documented systems that your internal team can understand, audit, and take ownership of."
          />

        </div>

        {/* --- COMPARISON TABLE (The "Kill Shot") --- */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-24 bg-[#0B0F1A] border border-slate-800 rounded-2xl p-8 md:p-12"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-white mb-6">The "Standard Agency" vs. <span className="text-indigo-400">Datronyx</span></h3>
                    <p className="text-slate-400 mb-8">
                        Most agencies hand you a login and walk away. We engineer a system that becomes the central nervous system of your company.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm">
                            <XCircle className="text-slate-600 shrink-0" size={20} />
                            <span className="text-slate-500 line-through">Pretty charts that don't explain "Why"</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <XCircle className="text-slate-600 shrink-0" size={20} />
                            <span className="text-slate-500 line-through">Dependent on agency for minor changes</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            <XCircle className="text-slate-600 shrink-0" size={20} />
                            <span className="text-slate-500 line-through">Data breaks silently without warning</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-indigo-500/20 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                   <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-white font-medium">Actionable Signals</h4>
                                <p className="text-sm text-slate-400 mt-1">Alerts you *before* revenue dips, not after.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-white font-medium">Full IP Handover</h4>
                                <p className="text-sm text-slate-400 mt-1">You own the code, the SQL, and the logic.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-white font-medium">Self-Healing Pipelines</h4>
                                <p className="text-sm text-slate-400 mt-1">Automated error detection and rerouting.</p>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}