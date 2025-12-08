"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    GitBranch, 
    HardHat, 
    LineChart, 
    ArrowRight, 
    FlaskConical, 
    MonitorCheck, 
    Layers3, 
    Repeat2, 
    Factory, 
    Code,
    Tractor,
    CalendarCheck, 
    Download,      
    MoveRight      
} from "lucide-react";

// --- Types ---

interface FeatureCardProps {
    title: string;
    children?: React.ReactNode;
    Icon: React.ElementType;
}

interface ProcessStepProps {
    step: number;
    title: string;
    desc: string;
    Icon: React.ElementType;
}

interface LinkProps {
    href: string;
    className?: string;
    children?: React.ReactNode;
}

interface CtaLinkProps {
    href: string;
    Icon: React.ElementType;
    title: string;
    desc: string;
    primary: boolean;
}

// --- Helper Components ---

// Replaced Link with 'a' for canvas compatibility
const Link = ({ href, className, children }: LinkProps) => (
    <a href={href} className={className}>
        {children}
    </a>
);

// Custom CTA Link Component
const CtaLink = ({ href, Icon, title, desc, primary }: CtaLinkProps) => (
    <Link 
        href={href} 
        className={`
            flex flex-col items-start p-6 rounded-xl transition-all duration-300 border group
            ${primary 
                ? 'bg-purple-600 border-purple-600 text-white shadow-xl shadow-purple-600/30 hover:bg-purple-500 hover:border-purple-500' 
                : 'bg-gray-900/50 border-gray-700 text-gray-200 hover:border-pink-500 hover:bg-gray-800/50'
            }
        `}
    >
        <div className="flex items-center gap-3">
            <Icon className={`w-6 h-6 ${primary ? 'text-white' : 'text-pink-400'}`} />
            <h4 className="font-bold text-lg">{title}</h4>
        </div>
        <p className={`text-sm mt-2 ${primary ? 'text-purple-200' : 'text-gray-400'}`}>{desc}</p>
        <MoveRight className={`w-5 h-5 mt-4 ${primary ? 'text-white/70' : 'text-pink-400/70'} transition-transform duration-300 group-hover:translate-x-1`} />
    </Link>
);

// --- Custom Visual Component for Hero (MLOps Loop) ---
const MLOpsLoopVisual = () => (
    <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
        
        {/* Central Model Registry */}
        <motion.div
            className="w-32 h-32 md:w-40 md:h-40 bg-purple-600/20 rounded-xl border border-purple-500/50 flex flex-col items-center justify-center shadow-2xl shadow-purple-500/30 p-2"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
            <Factory className="w-10 h-10 text-purple-300" />
            <span className="text-xs text-purple-200 mt-1 font-semibold">Registry Hub</span>
        </motion.div>

        {/* Training/CI Stream */}
        <motion.div
            className="absolute w-6 h-6 rounded-full bg-pink-400 -top-4 left-1/4"
            animate={{ 
                x: [0, 100, 0, -100, 0], 
                y: [0, 100, 200, 100, 0]
            }}
            transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear",
            }}
        />
        <FlaskConical className="absolute top-0 left-0 text-pink-500/50 w-8 h-8" />

        {/* Monitoring/Feedback Stream */}
        <motion.div
            className="absolute w-6 h-6 rounded-full bg-yellow-400 bottom-4 right-1/4"
            animate={{ 
                x: [0, -100, 0, 100, 0], 
                y: [0, -100, -200, -100, 0]
            }}
            transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: 5
            }}
        />
        <MonitorCheck className="absolute bottom-0 right-0 text-yellow-500/50 w-8 h-8" />

        {/* Continuous Retraining Icon */}
        <Repeat2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-indigo-700 opacity-20" />
    </div>
);

// --- Feature Card Component ---
const FeatureCard = ({ title, children, Icon }: FeatureCardProps) => (
    <motion.div 
        className="p-6 rounded-xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-600/50 hover:bg-gray-800/50 shadow-lg"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
    >
        <Icon className="w-8 h-8 text-purple-400 mb-3" />
        <h4 className="font-bold text-white text-lg mt-2">{title}</h4>
        {children && <p className="text-gray-400 mt-2 text-sm">{children}</p>}
    </motion.div>
);

// --- Process Step Component ---
const ProcessStep = ({ step, title, desc, Icon }: ProcessStepProps) => (
    <motion.div 
        className="relative flex items-start gap-4 p-5 rounded-xl border border-gray-700/50 bg-gray-900/60"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: step * 0.1 }}
    >
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm z-10">
            {step}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 mt-1">{desc}</p>
        </div>
        {/* Icon for visual flair */}
        <Icon className="absolute right-4 top-4 w-6 h-6 text-purple-400 opacity-20" />
    </motion.div>
);


