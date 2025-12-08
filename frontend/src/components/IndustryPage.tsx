"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LineChart, 
  ShieldCheck, 
  Activity, 
  ShoppingCart, 
  Truck, 
  Cpu, 
  Wallet,
  Stethoscope,
  ChevronRight,
  Scan,
  Database,
  LucideIcon // Import this type for the icons
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
          className="absolute bg-blue-100 rounded-full"
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
      className="absolute inset-0 opacity-[0.1]" 
      style={{
        backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
        backgroundSize: '50px 50px' 
      }}
    />
  </div>
);

const VintageOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
      <svg className="w-full h-full"><filter id="noiseFilter2"><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noiseFilter2)" /></svg>
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050a1f_100%)]" />
  </div>
);

// --- 2. DATA CONFIGURATION ---

const industries = [
  {
    id: "finance",
    title: "Finance & Banking",
    icon: Wallet,
    color: "sky", 
    description: "Algorithmic precision for high-stakes markets.",
    image: "/images/manufacturing.png", 
    features: [
      { title: "HFT Algorithms", icon: Activity, desc: "Millisecond execution speeds." },
      { title: "Fraud Detection", icon: ShieldCheck, desc: "Real-time anomaly models." },
      { title: "Risk Analytics", icon: LineChart, desc: "Predictive loan modeling." },
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    color: "emerald",
    description: "Securing patient data while advancing diagnostics.",
    image: "/images/manufacturing.png", 
    features: [
      { title: "HIPAA Security", icon: ShieldCheck, desc: "Advanced encryption standards." },
      { title: "AI Imaging", icon: Scan, desc: "Computer vision diagnostics." },
      { title: "Telemedicine", icon: Activity, desc: "Remote patient integration." },
    ]
  },
  {
    id: "retail",
    title: "Retail & E-Com",
    icon: ShoppingCart,
    color: "amber",
    description: "Personalizing the shopper journey at scale.",
    image: "/images/manufacturing.png", 
    features: [
      { title: "Demand Forecasting", icon: LineChart, desc: "ML-driven inventory planning." },
      { title: "Smart Recommender", icon: Database, desc: "Behavioral analysis engines." },
      { title: "Omnichannel", icon: Scan, desc: "Unified online/offline data." },
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Truck,
    color: "rose",
    description: "Optimizing supply chains with digital twins.",
    image: "/images/manufacturing.png", 
    features: [
      { title: "Predictive Maint.", icon: Activity, desc: "IoT sensor failure alerts." },
      { title: "Supply Chain", icon: Truck, desc: "Logistics bottleneck visualization." },
      { title: "Auto-QC", icon: Cpu, desc: "Automated defect detection." },
    ]
  },
];

// --- 3. SUB-COMPONENTS ---

// TYPE FIX 1: Defined Interface for TabButton
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType; // Represents the component passed (like Wallet, Truck)
  label: string;
  color: string;
}

// Applied the interface here
const TabButton = ({ active, onClick, icon: Icon, label, color }: TabButtonProps) => (
  <button 
    onClick={onClick}
    className={`
      relative group flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 transition-all duration-300
      ${active ? 'text-white' : 'text-blue-300/60 hover:text-blue-200'}
    `}
  >
    {active && (
      <motion.div 
        layoutId="activeTab"
        className={`absolute inset-0 bg-${color}-500/10 border-b-2 border-${color}-500`}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <Icon className={`w-5 h-5 relative z-10 transition-colors duration-300 ${active ? `text-${color}-400` : 'group-hover:text-blue-200'}`} />
    <span className="relative z-10 text-sm md:text-base font-semibold tracking-wide">{label}</span>
  </button>
);

// TYPE FIX 2: Defined Interface for FeatureCard
interface FeatureCardProps {
  title: string;
  icon: React.ElementType;
  desc: string;
  color: string;
  index: number;
}

// Applied the interface here
const FeatureCard = ({ title, icon: Icon, desc, color, index }: FeatureCardProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * index + 0.3 }}
    className={`
      flex items-start gap-4 p-4 rounded-xl border border-blue-900/40 bg-blue-950/30 backdrop-blur-sm
      hover:border-${color}-500/30 transition-colors duration-300 group
    `}
  >
    <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400 group-hover:text-${color}-300 group-hover:scale-110 transition-all duration-300`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
      <p className="text-blue-200/60 text-xs leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

// --- 4. MAIN COMPONENT ---

const CyberIndustryShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentIndustry = industries[activeTab];

  return (
    <section 
      className="relative w-full min-h-[850px] flex items-center justify-center py-20 overflow-hidden bg-[#050a1f]"
      style={{
        filter: 'sepia(5%) hue-rotate(-5deg) contrast(105%)',
      }}
    >
      <TechnicalGrid />
      <StarBackground />
      <VintageOverlay />
      
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-${currentIndustry.color}-900/15 blur-[120px] rounded-full transition-colors duration-700`} />

      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-blue-800/50 bg-blue-900/20 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"/>
            <span className="text-xs font-mono text-blue-200 uppercase tracking-widest">System Modules Online</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Industries We <span className={`text-blue-700 font-extrabold`}>Power</span>
          </motion.h2>
        </div>

        <div className="w-full bg-[#0a1128]/80 border border-blue-800/30 rounded-3xl backdrop-blur-xl shadow-2xl shadow-blue-900/10 overflow-hidden flex flex-col">
          
          <div className="flex flex-wrap items-center border-b border-blue-800/30 bg-[#0a1128]/90 overflow-x-auto no-scrollbar">
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
            <div className="hidden md:flex flex-1 justify-end items-center px-6 gap-2 text-blue-800">
               <div className="h-1 w-1 bg-blue-700 rounded-full" />
               <div className="h-1 w-1 bg-blue-700 rounded-full" />
               <div className="h-1 w-1 bg-blue-700 rounded-full" />
            </div>
          </div>

          <div className="p-6 md:p-12 min-h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.id}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full"
              >
                
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2">{currentIndustry.title}</h3>
                    <div className={`h-1 w-20 bg-${currentIndustry.color}-500 rounded-full mb-4 shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />
                    <p className="text-lg text-blue-100/70 leading-relaxed">
                      {currentIndustry.description}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {currentIndustry.features.map((feature, idx) => (
                      <FeatureCard 
                        key={idx}
                        index={idx}
                        title={feature.title}
                        desc={feature.desc}
                        icon={feature.icon}
                        color={currentIndustry.color}
                      />
                    ))}
                  </div>
                  
                  <div className="pt-4">
                     <button className={`group flex items-center gap-2 text-${currentIndustry.color}-400 font-semibold text-sm hover:text-white transition-colors`}>
                        VIEW CASE STUDIES 
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                     </button>
                  </div>
                </div>

                <div className="lg:col-span-7 relative h-full min-h-[300px] lg:min-h-[400px]">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border border-blue-700/30 bg-[#0a1128] group shadow-2xl shadow-black/50">
                    
                    <img 
                      src={currentIndustry.image} 
                      alt={currentIndustry.title}
                      className="w-full h-full object-cover opacity-70 mix-blend-screen grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-90`} />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                       <div className="px-2 py-1 bg-blue-950/80 backdrop-blur-md border border-blue-500/20 rounded text-[10px] text-blue-200 font-mono">
                          SYS_ID: {currentIndustry.id.toUpperCase()}
                       </div>
                    </div>

                    <motion.div 
                        className={`absolute inset-x-0 h-[2px] bg-${currentIndustry.color}-400/50 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10`}
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  <div className={`absolute -bottom-2 -right-2 w-24 h-24 border-b-2 border-r-2 border-${currentIndustry.color}-500/30 rounded-br-3xl`} />
                  <div className={`absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-${currentIndustry.color}-500/30 rounded-tl-3xl`} />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CyberIndustryShowcase;