
export default function ProblemSolution() {
  const handleCTA = () => {
    const phone = '5585985167789';
    const message = encodeURIComponent('Olá! Quero agendar minha aula experimental GRATUITA! 🚀');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const pains = [
    { icon: 'ri-emotion-sad-line', text: 'Trava na hora de falar' },
    { icon: 'ri-time-line', text: 'Horários rígidos que não cabem na sua rotina' },
    { icon: 'ri-group-line', text: 'Turmas lotadas sem atenção individual' },
    { icon: 'ri-book-line', text: 'Foco excessivo em gramática' },
    { icon: 'ri-file-list-line', text: 'Exercícios de livro sem aplicação real' }
  ];

  const solutions = [
    { icon: 'ri-chat-voice-line', text: 'Foco em conversação desde o dia 1' },
    { icon: 'ri-calendar-check-line', text: 'Horários 100% flexíveis' },
    { icon: 'ri-user-star-line', text: 'Atenção personalizada (máx 3-4 alunos)' },
    { icon: 'ri-shield-star-line', text: 'Ambiente seguro, sem julgamentos' },
    { icon: 'ri-global-line', text: 'Situações reais: viagens, reuniões, entrevistas' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-semibold mb-4">
            O PROBLEMA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#115E59] mb-6 leading-tight">
            Você Já Tentou Aprender<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">e Não Conseguiu?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O problema não é você — é o método tradicional que simplesmente não funciona.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Pain Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/10 rounded-3xl"></div>
            <div className="relative p-8 md:p-10 rounded-3xl border border-red-200/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-red-500/10 rounded-2xl">
                  <i className="ri-close-circle-line text-2xl text-red-500"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Métodos Tradicionais</h3>
                  <p className="text-sm text-gray-500">O que não funciona</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {pains.map((pain, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-red-100 hover:border-red-200 transition-all"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-red-500/10 rounded-xl flex-shrink-0">
                      <i className={`${pain.icon} text-xl text-red-500`}></i>
                    </div>
                    <span className="text-gray-700 font-medium">{pain.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/5 to-[#0D9488]/15 rounded-3xl"></div>
            <div className="relative p-8 md:p-10 rounded-3xl border-2 border-[#0D9488]/30 backdrop-blur-sm shadow-xl shadow-[#0D9488]/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0D9488] rounded-2xl">
                  <i className="ri-check-double-line text-2xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#115E59]">Natural Talking English</h3>
                  <p className="text-sm text-[#0D9488]">O método que funciona</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-[#0D9488]/20 hover:border-[#0D9488]/40 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[#0D9488] rounded-xl flex-shrink-0">
                      <i className={`${solution.icon} text-xl text-white`}></i>
                    </div>
                    <span className="text-[#115E59] font-medium">{solution.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl font-bold text-[#115E59] mb-6">
            A diferença está no método. <span className="text-[#F97316]">E o método funciona.</span>
          </p>
          <button 
            onClick={handleCTA}
            className="group bg-[#F97316] text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/30 hover:shadow-[#F97316]/50 hover:scale-105 cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
          >
            QUERO EXPERIMENTAR AGORA
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
