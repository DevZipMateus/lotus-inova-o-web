import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import lotusLogo from "@/assets/lotus-logo-real.png";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={lotusLogo} alt="Logo Lotus Inovação" className="h-28 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => navigate("/vitrine")} className="text-foreground hover:text-primary transition-colors font-medium">
              Vitrine
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <Button onClick={() => scrollToSection("contato")} className="bg-primary text-primary-foreground hover:bg-accent shadow-md">
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu de navegação">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-elegant border border-border">
            <div className="flex flex-col gap-4 px-4">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Serviços
              </button>
              <button onClick={() => { navigate("/vitrine"); setIsMobileMenuOpen(false); }} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Vitrine
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
                Contato
              </button>
              <Button onClick={() => scrollToSection("contato")} className="bg-primary text-primary-foreground hover:bg-accent w-full">
                Fale conosco
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;