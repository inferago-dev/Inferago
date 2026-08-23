// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiArrowUpRight, FiZap } from "react-icons/fi";

const navItems = [
  { label: "Home", to: "/" },
  { label: "AI Platform", to: "/ai", tag: "v2.4" },
  { label: "Web Engineering", to: "/web" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-[#08090d]/85 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/80"
            : "bg-[#08090d]/40 backdrop-blur-md border-white/5"
        }`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group shrink-0 focus:outline-none"
        >
          <div className="relative flex items-center justify-center">
            <img
              src="/Infer_Full.png"
              alt="Inferago"
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 text-xs tracking-normal font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white bg-white/10 shadow-inner"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                }`
              }
            >
              {item.label}
              {item.tag && (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  {item.tag}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Status & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-xs text-white/50 bg-white/[0.02] border border-white/[0.06] px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono text-white/70">Engine Online</span>
          </div>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white text-black hover:bg-white/90 active:scale-95 transition-all shadow-sm"
          >
            <span>Start Building</span>
            <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/contact"
            className="text-xs px-3 py-1.5 rounded-full bg-white text-black font-medium"
          >
            Build
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <IoIosClose size={24} /> : <HiOutlineBars3 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-[#0a0c10]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-emerald-400">v2.4 Ready</span>
            </div>
            <span className="text-xs text-white/40 font-mono">inferago.com</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-white border border-white/15"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <span>{item.label}</span>
                  {item.tag && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      {item.tag}
                    </span>
                  )}
                </div>
                <FiArrowUpRight className="text-white/40" />
              </NavLink>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              to="/contact"
              className="w-full py-3 bg-white text-black rounded-xl text-sm font-medium text-center flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
            >
              <span>Build with Us</span>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
