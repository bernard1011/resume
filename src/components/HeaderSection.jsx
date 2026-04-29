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

          {/* Pulsing ambient glow */}
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 pointer-events-none"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 340, height: 340, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
              filter: "blur(40px)", zIndex: 0,
            }}
          />

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex-shrink-0"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: -6, borderRadius: "9999px",
                background: "conic-gradient(from 0deg, rgba(99,102,241,0.4), transparent 60%, rgba(139,92,246,0.3), transparent 90%, rgba(99,102,241,0.4))",
                filter: "blur(2px)",
              }}
            />
            <div style={{
              width: "clamp(168px, 28vw, 224px)",
              height: "clamp(168px, 28vw, 224px)",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
              border: "1.5px solid rgba(255,255,255,0.12)",
              boxShadow: "0 0 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
              overflow: "hidden",
              position: "relative",
            }}>
              <img src={Photo} alt="Danya — Frontend Developer"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </motion.div>

          {/* Text block */}
          <div className="relative z-10 text-center md:text-left flex flex-col gap-4 mt-6 md:mt-0">

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 self-center md:self-start"
            >
              <span style={{
                fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em",
                textTransform: "uppercase", padding: "5px 14px", borderRadius: "100px",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}>
                ✦ Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(209,213,219,0.75)", maxWidth: "420px", margin: 0 }}
            >
              I am a{" "}
              <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 600 }}>Frontend Developer</span>{" "}
              from Ukraine who is passionate about web technologies and continuous learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
              className="mt-2 md:justify-start"
            >
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <NeonButton variant="primary" size="md" href="#projects">View Projects</NeonButton>
              </motion.div>
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <NeonButton variant="secondary" size="md" href="#contact">Contact Me</NeonButton>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="w-full flex justify-center pb-10"
        >
          <svg className="arrows-animate" width="26" height="30" viewBox="0 0 26 30" fill="none">
            <path d="M2 2L13 12L24 2" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 13L13 23L24 13" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default HeaderSection;
