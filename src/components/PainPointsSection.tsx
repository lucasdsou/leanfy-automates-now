import { Clock, GitMerge, RotateCcw, Eye } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Processos manuais que consomem horas",
      description: "Tarefas repetitivas que drenam tempo da sua equipe semanalmente"
    },
    {
      icon: GitMerge,
      title: "Falta de integração entre sistemas",
      description: "Dados isolados que precisam ser transferidos manualmente"
    },
    {
      icon: RotateCcw,
      title: "Tarefas repetitivas sem valor",
      description: "Atividades manuais que poderiam ser automatizadas completamente"
    },
    {
      icon: Eye,
      title: "Falta de visibilidade e controle",
      description: "Dificuldade para acompanhar e otimizar processos operacionais"
    }
  ];

  return (
    <section id="dores" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Problemas que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              resolvemos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Identificamos e eliminamos os gargalos que impedem sua operação de escalar de forma eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:shadow-medium transition-all duration-300 hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-subtle p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Reconhece algum desses problemas?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Não precisa conviver com eles. Vamos mostrar como automatizar seus processos de forma inteligente.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-action text-action-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-medium transform hover:scale-105 transition-all duration-300"
            >
              Quero uma análise gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;