// components/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import { GoShieldLock } from "react-icons/go";
import { BiCommand } from "react-icons/bi";
import { LuScanEye } from "react-icons/lu";
import { FiCheckCircle, FiArrowUpRight, FiZap } from "react-icons/fi";
import Reveal from "./Reveal";

const products = [
  {
    icon: GoShieldLock,
    title: "AI Security SaaS",
    badge: "ENTERPRISE",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    desc: "A cloud-native firewall and runtime defense platform that protects LLM applications from prompt injections, model manipulation, and confidential data exfiltration.",
    features: [
      "Sub-15ms inline proxy latency",
      "PII redaction & secret masking",
      "Automated jailbreak isolation",
      "SOC2 / HIPAA compliance logs",
    ],
    accent: "from-orange-500/10 via-amber-500/5 to-transparent",
  },
  {
    icon: BiCommand,
    title: "Prompt Automation Engine",
    badge: "WORKFLOWS",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    desc: "Low-latency orchestration engine that executes complex multi-step business workflows from natural language prompts, complete with sandboxed tool access.",
    features: [
      "Deterministic structured output guarantee",
      "Multi-agent task delegation",
      "Automated fallback & retry handling",
      "Native REST & Webhook connectors",
    ],
    accent: "from-amber-500/10 via-orange-500/5 to-transparent",
  },
  {
    icon: LuScanEye,
    title: "Monitoring & Insights SaaS",
    badge: "OBSERVABILITY",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    desc: "Real-time AI telemetry suite that monitors hallucination rates, token cost trajectories, and agent performance anomalies with proactive mitigation alerts.",
    features: [
      "Real-time token & cost analytics",
      "Hallucination index scoring",
      "Live trace execution visualization",
      "Automated rogue-agent killswitch",
    ],
    accent: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
          STANDALONE MODULES & PLATFORMS
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
          Core AI Product Offerings
        </h2>
        <p className="mt-3 text-sm text-white/50 font-light">
          Engineered for teams operating LLMs, autonomous agents, and intelligent workflows in production.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, i) => {
          const Icon = product.icon;
          return (
            <Reveal
              key={product.title}
              delay={i * 100}
              className="glass-panel card-lift rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
            >
              {/* Card Accent Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${product.accent} opacity-60 pointer-events-none transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon size={20} />
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                  {product.desc}
                </p>

                <div className="space-y-2.5 pb-6 border-b border-white/10">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                      <FiCheckCircle className="text-orange-400/90 text-xs shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-5 mt-auto">
                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 text-xs font-medium bg-white/10 hover:bg-white text-white hover:text-black rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10 group-hover:border-white/30"
                >
                  <span>Request Access</span>
                  <FiArrowUpRight />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Products;