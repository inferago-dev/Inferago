// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] text-white pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/Infer_Full.png"
                alt="Inferago"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs font-mono text-orange-400 uppercase tracking-wider">
              Tech & Digital Services
            </p>
            <p className="text-xs text-white/50 font-light max-w-sm leading-relaxed">
              Building digital products, platforms, custom software, and growth engines for modern businesses.
            </p>

            <div className="pt-2 flex items-center gap-3 text-lg text-white/60">
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
          </div>

          {/* Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-4">
                SERVICES
              </span>
              <ul className="space-y-2 text-xs text-white/60 font-light">
                <li>
                  <Link to="/web" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/web" className="hover:text-white transition-colors">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link to="/web" className="hover:text-white transition-colors">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link to="/web" className="hover:text-white transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/web" className="hover:text-white transition-colors">
                    AI Integration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-4">
                COMPANY
              </span>
              <ul className="space-y-2 text-xs text-white/60 font-light">
                <li>
                  <Link to="/work" className="hover:text-white transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Studio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* AI Lab */}
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-4">
                INFERAGO AI
              </span>
              <ul className="space-y-2 text-xs text-white/60 font-light">
                <li>
                  <Link
                    to="/ai"
                    className="hover:text-white transition-colors flex items-center gap-1 text-orange-300"
                  >
                    <span>AI MVP Lab</span>
                    <span className="text-[9px] font-mono px-1 rounded bg-orange-500/20">
                      BETA
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/ai" className="hover:text-white transition-colors">
                    Runtime Guardrails
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Start a Project →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} Inferago. All rights reserved.
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