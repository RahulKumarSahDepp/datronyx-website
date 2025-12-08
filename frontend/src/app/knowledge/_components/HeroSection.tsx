"use client";

import React from "react";
// 1. Import 'Variants' type
import { motion, Variants } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  FileText, 
  Lightbulb, 
  ArrowRight, 
  Sparkles,
  Cpu,
  TrendingUp,
  BrainCircuit
} from "lucide-react";

// --- Animation Variants ---

// 2. Apply ': Variants' type here
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

// 3. Apply ': Variants' type here
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// --- Sub-Component: Floating Insight Card ---

// 4. Define the Props Interface
interface InsightCardProps {
  icon: React.ElementType; // Represents the Lucide icon component
  type: string;
  title: string;
  color: string;
  position: React.CSSProperties; // Represents style object { top: '...', left: '...' }
  delay: number;
}

// 5. Apply the Interface to the component
const InsightCard = ({ icon: Icon, type, title, color, position, delay }: InsightCardProps) => (
  <motion.div
    className="absolute z-10 p-4 rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-xl shadow-2xl w-64"
    style={position}
    initial={{ opacity: 0, y: 50, rotateX: 10 }}
    animate={{ 
      opacity: 1, 
      y: [0, -15, 0],
      rotateX: [10, 0, 10]
    }}
    transition={{ 
      opacity: { duration: 0.5, delay: delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay },
      rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay }
    }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-lg bg-${color}-500/20 text-${color}-400`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className={`text-xs font-bold uppercase tracking-wider text-${color}-300`}>
        {type}
      </span>
    </div>
    <h4 className="text-white text-sm font-semibold leading-relaxed">
      {title}
    </h4>
    <div className="mt-3 flex items-center gap-2">
      <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
        <div className={`h-full w-2/3 bg-${color}-500 rounded-full`} />
      </div>
      <span className="text-[10px] text-gray-500">Read</span>
    </div>
  </motion.div>
);

const KnowledgeVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />

      {/* Abstract Network Lines (The "Brain") */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <motion.circle cx="50%" cy="50%" r="150" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="10 10" 
           animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle cx="50%" cy="50%" r="220" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.5"
           animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Floating Cards representing content */}
      <InsightCard 
        icon={BrainCircuit} 
        type="Article" 
        title="The Future of Generative AI in Enterprise Data Stacks" 
        color="indigo" 
        position={{ top: '15%', right: '10%' }} 
        delay={0} 
      />
      
      <InsightCard 
        icon={TrendingUp} 
        type="Report" 
        title="Q3 2025 Data Governance Trends & Benchmarks" 
        color="emerald" 
        position={{ top: '40%', left: '5%' }} 
        delay={1.5} 
      />
      
      <InsightCard 
        icon={Cpu} 
        type="Case Study" 
        title="Scaling MLOps: How we reduced latency by 40%" 
        color="amber" 
        position={{ bottom: '15%', right: '20%' }} 
        delay={0.8} 
      />

    </div>
  );
};

// --- Main Component ---

export default function KnowledgeHero() {
  const darkBg = "#0A0D1E";

  const topics = ["GenAI", "Data Mesh", "Governance", "MLOps", "Cloud Migration"];

  return (
    <section 
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 lg:pt-0"
      style={{ backgroundColor: darkBg }}
    >
      {/* --- Background Texture --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT: Content & Search --- */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen className="w-3 h-3" />
              <span>Datronyx Knowledge Hub</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Empowering Decisions <br />
              Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Knowledge.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-10 leading-relaxed">
              Stay ahead with actionable insights, expert perspectives, and best practices in data, analytics, AI, and enterprise technology. We equip organizations to make smarter, faster, and more confident decisions.
            </motion.p>

            {/* Search Bar - Main CTA */}
            <motion.div variants={fadeUp} className="relative max-w-lg mb-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500" />
              <div className="relative flex items-center bg-gray-900 border border-white/10 rounded-full overflow-hidden shadow-xl">
                <div className="pl-6 text-gray-400">
                  <Search className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search articles, whitepapers, guides..." 
                  className="w-full bg-transparent px-4 py-4 text-white placeholder-gray-500 focus:outline-none"
                />
                <button className="mr-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-colors text-sm">
                  Search
                </button>
              </div>
            </motion.div>

            {/* Topics Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Trending:</span>
              {topics.map((topic, i) => (
                <button 
                  key={i}
                  className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  #{topic}
                </button>
              ))}
            </motion.div>

          </motion.div>

          {/* --- RIGHT: 3D Visual --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <KnowledgeVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}