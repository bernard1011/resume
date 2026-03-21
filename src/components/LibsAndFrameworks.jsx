import LinuxI from "../assets/linux.svg";
import Tail from "../assets/tailwind-icon.svg";

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
    <div className="flex flex-col gap-8">

      <div className="flex flex-col gap-5 md:gap-10">
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
            background: "rgba(124,58,237,0.07)",
            border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: "16px",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
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

      <div className="flex flex-col gap-5">
        <h2 className="text-gray-50 font-bold text-3xl">Frameworks:</h2>
        <div className="flex items-center gap-7">
          <img src={Tail} alt="tailwind" className="w-24" />
          <h3 className="text-gray-50 text-2xl font-bold">Tailwind CSS</h3>
        </div>
        <p className="text-gray-50 text-lg">
          I use Tailwind CSS to build modern and responsive user interfaces
          quickly. I understand how to compose utility classes to create
          layouts, spacing, typography, and responsive designs while keeping
          the code clean and consistent.
        </p>
      </div>

    </div>
  );
};

export default LibsAndFrameworks;
