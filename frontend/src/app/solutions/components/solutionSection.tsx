"use client";

import React, { useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  BrainCircuit, 
  ShieldCheck,  
  Database,     
  BarChart3,    
  Cpu,          
  CloudLightning, 
  ArrowRight,
  Zap,
  Check,
  Terminal,
  Activity
} from "lucide-react";

// --- Data Configuration ---
const solutions = [
  {
    id: "predictive",
    title: "Deterministic Forecasting",
    subtitle: "AI-Driven Future Certainty",
    desc: "Move beyond gut-feeling. We engineer custom neural networks that ingest historical data to predict demand, risk, and churn with high-precision confidence intervals.",
    icon: BrainCircuit,
    accent: "text-violet-400",
    glow: "shadow-violet-500/20",
    gradient: "from-violet-500 to-fuchsia-600",
    features: ["Demand & Churn Prediction", "Anomaly Detection", "Behavioral Modeling"],
    impact: "90%+ Accuracy"
  },
  {
    id: "engineering",
    title: "Hyperscale Engineering",
    subtitle: "Real-Time Data Pipelines",
    desc: "Architecture that survives scale. We build fault-tolerant, self-healing data lakes and ETL pipelines capable of processing petabytes of streaming data with sub-second latency.",
    icon: Database,
    accent: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    gradient: "from-cyan-500 to-blue-600",
    features: ["Lakehouse Architecture", "Stream Processing", "ELT Automation"],
    impact: "<10ms Latency"
  },
  {
    id: "governance",
    title: "Sovereignty & Governance",
    subtitle: "Compliance as Code",
    desc: "Trust is your currency. We implement automated governance frameworks that ensure GDPR/SOC2 compliance, data lineage, and role-based access control without slowing down innovation.",
    icon: ShieldCheck,
    accent: "text-emerald-400",
    glow: "shadow-emerald-500/20",
    gradient: "from-emerald-500 to-teal-600",
    features: ["Automated Lineage", "Access Control (RBAC)", "Quality Gates"],
    impact: "100% Audit Ready"
  },
  {
    id: "mlops",
    title: "AI Industrialization",
    subtitle: "Lab to Production",
    desc: "Stop models from dying in notebooks. We build rigorous MLOps CI/CD pipelines that automate training, versioning, deployment, and drift monitoring for enterprise-grade AI.",
    icon: Cpu,
    accent: "text-rose-400",
    glow: "shadow-rose-500/20",
    gradient: "from-rose-500 to-pink-600",
    features: ["Model Registry", "Drift Monitoring", "Auto-Retraining"],
    impact: "Zero Downtime"
  },
  {
    id: "bi",
    title: "Cognitive Analytics",
    subtitle: "Self-Service Intelligence",
    desc: "Empower every stakeholder. We deploy modern BI stacks that allow non-technical teams to query data using natural language, backed by visualized executive dashboards.",
    icon: BarChart3,
    accent: "text-amber-400",
    glow: "shadow-amber-500/20",
    gradient: "from-amber-500 to-orange-600",
    features: ["Embedded Analytics", "Natural Language Query", "Real-time KPIs"],
    impact: "Instant Insights"
  },
  {
    id: "aaas",
    title: "Intelligence-on-Demand",
    subtitle: "Managed Data Operations",
    desc: "Bypass the hiring crisis. Plug into our fully managed data team to handle your reporting, maintenance, and ad-hoc analysis for a flat monthly operational cost.",
    icon: CloudLightning,
    accent: "text-white",
    glow: "shadow-white/20",
    gradient: "from-slate-400 to-slate-200",
    features: ["Monthly Reporting", "Dedicated Data Team", "24/7 Monitoring"],
    impact: "OpEx Efficiency"
  },
];

// --- 1. VISUALIZATIONS (The "Screen" Content) ---

