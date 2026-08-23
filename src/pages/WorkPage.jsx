// pages/WorkPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheckCircle, FiX } from "react-icons/fi";
import Reveal from "../components/Reveal";

const projects = [
  {
    id: "care-dent",
    name: "Care Dent",
    category: "CLIENT WORK",
    badge: "HEALTHCARE",
    summary: "Complete digital presence and patient clinic management platform with streamlined online booking and HIPAA-ready workflows.",
    techStack: ["React", "Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    challenge: "Clinics were struggling with fragmented scheduling systems and high appointment cancellation rates.",
    solution: "Designed and engineered a centralized patient portal with automated SMS reminders and online booking.",
    impact: "Reduced patient no-shows by 32% and saved hours of daily administrative triage.",
  },
  {
    id: "feline",
    name: "Feline Genuine Lubricants",
    category: "CLIENT WORK",
    badge: "COMMERCE",
    summary: "Industrial-grade brand website with dynamic product catalog filters, technical spec downloads, and dealer contact channels.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare"],
    challenge: "Industrial buyers needed quick access to technical data sheets and localized dealer contacts across multiple regions.",
    solution: "Delivered a high-speed catalog platform with search filtering and direct quotation routing.",
    impact: "Boosted dealer quotation inquiries by 40% across initial launch markets.",
  },
  {
    id: "hiretrix",
    name: "Hiretrix",
    category: "CLIENT WORK",
    badge: "SAAS",
    summary: "Intelligent recruitment platform with automated candidate screening, resume parsing, and objective evaluation workflows.",
    techStack: ["Next.js 15", "Node.js", "PostgreSQL", "OpenAI API", "Tailwind CSS"],
    challenge: "High-volume recruitment teams were spending excessive hours manually evaluating candidate resumes.",
    solution: "Engineered a candidate scoring engine with automated skill matching and contextual interview question generation.",
    impact: "Shortened initial candidate screening cycles from 4 weeks to 6 business days.",
  },
  {
    id: "agentgate",
    name: "AgentGate (MVP)",
    category: "AI & R&D",
    badge: "AI MVP",
    summary: "An internal prototype exploring runtime guardrails, prompt injection isolation, and tool verification for autonomous AI agents.",
    techStack: ["Python", "FastAPI", "Redis", "LangChain"],
    challenge: "Exploring how to inspect agent tool calls before execution to prevent unintended database mutations or prompt injections.",
    solution: "Built a lightweight inline proxy verifying agent intents against pre-defined safety rules.",
    impact: "Currently in private alpha validation with design partners under the Inferago AI MVP lab.",
  },
  {
    id: "pii-vault",
    name: "PII Anonymization Vault (R&D)",
    category: "AI & R&D",
    badge: "SECURITY R&D",
    summary: "A localized tokenization research utility that anonymizes sensitive personal tokens before passing context to external model APIs.",
    techStack: ["Rust", "Python", "Local NLP"],
    challenge: "Maintaining strict data privacy when sending prompts containing confidential tokens to cloud LLMs.",
    solution: "Tested automated token substitution replacing sensitive data with encrypted reversible placeholders.",
    impact: "Experimental research feeding into the Inferago AI MVP governance engine.",
  },
];

const filters = [
  { label: "ALL", value: "ALL" },
  { label: "CLIENT PRODUCTS (WEB)", value: "CLIENT WORK" },
  { label: "AI & R&D (MVP)", value: "AI & R&D" },
];

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-orange-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-12 md:pt-44 md:pb-16 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-xs font-mono tracking-widest text-orange-300 uppercase">
              PORTFOLIO & LAB EXPERIMENTS
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Selected Work & Projects.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Explore client products engineered under Inferago Web and research
              prototypes developed in our AI MVP lab.
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
                    ? "bg-white text-black font-semibold border-white shadow"
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
                className="glass-panel card-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                      {p.badge}
                    </span>
                    <span className="text-xs font-mono text-orange-400">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2">{p.name}</h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    {p.summary}
                  </p>
                </div>

                <div>
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

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black text-xs font-medium transition-all flex items-center gap-1.5"
                    >
                      <span>Project Details</span>
                      <FiArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== DETAIL MODAL ===================== */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-white/20 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <FiX size={18} />
              </button>

              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1 mb-4">
                {selectedProject.name}
              </h2>

              <div className="space-y-5 text-xs sm:text-sm leading-relaxed text-white/70">
                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-1">
                    Problem & Objectives
                  </h4>
                  <p className="font-light">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-1">
                    Delivered Solution
                  </h4>
                  <p className="font-light">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-1">
                    Results & Impact
                  </h4>
                  <p className="font-light">{selectedProject.impact}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase mb-2">
                    Technologies Used
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
                  <span>Build With Us</span>
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
