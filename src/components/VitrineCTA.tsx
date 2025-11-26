import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VitrineCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold text-sm">Confira nossa vitrine online</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Explore nossos produtos e promoções
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in max-w-2xl mx-auto">
            Navegue por nossa vitrine online e descubra purificadores, filtros e acessórios com preços especiais e ofertas exclusivas
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Catálogo completo</h3>
              <p className="text-sm text-muted-foreground">
                Veja todos os nossos produtos organizados por categoria
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Star className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Ofertas exclusivas</h3>
              <p className="text-sm text-muted-foreground">
                Promoções especiais e descontos imperdíveis
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Eye className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Visualização detalhada</h3>
              <p className="text-sm text-muted-foreground">
                Veja fotos, especificações e preços de cada produto
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={() => navigate("/vitrine")}
            className="bg-primary text-primary-foreground hover:bg-accent shadow-glow text-lg px-12 py-6 h-auto animate-fade-in"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Acessar vitrine de produtos
          </Button>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground mt-6 animate-fade-in">
            Atualizado diariamente com novos produtos e ofertas
          </p>
        </div>
      </div>
    </section>
  );
};

export default VitrineCTA;
