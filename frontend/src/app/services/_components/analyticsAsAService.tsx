"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  X,
  Users, 
  Zap, 
  Clock, 
  Briefcase,
  Layers,
  MessageSquare
} from "lucide-react";

// --- Types ---

interface PricingCardProps {
  title: string;
  price: string;
  period?: string; // Optional (marked with ?) because Enterprise doesn't use it
  description: string;
  features: string[]; // This is an array of strings
  popular?: boolean; // Optional
  color?: string;    // Optional
}

interface ComparisonRowProps {
  label: string;
  traditional: string;
  us: string;
}

// --- Components ---

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  popular = false, 
  color 
}: PricingCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 ${
      popular 
        ? "bg-gray-900/80 border-indigo-500 shadow-2xl shadow-indigo-500/20" 
        : "bg-gray-900/40 border-gray-800 hover:border-gray-700"
    }`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
        Most Popular
      </div>
    )}

    <div className="mb-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm h-10">{description}</p>
    </div>

    <div className="mb-8">
      <span className="text-4xl font-extrabold text-white">{price}</span>
      {period && <span className="text-gray-500 font-medium ml-1">{period}</span>}
    </div>

    <div className="space-y-4 mb-8 flex-grow">
      {/* 
         Because we defined 'features' as string[] in the interface above,
         TypeScript now knows 'feature' is a string and 'idx' is a number automatically.
      */}
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${popular ? "bg-indigo-500/20 text-indigo-400" : "bg-gray-800 text-gray-400"}`}>
            <Check className="w-3 h-3" />
          </div>
          <span className="text-gray-300 text-sm">{feature}</span>
        </div>
      ))}
    </div>

    <button className={`w-full py-4 rounded-xl font-bold transition-all ${
      popular 
        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25" 
        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
    }`}>
      Choose {title}
    </button>
  </motion.div>
);

const ComparisonRow = ({ label, traditional, us }: ComparisonRowProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-gray-800 last:border-0">
    <div className="font-semibold text-gray-400 flex items-center">{label}</div>
    <div className="flex items-center gap-2 text-gray-500">
      <X className="w-4 h-4 text-red-500/50" />
      {traditional}
    </div>
    <div className="flex items-center gap-2 text-indigo-300 font-medium">
      <Check className="w-4 h-4 text-emerald-400" />
      {us}
    </div>
  </div>
);

