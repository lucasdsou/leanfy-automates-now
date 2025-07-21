import { Users, Target, Award, Lightbulb } from "lucide-react";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Quem somos e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                por que confiar
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Pequena no tamanho, grande na entrega. A Leanfy nasce da fusão de{" "}
              <strong className="text-foreground">Lean</strong> (eficiência, corte de desperdícios) com{" "}
              <strong className="text-foreground">Fy</strong> (transformação em tempo real).
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso propósito é tornar processos mais ágeis, eficientes e inteligentes, 
              ajudando empresas a ganhar tempo, clareza e produtividade por meio de 
              automação genuína, não de "soluções mágicas".
            </p>

            <div className="bg-gradient-subtle p-6 rounded-2xl border border-border mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Nossa metodologia
              </h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Foco, honestidade e automação real</strong> — 
                cada projeto é único porque cada problema é diferente. Não vendemos pacotes prontos, 
                criamos soluções sob medida para sua realidade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {teamValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-slide-up"
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

          {/* Team Visual */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-3xl p-8 shadow-medium border border-border relative overflow-hidden">
              {/* Placeholder para fotos reais da equipe */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Nossa equipe
                </h3>
                <p className="text-muted-foreground mb-6">
                  Especialistas em automação, desenvolvimento e otimização de processos
                </p>
              </div>

              {/* Grid de membros da equipe (placeholder) */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { name: "Ana Silva", role: "Arquiteta de Automação", initial: "A" },
                  { name: "Carlos Santos", role: "Desenvolvedor Senior", initial: "C" },
                  { name: "Marina Costa", role: "Analista de Processos", initial: "M" },
                  { name: "Rafael Lima", role: "Consultor de Eficiência", initial: "R" }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                      {member.initial}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {member.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Estatísticas da equipe */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">4+</div>
                  <div className="text-xs text-muted-foreground">anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">projetos entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">clientes satisfeitos</div>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary opacity-10 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;