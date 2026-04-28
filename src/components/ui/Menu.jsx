import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const glass = {
  background: "rgba(18, 18, 22, 0.72)",
  backdropFilter: "blur(22px) saturate(180%)",
  WebkitBackdropFilter: "blur(22px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow:
    "0 30px 80px rgba(0,0,0,0.65), 0 10px 30px rgba(0,0,0,0.4)",
};

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: -18,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 380,
      damping: 26,
      mass: 0.9,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -10,
    filter: "blur(8px)",
    transition: {
      duration: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18 },
  },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE */}
      <div className="fixed z-50 top-5 right-5 md:hidden">
        {/* MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{
                position: "absolute",
                top: "calc(100% + 14px)",
                right: 0,
                width: 270,
                borderRadius: 28,
                overflow: "hidden",
                ...glass,
              }}
            >
              {MENU_ITEMS.map((item) => {
                const isActive = active === item.href.slice(1);

                return (
                  <motion.button
                    key={item.label}
                    variants={itemVariants}
                    onClick={() => handleNav(item.href)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "16px 20px",
                      width: "100%",
                      border: "none",
                      cursor: "pointer",
                      background: isActive
                        ? "rgba(255,255,255,0.06)"
                        : "transparent",
                      color: isActive ? "#fff" : "#a1a1aa",
                    }}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ x: 4 }}
                  >
                    <img
                      src={item.icon}
                      style={{ width: 18, height: 18 }}
                    />
                    {item.label}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* BURGER */}
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileTap={{ scale: 0.92 }}
          style={{
            width: 56,
            height: 56,
            borderRadius: 999,
            ...glass,
            background: "rgba(20,20,22,0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 6,
            alignItems: "center",
          }}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            style={{
              width: 22,
              height: 1.8,
              background: "#fff",
              borderRadius: 10,
            }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{
              width: 23,
              height: 1.8,
              background: "#fff",
              borderRadius: 10,
            }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            style={{
              width: 23,
              height: 1.8,
              background: "#fff",
              borderRadius: 10,
            }}
          />
        </motion.button>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="max-w-screen-lg mx-auto px-8 py-8 flex justify-end">
          <nav
            style={{
              ...glass,
              borderRadius: 999,
              padding: 6,
              display: "flex",
              gap: 4,
            }}
          >
            {MENU_ITEMS.map((item) => {
              const isActive = active === item.href.slice(1);

              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 999,
                    background: isActive
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                    color: isActive ? "#fff" : "#a1a1aa",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
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