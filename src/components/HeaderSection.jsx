import Menu from "./ui/Menu";
import Photo from "../assets/images/photo.jpg";
import NeonButton from "./ui/NeonButton";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <>
      <Menu />

      <section className="relative flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="flex-1 mt-20 md:mt-28 flex flex-col items-center md:flex-row md:items-center md:gap-16 relative">

          {/* Ambient glow behind photo */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 pointer-events-none"
            style={{ width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(40px)", zIndex: 0 }}
          />

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex-shrink-0"
          >
            <div style={{
              width: "clamp(168px, 28vw, 224px)",
              height: "clamp(168px, 28vw, 224px)",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
              border: "1.5px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset",
              overflow: "hidden",
            }}>
              <img src={Photo} alt="Danya — Frontend Developer"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: "9999px" }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="relative z-10 text-center md:text-left flex flex-col gap-4 mt-6 md:mt-0">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 self-center md:self-start"
            >
              <span style={{
                fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase",
                padding: "5px 14px", borderRadius: "100px",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}>
                ✦ Available for work
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: 0 }}
            >
              Hello! 👋
              <span className="block mt-1" style={{
                background: "linear-gradient(100deg, #ffffff 0%, #a0a0a0 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                My name is Danya
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(209,213,219,0.75)", maxWidth: "420px", margin: 0 }}
            >
              I am a{" "}
              <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 600 }}>Frontend Developer</span>{" "}
              from Ukraine who is passionate about web technologies and continuous learning.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
              className="mt-2 md:justify-start"
            >
              <NeonButton variant="primary" size="md" href="#projects">View Projects</NeonButton>
              <NeonButton variant="secondary" size="md" href="#contact">Contact Me</NeonButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll arrows */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}
          className="w-full flex justify-center pb-10"
        >
          <svg className="arrows-animate" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L13 12L24 2" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 13L13 23L24 13" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default HeaderSection;
