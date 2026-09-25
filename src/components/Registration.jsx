// components/Registration.jsx
import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import Reveal from "./Reveal";

const GRADIENT = "linear-gradient(90deg,#FF3300 0%,#FFCB83 40%,#0077FF 85%)";
const HAIRLINE = "linear-gradient(90deg, transparent, rgba(255,255,255,0.18) 20%, rgba(255,255,255,0.18) 80%, transparent)";

const facts = ["Ministry of MSME", "Government of India", "Registered Enterprise"];

const Seal = () => (
  <div className="relative w-32 h-32 md:w-36 md:h-36 shrink-0">
    {/* Glow */}
    <div
      className="absolute inset-4 rounded-full opacity-50 blur-[30px]"
      style={{ background: GRADIENT }}
    />

    {/* Rotating text ring */}
    <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 w-full h-full" aria-hidden="true">
      <defs>
        <path id="seal-ring" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <text className="inter-medium" fill="rgba(255,255,255,0.7)" fontSize="12" letterSpacing="3.6">
        <textPath href="#seal-ring">MSME REGISTERED / GOVERNMENT OF INDIA /</textPath>
      </text>
    </svg>

    {/* Inner rings */}
    <div className="absolute inset-[22%] rounded-full border border-white/15" />
    <div className="absolute inset-[27%] rounded-full bg-black border border-white/10 flex items-center justify-center">
      <LuBadgeCheck className="text-3xl text-white" strokeWidth={1.5} />
    </div>
  </div>
);

const Registration = () => {
  return (
    <section className="relative py-10 md:py-14 bg-black inter-regular overflow-hidden">
      {/* Hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: HAIRLINE }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: HAIRLINE }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          <Reveal direction="zoom">
            <Seal />
          </Reveal>

          <div className="flex-1">
            <Reveal delay={120}>
              <h2 className="text-2xl md:text-4xl inter-medium text-white tracking-tight leading-tight mb-3">
                Proudly MSME Registered.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-sm text-white/45 inter-light leading-6 tracking-wide max-w-lg mx-auto md:mx-0">
                Inferago is a registered Micro, Small &amp; Medium Enterprise, recognised by the Government of India.
              </p>
            </Reveal>
          </div>

          <Reveal delay={320} direction="right" className="w-full md:w-auto">
            <div className="flex flex-row md:flex-col justify-center gap-0 md:gap-3">
              {facts.map((f, i) => (
                <div
                  key={f}
                  className={`px-3 md:px-0 md:pl-5 text-[11px] md:text-xs uppercase tracking-widest text-white/50 md:border-l md:border-white/15 ${
                    i > 0 ? "border-l border-white/15 md:border-l" : ""
                  }`}
                >
                  {f}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Registration;
