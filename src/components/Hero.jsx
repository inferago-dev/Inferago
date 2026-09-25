// components/Hero.jsx
import React, { useRef } from "react";
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2";
import {
  LuDatabase,
  LuPlug,
  LuScale,
  LuShieldCheck,
  LuCheck,
  LuEye,
  LuTriangleAlert,
  LuBan,
} from "react-icons/lu";
import Flowchart from "./Flowchart";

const headline = [
  ["Control", "AI", "Automation", "with"],
  ["Precision", "and", "Confidence"],
];

const pillars = ["Observe", "Evaluate", "Control", "Audit"];

// Floating "live activity" cards (wide screens only)
const activity = [
  {
    icon: LuDatabase,
    label: "Data access",
    target: "customer_records.read",
    status: "Allowed",
    StatusIcon: LuCheck,
    pos: "left-8 top-[24%]",
    float: "0s",
    delay: "1.3s",
  },
  {
    icon: LuPlug,
    label: "Tool call",
    target: "email.send_external",
    status: "In review",
    StatusIcon: LuEye,
    pos: "left-16 bottom-[20%]",
    float: "-3s",
    delay: "1.45s",
  },
  {
    icon: LuScale,
    label: "Policy check",
    target: "PII export policy",
    status: "Flagged",
    StatusIcon: LuTriangleAlert,
    pos: "right-8 top-[28%]",
    float: "-1.5s",
    delay: "1.6s",
  },
  {
    icon: LuShieldCheck,
    label: "Decision",
    target: "payments.refund",
    status: "Blocked",
    StatusIcon: LuBan,
    pos: "right-16 bottom-[18%]",
    float: "-4.5s",
    delay: "1.75s",
  },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const ActivityCard = ({ item }) => {
  const Icon = item.icon;
  const StatusIcon = item.StatusIcon;
  return (
    <div
      className={`zoom-in absolute ${item.pos} hidden min-[1400px]:block z-40`}
      style={{ animationDelay: item.delay }}
    >
      <div className="animate-float" style={{ animationDelay: item.float }}>
        <div
          className="glass-badge glass-blur w-[210px] rounded-2xl p-4 text-left"
          style={{ backdropFilter: "blur(16px) saturate(140%)", WebkitBackdropFilter: "blur(16px) saturate(140%)", background: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="bg-white/5 border border-white/15 p-1.5 rounded-lg">
              <Icon className="text-sm text-white" strokeWidth={1.8} />
            </div>
            <span className="inter-regular text-xs text-white/50 tracking-wide">{item.label}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="inter-regular text-xs text-white/85 truncate">{item.target}</span>
            <span className="shrink-0 inline-flex items-center gap-1 inter-medium text-[10px] text-white/80 bg-white/10 border border-white/15 rounded-full px-2 py-0.5">
              <StatusIcon className="text-[10px]" />
              {item.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);

  // Cursor-follow spotlight via CSS variables (no re-render)
  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="hero-spotlight inter-regular min-h-screen flex items-center relative overflow-hidden pt-24 pb-20 md:pt-20"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-30" />

        {/* Soft static glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 42%, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />

        {/* Bright Linear Gradient Blob */}
        <div
          className="absolute -top-20 right-10 md:right-60
                     w-[250px] md:w-[300px]
                     h-[400px] md:h-[500px]
                     bg-[linear-gradient(200deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
                     opacity-100
                     blur-[60px] md:blur-[80px]
                     animate-blob-linear z-10"
        />

        {/* Floating activity cards */}
        {activity.map((item) => (
          <ActivityCard key={item.label} item={item} />
        ))}

        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center relative z-20 w-full">

          {/* Heading: word by word blur in */}
          <h1 className="text-[2.1rem] leading-[1.08] md:text-6xl md:leading-[1.05] inter-medium tracking-tighter">
            {headline.map((line, li) => (
              <span key={li} className="block">
                {line.map((word, wi) => {
                  const delay = 0.25 + (li * headline[0].length + wi) * 0.08;
                  return (
                    <span
                      key={word}
                      className={`hero-in inline-block mr-[0.22em] last:mr-0 ${li === 1 ? "text-white/60" : ""}`}
                      style={{ animationDelay: `${delay}s` }}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="hero-in mt-6 max-w-xl mx-auto inter-light text-[15px] md:text-lg text-white/55 px-4 leading-relaxed"
            style={{ animationDelay: "0.9s" }}
          >
            See, understand, and control what your AI does.
            <br className="hidden md:block" /> Make AI actions visible. Make them accountable.
          </p>

          {/* CTAs */}
          <div
            className="hero-in mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: "1.05s" }}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 h-11 px-6 w-full max-w-[240px] sm:w-auto inter-medium text-sm bg-white text-black rounded-full hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-500 active:scale-95"
            >
              Get Started
              <HiArrowUpRight className="text-sm transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo("products")}
              className="group glass-badge inline-flex items-center justify-center gap-2 h-11 px-6 w-full max-w-[240px] sm:w-auto inter-regular text-sm text-white/80 rounded-full hover:text-white active:scale-95"
            >
              Explore Products
              <HiArrowRight className="text-sm transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Pillars */}
          <div
            className="hero-in mt-14 inter-regular flex items-center justify-center text-sm uppercase tracking-normal text-white/40"
            style={{ animationDelay: "1.2s" }}
          >
            {pillars.map((p, i) => (
              <React.Fragment key={p}>
                {i > 0 && <span className="w-px h-3 bg-white/15 mx-4 md:mx-6" />}
                <span>{p}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
          aria-label="Scroll down"
          className="hero-in absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex justify-center w-6 h-10 rounded-full border border-white/20 hover:border-white/40 transition-colors duration-300"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="scroll-cue mt-2 w-1 h-2 rounded-full bg-white/70" />
        </button>
      </section>

      <Flowchart />
    </>
  );
};

export default Hero;
