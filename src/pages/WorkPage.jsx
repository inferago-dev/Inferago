// pages/WorkPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheckCircle, FiLayers, FiShield, FiCpu, FiExternalLink, FiX } from "react-icons/fi";
import Reveal from "../components/Reveal";

const projects = [
  {
    id: "agentgate",
    name: "AgentGate",
    tag: "AI",
    category: "AI Governance & Security",
    summary: "High-throughput runtime proxy and guardrail firewall designed to intercept, audit, and sanitize autonomous agent tool calls before execution.",
    metric: "99.98% Guardrail Accuracy",
    techStack: ["Python", "FastAPI", "Redis", "LangChain", "Docker"],
    challenge: "Autonomous multi-agent systems were attempting prompt injections and unauthorized SQL mutations against production databases without deterministic verification.",
    solution: "Deployed a sub-15ms inline proxy verifying all agent tool calls against semantic policy schemas with dynamic PII redaction.",
    impact: "Protected 14+ autonomous agent workflows handling over 8M monthly requests with zero security breaches.",
  },
  {
    id: "hiretrix",
    name: "Hiretrix",
    tag: "PRODUCTS",
    category: "Intelligent Recruitment SaaS",
    summary: "Modern AI-assisted candidate evaluation and talent assessment suite with automated technical resume parsing and bias-free scoring.",
    metric: "4.2x Faster Hiring Sprints",
    techStack: ["Next.js 15", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    challenge: "Traditional hiring workflows were taking 40+ hours per candidate with inconsistent screening criteria and slow candidate turnaround times.",
    solution: "Engineered a reactive candidate scoring pipeline that automatically analyzes candidate experience and generates contextual interview guides.",
    impact: "Shortened hiring timeframes from 4 weeks to 6 days across early enterprise design partners.",
  },
  {
    id: "care-dent",
    name: "Care Dent",
    tag: "PRODUCTS",
    category: "Healthcare SaaS Platform",
    summary: "Cloud-native clinic management suite integrating multi-location scheduling, patient communication pipelines, and HIPAA-compliant digital records.",
    metric: "40% Admin Time Saved",
    techStack: ["React", "FastAPI", "PostgreSQL", "AWS HIPAA Cloud", "Stripe"],
    challenge: "Dental clinics were operating on disconnected legacy desktop software with high patient no-show rates and manual billing overhead.",
    solution: "Delivered a centralized multi-tenant platform with automated SMS follow-ups, real-time insurance verification, and online payments.",
    impact: "Reduced clinic appointment no-shows by 32% while automating 85% of routine check-in paperwork.",
  },
  {
    id: "feline",
    name: "Feline Commerce",
    tag: "PRODUCTS",
    category: "High-Performance Commerce Platform",
    summary: "Next-generation headless commerce platform engineered with ultra-fast catalog search, dynamic inventory forecasting, and frictionless checkout.",
    metric: "3.1x Conversion Uplift",
    techStack: ["Next.js", "Shopify GraphQL", "Tailwind", "Redis Cache"],
    challenge: "Slow load times and fragmented checkout funnels were hurting customer conversion and mobile retention.",
    solution: "Rebuilt the entire commerce architecture with sub-second edge routing, localized currency support, and intelligent product recommendations.",
    impact: "Achieved a 98 Google Lighthouse performance score and boosted mobile conversion by 45%.",
  },
  {
    id: "pii-anonymizer",
    name: "PII Anonymization Vault",
    tag: "R&D",
    category: "Enterprise Security & Privacy R&D",
    summary: "Cryptographic streaming tokenizer that dynamically redacts sensitive personal data from LLM context windows before external cloud inference.",
    metric: "100% PII Masking Guarantee",
    techStack: ["Rust", "Python", "Local Transformers", "AES-256 GCM"],
    challenge: "Enterprise legal constraints prohibited sending raw customer identification or financial information to third-party LLM APIs.",
    solution: "Built a localized high-speed Rust-based tokenizer that swaps sensitive tokens with encrypted reversible hashes before LLM calls.",
    impact: "Enabled enterprise client to adopt cloud LLMs while maintaining 100% compliance with strict EU and HIPAA privacy mandates.",
  },
  {
    id: "gov-mesh",
    name: "AI Automation Governance Mesh",
    tag: "AI",
    category: "Autonomous Agent Orchestration",
    summary: "Distributed observability and risk management cluster providing real-time telemetry, cost controls, and rogue execution isolation.",
    metric: "Sub-20ms P99 Latency",
    techStack: ["Go", "Kubernetes", "Prometheus", "OpenTelemetry", "Grafana"],
    challenge: "Unchecked recursive agent loops were causing unexpected token cost spikes and cascading API rate limit failures.",
    solution: "Implemented automated circuit-breaker patterns and real-time velocity controllers across all agent execution clusters.",
    impact: "Eliminated runaway token spend and reduced agent execution failure cascades by 94%.",
  },
];

const filters = [
  { label: "ALL", value: "ALL" },
  { label: "AI & GOVERNANCE", value: "AI" },
  { label: "SAAS & PRODUCTS", value: "PRODUCTS" },
  { label: "ENTERPRISE R&D", value: "R&D" },
];

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-25" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-orange-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-12 md:pt-44 md:pb-16 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wide text-white/80">
              PROVEN CASE STUDIES & ARCHITECTURE
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Systems & Products We&rsquo;ve Built.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Explore real-world software platforms, AI governance frameworks, and
              high-throughput systems engineered for measurable client impact.
            </p>
          </Reveal>

          {/* Filter Pills */}
          <Reveal delay={240} className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 text-xs font-mono rounded-full border transition-all active:scale-95 ${
                  activeFilter === f.value
                    ? "bg-white text-black font-semibold border-white shadow-lg"
                    : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        </section>

        {/* ===================== PROJECTS GRID ===================== */}
        <section className="py-12 pb-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 80}
                className="glass-panel card-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-orange-400/90 uppercase tracking-wider">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2">{p.name}</h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    {p.summary}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      {p.metric}
                    </span>
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black text-xs font-medium transition-all flex items-center gap-1.5"
                    >
                      <span>Case Details</span>
                      <FiArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== CASE STUDY MODAL DRAWER ===================== */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-white/20 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <FiX size={18} />
              </button>

              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1 mb-3">
                {selectedProject.name}
              </h2>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-6">
                Verified Outcome: {selectedProject.metric}
              </div>

              <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-white/70">
                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-1">
                    The Challenge
                  </h4>
                  <p className="font-light">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-1">
                    Inferago Engineering Solution
                  </h4>
                  <p className="font-light">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-1">
                    Measurable Impact
                  </h4>
                  <p className="font-light">{selectedProject.impact}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-2">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-mono text-white/60 hover:text-white"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs hover:bg-white/90 transition-all flex items-center gap-2"
                >
                  <span>Build a Similar System</span>
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkPage;
