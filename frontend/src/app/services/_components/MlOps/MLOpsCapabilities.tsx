"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    GitBranch, 
    MonitorCheck, 
    Repeat2, 
    Factory,
    LucideIcon
} from "lucide-react";

// --- Theme and Card Data Structure ---
interface CardTheme {
    iconColor: string;
    borderColor: string;
    hoverBorderColor: string;
    glowColor: string;
    gridColor: string;
    hoverShadow: string;
}

interface FeatureCardData {
    title: string;
    description: string;
    Icon: LucideIcon;
    theme: CardTheme;
}

const featureCardsData: FeatureCardData[] = [
    {
        title: "Model CI/CD",
        description: "Automated pipelines to test, validate, and promote models through staging environments to production.",
        Icon: GitBranch,
        theme: {
            iconColor: "text-cyan-400",
            borderColor: "border-gray-800/70",
            hoverBorderColor: "hover:border-cyan-500/50",
            glowColor: "bg-cyan-500/20",
            gridColor: "#06b6d41a", // Cyan grid
            hoverShadow: "hover:shadow-cyan-500/20",
        },
    },
    {
        title: "Model Registry Hub",
        description: "Centralized versioning, detailed provenance, and approval workflows for every model artifact.",
        Icon: Factory,
        theme: {
            iconColor: "text-emerald-400",
            borderColor: "border-gray-800/70",
            hoverBorderColor: "hover:border-emerald-500/50",
            glowColor: "bg-emerald-500/20",
            gridColor: "#10b9811a", // Emerald grid
            hoverShadow: "hover:shadow-emerald-500/20",
        },
    },
    {
        title: "Monitoring & Drift",
        description: "Real-time telemetry, model health metrics, performance anomaly detection, and automated alerts for data drift.",
        Icon: MonitorCheck,
        theme: {
            iconColor: "text-violet-400",
            borderColor: "border-gray-800/70",
            hoverBorderColor: "hover:border-violet-500/50",
            glowColor: "bg-violet-500/20",
            gridColor: "#a855f71a", // Violet grid
            hoverShadow: "hover:shadow-violet-500/20",
        },
    },
    {
        title: "Automated Retraining",
        description: "Policy-driven triggers (data drift, performance degradation) to automatically kick off the retraining pipeline.",
        Icon: Repeat2,
        theme: {
            iconColor: "text-orange-400",
            borderColor: "border-gray-800/70",
            hoverBorderColor: "hover:border-orange-500/50",
            glowColor: "bg-orange-500/20",
            gridColor: "#f973161a", // Orange grid
            hoverShadow: "hover:shadow-orange-500/20",
        },
    },
];

// --- Feature Card Component ---
const FeatureCard: React.FC<{ data: FeatureCardData }> = ({ data }) => (
    <motion.div 
        className={`
            relative p-6 rounded-xl border group
            bg-gray-900/40 backdrop-blur-sm overflow-hidden
            transition-all duration-500 ease-out
            hover:-translate-y-2 shadow-lg ${data.theme.hoverShadow}
            ${data.theme.borderColor} ${data.theme.hoverBorderColor}
        `}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
    >
        {/* Grid Background */}
        <div 
            className="absolute inset-0 bg-[size:24px_24px] opacity-30 pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(to right, ${data.theme.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${data.theme.gridColor} 1px, transparent 1px)` 
            }}
        />

        {/* Shining Reflection Glow */}
        <div 
            className={`
                absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px] 
                pointer-events-none opacity-40
                transition-all duration-500 group-hover:opacity-60 group-hover:scale-110
                ${data.theme.glowColor}
            `} 
        />

        <div className="relative z-10">
            <data.Icon className={`w-9 h-9 mb-4 ${data.theme.iconColor}`} />
            <h4 className="font-bold text-white text-xl mt-2 tracking-tight">{data.title}</h4>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">{data.description}</p>
        </div>
    </motion.div>
);

export default function MLOpsCapabilities() {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#0A0D1E] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-950 to-[#0A0D1E]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                        MLOps Core Components
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Building blocks for robust, scalable, and automated machine learning workflows.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {featureCardsData.map((card, index) => (
                        <FeatureCard key={index} data={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}