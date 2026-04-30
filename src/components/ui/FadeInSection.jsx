import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (shouldReduce) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{
        duration: 0.6,
        delay: isVisible ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
