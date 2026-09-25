// components/Services.jsx
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { TbBrowserPlus } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import { BiCodeAlt } from "react-icons/bi";

const services = [
  {
    icon: TbBrowserPlus,
    title: "Full-Stack Web Development",
    desc: "End-to-end web applications built with modern frameworks — React, Next.js, and Node.js. From MVPs to enterprise-scale platforms, we ship fast without compromising quality.",
    tag: "Development",
    gradient: "from-[#FF3300]/30 via-[#FFCB83]/20 to-transparent",
    accent: "#FF3300",
  },
  {
    icon: LuLayoutTemplate,
    title: "UI / UX Design & Prototyping",
    desc: "Pixel-perfect interfaces grounded in conversion-first design principles. We craft experiences that feel intuitive, look stunning, and perform across every device.",
    tag: "Design",
    gradient: "from-[#0077FF]/30 via-[#FFCB83]/20 to-transparent",
    accent: "#0077FF",
  },
  {
    icon: BiCodeAlt,
    title: "API & Backend Engineering",
    desc: "Scalable REST and GraphQL APIs, microservices architecture, and cloud-native deployments. Built for reliability, speed, and seamless third-party integrations.",
    tag: "Engineering",
    gradient: "from-[#7C3AED]/30 via-[#FFCB83]/10 to-transparent",
    accent: "#7C3AED",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Website Maintenance & Growth",
    desc: "Ongoing support, performance optimization, SEO enhancement, and feature iteration. We keep your digital presence fast, secure, and continuously improving.",
    tag: "Support",
    gradient: "from-[#00C896]/30 via-[#0077FF]/10 to-transparent",
    accent: "#00C896",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-black inter-regular overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex justify-center mb-8">
          <span className="text-xs tracking-widest text-white/40 uppercase border border-white/10 rounded-full px-4 py-1.5">
            Services
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl inter-medium text-white tracking-tight leading-tight mb-4">
            We build the web<br className="hidden md:block" /> that powers your vision.
          </h2>
          <p className="text-sm text-white/40 inter-light max-w-xl mx-auto leading-6 tracking-wide">
            From sleek landing pages to complex web platforms — Inferago delivers end-to-end web development services tailored for modern businesses.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="service-card glass-badge relative overflow-hidden rounded-2xl p-6 flex flex-col group cursor-pointer"
              >
                {/* Gradient blob */}
                <div
                  className="absolute -top-16 -left-10 w-[160%] h-[180px] opacity-60 blur-[70px] pointer-events-none transition-opacity duration-500 group-hover:opacity-90"
                  style={{ background: `radial-gradient(ellipse at 30% 40%, ${svc.accent}50, transparent 70%)` }}
                />

                {/* Icon + Tag row */}
                <div className="relative z-10 flex items-start justify-between mb-5">
                  <div className="bg-white/5 border border-white/15 p-2.5 rounded-xl">
                    <Icon
                      className="text-2xl"
                      style={{ color: svc.accent }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border"
                    style={{
                      color: svc.accent,
                      borderColor: `${svc.accent}40`,
                      backgroundColor: `${svc.accent}10`,
                    }}
                  >
                    {svc.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-base inter-medium text-white mb-2 tracking-tight group-hover:text-white/90 transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-white/45 inter-light flex-1 leading-6 tracking-normal">
                  {svc.desc}
                </p>

                {/* CTA */}
                <div className="relative z-10 mt-6">
                  <button className="flex items-center gap-1.5 text-xs tracking-wide text-white/50 hover:text-white transition-colors duration-200 group/btn">
                    Learn More
                    <HiArrowUpRight className="text-xs transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(to right, ${svc.accent}80, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 glass-badge rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base inter-medium text-white tracking-tight mb-1">
              Ready to launch your next project?
            </p>
            <p className="text-sm text-white/40 inter-light leading-5">
              Let's talk about what we can build together.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 flex items-center gap-2 px-6 py-2.5 text-xs tracking-widest bg-white text-black rounded-full hover:bg-white/90 transition-all duration-200 active:scale-95 inter-regular"
          >
            GET IN TOUCH <HiArrowUpRight className="text-sm" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
