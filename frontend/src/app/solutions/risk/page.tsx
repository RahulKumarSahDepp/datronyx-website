"use client";

import SolutionPageTemplate, { SolutionData } from "@/components/templates/SolutionPageTemplate";
import { ShieldAlert, FileSearch, Eye, Lock, Server, FileText } from "lucide-react";

const data: SolutionData = {
  subtitle: "Risk, Governance & Compliance",
  title: "Automated Governance.",
  description: "Regulatory landscapes are complex; your data stack shouldn't be. We build automated governance frameworks that ensure compliance, security, and auditability by design.",
  color: "text-red-400",
  gradient: "from-red-500 to-rose-500",
  stats: [
    { value: "100%", label: "GDPR/CCPA Ready" },
    { value: "Zero", label: "Manual Reporting" },
    { value: "24/7", label: "Threat Monitoring" },
    { value: "Auto", label: "PII Masking" },
  ],
  challenges: [
    { title: "Data Sprawl", desc: "Sensitive data living in spreadsheets and shadow IT apps." },
    { title: "Audit Fatigue", desc: "Spending weeks gathering data for external auditors." },
    { title: "Access Control", desc: "Unrestricted access leading to internal data leaks." }
  ],
  capabilities: [
    { title: "Automated PII Redaction", desc: "Detect and mask sensitive data across all pipelines.", icon: Eye },
    { title: "Continuous Compliance", desc: "Real-time monitoring frameworks for policy violations.", icon: ShieldAlert },
    { title: "Audit Trail Engineering", desc: "Immutable logs of every data access request.", icon: FileSearch },
    { title: "Role-Based Access", desc: "Granular permission architectures (RBAC/ABAC).", icon: Lock },
    { title: "Data Lineage", desc: "Visualizing the journey of data from source to report.", icon: Server },
    { title: "Policy-as-Code", desc: "Enforcing governance rules programmatically.", icon: FileText },
  ],
  techStack: ["BigID", "OneTrust", "Snowflake Governance", "Immuta", "AWS Macie"],
  useCases: [
    { title: "Right to be Forgotten", desc: "Automating deletion requests across 50+ systems instantly." },
    { title: "Insider Threat Detection", desc: "Flagging abnormal download patterns by employees." },
    { title: "Vendor Risk Scoring", desc: "Automating security assessments for third parties." },
    { title: "Regulatory Reporting", desc: "Auto-generating reports for Basel III, HIPAA, or SOX." }
  ]
};

export default function RiskPage() {
  return <SolutionPageTemplate data={data} />;
}