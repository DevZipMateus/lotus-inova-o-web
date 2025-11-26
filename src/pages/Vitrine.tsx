import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("100vh");

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 144; // 144px (logo grande)
      const badgeElement = document.getElementById('montesite-footer-badge');
      const badgeHeight = badgeElement && badgeElement.offsetHeight > 0 ? badgeElement.offsetHeight : 0;
      const calculatedHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(`${calculatedHeight}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    
    // Trava a rolagem da página
    document.body.style.overflow = "hidden";

    // Observer para detectar quando o badge do MonteSite carregar
    const badgeElement = document.getElementById('montesite-footer-badge');
    let observer: MutationObserver | null = null;
    
    if (badgeElement) {
      observer = new MutationObserver(() => {
        calculateHeight();
      });
      
      observer.observe(badgeElement, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }

    // Fallback: recalcula após 3 segundos caso o badge carregue com atraso
    const fallbackTimeout = setTimeout(() => {
      calculateHeight();
    }, 3000);
    
    return () => {
      window.removeEventListener("resize", calculateHeight);
      document.body.style.overflow = "auto";
      if (observer) observer.disconnect();
      clearTimeout(fallbackTimeout);
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
