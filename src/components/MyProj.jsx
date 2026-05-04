import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjSec from "../assets/projsec.svg";
import RobH from "../assets/robot.svg";
import SecP from "../assets/htmlcss.svg";
import TimeT from "../assets/time-tracker.svg";
import TodoA from "../assets/todo-app.svg";
import KnowladgeCard from "./ui/KnowladgeCard";

const myproj = [
  { id: 1, img: TimeT, name: "Time Tracker", tag: "Next.js · AI (v0) · Prisma · SQLite", description: "A full-stack time tracking application built with Next.js and developed using AI (v0). Features project management, time entry logging, reporting with CSV export, and a clean dashboard. Uses Prisma with LibSQL/SQLite for data persistence and SWR for real-time updates.", url: "https://time-tracker-i54c.vercel.app/" },
  { id: 2, img: TodoA, name: "ToDo App", tag: "React Native · TypeScript · Expo", description: "A cross-platform mobile To-Do application built with React Native, TypeScript, and Expo. Features task creation, completion tracking, and persistent storage via AsyncStorage. Structured with reusable components, custom hooks, and Expo Router for navigation. Accessible via the Expo Go app.", url: null, badge: "Expo Go" },
  { id: 3, img: RobH, name: "Robot-Human", tag: "React · Vercel", description: "Developed an interactive React application using functional components and Hooks. Implemented dynamic state management and conditional rendering. Built a project structure with reusable components. Deployed via Vercel.", url: "https://robot-human.vercel.app/" },
  { id: 4, img: SecP, name: "Landing", tag: "HTML · CSS · Netlify", description: "Developed a fully responsive landing page using HTML5 and CSS3. Used Flexbox and Grid for modern layout design. Focused on semantic markup and responsiveness. Deployed via Netlify.", url: "https://landingpagebernard.netlify.app/" },
];

const MyProj = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { top } = el.getBoundingClientRect();
    if (top < window.innerHeight - 40) { setShow(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <motion.img
          src={ProjSec} alt=""
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 48, height: 48 }}
        />
        <div>
          <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", margin: 0 }}>My Projects</h2>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.88rem", margin: "3px 0 0" }}>{myproj.length} projects · web & mobile</p>
        </div>
      </div>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {myproj.map((item, i) => (
          <motion.div
            key={item.id}
            initial={false}
            animate={show ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.97 }}
            transition={{ duration: 0.5, delay: show ? i * 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: "100%" }}
          >
            <KnowladgeCard img={item.img} name={item.name} tag={item.tag} description={item.description} url={item.url} badge={item.badge} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProj;
