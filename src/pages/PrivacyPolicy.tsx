import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
    <div className="container mx-auto max-w-3xl bg-card rounded-2xl shadow-medium border border-border p-8">
      <div className="mb-8 flex justify-start">
        <Link to="/" className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow-glow hover:scale-105 transition-all duration-200">
          ← Voltar para a página principal
        </Link>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">Política de Privacidade</h1>
      <div className="space-y-8 text-muted-foreground">
        <p>
          A Leanfy Ltda respeita a sua privacidade e está comprometida com a proteção dos dados pessoais coletados em suas interações conosco, especialmente durante a navegação em nosso site ou em situações profissionais relacionadas à prestação de serviços. Esta Política de Privacidade descreve de forma clara e transparente como tratamos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).
        </p>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">1. Coleta de Dados Pessoais</h2>
          <p>Coletamos apenas os dados pessoais estritamente necessários para as finalidades legítimas abaixo descritas. Isso pode ocorrer por meio do nosso site ou em outras interações com a Leanfy, como na contratação de prestadores de serviços.</p>
          <p className="mt-4 font-semibold">Durante a navegação no site, podemos coletar:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Cookies de navegação (funcionalidade e análise de estatísticas)</li>
            <li>Endereço IP e tipo de navegador (segurança e usabilidade)</li>
            <li>Informações fornecidas voluntariamente por meio de formulários (ex.: nome, e-mail)</li>
          </ul>
          <p className="mt-4 font-semibold">Durante a relação contratual com prestadores de serviços, podemos tratar:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Nome, CPF, e-mail e telefone do representante ou responsável</li>
            <li>Dados bancários para fins de pagamento</li>
            <li>Dados de acesso e utilização de ferramentas corporativas</li>
            <li>Dados de localização e produtividade, se aplicável</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">2. Finalidade do Tratamento</h2>
          <p>Os dados são coletados e tratados com as seguintes finalidades:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Garantir o funcionamento e segurança do site</li>
            <li>Melhorar a experiência de navegação e usabilidade</li>
            <li>Atender a solicitações enviadas por formulários</li>
            <li>Viabilizar a execução de contratos com prestadores de serviço</li>
            <li>Cumprir obrigações legais e regulatórias</li>
            <li>Prevenir fraudes e incidentes de segurança</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">3. Base Legal para Tratamento</h2>
          <p>O tratamento de dados pessoais pela Leanfy se fundamenta nas seguintes bases legais:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Execução de contrato (incluindo prestação de serviço por terceiros)</li>
            <li>Cumprimento de obrigação legal ou regulatória</li>
            <li>Legítimo interesse, sempre respeitando os direitos e liberdades do titular</li>
            <li>Consentimento, quando aplicável e solicitado</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">4. Compartilhamento de Dados</h2>
          <p>A Leanfy não comercializa dados pessoais. O compartilhamento poderá ocorrer apenas nas seguintes hipóteses:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Cumprimento de obrigações legais ou ordens judiciais</li>
            <li>Atendimento a solicitações feitas por você</li>
            <li>Compartilhamento com prestadores de serviços contratados para fins específicos (como provedores de hospedagem ou segurança), sempre com cláusulas de proteção de dados</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">5. Uso de Cookies</h2>
          <p>Utilizamos cookies para:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Garantir o correto funcionamento do site</li>
            <li>Coletar estatísticas de navegação anônimas (como páginas visitadas, tempo de permanência etc.)</li>
          </ul>
          <p className="mt-2">Você pode, a qualquer momento, gerenciar suas preferências de cookies nas configurações do seu navegador.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">6. Direitos do Titular de Dados</h2>
          <p>Você tem os seguintes direitos, conforme previsto na LGPD:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Confirmação da existência de tratamento</li>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
            <li>Portabilidade dos dados, quando aplicável</li>
            <li>Revogação do consentimento (quando utilizado)</li>
            <li>Oposição ao tratamento com base no legítimo interesse</li>
          </ul>
          <p className="mt-2">Essas solicitações podem ser feitas diretamente ao Encarregado de Dados (DPO).</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">7. Encarregado pelo Tratamento de Dados (DPO)</h2>
          <p>
            A ElevateTI Consultoria Ltda atua como Encarregado de Dados (DPO) da Leanfy, nos termos do art. 41 da LGPD.<br/>
            <strong>E-mail de contato:</strong> <a href="mailto:dpo@leanfy.com.br" className="text-primary underline">dpo@leanfy.com.br</a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 mt-8">8. Alterações nesta Política</h2>
          <p>
            Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças nas práticas da Leanfy ou exigências legais. A versão mais recente estará sempre disponível em nosso site.
          </p>
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-right">Atualizada em 26/05/2025</p>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy; 