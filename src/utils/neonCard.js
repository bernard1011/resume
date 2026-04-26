export const neonCardStyle = {
  background: "rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "all 0.25s ease",
};

export const neonHoverHandlers = {
  onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
    e.currentTarget.style.boxShadow =
      "0 0 28px rgba(0,0,0,0.5), 0 0 8px rgba(255,255,255,0.1) inset";
    e.currentTarget.style.background = "rgba(0,0,0,0.4)";
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "rgba(0,0,0,0.25)";
  },
};
