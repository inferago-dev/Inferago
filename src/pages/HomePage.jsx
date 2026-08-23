// pages/HomePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiLayers,
  FiArrowUpRight,
  FiCheckCircle,
  FiActivity,
  FiCode,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import Reveal from "../components/Reveal";

const techStack = [
  "Python",
  "PyTorch",
  "LangChain",
  "OpenAI",
  "Anthropic",
  "Next.js",
  "TypeScript",
  "FastAPI",
  "Kubernetes",
  "PostgreSQL",
  "Redis",
  "Docker",
];

const featuredProjects = [
  {
    name: "AgentGate",
    category: "AI Governance & Security",
    desc: "Runtime proxy and token firewall providing zero-latency policy enforcement and PII anonymization for autonomous agent fleets.",
    metric: "99.98% Threat Interception",
    tag: "AI Security",
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    name: "Hiretrix",
    category: "Intelligent SaaS Platform",
    desc: "Autonomous recruiting and talent evaluation engine with automated candidate vetting and unbiased workflow pipelines.",
    metric: "4.2x Faster Hiring Cycles",
    tag: "Digital Product",
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    name: "Care Dent",
    category: "Healthcare Workflow System",
    desc: "Enterprise clinic orchestration suite integrating real-time scheduling, automated patient follow-ups, and HIPAA-compliant records.",
    metric: "40% Admin Time Saved",
    tag: "Enterprise SaaS",
    color: "from-emerald-500/20 to-teal-500/10",
  },
];

