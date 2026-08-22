// pages/HomePage.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Platform from "../components/Platform";
import About from "../components/About";
import Contact from "../components/Contact";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    const timer = setTimeout(scroll, 80);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Hero />
      <Products />
      <Platform />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
