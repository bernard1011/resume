import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { neonCardStyle } from "../utils/neonCard";
import Html from "../assets/html-icon.svg";
import Css from "../assets/css-icon.svg";
import JS from "../assets/js-icon.svg";
import ReactI from "../assets/react.svg";
import Tail from "../assets/tailwind-icon.svg";
import RN from "../assets/react-native.svg";
import TS from "../assets/typescript.svg";

const cardInfo = [
  {
    id: 1,
    img: Html,
    img2: Css,
    name: "HTML & CSS",
    tag: "Markup & Styling",
    description:
      "I have an understanding of semantic HTML. Proficient in using pure CSS for element positioning and building mobile-first, responsive layouts. Able to create simple animations to enhance user experience. Committed to continuous learning and regularly exploring new best practices in CSS and modern markup techniques.",
  },
  {
    id: 2,
    img: JS,
    name: "JavaScript",
    tag: "Core Language",
    description:
      "Use JavaScript to build interactive web applications, with a solid understanding of core concepts including functions, arrays, objects, closures, and asynchronous programming. Emphasize writing clean, maintainable code and enjoy solving complex problems. Recently focused on using JavaScript with React, while remaining confident in working with vanilla JavaScript when required.",
  },
  {
    id: 3,
    img: ReactI,
    name: "React",
    tag: "UI Framework",
    description:
      "Build modern user interfaces using React, with an understanding of component-based architecture, props, state, and React Hooks such as useState and useEffect. Focus on creating reusable components and well-structured project architecture. Consistently apply and strengthen skills through hands-on development in personal projects.",
  },
  {
    id: 4,
    img: Tail,
    name: "Tailwind",
    tag: "CSS Framework",
    description:
      "Use Tailwind CSS to build modern and responsive user interfaces quickly. Understand how to compose utility classes to create layouts, spacing, typography, and responsive designs while keeping the code clean and consistent.",
  },
  {
    id: 5,
    img: RN,
    name: "React Native",
    tag: "Mobile",
    description:
      "Build cross-platform mobile applications using React Native with Expo. Familiar with Expo Router for navigation, AsyncStorage for local persistence, and native UI components. Apply the same component-based mindset from React to create smooth mobile experiences for iOS and Android.",
  },
  {
    id: 6,
    img: TS,
    name: "TypeScript",
    tag: "Type Safety",
    description:
      "Use TypeScript to write safer and more maintainable code. Comfortable with type annotations, interfaces, and generics. Appreciate how TypeScript catches errors early and improves developer experience, especially in larger projects and when working with APIs.",
  },
];

const Technologies = () => {
  const [active, setActive] = useState(null);
  const selected = active !== null ? cardInfo.find((c) => c.id === active) : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.85rem", letterSpacing: "-0.02em", margin: 0 }}>
          Web Technologies
        </h2>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", marginTop: "4px", margin: "4px 0 0" }}>
          My core stack and development tools
        </p>
      </div>

      {/* grid: 2 cols mobile → 3 cols sm → 6 cols md */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {cardInfo.map((card) => {
          const isActive = active === card.id;
          return (
            <motion.button
              key={card.id}
              onClick={() => setActive(isActive ? null : card.id)}
              whileTap={{ scale: 0.95 }}
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
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ position: "relative", width: 44, height: 44 }}>
                <img src={card.img} alt={card.name} style={{ width: 44, height: 44 }} />
                {card.img2 && (
                  <img src={card.img2} alt="" style={{
                    width: 22, height: 22, position: "absolute", bottom: -4, right: -10,
                    background: "#121216", borderRadius: "4px", padding: "2px",
                  }} />
                )}
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontSize: "0.82rem", fontWeight: 600, lineHeight: 1.3 }}>
                  {card.name}
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2px" }}>
                  {card.tag}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Description panel */}
      <div style={{ minHeight: "110px", position: "relative" }}>
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                borderRadius: "20px",
                padding: "22px 24px",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                background: "#1a1a1e",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <img
                src={selected.img}
                alt=""
                className="hidden sm:block"
                style={{ width: 38, height: 38, flexShrink: 0, marginTop: 2 }}
              />
              <div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 8px" }}>
                  {selected.name}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>
                  {selected.description}
                </p>
              </div>
            </motion.div>
          ) : (
            <div style={{
              textAlign: "center", padding: "28px",
              color: "rgba(255,255,255,0.15)",
              border: "1px dashed rgba(255,255,255,0.08)",
              borderRadius: "20px",
              fontSize: "0.9rem",
            }}>
              Select a technology to see details
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Technologies;
