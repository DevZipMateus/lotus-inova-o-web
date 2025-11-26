import { Button } from "@/components/ui/button";
import { Droplet, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-purifier.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-44 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Purificador de água moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <Droplet className="text-primary h-8 w-8" />
            <span className="text-primary font-semibold text-lg">
              Água pura para sua saúde
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in leading-tight">
            Lotus Inovação
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in font-light">
            Soluções completas em purificação de água com qualidade, tecnologia e sustentabilidade
          </h2>

          <div className="flex flex-wrap gap-6 mb-12 animate-fade-in">
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="text-primary h-5 w-5" />
              <span className="font-medium">Água 100% pura</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Sparkles className="text-primary h-5 w-5" />
              <span className="font-medium">Tecnologia avançada</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-accent shadow-glow text-lg px-8"
            >
              Solicite um orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/vitrine")}
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
            >
              Ver vitrine de produtos
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
