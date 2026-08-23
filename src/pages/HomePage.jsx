// pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FiGlobe,
  FiSmartphone,
  FiCode,
  FiArrowUpRight,
  FiTrendingUp,
  FiCpu,
  FiShield,
  FiCheckCircle,
  FiLayers,
  FiTool,
} from "react-icons/fi";
import Reveal from "../components/Reveal";

const quickCards = [
  { icon: FiGlobe, label: "Websites & Web Apps", desc: "Fast, responsive, conversion-focused." },
  { icon: FiSmartphone, label: "Mobile Applications", desc: "Cross-platform iOS & Android." },
  { icon: FiCode, label: "Custom Software", desc: "Tailored APIs, portals & databases." },
];

const services = [
  {
    tag: "BUILD",
    title: "Web & Software Development",
    desc: "Digital products engineered around your business.",
    items: [
      "Websites & Landing Pages",
      "Web Applications & SaaS",
      "Mobile Apps (iOS & Android)",
      "E-commerce Platforms",
      "Custom Software & APIs",
    ],
  },
  {
    tag: "GROW",
    title: "Digital Marketing & SEO",
    desc: "Turn your digital presence into a measurable growth channel.",
    items: [
      "Search Engine Optimization (SEO)",
      "Social Media Management",
      "Paid Advertising & Ads",
      "Content & Copywriting",
      "Lead Generation & Analytics",
    ],
  },
  {
    tag: "AUTOMATE",
    title: "AI Integration & Workflows",
    desc: "Bring intelligent automation into your existing operations.",
    items: [
      "AI Workflow Automation",
      "Custom AI Agents & Copilots",
      "RAG Knowledge Engines",
      "AI-Powered Feature Engineering",
      "API Integrations",
    ],
  },
  {
    tag: "SUPPORT",
    title: "Maintenance & AMC",
    desc: "Keep what we build running, secure, and up to date.",
    items: [
      "Bug Fixes & Security Patches",
      "Dependency & Cloud Updates",
      "24/7 Uptime Monitoring",
      "Monthly Change Allowances",
      "Priority SLA Support",
    ],
  },
];

const selectedWork = [
  {
    name: "Care Dent",
    type: "Business Website & Portal",
    tag: "Website Development",
    desc: "A clean, patient-first clinic management and booking platform designed for streamlined patient scheduling.",
    badge: "HEALTHCARE",
  },
  {
    name: "Feline Genuine Lubricants",
    type: "Brand & Product Catalog Platform",
    tag: "Website & Digital Presence",
    desc: "An industrial-grade digital presence with localized product catalogs, dealer locators, and inquiry channels.",
    badge: "COMMERCE",
  },
  {
    name: "Hiretrix",
    type: "Intelligent SaaS Suite",
    tag: "Software Engineering",
    desc: "Automated candidate assessment and hiring pipeline software with contextual scoring.",
    badge: "SAAS",
  },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "Understand your business model, users, and core objectives." },
  { step: "02", title: "Plan", desc: "Define precise technical scope, system architecture, and roadmap." },
  { step: "03", title: "Design", desc: "Create high-converting user interfaces and frictionless UX flows." },
  { step: "04", title: "Build", desc: "Develop clean, type-safe code with automated testing and continuous integration." },
  { step: "05", title: "Launch", desc: "Deploy to scalable cloud infrastructure and verify production readiness." },
  { step: "06", title: "Grow", desc: "Maintain, optimize SEO, and scale with ongoing performance updates." },
];

