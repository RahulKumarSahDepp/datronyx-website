"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { Factory, Cog, Radio, Box, AlertTriangle, BarChart3 } from "lucide-react";

const data: SolutionData = {
  subtitle: "Manufacturing & Industry 4.0",
  title: "Zero Unplanned Downtime.",
  description: "Connect your factory floor to the cloud. We ingest IoT sensor data to predict equipment failure, optimize energy consumption, and automate quality control with computer vision.",
  color: "text-orange-400",
  gradient: "from-orange-500 to-amber-500",
  stats: [
    { value: "-40%", label: "Maintenance Costs" },
    { value: "99.9%", label: "Asset Uptime" },
    { value: "Real-Time", label: "IoT Ingestion" },
    { value: "Auto", label: "Quality Checks" },
  ],
  challenges: [
    { title: "Reactive Maintenance", desc: "Fixing machines only after they break costs millions." },
    { title: "Quality Defects", desc: "Manual inspections miss micro-defects that harm brand reputation." },
    { title: "Data Latency", desc: "Floor data taking days to reach decision makers." }
  ],
  capabilities: [
    { title: "Predictive Maintenance", desc: "Analyze vibration/temp sensors to service machines before failure.", icon: Cog },
    { title: "Digital Twins", desc: "Create virtual replicas to simulate optimizations risk-free.", icon: Factory },
    { title: "IoT Streaming", desc: "High-throughput ingestion from edge devices to cloud.", icon: Radio },
    { title: "Computer Vision QC", desc: "Automated optical inspection for defect detection.", icon: Box },
    { title: "Safety Analytics", desc: "Monitoring video feeds for workplace safety violations.", icon: AlertTriangle },
    { title: "OEE Monitoring", desc: "Real-time dashboards for Overall Equipment Effectiveness.", icon: BarChart3 },
  ],
  techStack: ["AWS IoT Core", "Azure Digital Twins", "Python", "Grafana", "Kafka"],
  useCases: [
    { title: "Asset Health", desc: "Predicting motor failure 2 weeks in advance via vibration analysis." },
    { title: "Energy Optimization", desc: "Reducing HVAC and machine power usage during peak costs." },
    { title: "Supply Chain Sync", desc: "Automatically ordering raw materials based on production speed." },
    { title: "Yield Optimization", desc: "Tuning machine parameters to maximize output quality." }
  ]
};

export default function ManufacturingPage() {
  return <SolutionPageTemplate data={data} />;
}