import { useState, useEffect } from "react";
import Home from "../../assets/home.svg";
import Proj from "../../assets/projects.svg";
import Concat from "../../assets/concat.svg";
import About from "../../assets/about.svg";

const MENU_ITEMS = [
  { icon: Home,   label: "Home",     href: "#home"     },
  { icon: Proj,   label: "About",    href: "#about"    },
  { icon: Concat, label: "Projects", href: "#projects" },
  { icon: About,  label: "Contact",  href: "#contact"  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const glass = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(28px) saturate(180%)",
  WebkitBackdropFilter: "blur(28px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.13)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.05) inset",
};

const itemHoverOn = (e) => {
  e.currentTarget.style.background = "rgba(139,92,246,0.22)";
  e.currentTarget.style.color = "#c4b5fd";
  e.currentTarget.style.borderColor = "rgba(139,92,246,0.55)";
  e.currentTarget.style.boxShadow = "0 0 18px rgba(124,58,237,0.5), 0 0 6px rgba(139,92,246,0.25) inset";
};
const itemHoverOff = (e) => {
  e.currentTarget.style.background = "transparent";
  e.currentTarget.style.color = "rgba(226,232,240,0.82)";
  e.currentTarget.style.borderColor = "transparent";
  e.currentTarget.style.boxShadow = "none";
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
      setAtBottom(scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10);

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
    
      <div className="fixed bottom-0 left-0 right-0 h-24 z-30 pointer-events-none transition-opacity duration-500"
        style={{ background: "linear-gradient(to top, #19072e, transparent)", opacity: atBottom ? 0 : 1 }} />

      <div className="fixed top-0 left-0 right-0 h-24 z-30 pointer-events-none transition-opacity duration-500"
        style={{ background: "linear-gradient(to bottom, #19072e, transparent)", opacity: scrolled ? 1 : 0 }} />

      {isOpen && <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

   
      <div className="fixed z-50 top-5 right-5 md:hidden">

  
        <div style={{
          position: "absolute", top: "calc(100% + 14px)", right: 0,
          minWidth: "220px", display: "flex", flexDirection: "column",
          borderRadius: "22px", overflow: "hidden",
          ...glass,
          border: "1px solid rgba(139,92,246,0.4)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 0 32px rgba(124,58,237,0.3), 0 0 0 0.5px rgba(255,255,255,0.06) inset",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1) translate(0,0)" : "scale(0.75) translate(20px,-16px)",
          transformOrigin: "top right",
          transition: isOpen
            ? "opacity 0.25s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)"
            : "opacity 0.15s ease, transform 0.2s ease-in",
          pointerEvents: isOpen ? "auto" : "none",
        }}>
          {MENU_ITEMS.map((item, index) => {
            const isActive = active === item.href.slice(1);
            return (
              <button key={item.label}
                onClick={() => handleNav(item.href)}
                style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "16px 22px", width: "100%",
                  background: isActive ? "rgba(124,58,237,0.18)" : "transparent",
                  border: "none",
                  borderBottom: index < MENU_ITEMS.length - 1 ? "1px solid rgba(139,92,246,0.15)" : "none",
                  borderLeft: isActive ? "3px solid #a78bfa" : "3px solid transparent",
                  color: isActive ? "#c4b5fd" : "rgba(226,232,240,0.9)",
                  fontSize: "1.05rem", fontWeight: isActive ? 600 : 500,
                  cursor: "pointer", transition: "all 0.15s",
                  textAlign: "left", fontFamily: "inherit",
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(124,58,237,0.12)"; e.currentTarget.style.color = "#c4b5fd"; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(226,232,240,0.9)"; } }}
              >
                <img src={item.icon} alt="" style={{ width: 24, height: 24, opacity: isActive ? 1 : 0.85 }} />
                {item.label}
              </button>
            );
          })}
        </div>

    
        <button onClick={() => setIsOpen(v => !v)}
          style={{
            width: 54, height: 54, borderRadius: "50%",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "5px",
            ...glass,
            border: isOpen ? "1px solid rgba(139,92,246,0.7)" : "1px solid rgba(139,92,246,0.35)",
            boxShadow: isOpen
              ? "0 0 28px rgba(124,58,237,0.75), 0 0 10px rgba(139,92,246,0.4) inset, 0 8px 32px rgba(0,0,0,0.45)"
              : "0 0 14px rgba(124,58,237,0.25), 0 8px 32px rgba(0,0,0,0.45)",
            cursor: "pointer", transition: "all 0.25s ease",
          }}
          aria-label="Toggle menu"
        >
          {[
            { transform: isOpen ? "translateY(9px) rotate(45deg)" : "none" },
            { opacity: isOpen ? 0 : 1 },
            { transform: isOpen ? "translateY(-5px) rotate(-45deg)" : "none" },
          ].map((s, i) => (
            <span key={i} style={{
              width: 22, height: 2,
              background: isOpen ? "#c4b5fd" : "#e2e8f0",
              borderRadius: 2, display: "block",
              transition: "all 0.3s ease", ...s,
            }} />
          ))}
        </button>
      </div>

  
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none hidden md:block">
        <div
          className="max-w-screen-lg mx-auto px-8 lg:px-16"
          style={{ display: "flex", justifyContent: "flex-end", paddingTop: "20px" }}
        >
          <nav
            className="pointer-events-auto"
            style={{
              ...glass,
              border: "1px solid rgba(139,92,246,0.28)",
              borderRadius: "999px",
              padding: "6px 10px",
              display: "flex", alignItems: "center", gap: "2px",
              boxShadow: "0 0 28px rgba(124,58,237,0.2), 0 4px 24px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.05) inset",
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(124,58,237,0.4), 0 4px 24px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.08) inset";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 0 28px rgba(124,58,237,0.2), 0 4px 24px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.05) inset";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.28)";
            }}
          >
            {MENU_ITEMS.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <button key={item.label}
                  onClick={() => handleNav(item.href)}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "9px 18px", borderRadius: "999px",
                    background: isActive ? "rgba(124,58,237,0.25)" : "transparent",
                    border: isActive ? "1px solid rgba(139,92,246,0.5)" : "1px solid transparent",
                    color: isActive ? "#c4b5fd" : "rgba(226,232,240,0.82)",
                    boxShadow: isActive ? "0 0 14px rgba(124,58,237,0.4)" : "none",
                    fontSize: "0.92rem", fontWeight: isActive ? 600 : 500,
                    cursor: "pointer", transition: "all 0.2s ease",
                    whiteSpace: "nowrap", fontFamily: "inherit",
                  }}
                  onMouseEnter={e => { if (!isActive) itemHoverOn(e); }}
                  onMouseLeave={e => { if (!isActive) itemHoverOff(e); }}
                >
                  <img src={item.icon} alt="" style={{ width: 17, height: 17, opacity: isActive ? 1 : 0.85 }} />
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
