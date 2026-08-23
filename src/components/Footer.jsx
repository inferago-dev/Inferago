// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FiArrowUpRight, FiShield, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] text-white pt-16 pb-12 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.08]">
          {/* Brand & Mission Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/Infer_Full.png"
                alt="Inferago"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-white/50 font-light max-w-sm leading-relaxed">
              The operating system for autonomous AI systems and high-velocity
              product engineering. Building the systems behind what&rsquo;s next.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-white/60">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400">All Clusters Operational</span>
              <span className="text-white/30">•</span>
              <span className="text-white/40">v2.4 Production</span>
            </div>
          </div>

          {/* Quick Links Sitemaps */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-4">
                PLATFORM
              </span>
              <ul className="space-y-2.5 text-xs text-white/60 font-light">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home Overview
                  </Link>
                </li>
                <li>
                  <Link to="/ai" className="hover:text-white transition-colors">
                    AI Governance
                  </Link>
                </li>
                <li>
                  <Link to="/web" className="hover:text-white transition-colors">
                    Web Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Studio
                  </Link>
                </li>
              </ul>
            </div>

            {/* Architecture & Docs */}
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-4">
                ENGINEERING
              </span>
              <ul className="space-y-2.5 text-xs text-white/60 font-light">
                <li>
                  <Link to="/ai" className="hover:text-white transition-colors">
                    Runtime Guardrails
                  </Link>
                </li>
                <li>
                  <Link to="/ai" className="hover:text-white transition-colors">
                    CLI & Python SDK
                  </Link>
                </li>
                <li>
                  <Link to="/ai" className="hover:text-white transition-colors">
                    Telemetry Stream
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white transition-colors">
                    AgentGate Proxy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect & Social */}
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-4">
                CONNECT
              </span>
              <div className="flex items-center gap-3 text-lg text-white/60 mb-4">
                <a
                  href="https://www.instagram.com/inferagoai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/InferagoAi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="hover:text-white transition-colors"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/inferago2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
              <Link
                to="/contact"
                className="text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1"
              >
                <span>Initiate Project</span>
                <FiArrowUpRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} Inferago Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;