import NeonButton from "./NeonButton";
import { ArrowRight } from "lucide-react";
import { neonCardStyle, neonHoverHandlers } from "../../utils/neonCard";

const KnowladgeCard = (prop) => {
  return (
    <div className="h-full">
      <div
        style={{
          ...neonCardStyle,
          borderRadius: "20px",
          padding: "28px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          height: "100%",
        }}
        {...neonHoverHandlers}
      >
       
        <div style={{ display: "flex", alignItems: "center", gap: prop.img2 ? "56px" : "18px", position: "relative"}}>
          <img
            src={prop.img}
            alt={prop.name}
            style={{ width: 96, height: 96, objectFit: "contain", flexShrink: 0 }}
          />
          {prop.img2 && <img src={prop.img2} alt={prop.name} className="absolute top-0 left-10 -z-1 w-[96px]"/>}
          
          <h3 style={{ color: "#f1f5f9", fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
            {prop.name}
          </h3>
        </div>

   
        <div style={{ height: "1px", background: "rgba(139,92,246,0.15)" }} />

    
        <p style={{ color: "rgba(209,213,219,0.82)", fontSize: "1.1rem", lineHeight: 1.65, flex: 1, margin: 0 }}>
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
