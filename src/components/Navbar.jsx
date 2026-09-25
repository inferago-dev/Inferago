// components/Navbar.jsx
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="inter-regular fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto backdrop-blur-lg px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center cursor-pointer shrink-0"
        >
          <img
            src="./Infer_Full.png"
            alt="Inferago Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm inter-regular">
          {[
            { label: "HOME", id: "home" },
            { label: "ABOUT", id: "about" },
            { label: "PRODUCTS", id: "products" },
            { label: "SERVICES", id: "services" },
            { label: "CONTACT", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white/50 hover:text-white transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Get Started */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 h-9 px-5 text-sm inter-medium bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 active:scale-95"
          >
            Get Started <HiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2"
        >
          {isOpen ? <IoIosClose size={28} /> : <HiOutlineBars3 size={20} />}
        </button>
      </div>

      {/* Mobile Menu — animated slide-down */}
      <div
        className={`md:hidden border-t border-white/10 backdrop-blur-lg px-6 flex flex-col gap-5 text-sm tracking-tight inter-regular overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "pt-6 pb-10 max-h-[500px] opacity-100" : "max-h-0 opacity-0 pt-0 pb-0"
          }`}
      >
        {[
          { label: "HOME", id: "home" },
          { label: "ABOUT", id: "about" },
          { label: "PRODUCTS", id: "products" },
          { label: "SERVICES", id: "services" },
          { label: "CONTACT", id: "contact" },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-left text-white/60 hover:text-white transition-colors duration-200"
          >
            {label}
          </button>
        ))}
        <div className="pt-4 border-t border-white/10">
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full py-2.5 flex items-center justify-center gap-2 bg-white text-black rounded-full text-xs tracking-tight inter-regular"
          >
            GET STARTED <HiArrowUpRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


