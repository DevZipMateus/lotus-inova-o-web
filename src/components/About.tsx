import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Sobre a Lotus Inovação
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Compromisso com qualidade, inovação e sustentabilidade em cada gota de água
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Target className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Missão
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Oferecer água pura e confiável, com soluções de purificação que promovem saúde, qualidade e sustentabilidade.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
            <div className="bg-accent/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Eye className="text-accent h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Visão
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ser referência em purificação de água, unindo inovação, qualidade e excelência no atendimento.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border sm:col-span-2 md:col-span-1">
            <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Valores
            </h3>
            <div className="space-y-2">
              {["Qualidade", "Confiança", "Sustentabilidade", "Inovação", "Transparência", "Honestidade"].map((valor) => (
                <div key={valor} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">{valor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
