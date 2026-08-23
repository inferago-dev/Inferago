// components/Platform.jsx
import React, { useState } from "react";
import { FiBookOpen, FiCopy, FiCheck, FiTerminal, FiCode, FiLayers } from "react-icons/fi";
import { LuUnplug } from "react-icons/lu";
import { PiTerminalWindow } from "react-icons/pi";
import Reveal from "./Reveal";

const codeSnippets = {
  python: `# 1. Install Inferago Python SDK
pip install inferago-sdk

# 2. Guard your AI agents in real-time
from inferago import Engine, GuardrailPolicy

engine = Engine(api_key="inf_prod_99214")
policy = GuardrailPolicy(
    mask_pii=True,
    threat_isolation=True,
    max_token_velocity=1200
)

# Intercept and wrap agent tool execution
@engine.guard(policy=policy)
def run_agent_workflow(prompt: str):
    response = agent.run(prompt)
    return response`,

  cli: `# 1. Install Inferago CLI globally
npm install -g @inferago/cli

# 2. Authenticate cluster
inferago login --token inf_live_secret_key

# 3. Deploy runtime governance policy to your cluster
inferago policy deploy --env production --file ./guardrails.yaml

# 4. Stream live agent telemetry in your terminal
inferago logs stream --follow --anomalies-only`,

  typescript: `// 1. Install TypeScript / Node package
npm i @inferago/sdk

// 2. Initialize Telemetry & Guardrail Proxy
import { InferagoClient } from "@inferago/sdk";

const inferago = new InferagoClient({
  apiKey: process.env.INFERAGO_API_KEY!,
  clusterRegion: "us-east-1"
});

export async function handleUserQuery(prompt: string) {
  const check = await inferago.inspectPrompt(prompt);
  if (!check.isAllowed) {
    throw new Error(\`Blocked: \${check.violationReason}\`);
  }
  return await executeLLM(prompt);
}`,

  curl: `# Direct REST API Inspection Endpoint
curl -X POST https://api.inferago.com/v1/guardrails/inspect \\
  -H "Authorization: Bearer inf_live_secret_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "agent-triage-01",
    "prompt": "Analyze customer database record #4912",
    "strict_mode": true,
    "pii_redaction": true
  }'`,
};

const ecosystemItems = [
  {
    title: "Documentation & Schemas",
    icon: <FiBookOpen className="text-lg text-orange-400" />,
    path: "~/docs/architecture",
    desc: "Comprehensive guides, guardrail policy schemas, API reference specifications, and compliance matrices.",
    actionText: "View Documentation",
  },
  {
    title: "CLI & Developer SDK",
    icon: <PiTerminalWindow className="text-xl text-amber-400" />,
    path: "~/cli/telemetry",
    desc: "Command-line tools, multi-language client SDKs, and local sandbox emulators for testing agent guardrails.",
    actionText: "Explore SDKs",
  },
  {
    title: "Enterprise Integrations",
    icon: <LuUnplug className="text-lg text-blue-400" />,
    path: "~/integrations/connectors",
    desc: "Plug-and-play connectors for LangChain, LlamaIndex, OpenAI, Anthropic, Datadog, and cloud providers.",
    actionText: "Browse Integrations",
  },
];

const Platform = () => {
  const [activeTab, setActiveTab] = useState("python");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="platform" className="py-16 md:py-24 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title */}
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
          DEVELOPER PLATFORM
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
          Engineered for Frictionless Integration
        </h2>
        <p className="mt-3 text-sm text-white/50 font-light">
          Drop Inferago into your existing stack with two lines of code. No proxy rewrites, no latency bottlenecks.
        </p>
      </Reveal>

      {/* Terminal Showcase */}
      <Reveal delay={100} className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="h-12 bg-white/[0.03] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-2 text-xs font-mono text-white/40 hidden sm:inline">
              inferago-runtime-client — active
            </span>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06]">
            {["python", "cli", "typescript", "curl"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all uppercase ${
                  activeTab === tab
                    ? "bg-white text-black font-semibold shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-all"
          >
            {copied ? (
              <>
                <FiCheck className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <FiCopy />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Body */}
        <div className="p-5 sm:p-7 bg-[#07080b] font-mono text-xs sm:text-sm text-white/80 overflow-x-auto leading-relaxed">
          <pre className="text-amber-100/90">{codeSnippets[activeTab]}</pre>
        </div>
      </Reveal>

      {/* Ecosystem Bento Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {ecosystemItems.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 80}
            className="glass-panel card-lift rounded-2xl p-6 flex flex-col justify-between border border-white/10"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/40">{item.path}</span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-base font-medium text-white mb-2">{item.title}</h3>
              <p className="text-xs text-white/50 font-light leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-orange-300 hover:text-orange-200 transition-colors cursor-pointer flex items-center gap-1">
                {item.actionText} →
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Platform;
