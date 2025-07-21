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
      <div className="bg-gradient-primary py-16 px-4 sm:px-6 lg:px-8">
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
      <div className="py-16 px-4 sm:px-6 lg:px-8">
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
              
              {/* Links sociais */}
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-action rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:contato@leanfy.com.br"
                  className="w-12 h-12 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/leanfy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navegação</h3>
              <div className="space-y-3">
                <a 
                  href="#dores" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Problemas que resolvemos
                </a>
                <a 
                  href="#como-atuamos" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Como atuamos
                </a>
                <a 
                  href="#casos" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Casos reais
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
                  <div className="text-gray-300">WhatsApp</div>
                  <a 
                    href="https://wa.me/5511999999999" 
                    className="text-white hover:text-action transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
                <div>
                  <div className="text-gray-300">E-mail</div>
                  <a 
                    href="mailto:contato@leanfy.com.br" 
                    className="text-white hover:text-primary transition-colors"
                  >
                    contato@leanfy.com.br
                  </a>
                </div>
                <div>
                  <div className="text-gray-300">Horário</div>
                  <div className="text-white">
                    Seg-Sex: 9h às 18h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Leanfy. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
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

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre automação de processos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;