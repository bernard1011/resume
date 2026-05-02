import { motion } from "framer-motion";
import AiI from "../assets/ai-icon.svg";
import { neonCardStyle, neonHoverHandlers } from "../utils/neonCard";

const AiUsage = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", margin: 0 }}>
        AI Usage
      </h2>

      <div style={{ ...neonCardStyle, borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }} {...neonHoverHandlers}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <motion.img
            src={AiI} alt="AI"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ width: 64, height: 64, flexShrink: 0 }}
          />
          <div>
            <h3 style={{ color: "#f1f5f9", fontSize: "1.25rem", fontWeight: 700, margin: "0 0 4px" }}>Google & AI Tools</h3>
            <p style={{ color: "rgba(156,163,175,0.85)", fontSize: "0.88rem", margin: 0 }}>Claude · ChatGPT · Gemini</p>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

        <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-4">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "rgba(209,213,219,0.82)", fontSize: "0.97rem", lineHeight: 1.72, margin: 0 }}>
              My skills are still growing — there's plenty left to learn in development, testing, design, scripting, and troubleshooting. I embrace smart use of Google and AI tools as part of that process; they're genuinely great for learning and understanding new concepts.
            </p>
            <p style={{ color: "rgba(209,213,219,0.82)", fontSize: "0.97rem", lineHeight: 1.72, margin: 0 }}>
              That said, I'm firmly against copy-pasting. These tools excite me, but what excites me more is growing as an engineer. I want to understand what I'm building, not just ship it — and I'd rather not be replaceable.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "rgba(209,213,219,0.82)", fontSize: "0.97rem", lineHeight: 1.72, margin: 0 }}>
              So I use AI to learn, automate repetitive tasks, and clarify things I don't yet understand, not to offload responsibility. I try to write thoughtful prompts and always verify the output, especially when security is involved.
            </p>
            <p style={{ color: "rgba(209,213,219,0.82)", fontSize: "0.97rem", lineHeight: 1.72, margin: 0 }}>
              My favourite tool is Claude, though I regularly use ChatGPT and Gemini too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiUsage;
