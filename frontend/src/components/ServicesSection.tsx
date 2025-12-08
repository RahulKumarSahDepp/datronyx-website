"use client";

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import {
    LineChart, Code, Cpu, AlertTriangle, PieChart, TrendingUp, Database, Layers, GitBranch, Lightbulb, Bot, ArrowRight, Terminal, Calendar
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface ServiceCardType {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    points: string[];
    link: string;
}

interface ServiceCategory {
    id: string;
    name: string;
    icon: React.ElementType;
    description: string;
    cards: ServiceCardType[];
}

// --- DATA STRUCTURES (Professional & Impact-Driven) ---
const serviceCategories: ServiceCategory[] = [
    {
        id: "analytics",
        name: "Data Analytics",
        icon: LineChart,
        description: "Turning raw signals into executive clarity.",
        cards: [
            {
                title: "Decision Intelligence",
                subtitle: "Strategic Analytics",
                icon: PieChart,
                points: [
                    "Transform chaotic raw data into executive-grade decision matrices.",
                    "Design bespoke KPIs that strictly align with business velocity.",
                    "Deploy statistical modeling to uncover hidden revenue drivers.",
                ],
                link: "/services",
            },
            {
                title: "Visual Command Center",
                subtitle: "BI & Dashboards",
                icon: TrendingUp,
                points: [
                    "Engineer real-time dashboards for millisecond decision latency.",
                    "Create interactive visual narratives for stakeholder reporting.",
                    "Implement automated anomaly alerts across all metrics.",
                ],
                link: "/services",
            },
            {
                title: "Entropy Reduction",
                subtitle: "Data Quality Assurance",
                icon: AlertTriangle,
                points: [
                    "Algorithmic assessment of data consistency and lineage.",
                    "Automated sanitization pipelines to eliminate redundancies.",
                    "Establish 'Golden Record' standards for enterprise trust.",
                ],
                link: "/services",
            },
        ],
    },
    {
        id: "engineering",
        name: "Data Engineering",
        icon: Code,
        description: "Architecting the backbone of your digital reality.",
        cards: [
            {
                title: "Pipeline Architecture",
                subtitle: "Integration & ETL",
                icon: Database,
                points: [
                    "Fuse disjointed silos into a unified Data Lakehouse.",
                    "Design self-healing ETL/ELT pipelines for 99.9% uptime.",
                    "Optimize data throughput for high-frequency analysis.",
                ],
                link: "/services",
            },
            {
                title: "Semantic Modeling",
                subtitle: "Data Structuring",
                icon: Layers,
                points: [
                    "Design dimensional models (Star/Snowflake) for rapid querying.",
                    "Structure unstructured data lakes for consumption.",
                    "Enforce strict typing and schema validation.",
                ],
                link: "/services",
            },
            {
                title: "Cloud Infrastructure",
                subtitle: "Scalable Systems",
                icon: GitBranch,
                points: [
                    "Serverless architecture design for infinite scaling.",
                    "Cost-optimization strategies for cloud warehousing.",
                    "Implementation of RBAC and secure governance layers.",
                ],
                link: "/services",
            },
        ],
    },
    {
        id: "ai",
        name: "AI & Data Science",
        icon: Cpu,
        description: "Predicting the future to change the present.",
        cards: [
            {
                title: "Predictive Engines",
                subtitle: "Machine Learning",
                icon: Lightbulb,
                points: [
                    "Build regression and classification models for demand forecasting.",
                    "Develop recommendation systems to maximize LTV.",
                    "Run Monte Carlo simulations for risk assessment.",
                ],
                link: "/services",
            },
            {
                title: "Generative Systems",
                subtitle: "LLM & Automation",
                icon: Bot,
                points: [
                    "Deploy custom LLM agents on your proprietary data.",
                    "Automate complex document analysis and extraction.",
                    "Create conversational interfaces for internal knowledge bases.",
                ],
                link: "/services",
            },
        ],
    },
];

// --- ANIMATION VARIANTS ---
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- COMPONENT: SPOTLIGHT CARD ---
// A card that tracks mouse movement to create a spotlight effect
const SpotlightCard = ({ cardData }: { cardData: ServiceCardType }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const IconComponent = cardData.icon;

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            variants={cardVariants}
            className="group relative h-full rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden"
        >
            {/* Spotlight Effect Layer */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`,
                }}
            />
            
            {/* Content Container */}
            <div className="relative h-full p-6 md:p-8 flex flex-col z-10">
                
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <p className="text-xs font-mono text-indigo-400 mb-1 uppercase tracking-wider">{cardData.subtitle}</p>
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                            {cardData.title}
                        </h3>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300 shadow-lg">
                        <IconComponent size={20} />
                    </div>
                </div>

                {/* Points */}
                <ul className="space-y-4 mb-8 flex-grow">
                    {cardData.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 flex-shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Footer/Link */}
                <div className="mt-auto pt-6 border-t border-slate-800 group-hover:border-indigo-500/30 transition-colors">
                    <Link
                        href={cardData.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors group/link"
                    >
                        Explore Solution 
                        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};


export default function ServicesOverviewSection() {
    const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    
    const activeService = serviceCategories.find(s => s.id === activeTab);

    return (
        <section 
            ref={ref}
            className="relative py-24 md:py-32 overflow-hidden bg-[#020617]"
        >
            
            {/* --- BACKGROUND LAYERS --- */}
            {/* Blueprint Grid */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />


            {/* --- CONTENT WRAPPER --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                
                {/* Header */}
                <motion.div
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={sectionVariants}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-950/30 border border-indigo-500/20 backdrop-blur-md">
                        <Terminal size={14} className="text-indigo-400" />
                        <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">Service Architecture</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        We don't just analyze data.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                            We Engineer Intelligence.
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Comprehensive data solutions designed to scale from startup agility to enterprise complexity.
                    </p>
                </motion.div>
                
                {/* -------------------- 1. TAB NAVIGATION -------------------- */}
                <div className="flex justify-center mb-16">
                    <div className="p-1 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-800 inline-flex">
                        {serviceCategories.map((category) => {
                            const isActive = category.id === activeTab;
                            const CategoryIcon = category.icon;
                            
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`
                                        relative px-6 py-3 rounded-lg flex items-center gap-2 font-medium text-sm transition-all duration-300
                                        ${isActive 
                                            ? 'text-white shadow-lg' 
                                            : 'text-slate-400 hover:text-slate-200'
                                        }
                                    `}
                                >
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 bg-indigo-600 rounded-lg"
                                            layoutId="activeTabBackground"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <CategoryIcon size={16} />
                                        {category.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* -------------------- 2. CARDS GRID -------------------- */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab} 
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* If only 2 cards, we center them visually */}
                        {activeService?.cards.map((card, index) => (
                            <div key={index} className={activeService.cards.length === 2 && index === 0 ? "md:col-start-1 lg:col-start-1 lg:col-end-2" : ""}>
                                <SpotlightCard cardData={card} />
                            </div>
                        ))}
                        
                        {/* Layout fix for 2 items to center them nicely on desktop */}
                        {activeService?.cards.length === 2 && (
                             <div className="hidden md:flex items-center justify-center p-8 text-center opacity-50">
                                <div className="space-y-4">
                                    <div className="mx-auto w-12 h-12 rounded-full border border-dashed border-slate-600 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-slate-600 rounded-full animate-ping" />
                                    </div>
                                    <p className="text-sm text-slate-500 font-mono">More modules coming soon...</p>
                                </div>
                             </div>
                        )}
                    </motion.div>
                </AnimatePresence>
                
                {/* -------------------- 3. CTA TERMINAL -------------------- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
                >
                    {/* Decorative Top Bar (Like a window) */}
                    <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        <div className="ml-auto text-xs font-mono text-slate-500">consultation.sh</div>
                    </div>

                    <div className="grid md:grid-cols-2 items-center">
                        
                        {/* Text Content */}
                        <div className="p-8 md:p-12 space-y-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    System Optimization Required?
                                </h3>
                                <p className="text-indigo-400 font-mono text-sm">
                                    {'>'} Initiating expert consultation protocol...
                                </p>
                            </div>

                            <p className="text-slate-400 leading-relaxed">
                                Don't let bad data architecture slow down your growth. Schedule a high-level architectural review with our lead engineers today.
                            </p>

                            <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg overflow-hidden transition-all hover:bg-indigo-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    <Calendar size={18} />
                                    Book Architecture Review
                                </span>
                            </button>
                        </div>

                        {/* Visual Side (Abstract Tech Visualization) */}
                        <div className="relative h-full min-h-[300px] bg-slate-950/50 flex items-center justify-center overflow-hidden">
                             {/* Abstract Grid Map */}
                             <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                             
                             {/* Central Glowing Element */}
                             <div className="relative z-10 text-center space-y-4">
                                <div className="relative mx-auto w-24 h-24 bg-indigo-500/10 rounded-full border border-indigo-500/50 flex items-center justify-center animate-pulse-slow">
                                    <div className="absolute inset-0 rounded-full border border-indigo-400/30 animate-ping" style={{ animationDuration: '3s' }} />
                                    <Terminal size={40} className="text-indigo-400" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-mono text-indigo-300">STATUS: ONLINE</div>
                                    <div className="text-xs font-mono text-slate-500">Ready for connection</div>
                                </div>
                             </div>

                             {/* Floating Elements */}
                             <motion.div 
                                animate={{ y: [-10, 10, -10] }} 
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 p-3 bg-slate-900 border border-slate-700 rounded-lg shadow-xl"
                             >
                                <Database size={20} className="text-emerald-400" />
                             </motion.div>
                             <motion.div 
                                animate={{ y: [10, -10, 10] }} 
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-10 p-3 bg-slate-900 border border-slate-700 rounded-lg shadow-xl"
                             >
                                <Cpu size={20} className="text-cyan-400" />
                             </motion.div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}