"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Lightbulb } from 'lucide-react';

// --- Datronyx Narrative ---
const trajectorySteps = [
    {
        icon: Lightbulb,
        title: "Phase I: Intelligent Discovery & Hardening",
        description: "We don't just aggregate data; we engineer it. Our proprietary engine discovers millions of data points, applies deep AI models to score relevance (e.g., AI Readiness Score), and hardens the resulting profiles with rigorous validation, ensuring every insight is action-ready.",
        color: "text-indigo-400",
        duration: "0 - 6 Weeks"
    },
    {
        icon: Shield,
        title: "Phase II: Precision Governance & Pipeline Integration",
        description: "Data integrity is non-negotiable. We integrate our verified data streams directly into your system (Warehouse, API, or SDK), applying real-time governance and custom validation layers to ensure a seamless, compliant, and continuously updated feed.",
        color: "text-green-400",
        duration: "Ongoing Maintenance"
    },
    {
        icon: Zap,
        title: "Phase III: Accelerated AI Agent Deployment",
        description: "The goal is actionable intelligence. Our data is engineered for immediate consumption by AI agents and LLMs. This acceleration cuts deployment time, allowing your teams to leverage predictive analytics and strategic insights instantly.",
        color: "text-red-400",
        duration: "Go-Live"
    },
    {
        icon: TrendingUp,
        title: "Phase IV: Predictive Trajectory & Growth Modeling",
        description: "Datronyx transforms data into foresight. We continuously train and fine-tune models based on the unified data pipeline, providing predictive metrics on market shifts, company growth, and competitive advantages, setting your future trajectory.",
        color: "text-cyan-400",
        duration: "Next 12 Months"
    },
];

// Framer Motion variants for section and items
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            duration: 0.8
        },
    },
};

// --- Timeline Item Component ---
const TimelineItem = ({ step, index }) => (
    <motion.div
        variants={itemVariants}
        className="flex mb-12 last:mb-0 relative"
    >
        {/* Left Side: Timeline Marker and Line */}
        <div className="flex flex-col items-center mr-6 md:mr-10">
            {/* Circle Marker */}
            <div className={`w-8 h-8 rounded-full border-4 border-indigo-700/50 bg-gray-900 flex items-center justify-center relative z-10`}>
                <step.icon className={`w-4 h-4 ${step.color} transition-transform duration-500 group-hover:scale-110`} />
            </div>
            {/* Vertical Line (Hidden for the last item) */}
            {index < trajectorySteps.length - 1 && (
                <div className="h-full w-0.5 bg-indigo-700/30 grow"></div>
            )}
        </div>

        {/* Right Side: Content Card */}
        <div className="flex-1 pt-1 pb-4 group">
            <motion.div 
                className="bg-gray-900/70 p-6 rounded-xl border border-indigo-700/30 shadow-xl 
                           transition-all duration-300 transform hover:border-indigo-400/80 hover:shadow-indigo-500/30"
                whileHover={{ y: -5, x: 5 }}
            >
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white leading-snug">{step.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400/80 bg-indigo-900/50 px-3 py-1 rounded-full whitespace-nowrap">
                        {step.duration}
                    </span>
                </div>
                <p className="text-gray-300 mt-2">{step.description}</p>
            </motion.div>
        </div>
    </motion.div>
);

// --- Main Section Component ---
export default function MissionTrajectorySection() {
    const darkBg = '#0A061F';

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: darkBg }}>
            {/* Background Mesh/Grid Effect (Modern Visual) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(to right, #4F46E5 1px, transparent 1px), linear-gradient(to bottom, #4F46E5 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <p className={`uppercase text-sm font-semibold tracking-widest text-indigo-400 mb-2`}>
                        THE DATRONYX TRAJECTORY
                    </p>
                    <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 text-white`}>
                        From Raw Data to Predictive Power
                    </h2>
                    <p className={`text-lg text-gray-400`}>
                        Our four-phase process ensures the data you rely on is not only accurate but optimized for high-velocity AI and growth strategy, moving beyond traditional data ingestion.
                    </p>
                </div>

                {/* Timeline Container */}
                <motion.div
                    className="relative max-w-3xl mx-auto pt-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {trajectorySteps.map((step, index) => (
                        <TimelineItem key={index} step={step} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}