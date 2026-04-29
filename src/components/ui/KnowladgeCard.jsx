import NeonButton from "./NeonButton";
import { ArrowRight, Smartphone } from "lucide-react";
import { neonCardStyle, neonHoverHandlers } from "../../utils/neonCard";

const KnowladgeCard = ({ img, name, tag, description, url, badge }) => {
  return (
    <div
      style={{
        ...neonCardStyle,
        borderRadius: "20px",
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        height: "100%",
        boxSizing: "border-box",
      }}
      {...neonHoverHandlers}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <img src={img} alt={name} style={{ width: 56, height: 56, flexShrink: 0, objectFit: "contain" }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "#f1f5f9", fontSize: "1.1rem", fontWeight: 700, marginBottom: "4px" }}>
            {name}
          </div>
          {tag && (
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", letterSpacing: "0.03em" }}>
              {tag}
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* Description */}
      <p style={{
        color: "rgba(209,213,219,0.78)",
        fontSize: "0.93rem",
        lineHeight: 1.68,
        flex: 1,
        margin: 0,
      }}>
        {description}
      </p>

      {/* Footer */}
      {(url || badge) && (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", paddingTop: "4px" }}>
          {url && (
            <NeonButton variant="primary" size="sm" href={url} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight size={13} />
            </NeonButton>
          )}
          {badge && (
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "6px 14px", borderRadius: "100px",
              background: "rgba(6,182,212,0.08)",
              border: "1px solid rgba(6,182,212,0.25)",
              color: "rgba(103,232,249,0.85)",
              fontSize: "0.78rem", fontWeight: 500,
            }}>
              <Smartphone size={12} />
              {badge}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KnowladgeCard;
