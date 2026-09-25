// components/Contact.jsx
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will respond within 4 hours.");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-black inter-regular overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-xs tracking-widest text-white/40 uppercase border border-white/10 rounded-full px-4 py-1.5">
            Contact Us
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-14 md:mb-18">
          <h2 className="text-3xl md:text-4xl inter-medium text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-sm text-white/40 inter-light leading-6 max-w-xl mx-auto tracking-wide">
            Have a question, a use-case in mind, or want a live demo? Drop us a message and we'll get back to you within 4 hours.
          </p>
        </div>

        {/* Card Grid */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-5 bg-black">

            {/* Left Info Panel — Products gradient card style */}
            <div className="md:col-span-2 glass-badge relative overflow-hidden flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">

              {/* Gradient Blob — same as product cards */}
              <div
                className="absolute -top-20 -left-10 w-[140%] h-[220px] opacity-70 blur-[70px] pointer-events-none"
                style={{
                  background: "linear-gradient(90deg,#FF3300 0%,#FFCB83 40%,#0077FF 85%)",
                }}
              />

              {/* Top Content */}
              <div className="relative z-10">
                <h3 className="text-xl inter-medium text-white mb-3 leading-snug">
                  We're here to help
                </h3>
                <p className="text-xs text-white/50 inter-light leading-6 tracking-wide">
                  Whether you're evaluating Inferago for your team or troubleshooting a specific workflow, our team is ready to assist.
                </p>
              </div>

              {/* Info Items */}
              <div className="relative z-10 mt-8 md:mt-0 space-y-3">

                {/* Email */}
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/30 tracking-widest uppercase mb-1">Email</p>
                  <p className="text-sm text-white inter-regular">hello@inferago.ai</p>
                </div>

                {/* Response Time */}
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/30 tracking-widest uppercase mb-1">Response Time</p>
                  <p className="text-sm text-white inter-regular">Within 4 hours</p>
                </div>

                {/* Help Center */}
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-xs text-white/30 tracking-widest uppercase mb-1">Help Center</p>
                  <a href="#" className="text-sm text-white/70 inter-regular hover:text-white transition-colors">
                    Visit Help Center →
                  </a>
                </div>

              </div>
            </div>


            {/* Right Form Panel */}
            <div className="md:col-span-3 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/30 tracking-widest uppercase">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/30 tracking-widest uppercase">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/25 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/30 tracking-widest uppercase">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/25 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/30 tracking-widest uppercase">Message</label>
                  <textarea
                    placeholder="Tell us about your use-case or question..."
                    rows="5"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/25 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-2.5 text-sm inter-regular text-black bg-white rounded-full hover:bg-white/90 transition-all active:scale-95"
                  >
                    Send Message →
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
