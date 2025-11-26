import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("100vh");

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 144; // 144px (logo grande)
      const badgeHeight = 63; // 63px
      const calculatedHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(`${calculatedHeight}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    
    // Trava a rolagem da página
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("resize", calculateHeight);
      // Restaura a rolagem ao sair da página
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full overflow-hidden" style={{ height: "100vh", overflow: "hidden" }}>
      <Header />
      <div 
        className="w-full" 
        style={{ 
          marginTop: "144px",
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
