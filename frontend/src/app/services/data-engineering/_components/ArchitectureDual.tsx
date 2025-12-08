"use client";

import React from "react";
import { motion } from "framer-motion";
// FIX: Added 'Database' to the imports
import { Workflow, Cloud, Settings, Layers, RefreshCw, Lock, Database } from "lucide-react";

export default function ArchitectureDual() {
  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Two Pillars of <span className="text-blue-500">Modern Engineering</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just move data; we create the environment where it thrives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1: PIPELINE ARCHITECTURE (The Flow) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <Workflow size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Pipeline Architecture</h3>
              <p className="text-blue-400/80 font-mono text-sm mb-6">ETL / ELT / Streaming</p>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                We build intelligent data arteries. Whether batch or real-time, our pipelines are idempotent, monitored, and designed to handle schema drift automatically.
              </p>

              <div className="space-y-3">
                <FeatureRow icon={RefreshCw} text="Automated Airflow/Dagster Orchestration" color="text-blue-400" />
                <FeatureRow icon={Layers} text="CDC (Change Data Capture) for Real-Time" color="text-blue-400" />
                <FeatureRow icon={Settings} text="dbt-driven Transformations" color="text-blue-400" />
              </div>
            </div>
          </motion.div>

          {/* CARD 2: CLOUD INFRASTRUCTURE (The Foundation) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-[#0B0F19] border border-slate-800 hover:border-teal-500/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 text-teal-400 border border-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.15)]">
                <Cloud size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-teal-400/80 font-mono text-sm mb-6">Lakehouse / Governance / IaC</p>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                We provision secure, scalable environments using Infrastructure as Code. From raw data lakes to governed warehouses, we optimize for both cost and performance.
              </p>

              <div className="space-y-3">
                <FeatureRow icon={Database} text="Snowflake / Databricks Lakehouse Setup" color="text-teal-400" />
                <FeatureRow icon={Lock} text="RBAC & Governance Implementation" color="text-teal-400" />
                <FeatureRow icon={Settings} text="Terraform / Pulumi Provisioning" color="text-teal-400" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Helper Component for the list rows
const FeatureRow = ({ icon: Icon, text, color }: { icon: any, text: string, color: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
    <Icon size={18} className={color} />
    <span className="text-slate-300 text-sm font-medium">{text}</span>
  </div>
);