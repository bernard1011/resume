export const neonCardStyle = {
  background: "rgba(124,58,237,0.07)",
  border: "1px solid rgba(139,92,246,0.25)",
  transition: "all 0.25s ease",
};

export const neonHoverHandlers = {
  onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
    e.currentTarget.style.boxShadow = "0 0 28px rgba(124,58,237,0.35), 0 0 8px rgba(139,92,246,0.15) inset";
    e.currentTarget.style.background = "rgba(124,58,237,0.13)";
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "rgba(124,58,237,0.07)";
  },
};
