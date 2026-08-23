// components/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FiCpu,
  FiShield,
  FiServer,
  FiLayout,
  FiCloud,
  FiCompass,
  FiZap,
  FiLock,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import Reveal from "./Reveal";

const engineeringDisciplines = [
  {
    role: "AI / ML Runtime Governance",
    desc: "Developing low-latency semantic interceptors, token-level policy engines, and prompt injection defense models.",
    icon: FiCpu,
    color: "text-orange-400",
  },
  {
    role: "Cybersecurity & Applied Cryptography",
    desc: "Securing distributed autonomous agent communications, sandboxing tool execution, and PII anonymization.",
    icon: FiShield,
    color: "text-amber-400",
  },
  {
    role: "Distributed Cloud Infrastructure",
    desc: "Architecting high-throughput microservices, vector storage pipelines, and sub-20ms edge proxies.",
    icon: FiServer,
    color: "text-blue-400",
  },
  {
    role: "Product & Digital Engineering",
    desc: "Designing and shipping modern SaaS applications, interactive client platforms, and high-conversion UX funnels.",
    icon: FiLayout,
    color: "text-emerald-400",
  },
  {
    role: "DevOps & Production Reliability",
    desc: "Automating zero-downtime CI/CD deployments, distributed tracing, and real-time observability telemetry.",
    icon: FiCloud,
    color: "text-indigo-400",
  },
  {
    role: "Applied Research & Red-Teaming",
    desc: "Simulating emerging agentic attack vectors, jailbreaks, and recursive execution failure loops.",
    icon: FiCompass,
    color: "text-pink-400",
  },
];

const pillars = [
  {
    number: "01",
    title: "Runtime Verification Over Assumptions",
    desc: "We believe AI systems cannot rely solely on prompt engineering. Robust enterprise adoption requires deterministic runtime boundaries and real-time safeguards.",
  },
  {
    number: "02",
    title: "Product-First, Engineering Always",
    desc: "We do not sell abstract roadmaps or bloated billable hours. We engineer, ship, and harden real digital products that businesses depend on daily.",
  },
  {
    number: "03",
    title: "Zero Latency Tax",
    desc: "Security and governance should never compromise performance. Our inspection proxies run in under 15ms, maintaining silky-smooth user experiences.",
  },
  {
    number: "04",
    title: "100% Client IP Ownership",
    desc: "Everything we build for clients belongs entirely to them. No proprietary lock-in, no hidden runtime dependencies, only pristine, maintainable codebases.",
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-25" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-orange-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wide text-white/80">
              WHY INFERAGO EXISTS
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Engineering the foundation for the{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-blue-400 bg-clip-text text-transparent">
                autonomous era.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Inferago operates in two reinforcing directions: building runtime
              governance for autonomous AI systems, and engineering high-velocity
              digital products for forward-thinking enterprises.
            </p>
          </Reveal>
        </section>

        {/* ===================== ORIGIN STORY CARD ===================== */}
        <section className="py-10 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center md:text-left">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-3">
                OUR THESIS & ORIGIN
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
                Bridging the Governance Gap in Modern AI
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4">
                As organizations rapidly deploy autonomous agentic workflows and LLMs into production, the operational controls around security, hallucination containment, and privacy remain fragile.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                Inferago was founded to solve this critical bottleneck. By developing <strong className="text-white font-medium">Inferago AI</strong> — an inline runtime governance layer — we give engineering teams the tools to monitor, sandbox, and secure agents in real time.
              </p>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Simultaneously, <strong className="text-white font-medium">Inferago Web</strong> delivers battle-tested product design and full-stack engineering for modern clients — sharpening our technical architecture against real-world production demands.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ===================== CORE PILLARS ===================== */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              CORE PHILOSOPHY
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
              Guiding Engineering Principles
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal
                key={p.number}
                delay={i * 80}
                className="glass-panel card-lift rounded-3xl p-7 sm:p-8 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-white/20 mb-3 block">
                    {p.number}
                  </span>
                  <h3 className="text-lg font-medium text-white mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== DISCIPLINES / TEAM DOMAINS ===================== */}
        <section className="py-16 md:py-24 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                TECHNICAL DISCIPLINES
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
                Domain Specializations
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/50 font-light">
                Our multi-disciplinary team brings deep expertise across the modern computing spectrum.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineeringDisciplines.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.role}
                    delay={i * 60}
                    className="glass-panel card-lift rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
                        <Icon className={item.color} size={18} />
                      </div>
                      <h3 className="text-sm font-medium text-white mb-2">{item.role}</h3>
                      <p className="text-xs text-white/50 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== DIRECT CTA ===================== */}
        <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Partner with an engineering team that delivers.
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you need to harden autonomous AI agents or build a new
              commercial web platform, we bring production clarity from day one.
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <FiArrowUpRight />
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default About;
