"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Rocket, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Business Impact",
    description: "Drive measurable lift in revenue, reduce operating costs, and improve forecasting accuracy across business functions.",
    icon: Rocket,
    color: "text-cyan-400",
    hoverBorder: "group-hover:border-cyan-500/50",
    gradient: "from-cyan-500/10 to-transparent",
  },
  {
    title: "Explainable Models",
    description: "We prioritize transparent, auditable models with feature importance, SHAP-level explainability, and business-friendly reporting.",
    icon: ShieldCheck,
    color: "text-yellow-400",
    hoverBorder: "group-hover:border-yellow-500/50",
    gradient: "from-yellow-500/10 to-transparent",
  },
  {
    title: "Production-Ready",
    description: "From validation to CI/CD, model monitoring, and retraining pipelines — we deliver production-grade deployments.",
    icon: Cpu,
    color: "text-pink-400",
    hoverBorder: "group-hover:border-pink-500/50",
    gradient: "from-pink-500/10 to-transparent",
  },
];

export default function PredictiveModelingBenefits() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-20 bg-gray-950 overflow-hidden">
      {/* Background Subtle Grid or Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-gray-950 to-gray-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-md transition-all duration-300 ${benefit.hoverBorder} overflow-hidden`}
            >
              {/* Internal subtle gradient overlay that appears on hover */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${benefit.gradient} transition-opacity duration-500`} 
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors duration-300`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`} />
                  </div>
                  {/* Subtle decorative element */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-blue-500 mb-3 group-hover:text-white/90 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Bottom highlight line */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-gradient-to-r ${benefit.gradient.replace('from-', 'from-').replace('to-transparent', 'to-transparent')}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}