const TechVisual = ({ id, color }: { id: string, color: string }) => {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#050A15]">
        {/* Scanlines & Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(18,20,30,0.5)_50%,transparent_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
  
        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
            
            {/* PREDICITIVE */}
            {id === 'predictive' && (
                <div className="w-full h-16 flex items-end justify-between gap-1">
                    {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                        <motion.div 
                            key={i}
                            className="w-full bg-violet-500/40 rounded-t-sm relative overflow-hidden"
                            initial={{ height: "10%" }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-violet-400/80 shadow-[0_0_10px_#a78bfa]" />
                        </motion.div>
                    ))}
                    <motion.div 
                        className="absolute top-4 right-4 text-[10px] font-mono text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/30"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        FORECAST: +12%
                    </motion.div>
                </div>
            )}

            {/* ENGINEERING */}
            {id === 'engineering' && (
                <div className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-cyan-500/20 border-b-cyan-400 rounded-full" />
                    </motion.div>
                    <div className="space-y-1">
                        <div className="w-24 h-1.5 bg-cyan-900/50 rounded overflow-hidden">
                            <motion.div className="h-full bg-cyan-400" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                        </div>
                        <div className="w-16 h-1.5 bg-cyan-900/50 rounded overflow-hidden">
                             <motion.div className="h-full bg-cyan-400" animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.2 }} />
                        </div>
                    </div>
                </div>
            )}

            {/* GOVERNANCE */}
            {id === 'governance' && (
                <div className="relative">
                    <ShieldCheck className="w-12 h-12 text-emerald-500/20" />
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ShieldCheck className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                    </motion.div>
                    <motion.div 
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-emerald-300 whitespace-nowrap"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        SECURE_ENCLAVE
                    </motion.div>
                </div>
            )}

            {/* MLOPS */}
            {id === 'mlops' && (
                <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-1">
                        {[1,2,3].map(i => (
                            <motion.div key={i} className="w-8 h-1 bg-rose-500/30 rounded" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }} />
                        ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-rose-500" />
                    <div className="w-10 h-10 border border-rose-500/50 rounded bg-rose-500/10 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-rose-400" />
                    </div>
                </div>
            )}

            {/* BI */}
            {id === 'bi' && (
                <div className="grid grid-cols-2 gap-2 w-full max-w-[100px]">
                    <div className="bg-amber-500/20 rounded p-1">
                        <div className="w-full h-1 bg-amber-500/50 mb-1 rounded"/>
                        <div className="w-2/3 h-1 bg-amber-500/30 rounded"/>
                    </div>
                    <div className="bg-amber-500/20 rounded p-1 flex items-end justify-between gap-0.5 h-8">
                         <div className="w-1.5 h-3 bg-amber-400 rounded-sm"/>
                         <div className="w-1.5 h-5 bg-amber-400 rounded-sm"/>
                         <div className="w-1.5 h-2 bg-amber-400 rounded-sm"/>
                    </div>
                    <div className="col-span-2 bg-amber-500/10 rounded h-6 flex items-center justify-center border border-amber-500/20">
                        <span className="text-[8px] text-amber-300 font-mono">INSIGHT_READY</span>
                    </div>
                </div>
            )}

             {/* AaaS */}
             {id === 'aaas' && (
                <div className="relative">
                    <CloudLightning className="w-12 h-12 text-slate-400" />
                    <motion.div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                </div>
            )}

        </div>
      </div>
    );
};


// --- 2. THE CARD COMPONENT ---

const HighTechCard = ({ data }: { data: any }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className="group relative h-full bg-[#0B0F19] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-500"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          500px circle at ${mouseX}px ${mouseY}px,
                          rgba(255, 255, 255, 0.06),
                          transparent 80%
                        )
                    `,
                }}
            />

            {/* Inner Content Wrapper */}
            <div className="relative flex flex-col h-full">
                
                {/* Visual Viewport (Top Half) */}
                <div className="h-40 w-full relative border-b border-white/10 group-hover:border-white/20 transition-colors">
                    <TechVisual id={data.id} color={data.accent} />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1">
                        <data.icon className={`w-3.5 h-3.5 ${data.accent}`} />
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">{data.id} Module</span>
                    </div>

                    {/* Impact Badge (Bottom Right) */}
                    <div className="absolute bottom-0 right-0 bg-[#0B0F19] px-3 py-1 border-t border-l border-white/10 rounded-tl-xl text-[10px] font-mono text-gray-400 group-hover:text-white transition-colors">
                        IMPACT: <span className={`${data.accent}`}>{data.impact}</span>
                    </div>
                </div>

                {/* Text Content (Bottom Half) */}
                <div className="p-6 flex flex-col flex-grow">
                    
                    <h3 className={`text-xl font-bold text-white mb-1 group-hover:${data.accent} transition-colors duration-300`}>
                        {data.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
                        {data.subtitle}
                    </p>
                    
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                        {data.desc}
                    </p>

                    {/* Tech Specs Grid */}
                    <div className="grid grid-cols-1 gap-2 mt-auto">
                        {data.features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                <div className={`w-1 h-1 rounded-full ${data.accent} shadow-[0_0_5px_currentColor]`} />
                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* Action Hint */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">View Documentation</span>
                        <ArrowRight className={`w-4 h-4 ${data.accent}`} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// --- MAIN COMPONENT ---
export default function CoreSolutions() {
  const darkBg = "#02040A"; // Deepest black-blue

  return (
    <section 
        className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#02040A]"
    >
        {/* --- Background Ambient --- */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px),
                                      linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />
            
            {/* Color Blobs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/5 pb-10">
                <div className="max-w-2xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-indigo-400 text-xs font-mono uppercase tracking-widest">
                            System Capabilities
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Scale & Speed.</span>
                    </motion.h2>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-md text-right md:text-left"
                >
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        Our solutions aren't just features; they are foundational pillars designed to modernize your entire data estate.
                    </p>
                </motion.div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((sol, index) => (
                    <HighTechCard key={sol.id} data={sol} />
                ))}
            </div>

            {/* Bottom Connect */}
            <div className="mt-16 flex justify-center">
                 <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                    <Terminal className="w-4 h-4" />
                    <span>System Status: <span className="text-emerald-500">ALL SYSTEMS OPERATIONAL</span></span>
                 </div>
            </div>

        </div>
    </section>
  );
} 