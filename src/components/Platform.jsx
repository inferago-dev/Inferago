// components/Platform.jsx
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { LuUnplug } from "react-icons/lu";
import { PiTerminalWindow } from "react-icons/pi";
import Reveal from "./Reveal";

const Platform = () => {
  const sections = [
    {
      title: "Documentation",
      icon: <FiBookOpen className="text-lg" />,
      path: "~/docs",
      desc: "Explore governance policies, architecture blueprints, and compliance workflows designed to keep automation secure, auditable, and production ready.",
    },
    {
      title: "CLI & SDK",
      icon: <PiTerminalWindow className="text-2xl" />,
      path: "~/cli",
      desc: "Deploy, monitor, and control automation pipelines using powerful command-line tools and SDKs built for engineering teams.",
    },
    {
      title: "Integrations",
      icon: <LuUnplug className="text-lg" />,
      path: "~/integrations",
      desc: "Connect seamlessly with existing systems, cloud services, and enterprise platforms while maintaining centralized governance.",
    },
  ];

  return (
    <section id="platform" className="py-8 md:py-16 bg-black inter-regular">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <Reveal className="text-center mb-7 md:mb-14">
          <div className="text-sm tracking-normal text-white">
            PLATFORM
          </div>
        </Reveal>

        {/* Main Heading */}
        <Reveal delay={60}>
          <p className="text-2xl md:text-3xl mb-8 md:mb-10 z-50 text-white leading-7 md:leading-5 text-center tracking-tight inter-medium">
            A Complete Ecosystem for Intelligent Automation
          </p>
        </Reveal>

        {/* Terminal Wrapper */}
        <Reveal delay={120} className="relative">

          {/* Gradient Blob */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div
              className="
                absolute
                -top-10 md:-top-5
                right-0 md:right-10
                w-[250px] md:w-[900px]
                h-[350px] md:h-[400px]
                bg-linear-to-r
                from-[#FF3300]
                via-[#FFCB83]
                to-[#0077FF]
                opacity-80
                blur-[60px]
              "
            />
          </div>

          {/* Gradient Border */}
          <div
            className="relative z-10 rounded-2xl p-px"
            style={{
              background:
                "linear-gradient(to bottom, #FFCB83 0%, transparent 100%)",
            }}
          >

            {/* Terminal */}
            <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">

              {/* Header */}
              <div className="h-10 bg-white/5 flex items-center px-4 border-b border-white/10">

                {/* Circles */}
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>

                {/* Title */}
                <div className="flex-1 text-center pe-10 md:pe-0 text-sm basier-mono tracking-tighter text-white/50">
                  inferago — zsh
                </div>

              </div>

              {/* Content */}
              <div className="p-6 md:p-10 space-y-8 md:space-y-10">

                {/* Terminal Commands */}
                <div className="space-y-3 basier-mono tracking-tighter text-xs md:text-sm text-white/30 wrap-break-word">

                  <div>
                    <span className="text-white">user@inferago</span>
                    <span className="text-white/30">:~$</span>{" "}
                    initialize governance-core
                  </div>

                  <div>
                    <span className="text-white">user@inferago</span>
                    <span className="text-white/30">:~$</span>{" "}
                    deploy automation-policy --secure
                  </div>

                  <div>
                    <span className="text-white">user@inferago</span>
                    <span className="text-white/30">:~$</span>{" "}
                    monitor agents --audit-log
                  </div>

                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                  {sections.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        flex-col
                        rounded-xl
                        p-5 md:p-6
                        glass-badge
                        card-lift
                        hover:border-white/25
                        transition-all
                      "
                    >

                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-4 md:mb-5">

                        <div className="text-xs basier-mono tracking-tighter text-white/30">
                          {item.path}
                        </div>

                        <div className="text-white/80">
                          {item.icon}
                        </div>

                      </div>

                      {/* Title */}
                      <div className="text-sm text-white mb-2 md:mb-3">
                        {item.title}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-white/40 inter-light tracking-normal">
                        {item.desc}
                      </p>

                      {/* Bottom Link */}
                      <div className="mt-auto pt-5 md:pt-6">

                        <p className="text-sm text-orange-200 underline hover:text-orange-100 transition-colors cursor-pointer">
                          View Docs →
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
};

export default Platform;
