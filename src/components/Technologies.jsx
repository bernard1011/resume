import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { neonCardStyle } from "../utils/neonCard";
import Html from "../assets/html-icon.svg";
import Css from "../assets/css-icon.svg";
import JS from "../assets/js-icon.svg";
import ReactI from "../assets/react.svg";
import Tail from "../assets/tailwind-icon.svg";

const cardInfo = [
  {
    id: 1,
    img: Html,
    img2: Css,
    name: "HTML & CSS",
    tag: "Markup & Styling",
    description:
      "I have a deep understanding of semantic HTML and modern CSS. Proficient in element positioning, Flexbox, and Grid to build mobile-first, responsive layouts. I focus on writing clean, maintainable code and creating smooth user experiences through subtle animations.",
  },
  {
    id: 2,
    img: JS,
    name: "JavaScript",
    tag: "Core Language",
    description:
      "I build dynamic web applications using JavaScript, with a solid grasp of core concepts like ES6+ syntax, asynchronous programming (Promises/async-await), and DOM manipulation. I enjoy solving logical problems and constantly improving code efficiency.",
  },
  {
    id: 3,
    img: ReactI,
    name: "React",
    tag: "UI Framework",
    description:
      "I develop modern interfaces using React, focusing on component-based architecture and reusable logic. Experienced with functional components and Hooks (useState, useEffect, useMemo). I strive to build scalable applications with high performance.",
  },
  {
    id: 4,
    img: Tail,
    name: "Tailwind",
    tag: "CSS Framework",
    description:
      "I use Tailwind CSS to accelerate the development process while maintaining a unique design system. Expert in utility-first workflows, responsive modifiers, and customizing themes to create pixel-perfect, consistent UI components.",
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
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", marginTop: "4px" }}>
          My core stack and development tools
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cardInfo.map((card) => {
          const isActive = active === card.id;
          return (
            <motion.button
              key={card.id}
              onClick={() => setActive(isActive ? null : card.id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              style={{
                ...neonCardStyle,
                borderRadius: "20px",
                padding: "24px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                border: "1px solid",
                borderColor: isActive ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
                background: isActive ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
                transition: "all 0.3s ease",
                outline: "none",
                width: "100%",
              }}
            >
              <div style={{ position: "relative", width: 48, height: 48 }}>
                <img src={card.img} alt={card.name} style={{ width: 48, height: 48, objectFit: "contain" }} />
                {card.img2 && (
                  <img src={card.img2} alt="" style={{
                    width: 24, height: 24, objectFit: "contain",
                    position: "absolute", bottom: -4, right: -10,
                    background: "#121216", borderRadius: "4px", padding: "2px"
                  }} />
                )}
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600, marginBottom: "2px" }}>
                  {card.name}
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {card.tag}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div style={{ minHeight: "140px" }}>
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                ...neonCardStyle,
                borderRadius: "24px",
                padding: "28px",
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="hidden sm:flex" style={{ 
                background: "rgba(255,255,255,0.05)", 
                padding: "12px", 
                borderRadius: "16px",
                flexShrink: 0 
              }}>
                <img src={selected.img} alt="" style={{ width: 40, height: 40 }} />
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.25rem", margin: 0 }}>
                    {selected.name}
                  </h3>
                  <span style={{ 
                    padding: "2px 8px", 
                    borderRadius: "6px", 
                    background: "rgba(255,255,255,0.1)", 
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase"
                  }}>
                    {selected.tag}
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
                  {selected.description}
                </p>
              </div>
            </motion.div>
          ) : (
            <div style={{ 
              textAlign: "center", 
              padding: "40px", 
              color: "rgba(255,255,255,0.2)",
              border: "1px dashed rgba(255,255,255,0.1)",
              borderRadius: "24px",
              fontSize: "0.95rem"
            }}>
              Click on a technology to learn more
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Technologies;