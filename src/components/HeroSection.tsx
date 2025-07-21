import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCases = () => {
    const casesSection = document.getElementById('casos');
    casesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automatizamos o que trava sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                operação
              </span>
              .<br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-medium">
                Sem enrolação.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Soluções sob medida para você ganhar tempo, eficiência e foco no que realmente importa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToContact}
                className="group"
              >
                Quero falar com um especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* Removido o botão 'Ver exemplo real' */}
            </div>

            {/* Métricas de credibilidade */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">250h+</div>
                <div className="text-sm text-muted-foreground">economizadas/mês</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">processos automatizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">redução de erros</div>
              </div>
            </div>
          </div>

          {/* Elemento visual animado */}
          <div className="relative animate-slide-up">
            <div className="relative bg-card rounded-2xl p-8 shadow-medium border border-border overflow-hidden">
              {/* Antes: Processo manual */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-3 h-3 bg-destructive rounded-full mr-3"></span>
                  Antes: Processo Manual
                </h3>
                <div className="space-y-3">
                  {[
                    "5h para gerar relatórios",
                    "Erro humano em 20% dos casos", 
                    "Retrabalho constante",
                    "Dados dispersos"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-sm text-muted-foreground opacity-60"
                    >
                      <div className="w-2 h-2 bg-muted rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

              {/* Depois: Automatizado */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-3 h-3 bg-action rounded-full mr-3 animate-pulse"></span>
                  Depois: Automatizado
                </h3>
                <div className="space-y-3">
                  {[
                    "5 min para gerar relatórios",
                    "Zero erros de processamento",
                    "Fluxo direto e inteligente", 
                    "Dados integrados"
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-sm text-foreground font-medium"
                    >
                      <div className="w-2 h-2 bg-action rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary opacity-10 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;