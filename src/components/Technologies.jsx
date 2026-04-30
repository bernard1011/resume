import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { neonCardStyle } from "../utils/neonCard";
import useScrollReveal from "../utils/useScrollReveal";
import Html from "../assets/html-icon.svg";
import Css from "../assets/css-icon.svg";
import JS from "../assets/js-icon.svg";
import ReactI from "../assets/react.svg";
import Tail from "../assets/tailwind-icon.svg";
import RN from "../assets/react-native.svg";
import TS from "../assets/typescript.svg";

const cardInfo = [
  { id: 1, img: Html, img2: Css, name: "HTML & CSS", tag: "Markup & Styling", description: "I have an understanding of semantic HTML. Proficient in using pure CSS for element positioning and building mobile-first, responsive layouts. Able to create simple animations to enhance user experience. Committed to continuous learning and regularly exploring new best practices in CSS and modern markup techniques." },
  { id: 2, img: JS, name: "JavaScript", tag: "Core Language", description: "Use JavaScript to build interactive web applications, with a solid understanding of core concepts including functions, arrays, objects, closures, and asynchronous programming. Emphasize writing clean, maintainable code and enjoy solving complex problems. Recently focused on using JavaScript with React, while remaining confident in working with vanilla JavaScript when required." },
  { id: 3, img: ReactI, name: "React", tag: "UI Framework", description: "Build modern user interfaces using React, with an understanding of component-based architecture, props, state, and React Hooks such as useState and useEffect. Focus on creating reusable components and well-structured project architecture. Consistently apply and strengthen skills through hands-on development in personal projects." },
  { id: 4, img: Tail, name: "Tailwind", tag: "CSS Framework", description: "Use Tailwind CSS to build modern and responsive user interfaces quickly. Understand how to compose utility classes to create layouts, spacing, typography, and responsive designs while keeping the code clean and consistent." },
  { id: 5, img: RN, name: "React Native", tag: "Mobile", description: "Build cross-platform mobile applications using React Native with Expo. Familiar with Expo Router for navigation, AsyncStorage for local persistence, and native UI components. Apply the same component-based mindset from React to create smooth mobile experiences for iOS and Android." },
  { id: 6, img: TS, name: "TypeScript", tag: "Type Safety", description: "Use TypeScript to write safer and more maintainable code. Comfortable with type annotations, interfaces, and generics. Appreciate how TypeScript catches errors early and improves developer experience, especially in larger projects and when working with APIs." },
];

const Technologies = () => {
  const [active, setActive] = useState(null);
  const [headRef, headVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const selected = active !== null ? cardInfo.find((c) => c.id === active) : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <motion.div
        ref={headRef}
        animate={headVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.85rem", letterSpacing: "-0.02em", margin: 0 }}>
          Web Technologies
        </h2>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", margin: "4px 0 0" }}>
          My core stack and development tools
        </p>
      </motion.div>

      <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {cardInfo.map((card, i) => {
          const isActive = active === card.id;
          return (
            <motion.button
              key={card.id}
              animate={gridVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.95 }}
              transition={{
                duration: 0.45,
                delay: gridVisible ? i * 0.07 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setActive(isActive ? null : card.id)}
              whileTap={{ scale: 0.94 }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
              style={{
                ...neonCardStyle,
                borderRadius: "20px",
                padding: "20px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                border: "1px solid",
                borderColor: isActive ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.08)",
                background: isActive ? "rgba(255,255,255,0.11)" : "rgba(255,255,255,0.04)",
                outline: "none",
                width: "100%",
                touchAction: "manipulation",
                boxShadow: isActive
                  ? "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)"
                  : neonCardStyle.boxShadow,
              }}
            >
              <motion.div
                style={{ position: "relative", width: 44, height: 44 }}
                whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
              >
                <img src={card.img} alt={card.name} style={{ width: 44, height: 44 }} />
                {card.img2 && (
                  <img src={card.img2} alt="" style={{
                    width: 22, height: 22, position: "absolute", bottom: -4, right: -10,
                    background: "#121216", borderRadius: "4px", padding: "2px",
                  }} />
                )}
              </motion.div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontSize: "0.82rem", fontWeight: 600, lineHeight: 1.3 }}>{card.name}</div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2px" }}>{card.tag}</div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div style={{ minHeight: "110px" }}>
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              style={{
                borderRadius: "20px", padding: "22px 24px",
                display: "flex", gap: "18px", alignItems: "flex-start",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
              }}
            >
              <motion.img
                src={selected.img} alt=""
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.05 }}
                className="hidden sm:block"
                style={{ width: 38, height: 38, flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 8px" }}>{selected.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>{selected.description}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: "center", padding: "28px", color: "rgba(255,255,255,0.15)", border: "1px dashed rgba(255,255,255,0.08)", borderRadius: "20px", fontSize: "0.9rem" }}
            >
              Select a technology to see details
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Technologies;
