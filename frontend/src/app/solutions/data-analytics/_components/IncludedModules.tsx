"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function IncludedModules() {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-6 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12">
         
         <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Included Solutions</h2>
            <p className="text-slate-400 mt-2">Comprehensive coverage for your data needs.</p>
         </div>

         <div className="space-y-4">
            {[
               "Decision Intelligence Systems",
               "BI Dashboards & Executive Visual Command Centers",
               "Automated Data Quality & Golden Record Pipelines",
               "Strategic KPI Framework Design"
            ].map((item, i) => (
               <div key={i} className="flex items-center gap-4 p-4 bg-[#0B0F19] rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle2 className="text-cyan-500 flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
}