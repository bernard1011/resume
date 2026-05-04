import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import LinuxI from "../assets/linux.svg";
import { neonCardStyle } from "../utils/neonCard";

const skills = [
  "Linux terminal: navigation and command-line tools",
  "Bash scripting: automating simple tasks",
  "File permissions and user access management",
  "Secure remote connections via SSH",
  "Virtual machines for development and testing",
  "Networking basics: IP configuration, ports, and services",
];

const LibsAndFrameworks = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { top } = el.getBoundingClientRect();
    if (top < window.innerHeight - 40) { setShow(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", margin: 0 }}>
        Linux & Networking
      </h2>

      <div style={{ ...neonCardStyle, borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Header */}
        <motion.div
          whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 320, damping: 24 } }}
          style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "14px 16px", cursor: "default" }}
        >
          <motion.img
            src={LinuxI} alt="linux"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 48, height: 48, flexShrink: 0 }}
          />
          <div>
            <div style={{ color: "#f1f5f9", fontSize: "1rem", fontWeight: 700, marginBottom: 3 }}>Networking & Administration</div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>PortaOne course · in progress</div>
          </div>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6" style={{ gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ color: "rgba(209,213,219,0.72)", fontSize: "0.95rem", lineHeight: 1.72, margin: 0 }}>
              I'm comfortable working in Linux environments — I use the terminal daily for navigation, file management, and running scripts. I've written basic Bash scripts to automate repetitive tasks and worked with file permissions and user access management.
            </p>
            <p style={{ color: "rgba(209,213,219,0.72)", fontSize: "0.95rem", lineHeight: 1.72, margin: 0 }}>
              I regularly use virtual machines for development and testing, and have experience setting up secure remote connections via SSH. Currently deepening my networking knowledge through the PortaOne course.
            </p>
          </div>

          <div ref={ref} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 9 }}>
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.4, delay: show ? 0.05 + i * 0.07 : 0, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: 5, height: 5, borderRadius: "50%", flexShrink: 0, marginTop: 7, background: "rgba(168,139,250,0.7)", boxShadow: "0 0 6px rgba(168,139,250,0.4)" }}
                />
                <span style={{ color: "rgba(209,213,219,0.8)", fontSize: "0.9rem", lineHeight: 1.55 }}>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibsAndFrameworks;
