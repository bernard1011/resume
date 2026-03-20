
const VARIANTS = {
  primary: {
    background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
    border: "1px solid rgba(139,92,246,0.0)",
    color: "#fff",
    boxShadow: "0 0 18px rgba(124,58,237,0.55), 0 0 6px rgba(139,92,246,0.3) inset",
    hoverShadow: "0 0 32px rgba(124,58,237,0.85), 0 0 10px rgba(167,139,250,0.4) inset",
    hoverBg: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
  },
  secondary: {
    background: "rgba(124,58,237,0.08)",
    border: "1px solid rgba(139,92,246,0.45)",
    color: "#c4b5fd",
    boxShadow: "0 0 10px rgba(124,58,237,0.15)",
    hoverShadow: "0 0 22px rgba(124,58,237,0.45), 0 0 8px rgba(139,92,246,0.2) inset",
    hoverBg: "rgba(124,58,237,0.18)",
  },
  ghost: {
    background: "transparent",
    border: "1px solid rgba(139,92,246,0.2)",
    color: "rgba(196,181,253,0.75)",
    boxShadow: "none",
    hoverShadow: "0 0 16px rgba(124,58,237,0.3)",
    hoverBg: "rgba(124,58,237,0.1)",
  },
  icon: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(139,92,246,0.3)",
    color: "#e2e8f0",
    boxShadow: "0 0 8px rgba(124,58,237,0.2)",
    hoverShadow: "0 0 20px rgba(124,58,237,0.55)",
    hoverBg: "rgba(124,58,237,0.2)",
  },
};

const SIZES = {
  sm: { padding: "6px 14px",  fontSize: "0.8rem",  borderRadius: "10px", minHeight: "32px" },
  md: { padding: "9px 20px",  fontSize: "0.9rem",  borderRadius: "12px", minHeight: "40px" },
  lg: { padding: "12px 28px", fontSize: "1rem",    borderRadius: "14px", minHeight: "48px" },
  icon: { padding: "0", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1.1rem", minHeight: "40px" },
};

const NeonButton = ({
  variant = "primary",
  size = "md",
  href,
  children,
  style = {},
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[variant === "icon" ? "icon" : size] || SIZES.md;

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontWeight: 600,
    letterSpacing: "0.01em",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backdropFilter: "blur(6px)",
    outline: "none",
    textDecoration: "none",
    background: v.background,
    border: v.border,
    color: v.color,
    boxShadow: v.boxShadow,
    ...s,
    ...style,
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background = v.hoverBg;
    e.currentTarget.style.boxShadow = v.hoverShadow;
    e.currentTarget.style.transform = "translateY(-1px)";
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.boxShadow = v.boxShadow;
    e.currentTarget.style.transform = "translateY(0)";
    onMouseLeave?.(e);
  };

  const props = {
    style: baseStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...rest,
  };

  if (href) {
    return <a href={href} {...props}>{children}</a>;
  }

  return <button {...props}>{children}</button>;
};

export default NeonButton;
