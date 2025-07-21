import ContactForm from "./ContactForm";
import { MessageCircle, Mail, Linkedin } from "lucide-react";

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
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-medium border border-border max-w-3xl w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;