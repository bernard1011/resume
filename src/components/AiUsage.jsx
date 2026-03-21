import AiI from "../assets/ai-icon.svg";

const AiUsage = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-gray-50 font-bold text-3xl">AI Usage:</h2>

      <div
        style={{
          background: "rgba(124,58,237,0.07)",
          border: "1px solid rgba(139,92,246,0.25)",
          borderRadius: "20px",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
          e.currentTarget.style.background = "rgba(124,58,237,0.11)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
          e.currentTarget.style.background = "rgba(124,58,237,0.07)";
        }}
      >
       
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={AiI} alt="AI" style={{ width: 72, height: 72, flexShrink: 0 }} />
          <div>
            <h3 style={{ color: "#f1f5f9", fontSize: "1.5rem", fontWeight: 700, margin: "0 0 4px" }}>
              Google & AI Tools
            </h3>
            <p style={{ color: "#a78bfa", fontSize: "0.95rem", margin: 0 }}>
              Claude · ChatGPT · Gemini
            </p>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(139,92,246,0.15)" }} />

        <div className="md:grid md:grid-cols-2 md:gap-8 flex flex-col gap-4">
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ color: "rgba(209,213,219,0.85)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
              My skills are still growing — there's plenty left to learn in development, testing, design,
              scripting, and troubleshooting. I embrace smart use of Google and AI tools as part of that
              process; they're genuinely great for learning and understanding new concepts.
            </p>
            <p style={{ color: "rgba(209,213,219,0.85)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
              That said, I'm firmly against copy-pasting. These tools excite me, but what excites me more
              is growing as an engineer. I want to understand what I'm building, not just ship it — and
              I'd rather not be replaceable.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p style={{ color: "rgba(209,213,219,0.85)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
              So I use AI to learn, automate repetitive tasks, and clarify things I don't yet understand,
              not to offload responsibility. I try to write thoughtful prompts and always verify the
              output, especially when security is involved.
            </p>
            <p style={{ color: "rgba(209,213,219,0.85)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
              My favourite tool is Claude, though I regularly use ChatGPT and Gemini too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiUsage;
