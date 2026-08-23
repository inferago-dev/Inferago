// pages/WebPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const capabilities = [
  {
    group: "DIGITAL PRODUCTS",
    items: ["Web applications", "SaaS", "Dashboards", "Platforms"],
  },
  {
    group: "COMMERCE",
    items: ["E-commerce", "Catalogues", "Admin systems", "Integrations"],
  },
  {
    group: "SOFTWARE",
    items: ["Backend", "APIs", "Databases", "Cloud"],
  },
  {
    group: "INTELLIGENCE",
    items: ["AI", "Agents", "Automation", "Data"],
  },
];

const WebPage = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black inter-regular min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <Reveal className="text-center mb-12 md:mb-20">
          <div className="text-sm tracking-normal text-white/60 mb-4">INFERAGO WEB</div>
          <h1 className="text-3xl md:text-5xl inter-medium tracking-tight text-white leading-tight max-w-3xl mx-auto">
            We turn ideas into products.
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/50 inter-light leading-relaxed max-w-xl mx-auto">
            Product design and engineering for businesses that want to build,
            not just launch another website.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-5 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              Start a project →
            </Link>
            <Link
              to="/work"
              className="px-5 py-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              See our work →
            </Link>
          </div>
        </Reveal>

        {/* Capabilities */}
        <Reveal delay={80} className="text-center mb-7 md:mb-14">
          <div className="text-sm tracking-normal text-white">CAPABILITIES</div>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.group}
              delay={i * 80}
              className="glass-badge card-lift rounded-2xl p-5 md:p-6"
            >
              <div className="text-xs basier-mono tracking-tighter text-white/40 mb-4">
                {c.group}
              </div>
              <div className="space-y-2">
                {c.items.map((item) => (
                  <p key={item} className="text-sm text-white/70 inter-light">
                    {item}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPage;
