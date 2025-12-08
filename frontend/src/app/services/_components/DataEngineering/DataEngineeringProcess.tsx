"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Layers3,
    Code,
    Gauge,
    Rocket,
    ArrowRight,
    Terminal,
    type LucideIcon // 1. Added specific type import here
} from "lucide-react";

// --- TYPES ---
// 2. Defined the structure of the props
interface ProcessStepProps {
    step: number;
    title: string;
    desc: string;
    Icon: LucideIcon;
    index: number;
}

// --- THEME CONFIGURATION ---
const stepThemes = [
    {
        id: "design",
        color: "text-blue-400",
        bgHover: "group-hover:bg-blue-600",
        borderHover: "group-hover:border-blue-500/50",
        shine: "bg-blue-500",
        stepBg: "bg-blue-500/10 text-blue-400"
    },
    {
        id: "build",
        color: "text-violet-400",
        bgHover: "group-hover:bg-violet-600",
        borderHover: "group-hover:border-violet-500/50",
        shine: "bg-violet-500",
        stepBg: "bg-violet-500/10 text-violet-400"
    },
    {
        id: "deploy",
        color: "text-rose-400",
        bgHover: "group-hover:bg-rose-600",
        borderHover: "group-hover:border-rose-500/50",
        shine: "bg-rose-500",
        stepBg: "bg-rose-500/10 text-rose-400"
    },
    {
        id: "operate",
        color: "text-emerald-400",
        bgHover: "group-hover:bg-emerald-600",
        borderHover: "group-hover:border-emerald-500/50",
        shine: "bg-emerald-500",
        stepBg: "bg-emerald-500/10 text-emerald-400"
    }
];

// --- MODERN PROCESS CARD COMPONENT ---
// 3. Applied the ProcessStepProps interface here
const ProcessStep = ({ step, title, desc, Icon, index }: ProcessStepProps) => {
    const theme = stepThemes[index % stepThemes.length];

    return (
        <motion.div 
            className={`group relative flex flex-col p-8 rounded-2xl border border-white/5 bg-gray-900/40 backdrop-blur-sm transition-all duration-500 hover:bg-gray-800/40 ${theme.borderHover} overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            {/* 1. Top Right Colored Shine Effect */}
            <div 
                className={`absolute -top-12 -right-12 w-40 h-40 ${theme.shine} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700 pointer-events-none`} 
            />

            {/* 2. Step Indicator & Icon */}
            <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold border border-white/5 transition-colors duration-300 ${theme.stepBg} group-hover:bg-opacity-20`}>
                    0{step}
                </div>
                <Icon className={`w-8 h-8 ${theme.color} opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} />
            </div>

            {/* 3. Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
};

export default function DataEngineeringProcess() {
    
  const processSteps = [
    { 
        title: "Design", 
        desc: "We architect a cost-efficient, modern stack aligned with your performance SLAs and compliance needs.", 
        Icon: Layers3 
    },
    { 
        title: "Build", 
        desc: "Implement modular, observable pipelines using Infrastructure-as-Code and rigorous automated testing.", 
        Icon: Code 
    },
    { 
        title: "Deploy", 
        desc: "Securely roll out pipelines to production using automated CI/CD and progressive deployment strategies.", 
        Icon: Rocket 
    },
    { 
        title: "Operate", 
        desc: "Provide observability, runbooks, and SLO-driven support to ensure platform stability and reliability.", 
        Icon: Gauge 
    },
  ];

  return (
    <>
      {/* --- PROCESS SECTION --- */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-950 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Our Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From whiteboard architecture to production-grade resilience, we follow a rigorous lifecycle methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
                <ProcessStep 
                    key={index}
                    index={index}
                    step={index + 1}
                    title={step.title}
                    desc={step.desc}
                    Icon={step.Icon}
                />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Compact) --- */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto relative group">
          
          {/* Main Container */}
          <div className="relative rounded-[2rem] overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
            
            {/* 1. Grid Background & Masks */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            
            {/* 2. Spotlight Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-b from-indigo-500/20 to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 px-6 py-12 md:py-14 text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-6 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
                <Terminal className="w-6 h-6 text-indigo-400" />
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Modernize Your <span className="text-indigo-400">Data Stack</span>
              </h3>
              
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Talk to our expert engineers about migrating, modernizing, or optimizing your critical data pipelines for scale and speed.
              </p>
              
              <a 
                href="/contact" 
                className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-500 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)] hover:-translate-y-1"
              >
                Book Engineering Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          </div>

        </div>
      </section>
    </>
  );
}