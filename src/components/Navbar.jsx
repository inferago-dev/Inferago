// components/Navbar.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="inter-regular fixed top-0 left-0 right-0 z-50 ">
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
        <div className="hidden md:flex items-center gap-10 text-xs">
          <button
            onClick={() => scrollToSection("home")}
            className="border border-transparent hover:border-b-white py-1.5 transition-all active:scale-95"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="border border-transparent hover:border-b-white py-1.5 transition-all active:scale-95"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="border border-transparent hover:border-b-white py-1.5 transition-all active:scale-95"
          >
            PRODUCTS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-transparent hover:border-b-white py-1.5 transition-all active:scale-95"
          >
            CONTACT
          </button>
          <button
            onClick={() => scrollToSection("platform")}
            className="border border-transparent hover:border-b-white py-1.5 transition-all active:scale-95"
          >
            DOCS
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => alert("Login coming soon")}
            className="px-2 py-3 text-sm text-white"
          >
            Login
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-3 py-1.5 text-sm bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger & Close Button - Same Position */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-4"  // Only this line changed
        >
          {isOpen ? (
            <IoIosClose size={30} />
          ) : (
            <HiOutlineBars3 size={20} />
          )}
        </button>
      </div>

      {/* Mobile Menu - No changes */}
      {isOpen && (
        <div className="md:hidden border-t backdrop-blur-lg border-white/10 px-6 py-8 flex flex-col gap-6 text-sm h-screen pt-15">
          <button onClick={() => scrollToSection("home")}>
            HOME
          </button>
          <button onClick={() => scrollToSection("about")}>
            ABOUT
          </button>
          <button onClick={() => scrollToSection("products")}>
            PRODUCTS
          </button>
          <button onClick={() => scrollToSection("contact")}>
            CONTACT
          </button>
          <button onClick={() => scrollToSection("platform")} className="text-center">
            DOCS
          </button>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => alert("Login coming soon")}
              className="w-full py-2 text-white"
            >
              Login
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-2 bg-white text-black rounded-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;