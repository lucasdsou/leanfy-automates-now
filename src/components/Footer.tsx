import { MessageCircle, Mail, Linkedin, ArrowUp } from "lucide-react";
import leanfyLogo from "@/assets/leanfy-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white relative">
      {/* CTA Final */}
      <div className="bg-gradient-primary py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Quer aplicar automação inteligente?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como transformar os gargalos da sua operação em vantagem competitiva.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Começar agora
          </button>
        </div>
      </div>

      {/* Footer principal */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <img 
                src={leanfyLogo} 
                alt="Leanfy" 
                className="h-8 w-auto mb-6 filter brightness-0 invert"
              />
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Automação real sem enrolação. Transformamos processos complexos em fluxos simples e eficientes.
              </p>
              
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navegação</h3>
              <div className="space-y-3">
                <a 
                  href="#dores" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Soluções estratégicas
                </a>
                <a 
                  href="#como-atuamos" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Metodologia
                </a>
                <a 
                  href="#contact" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-gray-300">Horário</div>
                  <div className="text-gray-300">
                    Segunda a sexta das 8h às 18h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-3 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Leanfy. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="/privacy-policy" 
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Termos de Uso
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;