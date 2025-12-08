// --- NEW INTERFACES REQUIRED BY THE IMPROVED COMPONENT ---

export interface LinkItem {
  name: string;
  href: string;
}

export interface LinkSection {
  title: string;
  links: LinkItem[];
}

export interface MenuItem {
  id: string;
  label: string; // left side bar tab label
  sections: LinkSection[]; // right side bar content, organized into groups
}

// --- DATA FOR THE "SERVICES" MEGA MENU ---
export const servicesMenuData: MenuItem[] = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    sections: [
      {
        title: "Model Development",
        links: [
          { name: "Custom Model Development", href: "/services/ai-ml/custom-models" },
          { name: "Predictive Analytics", href: "/services/ai-ml/predictive-analytics" },
        ],
      },
      {
        title: "Intelligent Automation",
        links: [
          { name: "LLM & Agent Automation", href: "/services/ai-ml/llm-automation" },
          { name: "Computer Vision", href: "/services/ai-ml/computer-vision" },
        ],
      },
      // Added an empty section to fill the 3-column layout
      {
        title: "Resources",
        links: [
          { name: "View Case Studies", href: "/ai-case-studies" },
          { name: "AI Strategy Guide", href: "/ai-guide" },
        ],
      },
    ],
  },
  {
    id: "data-eng",
    label: "Data Engineering",
    sections: [
      {
        title: "Infrastructure & Pipelines",
        links: [
          { name: "Data Infrastructure", href: "/services/data-engineering/infrastructure" },
          { name: "Data Warehousing", href: "/services/data-engineering/warehousing" },
        ],
      },
      {
        title: "Development",
        links: [
          { name: "ETL & Pipeline Development", href: "/services/data-engineering/etl" },
          { name: "Real-time Streaming", href: "/services/data-engineering/streaming" },
        ],
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Integration",
    sections: [
      {
        title: "Cloud Strategy",
        links: [
          { name: "Cloud-Native Modernization", href: "/services/cloud/modernization" },
          { name: "Multi-Cloud Solutions", href: "/services/cloud/multi-cloud" },
        ],
      },
      {
        title: "Platform Focus",
        links: [
          { name: "Azure Solutions", href: "/services/cloud/azure" },
          { name: "AWS Solutions", href: "/services/cloud/aws" },
          { name: "GCP Solutions", href: "/services/cloud/gcp" },
        ],
      },
    ],
  },
  {
    id: "governance",
    label: "Data Governance",
    sections: [
      {
        title: "Planning & Strategy",
        links: [
          { name: "Data Strategy", href: "/services/governance/strategy" },
          { name: "Data Architecture Review", href: "/services/governance/architecture" },
        ],
      },
      {
        title: "Quality & Compliance",
        links: [
          { name: "Data Quality & Compliance", href: "/services/governance/compliance" },
          { name: "Security & Privacy", href: "/services/governance/security" },
        ],
      },
    ],
  },
];

// --- DATA FOR THE "INDUSTRIES" MEGA MENU ---
export const industriesMenuData: MenuItem[] = [
  {
    id: "finance",
    label: "Finance",
    sections: [
      {
        title: "Capital Markets",
        links: [
          { name: "Algorithmic Trading", href: "/industries/finance/algo-trading" },
          { name: "Portfolio Optimization", href: "/industries/finance/portfolio" }, 
        ],
      },
      {
        title: "Security & Risk",
        links: [
          { name: "Risk Assessment", href: "/industries/finance/risk" },
          { name: "Fraud Detection", href: "/industries/finance/fraud" },
        ],
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    sections: [
      {
        title: "Clinical Insights",
        links: [
          { name: "Patient Outcome Prediction", href: "/industries/healthcare/prediction" },
          { name: "Medical Imaging Analysis", href: "/industries/healthcare/imaging" },
        ],
      },
      {
        title: "Data Management",
        links: [
          { name: "Genomic Data Processing", href: "/industries/healthcare/genomics" },
          { name: "EHR Integration", href: "/industries/healthcare/ehr" },
        ],
      },
    ],
  },
  {
    id: "retail",
    label: "Retail & E-commerce",
    sections: [
      {
        title: "Customer & Sales",
        links: [
          { name: "Demand Forecasting", href: "/industries/retail/forecasting" },
          { name: "Recommendation Engines", href: "/industries/retail/recommendation" },
        ],
      },
      {
        title: "Operations",
        links: [
          { name: "Supply Chain Optimization", href: "/industries/retail/supply-chain" },
          { name: "Inventory Management", href: "/industries/retail/inventory" }, 
        ],
      },
    ],
  },
];