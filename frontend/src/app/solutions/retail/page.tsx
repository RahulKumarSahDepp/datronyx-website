"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { ShoppingBag, Users, Zap, Tag, Truck, Gift } from "lucide-react";

const data: SolutionData = {
  subtitle: "Retail & E-Commerce",
  title: "Hyper-Personalization.",
  description: "Generic experiences kill conversion. We build recommendation engines and inventory forecasting models that ensure you have exactly what the customer wants, exactly when they want it.",
  color: "text-pink-400",
  gradient: "from-pink-500 to-rose-500",
  stats: [
    { value: "+35%", label: "Avg Order Value" },
    { value: "-20%", label: "Inventory Waste" },
    { value: "1:1", label: "Personalization" },
    { value: "95%", label: "Forecast Accuracy" },
  ],
  challenges: [
    { title: "Cart Abandonment", desc: "Customers leave when they don't find relevant products fast." },
    { title: "Stockouts", desc: "Revenue lost because high-demand items weren't restocked in time." },
    { title: "Fragmented Profiles", desc: "Online and offline customer data living in separate silos." }
  ],
  capabilities: [
    { title: "Algorithmic Merchandising", desc: "Dynamic pricing and sorting based on real-time demand.", icon: ShoppingBag },
    { title: "Churn Prediction", desc: "Trigger automated retention campaigns for at-risk users.", icon: Users },
    { title: "Demand Sensing", desc: "Predicting inventory needs down to the SKU/Store level.", icon: Zap },
    { title: "Customer 360", desc: "Unifying in-store POS and web data into one profile.", icon: Tag },
    { title: "Supply Chain Vis", desc: "Real-time tracking of goods from factory to warehouse.", icon: Truck },
    { title: "Loyalty Engines", desc: "AI-driven rewards that maximize lifetime value.", icon: Gift },
  ],
  techStack: ["Snowflake", "dbt", "Looker", "AWS Personalize", "Shopify API"],
  useCases: [
    { title: "Next Best Action", desc: "Recommending the exact product a user is likely to buy next." },
    { title: "Dynamic Pricing", desc: "Adjusting prices in real-time based on competitor moves." },
    { title: "Inventory Allocation", desc: "Moving stock between stores to meet localized demand." },
    { title: "Visual Search", desc: "Allowing customers to search catalog using images." }
  ]
};

export default function RetailPage() {
  return <SolutionPageTemplate data={data} />;
}