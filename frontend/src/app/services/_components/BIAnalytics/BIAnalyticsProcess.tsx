"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, PenTool, Database, Rocket, Sparkles } from "lucide-react";

// --- CONNECTION LINE COMPONENT ---
const ConnectionLine = () => (
  <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent hidden md:block" />
);

// --- TYPE DEFINITION ---
// This interface fixes the red marks by telling TypeScript what to expect
interface StepCardProps {
  step: string;
  title: string;
  desc: string;
  Icon: React.ElementType; // This type handles the Lucide icons
  index: number;
}

// --- INDIVIDUAL STEP CARD ---
const StepCard = ({ step, title, desc, Icon, index }: StepCardProps) => {
    return (
        <motion.div 
            className="relative z-10 flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
        >
            {/* Hover Glow Effect behind the node */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* The Node/Icon */}
            <div className="relative w-16 h-16 rounded-2xl bg-[#0f172a] border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 shadow-xl shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl" />
                <Icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
                
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0A0D1E] border border-blue-500/50 flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-blue-200">{step}</span>
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{title}</h3>
            <p className="text-blue-100/60 text-sm leading-relaxed max-w-[220px]">{desc}</p>
        </motion.div>
    )
}

export default function BIAnalyticsProcess() {
  return (
    <div className="bg-[#0A0D1E] overflow-hidden">
        {/* --- PROCESS SECTION --- */}
        <section className="px-6 md:px-12 lg:px-24 py-28 relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-900/5 blur-[100px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Delivery Cadence</span>
                    </h2>
                    <p className="text-blue-200/50 max-w-2xl mx-auto text-lg">
                        We don't just build dashboards. We engineer decision systems through a precise, iterative 4-step framework.
                    </p>
                </div>
                
                <div className="relative px-4">
                    {/* Connecting Line */}
                    <ConnectionLine />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
                        {[
                            { step: "01", title: "Discovery", desc: "KPI alignment, data audit & stakeholder interviews.", icon: Search },
                            { step: "02", title: "Design", desc: "Wireframing, UX flows & rapid prototyping.", icon: PenTool },
                            { step: "03", title: "Construction", desc: "Data modeling, ETL & dashboard development.", icon: Database },
                            { step: "04", title: "Adoption", desc: "Training workshops, documentation & handover.", icon: Rocket }
                        ].map((item, i) => (
                            <StepCard 
                                key={i}
                                index={i}
                                step={item.step}
                                title={item.title}
                                desc={item.desc}
                                Icon={item.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
            <div className="max-w-5xl mx-auto relative group">
                {/* Glow behind the card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                
                {/* Main Card Container */}
                <div className="relative rounded-[2rem] bg-gradient-to-br from-gray-900 to-blue-950 border border-blue-500/20 overflow-hidden shadow-2xl">
                    {/* Interior Background Effects */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
                    
                    {/* Compact Padding */}
                    <div className="relative z-10 px-8 py-12 md:py-16 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]">
                            <Sparkles className="w-6 h-6 text-blue-400" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            Dashboards your team will <br className="hidden md:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-violet-400 to-blue-700">
                                actually use.
                            </span>
                        </h3>
                        
                        <p className="text-blue-100/60 mb-8 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
                            Stop guessing with static reports. Start knowing with interactive intelligence. Book a demo to see a prototype tailored to your industry.
                        </p>
                        
                        <a href="/contact" className="inline-block">
                            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                                <span className="mr-2">Schedule a Demo</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}