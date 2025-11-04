// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [scrollDir, setScrollDir] = useState("up");   // default = up
  const [didScroll, setDidScroll] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (Math.abs(y - lastY) < 3) return; // ignore tiny jitter

      if (y > lastY) {
        setScrollDir("down");
      } else if (y < lastY) {
        setScrollDir("up");
      }

      setDidScroll(true);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Text */}
      <motion.div
        ref={ref}
        className="hero__content"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Find. Connect. Convert.<br />
          <span className="accent">Smarter, Faster, Easier.</span>
        </h1>

        <p className="lead">
          NexLeads helps you discover potential clients on social media,
          extract their contact details, and send personalized outreach —
          all in one platform
        </p>

        <div className="hero__cta">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </motion.div>

      {/* Image */}
      <div className="hero__art">
        <motion.img
          src="/hero_img.png"
          alt="Lead magnet illustration"
          // up = 0deg (normal), down = -90deg (rotate left)
          animate={{ rotate: scrollDir === "down" ? -90 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`magnet ${didScroll ? "" : "magnet-onload"} w-[300px] mx-auto`}
        />
      </div>
    </section>
  );
}
