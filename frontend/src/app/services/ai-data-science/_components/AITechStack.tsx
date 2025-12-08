"use client";

import React from "react";
import { Cpu, Code2, Database } from "lucide-react";

const stack = [
  { category: "Models & Frameworks", tools: "PyTorch, TensorFlow, OpenAI, HuggingFace", icon: Cpu },
  { category: "Orchestration & RAG", tools: "LangChain, LlamaIndex, Pinecone, Weaviate", icon: Database },
  { category: "Deployment", tools: "Docker, Kubernetes, AWS SageMaker, Modal", icon: Code2 },
];

export default function AITechStack() {
  return (
    <section className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
           <span className="text-slate-500 font-mono text-sm uppercase">Powered By</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {stack.map((item, i) => (
              <div key={i} className="text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                 <item.icon className="w-8 h-8 mx-auto text-indigo-500 mb-4" />
                 <h4 className="text-white font-bold mb-2">{item.category}</h4>
                 <p className="text-slate-400 text-sm font-mono">{item.tools}</p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}