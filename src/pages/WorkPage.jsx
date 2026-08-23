// pages/WorkPage.jsx
import React, { useState } from "react";
import Reveal from "../components/Reveal";

const projects = [
  { name: "Care Dent", tag: "PRODUCTS", category: "Products" },
  { name: "Feline", tag: "PRODUCTS", category: "Products" },
  { name: "Hiretrix", tag: "PRODUCTS", category: "Products" },
  { name: "AgentGate", tag: "R&D", category: "R&D" },
  { name: "AI Automation Governance", tag: "AI", category: "AI" },
  { name: "PII Anonymization", tag: "R&D", category: "R&D" },
];

const filters = ["ALL", "AI", "PRODUCTS", "R&D"];

const WorkPage = () => {
  const [active, setActive] = useState("ALL");

  const visible =
    active === "ALL" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black inter-regular min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-8 md:mb-12">
          <div className="text-sm tracking-normal text-white/60 mb-4">WORK</div>
          <h1 className="text-3xl md:text-5xl inter-medium tracking-tight text-white">
            Things we&rsquo;ve built.
          </h1>
        </Reveal>

        <Reveal delay={60} className="flex items-center justify-center gap-3 mb-10 md:mb-14 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 text-xs rounded-full border transition-all active:scale-95 ${
                active === f
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visible.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 60}
              className="glass-badge card-lift rounded-2xl p-6 flex flex-col min-h-[160px]"
            >
              <div className="text-xs basier-mono tracking-tighter text-white/40 mb-auto">
                {p.tag}
              </div>
              <div>
                <h3 className="text-white text-sm md:text-base mb-1">{p.name}</h3>
                <p className="text-xs text-white/40 inter-light">Case study coming soon</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
