// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black inter-light pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Grid */}
        <div className="flex flex-col items-center text-center w-full gap-y-12">

          {/* Logo */}
          <div className="flex flex-col items-center w-full">

            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="./Infer_Full.png"
                alt="Infer"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-white/40 text-md md:text-sm tracking-wide max-w-md mx-auto text-center">
              Precision in Every Decision.
            </p>

          </div>

          {/* Pages + Resources Wrapper */}
          <div className="w-full flex justify-center">

            {/* Pages + Resources Side-by-Side */}
            <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-24 gap-y-10 text-left">

              {/* Pages */}
              <div>

                <div className="text-xs uppercase tracking-wide text-white/50 mb-3 md:mb-6">
                  PAGES
                </div>

                <div className="space-y-2 text-xs tracking-wide text-white/70">
                  <Link to="/#home" className="block hover:text-white transition-colors">
                    HOME
                  </Link>

                  <Link to="/#about" className="block hover:text-white transition-colors">
                    ABOUT US
                  </Link>

                  <Link to="/#products" className="block hover:text-white transition-colors">
                    PRODUCTS
                  </Link>

                  <Link to="/#platform" className="block hover:text-white transition-colors">
                    DOCS
                  </Link>

                  <Link to="/#contact" className="block hover:text-white transition-colors">
                    CONTACT
                  </Link>
                </div>

              </div>

              {/* Resources */}
              <div>

                <div className="text-xs uppercase tracking-wide text-white/50 mb-3 md:mb-6">
                  RESOURCES
                </div>

                <div className="space-y-2 text-xs tracking-wide text-white/70">
                  <Link
                    to="/#platform"
                    className="block hover:text-white transition-colors"
                  >
                    DOCUMENTATION
                  </Link>

                  <Link
                    to="/#platform"
                    className="block hover:text-white transition-colors"
                  >
                    CLI & SDK
                  </Link>

                  <Link
                    to="/#platform"
                    className="block hover:text-white transition-colors"
                  >
                    INTEGRATIONS
                  </Link>
                </div>

              </div>

              {/* Connect */}
              <div className="col-span-2 md:col-span-1">

                <div className="text-xs uppercase tracking-wide text-white/50 mb-6 text-center">
                  CONNECT
                </div>

                <div className="flex justify-center gap-3 text-xl text-white/60">

                  <a href="https://www.instagram.com/inferagoai/" target="_blank" rel="noopener noreferrer" className="icon-pop hover:text-white" aria-label="Instagram">
                    <FaInstagram />
                  </a>

                  <a
                    href="https://x.com/InferagoAi"
                    target="_blank" rel="noopener noreferrer"
                    className="icon-pop hover:text-white"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter />
                  </a>

                  <a href="https://www.linkedin.com/company/inferago2025/" target="_blank" rel="noopener noreferrer" className="icon-pop hover:text-white" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10">

          <div className="flex flex-col md:flex-row items-center justify-center text-center gap-x-10 gap-y-3 text-xs text-white/40 tracking-wide">

            <p>© {new Date().getFullYear()} INFERAGO</p>

            <p>ALL RIGHTS RESERVED</p>

            <Link to="/privacy" className="hover:text-white/70 transition-colors">
              PRIVACY POLICY
            </Link>

            <Link to="/terms" className="hover:text-white/70 transition-colors">
              TERMS OF SERVICE
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;