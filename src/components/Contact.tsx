import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer as melhores soluções em purificação de água
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale conosco
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefone</p>
                    <p className="text-muted-foreground">LOTUS INOVAVAO</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">E-mail</p>
                    <a
                      href="mailto:contato@lotuspurificadores.com.br"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      contato@lotuspurificadores.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Endereço</p>
                    <p className="text-muted-foreground">Av Pires do Rio 4497</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Horário de funcionamento</p>
                    <p className="text-muted-foreground">Segunda a sexta: 9:00 às 18:00</p>
                    <p className="text-muted-foreground">Sábado: 09:30 às 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/lotus_purificadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label="Instagram Lotus Purificadores"
                >
                  <Instagram className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Solicite um orçamento
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado. Nossa equipe está pronta para ajudar você a escolher a melhor solução em purificação de água.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent shadow-glow text-lg w-full sm:w-auto"
            >
              <a
                href="https://wa.me/message/WRCQEBPJHKUHP1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
