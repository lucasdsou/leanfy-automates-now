import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    phone: "",
    challenge: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.role || !formData.challenge) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos marcados com *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas.",
      });
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        role: "",
        phone: "",
        challenge: ""
      });
      
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-16 h-16 bg-action rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Formulário enviado com sucesso!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Nossa equipe analisará seu desafio e entrará em contato em até 24 horas para agendar uma conversa.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
        >
          Enviar outro formulário
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Nome completo *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="h-12"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
            Empresa *
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Nome da empresa"
            className="h-12"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-foreground mb-2">
            Cargo *
          </label>
          <Input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            placeholder="Sua função na empresa"
            className="h-12"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
            Telefone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="h-12"
          />
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-semibold text-foreground mb-2">
          Qual é o maior desafio do seu time hoje? *
        </label>
        <Textarea
          id="challenge"
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          placeholder="Descreva o principal gargalo ou processo que está consumindo tempo da sua equipe..."
          className="min-h-[120px] resize-none"
          required
        />
        <p className="text-xs text-muted-foreground mt-2">
          Quanto mais específico, melhor poderemos ajudar
        </p>
      </div>

      <Button 
        type="submit" 
        variant="cta" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Enviando...
          </div>
        ) : (
          <>
            Quero conversar com alguém da Leanfy
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Ao enviar, você concorda com nossa{" "}
        <a href="/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          Política de Privacidade
        </a>{" "}
        e consente o uso dos dados conforme a LGPD.
      </p>
    </form>
  );
};

export default ContactForm;