import { useState, useEffect } from "react";
import Home from "../../assets/home.svg";
import Proj from "../../assets/projects.svg";
import Concat from "../../assets/concat.svg";
import About from "../../assets/about.svg";

const MENU_ITEMS = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Proj, label: "About", href: "#about" },
  { icon: Concat, label: "Projects", href: "#projects" },
  { icon: About, label: "Contact", href: "#contact" },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// 🔥 Оптимізоване “скло”
const glass = {
  background: "rgba(13, 13, 15, 0.82)",
  backdropFilter: "blur(12px) saturate(140%)",
  WebkitBackdropFilter: "blur(12px) saturate(140%)",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  boxShadow: `
    0 10px 40px -10px rgba(0, 0, 0, 0.7), 
    0 20px 50px -15px rgba(0, 0, 0, 0.5),
    0 0 0 0.5px rgba(255, 255, 255, 0.05) inset
  `,
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
      setAtBottom(
        scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 20
      );

      const sections = ["home", "about", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    scrollTo(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Нижня тінь */}
      <div
        className="fixed bottom-0 left-0 right-0 h-48 z-30 pointer-events-none transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
          opacity: atBottom ? 0 : 1,
        }}
      />

      {/* Верхня тінь */}
      <div
        className="fixed top-0 left-0 right-0 h-48 z-30 pointer-events-none transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.4) 40%, transparent 100%)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 📱 MOBILE MENU */}
      <div className="fixed z-50 top-5 right-5 md:hidden">
        {/* Dropdown */}
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 14px)",
            right: 0,
            minWidth: "260px",
            borderRadius: "24px",
            overflow: "hidden",
            ...glass,

            // 🔥 smooth animation
            opacity: isOpen ? 1 : 0,
            transform: isOpen
              ? "translateY(0) scale(1)"
              : "translateY(-8px) scale(0.98)",

            transition:
              "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease",

            willChange: "transform, opacity",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          {MENU_ITEMS.map((item, index) => {
            const isActive = active === item.href.slice(1);

            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "18px 24px",
                  width: "100%",
                  background: isActive
                    ? "rgba(255,255,255,0.04)"
                    : "transparent",
                  border: "none",
                  color: isActive ? "#ffffff" : "#94a3b8",
                  fontSize: "1.05rem",
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",

                  // 🔥 stagger animation
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen
                    ? "translateY(0)"
                    : "translateY(-6px)",

                  transition:
                    "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease",
                  transitionDelay: isOpen
                    ? `${index * 60}ms`
                    : "0ms",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: isActive ? "#fff" : "transparent",
                    boxShadow: isActive ? "0 0 10px #fff" : "none",
                    transition: "all 0.3s",
                  }}
                />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Burger button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            ...glass,
            background: "rgba(20, 20, 22, 0.9)",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: 23,
              height: 1.5,
              background: "#fff",
              transition: "0.3s",
              transform: isOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              width: 23,
              height: 1.5,
              background: "#fff",
              transition: "0.3s",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 23,
              height: 1.5,
              background: "#fff",
              transition: "0.3s",
              transform: isOpen
                ? "rotate(-45deg) translate(5px, -6px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* 💻 DESKTOP MENU */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none hidden md:block">
        <div className="max-w-screen-lg mx-auto px-8 py-8 flex justify-end">
          <nav
            className="pointer-events-auto"
            style={{
              ...glass,
              borderRadius: "100px",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {MENU_ITEMS.map((item) => {
              const isActive = active === item.href.slice(1);

              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "100px",
                    background: isActive
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                    border: "1px solid",
                    borderColor: isActive
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",
                    color: isActive ? "#ffffff" : "#a1a1aa",
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 600 : 500,
                    cursor: "pointer",
                    transition:
                      "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    style={{
                      width: 16,
                      height: 16,
                      opacity: isActive ? 1 : 0.5,
                    }}
                  />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;