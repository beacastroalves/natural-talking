
import { useState } from 'react';
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona a aula experimental gratuita?',
      answer: 'Antes da aula experimental, fazemos uma conversa rápida pelo WhatsApp para entender seu nível atual, objetivos e desafios. Com essas informações, preparamos uma aula experimental onde você ja vivencia uma aula REAL desde o primeiro minuto. É 100%  gratuita, sem compromisso, e você já sai sabendo se o método é para você.'
    },
    {
      question: 'Escolhi meu plano. Como funcionam as aulas?',
      answer: 'As aulas são 100% online e ao vivo via Google Meet, com duração de 50 a 60 minutos cada aula de acordo com seu plano. Focamos em conversação prática desde o primeiro dia, utilizando situações reais do seu cotidiano (viagens, reuniões, entrevistas, etc.).'
    },
    {
      question: 'Quais dias e horários estão disponíveis?',
      answer: 'Você escolhe os horários que melhor se encaixam na sua rotina. As aulas funcionam de segunda a sábado, nos períodos da manhã, tarde ou noite.'
    },
    {
      question: 'Preciso ter algum conhecimento prévio de inglês?',
      answer: 'Não! Recebemos alunos de todos os níveis, desde o zero absoluto até avançados que querem aperfeiçoar fluência. Você não "faz teste" na aula experimental — você já VIVE uma aula real e completa adaptada ao seu perfil.'
    },
    {
      question: 'O curso é só para iniciantes?',
      answer: 'De jeito nenhum! Atendemos todos os níveis, do zero ao avançado. Se você já tem uma base (A2, B1 ou superior) e está cansado de refazer o básico em cursos tradicionais, aqui é diferente: na conversa inicial identificamos exatamente onde você está travado e pulamos direto para o que você PRECISA desenvolver. Focamos em destravar sua fluência, ampliar vocabulário prático e te preparar para situações reais como viagens, reuniões de trabalho ou conversas espontâneas.'
    },
    {
      question: 'E se eu precisar remarcar uma aula?',
      answer: 'Sem problemas! Oferecemos flexibilidade total. Basta avisar com 24h de antecedência pelo WhatsApp e reagendamos sua aula. A remarcação precisa acontecer dentro do mês vigente — você pode consultar horários disponíveis para repor na mesma semana, se possível, ou em outra data dentro do mês corrente. Entendemos que imprevistos acontecem e estamos aqui para ajustar conforme sua necessidade.'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'A maioria dos alunos percebe melhora significativa nos primeiros 3 a 5 meses. Com o método "Real Life English" focado em conversação prática, você começa a SENTIR a diferença desde as primeiras semanas. Os resultados variam conforme dedicação e frequência das aulas, mas nosso método acelera muito o processo comparado a cursos tradicionais. Alunos que fazem 2x ou 3x por semana evoluem ainda mais rápido.'
    },
    {
      question: 'O material didático está incluído?',
      answer: 'Sim! Todo o material didático está incluído no valor do plano, sem custos extras. Utilizamos recursos modernos e 100% personalizados para cada aluno, incluindo áudios, vídeos, exercícios práticos, simulações de situações reais e conteúdos adaptados aos seus objetivos específicos (viagem, trabalho, intercâmbio, etc). Você não precisa comprar nenhum livro ou apostila adicional.'
    },
    {
      question: 'Posso fazer aula com um amigo ou familiar?',
      answer: 'Claro! Temos planos especiais para duplas e pequenos grupos com no máximo 3 a 4 alunos. É uma ótima forma de aprender juntos, praticar conversação entre vocês e ainda economizar no investimento. O ambiente colaborativo ajuda a perder a vergonha e acelera o aprendizado. Consulte os valores dos planos em dupla/grupo na seção de investimento acima.'
    },
    {
      question: 'Vocês oferecem certificado?',
      answer: 'Sim! Oferecemos certificados para os níveis Iniciante, Intermediário e Avançado mediante cumprimento de requisitos específicos de cada etapa. Os certificados validam oficialmente sua evolução e podem ser utilizados em processos seletivos, currículos e aplicações acadêmicas. Para consultar os requisitos detalhados de certificação de cada nível, acesse a seção "Sobre Certificados" ou fale diretamente conosco pelo WhatsApp.'
    },
    {
      question: 'Existe contrato? Como funciona?',
      answer: 'Sim, trabalhamos com contrato para garantir transparência e segurança para ambas as partes. O contrato tem vigência de 6 meses e renova automaticamente ao final de cada período. Caso você deseje cancelar, basta solicitar pelo WhatsApp e o encerramento será efetivado ao final da vigência atual (você não perde o que já pagou). A assinatura é 100% digital e segura através do Gov.br, sem burocracia e com validade jurídica total.'
    }
  ];

  const header = useScrollReveal<HTMLDivElement>();
  const faqItems = useStaggerReveal(faqs.length, 100, 80);
  const ctaBottom = useScrollReveal<HTMLDivElement>({ delay: 100 });

  return (
    <section id="faq" className="py-24 bg-[#FDFDFD] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38b6ff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/10 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(header.isVisible, 'up')}`}>
            DÚVIDAS FREQUENTES
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] leading-tight ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '50ms' }}>
            Perguntas <span className="text-[#38b6ff]">Frequentes</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div ref={faqItems.containerRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-[#38b6ff]/30 bg-[#E5F5FF] shadow-lg' 
                  : 'border-[#E5F5FF] bg-[#FDFDFD] hover:border-[#CCF0FF]'
              } ${staggerItemClass(faqItems.visibleItems[index], 'up')}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className={`font-bold pr-4 ${openIndex === index ? 'text-[#38b6ff]' : 'text-[#051218]'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-all ${
                  openIndex === index 
                    ? 'bg-[#38b6ff] rotate-180' 
                    : 'bg-[#E5F5FF]'
                }`}>
                  <i className={`ri-arrow-down-s-line text-xl ${openIndex === index ? 'text-[#FDFDFD]' : 'text-[#051218]/60'}`}></i>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <p className="px-6 pb-6 text-[#051218]/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaBottom.ref} className={`mt-12 text-center ${revealClass(ctaBottom.isVisible, 'up')}`}>
          <p className="text-[#051218]/70 mb-4">Ainda tem dúvidas?</p>
          <a 
            href="https://wa.me/5585985167789?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20aulas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#38b6ff] font-semibold hover:text-[#2A8FCC] transition-colors cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
