import NeonButton from "./NeonButton";
import { ArrowRight } from "lucide-react";
import { neonCardStyle, neonHoverHandlers } from "../../utils/neonCard";

const KnowladgeCard = ({ img, img2, name, description, url }) => {
  return (
    <div className="h-full">
      <div
        style={{
          ...neonCardStyle,
          borderRadius: "24px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
        }}
        {...neonHoverHandlers}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ position: "relative", flexShrink: 0, width: 64, height: 64 }}>
            <img
              src={img}
              alt={name}
              style={{ width: 64, height: 64, objectFit: "contain", display: "block" }}
            />
            {img2 && (
              <img
                src={img2}
                alt=""
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                  position: "absolute",
                  bottom: -6,
                  right: -14,
                  opacity: 0.75,
                }}
              />
            )}
          </div>
          <h3 style={{ color: "#f1f5f9", fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>
            {name}
          </h3>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

        {/* Description */}
        <p style={{
          color: "rgba(209,213,219,0.78)",
          fontSize: "0.97rem",
          lineHeight: 1.7,
          flex: 1,
          margin: 0,
        }}>
          {description}
        </p>

        {url && (
          <div style={{ paddingTop: "4px" }}>
            <NeonButton variant="primary" size="sm" href={url} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight size={13} />
            </NeonButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowladgeCard;
