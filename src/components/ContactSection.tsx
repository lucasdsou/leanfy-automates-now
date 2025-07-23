import ContactForm from "./ContactForm";
import { MessageCircle, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Quer descobrir o que dá pra{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              automatizar
            </span>{" "}
            no seu time?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vamos analisar seus processos e mostrar onde você pode ganhar tempo, eficiência e foco.
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-medium border border-border max-w-3xl w-full text-center">
            <div className="flex flex-col items-center justify-center gap-6">
              <a
                href="https://wa.me/554130739144?text=Ol%C3%A1!%20Eu%20vim%20pelo%20site.%20Gostaria%20de%20uma%20analise%20dos%20meus%20processos!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="cta" size="lg" className="w-full">
                  <MessageCircle className="mr-2" /> WhatsApp: (41) 3073-9144
                </Button>
              </a>
              <a
                href="mailto:contato@leanfy.com.br"
                className="w-full"
              >
                <Button variant="cta" size="lg" className="w-full">
                  <Mail className="mr-2" /> E-mail: contato@leanfy.com.br
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;