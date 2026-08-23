// components/Contact.jsx
import React, { useState } from "react";
import Reveal from "./Reveal";

const buildOptions = [
  "Website",
  "SaaS",
  "Mobile app",
  "E-commerce",
  "AI product",
  "Automation",
  "Custom software",
  "Not sure yet",
];

const Contact = () => {
  const [buildType, setBuildType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will respond within 4 hours.");
  };

  return (
    <section id="contact" className="pt-24 pb-12 bg-black inter-regular">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal as="h2" className="text-center text-white text-sm mb-8 md:mb-12">CONTACT US</Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Text */}
          <Reveal delay={80}>
            <h2 className="text-md mb-2 md:mb-6 inter-regular md:text-left text-center">Let’s Connect</h2>
            <p className="text-sm inter-light tracking-wide md:text-left text-center text-white/50 leading-5 max-w-md">
              Your message matters to us, connect with us
              <br />
              and let us respond with thoughtful attention and purposeful
              support
            </p>

            <p className="text-sm mt-6 md:text-left text-center text-white/50 max-w-md underline cursor-pointer hover:text-white transition">
              Visit Help Center →
            </p>
          </Reveal>

          {/* Right Form */}
          <Reveal delay={160} as="form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6 ">
              <div className="gradient-border-b">
                <input
                  type="text"
                  className="placeholder:text-sm"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="gradient-border-b">
                <input
                  type="email"
                  className="placeholder:text-sm"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="gradient-border-b">
              <input
                type="text"
                className="placeholder:text-sm"
                placeholder="Company / Project"
              />
            </div>

            <div>
              <p className="text-xs text-white/40 inter-light mb-3">
                What are you building?
              </p>
              <div className="flex flex-wrap gap-2">
                {buildOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBuildType(option)}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-all active:scale-95 ${
                      buildType === option
                        ? "bg-white text-black border-white"
                        : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="gradient-border-b">
              <textarea
                className="placeholder:text-sm"
                placeholder="Tell us about it"
                rows="5"
                required
              />
            </div>

            <div className="gradient-border-b">
              <input
                type="text"
                className="placeholder:text-sm"
                placeholder="Budget / timeline (optional)"
              />
            </div>

            <button
              type="submit"
              className="w-fit py-1.5 px-4 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              Submit →
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
