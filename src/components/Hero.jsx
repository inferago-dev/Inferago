// components/Hero.jsx
import React from "react";
import Flowchart from "./Flowchart";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-0"
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-30" />

        {/* Bright Linear Gradient Blob - Adjusted for mobile */}
        <div
          className="absolute -top-20 right-10 md:right-60 
                     w-[250px] md:w-[300px] 
                     h-[400px] md:h-[500px] 
                     bg-[linear-gradient(200deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
                     opacity-100 
                     blur-[60px] md:blur-[80px] 
                     animate-blob-linear z-10"
        />

        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center relative z-20 w-full">

          {/* Realistic Glass Effect Badge */}
          <Reveal className="glass-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-4 rounded-2xl">
            <span className="inter-regular text-xs tracking-wide text-white">
              AI AUTOMATION GOVERNANCE
            </span>
          </Reveal>

          {/* Heading - Better mobile typography */}
          <Reveal delay={100} as="h1" className="text-[2.1rem] leading-[1.1]
                         md:text-5xl
                         inter-medium tracking-tight px-1">
            Control AI Automation with
            <br />
            Precision and Confidence
          </Reveal>

          {/* Subtitle - Improved mobile readability */}
          <Reveal delay={200} as="p" className="mt-4 md:mt-2 max-w-xl mx-auto
                        inter-light text-[15px] md:text-md
                        text-white/60 px-6 leading-relaxed">
            Ensure Secure, Compliant and High-Performance <br className="hidden md:block" />
            AI Automation at Scale
          </Reveal>
        </div>
      </section>

      <Flowchart />
    </>
  );
};

export default Hero;