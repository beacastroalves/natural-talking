
import { useState } from 'react';

export default function Pricing() {
  const [isGroup, setIsGroup] = useState(false);

  const individualPlans = [
    {
      name: 'Light',
      frequency: '1x por semana',
      price: 'R$ 180',
      period: '/mês',
      features: [
        '4 aulas mensais de 50 min',
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
        '8 aulas mensais de 50 min',
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
        '12 aulas mensais de 50 min',
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
        '4 aulas mensais de 50 min',
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
        '8 aulas mensais de 50 min',
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

  const handleCTA = () => {
    const phone = '5585985167789';
    const message = encodeURIComponent('Olá! Quero saber mais sobre os planos de aulas! 🚀');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="planos" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            INVESTIMENTO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
            Escolha Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">Plano de Fluência</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Investimento acessível para transformar sua vida. Todos os planos incluem acompanhamento personalizado.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-gray-100">
            <button
              onClick={() => setIsGroup(false)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                !isGroup 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setIsGroup(true)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                isGroup 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Dupla / Grupo
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-gradient-to-br from-[#0c5a9e] to-[#1e88e5] text-white shadow-2xl shadow-[#0c5a9e]/30 scale-105 z-10' 
                  : 'bg-white border border-gray-100 hover:border-[#1e88e5]/30 hover:shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F97316] text-white px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                    ⭐ MAIS POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.recommended ? 'text-white' : 'text-primary'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.recommended ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.frequency}
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className={`text-5xl font-black ${plan.recommended ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.recommended ? 'text-white/70' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 rounded-full ${
                      plan.recommended ? 'bg-[#F97316]' : 'bg-[#1e88e5]/10'
                    }`}>
                      <i className={`ri-check-line text-sm ${plan.recommended ? 'text-white' : 'text-[#1e88e5]'}`}></i>
                    </div>
                    <span className={`text-sm ${plan.recommended ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleCTA}
                className={`w-full py-4 rounded-2xl font-bold transition-all cursor-pointer whitespace-nowrap ${
                  plan.recommended
                    ? 'bg-[#F97316] text-white hover:bg-[#EA580C] shadow-lg shadow-[#F97316]/30'
                    : 'bg-primary text-white hover:bg-[#1e88e5]'
                }`}
              >
                Começar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <i className="ri-book-open-line text-[#1e88e5]"></i>
            <span>Material incluído</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-whatsapp-line text-[#1e88e5]"></i>
            <span>Suporte WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-calendar-check-line text-[#1e88e5]"></i>
            <span>Reagendamento flexível</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line text-[#1e88e5]"></i>
            <span>Satisfação garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
