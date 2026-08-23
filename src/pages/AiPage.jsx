// pages/AiPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiLock,
  FiCpu,
  FiCheckCircle,
  FiArrowUpRight,
  FiSend,
} from "react-icons/fi";
import { LuScanEye } from "react-icons/lu";
import Reveal from "../components/Reveal";

const mvpFeatures = [
  {
    icon: FiShield,
    title: "Runtime Guardrails",
    badge: "MVP ALPHA",
    desc: "Intercepts and scans incoming prompts and outgoing model payloads to isolate prompt injections and malicious execution instructions.",
  },
  {
    icon: FiLock,
    title: "Tool Execution Sandboxing",
    badge: "IN TESTING",
    desc: "Provides deterministic boundary checks for autonomous agent tool invocations, protecting databases and external APIs from rogue mutations.",
  },
  {
    icon: LuScanEye,
    title: "PII Sanitization Proxy",
    badge: "EARLY ACCESS",
    desc: "Automatically detects and redacts personal, financial, and confidential tokens before passing context to external model providers.",
  },
];

const AiPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Background Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[380px] bg-gradient-to-b from-orange-600/15 via-amber-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-28 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* ===================== MVP HERO ===================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>INFERAGO AI — MVP / PRIVATE PREVIEW</span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Runtime Governance for{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-blue-400 bg-clip-text text-transparent">
                Autonomous AI Agents.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
              Inferago AI is an early-stage MVP developing runtime security and
              observability controls for organizations testing autonomous agents.
              We sit between agents and infrastructure to enforce safety policies in real time.
            </p>
          </Reveal>
        </div>

        {/* ===================== SIMPLIFIED MVP CONCEPT CANVAS ===================== */}
        <Reveal delay={200} className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
              HOW IT WORKS (MVP ARCHITECTURE)
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5">
              <span className="text-xs font-mono text-orange-400 block mb-1">01. INGEST</span>
              <h3 className="text-sm font-medium text-white mb-2">Prompt / Action Call</h3>
              <p className="text-xs text-white/50 font-light">
                User or agent triggers an execution workflow or tool invocation.
              </p>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5 shadow-lg shadow-orange-500/5">
              <span className="text-xs font-mono text-orange-300 block mb-1">02. VERIFY (INFERAGO)</span>
              <h3 className="text-sm font-medium text-white mb-2">Runtime Policy Shield</h3>
              <p className="text-xs text-orange-200/70 font-light">
                Sub-15ms inline check for prompt injection, jailbreaks, and PII leakage.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5">
              <span className="text-xs font-mono text-emerald-400 block mb-1">03. EXECUTE</span>
              <h3 className="text-sm font-medium text-white mb-2">Safe Execution</h3>
              <p className="text-xs text-white/50 font-light">
                Validated payload executes cleanly with full immutable audit logging.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ===================== MVP CAPABILITIES ===================== */}
        <div className="mb-16">
          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              CURRENT VALIDATION EXPERIMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
              Core Capabilities in Testing
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {mvpFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal
                  key={f.title}
                  delay={i * 80}
                  className="glass-panel card-lift rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/60 border border-white/10">
                        {f.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-medium text-white mb-2">{f.title}</h3>
                    <p className="text-xs text-white/50 font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* ===================== EARLY ACCESS REQUEST ===================== */}
        <Reveal delay={150} className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-3">
            EARLY ACCESS PROGRAM
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
            Request MVP Access
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-light mb-8 max-w-md mx-auto leading-relaxed">
            We are collaborating with a limited group of design partners to test
            and refine the governance engine. Leave your email to request an invitation.
          </p>

          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono inline-flex items-center gap-2">
              <FiCheckCircle />
              <span>Thank you! We will reach out as new MVP alpha batches open.</span>
            </div>
          ) : (
            <form
              onSubmit={handleWaitlist}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Access</span>
                <FiSend size={12} />
              </button>
            </form>
          )}
        </Reveal>

        {/* ===================== LINK BACK TO WEB SERVICES ===================== */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 mb-3">
            Looking for client software engineering, website development, or mobile apps?
          </p>
          <Link
            to="/web"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors"
          >
            <span>Explore Inferago Tech & Digital Services</span>
            <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiPage;
