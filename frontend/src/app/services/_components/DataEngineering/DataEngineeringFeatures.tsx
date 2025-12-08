"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Box, 
    Database, 
    Zap, 
    Lock, 
    Layers3, 
    Code, 
    Cpu, 
    Activity 
} from "lucide-react";

// --- TYPE DEFINITIONS ---

// 1. Interface for FeatureCard
interface FeatureCardProps {
    title: string;
    children: React.ReactNode; // Represents the content inside the tag
    Icon: React.ElementType;   // Represents the Lucide icon component
    index: number;
}

// 2. Interface for DeliverableCard
interface DeliverableCardProps {
    title: string;
    desc: string;
    Icon: React.ElementType;
    index: number;
}

// --- THEME CONFIGURATION ---
const themes = [
    {
        name: "Blue",
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/10",
        shine: "bg-blue-500",
        border: "group-hover:border-blue-500/50"
    },
    {
        name: "Violet",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        shine: "bg-violet-500",
        border: "group-hover:border-violet-500/50"
    },
    {
        name: "Emerald",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10",
        shine: "bg-emerald-500",
        border: "group-hover:border-emerald-500/50"
    },
    {
        name: "Rose",
        iconColor: "text-rose-400",
        iconBg: "bg-rose-500/10",
        shine: "bg-rose-500",
        border: "group-hover:border-rose-500/50"
    },
    {
        name: "Cyan",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10",
        shine: "bg-cyan-500",
        border: "group-hover:border-cyan-500/50"
    },
    {
        name: "Amber",
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10",
        shine: "bg-amber-500",
        border: "group-hover:border-amber-500/50"
    }
];

// --- COMPONENT: MODERN FEATURE CARD ---

// 3. Applied FeatureCardProps here
const FeatureCard = ({ title, children, Icon, index }: FeatureCardProps) => {
    const theme = themes[index % themes.length];

    return (
        <motion.div 
            className={`group relative p-8 rounded-2xl border border-white/5 bg-gray-900/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-gray-800/40 ${theme.border}`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            {/* 1. Top Right Colored Shine */}
            <div 
                className={`absolute -top-12 -right-12 w-32 h-32 ${theme.shine} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700 pointer-events-none`} 
            />

            {/* 2. Icon Container */}
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${theme.iconBg} group-hover:scale-105 group-hover:bg-opacity-20`}>
                <Icon className={`w-7 h-7 ${theme.iconColor} transition-transform duration-300 group-hover:-rotate-12`} />
            </div>

            {/* 3. Content */}
            <div className="relative z-10">
                <h4 className="font-bold text-white text-xl mb-3 group-hover:text-white transition-colors">
                    {title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {children}
                </p>
            </div>
        </motion.div>
    );
};

// --- COMPONENT: DELIVERABLE CARD (Compact Version) ---

// 4. Applied DeliverableCardProps here
const DeliverableCard = ({ title, desc, Icon, index }: DeliverableCardProps) => {
    const theme = themes[(index + 2) % themes.length];

    return (
        <motion.div 
            className={`group relative flex items-start gap-5 p-6 rounded-xl border border-white/5 bg-gray-900/20 hover:bg-gray-800/30 transition-all duration-300 ${theme.border} overflow-hidden`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
        >
             {/* Shine Effect */}
             <div 
                className={`absolute -top-8 -right-8 w-24 h-24 ${theme.shine} opacity-0 group-hover:opacity-15 blur-[40px] transition-opacity duration-500 pointer-events-none`} 
            />

            <div className={`shrink-0 mt-1 p-2 rounded-lg ${theme.iconBg}`}>
                <Icon className={`w-5 h-5 ${theme.iconColor}`} />
            </div>
            
            <div className="relative z-10">
                <h4 className="font-bold text-gray-100 text-base mb-1 group-hover:text-white transition-colors">{title}</h4>
                <p className="text-gray-400 text-sm leading-snug group-hover:text-gray-300">{desc}</p>
            </div>
        </motion.div>
    );
}

// --- MAIN COMPONENT ---
export default function DataEngineeringFeatures() {
    
    // Core Capabilities Data
    const capabilities = [
        {
            title: "Modern ETL / ELT",
            icon: Box,
            desc: "Robust, fault-tolerant ingestion from cloud sources, on-prem data, and third-party APIs using tools like dbt and Airflow."
        },
        {
            title: "Lakehouse Design",
            icon: Database,
            desc: "Design and implement data storage architectures (e.g., Delta Lake, Apache Hudi) optimized for analytics and ML workloads."
        },
        {
            title: "Real-time Streaming",
            icon: Zap,
            desc: "Low-latency ingestion and processing via Kafka, cloud-native streams, or Flink for instant analytics and operational triggers."
        },
        {
            title: "Governance & Security",
            icon: Lock,
            desc: "Encryption, strong IAM, role-based access control (RBAC), and lineage integrated into the stack from day one."
        }
    ];

    // Deliverables Data
    const deliverables = [
        {
            title: "ETL/ELT Pipelines",
            icon: Layers3,
            desc: "Modular, reusable data transformation code for production."
        },
        {
            title: "Warehouse Migration",
            icon: Database,
            desc: "Seamless transition to cloud-native, scalable storage solutions."
        },
        {
            title: "Streaming Logic",
            icon: Zap,
            desc: "Infrastructure and logic for real-time data consumption."
        },
        {
            title: "API Integration Layer",
            icon: Code,
            desc: "Secure and performant integration with source and consumption systems."
        },
        {
            title: "Cost Optimization",
            icon: Cpu,
            desc: "Analysis and implementation to reduce cloud data costs."
        },
        {
            title: "Observability Suite",
            icon: Activity,
            desc: "Dashboards and alerts for data quality, pipeline health, and SLAs."
        }
    ];

    return (
        <>
            {/* SECTION 1: CORE CAPABILITIES */}
            <section className="px-6 md:px-12 lg:px-24 py-20 bg-gray-950 relative overflow-hidden">
                {/* Background ambient glow */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-700">Capabilities</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We build resilient data foundations that scale with your business intelligence needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((item, idx) => (
                            <FeatureCard 
                                key={idx} 
                                index={idx}
                                title={item.title} 
                                Icon={item.icon}
                            >
                                {item.desc}
                            </FeatureCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: DELIVERABLES */}
            <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#0A0D1E] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-700">Deliverables</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tangible outcomes that drive immediate value for your data ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deliverables.map((item, idx) => (
                            <DeliverableCard
                                key={idx}
                                index={idx}
                                title={item.title}
                                desc={item.desc}
                                Icon={item.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}