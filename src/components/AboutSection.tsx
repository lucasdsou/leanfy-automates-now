import { Users, Target, Award, Lightbulb } from "lucide-react";
import quemSomosImg from "@/assets/quem-somos.png";

const AboutSection = () => {
  const teamValues = [
    {
      icon: Target,
      title: "Foco em resultados",
      description: "Cada projeto é medido pelo impacto real na operação do cliente"
    },
    {
      icon: Lightbulb,
      title: "Simplicidade inteligente",
      description: "Soluções sofisticadas entregues de forma simples e intuitiva"
    },
    {
      icon: Users,
      title: "Parceria genuína",
      description: "Trabalhamos junto com sua equipe, não apenas para ela"
    },
    {
      icon: Award,
      title: "Qualidade sem pressa",
      description: "Preferimos fazer certo do que fazer rápido e mal feito"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo à esquerda */}
          <div className="animate-fade-in text-left w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Quem somos e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                por que confiar
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso propósito é tornar processos mais ágeis, eficientes e inteligentes, 
              ajudando empresas a ganhar tempo, clareza e produtividade por meio de 
              automação genuína, não de "soluções mágicas".
            </p>

            <div className="bg-gradient-subtle p-6 rounded-2xl border border-border mb-8 inline-block text-left mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Nosso objetivo
              </h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Foco, honestidade e automação real</strong> — 
                cada projeto é único porque cada problema é diferente. Não vendemos pacotes prontos, 
                criamos soluções sob medida para sua realidade.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              {teamValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-slide-up max-w-md w-full mx-auto"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex justify-center items-center w-full">
            <img 
              src={quemSomosImg}
              alt="Equipe Leanfy"
              className="aspect-[3/4] object-cover rounded-2xl shadow-glow w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;