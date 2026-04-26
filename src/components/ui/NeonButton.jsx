const VARIANTS = {
  primary: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "100px",
    color: "#fff",
    boxShadow: "0 0 18px rgba(0,0,0,0.5), 0 0 6px rgba(255,255,255,0.15) inset",
    hoverShadow:
      "0 0 32px rgba(0,0,0,0.7), 0 0 10px rgba(255,255,255,0.25) inset",
    hoverBg: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
  },
  secondary: {
    background: "rgba(0,0,0,0.2)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "100px",
    color: "rgba(255,255,255,0.85)",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    hoverShadow:
      "0 0 22px rgba(0,0,0,0.5), 0 0 8px rgba(255,255,255,0.15) inset",
    hoverBg: "rgba(0,0,0,0.35)",
  },
  ghost: {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "100px",
    color: "rgba(255,255,255,0.7)",
    boxShadow: "none",
    hoverShadow: "0 0 16px rgba(0,0,0,0.4)",
    hoverBg: "rgba(0,0,0,0.15)",
  },
  icon: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "100px",
    color: "#e2e8f0",
    boxShadow: "0 0 8px rgba(0,0,0,0.3)",
    hoverShadow: "0 0 20px rgba(0,0,0,0.5)",
    hoverBg: "rgba(0,0,0,0.2)",
  },
};

const SIZES = {
  sm: {
    padding: "6px 14px",
    fontSize: "0.8rem",
    borderRadius: "100px",
    minHeight: "32px",
  },
  md: {
    padding: "9px 20px",
    fontSize: "0.9rem",
    borderRadius: "100px",
    minHeight: "40px",
  },
  lg: {
    padding: "12px 28px",
    fontSize: "1rem",
    borderRadius: "100px",
    minHeight: "48px",
  },
  icon: {
    padding: "0",
    width: "40px",
    height: "40px",
    borderRadius: "100px",
    fontSize: "1.1rem",
    minHeight: "40px",
  },
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
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return <button {...props}>{children}</button>;
};

export default NeonButton;
