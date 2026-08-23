// components/Contact.jsx
import React, { useState } from "react";
import {
  FiSend,
  FiCheckCircle,
  FiMail,
  FiClock,
  FiShield,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import Reveal from "./Reveal";

const projectTypes = [
  "Website / Web App",
  "Mobile App (iOS/Android)",
  "Custom Software & APIs",
  "Digital Marketing & SEO",
  "AI Integration & Automation",
  "Inferago AI MVP Early Access",
];

const budgetTiers = ["$2k - $5k", "$5k - $15k", "$15k - $40k", "$40k+ / Enterprise"];
const timelineOptions = ["< 4 Weeks", "1 - 2 Months", "3+ Months", "Flexible"];

const faqs = [
  {
    q: "How quickly can we start on a project?",
    a: "Following an initial 30-minute discovery call, we define the roadmap and sprint deliverables within 48 hours. Sprints can commence immediately upon milestone agreement.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own 100% of the code, IP, design files, and deployment configurations. There is zero vendor lock-in.",
  },
  {
    q: "Do you offer post-launch maintenance and support?",
    a: "Yes. We offer annual maintenance contracts (AMC), continuous uptime monitoring, security patching, and monthly update allowances.",
  },
  {
    q: "What is the Inferago AI MVP?",
    a: "Inferago AI is our internal research and MVP platform focused on runtime governance and guardrails for autonomous AI agents. You can request early preview access using the form below.",
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
      {/* Ambient Glow */}
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
              START A PROJECT
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              Let&rsquo;s Build Something{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-white bg-clip-text text-transparent">
                Great Together.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm sm:text-base md:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Tell us about your website, software project, marketing goals, or
              AI integration. We usually respond within 4 hours.
            </p>
          </Reveal>
        </section>

        {/* ===================== FORM SECTION ===================== */}
        <section className="py-8 pb-24 px-5 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Info Sidebar */}
            <Reveal className="lg:col-span-4 space-y-6">
              <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-6">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-2">
                    DIRECT CONTACT
                  </span>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Inferago Studio
                  </h3>
                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    Available for new project discovery, consultations, and sprint proposals.
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
                    <span>Mutual NDA on Request</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100} className="lg:col-span-8">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <FiCheckCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-medium text-white">
                      Message Transmitted!
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your project details. We will review your scope and get in touch within 4 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-3">
                        01. What service do you need?
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
                                : "bg-white/[0.03] border-white/10 text-white/60 hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

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

                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <label className="text-xs font-mono text-white/50 uppercase tracking-wider block">
                        04. Details & Objectives
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
                            placeholder="Work Email *"
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
                          placeholder="Company / Organization"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                        />
                      </div>

                      <div className="gradient-border-b">
                        <textarea
                          placeholder="Tell us what you are trying to build or achieve *"
                          required
                          rows={4}
                          value={formData.details}
                          onChange={(e) =>
                            setFormData({ ...formData, details: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-white/40">
                        🔒 Confidential & Protected
                      </span>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-white text-black rounded-full text-xs font-medium hover:bg-white/90 active:scale-95 transition-all shadow-lg flex items-center gap-2"
                      >
                        <span>Send Inquiry</span>
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
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                Helpful Details
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
