import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      result: "-250h/mês",
      name: "Carlos Mendes",
      role: "CEO",
      company: "TechFlow Solutions",
      quote: "A Leanfy automatizou nosso processo de onboarding que levava 3 dias. Agora é feito em 2 horas com zero erros.",
      impact: "Redução de 85% no tempo de onboarding"
    },
    {
      result: "-60% erros",
      name: "Marina Santos", 
      role: "Diretora de Operações",
      company: "Logistics Pro",
      quote: "Integraram nossos 4 sistemas diferentes. Agora tudo flui automaticamente sem retrabalho manual.",
      impact: "Eliminação de 90% das tarefas manuais"
    },
    {
      result: "+300% eficiência",
      name: "Roberto Silva",
      role: "Gerente de Projetos", 
      company: "Consultoria Ágil",
      quote: "O que mais impressiona é a simplicidade. Soluções complexas entregues de forma que qualquer um da equipe usa.",
      impact: "ROI de 400% em 6 meses"
    },
    {
      result: "-180h/mês",
      name: "Ana Oliveira",
      role: "Head de RH",
      company: "People First",
      quote: "Automatizaram todo nosso processo de folha de pagamento. Zero erros, zero retrabalho, muito mais tempo para estratégia.",
      impact: "100% de precisão nos cálculos"
    },
    {
      result: "-90% tempo",
      name: "João Costa",
      role: "Diretor Comercial",
      company: "Sales Excellence", 
      quote: "Relatórios que levavam uma semana para serem compilados agora ficam prontos em 15 minutos. Game changer total.",
      impact: "Visibilidade em tempo real"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados concretos de empresas que eliminaram gargalos e ganharam eficiência real
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium border border-border animate-slide-up">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Resultado destacado */}
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
                  {testimonials[currentIndex].result}
                </div>
                <div className="text-lg font-semibold text-action mb-2">
                  {testimonials[currentIndex].impact}
                </div>
                <div className="flex justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Depoimento */}
              <div className="md:col-span-2">
                <blockquote className="text-xl text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controles do carousel */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-secondary hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-soft"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Indicadores */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-secondary hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-soft"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CTA para mais casos */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-subtle p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quer ver mais detalhes dos projetos?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Temos estudos de caso completos com métricas detalhadas e processo de implementação.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-medium transform hover:scale-105 transition-all duration-300"
            >
              Solicitar estudos de caso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;