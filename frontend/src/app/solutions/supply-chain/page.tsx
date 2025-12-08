"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { Truck, Map, PackageCheck, Anchor, Clock, BarChart } from "lucide-react";

const data: SolutionData = {
  subtitle: "Supply Chain & Logistics",
  title: "Resilient Logistics.",
  description: "Global supply chains are fragile. We build visibility towers and demand forecasting models that help you navigate disruption and optimize logistics costs.",
  color: "text-amber-400",
  gradient: "from-amber-500 to-orange-500",
  stats: [
    { value: "-15%", label: "Logistics Costs" },
    { value: "98%", label: "On-Time Delivery" },
    { value: "Real-Time", label: "Tracking" },
    { value: "Auto", label: "Reordering" },
  ],
  challenges: [
    { title: "Bullwhip Effect", desc: "Small demand shifts causing massive upstream chaos." },
    { title: "Vendor Blindspots", desc: "Not knowing where raw materials truly are." },
    { title: "Excess Inventory", desc: "Capital tied up in stock that isn't moving." }
  ],
  capabilities: [
    { title: "Demand Sensing", desc: "Short-term forecasting reacting to market shifts instantly.", icon: Map },
    { title: "Route Optimization", desc: "AI-driven planning to minimize fuel and time.", icon: Truck },
    { title: "Supplier Risk Scoring", desc: "Evaluate financial health of upstream vendors.", icon: PackageCheck },
    { title: "Inventory Balancing", desc: "Optimizing stock levels across multiple warehouses.", icon: Box }, // Fixed icon import below
    { title: "Lead Time Prediction", desc: "Accurate ETAs based on weather and traffic data.", icon: Clock },
    { title: "Cost-to-Serve", desc: "Granular analysis of profitability per shipment.", icon: BarChart },
  ],
  techStack: ["SAP IBP", "Blue Yonder", "Python", "Project44", "Snowflake"],
  useCases: [
    { title: "Disruption Management", desc: "Simulating 'What-If' scenarios for port strikes or weather." },
    { title: "Last Mile Efficiency", desc: "Optimizing delivery routes for drivers in real-time." },
    { title: "Procurement Auto-Pilot", desc: "Automating POs when stock hits dynamic safety levels." },
    { title: "Sustainability Tracking", desc: "Measuring and reducing carbon footprint of logistics." }
  ]
};

// Fix for icon import in this specific file
import { Box } from 'lucide-react';

export default function SupplyChainPage() {
  return <SolutionPageTemplate data={data} />;
}