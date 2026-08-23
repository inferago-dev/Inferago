// components/Hero.jsx
import React from "react";
import Flowchart from "./Flowchart";
import Reveal from "./Reveal";
import { FiShield, FiCpu, FiLock, FiActivity } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <section
        id="ai-hero"
        className="relative pt-32 pb-12 md:pt-44 md:pb-16 overflow-hidden"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-25" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-blue-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center relative z-20 w-full">
          {/* Badge */}
          <Reveal className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wide text-white/90">
              RUNTIME AI GOVERNANCE & SECURITY
            </span>
          </Reveal>

          {/* Heading */}
          <Reveal delay={80} as="h1" className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Control AI Automation with{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-200 to-blue-400 bg-clip-text text-transparent">
              Precision and Confidence
            </span>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={160} as="p" className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-white/60 font-light leading-relaxed">
            Ensure secure, compliant, and observable AI workflows at enterprise scale.
            Sit between autonomous agents and critical infrastructure with zero performance penalty.
          </Reveal>
        </div>
      </section>

      {/* Interactive Flowchart Architecture Canvas */}
      <Flowchart />
    </>
  );
};

export default Hero;