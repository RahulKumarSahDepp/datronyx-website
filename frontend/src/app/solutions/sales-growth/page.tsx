"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { Target, BarChart4, Globe, PhoneCall, Mail, PieChart } from "lucide-react";

const data: SolutionData = {
  subtitle: "Sales & Revenue Operations",
  title: "Revenue is a Science.",
  description: "Stop relying on gut feeling. We implement predictive lead scoring and revenue forecasting models that tell your sales team exactly who to call, when to call, and what to sell.",
  color: "text-indigo-400",
  gradient: "from-indigo-500 to-violet-500",
  stats: [
    { value: "+25%", label: "Win Rate" },
    { value: "90%+", label: "Forecast Accuracy" },
    { value: "2x", label: "Pipeline Velocity" },
    { value: "Auto", label: "Lead Routing" },
  ],
  challenges: [
    { title: "Leaky Funnel", desc: "Leads getting lost or ignored due to lack of prioritization." },
    { title: "Forecast Guesswork", desc: "Missed quarters because projections were based on hope, not data." },
    { title: "Manual Entry", desc: "Reps wasting time entering data instead of selling." }
  ],
  capabilities: [
    { title: "Predictive Lead Scoring", desc: "Rank leads by propensity-to-buy using behavioral signals.", icon: Target },
    { title: "Revenue Forecasting", desc: "ML models to predict quarterly revenue with high confidence.", icon: BarChart4 },
    { title: "Territory Optimization", desc: "Optimize territories based on market potential data.", icon: Globe },
    { title: "Conversation Intelligence", desc: "Analyze call recordings to coach reps on winning scripts.", icon: PhoneCall },
    { title: "Automated Outreach", desc: "AI agents that nurture cold leads until they are ready.", icon: Mail },
    { title: "Attribution Modeling", desc: "Know exactly which marketing touchpoint drove the sale.", icon: PieChart },
  ],
  techStack: ["Salesforce", "HubSpot", "Snowflake", "Python Scikit-Learn", "Tableau"],
  useCases: [
    { title: "Churn Prevention", desc: "Alerting account managers when usage drops for key accounts." },
    { title: "Cross-Sell Engine", desc: "Suggesting add-on products based on similar customer profiles." },
    { title: "Pipeline Health", desc: "Visualizing stalled deals and identifying bottlenecks." },
    { title: "Ideal Customer Profile", desc: "Using clustering to define your true target audience." }
  ]
};

export default function SalesPage() {
  return <SolutionPageTemplate data={data} />;
}