"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  BrainCircuit, // Predictive
  ShieldCheck,  // Governance
  Database,     // Engineering
  BarChart3,    // BI
  Cpu,          // MLOps
  CloudLightning, // AaaS
  CheckCircle2,
  ArrowRight,
  Layers
} from "lucide-react";

// --- Data ---
const solutions = [
  {
    id: "predictive",
    title: "Predictive Intelligence",
    subtitle: "Turn historical data into future certainty.",
    desc: "We help organizations forecast demand, risk, and behavior with custom ML models integrated directly into your workflows.",
    icon: BrainCircuit,
    color: "from-indigo-500 to-purple-500",
    border: "group-hover:border-indigo-500/50",
    shadow: "group-hover:shadow-indigo-500/20",
    capabilities: [
      "Forecast demand, churn & anomalies",
      "Predict customer behavior & product performance",
      "Custom ML models tailored to KPIs",
      "Workflow-integrated predictions"
    ],
    outcomes: ["Reduced Risk", "Revenue Accuracy", "Data-driven Planning", "Early Warning Systems"]
  },
  {
    id: "governance",
    title: "Strategy & Governance",
    subtitle: "A future-proof foundation built on trust.",
    desc: "We deliver enterprise architectures and compliance frameworks that ensure your data is secure, standardized, and democratized.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-emerald-500/20",
    capabilities: [
      "Enterprise data architecture design",
      "Governance frameworks & access controls",
      "Compliance-ready policies (GDPR, SOC2)",
      "Data quality & lineage systems"
    ],
    outcomes: ["Trusted Data", "Standardized Metrics", "Compliance Ready", "Democratization"]
  },
  {
    id: "engineering",
    title: "Modern Data Engineering",
    subtitle: "Scalable pipelines. Real-time availability.",
    desc: "Design, build, and optimize high-performance data lakes and pipelines that handle the scale of modern enterprise data.",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/20",
    capabilities: [
      "Real-time & batch pipeline development",
      "Data lakehouse architecture",
      "Cloud migration (AWS | Azure | GCP)",
      "ETL/ELT automation"
    ],
    outcomes: ["Faster Availability", "Scalable Stack", "Automated Pipelines", "Reduced Overhead"]
  },
  {
    id: "bi",
    title: "BI & Advanced Analytics",
    subtitle: "Decisions based on facts, not guesswork.",
    desc: "Enable your teams with executive dashboards, self-service analytics layers, and automated reporting systems.",
    icon: BarChart3,
    color: "from-amber-500 to-orange-500",
    border: "group-hover:border-amber-500/50",
    shadow: "group-hover:shadow-amber-500/20",
    capabilities: [
      "Executive dashboards & KPIs",
      "Self-service analytics layers",
      "Embedded analytics for tools",
      "Visualization systems for all depts"
    ],
    outcomes: ["Fact-based Decisions", "Unified Metrics", "Better Alignment", "Real-time Visibility"]
  },
  {
    id: "mlops",
    title: "MLOps & AI Automation",
    subtitle: "Operationalizing AI from lab to production.",
    desc: "We implement rigorous CI/CD pipelines for machine learning to ensure your models are scalable, reliable, and fair.",
    icon: Cpu,
    color: "from-rose-500 to-pink-500",
    border: "group-hover:border-rose-500/50",
    shadow: "group-hover:shadow-rose-500/20",
    capabilities: [
      "Model versioning & registry",
      "Automated training pipelines",
      "CI/CD for ML models",
      "Monitoring drift & fairness"
    ],
    outcomes: ["Faster Deployment", "Production Reliability", "Consistent Performance", "Reduced Downtime"]
  },
  {
    id: "aaas",
    title: "Analytics-as-a-Service",
    subtitle: "Your managed data team, on demand.",
    desc: "A fully managed analytics function delivering monthly insights, reporting, and predictive models without the hiring overhead.",
    icon: CloudLightning,
    color: "from-violet-500 to-fuchsia-500",
    border: "group-hover:border-violet-500/50",
    shadow: "group-hover:shadow-violet-500/20",
    capabilities: [
      "Fully managed analytics environment",
      "Monthly reporting & dashboards",
      "On-demand predictive models",
      "Dedicated data team support"
    ],
    outcomes: ["No Overhead", "Zero Infrastructure Worries", "Faster Insights", "Plug-and-Play"]
  },
];

// --- Sub-Components (Abstract Visuals) ---

