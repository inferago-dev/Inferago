// components/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";

const navItems = [
  { label: "AI", to: "/ai" },
  { label: "WEB", to: "/web" },
  { label: "WORK", to: "/work" },
  { label: "ABOUT", to: "/about" },
];

const linkClass = ({ isActive }) =>
  `border border-transparent py-1.5 transition-all active:scale-95 hover:border-b-white ${
    isActive ? "border-b-white text-white" : "text-white/80"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="inter-regular fixed top-0 left-0 right-0 z-50 ">
      <div className="mx-auto backdrop-blur-lg px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center cursor-pointer shrink-0"
        >
          <img
            src="./Infer_Full.png"
            alt="Inferago Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-xs">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => alert("Login coming soon")}
            className="px-2 py-3 text-sm text-white"
          >
            Login
          </button>
          <Link
            to="/contact"
            className="px-3 py-1.5 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
          >
            Build with us
          </Link>
        </div>

        {/* Mobile Hamburger & Close Button - Same Position */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-4"
        >
          {isOpen ? (
            <IoIosClose size={30} />
          ) : (
            <HiOutlineBars3 size={20} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t backdrop-blur-lg border-white/10 px-6 py-8 flex flex-col gap-6 text-sm h-screen pt-15">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "text-white" : "text-white/80")}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => alert("Login coming soon")}
              className="w-full py-2 text-white"
            >
              Login
            </button>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 bg-white text-black rounded-full text-center"
            >
              Build with us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