export default function AnalyticsAsAServicePage() {
  const darkBg = "#0A0D1E";

  return (
    <main className="min-h-screen font-sans overflow-hidden" style={{ backgroundColor: darkBg }}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 lg:py-32">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
                    <Users className="w-3 h-3" />
                    <span>Analytics as a Service</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6">
                    Your Data Team. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                        Plugged In & Ready.
                    </span>
                </h1>

                <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                    Skip the 6-month hiring cycle. Get immediate access to a dedicated squad of data engineers, analysts, and scientists for a flat monthly subscription.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Start Your Subscription
                    </Link>
                    <Link href="#pricing" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-full hover:border-purple-400 hover:text-purple-300 transition-all">
                        View Pricing
                    </Link>
                </div>
            </motion.div>

            {/* Hero Visual: Abstract Team Connection */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:flex items-center justify-center"
            >
                {/* Central Hub */}
                <div className="relative z-10 w-32 h-32 bg-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl">
                    <Briefcase className="w-12 h-12 text-white" />
                    <div className="absolute -bottom-6 px-4 py-1 bg-gray-800 rounded-full text-xs font-mono text-gray-300 border border-gray-700">YOUR COMPANY</div>
                </div>

                {/* Connecting Orbs (The "Team") */}
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-gray-950 shadow-xl z-0"
                        animate={{ 
                            x: [0, Math.cos(i * 2 + 1) * 20, 0],
                            y: [0, Math.sin(i * 2 + 1) * 20, 0],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            top: `${50 + (i === 0 ? -40 : i === 1 ? 40 : 0)}%`,
                            left: `${50 + (i === 0 ? 30 : i === 1 ? 30 : -40)}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        {i === 0 ? <Zap className="w-6 h-6 text-white" /> : 
                         i === 1 ? <Layers className="w-6 h-6 text-white" /> : 
                         <MessageSquare className="w-6 h-6 text-white" />}
                        
                        {/* Connecting Lines (CSS Pseudo-lines simulated) */}
                        <div className={`absolute w-32 h-[2px] bg-gradient-to-r from-indigo-600 to-transparent ${i === 2 ? 'left-full origin-left' : 'right-full origin-right'}`} style={{ transform: i === 2 ? 'rotate(0deg)' : i===0 ? 'rotate(45deg)' : 'rotate(-45deg)'}} />
                    </motion.div>
                ))}

                {/* Pulsing Rings */}
                <div className="absolute inset-0 border border-indigo-500/10 rounded-full scale-150" />
                <div className="absolute inset-0 border border-indigo-500/10 rounded-full scale-[2]" />
            </motion.div>
        </div>
      </section>

      {/* --- COMPARISON: Why Subscription? --- */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-gray-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Why Analytics as a Service?</h2>
                <p className="text-gray-400">Comparing traditional hiring vs. our embedded model.</p>
            </div>

            <div className="bg-gray-950 rounded-3xl border border-gray-800 p-8 md:p-12">
                {/* Headers */}
                <div className="grid grid-cols-3 gap-4 mb-8 text-sm uppercase tracking-widest font-bold">
                    <div className="text-gray-500">Metric</div>
                    <div className="text-gray-500">Hiring In-House</div>
                    <div className="text-indigo-400">Datronyx Subscription</div>
                </div>

                {/* Rows */}
                <ComparisonRow 
                    label="Time to Value" 
                    traditional="3-6 Months (Hiring + Onboarding)" 
                    us="< 1 Week (Plug & Play)" 
                />
                <ComparisonRow 
                    label="Cost Structure" 
                    traditional="$120k+ Salary + Benefits + Equity" 
                    us="Flat Monthly Fee (Fraction of cost)" 
                />
                <ComparisonRow 
                    label="Skillset" 
                    traditional="Limited to individual's skills" 
                    us="Access to full Data Stack team" 
                />
                 <ComparisonRow 
                    label="Flexibility" 
                    traditional="Hard to scale down" 
                    us="Pause or Cancel anytime" 
                />
            </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="px-6 md:px-12 lg:px-24 py-24 relative">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-extrabold text-white mb-6">Simple, transparent pricing</h2>
                <p className="text-xl text-gray-400">
                    Choose the pace of delivery that fits your business needs. Upgrade or pause as you grow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PricingCard 
                    title="Core Analytics" 
                    price="$4,000" 
                    period="/mo"
                    description="Perfect for startups needing monthly reporting and basic maintenance."
                    features={[
                        "1 Dedicated Analyst",
                        "Monthly KPI Reporting",
                        "2 Dashboard Builds / Month",
                        "Data Quality Monitoring",
                        "48h Response SLA"
                    ]}
                />
                <PricingCard 
                    title="Growth" 
                    price="$8,500" 
                    period="/mo"
                    popular={true}
                    description="Accelerate decision making with bi-weekly insights and modeling."
                    features={[
                        "2 Dedicated Analysts",
                        "Bi-Weekly Insights Session",
                        "5 Dashboard Builds / Month",
                        "Predictive Modeling (Basic)",
                        "Slack Connect Channel",
                        "24h Response SLA"
                    ]}
                />
                <PricingCard 
                    title="Enterprise" 
                    price="Custom" 
                    description="Full-scale data department for complex organizations."
                    features={[
                        "Full Squad (Eng + Analyst + Sci)",
                        "Real-time Infrastructure",
                        "Unlimited Dashboarding",
                        "Custom ML Deployment",
                        "Quarterly Strategy Review",
                        "Priority Support"
                    ]}
                />
            </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Timeline) --- */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">How we integrate with your team</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                 {/* Connector Line */}
                 <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-800 z-0" />

                {[
                    { icon: Users, title: "Onboarding", desc: "We map your stack, define KPIs, and set up secure access (Week 1)." },
                    { icon: Clock, title: "Sprint Rhythm", desc: "We work in 2-week sprints, delivering prioritized tickets." },
                    { icon: MessageSquare, title: "Collaboration", desc: "Daily async comms via Slack/Teams. Weekly syncs for deep dives." },
                    { icon: Zap, title: "Optimization", desc: "Quarterly reviews to refine strategy and identify new opportunities." },
                ].map((step, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="relative z-10 bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center md:text-left"
                    >
                        <div className="w-14 h-14 mx-auto md:mx-0 bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-white border border-gray-700 shadow-lg">
                            <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto relative p-1 rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-gray-950 rounded-[2.4rem] px-8 py-16 md:p-20 text-center overflow-hidden relative">
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Stop recruiting. Start analyzing.
                    </h3>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Book a 15-minute intro call to see if our subscription model fits your data needs.
                    </p>
                    <Link 
                    href="/contact" 
                    className="inline-flex items-center px-10 py-5 bg-white text-indigo-950 font-bold rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
                    >
                    Book Intro Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
                
                {/* Decorative background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] pointer-events-none" />
            </div>
        </div>
      </section>

    </main>
  );
}