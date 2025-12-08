"use client";

import React from "react";
import { 
    GitBranch, 
    LineChart, 
    MonitorCheck, 
    Layers3, 
    Repeat2, 
    Code,
    LucideIcon
} from "lucide-react";

// Define interface for data items for type safety (optional but good practice)
interface DeliverableItem {
    icon: LucideIcon;
    title: string;
    description: string;
    // We define color palettes for each item
    themeStyles: {
        iconText: string;
        glowBg: string;
        borderHover: string;
        shadowHover: string;
    };
}

const deliverablesData: DeliverableItem[] = [
    {
        icon: Layers3,
        title: "Full Training Pipelines",
        description: "Automated and reproducible model training and versioning.",
        themeStyles: {
            iconText: "text-cyan-400",
            glowBg: "bg-cyan-500/30",
            borderHover: "hover:border-cyan-400/50",
            shadowHover: "hover:shadow-cyan-500/20",
        }
    },
    {
        icon: Code,
        title: "IaC for Infrastructure",
        description: "Terraform/CloudFormation/K8s setup for reproducible environments.",
        themeStyles: {
            iconText: "text-emerald-400",
            glowBg: "bg-emerald-500/30",
            borderHover: "hover:border-emerald-400/50",
            shadowHover: "hover:shadow-emerald-500/20",
        }
    },
    {
        icon: GitBranch,
        title: "Advanced Deployment Strategies",
        description: "Canary, A/B testing, and blue/green rollouts for safe releases.",
        themeStyles: {
            iconText: "text-violet-400",
            glowBg: "bg-violet-500/30",
            borderHover: "hover:border-violet-400/50",
            shadowHover: "hover:shadow-violet-500/20",
        }
    },
    {
        icon: LineChart,
        title: "Comprehensive Observability",
        description: "Integrated logs, traces, and metrics for model and infrastructure health.",
        themeStyles: {
            iconText: "text-amber-400",
            glowBg: "bg-amber-500/30",
            borderHover: "hover:border-amber-400/50",
            shadowHover: "hover:shadow-amber-500/20",
        }
    },
    {
        icon: Repeat2,
        title: "Reproducibility & Lineage",
        description: "Clear tracking of data, code, and hyperparameters for every model version.",
        themeStyles: {
            iconText: "text-rose-400",
            glowBg: "bg-rose-500/30",
            borderHover: "hover:border-rose-400/50",
            shadowHover: "hover:shadow-rose-500/20",
        }
    },
    {
        icon: MonitorCheck,
        title: "Drift Management System",
        description: "Alerts and automated response for concept and data drift detection.",
        themeStyles: {
            iconText: "text-pink-400",
            glowBg: "bg-pink-500/30",
            borderHover: "hover:border-pink-400/50",
            shadowHover: "hover:shadow-pink-500/20",
        }
    },
];

export default function MLOpsDeliverables() {
    return (
        // Added a subtle radial gradient to the main section background for more depth
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#0A0D1E] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0A0D1E] to-[#0A0D1E] overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Production Platform Deliverables
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Enterprise-grade infrastructure designed for scalable and reliable machine learning operations.
                    </p>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deliverablesData.map((item, index) => (
                        <li 
                            key={index}
                            // Card container styles
                            className={`
                                relative group overflow-hidden
                                p-6 rounded-2xl
                                bg-gray-900/30 backdrop-blur-md
                                border border-gray-800/80
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:shadow-xl
                                ${item.themeStyles.borderHover}
                                ${item.themeStyles.shadowHover}
                            `}
                        >
                            {/* The Shining Reflection Glow Effect */}
                            <div 
                                className={`
                                    absolute -top-12 -right-12 w-40 h-40 rounded-full 
                                    blur-[60px] opacity-60 pointer-events-none
                                    transition-opacity duration-500 group-hover:opacity-80
                                    ${item.themeStyles.glowBg}
                                `} 
                            />
                            
                            {/* Card Content */}
                            <div className="relative z-10 flex items-start gap-5">
                                <div className={`p-3 rounded-lg bg-gray-950/50 border border-gray-800 group-hover:border-gray-700 transition-colors ${item.themeStyles.iconText}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}