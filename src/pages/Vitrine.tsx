import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("100vh");

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 80; // 80px
      const badgeHeight = 63; // 63px
      const calculatedHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(`${calculatedHeight}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="w-full overflow-hidden" style={{ height: "100vh" }}>
      <Header />
      <div 
        className="w-full" 
        style={{ 
          marginTop: "80px",
          height: iframeHeight,
          overflow: "hidden"
        }}
      >
        <iframe 
          src="https://lotusmultimarca.egestor.com.br/vitrine/" 
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block"
          }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
