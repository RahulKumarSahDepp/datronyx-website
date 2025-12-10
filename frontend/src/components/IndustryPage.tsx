"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Ensure Link is imported
import { 
  LineChart, 
  ShieldCheck, 
  Activity, 
  ShoppingCart, 
  Truck, 
  Cpu, 
  Wallet, 
  Stethoscope, 
  Scan, 
  Database,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

// --- 1. SHARED BACKGROUND COMPONENTS ---

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const starCount = 35;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-indigo-500/30 rounded-full"
          style={{ top: star.top, left: star.left, width: star.size, height: star.size, opacity: star.opacity }}
          animate={{ opacity: [star.opacity, 1, star.opacity] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const TechnicalGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{
        backgroundImage: `linear-gradient(to right, #818cf8 1px, transparent 1px), linear-gradient(to bottom, #818cf8 1px, transparent 1px)`,
        backgroundSize: '40px 40px' 
      }}
    />
  </div>
);

// --- 2. DATA CONFIGURATION ---

const industries = [
  {
    id: "finance",
    title: "Fintech & Banking",
    tagline: "The 'False Positive' Killer",
    icon: Wallet,
    color: "emerald", 
    gradient: "from-emerald-500 to-teal-500",
    description: "Stop bleeding revenue to rigid fraud rules. We engineer adaptive risk models that approve legitimate customers instantly while blocking sophisticated attacks.",
    image: "/images/fintech-dashboard.jpg", 
    stats: [
        { label: "Approval Rate", val: "+14%" },
        { label: "Risk Latency", val: "12ms" }
    ],
    features: [
      { title: "Transaction Forensics", icon: Activity, desc: "Real-time anomaly detection at scale." },
      { title: "Automated Compliance", icon: ShieldCheck, desc: "KYC/AML reporting on autopilot." },
      { title: "Credit Scoring 2.0", icon: LineChart, desc: "ML-driven borrower risk assessment." },
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    tagline: "Predictive Patient Outcomes",
    icon: Stethoscope,
    color: "sky",
    gradient: "from-sky-500 to-blue-600",
    description: "Data silos kill efficiency. We unify EMR, IoT, and claims data into a single source of truth, enabling predictive care and seamless operations.",
    image: "/images/health.png", 
    stats: [
        { label: "Readmission", val: "-18%" },
        { label: "Data Uptime", val: "99.99%" }
    ],
    features: [
      { title: "Interoperability Engine", icon: Database, desc: "FHIR-compliant data unification." },
      { title: "Patient Risk Scoring", icon: Activity, desc: "Predicting deterioration before it happens." },
      { title: "Revenue Cycle AI", icon: Wallet, desc: "Automated claims denial prevention." },
    ]
  },
  {
    id: "retail",
    title: "Retail & E-Com",
    tagline: "Inventory Velocity Control",
    icon: ShoppingCart,
    color: "violet",
    gradient: "from-violet-500 to-fuchsia-500",
    description: "Dead stock is dead capital. Our engines connect demand signals with supply chain logistics to ensure you stock exactly what sells.",
    image: "/images/retail-heatmap.jpg", 
    stats: [
        { label: "Stockouts", val: "-40%" },
        { label: "Margin Lift", val: "+8.5%" }
    ],
    features: [
      { title: "Demand Sensing", icon: Scan, desc: "Trend prediction vs. historical avg." },
      { title: "Dynamic Pricing", icon: LineChart, desc: "Real-time elasticity modeling." },
      { title: "Churn Prediction", icon: Activity, desc: "Identify at-risk VIP customers." },
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    tagline: "Zero Unplanned Downtime",
    icon: Truck,
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    description: "Don't fix it when it breaks; fix it before. We turn sensor noise into clear mechanical health signals, optimizing OEE and maintenance schedules.",
    image: "/images/manufacturing.png", 
    stats: [
        { label: "Downtime", val: "-22%" },
        { label: "Maintenance", val: "ROI 4x" }
    ],
    features: [
      { title: "Predictive Maint.", icon: Cpu, desc: "Vibration & heat anomaly alerts." },
      { title: "Digital Twin", icon: Database, desc: "Virtual simulation of production lines." },
      { title: "Quality Vision", icon: Scan, desc: "Computer vision defect detection." },
    ]
  },
];

// --- 3. SUB-COMPONENTS ---

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
  color: string;
}

const TabButton = ({ active, onClick, icon: Icon, label, color }: TabButtonProps) => (
  <button 
    onClick={onClick}
    className={`
      relative group flex items-center gap-2 px-5 py-4 transition-all duration-300 border-b-2
      ${active ? `border-${color}-500 bg-slate-900/50` : 'border-transparent hover:bg-slate-900/30'}
    `}
  >
    <Icon className={`w-4 h-4 transition-colors duration-300 ${active ? `text-${color}-400` : 'text-slate-500 group-hover:text-slate-300'}`} />
    <span className={`text-sm font-bold tracking-wide transition-colors ${active ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
      {label}
    </span>
    {active && (
      <motion.div 
        layoutId="activeGlow"
        className={`absolute inset-0 bg-gradient-to-t from-${color}-500/10 to-transparent`}
        transition={{ duration: 0.3 }}
      />
    )}
  </button>
);

interface FeatureCardProps {
  title: string;
  icon: React.ElementType;
  desc: string;
  color: string;
  index: number;
}

const FeatureCard = ({ title, icon: Icon, desc, color, index }: FeatureCardProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * index + 0.2 }}
    className={`
      flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]
      hover:bg-white/[0.05] hover:border-${color}-500/30 transition-all duration-300 group
    `}
  >
    <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400 group-hover:text-white transition-colors`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-${color}-300 transition-colors">{title}</h4>
      <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

// --- 4. MAIN COMPONENT ---

const IndustryShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = industries[activeTab];

  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
      <TechnicalGrid />
      <StarBackground />
      
      {/* Dynamic Background Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-${current.color}-900/10 blur-[150px] rounded-full transition-colors duration-1000`} />

      <div className="relative z-30 w-full max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
               <Terminal size={16} className="text-indigo-400" />
               <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest">
                 Domain Expertise
               </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Engineered for <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}`}>
                 High-Stakes Industries.
              </span>
            </motion.h2>
          </div>
          <div className="hidden md:block pb-2">
             <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM_READY
             </div>
          </div>
        </div>

        {/* Main Interface */}
        <div className="w-full bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
          
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-white/10 bg-black/20">
            {industries.map((industry, index) => (
              <TabButton 
                key={industry.id}
                active={activeTab === index}
                onClick={() => setActiveTab(index)}
                icon={industry.icon}
                label={industry.title}
                color={industry.color}
              />
            ))}
          </div>

          <div className="p-6 md:p-12 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                
                {/* Left: Content */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${current.color}-500/10 border border-${current.color}-500/20 text-${current.color}-400 text-xs font-bold uppercase tracking-wider mb-4`}>
                       {current.tagline}
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed font-light">
                      {current.description}
                    </p>
                  </div>

                  {/* Feature Grid */}
                  <div className="space-y-3">
                    {current.features.map((feature, idx) => (
                      <FeatureCard 
                        key={idx}
                        index={idx}
                        title={feature.title}
                        desc={feature.desc}
                        icon={feature.icon}
                        color={current.color}
                      />
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link href="/solutions" className={`group flex items-center gap-3 text-sm font-bold text-white mt-4`}>
                     <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-${current.color}-500 group-hover:border-${current.color}-500 transition-all duration-300`}>
                        <ArrowUpRight size={18} />
                     </div>
                     <span className="group-hover:translate-x-1 transition-transform">Explore {current.title} Solutions</span>
                  </Link>
                </div>

                {/* Right: HUD Visual */}
                <div className="lg:col-span-7 relative h-full min-h-[350px]">
                   {/* The Frame */}
                  <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden border border-white/10 bg-[#020617] group">
                    
                    {/* Simulated HUD Overlay */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute top-4 left-4 flex gap-2">
                           <div className="px-2 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] text-slate-400 font-mono">
                              ID: {current.id.toUpperCase()}_MOD
                           </div>
                           <div className={`px-2 py-1 bg-${current.color}-500/20 border border-${current.color}-500/30 rounded text-[10px] text-${current.color}-300 font-mono flex items-center gap-1`}>
                              <Activity size={10} /> LIVE
                           </div>
                        </div>
                        
                        {/* Scanning Line */}
                        <motion.div 
                            className={`absolute inset-x-0 h-[1px] bg-${current.color}-400/50 shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10`}
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Live Stats Overlay */}
                        <div className="absolute bottom-4 right-4 flex gap-3">
                            {current.stats.map((stat, i) => (
                                <div key={i} className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-lg min-w-[100px]">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{stat.label}</div>
                                    <div className={`text-xl font-bold text-${current.color}-400`}>{stat.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="w-full h-full bg-slate-900 relative">
                        {/* 1. The Image - UNCOMMENTED AND STYLED */}
                        <img 
                          src={current.image} 
                          alt={current.title} 
                          className="w-full h-full object-cover opacity-80 transition-opacity duration-500" 
                        />
                        
                        {/* 2. Overlays to integrate image into dark theme */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90`} />
                        <div className={`absolute inset-0 bg-${current.color}-900/20 mix-blend-overlay`} />

                        {/* Abstract Tech Lines for "Stunning" effect */}
                        <div className="absolute inset-0 opacity-20" 
                            style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
                        />
                    </div>

                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-3 -right-3 w-24 h-24 border-b border-r border-${current.color}-500/30 rounded-br-3xl hidden md:block`} />
                  <div className={`absolute -top-3 -left-3 w-16 h-16 border-t border-l border-${current.color}-500/30 rounded-tl-3xl hidden md:block`} />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;