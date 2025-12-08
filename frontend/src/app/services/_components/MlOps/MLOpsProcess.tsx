"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    HardHat, 
    FlaskConical, 
    Layers3, 
    Tractor,
    LucideIcon
} from "lucide-react";

// --- Types ---
interface ThemeStyle {
    mainColor: string; // Used for text highlight
    cardBg: string; // Base background color
    borderColor: string;
    glowColor: string; // The shining reflection
    stepBg: string; // The number circle background
    gridPattern: string; // The grid overlay
}

interface StepData {
    title: string;
    desc: string;
    Icon: LucideIcon;
    theme: ThemeStyle;
}

// --- Theme Definitions ---
const themes = {
    blue: {
        mainColor: "text-cyan-400",
        cardBg: "bg-cyan-950/10",
        borderColor: "border-cyan-500/20 hover:border-cyan-500/50",
        glowColor: "bg-cyan-400/20",
        stepBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
        gridPattern: "bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)]"
    },
    purple: {
        mainColor: "text-purple-400",
        cardBg: "bg-purple-950/10",
        borderColor: "border-purple-500/20 hover:border-purple-500/50",
        glowColor: "bg-purple-400/20",
        stepBg: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
        gridPattern: "bg-[linear-gradient(to_right,#a855f71a_1px,transparent_1px),linear-gradient(to_bottom,#a855f71a_1px,transparent_1px)]"
    },
    amber: {
        mainColor: "text-amber-400",
        cardBg: "bg-amber-950/10",
        borderColor: "border-amber-500/20 hover:border-amber-500/50",
        glowColor: "bg-amber-400/20",
        stepBg: "bg-gradient-to-br from-amber-500 to-orange-600",
        gridPattern: "bg-[linear-gradient(to_right,#f59e0b1a_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b1a_1px,transparent_1px)]"
    },
    emerald: {
        mainColor: "text-emerald-400",
        cardBg: "bg-emerald-950/10",
        borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
        glowColor: "bg-emerald-400/20",
        stepBg: "bg-gradient-to-br from-emerald-500 to-green-600",
        gridPattern: "bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)]"
    }
};

// --- Process Step Component ---
const ProcessStep: React.FC<{ step: number, data: StepData }> = ({ step, data }) => {
    const { title, desc, Icon, theme } = data;
    
    return (
        <motion.div 
            className={`
                relative flex flex-col items-start gap-4 p-5 rounded-xl border 
                overflow-hidden backdrop-blur-sm group
                ${theme.cardBg} ${theme.borderColor}
            `}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: step * 0.1 }}
        >
            {/* Grid Background Overlay */}
            <div className={`absolute inset-0 bg-[size:24px_24px] opacity-30 pointer-events-none ${theme.gridPattern}`} />

            {/* Shining Reflection (Top Right) */}
            <div 
                className={`
                    absolute -top-10 -right-10 w-32 h-32 rounded-full 
                    blur-[50px] pointer-events-none opacity-40
                    transition-all duration-500 group-hover:opacity-70 group-hover:scale-110
                    ${theme.glowColor}
                `} 
            />

            {/* Header: Number & Icon */}
            <div className="relative z-10 flex w-full justify-between items-start">
                <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center 
                    font-bold text-sm text-white shadow-lg
                    ${theme.stepBg}
                `}>
                    {step}
                </div>
                <Icon className={`w-6 h-6 opacity-80 ${theme.mainColor}`} />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-2">
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
};

export default function MLOpsProcess() {
    
    // Data for the Process section with assigned themes
    const processSteps: StepData[] = [
        { 
            title: "Assessment & Strategy", 
            desc: "Evaluate existing ML maturity, infrastructure gaps, and define a target MLOps roadmap.", 
            Icon: Layers3,
            theme: themes.blue
        },
        { 
            title: "Proof-of-Value Pilot", 
            desc: "Implement a quick end-to-end pipeline (training, deployment, monitoring) on one model.", 
            Icon: FlaskConical,
            theme: themes.purple
        },
        { 
            title: "Platform Build & Integration", 
            desc: "Establish the Model Registry, CI/CD, feature store integration, and production observability.", 
            Icon: HardHat,
            theme: themes.amber
        },
        { 
            title: "Handoff & Operations", 
            desc: "Deliver comprehensive runbooks, train internal teams, and define SLO-driven support.", 
            Icon: Tractor,
            theme: themes.emerald
        },
    ];

    return (
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-[#0A0D1E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-[#0A0D1E]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                        MLOps Implementation Flow
                    </h2>
                    <p className="text-gray-400">From initial audit to fully autonomous machine learning operations.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((stepData, index) => (
                        <ProcessStep 
                            key={index}
                            step={index + 1}
                            data={stepData}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}