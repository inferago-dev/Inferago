// components/Flowchart.jsx
import React, { useState } from "react";
import { FiLock, FiShield, FiActivity, FiCpu, FiCheckCircle } from "react-icons/fi";
import { LuChartLine, LuScanEye } from "react-icons/lu";
import { RiGitBranchLine } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import Reveal from "./Reveal";

const nodes = [
  {
    id: "security",
    title: "Security & Guardrails",
    shortDesc: "Real-time prompt shield & token isolation",
    fullDesc: "Intercepts and scans incoming prompts and outgoing model payloads for prompt injections, jailbreaks, PII leakage, and unauthorized tool invocations in sub-15ms.",
    stats: "Sub-15ms latency • 99.98% accuracy",
    icon: FiLock,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
  },
  {
    id: "automation",
    title: "Agent Orchestration",
    shortDesc: "Intelligent workflow coordination",
    fullDesc: "Sandboxes autonomous agent execution, coordinates multi-agent handoffs, and ensures tool execution follows deterministic business constraints.",
    stats: "Multi-agent routing • Tool sandboxing",
    icon: RiGitBranchLine,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
  },
  {
    id: "monitoring",
    title: "Real-time Monitoring",
    shortDesc: "Continuous runtime telemetry & alerts",
    fullDesc: "Provides instant visibility into token velocity, hallucination indices, API error rates, and rogue execution loops with automated kill-switches.",
    stats: "Live telemetry • Automated kill-switch",
    icon: LuScanEye,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
  {
    id: "analytics",
    title: "Audit & Risk Analytics",
    shortDesc: "Comprehensive compliance & cost intelligence",
    fullDesc: "Generates immutable audit trails, model cost breakdowns, and compliance reporting ready for SOC2, HIPAA, and ISO27001 certification frameworks.",
    stats: "SOC2/HIPAA ready • Cryptographic logs",
    icon: LuChartLine,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
];

const Flowchart = () => {
  const [selectedNode, setSelectedNode] = useState(nodes[0]);

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <Reveal className="text-center mb-10">
        <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
          SYSTEM ARCHITECTURE
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
          The Inferago Governance Mesh
        </h2>
        <p className="text-xs sm:text-sm text-white/50 font-light mt-2 max-w-xl mx-auto">
          Click on any architectural node to inspect its telemetry, security safeguards, and runtime performance.
        </p>
      </Reveal>

      {/* ===================== DESKTOP ARCHITECTURE CANVAS ===================== */}
      <Reveal delay={100} className="hidden md:block relative h-[520px] max-w-[1000px] mx-auto glass-panel rounded-3xl p-6 border border-white/10 overflow-hidden">
        {/* SVG Wiring Canvas */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 520"
          fill="none"
        >
          <defs>
            <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradAmber" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffcb83" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0077ff" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Top-Left to Center */}
          <path
            d="M 280 150 H 380 C 440 150, 440 260, 490 260"
            stroke="url(#gradOrange)"
            strokeWidth="2"
            className="animate-flow-line"
          />
          {/* Bottom-Left to Center */}
          <path
            d="M 280 370 H 380 C 440 370, 440 260, 490 260"
            stroke="url(#gradAmber)"
            strokeWidth="2"
            className="animate-flow-line"
          />
          {/* Center to Top-Right */}
          <path
            d="M 510 260 C 560 260, 560 150, 620 150 H 720"
            stroke="url(#gradBlue)"
            strokeWidth="2"
            className="animate-flow-line"
          />
          {/* Center to Bottom-Right */}
          <path
            d="M 510 260 C 560 260, 560 370, 620 370 H 720"
            stroke="url(#gradEmerald)"
            strokeWidth="2"
            className="animate-flow-line"
          />
        </svg>

        {/* CENTER CORE */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative flex flex-col items-center">
            <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-orange-500/30 via-amber-500/20 to-blue-500/30 blur-xl animate-pulse" />
            <div className="relative w-28 h-28 rounded-3xl bg-[#090b10] border border-white/20 flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl">
              <img
                src="/Infer_White.png"
                alt="Core"
                className="w-12 h-12 object-contain"
              />
              <span className="text-[9px] font-mono text-white/60 mt-1">ENGINE CORE</span>
            </div>
            <div className="mt-3 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-emerald-400 border border-white/10">
              18.4K req/s Active
            </div>
          </div>
        </div>

        {/* NODE 1: TOP LEFT */}
        <div className="absolute left-8 top-16 w-64 z-30">
          <button
            onClick={() => setSelectedNode(nodes[0])}
            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 card-lift ${
              selectedNode.id === "security"
                ? "bg-white/[0.08] border-orange-400/60 shadow-lg shadow-orange-500/10"
                : "bg-white/[0.03] border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <FiLock size={16} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Security & Guardrails</h4>
                <span className="text-[10px] font-mono text-orange-400/80">Sub-15ms</span>
              </div>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Real-time prompt shield & token isolation
            </p>
          </button>
        </div>

        {/* NODE 2: BOTTOM LEFT */}
        <div className="absolute left-8 bottom-16 w-64 z-30">
          <button
            onClick={() => setSelectedNode(nodes[1])}
            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 card-lift ${
              selectedNode.id === "automation"
                ? "bg-white/[0.08] border-amber-400/60 shadow-lg shadow-amber-500/10"
                : "bg-white/[0.03] border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <RiGitBranchLine size={16} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Agent Orchestration</h4>
                <span className="text-[10px] font-mono text-amber-400/80">Sandboxed</span>
              </div>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Intelligent workflow coordination
            </p>
          </button>
        </div>

        {/* NODE 3: TOP RIGHT */}
        <div className="absolute right-8 top-16 w-64 z-30">
          <button
            onClick={() => setSelectedNode(nodes[2])}
            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 card-lift ${
              selectedNode.id === "monitoring"
                ? "bg-white/[0.08] border-blue-400/60 shadow-lg shadow-blue-500/10"
                : "bg-white/[0.03] border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <LuScanEye size={16} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Real-time Monitoring</h4>
                <span className="text-[10px] font-mono text-blue-400/80">Live Telemetry</span>
              </div>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Continuous runtime telemetry & alerts
            </p>
          </button>
        </div>

        {/* NODE 4: BOTTOM RIGHT */}
        <div className="absolute right-8 bottom-16 w-64 z-30">
          <button
            onClick={() => setSelectedNode(nodes[3])}
            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 card-lift ${
              selectedNode.id === "analytics"
                ? "bg-white/[0.08] border-emerald-400/60 shadow-lg shadow-emerald-500/10"
                : "bg-white/[0.03] border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <LuChartLine size={16} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Audit & Risk Analytics</h4>
                <span className="text-[10px] font-mono text-emerald-400/80">SOC2 Ready</span>
              </div>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">
              Comprehensive compliance & cost intelligence
            </p>
          </button>
        </div>
      </Reveal>

      {/* ===================== MOBILE ARCHITECTURE LIST ===================== */}
      <div className="md:hidden space-y-3">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`w-full text-left p-4 rounded-2xl border transition-all ${
                isSelected
                  ? "bg-white/[0.08] border-white/30"
                  : "bg-white/[0.02] border-white/10"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${node.bg} ${node.border} border flex items-center justify-center ${node.color}`}>
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">{node.title}</h4>
                  <p className="text-xs text-white/50">{node.shortDesc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ===================== SELECTED NODE INSPECTOR PANEL ===================== */}
      <Reveal delay={150} className="mt-6 glass-panel rounded-2xl p-5 sm:p-6 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${selectedNode.bg} border ${selectedNode.border} flex items-center justify-center ${selectedNode.color}`}>
              {React.createElement(selectedNode.icon, { size: 16 })}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                {selectedNode.title} Node Specification
              </h3>
              <span className="text-xs font-mono text-white/40">
                ACTIVE CLUSTER INSTANCE #inf-node-{selectedNode.id}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-fit">
            {selectedNode.stats}
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
          {selectedNode.fullDesc}
        </p>
      </Reveal>
    </section>
  );
};

export default Flowchart;