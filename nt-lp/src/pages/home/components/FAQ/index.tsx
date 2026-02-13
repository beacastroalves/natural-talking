
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funcionam as aulas?',
      answer: 'As aulas são 100% online e ao vivo, via Google Meet ou Zoom. Você escolhe os horários que melhor se encaixam na sua rotina. Cada aula tem 50 minutos de duração, focada em conversação prática desde o primeiro dia.'
    },
    {
      question: 'Preciso ter algum conhecimento prévio de inglês?',
      answer: 'Não! Recebemos alunos de todos os níveis, desde o zero absoluto até avançados que querem aperfeiçoar a fluência. Na aula experimental gratuita, avaliamos seu nível atual e criamos um plano personalizado.'
    },
    {
      question: 'E se eu precisar remarcar uma aula?',
      answer: 'Sem problemas! Oferecemos flexibilidade total. Basta avisar com 24h de antecedência pelo WhatsApp e reagendamos sua aula para outro horário que funcione para você.'
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'A maioria dos alunos percebe melhora significativa na confiança e fluência já nas primeiras 4-6 semanas. Resultados variam conforme dedicação e frequência das aulas, mas nosso método acelera muito o processo.'
    },
    {
      question: 'O material didático está incluído?',
      answer: 'Sim! Todo o material é incluído no valor do plano. Utilizamos recursos modernos e personalizados para cada aluno, incluindo áudios, vídeos e exercícios práticos.'
    },
    {
      question: 'Posso fazer aula com um amigo ou familiar?',
      answer: 'Claro! Temos planos especiais para duplas e pequenos grupos (máximo 4 pessoas). É uma ótima forma de aprender juntos e ainda economizar. Consulte os valores na seção de planos.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1e88e5]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-semibold mb-4">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">Frequentes</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'border-[#1e88e5]/30 bg-[#1e88e5]/5 shadow-lg' 
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className={`font-bold pr-4 ${openIndex === index ? 'text-[#1e88e5]' : 'text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-all ${
                  openIndex === index 
                    ? 'bg-[#1e88e5] rotate-180' 
                    : 'bg-gray-100'
                }`}>
                  <i className={`ri-arrow-down-s-line text-xl ${openIndex === index ? 'text-white' : 'text-gray-500'}`}></i>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5585985167789?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20aulas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1e88e5] font-semibold hover:text-primary transition-colors cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
