import { Wrench, Package, Droplets, Settings, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import purifierImage from "@/assets/service-purifier.jpg";
import filtersImage from "@/assets/service-filters.jpg";
import installationImage from "@/assets/service-installation-new.jpg";
import sanitizationImage from "@/assets/service-sanitization.jpg";
import maintenanceImage from "@/assets/service-maintenance-new.jpg";
import watercoolerImage from "@/assets/service-watercooler.jpg";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Venda de purificadores",
      description: "Purificadores de água de alta qualidade para sua casa ou empresa",
      image: purifierImage,
    },
    {
      icon: Package,
      title: "Filtros e refis",
      description: "Filtros de entrada, refis e peças originais de reposição",
      image: filtersImage,
    },
    {
      icon: Wrench,
      title: "Instalação profissional",
      description: "Instalação completa e segura realizada por técnicos especializados",
      image: installationImage,
    },
    {
      icon: Sparkles,
      title: "Higienização",
      description: "Limpeza e higienização completa dos equipamentos",
      image: sanitizationImage,
    },
    {
      icon: Settings,
      title: "Manutenção",
      description: "Manutenção preventiva e corretiva para garantir o melhor desempenho",
      image: maintenanceImage,
    },
    {
      icon: Droplets,
      title: "Bebedouros",
      description: "Venda e instalação de bebedouros para ambientes corporativos",
      image: watercoolerImage,
    },
  ];

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
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para garantir água pura e de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 border border-border"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className={service.image ? "p-6" : "p-8"}>
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-primary h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-accent shadow-glow text-lg px-8"
          >
            Solicite um orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
