export const neonCardStyle = {
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(20px) saturate(160%)",
  WebkitBackdropFilter: "blur(20px) saturate(160%)",
  border: "1px solid rgba(255, 255, 255, 0.09)",
  boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
  transition: "all 0.3s ease",
};

export const neonHoverHandlers = {
  onMouseEnter: (e) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
    e.currentTarget.style.boxShadow =
      "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px rgba(255,255,255,0.04)";
    e.currentTarget.style.transform = "translateY(-2px)";
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
    e.currentTarget.style.boxShadow =
      "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)";
    e.currentTarget.style.transform = "translateY(0)";
  },
};
