// components/About.jsx
import React from "react";
import { FiUser, FiCpu, FiShield, FiServer, FiLayout, FiCloud, FiCompass } from "react-icons/fi";
import Reveal from "./Reveal";

const team = [
  {
    role: "Founder / Product & Technology",
    desc: "Setting product direction and technical strategy.",
    icon: FiUser,
  },
  {
    role: "AI/ML Engineering",
    desc: "Building the models and systems behind runtime governance.",
    icon: FiCpu,
  },
  {
    role: "Cybersecurity",
    desc: "Securing AI-driven workflows against emerging threats.",
    icon: FiShield,
  },
  {
    role: "Backend & Infrastructure",
    desc: "Building the core systems the platform runs on.",
    icon: FiServer,
  },
  {
    role: "Frontend",
    desc: "Crafting the interface engineers and teams rely on daily.",
    icon: FiLayout,
  },
  {
    role: "DevOps / Cloud",
    desc: "Keeping deployments reliable, scalable, and observable.",
    icon: FiCloud,
  },
  {
    role: "Research & Product",
    desc: "Researching AI risk patterns to shape what we build next.",
    icon: FiCompass,
  },
];

const About = () => {
  return (
    <section id="about" className="py-8 md:py-16 bg-black inter-regular">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <Reveal className="text-center mb-7 md:mb-14">
          <div className="text-sm tracking-normal text-white">
            ABOUT US
          </div>
        </Reveal>

        {/* Main Heading */}
        <Reveal delay={60}>
          <p className="text-2xl md:text-3xl mb-8 md:mb-10 z-50 text-white leading-8 md:leading-11 text-center tracking-tight inter-medium max-w-3xl mx-auto">
            Building the Infrastructure Layer for AI Governance
          </p>
        </Reveal>

        {/* Story */}
        <Reveal delay={100} className="relative mb-10 md:mb-16">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[280px] md:w-[700px] h-[220px] md:h-[280px]
              bg-[linear-gradient(90deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
              opacity-30 blur-[90px]"
            />
          </div>
          <div className="relative z-10 rounded-2xl p-px" style={{ background: "linear-gradient(to bottom, #FFCB83 0%, transparent 100%)" }}>
            <div className="bg-black border border-white/10 rounded-2xl p-6 md:p-10">
              <p className="text-sm md:text-base text-white/60 inter-light leading-relaxed max-w-3xl mx-auto text-center">
                Inferago started from a simple observation: organizations are rapidly adopting AI and
                automation, but the security, governance, and operational controls around these systems
                are still developing. We began exploring how AI-driven workflows could be monitored,
                understood, and governed at runtime — which led to the idea of building an infrastructure
                layer specifically for AI systems. We&rsquo;re still early and still validating the product, but
                that&rsquo;s the problem we&rsquo;re building toward.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-4 mb-10 md:mb-16">
          <Reveal delay={80} className="glass-badge card-lift rounded-2xl p-6 md:p-8">
            <div className="text-xs basier-mono tracking-tighter text-white/40 mb-3">MISSION</div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed inter-light">
              Make AI systems more secure, observable, and controllable in real-world environments.
            </p>
          </Reveal>
          <Reveal delay={160} className="glass-badge card-lift rounded-2xl p-6 md:p-8">
            <div className="text-xs basier-mono tracking-tighter text-white/40 mb-3">VISION</div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed inter-light">
              Build the infrastructure layer that organizations can rely on to securely operate and govern
              AI systems at scale.
            </p>
          </Reveal>
        </div>

        {/* Approach */}
        <Reveal delay={100} className="mb-10 md:mb-16 max-w-3xl mx-auto text-center">
          <div className="text-xs basier-mono tracking-tighter text-white/40 mb-3">OUR APPROACH</div>
          <p className="text-white/60 text-sm md:text-base leading-relaxed inter-light">
            Inferago focuses on runtime governance — looking beyond individual model or prompt calls to
            the full picture of AI-driven workflows: their interactions, risks, and decisions. Tools like
            Datadog, LangSmith, and MLflow already cover important parts of the observability and MLOps
            stack. Inferago&rsquo;s role is to sit at the governance layer above them, combining security-first
            monitoring with human oversight so organizations can identify risky behavior and introduce
            review or control exactly where it&rsquo;s needed.
          </p>
        </Reveal>

        {/* Team */}
        <Reveal delay={60} className="text-center mb-6 md:mb-10">
          <div className="text-xs basier-mono tracking-tighter text-white/40 mb-2">TEAM</div>
          <p className="text-white/40 text-xs md:text-sm inter-light max-w-md mx-auto">
            Team structure and titles are still being finalized — named bios are coming soon.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {team.map((member, i) => {
            const Icon = member.icon;
            return (
              <Reveal key={member.role} delay={i * 60} className="glass-badge card-lift rounded-xl p-4 md:p-5 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-white leading-tight mb-1">{member.role}</div>
                  <p className="text-[11px] md:text-xs text-white/40 inter-light leading-relaxed">{member.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
