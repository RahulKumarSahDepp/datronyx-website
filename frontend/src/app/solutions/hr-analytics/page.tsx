"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { Users, HeartPulse, Trophy, Smile, TrendingUp, Network } from "lucide-react";

const data: SolutionData = {
  subtitle: "HR & People Analytics",
  title: "Retain Your Best.",
  description: "People are your biggest asset and your biggest cost. We use people analytics to predict attrition, optimize recruitment, and measure the true ROI of your workforce.",
  color: "text-fuchsia-400",
  gradient: "from-fuchsia-500 to-purple-500",
  stats: [
    { value: "-20%", label: "Attrition Rate" },
    { value: "50%", label: "Faster Hiring" },
    { value: "High", label: "Employee NPS" },
    { value: "ROI", label: "Training Spend" },
  ],
  challenges: [
    { title: "Regrettable Attrition", desc: "Top performers leaving unexpectedly." },
    { title: "Bias in Hiring", desc: "Unconscious bias affecting recruitment decisions." },
    { title: "Skills Gap", desc: "Not knowing what skills exist vs what is needed." }
  ],
  capabilities: [
    { title: "Attrition Prediction", desc: "Identify flight risks months in advance.", icon: Users },
    { title: "Talent Acquisition AI", desc: "Automate resume screening and candidate matching.", icon: Trophy },
    { title: "Organizational Network", desc: "Identify silos and hidden influencers via metadata.", icon: Network },
    { title: "Sentiment Analysis", desc: "Gauge employee morale from surveys and public data.", icon: Smile },
    { title: "Performance Modeling", desc: "Linking employee metrics to revenue outcomes.", icon: TrendingUp },
    { title: "Diversity Dashboards", desc: "Tracking DE&I metrics in real-time.", icon: HeartPulse },
  ],
  techStack: ["Workday", "Visier", "Python NLP", "Tableau", "Glint"],
  useCases: [
    { title: "Flight Risk Alert", desc: "Flagging managers when key staff show signs of disengagement." },
    { title: "Skill Ontology", desc: "Mapping internal skills to fill projects without hiring externals." },
    { title: "Recruitment Optimization", desc: "Predicting which sourcing channels yield the best hires." },
    { title: "Compensation Analysis", desc: "Ensuring pay equity across the organization." }
  ]
};

export default function HRPage() {
  return <SolutionPageTemplate data={data} />;
}