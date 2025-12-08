"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { ShieldCheck, TrendingUp, Lock, Wallet, Activity, Globe } from "lucide-react";

const data: SolutionData = {
  subtitle: "FinTech & Banking",
  title: "Algorithmic Certainty.",
  description: "In finance, latency is loss. We engineer high-frequency data architectures that detect fraud in milliseconds, automate regulatory compliance, and optimize portfolio risk with mathematical precision.",
  color: "text-emerald-400",
  gradient: "from-emerald-500 to-teal-500",
  stats: [
    { value: "99.8%", label: "Fraud Interception" },
    { value: "<50ms", label: "Decision Latency" },
    { value: "100%", label: "Audit Traceability" },
    { value: "Zero", label: "Data Leakage" },
  ],
  challenges: [
    { title: "False Positives", desc: "Rule-based systems flagging legitimate users, killing transaction volume." },
    { title: "Regulatory Lag", desc: "Manual reporting for GDPR/SOX takes weeks, risking massive fines." },
    { title: "Data Silos", desc: "Trading desk data doesn't talk to risk management in real-time." }
  ],
  capabilities: [
    { title: "Real-Time Fraud Detection", desc: "Behavioral anomaly detection models that flag suspicious transactions instantly.", icon: ShieldCheck },
    { title: "Automated Risk Scoring", desc: "Credit risk and market volatility modeling using alternative data sources.", icon: TrendingUp },
    { title: "Regulatory Governance", desc: "Automated lineage tracking for GDPR, SOX, and Basel III compliance.", icon: Lock },
    { title: "Algorithmic Trading Ops", desc: "Low-latency data pipelines feeding quantitative models.", icon: Activity },
    { title: "Customer 360 Banking", desc: "Unified view of savings, credit, and investment behavior.", icon: Wallet },
    { title: "Global Compliance", desc: "Cross-border data sovereignty enforcement.", icon: Globe },
  ],
  techStack: ["Snowflake", "Kafka", "Python", "Tableau", "AWS SageMaker"],
  useCases: [
    { title: "Anti-Money Laundering (AML)", desc: "Using graph networks to detect money laundering rings across accounts." },
    { title: "Credit Decisioning", desc: "Instant loan approvals using ML-driven alternative credit scoring." },
    { title: "Churn Prediction", desc: "Identifying high-net-worth clients at risk of moving assets." },
    { title: "Trade Surveillance", desc: "Monitoring communications and trades for insider activity." }
  ]
};

export default function FinancePage() {
  return <SolutionPageTemplate data={data} />;
}