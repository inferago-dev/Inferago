// components/Contact.jsx
import React from "react";
import Reveal from "./Reveal";

const Contact = () => {
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
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="gradient-border-b">
                <input
                  type="text"
                  className="placeholder:text-sm"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="gradient-border-b">
              <input
                type="email"
                className="placeholder:text-sm"
                placeholder="Work Email"
                required
              />
            </div>

            <div className="gradient-border-b">
              <textarea
                className="placeholder:text-sm"
                placeholder="Enter your Message"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-fit py-1.5 px-4 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              Send Message
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