const deliverySteps = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "We dissect your technical requirements, AI risk vectors, and product architecture before writing a single line of code.",
  },
  {
    step: "02",
    title: "Rapid Architecture",
    desc: "Engineered foundations with high-throughput schemas, modular AI hooks, and rock-solid design systems.",
  },
  {
    step: "03",
    title: "Velocity Sprints",
    desc: "Weekly iterative releases with live staging environments, automated test coverage, and transparent milestone tracking.",
  },
  {
    step: "04",
    title: "Hardening & Scale",
    desc: "Production load testing, security auditing, runtime guardrail integration, and global cloud deployment.",
  },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("guardrails");

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-30" />
        <div className="bg-dots opacity-20" />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-orange-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full animate-aura pointer-events-none"
        />
        <div
          className="absolute top-[45%] -right-40 w-[600px] h-[450px] bg-gradient-to-l from-blue-600/15 via-indigo-500/10 to-transparent blur-[140px] rounded-full pointer-events-none"
        />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          {/* Top Banner Chip */}
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wide text-white/80">
              Inferago AI & Product Systems v2.4
            </span>
          </Reveal>

          {/* Main Hero Headline */}
          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-5xl mx-auto text-white">
              Building the systems{" "}
              <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                behind what&rsquo;s next.
              </span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={160}>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Inferago designs runtime governance for autonomous AI agents and
              engineers enterprise-grade digital products that scale.
            </p>
          </Reveal>

          {/* CTA Group */}
          <Reveal delay={240} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/ai"
              className="px-6 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg shadow-white/10 flex items-center gap-2"
            >
              <span>Explore AI Platform</span>
              <FiArrowUpRight className="text-base" />
            </Link>
            <Link
              to="/web"
              className="px-6 py-3 text-sm font-medium text-white/80 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Build a Product</span>
              <FiArrowUpRight className="text-base text-white/50" />
            </Link>
          </Reveal>

          {/* Live Interactive Hero Showcase / Telemetry Board */}
          <Reveal delay={320} className="mt-14 md:mt-20">
            <div className="glass-panel rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-left border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-white/40">
                    inferago-cluster://production-telemetry
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Runtime Guard Active
                  </span>
                </div>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                  <div className="text-[11px] font-mono text-white/40 uppercase">Guardrail Latency</div>
                  <div className="text-xl md:text-2xl font-bold text-white mt-1">12.4 ms</div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <FiCheckCircle size={12} /> P99 Sub-20ms
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                  <div className="text-[11px] font-mono text-white/40 uppercase">Active Agent Nodes</div>
                  <div className="text-xl md:text-2xl font-bold text-white mt-1">1,482</div>
                  <div className="text-[11px] text-white/50 mt-1">Across 14 regions</div>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                  <div className="text-[11px] font-mono text-white/40 uppercase">Threat Interceptions</div>
                  <div className="text-xl md:text-2xl font-bold text-orange-400 mt-1">99.98%</div>
                  <div className="text-[11px] text-orange-400/80 mt-1">Zero leakages</div>
                </div>

                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                  <div className="text-[11px] font-mono text-white/40 uppercase">Tokens Audited</div>
                  <div className="text-xl md:text-2xl font-bold text-blue-400 mt-1">184.2M</div>
                  <div className="text-[11px] text-blue-400/80 mt-1">Real-time vector audit</div>
                </div>
              </div>

              {/* Interactive Telemetry Stream Preview */}
              <div className="bg-[#090b0f] rounded-xl p-4 border border-white/[0.06] font-mono text-xs text-white/70 overflow-x-auto">
                <div className="flex items-center justify-between text-white/40 text-[11px] pb-2 border-b border-white/5 mb-2">
                  <span>EVENT STREAM</span>
                  <span>TIME: LIVE</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">[INSPECT]</span>
                    <span className="text-white/40">Agent #4021</span>
                    <span>Tool call &lsquo;exec_db_query&lsquo; intercepted & validated</span>
                    <span className="text-emerald-400/70 ml-auto">PASS (2ms)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-400">[SHIELD]</span>
                    <span className="text-white/40">Agent #8812</span>
                    <span>Prompt injection vector quarantined</span>
                    <span className="text-orange-400/90 ml-auto">BLOCKED</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">[AUDIT]</span>
                    <span className="text-white/40">Agent #1094</span>
                    <span>PII redacting 4 variables before downstream sync</span>
                    <span className="text-blue-400/80 ml-auto">SANITIZED</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===================== TECH STACK MARQUEE ===================== */}
        <section className="py-10 border-y border-white/[0.07] bg-white/[0.01]">
          <div className="max-w-6xl mx-auto px-5">
            <p className="text-center text-xs font-mono tracking-widest text-white/40 uppercase mb-6">
              ENGINEERED ON MODERN INFRASTRUCTURE & FOUNDATIONAL MODELS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-white/70 hover:text-white hover:border-white/20 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== DUAL ENGINE ECOSYSTEM ===================== */}
        <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 tracking-wider uppercase mb-3">
              <HiOutlineSparkles />
              <span>Two Disciplines. One High-Impact Studio.</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              How We Build for the Future
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/50 font-light">
              We operate at the intersection of critical AI infrastructure and
              flawlessly designed client products.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI Platform Engine */}
            <Reveal
              delay={100}
              className="glass-panel card-lift rounded-3xl p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-orange-500/15 transition-all duration-500" />
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-orange-400/90 uppercase px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                  01 — INTELLIGENCE
                </span>
                <FiShield className="text-2xl text-orange-400" />
              </div>

              <h3 className="text-2xl font-medium text-white mb-3">
                Inferago AI Platform
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                The runtime governance and security suite for organizations
                deploying autonomous agentic workflows, LLM pipelines, and AI systems.
              </p>

              <div className="space-y-2.5 mb-8 flex-1">
                {[
                  "Real-time guardrails & prompt injection shield",
                  "Agent execution monitoring & audit logging",
                  "Automated compliance & PII sanitization",
                  "Sub-20ms policy enforcement proxy",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                    <FiCheckCircle className="text-orange-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/ai"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 active:scale-95 transition-all shadow-md"
              >
                <span>Explore AI Platform</span>
                <FiArrowUpRight />
              </Link>
            </Reveal>

            {/* Web & Digital Products Engine */}
            <Reveal
              delay={200}
              className="glass-panel card-lift rounded-3xl p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500" />
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-blue-400/90 uppercase px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  02 — PRODUCTS
                </span>
                <FiLayers className="text-2xl text-blue-400" />
              </div>

              <h3 className="text-2xl font-medium text-white mb-3">
                Inferago Web Engineering
              </h3>
              <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                End-to-end product design and software engineering for companies
                launching scalable SaaS platforms, client portals, and bespoke tools.
              </p>

              <div className="space-y-2.5 mb-8 flex-1">
                {[
                  "High-performance SaaS architectures",
                  "Modern Next.js & React digital experiences",
                  "Custom AI tool integration & API engineering",
                  "Continuous cloud deployment & monitoring",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                    <FiCheckCircle className="text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/web"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-white/90 active:scale-95 transition-all shadow-md"
              >
                <span>Build a Digital Product</span>
                <FiArrowUpRight />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ===================== INTERACTIVE LIVE ARCHITECTURE DEMO ===================== */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-3">
              LIVE CAPABILITY EXPLORER
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Observability, Safety & Performance
            </h2>
            <p className="mt-2 text-sm text-white/50 font-light">
              See how Inferago provides end-to-end intelligence across every layer.
            </p>
          </Reveal>

          <Reveal delay={100} className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            {/* Tab Selectors */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pb-6 border-b border-white/10">
              <button
                onClick={() => setActiveTab("guardrails")}
                className={`px-4 py-2 text-xs font-mono rounded-full transition-all flex items-center gap-2 ${
                  activeTab === "guardrails"
                    ? "bg-white text-black shadow-md font-semibold"
                    : "bg-white/[0.04] text-white/60 hover:text-white"
                }`}
              >
                <FiShield /> Runtime Guardrails
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-4 py-2 text-xs font-mono rounded-full transition-all flex items-center gap-2 ${
                  activeTab === "telemetry"
                    ? "bg-white text-black shadow-md font-semibold"
                    : "bg-white/[0.04] text-white/60 hover:text-white"
                }`}
              >
                <FiActivity /> Agent Telemetry
              </button>
              <button
                onClick={() => setActiveTab("product")}
                className={`px-4 py-2 text-xs font-mono rounded-full transition-all flex items-center gap-2 ${
                  activeTab === "product"
                    ? "bg-white text-black shadow-md font-semibold"
                    : "bg-white/[0.04] text-white/60 hover:text-white"
                }`}
              >
                <FiCode /> Full-Stack Architecture
              </button>
            </div>

            {/* Tab 1: Guardrails */}
            {activeTab === "guardrails" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase">
                    Security Layer
                  </span>
                  <h3 className="text-2xl font-medium text-white mt-1 mb-3">
                    Zero-Latency Policy Interceptor
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    Runs ahead of every LLM and agent execution call. Catches
                    prompt injection attacks, data exfiltration attempts, and
                    enforces domain-specific compliance in under 15ms.
                  </p>
                  <ul className="space-y-3 text-xs text-white/70">
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400" />
                      Dynamic token-level masking for SSNs, APIs, and PII
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400" />
                      Automated jailbreak and adversarial prompt isolation
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400" />
                      Deterministic JSON structure and schema guarantee
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0a0c10] border border-white/10 rounded-2xl p-5 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/40 pb-3 border-b border-white/5 mb-3">
                    <span>guardrail_spec.py</span>
                    <span className="text-emerald-400">READY</span>
                  </div>
                  <pre className="text-emerald-300/90 leading-relaxed overflow-x-auto">
{`from inferago import GuardrailClient, Policy

client = GuardrailClient(api_key="inf_live_...")
policy = Policy(
    redact_pii=True,
    max_tokens=4096,
    strict_schema=True
)

@client.protect(policy=policy)
def execute_agent_action(prompt: str):
    # Guardrail runs before LLM invocation
    return llm.invoke(prompt)`}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 2: Telemetry */}
            {activeTab === "telemetry" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase">
                    Observability Layer
                  </span>
                  <h3 className="text-2xl font-medium text-white mt-1 mb-3">
                    Audit Logging & Anomaly Detection
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    Complete traceability of autonomous agents. Know every tool
                    called, token consumed, reasoning chain, and downstream API
                    mutation in a unified real-time dashboard.
                  </p>
                  <ul className="space-y-3 text-xs text-white/70">
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-blue-400" />
                      Distributed trace graphs of multi-agent handoffs
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-blue-400" />
                      Real-time cost & token consumption alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-blue-400" />
                      Immutable cryptographic audit trail for compliance
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0a0c10] border border-white/10 rounded-2xl p-5 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/40 pb-3 border-b border-white/5 mb-3">
                    <span>agent_telemetry.json</span>
                    <span className="text-blue-400">200 OK</span>
                  </div>
                  <pre className="text-blue-200/90 leading-relaxed overflow-x-auto">
{`{
  "trace_id": "tr_9a8c2f10b7",
  "agent_id": "orchestrator-main",
  "step_index": 3,
  "action": "sql_query_execution",
  "latency_ms": 18.4,
  "guardrail_status": "APPROVED",
  "pii_detected": false,
  "confidence_score": 0.994
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 3: Product Architecture */}
            {activeTab === "product" && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase">
                    Engineering Practice
                  </span>
                  <h3 className="text-2xl font-medium text-white mt-1 mb-3">
                    Production-Grade Product Engineering
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    We architect scalable web applications, client portals, and
                    modern SaaS foundations with clean code, high security, and
                    bulletproof DevOps pipelines.
                  </p>
                  <ul className="space-y-3 text-xs text-white/70">
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400" />
                      Next.js & React UI with modern aesthetic standards
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400" />
                      Type-safe APIs (FastAPI / Node) with PostgreSQL & Redis
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400" />
                      Automated CI/CD testing & zero-downtime deployment
                    </li>
                  </ul>
                </div>
                <div className="bg-[#0a0c10] border border-white/10 rounded-2xl p-5 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/40 pb-3 border-b border-white/5 mb-3">
                    <span>stack_manifest.yaml</span>
                    <span className="text-emerald-400">OPTIMIZED</span>
                  </div>
                  <pre className="text-white/80 leading-relaxed overflow-x-auto">
{`frontend:
  framework: "Next.js 15 / React 19"
  styling: "Tailwind CSS / Glassmorphism"
backend:
  services: "FastAPI / Node Microservices"
  database: "PostgreSQL with pgvector"
devops:
  orchestration: "Docker & Kubernetes"
  observability: "OpenTelemetry + Inferago"`}
                  </pre>
                </div>
              </div>
            )}
          </Reveal>
        </section>

        {/* ===================== FEATURED WORK & CASE STUDIES ===================== */}
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">
                PORTFOLIO PREVIEW
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Featured Systems & Products
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors"
            >
              <span>View all projects</span>
              <FiArrowUpRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((proj, i) => (
              <Reveal
                key={proj.name}
                delay={i * 100}
                className="glass-panel card-lift rounded-3xl p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${proj.color} opacity-30 pointer-events-none transition-opacity duration-300 group-hover:opacity-50`}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                      {proj.tag}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                      LIVE
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{proj.name}</h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400">
                    {proj.metric}
                  </span>
                  <Link
                    to="/work"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <FiArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== SPRINT-TO-PRODUCTION ROADMAP ===================== */}
        <section className="py-16 md:py-24 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">
                ENGINEERING PLAYBOOK
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                From Zero to Production in 4 Sprints
              </h2>
              <p className="mt-3 text-sm text-white/50 font-light">
                Our battle-tested workflow removes guesswork and delivers high-velocity execution.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverySteps.map((step, i) => (
                <Reveal
                  key={step.step}
                  delay={i * 80}
                  className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 relative hover:border-white/20 transition-colors"
                >
                  <div className="text-3xl font-mono font-bold text-white/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== DIRECT CONVERSION CTA ===================== */}
        <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-blue-500/10 opacity-70 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 inline-block">
                Start A Conversation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                Have something ambitious to build?
              </h2>
              <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-8">
                Whether you need a full-stack digital product or runtime governance
                for an AI agent fleet, our engineering team is ready.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Build with Us</span>
                  <FiArrowUpRight />
                </Link>
                <Link
                  to="/ai"
                  className="px-6 py-3 text-sm font-medium text-white/80 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all active:scale-95"
                >
                  Explore AI Infrastructure
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
