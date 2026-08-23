// pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const directions = [
  {
    key: "intelligence",
    label: "01 — INTELLIGENCE",
    title: "Intelligence",
    desc: "Building the infrastructure that makes AI systems observable, governable and secure.",
    cta: "Explore Inferago AI →",
    to: "/ai",
  },
  {
    key: "products",
    label: "02 — PRODUCTS",
    title: "Products",
    desc: "Turning ideas into digital products people actually use.",
    cta: "Explore Inferago Web →",
    to: "/web",
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-0"
      >
        <div className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-30" />

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
          <Reveal className="glass-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-4 rounded-2xl">
            <span className="inter-regular text-xs tracking-wide text-white">
              INFERAGO
            </span>
          </Reveal>

          <Reveal
            delay={100}
            as="h1"
            className="text-[2.1rem] leading-[1.1] md:text-5xl inter-medium tracking-tight px-1"
          >
            Building the systems
            <br />
            behind what&rsquo;s next.
          </Reveal>

          <Reveal
            delay={200}
            as="p"
            className="mt-4 md:mt-2 max-w-xl mx-auto inter-light text-[15px] md:text-md text-white/60 px-6 leading-relaxed"
          >
            Inferago builds intelligent systems and digital products for
            businesses moving into the future of technology.
          </Reveal>

          <Reveal delay={280} className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/ai"
              className="px-5 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              Explore AI →
            </Link>
            <Link
              to="/web"
              className="px-5 py-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              Build a product →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Two directions */}
      <section className="py-16 md:py-24 bg-black inter-regular">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center mb-8 md:mb-16">
            <div className="text-white text-sm mb-1 md:mb-3">TWO WAYS WE BUILD</div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {directions.map((d, i) => (
              <Reveal
                key={d.key}
                delay={i * 100}
                className="glass-badge card-lift rounded-2xl p-6 md:p-8 flex flex-col"
              >
                <div className="text-xs basier-mono tracking-tighter text-white/40 mb-4">
                  {d.label}
                </div>
                <h3 className="text-xl md:text-2xl inter-medium text-white mb-3">
                  {d.title}
                </h3>
                <p className="text-sm text-white/50 inter-light leading-relaxed flex-1">
                  {d.desc}
                </p>
                <Link
                  to={d.to}
                  className="mt-6 w-fit px-4 py-2 text-xs bg-white text-black rounded-full transition-all active:scale-95 hover:bg-white/90"
                >
                  {d.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-black inter-regular">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal as="h2" className="text-2xl md:text-3xl inter-medium tracking-tight text-white mb-4">
            Have something worth building?
          </Reveal>
          <Reveal delay={80} as="p" className="text-sm text-white/50 inter-light mb-8">
            Tell us what you&rsquo;re trying to make.
          </Reveal>
          <Reveal delay={140}>
            <Link
              to="/contact"
              className="px-5 py-2 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              Build with us →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HomePage;
