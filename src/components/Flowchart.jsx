// components/Flowchart.jsx

import React, { useId } from "react";
import { FiLock } from "react-icons/fi";
import { LuChartLine, LuScanEye } from "react-icons/lu";
import { BsPlusLg } from "react-icons/bs";
import { RiGitBranchLine } from "react-icons/ri";
import Reveal from "./Reveal";

const Flowchart = () => {
  return (
    <section className="relative inter-regular bg-transparent overflow-hidden flex items-center justify-center -mt-px">

      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-30"
        style={{ top: "-55px" }}
      />

      {/* Gradient Blob */}
      <div
        className="absolute -bottom-130 left-1/2 -translate-x-1/2 w-[800px] h-[600px]
        bg-[linear-gradient(90deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
        opacity-70 blur-[90px] z-0"
      />

      <Reveal className="max-w-7xl mx-auto relative z-10 w-full">

        {/* ========================= */}
        {/* DESKTOP VIEW - UNCHANGED */}
        {/* ========================= */}

        <div className="relative h-[600px] max-w-[1100px] mx-auto hidden md:block">

          {/* SVG CONNECTIONS */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1100 600"
            fill="none"
          >
            <defs>
              <linearGradient id="lineFadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="lineFadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* LEFT TOP */}
            <g>
              <circle cx="320" cy="190" r="2.5" fill="white" />
              <path
                d="M 320 190 H 380 C 440 190, 420 285, 460 285 H 534"
                stroke="url(#lineFadeLeft)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>

            {/* LEFT BOTTOM */}
            <g>
              <circle cx="320" cy="410" r="2.5" fill="white" />
              <path
                d="M 320 410 H 380 C 440 410, 420 315, 460 315 H 534"
                stroke="url(#lineFadeLeft)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>

            {/* RIGHT TOP */}
            <g>
              <circle cx="780" cy="190" r="2.5" fill="white" />
              <path
                d="M 780 190 H 720 C 660 190, 680 285, 640 285 H 566"
                stroke="url(#lineFadeRight)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>

            {/* RIGHT BOTTOM */}
            <g>
              <circle cx="780" cy="410" r="2.5" fill="white" />
              <path
                d="M 780 410 H 720 C 660 410, 680 315, 640 315 H 566"
                stroke="url(#lineFadeRight)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>

          </svg>

          {/* CENTER CORE */}
          <div className="absolute inset-0 flex items-center justify-center z-20">

            <div
              className="absolute w-[160px] h-[160px] rounded-xl blur-[30px]"
              style={{
                background:
                  "linear-gradient(135deg, #FF3300 0%, #FFCB83 45%, #0077FF 100%)",
              }}
            />

            <div className="absolute w-[130px] h-[130px] rounded-4xl bg-white/5 border border-white/10 backdrop-blur-xl" />

            <div className="relative w-26 h-26 bg-black rounded-3xl flex items-center justify-center border border-white/5">

              <img src="./Infer_White.png" className="w-14 h-14" alt="Infer" />

              <div className="absolute -top-8 -left-8 text-white text-lg"><BsPlusLg /></div>
              <div className="absolute -top-8 -right-8 text-white text-lg"><BsPlusLg /></div>
              <div className="absolute -bottom-8 -left-8 text-white text-lg"><BsPlusLg /></div>
              <div className="absolute -bottom-8 -right-8 text-white text-lg"><BsPlusLg /></div>

            </div>

          </div>

          {/* FEATURE CARDS DESKTOP */}

          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute left-[75px] top-0 bottom-0 w-[240px] pointer-events-auto">

              <div
                style={{ top: "190px", transform: "translateY(-50%)" }}
                className="absolute"
              >
                <FeatureCard
                  Icon={FiLock}
                  title="Security"
                  desc="Protect AI agents with trusted safeguards"
                  isStrokeOnly
                />
              </div>

              <div
                style={{ top: "410px", transform: "translateY(-50%)" }}
                className="absolute"
              >
                <FeatureCard
                  Icon={RiGitBranchLine}
                  title="Automation"
                  desc="Streamline tasks with intelligent agent workflows"
                />
              </div>

            </div>

            <div className="absolute right-[75px] top-0 bottom-0 w-[240px] pointer-events-auto">

              <div
                style={{ top: "190px", transform: "translateY(-50%)" }}
                className="absolute right-0"
              >
                <FeatureCard
                  Icon={LuChartLine}
                  title="Analytics"
                  desc="Gain actionable insights from agent performance."
                  isStrokeOnly
                />
              </div>

              <div
                style={{ top: "410px", transform: "translateY(-50%)" }}
                className="absolute right-0"
              >
                <FeatureCard
                  Icon={LuScanEye}
                  title="Real-time Monitoring"
                  desc="Track activities instantly with transparent oversight."
                  isStrokeOnly
                />
              </div>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* MOBILE VIEW — IMPROVED */}
        {/* ========================= */}

        <div className="md:hidden flex flex-col items-center justify-center gap-6 py-10 px-3">

          {/* TOP CARDS */}

          <div className="flex justify-center gap-2 w-full max-w-[280px]">
            <div className="flex-1">
              <FeatureCard Icon={FiLock} title="Security" isStrokeOnly />
            </div>

            <div className="flex-1">
              <FeatureCard Icon={LuChartLine} title="Analytics" isStrokeOnly />
            </div>
          </div>

          {/* CENTER */}

          <div className="relative flex items-center justify-center my-2">

            <div className="absolute w-[100px] h-[100px] rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl z-0" />

            {/* MOBILE SVG */}

            <svg
              className="absolute w-[300px] h-[260px] z-10"
              viewBox="0 0 300 260"
              fill="none"
            >

              <defs>

                <linearGradient id="mobileLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="mobileRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.9" />
                </linearGradient>

              </defs>

              {/* CENTER DOT */}
              <circle cx="150" cy="130" r="2" fill="white" />

              {/* ======================= */}
              {/* TOP LEFT — shifted UP */}
              {/* ======================= */}

              <path
                d="
      M105 124
      H78
      C74 124, 70 120, 70 116
      V60
    "
                stroke="url(#mobileLeft)"
                strokeWidth="1.8"
                strokeDasharray="2 3"
                fill="none"
              />

              <circle cx="70" cy="60" r="2.8" fill="white" />

              {/* ======================= */}
              {/* TOP RIGHT — shifted UP */}
              {/* ======================= */}

              <path
                d="
      M195 124
      H222
      C226 124, 230 120, 230 116
      V60
    "
                stroke="url(#mobileRight)"
                strokeWidth="1.8"
                strokeDasharray="2 3"
                fill="none"
              />

              <circle cx="230" cy="60" r="2.8" fill="white" />

              {/* ======================= */}
              {/* BOTTOM LEFT — shifted DOWN */}
              {/* ======================= */}

              <path
                d="
      M105 136
      H78
      C74 136, 70 140, 70 144
      V200
    "
                stroke="url(#mobileLeft)"
                strokeWidth="1.8"
                strokeDasharray="2 3"
                fill="none"
              />

              <circle cx="70" cy="200" r="2.8" fill="white" />

              {/* ======================= */}
              {/* BOTTOM RIGHT — shifted DOWN */}
              {/* ======================= */}

              <path
                d="
      M195 136
      H222
      C226 136, 230 140, 230 144
      V200
    "
                stroke="url(#mobileRight)"
                strokeWidth="1.8"
                strokeDasharray="2 3"
                fill="none"
              />

              <circle cx="230" cy="200" r="2.8" fill="white" />

            </svg>
            {/* CENTER LOGO */}

            <div className="relative z-20 w-20 h-20 bg-black rounded-2xl flex items-center justify-center border border-white/5">

              <img
                src="./Infer_White.png"
                className="w-10 h-10"
                alt="Infer"
              />

            </div>

          </div>

          {/* BOTTOM CARDS */}

          <div className="flex justify-center gap-2 w-full max-w-[280px]">

            <div className="flex-1">
              <FeatureCard Icon={RiGitBranchLine} title="Automation" />
            </div>

            <div className="flex-1">
              <FeatureCard Icon={LuScanEye} title="Real-time Monitoring" isStrokeOnly />
            </div>

          </div>

        </div>

      </Reveal>

    </section>
  );
};

/* FEATURE CARD — Reduced Padding */

const FeatureCard = ({
  Icon,
  title,
  desc,
  isStrokeOnly = false,
  iconSize = 18,
  strokeWidth = 2.2,
}) => {

  const uniqueId = useId();

  const gradientId = `feature-grad-${title
    .toLowerCase()
    .replace(/\s+/g, "-")}-${uniqueId}`;

  return (

    <div className="group w-full glass-badge p-3 rounded-2xl transition-all duration-300 hover:scale-[1.02]">

      <div className="flex items-center gap-2">

        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">

          <svg width="0" height="0" className="absolute">
            <defs>

              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0.6" />
              </linearGradient>

            </defs>
          </svg>

          <Icon
            size={iconSize}
            style={{
              ...(isStrokeOnly
                ? {
                  stroke: `url(#${gradientId})`,
                  strokeWidth,
                  fill: "transparent",
                }
                : {
                  fill: `url(#${gradientId})`,
                  stroke: `url(#${gradientId})`,
                  strokeWidth: 0,
                }),
            }}
          />

        </div>

        <div>

          <h3 className="text-white text-sm tracking-tight leading-none">
            {title}
          </h3>

          {desc && (
            <p className="hidden md:block text-white/50 text-xs leading-tight mt-1 inter-light">
              {desc}
            </p>
          )}

        </div>

      </div>

    </div>

  );

};

export default Flowchart;