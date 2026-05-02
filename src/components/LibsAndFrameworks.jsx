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
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) { setSkillsVisible(true); return; }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSkillsVisible(true); obs.disconnect(); } }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", margin: 0 }}>
        Linux & Networking
      </h2>

      <div style={{ ...neonCardStyle, borderRadius: "20px", padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Header */}
        <motion.div
          whileHover={{ scale: 1.01, transition: { type: "spring", stiffness: 300 } }}
          style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 16px" }}
        >
          <motion.img
            src={LinuxI} alt="linux"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 48, height: 48, flexShrink: 0 }}
          />
          <div>
            <div style={{ color: "#f1f5f9", fontSize: "1rem", fontWeight: 700, marginBottom: "3px" }}>Networking & Administration</div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>PortaOne course · in progress</div>
          </div>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6" style={{ gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "rgba(209,213,219,0.72)", fontSize: "0.95rem", lineHeight: 1.72, margin: 0 }}>
              I'm comfortable working in Linux environments — I use the terminal daily for navigation, file management, and running scripts. I've written basic Bash scripts to automate repetitive tasks and worked with file permissions and user access management.
            </p>
            <p style={{ color: "rgba(209,213,219,0.72)", fontSize: "0.95rem", lineHeight: 1.72, margin: 0 }}>
              I regularly use virtual machines for development and testing, and have experience setting up secure remote connections via SSH. Currently deepening my networking knowledge through the PortaOne course.
            </p>
          </div>

          <div
            ref={skillsRef}
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "9px" }}
          >
            {skills.map((skill, i) => (
              <div
                key={i}
                className="stagger-left stagger-item"
                style={{ display: "flex", alignItems: "flex-start", gap: "10px", transitionDelay: skillsVisible ? `${i * 0.08}s` : "0s" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: 5, height: 5, borderRadius: "50%", flexShrink: 0, marginTop: "7px", background: "rgba(168,139,250,0.65)", boxShadow: "0 0 5px rgba(168,139,250,0.35)" }}
                />
                <span style={{ color: "rgba(209,213,219,0.8)", fontSize: "0.9rem", lineHeight: 1.55 }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibsAndFrameworks;
