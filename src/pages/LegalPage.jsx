// pages/LegalPage.jsx
import React from "react";
import Reveal from "../components/Reveal";

const content = {
  privacy: {
    label: "PRIVACY POLICY",
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Overview",
        body: "This Privacy Policy explains how Inferago (\"we\", \"us\") collects, uses, and protects information when you visit our website or use our products. This is placeholder text — replace with Inferago's reviewed privacy terms before publishing.",
      },
      {
        heading: "2. Information We Collect",
        body: "We may collect information you provide directly (such as name, email, and message content submitted through our contact form) and limited technical information (such as browser type and usage analytics) needed to operate and improve the site.",
      },
      {
        heading: "3. How We Use Information",
        body: "Information is used to respond to inquiries, operate and secure our services, and improve our product. We do not sell personal information to third parties.",
      },
      {
        heading: "4. Data Retention & Security",
        body: "We retain information only as long as necessary for the purposes described here and apply reasonable technical and organizational measures to protect it.",
      },
      {
        heading: "5. Contact",
        body: "For questions about this policy, reach us through the contact form on this site.",
      },
    ],
  },
  terms: {
    label: "TERMS OF SERVICE",
    title: "Terms of Service",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing or using the Inferago website or products, you agree to these Terms of Service. This is placeholder text — replace with Inferago's reviewed legal terms before publishing.",
      },
      {
        heading: "2. Use of Service",
        body: "You agree to use Inferago's website and products only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, this site by any third party.",
      },
      {
        heading: "3. Intellectual Property",
        body: "All content on this site, including text, graphics, logos, and software, is the property of Inferago or its licensors and is protected by applicable intellectual property laws.",
      },
      {
        heading: "4. Disclaimer & Limitation of Liability",
        body: "Inferago is currently under active development. The service is provided \"as is\" without warranties of any kind, and Inferago is not liable for any indirect or consequential damages arising from use of the site or product.",
      },
      {
        heading: "5. Changes to These Terms",
        body: "We may update these terms as the product evolves. Continued use of the site after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
};

const LegalPage = ({ type }) => {
  const data = content[type];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black inter-regular min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-10 md:mb-14">
          <div className="text-sm tracking-normal text-white/60 mb-3">{data.label}</div>
          <h1 className="text-2xl md:text-4xl inter-medium tracking-tight text-white">{data.title}</h1>
          <p className="mt-4 text-xs text-white/30 basier-mono">Placeholder content — pending legal review</p>
        </Reveal>

        <div className="space-y-6">
          {data.sections.map((s, i) => (
            <Reveal
              key={s.heading}
              delay={i * 60}
              className="glass-badge card-lift rounded-2xl p-6 md:p-8"
            >
              <h2 className="text-sm md:text-base text-white inter-medium mb-2">{s.heading}</h2>
              <p className="text-sm text-white/50 inter-light leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
