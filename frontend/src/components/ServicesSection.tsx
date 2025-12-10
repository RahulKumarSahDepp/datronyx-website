"use client";

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import {
    BarChart3, 
    Cable, 
    Zap, 
    SearchCheck, 
    LayoutDashboard, 
    FileSpreadsheet,
    BrainCircuit,
    Bot,
    ArrowRight, 
    MessageSquare,
    Sparkles,
    TrendingUp
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface ServiceCardType {
    title: string;
    tag: string;
    icon: React.ElementType;
    description: string; // Plain English description
    benefit: string;     // The "So What?" for the CEO
    link: string;
}

interface ServiceCategory {
    id: string;
    name: string;
    icon: React.ElementType;
    headline: string;
    cards: ServiceCardType[];
}

// --- DATA: TRANSLATED FOR BUSINESS LEADERS ---
const serviceCategories: ServiceCategory[] = [
    {
        id: "clarity",
        name: "Make Sense of Data",
        icon: LayoutDashboard,
        headline: "Stop guessing. We turn your spreadsheets into clear answers.",
        cards: [
            {
                title: "Automated Dashboards",
                tag: "Business Intelligence",
                icon: BarChart3,
                description: "We replace your manual Excel reporting with live screens that update themselves.",
                benefit: "Save 20+ hours a week on manual reporting.",
                link: "/services/bi",
            },
            {
                title: "Cleaning Messy Data",
                tag: "Data Quality",
                icon: SearchCheck,
                description: "You have duplicates, typos, and missing fields. We fix them so your numbers are actually right.",
                benefit: "Trust your reports 100%, finally.",
                link: "/services/quality",
            },
            {
                title: "The 'Single Truth'",
                tag: "Centralization",
                icon: FileSpreadsheet,
                description: "We combine data from Sales, Marketing, and Finance into one unified view.",
                benefit: "No more arguing about whose numbers are correct.",
                link: "/services/warehousing",
            },
        ],
    },
    {
        id: "automation",
        name: "Connect & Automate",
        icon: Cable,
        headline: "Stop copy-pasting. We make your software talk to each other.",
        cards: [
            {
                title: "Connecting Your Apps",
                tag: "Integrations",
                icon: Cable,
                description: "We build bridges between your CRM, Accounting, and Inventory software.",
                benefit: "Data flows automatically. No human error.",
                link: "/services/engineering",
            },
            {
                title: "Real-Time Alerts",
                tag: "Monitoring",
                icon: Zap,
                description: "Get a WhatsApp or Slack message the second a metric drops or a machine fails.",
                benefit: "Fix problems before they cost you money.",
                link: "/services/monitoring",
            },
            {
                title: "Scalable Infrastructure",
                tag: "Cloud Setup",
                icon: LayoutDashboard,
                description: "We set up secure cloud storage that grows with you, so your system never crashes.",
                benefit: "Enterprise-grade security without the IT team.",
                link: "/services/cloud",
            },
        ],
    },
    {
        id: "prediction",
        name: "Predict the Future",
        icon: BrainCircuit,
        headline: "Don't just look back. See what's coming next.",
        cards: [
            {
                title: "Sales Forecasting",
                tag: "Predictive AI",
                icon: TrendingUp,
                description: "We analyze years of history to tell you exactly how much inventory to buy for next month.",
                benefit: "Cut inventory costs and prevent stockouts.",
                link: "/services/forecasting",
            },
            {
                title: "AI Assistants",
                tag: "Generative AI",
                icon: Bot,
                description: "Imagine a Chatbot that knows your entire company history and answers employee questions instantly.",
                benefit: "Instant training and support for your team.",
                link: "/services/gen-ai",
            },
        ],
    },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// --- SPOTLIGHT CARD COMPONENT ---
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

    const IconComponent = cardData.icon;

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            variants={cardVariants}
            className="group relative h-full rounded-3xl border border-white/10 bg-[#0B0F19] overflow-hidden hover:border-white/20 transition-colors"
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.1), transparent 40%)`,
                }}
            />
            
            <div className="relative h-full p-8 flex flex-col z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <IconComponent size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-400 border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                        {cardData.tag}
                    </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
                    {cardData.title}
                </h3>
                
                {/* Plain English Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {cardData.description}
                </p>

                {/* The "Benefit" Box */}
                <div className="mt-auto p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 group-hover:bg-blue-500/10 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles size={12} className="text-blue-400" />
                        <span className="text-xs font-bold text-blue-300 uppercase">The Outcome</span>
                    </div>
                    <p className="text-sm font-medium text-slate-200">
                        {cardData.benefit}
                    </p>
                </div>

                {/* Link */}
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-sm font-semibold text-slate-500 group-hover:text-white transition-colors">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};


export default function ServicesSimplified() {
    const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
    const activeService = serviceCategories.find(s => s.id === activeTab);

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#020617]">
            
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                
                {/* --- HEADER --- */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Our Expertise</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        Complex Data. <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                            Simple Solutions.
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        You don't need to know Python or SQL. You just need to know what you want to achieve. We handle the rest.
                    </p>
                </div>
                
                {/* --- NAVIGATION --- */}
                <div className="flex justify-center mb-12">
                    <div className="p-1.5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 inline-flex gap-1 overflow-x-auto max-w-full">
                        {serviceCategories.map((category) => {
                            const isActive = category.id === activeTab;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`
                                        relative px-6 py-3 rounded-xl flex items-center gap-3 font-medium text-sm transition-all duration-300 whitespace-nowrap
                                        ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'}
                                    `}
                                >
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 bg-blue-600 shadow-lg shadow-blue-900/50 rounded-xl"
                                            layoutId="activeTabBg"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <category.icon size={18} />
                                        {category.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* --- HEADLINE FOR ACTIVE TAB --- */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab + "-headline"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center mb-12"
                    >
                        <p className="text-xl md:text-2xl font-medium text-blue-200">
                            "{activeService?.headline}"
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* --- CARDS GRID --- */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab} 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {activeService?.cards.map((card, index) => (
                            <SpotlightCard key={index} cardData={card} />
                        ))}

                        {/* If only 2 cards, show a "Coming Soon" or "Custom" card to fill grid */}
                        {activeService?.cards.length === 2 && (
                             <div className="group h-full rounded-3xl border border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center p-8 text-center hover:bg-white/[0.04] transition-colors">
                                <div className="p-4 rounded-full bg-slate-900 mb-4">
                                    <MessageSquare size={24} className="text-slate-500" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Need something else?</h3>
                                <p className="text-sm text-slate-500 mb-6">
                                    We build custom solutions for unique problems.
                                </p>
                                <button className="px-6 py-2 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors">
                                    Let's Talk
                                </button>
                             </div>
                        )}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}