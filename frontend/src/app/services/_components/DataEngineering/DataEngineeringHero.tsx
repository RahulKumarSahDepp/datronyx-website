"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Cloud, 
    Database, 
    Zap, 
    Cpu, 
    ArrowRight 
} from "lucide-react";

// --- Custom Visual Component for Hero (Data Flow) ---
const DataFlowVisual = () => (
    <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
        {/* Central Data Hub */}
        <motion.div
            className="w-24 h-24 md:w-32 md:h-32 bg-indigo-500/20 rounded-full border border-indigo-500/50 flex items-center justify-center shadow-2xl shadow-indigo-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <Database className="w-10 h-10 text-indigo-300" />
        </motion.div>

        {/* Ingestion Stream 1 */}
        <motion.div
            className="absolute w-4 h-4 rounded-full bg-cyan-400"
            animate={{ x: [-150, 0], y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", times: [0, 0.5, 1], delay: 0.5 }}
        />
        <Cloud className="absolute -top-10 left-5 text-cyan-500/50 w-10 h-10" />

        {/* Processing Stream 2 */}
        <motion.div
            className="absolute w-4 h-4 rounded-full bg-pink-400"
            animate={{ x: [150, 0], y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", times: [0, 0.5, 1], delay: 1.5 }}
        />
        <Zap className="absolute top-10 right-5 text-pink-500/50 w-10 h-10" />

        {/* Analytics/ML Egress */}
        <motion.div
            className="absolute w-4 h-4 rounded-full bg-green-400"
            animate={{ scale: [1, 2], opacity: [1, 0], y: [0, -150] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0 }}
        />
        <Cpu className="absolute -top-20 right-1/4 text-green-500/50 w-8 h-8" />
    </div>
);

export default function DataEngineeringHero() {
    return (
        <section className="px-6 md:px-12 lg:px-24 pt-24 pb-16 bg-gradient-to-b from-[#0A0D1E] to-gray-950 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-600/15 text-indigo-300 text-xs font-bold uppercase tracking-widest border border-indigo-600/50">
                        Data Engineering
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                        Scalable pipelines. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-700">Reliable data stack.</span> Fast insights.
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-lg">
                        We build the modern lakehouses, streaming pipelines, and robust data foundations that efficiently power analytics, reporting, and Machine Learning at scale.
                    </p>

                    <div className="mt-10 flex gap-4 flex-wrap">
                        <a href="/contact" className="inline-flex items-center px-6 py-3 bg-indigo-600 rounded-full font-semibold shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all duration-300">
                            Talk to an Engineer
                        </a>
                        <a href="/services" className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                            Explore Services <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="hidden lg:flex justify-center items-center"
                >
                    <DataFlowVisual />
                </motion.div>
            </div>
        </section>
    );
}