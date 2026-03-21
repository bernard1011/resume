import KnowladgeCard from "./ui/KnowladgeCard";
import Html from "../assets/html-icon.svg";
import Css from "../assets/css-icon.svg";
import JS from "../assets/js-icon.svg";
import NeonButton from "./ui/NeonButton";
import ReactI from "../assets/react.svg";
import Tail from "../assets/tailwind-icon.svg";
import { useState, useRef } from "react";

const cardInfo = [
  {
    id: 1, img: Html, img2: Css, name: "HTML & CSS",
    description: "I have an understanding of semantic HTML. Proficient in using pure CSS for element positioning and building mobile-first, responsive layouts. Able to create simple animations to enhance user experience. Committed to continuous learning and regularly exploring new best practices in CSS and modern markup techniques.",
  },
  {
    id: 2, img: JS, name: "JavaScript",
    description: "Use JavaScript to build interactive web applications, with a solid understanding of core concepts including functions, arrays, objects, closures, and asynchronous programming. Emphasize writing clean, maintainable code and enjoy solving complex problems. Recently focused on using JavaScript with React, while remaining confident in working with vanilla JavaScript when required.",
  },
  {
    id: 3, img: ReactI, name: "React",
    description: "Build modern user interfaces using React, with an understanding of component-based architecture, props, state, and React Hooks such as useState and useEffect. Focus on creating reusable components and well-structured project architecture. Consistently apply and strengthen skills through hands-on development in personal projects.",
  },
  {
    id: 4, img: Tail, name: "TailwindCSS",
    description: "Use Tailwind CSS to build modern and responsive user interfaces quickly. Understand how to compose utility classes to create layouts, spacing, typography, and responsive designs while keeping the code clean and consistent.",
  },
];

const ANIMATION_DURATION = 300;

const Technologies = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [prevCardIndex, setPrevCardIndex] = useState(null);
  const [direction, setDirection] = useState("right");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timerRef = useRef(null);

  const goTo = (next, dir) => {
    if (next === currentCard) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setDirection(dir);
    setPrevCardIndex(currentCard);
    setCurrentCard(next);
    timerRef.current = setTimeout(() => setPrevCardIndex(null), ANIMATION_DURATION);
  };

  const goPrev = () => goTo(currentCard === 0 ? cardInfo.length - 1 : currentCard - 1, "left");
  const goNext = () => goTo(currentCard === cardInfo.length - 1 ? 0 : currentCard + 1, "right");

  const onTouchStart = (e) => { setTouchStart(e.targetTouches[0].clientX); setTouchEnd(null); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const d = touchStart - touchEnd;
    if (Math.abs(d) > 50) { if (d > 0) goNext(); else goPrev(); }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-gray-50 font-bold text-3xl">Web Knowledges:</h2>

      <div
        style={{ display: "grid", padding: "4px" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {cardInfo.map((card, i) => {
          const isActive = i === currentCard;
          const isPrev = i === prevCardIndex;

          return (
            <div
              
              key={isActive ? `active-${card.id}` : card.id}
              style={{
                gridArea: "1 / 1",
                zIndex: isActive ? 1 : 0,
                visibility: isActive || isPrev ? "visible" : "hidden",
                
                opacity: isActive || isPrev ? 1 : 0,
              }}
              className={
                isActive
                  ? direction === "right" ? "slide-in-right" : "slide-in-left"
                  : isPrev
                    ? direction === "right" ? "slide-out-left" : "slide-out-right"
                    : ""
              }
            >
              <KnowladgeCard img={card.img} img2={card.img2} name={card.name} description={card.description} />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-4">
        <NeonButton variant="icon" onClick={goPrev} aria-label="Previous">‹</NeonButton>

        <div className="flex justify-center gap-2">
          {cardInfo.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentCard ? "right" : "left")}
              style={{
                width: i === currentCard ? "24px" : "10px",
                height: "10px",
                borderRadius: "5px",
                transition: "all 0.3s ease",
                background: i === currentCard ? "linear-gradient(90deg,#7c3aed,#818cf8)" : "rgba(139,92,246,0.25)",
                boxShadow: i === currentCard ? "0 0 10px rgba(124,58,237,0.7)" : "none",
                border: "none", cursor: "pointer", padding: 0,
              }}
            />
          ))}
        </div>

        <NeonButton variant="icon" onClick={goNext} aria-label="Next">›</NeonButton>
      </div>
    </div>
  );
};

export default Technologies;
