"use client";

import React from "react";
import { 
  Database, 
  Workflow, 
  BrainCircuit, 
  XCircle, 
  CheckCircle2, 
  Cpu,
  Layers,
  Zap
} from "lucide-react";

// --- REFINED CONTENT DATA ---
// Content is simplified for non-tech audiences while maintaining authority.
const servicesData = [
  {
    id: "01",
    category: "The Foundation",
    title: "Unified Data Infrastructure",
    subhead: "Most companies build on sand. We build on bedrock.",
    icon: Database,
    accentColor: "indigo",
    problem: {
      text: "Your data is trapped in disconnected silos (Salesforce, Excel, old ERPs), creating chaos and conflicting reports.",
    },
    fix: {
      text: "We consolidate everything into one secure, reliable Source of Truth that your entire company can trust.",
    },
    techStack: ["Snowflake", "Databricks", "AWS", "Azure"],
  },
  {
    id: "02",
    category: "The Pipeline",
    title: "Automated Data Flow",
    subhead: "Static data is dead weight. Kinetic data is fuel.",
    icon: Workflow,
    accentColor: "cyan",
    problem: {
      text: "Critical dashboards break and stale data circulates because fragile, manual processes fail unexpectedly.",
    },
    fix: {
      text: "We deploy 'self-healing' data streams that detect and fix issues automatically, ensuring data is always fresh.",
    },
    techStack: ["Airflow", "dbt", "Python", "Kafka"],
  },
  {
    id: "03",
    category: "The Brain",
    title: "Intelligent Decision Engines",
    subhead: "Don't guess. Know with certainty.",
    icon: BrainCircuit,
    accentColor: "fuchsia",
    problem: {
      text: "'Black Box' AI gives answers without explaining 'why,' making it too risky for high-stakes business decisions.",
    },
    fix: {
      text: "We build transparent AI models that explain their reasoning, giving you mathematical certainty to act.",
    },
    techStack: ["TensorFlow", "PyTorch", "LLM Agents"],
  },
];


// --- SUB-COMPONENTS ---

// 1. The "Hardware Tech Spec" Tag
const TechTag = ({ label, color }: { label: string; color: string }) => {
    const colorMap: Record<string, string> = {
        indigo: "border-indigo-500/30 text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20",
        cyan:   "border-cyan-500/30 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20",
        fuchsia:"border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-500/10 hover:bg-fuchsia-500/20",
    };
    
    return (
        <span className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider border rounded-md transition-colors ${colorMap[color]}`}>
            {label}
        </span>
    );
}


// --- MAIN COMPONENT ---
export default function ServicesGridSection() {
  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
        
      {/* --- Background FX --- */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Subtle circuit pattern */}
          <div className="absolute inset-0 bg-[url('/grid_noise.png')] opacity-[0.03] mix-blend-overlay" /> 
          {/* Deep glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md mb-6">
                <Layers size={14} className="text-indigo-400" />
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Core Capabilities Module
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Upgrade Your Business <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400">
                    Operating System.
                </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                We don't just provide services; we install high-performance architectural upgrades that turn your data into a competitive weapon.
            </p>
        </div>


        {/* --- THE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting lines behind cards (visual flourish) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent -z-10 hidden md:block" />
          
          {servicesData.map((service, index) => {
            // Dynamic dynamic classes based on accent color
            const accentGlow = {
                indigo: "group-hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)] group-hover:border-indigo-500/50",
                cyan:   "group-hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)] group-hover:border-cyan-500/50",
                fuchsia:"group-hover:shadow-[0_0_50px_-10px_rgba(232,121,249,0.3)] group-hover:border-fuchsia-500/50",
            };
            const iconBg = {
                indigo: "bg-indigo-950 border-indigo-500/20 text-indigo-400",
                cyan:   "bg-cyan-950 border-cyan-500/20 text-cyan-400",
                fuchsia:"bg-fuchsia-950 border-fuchsia-500/20 text-fuchsia-400",
            }

            return (
              <div 
                key={service.id}
                className={`
                  group relative h-full rounded-3xl border border-white/5 bg-[#0A0F1F]/80 backdrop-blur-xl 
                  overflow-hidden transition-all duration-500 hover:-translate-y-2
                  ${accentGlow[service.accentColor as keyof typeof accentGlow]}
                `}
              >
                {/* Internal Glow Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,_${service.accentColor},transparent_70%)]`} />

                <div className="relative z-10 p-8 flex flex-col h-full">
                  
                  {/* Card Header: ID & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                        <span className={`font-mono text-sm font-bold tracking-wider uppercase opacity-60 mb-2 text-${service.accentColor}-400`}>
                            {service.id} // {service.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                            {service.title}
                        </h3>
                    </div>
                    <div className={`p-4 rounded-2xl border ${iconBg[service.accentColor as keyof typeof iconBg]} shadow-lg`}>
                        <service.icon size={28} />
                    </div>
                  </div>

                  <p className="text-white/80 text-base font-medium italic border-l-2 border-slate-700 pl-4 mb-8">
                    "{service.subhead}"
                  </p>

                  {/* The Diagnostic Block (Problem/Fix) */}
                  <div className="flex-grow space-y-4 mb-8 bg-[#020617]/50 p-5 rounded-xl border border-white/5 font-mono text-sm">
                    
                    {/* The Problem */}
                    <div className="flex gap-3 opacity-75 hover:opacity-100 transition-opacity">
                        <XCircle size={16} className="text-rose-500 mt-1 shrink-0" />
                        <div>
                            <strong className="text-rose-400 uppercase tracking-wider text-xs block mb-1">Diagnostic Warning:</strong>
                            <p className="text-slate-300 leading-relaxed">
                                {service.problem.text}
                            </p>
                        </div>
                    </div>

                     {/* Connection Line */}
                     <div className="w-full h-px bg-slate-800/50" />

                    {/* The Fix - Highlighted */}
                    <div className="flex gap-3 relative">
                        <div className="absolute -inset-2 bg-emerald-500/5 rounded-lg blur-sm -z-10" />
                        <div className="relative">
                            <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0 relative z-10" />
                            <div className="absolute inset-0 bg-emerald-400 blur-md opacity-40 animate-pulse" />
                        </div>
                        <div>
                            <strong className="text-emerald-400 uppercase tracking-wider text-xs block mb-1">Datronyx Solution Protocol:</strong>
                            <p className="text-white font-medium leading-relaxed">
                                {service.fix.text}
                            </p>
                        </div>
                    </div>
                  </div>

                  {/* Footer: Tech Specs */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-3 opacity-60">
                        <Cpu size={14} />
                        <span className="text-xs font-mono uppercase tracking-widest">Enabled Architectures</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, i) => (
                            <TechTag key={i} label={tech} color={service.accentColor} />
                        ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}