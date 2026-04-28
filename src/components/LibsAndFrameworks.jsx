import LinuxI from "../assets/linux.svg";
import { neonCardStyle } from "../utils/neonCard";

const skills = [
  "Linux terminal: navigation and command-line tools",
  "Bash scripting: automating simple tasks",
  "File permissions and user access management",
  "Secure remote connections via SSH",
  "Virtual machines for development and testing",
  "Networking basics: IP configuration, ports, and services",
  "Continuous hands-on practice to strengthen skills",
];

const LibsAndFrameworks = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2 style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "1.75rem", letterSpacing: "-0.02em", margin: 0 }}>
        Linux
      </h2>

      {/* Outer card */}
      <div style={{
        ...neonCardStyle,
        borderRadius: "20px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}>
        {/* Header — always full width */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "14px 16px",
        }}>
          <img src={LinuxI} alt="linux" style={{ width: 48, height: 48, flexShrink: 0 }} />
          <div>
            <div style={{ color: "#f1f5f9", fontSize: "1rem", fontWeight: 700, marginBottom: "3px" }}>
              Networking & Administration
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>
              PortaOne course · in progress
            </div>
          </div>
        </div>

        {/* Body: stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6" style={{ gap: "16px" }}>
          {/* Description */}
          <p style={{ color: "rgba(209,213,219,0.72)", fontSize: "0.95rem", lineHeight: 1.72, margin: 0 }}>
            Confident in working in Linux environments using the terminal and
            command-line tools. Have basic experience with Bash scripting,
            including automating simple tasks. Familiar with file permissions,
            user access management, and secure remote connections via SSH.
            Regularly work with virtual machines for development and testing
            purposes.
          </p>

          {/* Skills list */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            padding: "16px 18px",
            display: "flex",
            flexDirection: "column",
            gap: "9px",
          }}>
            {skills.map((skill, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{
                  width: 5, height: 5, borderRadius: "50%", flexShrink: 0, marginTop: "7px",
                  background: "rgba(168,139,250,0.65)",
                  boxShadow: "0 0 5px rgba(168,139,250,0.35)",
                }} />
                <span style={{ color: "rgba(209,213,219,0.8)", fontSize: "0.9rem", lineHeight: 1.55 }}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibsAndFrameworks;
