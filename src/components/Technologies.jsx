import KnowladgeCard from "./ui/KnowladgeCard";
import Html from "../assets/html-icon.svg";
import Css from "../assets/css-icon.svg";
import JS from "../assets/js-icon.svg";
import ReactI from "../assets/react.svg";
import Tail from "../assets/tailwind-icon.svg";
import Linux from "../assets/linux.svg"
import { useState } from "react";

const cardInfo = [
  {
    id: 1,
    img: Html,
    name: "HTML",
    description:
      "I have a solid understanding of HTML and use it to build clear and well-structured web pages. I know how to create semantic layouts using elements like headers, sections, articles, and forms. I follow good practices to keep the markup clean, readable, and accessible.",
  },
  {
    id: 2,
    img: Css,
    name: "CSS",
    description:
      "I use CSS to style web pages and create responsive layouts. I understand Flexbox and Grid, and I know how to organize styles so that the code stays clean and maintainable. I also work with modern approaches to layout and responsiveness.",
  },
  {
    id: 3,
    img: JS,
    name: "JavaScript",
    description:
      "I use JavaScript to add interactivity to web applications. I understand core concepts such as functions, arrays, objects, closures, and asynchronous code. I focus on writing readable and maintainable code and enjoy solving logical problems.",
  },
  {
    id:4,
    img: Linux,
    name: "Linux",
    description: "I have basic knowledge of Bash scripting, user management, file permissions, and SSH. Currently, I am studying in the PortaOne Linux Networking and Administration program to deepen my knowledge and gain practical experience."
  }
];



const Technologies = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [direction, setDirection] = useState("right");
  const prevCard = () => {
    setDirection("left");
    setCurrentCard((curr) => (curr === 0 ? cardInfo.length - 1 : curr - 1));
  };
  const nextCard = () => {
      setDirection("right");
    setCurrentCard((curr) => (curr === cardInfo.length - 1 ? 0 : curr + 1));
  };

  const item = cardInfo[currentCard];

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;
  const isSwipe = Math.abs(distance) > 50;

  if (isSwipe) {
    if (distance > 0) {
      setDirection("right");
      nextCard();
    } else {
      setDirection("left");
      prevCard();
    }
  }
};

  return (
    <>
      <div className="flex flex-col gap-5 overflow-hidden">
        <h2 className="text-gray-50 font-bold text-3xl">
          Technologies What I Can Use:
        </h2>
        <div
        key={currentCard}
  className={direction === "right" ? "slide-in-right" : "slide-in-left"}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <KnowladgeCard
            img={item.img}
            name={item.name}
            description={item.description}
            width={`h-[365px]`}
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={prevCard}
            className="text-gray-50 backdrop-blur-md border border-indigo-900/30 shadow-2xl bg-gradient-to-br from-white/20 to-indigo-950/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
          >
            ‹
          </button>

          <div className="flex justify-center w-f gap-2">
            {cardInfo.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentCard(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === currentCard
                    ? "bg-indigo-400 scale-125"
                    : "bg-indigo-900/60"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextCard}
            className="text-gray-50 backdrop-blur-md border border-indigo-900/30 shadow-2xl bg-gradient-to-br from-white/20 to-indigo-950/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
          >
            ›
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-3">
        <h2 className="text-gray-50 font-bold text-3xl">Libreies:</h2>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-7 ">
            <img src={ReactI} alt="react" className="w-24" />
            <h3 className="text-gray-50 text-2xl font-bold">React</h3>
          </div>
          <div className="text-gray-50 text-lg">
            <p>
              I build modern user interfaces using React. I understand
              component-based architecture, props, state, and React hooks such
              as useState and useEffect. I enjoy structuring applications into
              reusable components and organizing project structure.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <h2 className="text-gray-50 font-bold text-3xl">Frameworks:</h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-7 ">
              <img src={Tail} alt="tailwind" className="w-24" />
              <h3 className="text-gray-50 text-2xl font-bold">Tailwindcss</h3>
            </div>
            <div className="text-gray-50 text-lg">
              <p>
                I use Tailwind CSS to build modern and responsive user
                interfaces quickly. I understand how to compose utility classes
                to create layouts, spacing, typography, and responsive designs
                while keeping the code clean and consistent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
