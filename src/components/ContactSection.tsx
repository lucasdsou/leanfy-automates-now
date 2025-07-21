import ContactForm from "./ContactForm";
import { MessageCircle, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Quer descobrir o que dá pra{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              automatizar
            </span>{" "}
            no seu time?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos analisar seus processos e mostrar onde você pode ganhar tempo, eficiência e foco.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Formulário principal */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-medium border border-border">
              <ContactForm />
            </div>
          </div>

          {/* Informações de contato e credibilidade */}
          <div className="space-y-8">
            {/* Contatos diretos */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border animate-slide-up">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Outras formas de contato
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre automação de processos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-action hover:text-white transition-all duration-300 group"
                >
                  <MessageCircle className="h-5 w-5 mr-3 text-action group-hover:text-white" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white/80">
                      Resposta rápida
                    </div>
                  </div>
                </a>

                <a 
                  href="mailto:contato@leanfy.com.br"
                  className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 mr-3 text-primary group-hover:text-white" />
                  <div>
                    <div className="font-medium">E-mail</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white/80">
                      contato@leanfy.com.br
                    </div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/company/leanfy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 mr-3 text-blue-600 group-hover:text-white" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground group-hover:text-white/80">
                      Conecte-se conosco
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Garantias e benefícios */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Por que escolher a Leanfy?
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-sm text-foreground">
                    <strong>Análise gratuita</strong> sem compromisso
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-sm text-foreground">
                    <strong>ROI garantido</strong> em até 6 meses
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-sm text-foreground">
                    <strong>Suporte contínuo</strong> pós-implementação
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-action rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div className="text-sm text-foreground">
                    <strong>Conformidade LGPD</strong> e segurança
                  </div>
                </div>
              </div>
            </div>

            {/* Tempo de resposta */}
            <div className="bg-gradient-action text-white rounded-2xl p-6 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold mb-2">
                ⚡ Resposta rápida
              </h3>
              <p className="text-sm opacity-90">
                Analisamos seu caso e respondemos em até <strong>24 horas</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;