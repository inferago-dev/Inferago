// components/Footer.jsx
import React from "react";
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Logo */}
          <div className="md:col-span-5 text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <img
                src="./Infer_Full.png"
                alt="Infer"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-white/40 text-md md:text-sm tracking-wide max-w-md mx-auto md:mx-0">
              Precision in Every Decision.
            </p>

          </div>

          {/* Pages + Resources Wrapper */}
          <div className="md:col-span-7">

            {/* Pages + Resources Side-by-Side */}
            <div className="grid grid-cols-2 md:grid-cols-3 mx-8 gap-x-12 gap-y-10 text-left">

              {/* Pages */}
              <div>

                <div className="text-xs uppercase tracking-wide text-white/50 mb-3 md:mb-6">
                  PAGES
                </div>

                <div className="space-y-2 text-xs tracking-wide text-white/70">
                  <a href="#" className="block hover:text-white transition-colors">
                    HOME
                  </a>

                  <a href="#" className="block hover:text-white transition-colors">
                    ABOUT US
                  </a>

                  <a href="#" className="block hover:text-white transition-colors">
                    PRODUCTS
                  </a>

                  <a href="#" className="block hover:text-white transition-colors">
                    DOCS
                  </a>

                  <a href="#" className="block hover:text-white transition-colors">
                    BLOG
                  </a>

                  <a href="#" className="block hover:text-white transition-colors">
                    CONTACT
                  </a>
                </div>

              </div>

              {/* Resources */}
              <div>

                <div className="text-xs uppercase tracking-wide text-white/50 mb-3 md:mb-6">
                  RESOURCES
                </div>

                <div className="space-y-2 text-xs tracking-wide text-white/70">
                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    DOCUMENTATION
                  </a>

                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    CLI & SDK
                  </a>

                  <a
                    href="#"
                    className="block hover:text-white transition-colors"
                  >
                    INTEGRATIONS
                  </a>
                </div>

              </div>

              {/* Connect */}
              <div className="col-span-2 md:col-span-1">

                <div className="text-xs uppercase tracking-wide text-white/50 mb-6 text-center">
                  CONNECT
                </div>

                <div className="flex justify-center md:justify-start gap-3 text-xl text-white/60">



                  <a href="https://www.instagram.com/inferagoai/" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Instagram">
                    <FaInstagram />
                  </a>

                  <a
                    href="https://x.com/InferagoAi"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:text-white"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter />
                  </a>

                  <a href="https://linkedin.com/inferago2025" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
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

            <a href="#" className="hover:text-white/70 transition-colors">
              PRIVACY POLICY
            </a>

            <a href="#" className="hover:text-white/70 transition-colors">
              TERMS OF SERVICE
            </a>



          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;