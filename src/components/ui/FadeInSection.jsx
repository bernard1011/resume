import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Single source of truth for scroll reveal — pure framer, no CSS classes
const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible on mount? Show immediately without animation delay
    const { top } = el.getBoundingClientRect();
    if (top < window.innerHeight - 40) {
      setShow(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShow(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay: show ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
