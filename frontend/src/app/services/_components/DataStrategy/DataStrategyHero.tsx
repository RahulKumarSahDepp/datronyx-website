// components/DataStrategy/DataStrategyHero.jsx

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function DataStrategyHero() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 lg:py-32 flex flex-col items-center text-center">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Compass className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-100">Strategic Data Advisory</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8"
          >
            Built to Scale. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Aligned to Value.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We transform chaotic data environments into trusted assets. Design a governance model that fuels AI, analytics, and decision-making without the red tape.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              Schedule Strategy Workshop
            </Link>
            <Link href="/services" className="px-8 py-4 bg-transparent border border-gray-700 hover:border-white text-white font-medium rounded-full transition-all duration-300">
              View Frameworks
            </Link>
          </motion.div>
        </div>
    </section>
  );
}