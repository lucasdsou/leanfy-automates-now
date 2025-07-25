import { Button } from "@/components/ui/button";
import leanfyLogo from "@/assets/leanfy-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img 
                src={leanfyLogo} 
                alt="Leanfy - Automação real sem enrolação" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Início
            </a>
            <a 
              href="#dores" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Soluções estratégicas
            </a>
            <a 
              href="#como-atuamos" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Metodologia
            </a>
            <Button 
              variant="action" 
              size="sm"
              onClick={scrollToContact}
              className="ml-4"
            >
              Falar com especialista
            </Button>
          </nav>

          <div className="md:hidden">
            <Button 
              variant="action" 
              size="sm"
              onClick={scrollToContact}
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;