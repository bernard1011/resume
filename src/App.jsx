import { motion, useScroll, useTransform } from "framer-motion";
import HeaderSection from "./components/HeaderSection";
import Technologies from "./components/Technologies";
import LibsAndFrameworks from "./components/LibsAndFrameworks";
import AiUsage from "./components/AiUsage";
import MyProj from "./components/MyProj";
import Contact from "./components/Contact";
import FadeInSection from "./components/ui/FadeInSection";

function App() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="-z-10 pointer-events-none"
        style={{ y: bgY, top: "-20%", bottom: "-20%", left: 0, right: 0, position: "fixed" }}
      >
        <div className="absolute inset-0" style={{
          background: [
            "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(99,102,241,0.12) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 60% at 85% 75%, rgba(139,92,246,0.10) 0%, transparent 60%)",
          ].join(", ")
        }} />
      </motion.div>

      <div className="relative flex flex-col gap-24 max-w-screen-lg mx-auto px-6 sm:px-10 md:px-8 lg:px-16">
        <section id="home"><HeaderSection /></section>

        <section id="about" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          <FadeInSection><Technologies /></FadeInSection>
          <FadeInSection><LibsAndFrameworks /></FadeInSection>
          <FadeInSection><AiUsage /></FadeInSection>
        </section>

        <section id="projects">
          <FadeInSection><MyProj /></FadeInSection>
        </section>

        <section id="contact">
          <FadeInSection><Contact /></FadeInSection>
        </section>
      </div>
    </div>
  );
}

export default App;
