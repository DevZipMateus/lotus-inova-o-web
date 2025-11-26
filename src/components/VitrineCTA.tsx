import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VitrineCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
...
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold text-xs sm:text-sm">Confira nossa vitrine online</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in px-4">
            Explore nossos produtos e promoções
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 animate-fade-in max-w-2xl mx-auto px-4">
            Navegue por nossa vitrine online e descubra purificadores, filtros e acessórios com preços especiais e ofertas exclusivas
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <ShoppingBag className="h-7 w-7 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground">Catálogo completo</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Veja todos os nossos produtos organizados por categoria
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Star className="h-7 w-7 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground">Ofertas exclusivas</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Promoções especiais e descontos imperdíveis
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 sm:col-span-2 md:col-span-1">
              <Eye className="h-7 w-7 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground">Visualização detalhada</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Veja fotos, especificações e preços de cada produto
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={() => navigate("/vitrine")}
            className="bg-primary text-primary-foreground hover:bg-accent shadow-glow text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto animate-fade-in w-full sm:w-auto"
          >
            <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Acessar vitrine de produtos
          </Button>

          {/* Additional Info */}
          <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 animate-fade-in">
            Atualizado diariamente com novos produtos e ofertas
          </p>
        </div>
      </div>
    </section>
  );
};

export default VitrineCTA;
