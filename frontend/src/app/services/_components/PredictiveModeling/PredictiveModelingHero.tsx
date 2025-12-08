"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ForecastingVisual } from "./PredictiveModelingUtilities";

export default function PredictiveModelingHero() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-16 bg-gradient-to-b from-[#0A0D1E] to-gray-950 overflow-hidden">
        
        {/* Background Grid (Matching Service Grid) */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: 'linear-gradient(to right, #4F46E5 1px, transparent 1px), linear-gradient(to bottom, #4F46E5 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
            
            {/* Left Content */}
            <div>
              <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-600/15 text-indigo-300 text-xs font-bold uppercase tracking-widest border border-indigo-600/50">
                Predictive Modeling
              </p>

              <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
              >
                  Forecast outcomes. Optimize operations. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Stay ahead of change.</span>
              </motion.h1>

              <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg md:text-xl text-gray-400 max-w-lg"
              >
                Datronyx builds production-ready predictive models that turn historical and streaming data into accurate forecasts for demand, retention, risk, and more.
              </motion.p>

              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex gap-4 flex-wrap"
              >
                <a href="/contact" className="inline-flex items-center px-6 py-3 bg-indigo-600 rounded-full font-semibold shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all duration-300">
                  Book a Consultation
                </a>
                <a href="/services" className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  View All Services <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hidden lg:flex justify-center items-center"
            >
                <ForecastingVisual />
            </motion.div>
        </div>
    </section>
  );
}