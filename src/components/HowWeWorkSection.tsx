import { Search, PenTool, Zap } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico de gargalos reais",
      description: "Workshop colaborativo para identificar onde sua operação está travando e quanto tempo está sendo desperdiçado",
      details: ["Mapeamento de processos atuais", "Identificação de gargalos", "Cálculo de tempo perdido", "Priorização por impacto"]
    },
    {
      number: "02", 
      icon: PenTool,
      title: "Desenho de solução sob medida",
      description: "Criamos um protótipo personalizado com plano de ação detalhado para sua realidade específica",
      details: ["Protótipo funcional", "Plano de implementação", "Cronograma realista", "ROI projetado"]
    },
    {
      number: "03",
      icon: Zap,
      title: "Entrega de automação real",
      description: "Implementação da solução que gera ganho imediato de tempo, clareza e produtividade",
      details: ["Automação implementada", "Treinamento da equipe", "Monitoramento de resultados", "Suporte contínuo"]
    }
  ];

  return (
    <section id="como-atuamos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              atuamos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metodologia transparente em 3 passos para transformar sua operação sem pressa e sem surpresas
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${isEven ? 'lg:grid-flow-col-dense' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Conteúdo */}
                <div className={isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl font-bold text-primary/20 mr-4">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-action rounded-full mr-3"></div>
                        <span className="text-foreground font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-medium border border-border relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">
                          Etapa {step.number}
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        {step.details.map((detail, detailIndex) => (
                          <div 
                            key={detailIndex}
                            className="bg-secondary/50 rounded-lg p-3 text-sm text-foreground border border-border/50"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Elemento decorativo */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary opacity-5 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline conectora */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
          <div className="w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;