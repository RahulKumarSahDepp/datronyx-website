"use client";

import React from "react";

export default function MLOpsCTA() {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-16 text-center bg-gradient-to-t from-[#0A0D1E] to-gray-950">
            <div className="max-w-4xl mx-auto p-10 rounded-2xl border border-gray-800 bg-gray-900/40">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ready for Production-Grade ML?</h3>
                <p className="text-lg text-gray-300 mt-4">Contact us to plan and deploy a robust MLOps platform tailored specifically to your data science needs.</p>
                <a href="/contact" className="inline-block mt-8 px-8 py-4 bg-purple-600 rounded-full font-bold text-lg shadow-2xl shadow-purple-600/40 hover:bg-purple-500 transition-all duration-300 hover:-translate-y-0.5">
                    Start MLOps Project
                </a>
            </div>
        </section>
    );
}