import Menu from "./ui/Menu"
import Photo from "../assets/images/photo.jpg"
import ArrowDown from "../assets/arrow-down.svg?react"
import NeonButton from "./ui/NeonButton"
import { motion } from "framer-motion"

const HeaderSection = () => {
  return (
    <>
      <Menu />

      <section className="relative mt-16 md:mt-24 flex flex-col items-center md:flex-row md:items-center md:gap-16 min-h-[60vh] md:min-h-[70vh]">


        <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-72 h-72 md:w-80 md:h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)",
            filter: "blur(30px)",
            zIndex: 0,
          }}
        />

      
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex-shrink-0"
        >
          <div
            className="relative rounded-full overflow-hidden"
            style={{
              width: "clamp(180px, 30vw, 240px)",
              height: "clamp(180px, 30vw, 240px)",
              border: "3px solid transparent",
              background: "linear-gradient(#19072e, #19072e) padding-box, conic-gradient(from 180deg, #7c3aed, #4f46e5, #a855f7, #7c3aed) border-box",
              borderRadius: "9999px",
              boxShadow: "0 0 30px rgba(124,58,237,0.4)",
            }}
          >
            <img
              src={Photo}
              alt="Danya — Frontend Developer"
              className="w-full h-full object-cover"
              style={{ borderRadius: "9999px" }}
            />
          </div>
        </motion.div>


        <div className="relative z-10 text-center md:text-left flex flex-col gap-4 mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 self-center md:self-start"
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: "rgba(124, 58, 237, 0.18)",
                border: "1px solid rgba(139,92,246,0.35)",
                color: "#c4b5fd",
                letterSpacing: "0.15em",
              }}
            >
              ✦ Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-bold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Hello! 👋
            <span
              className="block mt-1"
              style={{
                background: "linear-gradient(90deg, #fff 0%, #c4b5fd 60%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              My name is Danya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed max-w-md"
            style={{ color: "rgba(209,213,219,0.85)" }}
          >
            I am a <span style={{ color: "#c4b5fd", fontWeight: 600 }}>Frontend Developer</span> from Ukraine
            who is passionate about web technologies and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex gap-3 mt-2 justify-center md:justify-start flex-wrap"
          >
            <NeonButton variant="primary" size="md" href="#projects">
              View Projects
            </NeonButton>
            <NeonButton variant="secondary" size="md" href="#contact">
              Contact Me
            </NeonButton>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="w-full flex justify-center pt-8 md:pt-12"
      >
        <ArrowDown className="arrows-animate h-7 overflow-visible" style={{ color: "#a78bfa", filter: "drop-shadow(0 0 6px rgba(139,92,246,0.8))" }} />
      </motion.div>
    </>
  )
}

export default HeaderSection
