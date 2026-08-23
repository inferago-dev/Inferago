// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { label: "Services", to: "/web" },
  { label: "Work", to: "/work" },
  { label: "AI (MVP)", to: "/ai", isMvp: true },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
          scrolled
            ? "bg-[#08090d]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/80"
            : "bg-[#08090d]/50 backdrop-blur-md border-white/5"
        }`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0 focus:outline-none"
        >
          <img
            src="/Infer_Full.png"
            alt="Inferago"
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white bg-white/10 shadow-inner"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                }`
              }
            >
              {item.label}
              {item.isMvp && (
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  MVP
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full bg-white text-black hover:bg-white/90 active:scale-95 transition-all shadow-sm"
          >
            <span>Start a Project</span>
            <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
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
        <div className="md:hidden mt-2 mx-auto max-w-6xl rounded-2xl bg-[#0a0c10]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
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
                  {item.isMvp && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      MVP
                    </span>
                  )}
                </div>
                <FiArrowUpRight className="text-white/40" />
              </NavLink>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10">
            <Link
              to="/contact"
              className="w-full py-3 bg-white text-black rounded-xl text-sm font-medium text-center flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
            >
              <span>Start a Project</span>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
