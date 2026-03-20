import KnowladgeCard from "./ui/KnowladgeCard";
import Html from "../assets/html-icon.svg";
import Css from "../assets/css-icon.svg";
import JS from "../assets/js-icon.svg";
import Linux from "../assets/linux.svg";
import NeonButton from "./ui/NeonButton";
import { useState } from "react";

const cardInfo = [
  {
    id: 1, img: Html, name: "HTML",
    description: "I have a solid understanding of HTML and use it to build clear and well-structured web pages. I know how to create semantic layouts using elements like headers, sections, articles, and forms. I follow good practices to keep the markup clean, readable, and accessible.",
  },
  {
    id: 2, img: Css, name: "CSS",
    description: "I use CSS to style web pages and create responsive layouts. I understand Flexbox and Grid, and I know how to organize styles so that the code stays clean and maintainable. I also work with modern approaches to layout and responsiveness.",
  },
  {
    id: 3, img: JS, name: "JavaScript",
    description: "I use JavaScript to add interactivity to web applications. I understand core concepts such as functions, arrays, objects, closures, and asynchronous code. I focus on writing readable and maintainable code and enjoy solving logical problems.",
  },
  {
    id: 4, img: Linux, name: "Linux",
    description: "I have basic knowledge of Bash scripting, user management, file permissions, and SSH. Currently, I am studying in the PortaOne Linux Networking and Administration program to deepen my knowledge and gain practical experience.",
  },
];

const Technologies = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [direction, setDirection] = useState("right");

  const prevCard = () => { setDirection("left"); setCurrentCard((c) => (c === 0 ? cardInfo.length - 1 : c - 1)); };
  const nextCard = () => { setDirection("right"); setCurrentCard((c) => (c === cardInfo.length - 1 ? 0 : c + 1)); };
  const onTouchStart = (e) => { setTouchStart(e.targetTouches[0].clientX); setTouchEnd(null); };
  const onTouchMove = (e) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const d = touchStart - touchEnd;
    if (Math.abs(d) > 50) { if (d > 0) nextCard(); else prevCard(); }
  };

  const item = cardInfo[currentCard];

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-gray-50 font-bold text-3xl">Technologies What I Can Use:</h2>

      
      <div
        key={currentCard}
        className={direction === "right" ? "slide-in-right" : "slide-in-left"}
        style={{ padding: "4px" }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <KnowladgeCard img={item.img} name={item.name} description={item.description} />
      </div>

      <div className="flex items-center justify-between mt-4">
        <NeonButton variant="icon" onClick={prevCard} aria-label="Previous">‹</NeonButton>

        <div className="flex justify-center gap-2">
          {cardInfo.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentCard(i)}
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

        <NeonButton variant="icon" onClick={nextCard} aria-label="Next">›</NeonButton>
      </div>
    </div>
  );
};

export default Technologies;
