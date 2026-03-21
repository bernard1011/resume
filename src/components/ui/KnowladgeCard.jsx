import NeonButton from "./NeonButton";
import { ArrowRight } from "lucide-react";

const KnowladgeCard = (prop) => {
  return (
    <div className="h-full">
      <div
        style={{
          background: "rgba(124,58,237,0.07)",
          border: "1px solid rgba(139,92,246,0.25)",
          borderRadius: "20px",
          padding: "20px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          height: "100%",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
          e.currentTarget.style.boxShadow = "0 0 28px rgba(124,58,237,0.35), 0 0 8px rgba(139,92,246,0.15) inset";
          e.currentTarget.style.background = "rgba(124,58,237,0.13)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.background = "rgba(124,58,237,0.07)";
        }}
      >
       
        <div style={{ display: "flex", alignItems: "center", gap: prop.img2 ? "56px" : "18px", position: "relative"}}>
          <img
            src={prop.img}
            alt={prop.name}
            style={{ width: 76, height: 76, objectFit: "contain", flexShrink: 0 }}
          />
          {prop.img2 && <img src={prop.img2} alt={prop.name} className="absolute top-0 left-10 -z-1 w-[76px]"/>}
          
          <h3 style={{ color: "#f1f5f9", fontSize: "1.35rem", fontWeight: 700, margin: 0 }}>
            {prop.name}
          </h3>
        </div>

   
        <div style={{ height: "1px", background: "rgba(139,92,246,0.15)" }} />

    
        <p style={{ color: "rgba(209,213,219,0.82)", fontSize: "0.95rem", lineHeight: 1.65, flex: 1, margin: 0 }}>
          {prop.description}
        </p>

      
        {prop.url && (
          <div style={{ paddingTop: "4px" }}>
            <NeonButton
              variant="primary"
              size="sm"
              href={prop.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <ArrowRight size={13} />
            </NeonButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowladgeCard;
