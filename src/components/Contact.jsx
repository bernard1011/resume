import { motion } from "framer-motion";

const contacts = [
  {
    id: 1, label: "Telegram", value: "@lobodindanya", href: "https://t.me/lobodindanya",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>),
  },
  {
    id: 2, label: "GitHub", value: "github.com/bernard1011", href: "https://github.com/bernard1011",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>),
  },
  {
    id: 3, label: "Email", value: "lobodin.danya@gmail.com", href: "mailto:lobodin.danya@gmail.com",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 22, height: 22 }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>),
  },
  {
    id: 4, label: "LinkedIn", value: "Danil Lobodin", href: "https://www.linkedin.com/in/danil-lobodin-517446372/",
    icon: (<svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 340, damping: 28 } },
};

const Contact = () => {
  return (
    <section className="flex flex-col gap-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gray-50 font-bold text-3xl">Contact Me</h2>
        <p style={{ color: "rgba(209,213,219,0.75)", fontSize: "1.05rem", lineHeight: 1.6, marginTop: "8px" }}>
          Feel free to reach out — I'm always open to new opportunities and conversations.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30px" }}
      >
        {contacts.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={rowVariants}
            whileHover={{ x: 6, transition: { type: "spring", stiffness: 380, damping: 22 } }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "14px 20px", borderRadius: "30px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(16px)",
              textDecoration: "none", cursor: "pointer",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <motion.div
              whileHover={{ rotate: [0, -12, 12, 0], transition: { duration: 0.4 } }}
              style={{
                width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {contact.icon}
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                {contact.label}
              </span>
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#f1f5f9" }}>
                {contact.value}
              </span>
            </div>

            <motion.svg
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              style={{ width: 18, height: 18, marginLeft: "auto", color: "rgba(255,255,255,0.35)", flexShrink: 0 }}
              whileHover={{ x: 4, transition: { type: "spring", stiffness: 400 } }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
