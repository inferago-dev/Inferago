// components/Products.jsx
import React from "react";
import { GoShieldLock } from "react-icons/go";
import { BiCommand } from "react-icons/bi";
import { LuScanEye } from "react-icons/lu";
import Reveal from "./Reveal";

const Products = () => {
  const products = [
    {
      icon: GoShieldLock,
      iconProps: { strokeWidth: 0.5 },
      title: "AI Security SaaS",
      desc: "A cloud-based platform that protects AI systems from threats like data leaks, model attacks, and unauthorized access. It continuously monitors AI behavior, detects risks in real time, and ensures secure, reliable, and compliant AI operations.",
      useStrokeOnly: false,
    },
    {
      icon: BiCommand,
      iconProps: {},
      title: "Prompt-Based Automation",
      desc: "An AI-powered solution that automates tasks using simple natural language prompts. Users can create workflows, trigger actions, and manage processes without coding, making automation faster, easier, and more accessible.",
      useStrokeOnly: false,
    },
    {
      icon: LuScanEye,
      iconProps: { strokeWidth: 2 },
      title: "Monitoring & Suggestion SaaS",
      desc: "A smart monitoring platform that tracks system performance and user activity in real time. It analyzes data using AI and provides actionable insights and suggestions to improve efficiency, reduce issues, and optimize overall performance.",
      useStrokeOnly: true,
    },
  ];

  const gradientOffsets = ["left-60", "-left-20", "-left-[80%]"];

  return (
    <section id="products" className="py-12 md:py-24 bg-black inter-regular">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <Reveal className="text-center mb-8 md:mb-16">
          <div className="text-white text-sm mb-1 md:mb-3">PRODUCTS</div>
        </Reveal>

        {/* Cards - Only this part is modified */}
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((product, i) => {
            const IconComponent = product.icon;
            const gradientId = `icon-grad-${i}`;
            const isStrokeOnly = product.useStrokeOnly ?? false;

            return (
              <Reveal
                key={i}
                delay={i * 100}
                className="
    glass-badge
    card-lift
    relative
    overflow-hidden
    rounded-2xl
    p-5
    flex
    flex-col
    max-w-[280px] mx-auto md:max-w-none
  "
              >
                {/* Shared gradient background */}
                <div
                  className={`
                    absolute
                    -top-30
                    ${gradientOffsets[i]}
                    w-[120%]
                    h-[200px]
                    bg-[linear-gradient(90deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
                    opacity-75
                    blur-[80px]
                    pointer-events-none
                  `}
                />

                {/* ICON BOX */}
                <div className="bg-white/5 border border-white/25 relative mb-4 w-fit p-2 rounded-lg overflow-hidden">
                  {/* SVG Gradient Definition */}
                  <svg
                    width="0"
                    height="0"
                    className="absolute"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id={gradientId}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop
                          offset="100%"
                          stopColor="white"
                          stopOpacity="0.2"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon with conditional gradient */}
                  <IconComponent
                    className="text-2xl relative z-10"
                    style={{
                      ...(isStrokeOnly
                        ? { stroke: `url(#${gradientId})` }
                        : {
                          fill: `url(#${gradientId})`,
                          stroke: `url(#${gradientId})`,
                        }),
                    }}
                    {...product.iconProps}
                  />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-sm mb-1">{product.title}</h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-sm text-white/50 flex-1 tracking-normal leading-5 inter-light">
                  {product.desc}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    relative z-10
                    mt-4 md:mt-10
                    px-4
                    py-2
                    text-xs
                    bg-white
                    text-black
                    rounded-full
                    flex
                    items-center
                    justify-center
                    w-fit
                    transition-all
                    active:scale-95
                    hover:bg-white/90
                  "
                >
                  Learn More
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;