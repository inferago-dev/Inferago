// pages/WebPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FiGlobe,
  FiSmartphone,
  FiCode,
  FiTrendingUp,
  FiCpu,
  FiTool,
  FiArrowUpRight,
  FiCheckCircle,
  FiShield,
} from "react-icons/fi";
import Reveal from "../components/Reveal";

const services = [
  {
    icon: FiGlobe,
    category: "BUILD",
    title: "Web & Software Development",
    desc: "Digital products engineered around your business goals and customer needs.",
    items: [
      "Custom Websites & Brand Experiences",
      "Web Applications & SaaS Platforms",
      "Mobile Apps (React Native & Flutter)",
      "Headless E-commerce & Portals",
      "Custom Software, APIs & Microservices",
    ],
  },
  {
    icon: FiTrendingUp,
    category: "GROW",
    title: "Digital Marketing & SEO",
    desc: "Turn your digital footprint into a measurable customer acquisition engine.",
    items: [
      "Search Engine Optimization (SEO)",
      "Social Media Growth Strategy",
      "Paid Performance Advertising",
      "Technical Copywriting & Content",
      "Conversion Rate Optimization (CRO)",
    ],
  },
  {
    icon: FiCpu,
    category: "AUTOMATE",
    title: "AI Integration & Workflows",
    desc: "Seamlessly integrate intelligent automation and LLMs into your existing business software.",
    items: [
      "Custom AI Workflow Automations",
      "Domain-Specific AI Agents & Copilots",
      "Vector Search & Internal Knowledge Engines",
      "Automated Triage & Customer Support",
      "Model Fine-Tuning & Prompt Pipelines",
    ],
  },
  {
    icon: FiTool,
    category: "SUPPORT",
    title: "Maintenance & AMC Support",
    desc: "Keep your websites and platforms secure, high-performing, and up to date.",
    items: [
      "Continuous Security & Vulnerability Patches",
      "Cloud Infrastructure & Dependency Updates",
      "24/7 Availability & Uptime Monitoring",
      "Monthly Feature & Content Change Allowance",
      "Dedicated SLA & Emergency Response",
    ],
  },
];

const pillars = [
  {
    title: "Business-first",
    desc: "We start by understanding your unit economics, users, and market problem before selecting the tech stack.",
  },
  {
    title: "Modern engineering",
    desc: "We build with type-safe, maintainable standards—ensuring your platform is easy to scale and extend.",
  },
  {
    title: "Scalable foundations",
    desc: "Build for today without making future growth painful or requiring expensive rewrites.",
  },
  {
    title: "One complete partner",
    desc: "Engineering, design, digital marketing, and intelligent automation under a single cohesive team.",
  },
];

const WebPage = () => {
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
              SERVICES & DIGITAL ENGINEERING
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
              Technology Built Around{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-white bg-clip-text text-transparent">
                Your Business.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              We design, build, launch, and grow digital products for businesses
              ready to move forward with modern software.
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
              Explore Our Work
            </Link>
          </Reveal>
        </section>

        {/* ===================== SERVICES GRID ===================== */}
        <section className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal
                  key={svc.title}
                  delay={i * 80}
                  className="glass-panel card-lift rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                        {svc.category}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <ul className="space-y-2.5 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/70 font-light">
                      {svc.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <FiCheckCircle className="text-orange-400 shrink-0 text-xs" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ===================== WHY INFERAGO PILLARS ===================== */}
        <section className="py-16 md:py-24 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                WHY INFERAGO
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
                A Different Kind of Technology Partner
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-8">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 60}
                  className="border-l-2 border-orange-500/50 pl-5 py-1"
                >
                  <h3 className="text-lg font-medium text-white mb-1.5">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== DIRECT CTA ===================== */}
        <section className="py-20 md:py-32 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to build something impactful?
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl mx-auto mb-8 leading-relaxed">
              Book an initial 30-minute discovery call. We will review your project
              scope and outline a concrete sprint plan.
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Start a Project</span>
              <FiArrowUpRight />
            </Link>
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default WebPage;
