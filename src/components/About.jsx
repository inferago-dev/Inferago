// components/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FiGlobe,
  FiCode,
  FiCpu,
  FiShield,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";
import Reveal from "./Reveal";

const disciplines = [
  {
    role: "Web & Product Engineering",
    desc: "Building high-performance web applications, scalable SaaS foundations, and mobile experiences.",
    icon: FiCode,
  },
  {
    role: "Digital Growth & SEO",
    desc: "Designing conversion funnels, search visibility strategies, and customer acquisition channels.",
    icon: FiTrendingUp,
  },
  {
    role: "AI Integration & Workflows",
    desc: "Integrating LLMs, vector search, and intelligent automation into existing business systems.",
    icon: FiGlobe,
  },
  {
    role: "AI Governance MVP Lab",
    desc: "Researching runtime guardrails and agent execution boundaries in our internal validation incubator.",
    icon: FiShield,
  },
];

const pillars = [
  {
    number: "01",
    title: "Business-First Architecture",
    desc: "We prioritize solving real business bottlenecks over choosing technology for the sake of hype.",
  },
  {
    number: "02",
    title: "100% Client Code & IP Ownership",
    desc: "Everything we build for clients belongs entirely to them with clean, type-safe, maintainable standards.",
  },
  {
    number: "03",
    title: "High-Velocity Sprints",
    desc: "We work in structured weekly iterative cycles with live staging environments and rapid feedback.",
  },
  {
    number: "04",
    title: "Long-Term Reliability",
    desc: "Our maintenance and support options keep production systems secure, patched, and performing smoothly.",
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-orange-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-xs font-mono tracking-widest text-orange-300 uppercase">
              ABOUT INFERAGO
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              A Dedicated Technology &{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-white bg-clip-text text-transparent">
                Digital Services Partner.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Inferago helps companies build, launch, and grow digital products.
              We also incubate next-generation AI governance prototypes in our
              focused MVP lab.
            </p>
          </Reveal>
        </section>

        {/* ===================== STORY CARD ===================== */}
        <section className="py-8 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-3">
              OUR MISSION & MODEL
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
              Engineering Digital Products & Exploring AI Foundations
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              <p>
                Inferago operates as a full-service technology partner for
                businesses seeking modern websites, web applications, custom
                software, digital marketing, and AI integration. We combine
                thoughtful product design with dependable engineering to deliver
                real business outcomes.
              </p>
              <p>
                In parallel, our team runs <strong className="text-white font-medium">Inferago AI</strong> as an early-stage MVP lab—researching and validating runtime governance and security guardrails for autonomous AI agent workflows.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ===================== CORE PILLARS ===================== */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
              Guiding Principles
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal
                key={p.number}
                delay={i * 80}
                className="glass-panel card-lift rounded-3xl p-7 sm:p-8 border border-white/10"
              >
                <span className="text-2xl font-mono font-bold text-white/20 mb-2 block">
                  {p.number}
                </span>
                <h3 className="text-lg font-medium text-white mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== DISCIPLINES ===================== */}
        <section className="py-16 md:py-24 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {disciplines.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal
                    key={item.role}
                    delay={i * 60}
                    className="glass-panel card-lift rounded-2xl p-6 border border-white/10"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-medium text-white mb-1.5">{item.role}</h3>
                    <p className="text-xs text-white/50 font-light leading-relaxed">
                      {item.desc}
                    </p>
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
              Let&rsquo;s discuss your next digital project.
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Connect directly with our engineering and strategy team to discuss
              scope, timeline, and deliverables.
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
