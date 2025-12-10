"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Landmark, 
  ShoppingCart, 
  HeartPulse, 
  Factory, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Zap, 
  Search, 
  Truck, 
  ScanLine, 
  BrainCircuit,
  ArrowRight,
  Terminal
} from "lucide-react";

// --- 1. DATA CONFIGURATION ---
const industries = [
  {
    id: "fintech",
    label: "Fintech",
    icon: Landmark,
    color: "indigo",
    tagline: "Secure. Compliant. Fast.",
    cards: [
      { title: "Fraud Interception", desc: "Stop threats in milliseconds. Our AI detects anomalies instantly, blocking thieves without stopping real customers.", icon: ShieldCheck, stat: "0.01s Latency" },
      { title: "Automated Compliance", desc: "Never fear an audit. We automate KYC/AML reporting, ensuring your data lineage is traceable and regulation-ready.", icon: Search, stat: "100% Audit Ready" },
      { title: "Credit Risk 2.0", desc: "Approve more loans with less risk. Use alternative data points to score borrowers with higher precision.", icon: TrendingUp, stat: "+15% Approvals" }
    ]
  },
  {
    id: "retail",
    label: "Retail & E-Com",
    icon: ShoppingCart,
    color: "rose",
    tagline: "Predictive. Personalized. Profitable.",
    cards: [
      { title: "Demand Prediction", desc: "Stop guessing. We analyze trends and weather to tell you exactly what inventory to stock for next season.", icon: BrainCircuit, stat: "-30% Dead Stock" },
      { title: "Dynamic Pricing", desc: "Adjust pricing in real-time based on demand signals to maximize margins during peaks and move volume during lulls.", icon: Zap, stat: "Max Margins" },
      { title: "Churn Prevention", desc: "Identify VIPs who are about to leave. We alert your team instantly so you can save the relationship.", icon: Users, stat: "-20% Churn" }
    ]
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    color: "emerald",
    tagline: "Patient-First. Data-Driven.",
    cards: [
      { title: "Unified Records", desc: "No more fragmented history. We unify EMRs into a single, secure patient view for faster, safer diagnosis.", icon: ScanLine, stat: "Single Source" },
      { title: "Risk Prediction", desc: "Predict readmissions before they happen. Our models flag high-risk patients for proactive care intervention.", icon: ShieldCheck, stat: "Proactive Care" },
      { title: "Ops Automation", desc: "Automate coding and claims processing. Reduce administrative drag so staff can focus on patients.", icon: Zap, stat: "-20hrs/Week" }
    ]
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    color: "amber",
    tagline: "Efficient. Resilient. Non-Stop.",
    cards: [
      { title: "Predictive Maint.", desc: "Fix it before it breaks. IoT sensors detect microscopic vibrations to predict machine failure days in advance.", icon: Zap, stat: "Zero Downtime" },
      { title: "Supply Chain Vision", desc: "Total visibility from raw material to delivery. Spot bottlenecks in real-time and reroute automatically.", icon: Truck, stat: "Real-Time Tracking" },
      { title: "Computer Vision QC", desc: "Cameras scan every unit. AI spots defects invisible to the human eye, ensuring 100% perfect output.", icon: ScanLine, stat: "99.9% Quality" }
    ]
  }
];

// --- 2. COLOR THEMES ---
const industryThemes: Record<string, any> = {
    indigo: { bg: "from-indigo-500/20 to-blue-500/5", border: "border-indigo-500/30", text: "text-indigo-400", button: "hover:bg-indigo-500/20" },
    rose: { bg: "from-rose-500/20 to-orange-500/5", border: "border-rose-500/30", text: "text-rose-400", button: "hover:bg-rose-500/20" },
    emerald: { bg: "from-emerald-500/20 to-teal-500/5", border: "border-emerald-500/30", text: "text-emerald-400", button: "hover:bg-emerald-500/20" },
    amber: { bg: "from-amber-500/20 to-yellow-500/5", border: "border-amber-500/30", text: "text-amber-400", button: "hover:bg-amber-500/20" },
};

// --- 3. MAIN COMPONENT ---
export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState(0);
  const current = industries[activeTab];
  const theme = industryThemes[current.color];

  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-1000">
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
         <AnimatePresence mode="wait">
            <motion.div 
                key={current.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 1 }}
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b ${theme.bg} blur-[120px] rounded-full opacity-20`}
            />
         </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-slate-900 border border-slate-800"
            >
                <Terminal size={14} className="text-slate-400" />
                <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">
                    Sector_Intelligence_Module
                </span>
            </motion.div>

            {/* --- REQUESTED HEADING --- */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Upgrade Your Business <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400">
                    Operating System.
                </span>
            </h2>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Generic models fail in specific contexts. Select your sector to see how we engineer value tailored to your environment.
            </p>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {industries.map((ind, index) => {
                const isActive = activeTab === index;
                const activeTheme = industryThemes[ind.color];
                const Icon = ind.icon;
                return (
                    <button
                        key={ind.id}
                        onClick={() => setActiveTab(index)}
                        className={`
                            relative px-6 py-4 rounded-xl flex items-center gap-3 text-sm font-bold transition-all duration-300 border
                            ${isActive ? `bg-[#0B0F1A] border-white/10 text-white shadow-xl` : `bg-transparent border-transparent text-slate-500 hover:text-white hover:bg-white/5`}
                        `}
                    >
                        {isActive && (
                            <motion.div layoutId="activeTabGlow" className={`absolute inset-0 rounded-xl bg-gradient-to-r ${activeTheme.bg} opacity-50`} />
                        )}
                        <Icon size={18} className={`relative z-10 ${isActive ? activeTheme.text : "text-slate-500"}`} />
                        <span className="relative z-10">{ind.label}</span>
                    </button>
                )
            })}
        </div>

        {/* CARDS GRID */}
        <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {current.cards.map((card, i) => {
                        const CardIcon = card.icon;
                        return (
                            <div key={i} className={`group relative p-8 rounded-2xl bg-[#0B0F1A]/60 backdrop-blur-xl border border-white/5 hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1 ${theme.button}`}>
                                <div className={`absolute inset-0 rounded-2xl border-2 ${theme.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                <div className="absolute top-6 right-6">
                                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded bg-[#020617] border border-white/10 ${theme.text}`}>{card.stat}</span>
                                </div>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-[#020617] border border-white/10 group-hover:scale-110 transition-transform duration-300 ${theme.text}`}>
                                    <CardIcon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{card.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300">{card.desc}</p>
                                <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity ${theme.text}`}>
                                    Initialize Protocol <ArrowRight size={14} />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}