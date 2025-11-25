import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a Lotus Inovação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compromisso com qualidade, inovação e sustentabilidade em cada gota de água
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Missão */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer água pura e confiável, com soluções de purificação que promovem saúde, qualidade e sustentabilidade.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-accent h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Visão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em purificação de água, unindo inovação, qualidade e excelência no atendimento.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
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
