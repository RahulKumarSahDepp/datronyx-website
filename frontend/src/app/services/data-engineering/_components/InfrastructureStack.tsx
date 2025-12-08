"use client";

import React from "react";
import { Container, Code2, CloudCog, Boxes } from "lucide-react";

// You can reuse the "TechChip" or "TechStackSlide" component here if you want consistency,
// But for this specific page, a grid might be better to show categories.

const stack = [
  { category: "Compute & Storage", tools: "Snowflake, Databricks, BigQuery, AWS S3", icon: CloudCog },
  { category: "Transformation", tools: "dbt, Spark, PySpark, SQL", icon: Code2 },
  { category: "Orchestration", tools: "Airflow, Prefect, Dagster", icon: Boxes },
  { category: "Infrastructure", tools: "Terraform, Kubernetes, Docker", icon: Container },
];

export default function InfrastructureStack() {
  return (
    <section className="py-20 bg-[#020617] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-12">Built on <span className="text-blue-500">Modern Standards</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:bg-slate-900 transition-colors">
               <div className="mx-auto w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                 <item.icon size={24} />
               </div>
               <h3 className="text-white font-bold mb-2">{item.category}</h3>
               <p className="text-slate-500 text-sm font-mono">{item.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}