const VisualPlaceholder = ({ id, color }: { id: string, color: string }) => {
  return (
    <div className="relative w-full h-32 mb-6 rounded-xl bg-gray-950/50 border border-white/5 overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      {id === 'predictive' && (
        <svg className="w-full h-20 px-4 overflow-visible">
          <motion.path 
            d="M0 60 C 50 60, 80 40, 120 40 S 180 10, 250 5" 
            fill="none" 
            stroke="url(#grad_pred)" 
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="grad_pred" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <motion.circle cx="250" cy="5" r="4" fill="#a855f7" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
        </svg>
      )}

      {id === 'governance' && (
        <div className="relative flex items-center justify-center">
            <motion.div className="absolute w-20 h-20 border-2 border-emerald-500/20 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.div className="absolute w-14 h-14 border border-emerald-500/40 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 10, ease: "linear", repeat: Infinity }} />
            <ShieldCheck className="w-8 h-8 text-emerald-400 relative z-10" />
        </div>
      )}

      {id === 'engineering' && (
         <div className="flex gap-2 items-end h-16">
            {[30, 60, 45, 80, 50].map((h, i) => (
                <motion.div 
                    key={i}
                    className="w-4 bg-blue-500/40 rounded-t-sm"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                />
            ))}
         </div>
      )}

      {id === 'bi' && (
        <div className="grid grid-cols-2 gap-2 w-24">
             <motion.div className="h-8 bg-amber-500/20 rounded" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
             <motion.div className="h-8 bg-amber-500/40 rounded" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
             <motion.div className="col-span-2 h-8 bg-amber-500/30 rounded" />
        </div>
      )}

      {id === 'mlops' && (
        <div className="flex items-center gap-2">
            <motion.div className="w-3 h-3 rounded-full bg-rose-500" animate={{ x: [0, 60, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            <div className="w-20 h-1 bg-gray-700 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-500/50 w-full" />
            </div>
            <Cpu className="w-6 h-6 text-rose-400" />
        </div>
      )}

      {id === 'aaas' && (
        <div className="relative">
             <CloudLightning className="w-10 h-10 text-violet-400" />
             <motion.div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
        </div>
      )}
    </div>
  );
};

const SolutionCard = ({ data }: { data: any }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={`group relative rounded-[2rem] border border-white/5 bg-gray-900/40 p-8 hover:bg-gray-900/60 transition-all duration-500 ${data.border} ${data.shadow} hover:shadow-2xl overflow-hidden`}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          400px circle at ${mouseX}px ${mouseY}px,
                          rgba(255, 255, 255, 0.05),
                          transparent 80%
                        )
                    `,
                }}
            />

            {/* Inner Content */}
            <div className="relative z-10 flex flex-col h-full">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${data.color} bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm border border-white/10 shadow-lg`}>
                        <div className="bg-black/20 p-2 rounded-xl">
                             <data.icon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                {/* Animated Visual Area */}
                <VisualPlaceholder id={data.id} color={data.color} />

                {/* Text */}
                <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-700">{data.title}</h3>
                <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mb-4 uppercase tracking-wider">
                    {data.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {data.desc}
                </p>

                <div className="w-full h-px bg-gray-800 mb-6" />

                {/* Capabilities */}
                <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Capabilities</h4>
                    <ul className="space-y-2">
                        {data.capabilities.map((cap: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className={`mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r ${data.color}`} />
                                {cap}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Outcomes */}
                <div className="mt-auto">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                        {data.outcomes.map((out: string, i: number) => (
                            <span 
                                key={i} 
                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-800/50 border border-gray-700/50 text-xs font-medium text-gray-300 group-hover:bg-gray-800 group-hover:border-gray-600 transition-colors"
                            >
                                <CheckCircle2 className={`w-3 h-3 mr-1.5 text-emerald-500`} />
                                {out}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function CoreSolutions() {
  const darkBg = "#0A0D1E";

  return (
    <section 
        className="relative w-full py-24 lg:py-32 overflow-hidden" 
        style={{ backgroundColor: darkBg }}
    >
        {/* --- Background Ambient --- */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/20 blur-[150px] opacity-60" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8"
                >
                    <Layers className="w-3 h-3" />
                    <span>Our Core Solutions</span>
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
                >
                    Solutions configured for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-400 to-blue-700">
                        maximum business impact.
                    </span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 leading-relaxed"
                >
                    Each solution ties directly to your outcome goals. We don't just build technology; we build revenue engines and risk shields.
                </motion.p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {solutions.map((sol, index) => (
                    <SolutionCard key={sol.id} data={sol} />
                ))}
            </div>

            {/* Bottom Connect */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-20 text-center"
            >
                <a 
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600  to-blue-700 font-pj rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:-translate-y-1"
                >
                    <span className="mr-2">Explore All Technical Services</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </motion.div>

        </div>
    </section>
  );
}