const stackCategories = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "Python", "FastAPI", "Go"] },
  { name: "Mobile", items: ["React Native", "Flutter"] },
  { name: "Database", items: ["PostgreSQL", "Supabase", "MongoDB", "Redis"] },
  { name: "Cloud", items: ["AWS", "Vercel", "Cloudflare", "Docker"] },
  { name: "AI Stack", items: ["OpenAI", "Anthropic", "Groq", "LangChain"] },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Subtle Background Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-20" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[450px] bg-gradient-to-b from-orange-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-xs font-mono tracking-widest text-orange-300 uppercase">
              INFERAGO / TECH & DIGITAL SERVICES
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08]">
              We Build Digital Products That{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-white bg-clip-text text-transparent">
                Move Businesses Forward.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              From websites and web applications to custom software, digital
              marketing, and AI-powered solutions, Inferago helps businesses build,
              launch, and grow.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
              <span>Start a Project</span>
              <FiArrowUpRight className="text-base" />
            </Link>
            <Link
              to="/work"
              className="px-6 py-3 text-sm font-medium text-white/80 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all active:scale-95"
            >
              Explore Our Work
            </Link>
          </Reveal>

          {/* Quick Pillar Cards */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {quickCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.label}
                  delay={i * 80 + 300}
                  className="glass-panel card-lift rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-medium text-white mb-1">{item.label}</h3>
                  <p className="text-xs text-white/50 font-light">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ===================== VALUE PROP BANNER ===================== */}
        <section className="py-14 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Build. Grow. Scale.
            </h2>
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                We combine design, engineering, and digital strategy to help
                businesses create superior customer experiences and dependable
                digital operations.
              </p>
              <div className="flex gap-6 text-xs font-mono text-white/40 uppercase tracking-widest pt-2">
                <span>01. Build</span>
                <span>02. Grow</span>
                <span>03. Automate</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WHAT WE DO / SERVICES ===================== */}
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
              WHAT WE DO
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
              Technology Built Around Your Business
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <Reveal
                key={svc.tag}
                delay={i * 80}
                className="glass-panel card-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10"
              >
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block mb-3">
                    {svc.tag}
                  </span>
                  <h3 className="text-lg font-medium text-white mb-2">{svc.title}</h3>
                  <p className="text-xs text-white/50 font-light leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/70 font-light">
                    {svc.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== SELECTED WORK ===================== */}
        <section className="py-16 md:py-24 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                  PORTFOLIO
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
                  Selected Work
                </h2>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-white transition-colors"
              >
                <span>View All Projects</span>
                <FiArrowUpRight />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {selectedWork.map((proj, i) => (
                <Reveal
                  key={proj.name}
                  delay={i * 80}
                  className="glass-panel card-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10"
                >
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 mb-3 inline-block">
                      {proj.badge}
                    </span>
                    <h3 className="text-lg font-medium text-white mb-1">{proj.name}</h3>
                    <div className="text-xs font-mono text-orange-300 mb-3">
                      {proj.tag}
                    </div>
                    <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-white/40">{proj.type}</span>
                    <Link
                      to="/work"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors"
                    >
                      <FiArrowUpRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== OUR PROCESS ===================== */}
        <section className="py-20 md:py-28 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
              From Concept to Launch in 6 Steps
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 60}
                className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                <span className="text-sm font-mono text-orange-400 font-bold block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-medium text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== MODERN TECH STACK ===================== */}
        <section className="py-16 md:py-24 border-y border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                TECH STACK
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
                Built With Modern Standards
              </h2>
            </Reveal>

            <div className="space-y-6">
              {stackCategories.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pb-4 border-b border-white/5">
                  <span className="text-xs font-mono text-white/40 uppercase sm:w-28 shrink-0">
                    {cat.name}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-white/70 hover:text-white hover:border-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== DISTINCT SEPARATE AI MVP CALLOUT ===================== */}
        <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-mono mb-4">
              <span>EXPLORE INFERAGO AI</span>
              <span className="px-1.5 py-0.2 rounded bg-orange-500/20 text-[10px]">MVP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              Need Runtime AI Governance or Guardrails?
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-lg mx-auto mb-6 leading-relaxed">
              We&rsquo;re currently validating an experimental runtime security and
              governance layer for autonomous AI agent workflows.
            </p>
            <Link
              to="/ai"
              className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors"
            >
              <span>Explore the Inferago AI MVP Lab</span>
              <FiArrowUpRight />
            </Link>
          </Reveal>
        </section>

        {/* ===================== GET STARTED CTA ===================== */}
        <section className="py-16 pb-24 md:py-24 md:pb-32 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <Reveal className="glass-panel rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-4">
              GET STARTED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/60 font-light max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us what you&rsquo;re trying to build. We&rsquo;ll help you
              architect the right solution and sprint plan.
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

export default HomePage;
