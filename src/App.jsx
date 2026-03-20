import HeaderSection from "./components/HeaderSection";
import Technologies from "./components/Technologies";
import LibsAndFrameworks from "./components/LibsAndFrameworks";
import MyProj from "./components/MyProj";
import Contact from "./components/Contact";
import FadeInSection from "./components/ui/FadeInSection";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="relative overflow-hidden">
      {/* Паралакс фон */}
      <motion.div
        className="-z-10 pointer-events-none"
        style={{ y: bgY, top: "-20%", bottom: "-20%", left: 0, right: 0, position: "fixed" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, #3b0764 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #1e1b4b 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Контент — px-6 на мобільному, більше на десктопі */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col gap-12 max-w-screen-lg mx-auto px-6 sm:px-10 md:px-8 lg:px-16"
      >
        <FadeInSection>
          <HeaderSection />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start flex flex-col gap-12">
            <Technologies />
            <LibsAndFrameworks />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <MyProj />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <Contact />
        </FadeInSection>
      </motion.div>
    </div>
  );
}

export default App;
