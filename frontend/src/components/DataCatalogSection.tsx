// components/DataCatalogSection.tsx
"use client";

import { Code, Database, Zap, Search, Server, TrendingUp, Cpu } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- 1. SQL Code with Datronyx-specific highlighting ---
const SQL_CODE_HIGHLIGHTED = (
  <>
    {/* Keywords: text-indigo-400 | Columns: text-green-300 | Tables: text-yellow-300 | Operators/Literals: text-red-300 */}
    <span className="text-indigo-400">SELECT</span>
    {"\n  "}<span className="text-green-300">c.company_id</span>,
    {"\n  "}<span className="text-green-300">c.ai_readiness_score</span>, {/* New Datronyx metric */}
    {"\n  "}<span className="text-green-300">c.total_investment_usd</span>,
    {"\n  "}<span className="text-green-300">c.data_governance_rating</span>, {/* New Datronyx metric */}
    {"\n  "}<span className="text-green-300">g.headcount</span>,
    {"\n  "}<span className="text-green-300">g.headcount_qoq_pct</span>,
    {"\n  "}<span className="text-green-300">t.days_since_last_fundraise</span>,
    {"\n  "}<span className="text-green-300">t.monthly_visitor_qoq_pct</span>
    {"\n"}<span className="text-indigo-400">FROM</span>
    {"\n  "}<span className="text-yellow-300">datronyx_hardened_profiles c</span> {/* Table renamed to be Datronyx-specific */}
    {"\n"}<span className="text-indigo-400">JOIN</span>
    {"\n  "}<span className="text-yellow-300">companies_linkedin_growth g ON c.company_id = g.company_id</span>
    {"\n"}<span className="text-indigo-400">JOIN</span>
    {"\n  "}<span className="text-yellow-300">companies_monthly_web_traffic_growth t ON c.company_id = t.company_id</span>
    {"\n"}<span className="text-indigo-400">WHERE</span>
    {"\n  "}<span className="text-green-300">g.headcount</span> <span className="text-red-300">&gt; 50</span>
    {"\n  "}<span className="text-indigo-400">AND</span> <span className="text-green-300">c.ai_readiness_score</span> <span className="text-red-300">&gt; 0.85</span> {/* Filter on the new metric */}
    {"\n  "}<span className="text-indigo-400">AND</span> <span className="text-green-300">t.days_since_last_fundraise</span> <span className="text-red-300">&gt; 730</span>
    {"\n  "}<span className="text-indigo-400">AND</span> <span className="text-green-300">c.total_funding_raised_usd</span> <span className="text-red-300">&gt; 50000000</span>
    {"\n  "}<span className="text-indigo-400">AND</span> <span className="text-green-300">c.largest_headcount_country</span> <span className="text-red-300">= 'USA'</span>
    {"\n  "}<span className="text-indigo-400">AND</span> <span className="text-green-300">t.monthly_visitor_qoq_pct</span> <span className="text-red-300">&gt; 5</span>;
  </>
);
// ---------------------------------------------

// --- 2. Content updated for Datronyx's focus ---
const featureCards = [
  {
    title: "Use this for Intelligent Control:",
    items: [
      "Real-time governance over your AI data pipeline.", 
      "On-demand data enrichment and API-driven access.",
    ],
  },
  {
    title: "What's included in the Hardened Data:",
    items: [
      "6M+ validated company profiles.", 
      "AI Readiness Score & Predictive growth metrics.", 
      "Complete historical funding and M&A data.",
    ],
  },
  {
    title: "Perfect for Mission-Critical Systems:",
    items: [
      "AI Agents for recruiting, sales, and predictive trading.", 
      "Strategic Market Intelligence and competitive analysis.", 
      "Advanced Custom LLM development & fine-tuning.",
    ],
  },
];

// --- 3. Flow Data (Icons are now only for the items) ---
const flowSources = [
    { label: "Validated Source Data", icon: Database, color: "text-indigo-400" },
    { label: "Datronyx Processing Engine", icon: Zap, color: "text-fuchsia-400" },
    { label: "Proprietary Validation Layer", icon: Search, color: "text-blue-400" },
];

const flowDestinations = [
    { label: "Your Data Warehouse", icon: Server, color: "text-cyan-400" },
    { label: "Real-Time REST API", icon: Code, color: "text-red-400" },
    { label: "AI Agent Development (SDK)", icon: Cpu, color: "text-green-400" },
];

const flowVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5
        }
    }),
};

