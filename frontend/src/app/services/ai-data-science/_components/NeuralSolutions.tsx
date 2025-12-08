"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Dice5, FileText, Search, TrendingUp, Users } from "lucide-react";

const solutions = [
  { title: "Predictive ML Engines", icon: TrendingUp, desc: "Revenue & Demand Forecasting" },
  { title: "Custom LLM Deployment", icon: Bot, desc: "Private, Secure AI Models" },
  { title: "Intelligent Document Automation", icon: FileText, desc: "OCR & Semantic Extraction" },
  { title: "Recommendation Systems", icon: Search, desc: "Personalized Customer Journeys" },
  { title: "Monte Carlo Simulations", icon: Dice5, desc: "Risk & Scenario Analysis" },
  { title: "Conversational Interfaces", icon: Users, desc: "Chatbots for Support & HR" },
];

export default function NeuralSolutions() {
  return (
    <section className="py-24 bg-[#050914] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          The <span className="text-cyan-400">Intelligence Suite</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-colors"
            >
               <div className="p-3 bg-slate-950 rounded-lg text-indigo-400">
                  <sol.icon size={24} />
               </div>
               <div>
                  <h3 className="text-white font-bold text-lg">{sol.title}</h3>
                  <p className="text-slate-500 text-sm">{sol.desc}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}