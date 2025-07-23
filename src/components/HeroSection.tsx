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
    <section className="pt-20 pb-10 px-2 sm:pt-24 sm:pb-16 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="animate-fade-in w-full">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight break-words">
              Automatizamos o que trava sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                operação
              </span>
              .<br />
              <span className="text-muted-foreground text-2xl sm:text-4xl lg:text-5xl font-medium">
                Sem enrolação.
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-full sm:max-w-lg">
              Soluções sob medida para você ganhar tempo, eficiência e foco no que realmente importa.
            </p>

            <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:mb-12">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToContact}
                className="group w-full sm:w-auto"
              >
                Quero falar com um especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* Removido o botão 'Ver exemplo real' */}
            </div>

            {/* Métricas de credibilidade */}
            {/* Removido conforme solicitado */}
          </div>

          {/* Elemento visual animado */}
          <div className="relative animate-slide-up w-full mt-8 lg:mt-0">
            <div className="relative bg-card rounded-2xl p-4 sm:p-8 shadow-medium border border-border overflow-hidden">
              {/* Antes: Processo manual */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 bg-destructive rounded-full mr-2 sm:mr-3"></span>
                  Antes: Processo Manual
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {["5h para gerar relatórios","Erro humano em 20% dos casos","Retrabalho constante","Dados dispersos"].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-xs sm:text-sm text-muted-foreground opacity-60"
                    >
                      <div className="w-2 h-2 bg-muted rounded-full mr-2 sm:mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 sm:mb-8"></div>

              {/* Depois: Automatizado */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
                  <span className="w-3 h-3 bg-action rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  Depois: Automatizado
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {["5 min para gerar relatórios","Zero erros de processamento","Fluxo direto e inteligente","Dados integrados"].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center text-xs sm:text-sm text-foreground font-medium"
                    >
                      <div className="w-2 h-2 bg-action rounded-full mr-2 sm:mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-primary opacity-10 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;