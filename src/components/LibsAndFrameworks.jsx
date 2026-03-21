import LinuxI from "../assets/linux.svg";
import { neonCardStyle, neonHoverHandlers } from "../utils/neonCard";

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
    <div className="flex flex-col gap-5">
      <h2 className="text-gray-50 font-bold text-3xl">Linux:</h2>
      <div className="flex items-center gap-7">
        <img src={LinuxI} alt="linux" className="w-24" />
        <h3 className="text-gray-50 text-2xl font-bold">Networking and Administration</h3>
      </div>
      <p className="text-gray-50 text-lg">
        Confident in working in Linux environments using the terminal and command-line tools. Have basic experience with Bash scripting, including automating simple tasks. Familiar with file permissions, user access management, and secure remote connections via SSH. Regularly work with virtual machines for development and testing purposes. Currently completing the "Linux Networking and Administration" course at PortaOne, continuously strengthening practical skills and deepening knowledge.
      </p>

      <div
        style={{
          ...neonCardStyle,
          borderRadius: "16px",
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        {...neonHoverHandlers}
      >
        {skills.map((skill, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="8" height="8" viewBox="0 0 8 8" style={{ flexShrink: 0 }}>
              <rect x="4" y="0" width="5.66" height="5.66" rx="1" transform="rotate(45 4 0)" fill="rgba(139,92,246,0.9)" />
            </svg>
            <span style={{ color: "rgba(209,213,219,0.85)", fontSize: "1rem", lineHeight: 1.5 }}>
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibsAndFrameworks;
