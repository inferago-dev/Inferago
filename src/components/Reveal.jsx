// components/Reveal.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered blur + slide-in wrapper.
 * direction: "up" | "down" | "left" | "right" | "none"
 */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.15,
  style,
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      data-dir={direction}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Reveal;
