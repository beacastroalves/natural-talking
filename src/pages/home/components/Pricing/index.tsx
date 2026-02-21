
import { useState } from 'react';
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

export default function Pricing() {
  const [isGroup, setIsGroup] = useState(false);

  const individualPlans = [
    {
      name: 'Light',
      frequency: '1x por semana',
      price: 'R$ 180',
      period: '/mês',
      features: [
        '4 aulas mensais de 50-60 min',
        'Material didático incluído',
        'Suporte via WhatsApp',
        'Planejamento personalizado'
      ],
      recommended: false
    },
    {
      name: 'Pro',
      frequency: '2x por semana',
      price: 'R$ 300',
      period: '/mês',
      features: [
        '8 aulas mensais de 50-60 min',
        'Material didático incluído',
        'Suporte prioritário WhatsApp',
        'Planejamento personalizado',
        'Evolução 2x mais rápida'
      ],
      recommended: true
    },
    {
      name: 'Elite',
      frequency: '3x por semana',
      price: 'R$ 380',
      period: '/mês',
      features: [
        '12 aulas mensais de 50-60 min',
        'Material didático incluído',
        'Suporte VIP via WhatsApp',
        'Planejamento personalizado',
        'Máxima imersão e resultados'
      ],
      recommended: false
    }
  ];

  const groupPlans = [
    {
      name: 'Dupla Light',
      frequency: '1x por semana',
      price: 'R$ 160',
      period: '/aluno/mês',
      features: [
        '4 aulas mensais de 50-60 min',
        'Máximo 2 alunos por turma',
        'Material didático incluído',
        'Suporte via WhatsApp'
      ],
      recommended: false
    },
    {
      name: 'Dupla Pro',
      frequency: '2x por semana',
      price: 'R$ 280',
      period: '/aluno/mês',
      features: [
        '8 aulas mensais de 50-60 min',
        'Máximo 2 alunos por turma',
        'Material didático incluído',
        'Suporte prioritário WhatsApp',
        'Evolução acelerada'
      ],
      recommended: true
    },
    {
      name: 'Grupo',
      frequency: 'Até 4 alunos',
      price: 'Consulte',
      period: '',
      features: [
        'Horários flexíveis',
        'Máximo 4 alunos por turma',
        'Material didático incluído',
        'Ideal para empresas/famílias'
      ],
      recommended: false
    }
  ];

  const plans = isGroup ? groupPlans : individualPlans;

  const handlePlanCTA = (plan: { name: string; frequency: string; price: string; period: string }) => {
    try {
      const phone = '+5585985167789';
      let message = '';
      if (plan.price === 'Consulte') {
        message = encodeURIComponent(
          `Olá! Gostaria de saber mais sobre o plano ${plan.name} (${plan.frequency}). Meu nome é `
        );
      } else {
        message = encodeURIComponent(
          `Olá! Gostaria de me inscrever no plano ${plan.name} - ${plan.frequency} - ${plan.price}${plan.period}. Meu nome é `
        );
      }
      const url = `https://wa.me/${phone}?text=${message}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open WhatsApp link:', error);
    }
  };

  const header = useScrollReveal<HTMLDivElement>();
  const planCards = useStaggerReveal(3, 150, 150);
  const guaranteeBar = useScrollReveal<HTMLDivElement>({ delay: 200 });

  return (
    <section id="planos" className="py-24 bg-[#F8FAFB] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#E5F5FF_1px,transparent_1px),linear-gradient(to_bottom,#E5F5FF_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-12">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/10 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(header.isVisible, 'up')}`}>
            INVESTIMENTO
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] mb-6 leading-tight ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '100ms' }}>
            Escolha Seu <span className="text-[#38b6ff]">Plano de Fluência</span>
          </h2>
          <p className={`text-lg text-[#051218]/70 max-w-2xl mx-auto mb-8 ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '200ms' }}>
            Investimento acessível para transformar sua vida. Todos os planos incluem acompanhamento personalizado.
          </p>

          {/* Toggle */}
          <div className={`inline-flex items-center p-1.5 rounded-2xl bg-[#E5F5FF] ${revealClass(header.isVisible, 'scale')}`} style={{ transitionDelay: '300ms' }}>
            <button
              onClick={() => setIsGroup(false)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                !isGroup
                  ? 'bg-[#38b6ff] text-[#FDFDFD] shadow-lg'
                  : 'text-[#051218]/70 hover:text-[#38b6ff]'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setIsGroup(true)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isGroup
                  ? 'bg-[#38b6ff] text-[#FDFDFD] shadow-lg'
                  : 'text-[#051218]/70 hover:text-[#38b6ff]'
              }`}
            >
              Dupla / Grupo
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div ref={planCards.containerRef} className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={`${isGroup ? 'g' : 'i'}-${index}`}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.recommended
                  ? 'bg-gradient-to-br from-[#38b6ff] to-[#2A8FCC] text-[#FDFDFD] shadow-2xl shadow-[#38b6ff]/30 scale-105 z-10'
                  : 'bg-[#FDFDFD] border border-[#E5F5FF] hover:border-[#38b6ff]/30 hover:shadow-xl'
              } ${staggerItemClass(planCards.visibleItems[index], 'up')}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#051218] text-[#FDFDFD] px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                    ⭐ MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? 'text-[#FDFDFD]' : 'text-[#051218]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.recommended ? 'text-[#FDFDFD]/70' : 'text-[#051218]/60'}`}>
                  {plan.frequency}
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className={`text-5xl font-black ${plan.recommended ? 'text-[#FDFDFD]' : 'text-[#051218]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.recommended ? 'text-[#FDFDFD]/70' : 'text-[#051218]/60'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full ${
                        plan.recommended ? 'bg-[#051218]' : 'bg-[#38b6ff]/10'
                      }`}
                    >
                      <i className={`ri-check-line text-sm ${plan.recommended ? 'text-[#FDFDFD]' : 'text-[#38b6ff]'}`}></i>
                    </div>
                    <span className={`text-sm ${plan.recommended ? 'text-[#FDFDFD]/90' : 'text-[#051218]/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanCTA(plan)}
                className={`w-full py-4 rounded-2xl font-bold transition-all cursor-pointer whitespace-nowrap hover:scale-105 ${
                  plan.recommended
                    ? 'bg-[#051218] text-[#FDFDFD] hover:bg-[#051218]/90 shadow-lg shadow-[#051218]/30'
                    : 'bg-[#38b6ff] text-[#FDFDFD] hover:bg-[#2A8FCC]'
                }`}
              >
                Começar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div ref={guaranteeBar.ref} className={`flex flex-wrap items-center justify-center gap-6 text-sm text-[#051218]/60 ${revealClass(guaranteeBar.isVisible, 'fade')}`}>
          <div className="flex items-center gap-2">
            <i className="ri-book-open-line text-[#38b6ff]"></i>
            <span>Material incluído</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-whatsapp-line text-[#38b6ff]"></i>
            <span>Suporte WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-calendar-check-line text-[#38b6ff]"></i>
            <span>Reagendamento flexível</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line text-[#38b6ff]"></i>
            <span>Satisfação garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
