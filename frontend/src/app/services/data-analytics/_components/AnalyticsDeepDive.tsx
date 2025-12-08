"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BrainCircuit, 
  ShieldCheck, 
  CheckCircle2, 
  BarChart3,
  TrendingUp,
  FileCheck
} from "lucide-react";

// --- VISUALIZATION COMPONENTS (CSS-Based UI Mockups) ---

// 1. Mock Dashboard UI
const MockDashboard = () => (
  <div className="relative w-full h-64 bg-slate-900 rounded-xl border border-slate-700 p-4 overflow-hidden shadow-2xl">
    {/* Header */}
    <div className="flex items-center gap-4 mb-4 border-b border-slate-700 pb-2">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <div className="h-2 w-20 bg-slate-700 rounded-full ml-auto" />
    </div>
    {/* Grid Content */}
    <div className="grid grid-cols-2 gap-4 h-full">
      <div className="space-y-2">
         <div className="h-20 w-full bg-blue-500/10 rounded-lg border border-blue-500/20 relative">
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-blue-500/20 rounded-b-lg" />
            <div className="absolute bottom-2 left-2 w-8 h-1 bg-blue-400 rounded-full" />
         </div>
         <div className="h-16 w-full bg-slate-800 rounded-lg flex items-center justify-center gap-2">
            <div className="w-2 h-8 bg-emerald-500 rounded-full" />
            <div className="w-2 h-10 bg-emerald-500 rounded-full" />
            <div className="w-2 h-6 bg-emerald-500 rounded-full" />
         </div>
      </div>
      <div className="h-40 w-full bg-slate-800 rounded-lg p-3 relative overflow-hidden">
         <div className="absolute inset-0 border-[0.5px] border-slate-700/50" style={{ backgroundImage: 'linear-gradient(slate-700 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
         <motion.div 
            initial={{ height: "10%" }}
            whileInView={{ height: "70%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-0 left-4 w-4 bg-indigo-500 rounded-t-md"
         />
         <motion.div 
            initial={{ height: "30%" }}
            whileInView={{ height: "50%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-0 left-12 w-4 bg-purple-500 rounded-t-md"
         />
      </div>
    </div>
  </div>
);

// 2. Mock Predictive Graph
const MockPredictive = () => (
  <div className="relative w-full h-64 bg-[#0B0F19] rounded-xl border border-slate-700 p-4 flex items-center justify-center overflow-hidden">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
     <svg viewBox="0 0 200 100" className="w-full h-full">
        {/* Past Data */}
        <path d="M0,80 Q50,70 80,50 T120,40" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
        {/* Prediction */}
        <motion.path 
          d="M120,40 Q150,20 200,10" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <circle cx="120" cy="40" r="3" fill="white" />
        <text x="130" y="30" fill="#10b981" fontSize="8" fontFamily="monospace">Forecast: +24%</text>
     </svg>
  </div>
);

// 3. Mock Data Quality
const MockQuality = () => (
  <div className="relative w-full h-64 bg-slate-900 rounded-xl border border-slate-700 p-6 flex flex-col gap-3">
     <div className="flex items-center justify-between text-xs text-slate-500 font-mono uppercase border-b border-slate-800 pb-2">
        <span>Source Data</span>
        <span>Validation Status</span>
     </div>
     {[1, 2, 3, 4].map((i) => (
       <motion.div 
         key={i}
         initial={{ opacity: 0, x: -10 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ delay: i * 0.2 }}
         className="flex items-center justify-between p-2 rounded bg-slate-800/50 border border-slate-700"
       >
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-slate-500 mt-1.5" />
             <div className="h-2 w-24 bg-slate-600 rounded-full mt-1.5" />
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
             <CheckCircle2 size={12} />
             VALID
          </div>
       </motion.div>
     ))}
     <div className="mt-auto p-2 bg-emerald-500/10 border border-emerald-500/20 rounded text-center text-emerald-400 text-xs font-mono">
        GOLDEN RECORD ESTABLISHED
     </div>
  </div>
);


// --- MAIN CONTENT DATA ---
const services = [
  {
    id: "bi",
    title: "Visual Command Centers",
    subtitle: "Business Intelligence & Reporting",
    description: "We don't just build charts; we build cockpit views for your business. Our dashboards are engineered for millisecond latency and executive clarity, ensuring you can monitor KPIs, revenue, and operational health in real-time.",
    features: [
      "Real-Time KPI Monitoring",
      "Executive & Investor Reporting",
      "Interactive Drill-Down Capabilities",
      "Mobile-Responsive Dashboards"
    ],
    icon: LayoutDashboard,
    color: "text-blue-400",
    visual: MockDashboard
  },
  {
    id: "predictive",
    title: "Decision Intelligence",
    subtitle: "Predictive Analytics & Forecasting",
    description: "Move from reactive to proactive. Using advanced statistical modeling and machine learning, we help you forecast demand, predict customer churn, and identify revenue opportunities before they appear in standard reports.",
    features: [
      "Revenue & Demand Forecasting",
      "Customer Churn Prediction",
      "Market Trend Analysis",
      "Risk Scoring Models"
    ],
    icon: TrendingUp,
    color: "text-emerald-400",
    visual: MockPredictive
  },
  {
    id: "quality",
    title: "Data Trust & Governance",
    subtitle: "Data Quality & Golden Records",
    description: "Bad data leads to bad decisions. We implement rigorous automated cleaning pipelines and governance frameworks to ensure every number you see is accurate, compliant, and trustworthy.",
    features: [
      "Automated Data Cleansing",
      "Duplicate Resolution (Golden Record)",
      "GDPR/CCPA Compliance Setup",
      "Data Lineage Tracking"
    ],
    icon: ShieldCheck,
    color: "text-purple-400",
    visual: MockQuality
  }
];

export default function AnalyticsDeepDive() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {services.map((service, index) => {
          const Visual = service.visual;
          const isEven = index % 2 === 0;

          return (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold uppercase tracking-wider mb-6 ${service.color}`}>
                   <service.icon size={14} />
                   {service.subtitle}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`mt-1 p-1 rounded-full bg-slate-800 ${service.color}`}>
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-slate-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Visual Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                   {/* Glow Effect */}
                   <div className={`absolute -inset-1 bg-gradient-to-r ${service.color.replace('text-', 'from-').replace('-400', '-600')} to-slate-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`} />
                   
                   {/* The CSS-built Visual Component */}
                   <Visual />
                </div>
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}