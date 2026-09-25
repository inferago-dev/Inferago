// components/Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "./Reveal";

const pages = [
  { label: "HOME", id: "home" },
  { label: "ABOUT US", id: "about" },
  { label: "PRODUCTS", id: "products" },
  { label: "SERVICES", id: "services" },
  { label: "CONTACT", id: "contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/inferagoai?stkn=MXA0NTBsbWViNms0eg==",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/inferago2025/",
    Icon: FaLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/InferagoAi",
    Icon: FaXTwitter,
  },
];

const Footer = () => {
  return (
    <footer className="bg-black inter-light pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Logo */}
          <Reveal className="md:col-span-5 text-center md:text-left">

            <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
              <img
                src="./Infer_Full.png"
                alt="Infer"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-white/40 text-md md:text-md max-w-md mx-auto md:mx-0">
              Precision in Every Decision.
            </p>

          </Reveal>

          {/* Pages + Connect Wrapper */}
          <Reveal delay={120} className="md:col-span-7">

            <div className="grid grid-cols-2 mx-8 gap-x-12 gap-y-10 text-left">

              {/* Pages */}
              <div>

                <div className="text-sm uppercase tracking-wide text-white/50 mb-3 md:mb-6">
                  PAGES
                </div>

                <div className="space-y-2 text-sm tracking-wide text-white/70">
                  {pages.map(({ label, id }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block hover:text-white hover:translate-x-1 transition-all duration-300"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="https://techservices.inferago.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    TECH SERVICES <HiArrowUpRight className="text-xs" />
                  </a>
                </div>

              </div>

              {/* Connect */}
              <div>

                <div className="text-sm uppercase tracking-wide text-white/50 mb-3 md:mb-6">
                  CONNECT
                </div>

                <div className="flex gap-3 text-xl text-white/60">
                  {socials.map(({ label, href, Icon: SocialIcon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="glass-badge w-10 h-10 rounded-xl flex items-center justify-center hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <SocialIcon className="text-lg" />
                    </a>
                  ))}
                </div>

              </div>

            </div>

          </Reveal>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10">

          <div className="flex items-center justify-between text-sm text-white/40 tracking-wide">
            <p>© {new Date().getFullYear()} INFERAGO</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
