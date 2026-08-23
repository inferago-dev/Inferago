// pages/WebPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FiLayers,
  FiCpu,
  FiDatabase,
  FiLayout,
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiZap,
  FiShield,
  FiServer,
  FiTrendingUp,
} from "react-icons/fi";
import Reveal from "../components/Reveal";

const capabilities = [
  {
    icon: FiLayout,
    group: "ENTERPRISE SAAS & APPS",
    title: "Full-Stack Web Applications",
    desc: "Production-ready platforms engineered with Next.js, React, modern state architectures, role-based access control (RBAC), and subscription billing.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    icon: FiCpu,
    group: "INTELLIGENT WORKFLOWS",
    title: "AI-Augmented Digital Products",
    desc: "Bespoke AI copilots, retrieval-augmented generation (RAG) search engines, and automated business agents integrated seamlessly into your UX.",
    tags: ["OpenAI", "Anthropic", "pgvector", "LangChain", "FastAPI"],
  },
  {
    icon: FiServer,
    group: "HIGH-THROUGHPUT BACKENDS",
    title: "APIs & Cloud Infrastructure",
    desc: "Low-latency microservices, relational and vector databases, asynchronous event queues, and containerized cloud deployments.",
    tags: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    icon: FiShield,
    group: "PRODUCT DESIGN & ARCHITECTURE",
    title: "Design Systems & Prototyping",
    desc: "Obsidian-grade user interfaces with curated design tokens, dynamic micro-interactions, responsive ergonomics, and high conversion funnels.",
    tags: ["UI/UX Systems", "Figma", "Micro-Interactions", "SEO"],
  },
];

const comparisons = [
  {
    metric: "Engineering Velocity",
    agency: "3 - 6 Months slow handoffs",
    inferago: "4 - 6 Weeks rapid iterative sprints",
  },
  {
    metric: "Code & Ownership",
    agency: "Proprietary lock-in & messy templates",
    inferago: "100% Clean, type-safe, self-hosted IP",
  },
  {
    metric: "AI Native Capabilities",
    agency: "Basic wrapper or zero AI expertise",
    inferago: "Deep runtime governance & model fine-tuning",
  },
  {
    metric: "Architecture Quality",
    agency: "Generic WordPress / no-code limits",
    inferago: "Enterprise Next.js, FastAPI & Kubernetes",
  },
];

const WebPage = () => {
  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-blue-500/30">
      {/* Background Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-25" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-blue-600/15 via-indigo-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wide text-white/80">
              INFERAGO WEB & PRODUCT ENGINEERING
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              We turn ambitious ideas into{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                high-velocity digital products.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Product design and software engineering for businesses that want to
              ship scalable, AI-ready platforms people actually use.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
              <span>Start a Project</span>
              <FiArrowUpRight />
            </Link>
            <Link
              to="/work"
              className="px-6 py-3 text-sm font-medium text-white/80 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all active:scale-95"
            >
              View Our Work
            </Link>
          </Reveal>
        </section>

        {/* ===================== CAPABILITIES BENTO GRID ===================== */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
              Engineered for Speed, Scale & AI Readiness
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <Reveal
                  key={cap.title}
                  delay={i * 100}
                  className="glass-panel card-lift rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono text-blue-400/80 uppercase tracking-wider">
                        {cap.group}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ===================== AGENCY VS INFERAGO COMPARISON ===================== */}
        <section className="py-16 md:py-24 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                THE INFERAGO DIFFERENCE
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
                Why Founders & Tech Teams Partner With Us
              </h2>
            </Reveal>

            <Reveal delay={100} className="glass-panel rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 p-4 sm:p-5 bg-white/[0.03] border-b border-white/10 text-xs font-mono text-white/50 uppercase">
                <div>Metric / Factor</div>
                <div>Typical Agencies</div>
                <div className="text-blue-400 font-semibold">Inferago Studio</div>
              </div>

              <div className="divide-y divide-white/5">
                {comparisons.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="font-medium text-white/90">{row.metric}</div>
                    <div className="text-white/40 font-light">{row.agency}</div>
                    <div className="text-emerald-400 font-medium flex items-center gap-2">
                      <FiCheckCircle className="shrink-0" />
                      <span>{row.inferago}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== DIRECT CTA ===================== */}
        <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to build your next breakthrough product?
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Book a technical discovery call. We will review your product
              requirements and outline a clear sprint roadmap.
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Schedule Technical Discovery</span>
              <FiArrowUpRight />
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default WebPage;