// Component for rendering the flow item
const FlowItem = ({ label, Icon, color, isRight = false, index }: { label: string, Icon: any, color: string, isRight?: boolean, index: number }) => (
    <motion.div
        custom={index}
        variants={flowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={`flex items-center space-x-4 ${isRight ? 'flex-row-reverse space-x-reverse' : ''} relative`}
    >
        <Icon className={`w-8 h-8 ${color} transition-colors duration-300`} />
        <span className="text-white text-lg font-medium">{label}</span>
    </motion.div>
);

// --- 4. Animated Connection Lines ---
const AnimatedConnections = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Left to Center Lines */}
            {/* Adjusted Y coordinates for better alignment with flow items */}
            {[25, 50, 75].map((y, index) => (
                <motion.path
                    key={`l-${index}`}
                    d={`M 15 ${y} C 30 ${y}, 30 50, 48 50`} /* Smoother curve into the center */
                    stroke="#4F46E5" // Indigo
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                />
            ))}
            {/* Center to Right Lines */}
            {/* Adjusted Y coordinates for better alignment with flow items */}
            {[25, 50, 75].map((y, index) => (
                <motion.path
                    key={`r-${index}`}
                    d={`M 52 50 C 70 50, 70 ${y}, 85 ${y}`} /* Smoother curve out of the center */
                    stroke="#4F46E5" // Indigo
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                />
            ))}
        </svg>
    </div>
);


export default function DataCatalogSection() {
  const darkBg = 'bg-[#0A061F]';
  const accentColor = 'text-indigo-400';

  return (
    <section className={`py-24 md:py-36 ${darkBg} relative overflow-hidden`}>
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none">
          <div className="w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[150px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Custom Data Intelligence. Delivered Instantly.
            </span>
          </h2>
          <p className={`text-lg text-gray-400 mt-3 max-w-3xl mx-auto`}>
            All our enterprise-grade data and AI profiles are refreshed monthly and available through flexible APIs or bulk delivery.
          </p>
        </div>

        {/* Main Content: Code Block and Data Flow Visualization */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
            
            {/* Animated Connection Lines (Visual path) */}
            <AnimatedConnections />
            
            {/* Left Flow Icons */}
            {/* Adjusted spacing to be more visually balanced */}
            <div className="flex flex-col justify-between space-y-10 lg:space-y-16 mb-8 lg:mb-0 lg:w-1/5 relative z-10 py-4"> {/* Added padding for alignment */}
                {flowSources.map((item, index) => (
                    <FlowItem key={index} label={item.label} Icon={item.icon} color={item.color} index={index} />
                ))}
            </div>

            {/* Center: Code Block (The core fix is here) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-3/5 relative bg-gray-900/80 rounded-2xl shadow-3xl p-6 md:p-8 border-2 border-indigo-700/50 
                           transition-all duration-500 hover:border-indigo-400/80 hover:shadow-indigo-500/30 z-20"
            >
                {/* Subtle border glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-10 transition-opacity duration-500 bg-indigo-500 blur-2xl"></div>
                <Code className={`w-6 h-6 ${accentColor} absolute top-4 right-4 opacity-70`} />
                <pre className={`text-sm md:text-base font-mono overflow-x-auto text-white leading-relaxed whitespace-pre-wrap`}>
                    {/* Render the manually highlighted code */}
                    {SQL_CODE_HIGHLIGHTED}
                </pre>
            </motion.div>

            {/* Right Flow Icons */}
            {/* Adjusted spacing to be more visually balanced */}
            <div className="flex flex-col justify-between space-y-10 lg:space-y-16 mt-8 lg:mt-0 lg:w-1/5 relative z-10 py-4"> {/* Added padding for alignment */}
                {flowDestinations.map((item, index) => (
                    <FlowItem key={index} label={item.label} Icon={item.icon} color={item.color} isRight={true} index={index} />
                ))}
            </div>
        </div>

        {/* Feature Cards / Details (Bottom Row) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/5 p-8 rounded-2xl border border-indigo-700/30 shadow-xl"
            >
              <h3 className="text-xl font-extrabold text-white mb-4 border-b border-indigo-700/50 pb-2">{card.title}</h3>
              <ul className="space-y-3 mt-4">
                {card.items.map((item, i) => (
                  <li key={i} className={`flex items-start text-gray-300`}>
                    <svg className={`w-5 h-5 mr-3 ${accentColor} flex-shrink-0 mt-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}