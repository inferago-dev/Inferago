// components/Contact.jsx
import React, { useState } from "react";
import {
  FiSend,
  FiCheckCircle,
  FiMail,
  FiClock,
  FiShield,
  FiArrowUpRight,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import Reveal from "./Reveal";

const projectTypes = [
  "AI Runtime Governance & Guardrails",
  "Enterprise SaaS / Web App",
  "Custom AI Copilot & Workflows",
  "Cloud Infrastructure & APIs",
  "Other / Consulting",
];

const budgetTiers = ["$5k - $15k", "$15k - $40k", "$40k - $100k", "$100k+ / Enterprise"];
const timelineOptions = ["< 4 Weeks", "1 - 2 Months", "3+ Months", "Flexible"];

const faqs = [
  {
    q: "How quickly can we kick off a new project?",
    a: "Following an initial 30-minute technical discovery call, we deliver a formal architecture blueprint and sprint milestone proposal within 48 hours. Sprints can commence immediately upon agreement.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own 100% of the code, intellectual property, and deployment configurations from day one. We never retain proprietary locks or hidden licensing fees on client builds.",
  },
  {
    q: "Can you work with our existing engineering team?",
    a: "Yes. We frequently integrate alongside internal engineering and product teams, taking ownership of complex AI governance modules, full-stack verticals, or architectural migrations.",
  },
  {
    q: "What is your typical sprint cadence?",
    a: "We work in weekly iterative sprints with live preview deployments, automated test coverage reports, and async milestone updates via Slack or email.",
  },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgetTiers[1]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[1]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-25" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-orange-600/15 via-amber-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-32 pb-12 md:pt-44 md:pb-16 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <Reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wide text-white/80">
              START A PROJECT / TECHNICAL DISCOVERY
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Let&rsquo;s engineer something{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-blue-400 bg-clip-text text-transparent">
                remarkable.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Tell us about your project scope, AI governance requirements, or
              product vision. We typically respond within 4 hours.
            </p>
          </Reveal>
        </section>

        {/* ===================== SCOPER & FORM SECTION ===================== */}
        <section className="py-8 pb-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Bar */}
            <Reveal className="lg:col-span-4 space-y-6">
              <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-6">
                <div>
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider block mb-2">
                    DIRECT CONTACT
                  </span>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Inferago Engineering HQ
                  </h3>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Available for technical discovery calls and enterprise architectural consulting.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-3 text-white/80">
                    <FiMail className="text-orange-400 shrink-0" />
                    <span className="font-mono">kartheek@inferago.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <FiClock className="text-amber-400 shrink-0" />
                    <span>Response Time: &lt; 4 Hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <FiShield className="text-emerald-400 shrink-0" />
                    <span>Strict Mutual NDA on Request</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Out */}
              <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-5">
                <span className="text-xs font-mono text-emerald-400 uppercase block mb-1">
                  AVAILABILITY
                </span>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Currently accepting 2 new product sprint slots for the upcoming quarter.
                </p>
              </div>
            </Reveal>

            {/* Right Form Card */}
            <Reveal delay={100} className="lg:col-span-8">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <FiCheckCircle size={28} />
                    </div>
                    <h3 className="text-2xl font-medium text-white">
                      Transmission Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your project specifications. An Inferago technical lead will review your scope and get in touch within 4 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                    >
                      Submit Another Scope
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Project Type */}
                    <div>
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                        01. What are you building?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={`px-3.5 py-2 text-xs rounded-xl border transition-all ${
                              selectedType === type
                                ? "bg-white text-black font-medium border-white shadow"
                                : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:border-white/20"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Budget & Timeline */}
                    <div className="grid sm:grid-cols-2 gap-6 pt-2">
                      <div>
                        <label className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                          02. Estimated Budget
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {budgetTiers.map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setSelectedBudget(tier)}
                              className={`px-3 py-2 text-xs rounded-xl border text-center transition-all ${
                                selectedBudget === tier
                                  ? "bg-white text-black font-medium border-white shadow"
                                  : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white"
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                          03. Target Timeline
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timelineOptions.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTimeline(time)}
                              className={`px-3 py-2 text-xs rounded-xl border text-center transition-all ${
                                selectedTimeline === time
                                  ? "bg-white text-black font-medium border-white shadow"
                                  : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Contact Details */}
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider block">
                        04. Your Information & Scope
                      </label>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="gradient-border-b">
                          <input
                            type="text"
                            placeholder="Your Name *"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="gradient-border-b">
                          <input
                            type="email"
                            placeholder="Work Email Address *"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="gradient-border-b">
                        <input
                          type="text"
                          placeholder="Company or Organization (optional)"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                        />
                      </div>

                      <div className="gradient-border-b">
                        <textarea
                          placeholder="Briefly describe your requirements, key challenges, or system objectives *"
                          required
                          rows={4}
                          value={formData.details}
                          onChange={(e) =>
                            setFormData({ ...formData, details: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-white/40">
                        🔒 Protected by Inferago Privacy Protocols
                      </span>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-white text-black rounded-full text-xs sm:text-sm font-medium hover:bg-white/90 active:scale-95 transition-all shadow-lg flex items-center gap-2"
                      >
                        <span>Transmit Scope</span>
                        <FiSend />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section className="py-16 md:py-24 border-t border-white/[0.08] bg-white/[0.01]">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                Everything You Need to Know
              </h2>
            </Reveal>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal
                    key={idx}
                    delay={idx * 60}
                    className="glass-panel rounded-2xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-medium text-white/90 hover:text-white"
                    >
                      <span>{faq.q}</span>
                      <span className="p-1 rounded-lg bg-white/5 border border-white/10 text-white/60">
                        {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-white/60 font-light leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
