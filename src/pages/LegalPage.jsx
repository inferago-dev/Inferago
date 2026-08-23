// pages/LegalPage.jsx
import React from "react";
import Reveal from "../components/Reveal";

const content = {
  privacy: {
    label: "PRIVACY PROTOCOL",
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Overview & Commitment",
        body: "At Inferago Technologies Inc. (\"Inferago\", \"we\", \"our\"), we build infrastructure and digital products centered around zero-trust privacy and runtime integrity. This Privacy Policy details how data transmitted through our websites, APIs, and client portals is handled.",
      },
      {
        heading: "2. Information We Collect",
        body: "We collect information submitted directly through our project scoper and technical inquiry forms (e.g., name, business email, organization, and project scope). For runtime governance SDK users, telemetry metrics are aggregated without retaining raw prompt payloads unless explicitly configured by the customer.",
      },
      {
        heading: "3. How We Process Data",
        body: "Information is exclusively used to respond to client inquiries, fulfill engineering sprint milestones, provide infrastructure security telemetry, and continuously improve platform performance. We never sell or license customer data to third parties.",
      },
      {
        heading: "4. Cryptographic Security & Isolation",
        body: "We apply industry-standard AES-256 GCM encryption at rest and TLS 1.3 in transit. Access to internal client environments is restricted through strict role-based access control (RBAC) and hardware key authentication.",
      },
      {
        heading: "5. Contact & Data Officer",
        body: "For questions regarding our privacy protocol, GDPR/CCPA data requests, or mutual NDA execution, contact our security team directly at kartheek@inferago.com.",
      },
    ],
  },
  terms: {
    label: "TERMS OF SERVICE",
    title: "Terms of Service",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing or utilizing Inferago's websites, developer SDKs, runtime governance proxies, or engineering services, you agree to be bound by these Terms of Service.",
      },
      {
        heading: "2. Intellectual Property Sovereignty",
        body: "All bespoke software, client portal assets, and product implementations developed specifically for our clients under active sprint contracts are the 100% exclusive intellectual property of the respective client upon milestone settlement.",
      },
      {
        heading: "3. Responsible AI & Platform Usage",
        body: "Users of Inferago developer APIs and governance frameworks agree to adhere to ethical AI guidelines and refrain from using the platform for malicious attacks, autonomous weaponization, or unlawful surveillance.",
      },
      {
        heading: "4. Service Level & Warranties",
        body: "Inferago provides its developer documentation, open-source SDK components, and website on an \"as is\" basis. Production-grade SLA guarantees are governed under individual Enterprise Master Services Agreements (MSAs).",
      },
      {
        heading: "5. Governing Law",
        body: "These terms and any related disputes shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.",
      },
    ],
  },
};

const LegalPage = ({ type }) => {
  const data = content[type] || content.privacy;

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-orange-500/30">
      {/* Background Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-grid opacity-20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-orange-600/10 via-amber-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-28 px-5 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
            {data.label}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            {data.title}
          </h1>
          <p className="mt-3 text-xs font-mono text-white/40">
            Last Updated: August 2026 • Inferago Legal Protocol
          </p>
        </Reveal>

        <div className="space-y-6">
          {data.sections.map((s, i) => (
            <Reveal
              key={s.heading}
              delay={i * 60}
              className="glass-panel card-lift rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <h2 className="text-base sm:text-lg font-medium text-white mb-2">
                {s.heading}
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
