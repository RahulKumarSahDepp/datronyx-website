"use client";

import React from "react";
import { TrendingUp, Users, Activity, Settings, BarChart3, Clock } from "lucide-react";
import { DeliverableItem } from "./PredictiveModelingUtilities";

export default function PredictiveModelingDeliverables() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-[#0A0D1E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Core <span className="text-blue-700 font-extrabold">Deliverables</span></h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DeliverableItem title="Demand & Sales Forecasting" desc="Accurate short & long horizon forecasts with probabilistic intervals." Icon={TrendingUp} />
            <DeliverableItem title="Churn & Propensity Models" desc="Identify high-risk customers and recommended retention actions." Icon={Users} />
            <DeliverableItem title="Anomaly & Fraud Detection" desc="Early detection systems for operational risk and fraud." Icon={Activity} />
            <DeliverableItem title="Recommendation Engines" desc="Personalized suggestions that improve conversion and retention." Icon={Settings} />
            <DeliverableItem title="Real-time Predictive Dashboards" desc="Operationalize model outputs in accessible dashboards." Icon={BarChart3} />
            <DeliverableItem title="Model Monitoring & Retraining" desc="Automated drift detection and scheduled retraining workflows." Icon={Clock} />
          </ul>
        </div>
    </section>
  );
}