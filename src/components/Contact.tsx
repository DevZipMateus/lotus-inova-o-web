import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para atender você e oferecer as melhores soluções em purificação de água
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Fale conosco
              </h3>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telefone</p>
                    <p className="text-muted-foreground text-sm sm:text-base">LOTUS INOVAVAO</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <Mail className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">E-mail</p>
                    <a
                      href="mailto:contato@lotuspurificadores.com.br"
                      className="text-primary hover:text-accent transition-colors text-sm sm:text-base break-all"
                    >
                      contato@lotuspurificadores.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Endereço</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Av Pires do Rio 4497</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                    <Clock className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Horário de funcionamento</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Segunda a sexta: 9:00 às 18:00</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Sábado: 09:30 às 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.instagram.com/lotus_purificadores"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 sm:p-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label="Instagram Lotus Purificadores"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-elegant border border-border flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Solicite um orçamento
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Entre em contato conosco pelo WhatsApp e receba um atendimento personalizado. Nossa equipe está pronta para ajudar você a escolher a melhor solução em purificação de água.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent shadow-glow text-base sm:text-lg w-full"
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
