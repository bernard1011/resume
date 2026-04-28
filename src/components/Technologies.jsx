import { useState } from "react";
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
];

const Technologies = () => {
  const [active, setActive] = useState(null);
  const selected = active !== null ? cardInfo.find((c) => c.id === active) : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", margin: 0 }}>
        Web Knowledges
      </h2>

      {/* grid: 2 cols on mobile, 4 on desktop */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
      }}
        className="sm:grid-cols-4"
      >
        {cardInfo.map((card) => {
          const isActive = active === card.id;
          return (
            <button
              key={card.id}
              onClick={() => setActive(isActive ? null : card.id)}
              style={{
                ...neonCardStyle,
                borderRadius: "16px",
                padding: "16px 12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                border: isActive
                  ? "1px solid rgba(255,255,255,0.22)"
                  : "1px solid rgba(255,255,255,0.07)",
                background: isActive
                  ? "rgba(255,255,255,0.09)"
                  : "rgba(255,255,255,0.04)",
                transition: "all 0.2s ease",
                outline: "none",
                textAlign: "center",
                width: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              <div style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
                <img src={card.img} alt={card.name} style={{ width: 44, height: 44, objectFit: "contain" }} />
                {card.img2 && (
                  <img src={card.img2} alt="" style={{
                    width: 24, height: 24, objectFit: "contain",
                    position: "absolute", bottom: -4, right: -10, opacity: 0.7,
                  }} />
                )}
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.85rem", fontWeight: 600, marginBottom: "3px", lineHeight: 1.3 }}>
                  {card.name}
                </div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", letterSpacing: "0.03em", lineHeight: 1.3 }}>
                  {card.tag}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded description */}
      <div style={{
        overflow: "hidden",
        maxHeight: selected ? "300px" : "0px",
        opacity: selected ? 1 : 0,
        transition: "max-height 0.35s ease, opacity 0.25s ease",
      }}>
        {selected && (
          <div style={{
            ...neonCardStyle,
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
          }}>
            <img src={selected.img} alt={selected.name} style={{ width: 36, height: 36, flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>
                {selected.name}
              </div>
              <p style={{ color: "rgba(209,213,219,0.78)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                {selected.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technologies;