// --- Main Page Component ---
export default function MLOpsPage() {
    
    // Data for the Process section
    const processSteps = [
        { title: "Assessment & Strategy", desc: "Evaluate existing ML maturity, infrastructure gaps, and define a target MLOps roadmap.", Icon: Layers3 },
        { title: "Proof-of-Value Pilot", desc: "Implement a quick end-to-end pipeline (training, deployment, monitoring) on one model for fast results.", Icon: FlaskConical },
        { title: "Platform Build & Integration", desc: "Establish the Model Registry, CI/CD, feature store integration, and production observability framework.", Icon: HardHat },
        { title: "Handoff & Operations", desc: "Deliver comprehensive runbooks, train internal teams, and define SLO-driven support structure.", Icon: Tractor },
    ];

    return (
        <main className="bg-[#0A0D1E] text-white min-h-screen font-sans">
            
            {/* HERO SECTION - Enhanced with Visual */}
            <section className="px-6 md:px-12 lg:px-24 pt-24 pb-16 bg-gradient-to-b from-[#0A0D1E] to-gray-950 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                    
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-600/15 text-purple-300 text-xs font-bold uppercase tracking-widest border border-purple-600/50">
                            MLOps Implementation
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                            Reliable Model Delivery. <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">ML at Production Scale.</span>
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-lg">
                            We bring software engineering and DevOps rigor to machine learning. Build end-to-end pipelines, model registries, monitoring, and automated retraining systems.
                        </p>

                        <div className="mt-10 flex gap-4 flex-wrap">
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-full font-semibold shadow-xl shadow-purple-600/30 hover:bg-purple-500 transition-all duration-300">
                                Build an MLOps Plan
                            </Link>
                            <Link href="/services" className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                                Explore Services <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <MLOpsLoopVisual />
                    </motion.div>
                </div>
            </section>

            {/* CAPABILITIES - Visually enhanced grid */}
            <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-950/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">MLOps Core Components</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard title="Model CI/CD" Icon={GitBranch}>
                            Automated pipelines to test, validate, and promote models through staging environments to production.
                        </FeatureCard>
                        <FeatureCard title="Model Registry Hub" Icon={Factory}>
                            Centralized versioning, detailed provenance, and approval workflows for every model artifact.
                        </FeatureCard>
                        <FeatureCard title="Monitoring & Drift" Icon={MonitorCheck}>
                            Real-time telemetry, model health metrics, performance anomaly detection, and automated alerts for data drift.
                        </FeatureCard>
                        <FeatureCard title="Automated Retraining" Icon={Repeat2}>
                            Policy-driven triggers (data drift, performance degradation) to automatically kick off the retraining pipeline.
                        </FeatureCard>
                    </div>
                </div>
            </section>

            {/* PIPELINE DELIVERABLES - Updated list format */}
            <section className="px-6 md:px-12 lg:px-24 py-16 bg-[#0A0D1E]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">Production Platform Deliverables</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <li className="p-5 border border-gray-800 rounded-xl bg-gray-900/50 transition duration-300 hover:border-pink-500/50 flex items-start gap-4">
                            <Layers3 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-white">Full Training Pipelines</h4>
                                <p className="text-gray-400 text-sm">Automated and reproducible model training and versioning.</p>
                            </div>
                        </li>
                        <li className="p-5 border border-gray-800 rounded-xl bg-gray-900/50 transition duration-300 hover:border-pink-500/50 flex items-start gap-4">
                            <Code className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-white">IaC for Infrastructure</h4>
                                <p className="text-gray-400 text-sm">Terraform/CloudFormation/K8s setup for reproducible environments.</p>
                            </div>
                        </li>
                        <li className="p-5 border border-gray-800 rounded-xl bg-gray-900/50 transition duration-300 hover:border-pink-500/50 flex items-start gap-4">
                            <GitBranch className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-white">Advanced Deployment Strategies</h4>
                                <p className="text-gray-400 text-sm">Canary, A/B testing, and blue/green rollouts for safe releases.</p>
                            </div>
                        </li>
                        <li className="p-5 border border-gray-800 rounded-xl bg-gray-900/50 transition duration-300 hover:border-pink-500/50 flex items-start gap-4">
                            <LineChart className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-white">Comprehensive Observability</h4>
                                <p className="text-gray-400 text-sm">Integrated logs, traces, and metrics for model and infrastructure health.</p>
                            </div>
                        </li>
                        <li className="p-5 border border-gray-800 rounded-xl bg-gray-900/50 transition duration-300 hover:border-pink-500/50 flex items-start gap-4">
                            <Repeat2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-white">Reproducibility & Lineage</h4>
                                <p className="text-gray-400 text-sm">Clear tracking of data, code, and hyperparameters for every model version.</p>
                            </div>
                        </li>
                        <li className="p-5 border border-gray-800 rounded-xl bg-gray-900/50 transition duration-300 hover:border-pink-500/50 flex items-start gap-4">
                            <MonitorCheck className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-white">Drift Management System</h4>
                                <p className="text-gray-400 text-sm">Alerts and automated response for concept and data drift detection.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* PROCESS - Visual Step-by-Step */}
            <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">MLOps Implementation Flow</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <ProcessStep 
                                key={index}
                                step={index + 1}
                                title={step.title}
                                desc={step.desc}
                                Icon={step.Icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 — Call to Action (New Design) */}
            <section className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-t from-[#0A0D1E] to-gray-950">
                <div className="max-w-6xl mx-auto text-center">
                    
                    <motion.h2 
                        className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Unlock the True Power of Your Data?
                    </motion.h2>
                    
                    <motion.p 
                        className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Datronyx delivers intelligent solutions that help businesses make faster, smarter, and more confident decisions.
                    </motion.p>
                    
                    {/* Three Action Buttons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <CtaLink 
                            href="/contact" 
                            Icon={CalendarCheck} 
                            title="Book a Strategy Call" 
                            desc="Schedule a consultation with our expert architects to discuss your roadmap."
                            primary={true}
                        />
                        <CtaLink 
                            href="/use-cases" 
                            Icon={MoveRight} 
                            title="Explore Industry Use Cases" 
                            desc="See how we've helped leading companies achieve production ML maturity."
                            primary={false}
                        />
                        <CtaLink 
                            href="/download" 
                            Icon={Download} 
                            title="Download Solution Overview" 
                            desc="Get a detailed PDF on our platform capabilities and service offerings."
                            primary={false}
                        />
                    </div>
                </div>
            </section>
            
        </main>
    );
}