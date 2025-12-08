"use client";

import React from "react";
import { motion } from "framer-motion";

const impacts = [
  { label: "Decision Speed", value: "10x", desc: "Faster Execution Cycle" },
  { label: "Risk Management", value: "Predictable", desc: "No More Surprises" },
  { label: "Data Trust", value: "100%", desc: "Verified Single Truth" },
  { label: "Strategic Clarity", value: "Boardroom", desc: "Ready Insights" },
];

export default function ImpactGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#050914] to-[#020617] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="text-center p-6 border-r border-white/5 last:border-0"
               >
                  <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">
                    {item.value}
                  </p>
                  <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
                  <p className="text-cyan-500/80 text-xs uppercase tracking-wider font-bold">{item.desc}</p>
               </motion.div>
            ))}
         </div>
         
         <div className="text-center mt-12">
            <p className="text-slate-400 italic">
               "Your business moves from reactive... to strategically unstoppable."
            </p>
         </div>
      </div>
    </section>
  );
}