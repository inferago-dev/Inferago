// components/About.jsx
import React from "react";

const stats = [
  { value: "10×", label: "Faster Deployment" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "Zero", label: "Governance Gaps" },
];

const pillars = [
  {
    num: "01",
    title: "Governed by Design",
    desc: "Policy-first runtime. Every agent action is auditable, traceable, and compliant out of the box.",
  },
  {
    num: "02",
    title: "Agent-Native Core",
    desc: "Built for AI agents from day one — not bolted on. Orchestrate multi-agent workflows with full control.",
  },
  {
    num: "03",
    title: "Zero-Trust Security",
    desc: "End-to-end encryption, RBAC, and SOC 2 Type II compliance baked into the runtime.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-black inter-regular">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex justify-center mb-8">
          <span className="text-xs tracking-widest text-white/40 uppercase border border-white/10 rounded-full px-4 py-1.5">
            About Us
          </span>
        </div>

        {/* Headline + Subline */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl inter-medium text-white tracking-tight leading-tight mb-4">
            Automation you can trust.<br className="hidden md:block" /> At any scale.
          </h2>
          <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide">
            Inferago is the governance runtime for enterprise AI — unifying policy, observability, and orchestration in one coherent platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden mb-14">
          {stats.map((s, i) => (
            <div key={i} className="bg-black flex flex-col items-center justify-center py-8 px-4 text-center">
              <span className="text-2xl md:text-3xl inter-semibold text-white mb-1 tabular-nums">{s.value}</span>
              <span className="text-xs text-white/30 tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="glass-badge rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <span className="text-xs text-white/20 basier-mono tracking-widest block mb-4">{p.num}</span>
              <p className="text-sm inter-regular text-white mb-2 group-hover:text-white transition-colors">{p.title}</p>
              <p className="text-xs text-white/40 inter-light leading-6 tracking-wide">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;


