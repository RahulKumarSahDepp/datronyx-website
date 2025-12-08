"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { Activity, Stethoscope, FileKey, HeartPulse, Microscope, Brain } from "lucide-react";

const data: SolutionData = {
  subtitle: "Healthcare & Life Sciences",
  title: "Intelligence Saves Lives.",
  description: "Fragmented patient data creates gaps in care. Datronyx unifies EMRs, wearables, and clinical data into a secure, interoperable layer that powers predictive diagnostics and operational efficiency.",
  color: "text-blue-400",
  gradient: "from-blue-500 to-indigo-500",
  stats: [
    { value: "30%", label: "Faster Diagnostics" },
    { value: "HIPAA", label: "Compliant Architecture" },
    { value: "-18%", label: "Readmission Rate" },
    { value: "24/7", label: "Patient Monitoring" },
  ],
  challenges: [
    { title: "Interoperability Gaps", desc: "Legacy EMRs don't talk to modern apps, creating blind spots." },
    { title: "Unstructured Data", desc: "80% of value is hidden in doctor notes and PDF reports." },
    { title: "Resource Waste", desc: "Inefficient staffing and bed allocation raises operational costs." }
  ],
  capabilities: [
    { title: "Predictive Patient Analytics", desc: "Identify high-risk patients before critical events occur using longitudinal data.", icon: Activity },
    { title: "Operational Optimization", desc: "AI-driven demand forecasting to optimize bed management and staffing.", icon: Stethoscope },
    { title: "Secure Interoperability", desc: "FHIR-compliant pipelines breaking silos between systems.", icon: FileKey },
    { title: "Clinical NLP", desc: "Extracting insights from unstructured doctor notes and PDFs.", icon: Microscope },
    { title: "Remote Monitoring", desc: "Ingesting wearable data for real-time chronic disease management.", icon: HeartPulse },
    { title: "Drug Discovery Data", desc: "Accelerating R&D with high-performance computing data grids.", icon: Brain },
  ],
  techStack: ["Azure Health Data", "Databricks", "PowerBI", "NLP Models", "FHIR"],
  useCases: [
    { title: "Sepsis Prediction", desc: "Early warning systems alerting doctors hours before symptoms escalate." },
    { title: "Hospital Flow", desc: "Predicting ER surges to optimize nurse staffing schedules." },
    { title: "Personalized Medicine", desc: "Genomic data analysis for tailored treatment plans." },
    { title: "Revenue Cycle Mgmt", desc: "Automating coding and claims to reduce denials." }
  ]
};

export default function HealthcarePage() {
  return <SolutionPageTemplate data={data} />;
}