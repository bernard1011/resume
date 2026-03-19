import { useState } from "react";
import Home from "../..//assets/home.svg"
import Proj from "../..//assets/projects.svg"
import Concat from "../..//assets/concat.svg"
import About from "../..//assets/about.svg"

const MENU_ITEMS = [
  { icon: Home, label: "Home" },
  { icon: Proj, label: "About" },
  { icon: Concat, label: "Projects" },
  { icon: About, label: "Contact" },
];


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed z-50 top-5 right-5">

        <div
          className="absolute top-full right-5 mt-3 flex flex-col
                     backdrop-blur-md border border-indigo-900/30 shadow-2xl
                     bg-gradient-to-br from-white/20 to-indigo-950/50
                     rounded-3xl overflow-hidden min-w-[200px]"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen
              ? "scale(1) translate(0px, 0px)"
              : "scale(0.7) translate(30px, -20px)",
            transformOrigin: "top right",
            transition: isOpen
              ? "opacity 0.28s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "opacity 0.18s ease, transform 0.22s ease-in",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          {MENU_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-5 py-4 w-full text-left
                         text-white text-2xl  whitespace-nowrap
                         hover:bg-white/15 active:bg-white/25
                          
                         transition-colors duration-100"
            >
              <img src={item.icon} className="w-8 h-8 "/>
            
              
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen((v) => !v)}>
          <div className="flex flex-col gap-2 backdrop-blur-md border border-indigo-900/30 shadow-2xl bg-gradient-to-br from-white/20 to-indigo-950/50 w-16 h-16 rounded-full items-center justify-center">
            <span
              className="w-7 h-0.5 block bg-white transition-all duration-300"
              style={{
                transform: isOpen ? "translateY(12px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="w-7 h-0.5 block bg-white transition-all duration-300"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className="w-7 h-0.5 block bg-white transition-all duration-300"
              style={{
                transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>

      </div>
    </>
  );
};

export default Menu;