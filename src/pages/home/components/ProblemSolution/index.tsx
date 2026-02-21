
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

export default function ProblemSolution() {
  const handleCTA = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
    { icon: 'ri-calendar-check-line', text: 'Horários 100% flexíveis que se adapta a sua rotina' },
    { icon: 'ri-user-star-line', text: 'Atenção personalizada INDIVIDUAL/ DUPLA / GRUPO' },
    { icon: 'ri-shield-star-line', text: 'Ambiente seguro, sem julgamentos' },
    { icon: 'ri-global-line', text: 'Situações reais: viagens, reuniões, entrevistas' }
  ];

  const header = useScrollReveal<HTMLDivElement>();
  const painCol = useScrollReveal<HTMLDivElement>({ delay: 50 });
  const solCol = useScrollReveal<HTMLDivElement>({ delay: 100 });
  const painItems = useStaggerReveal(pains.length, 100, 50);
  const solItems = useStaggerReveal(solutions.length, 150, 50);
  const ctaText = useScrollReveal<HTMLParagraphElement>({ delay: 50 });
  const ctaBtn = useScrollReveal<HTMLButtonElement>({ delay: 125 });

  return (
    <section className="py-24 bg-gradient-to-b from-[#FDFDFD] to-[#F8FAFB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#38b6ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1 left-0 w-80 h-80 bg-[#70CFFF]/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/10 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(header.isVisible, 'up')}`}>
            A SOLUÇÃO
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] mb-6 leading-tight ${revealClass(header.isVisible, 'up')} delay-50`}>
            Você Já Tentou Aprender<br />
            <span className="text-[#38b6ff]">e Não Conseguiu?</span>
          </h2>
          <p className={`text-lg text-[#051218]/70 max-w-2xl mx-auto ${revealClass(header.isVisible, 'up')} delay-100`}>
            O problema não é você — é o método tradicional que simplesmente não funciona.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Pain Column */}
          <div ref={painCol.ref} className={revealClass(painCol.isVisible, 'right')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/10 rounded-3xl"></div>
              <div className="relative p-8 md:p-10 rounded-3xl border border-red-200/50 backdrop-blur-sm bg-[#FDFDFD]/80">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-red-500/10 rounded-2xl">
                    <i className="ri-close-circle-line text-2xl text-red-500"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#051218]">Métodos Tradicionais</h3>
                    <p className="text-sm text-[#051218]/60">O que não funciona</p>
                  </div>
                </div>

                <div ref={painItems.containerRef} className="space-y-4">
                  {pains.map((pain, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-2xl bg-[#FDFDFD] border border-red-100 hover:border-red-200 transition-all ${staggerItemClass(painItems.visibleItems[index], 'up')}`}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-red-500/10 rounded-xl flex-shrink-0">
                        <i className={`${pain.icon} text-xl text-red-500`}></i>
                      </div>
                      <span className="text-[#051218]/85 font-medium">{pain.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div ref={solCol.ref} className={revealClass(solCol.isVisible, 'left')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#38b6ff]/5 to-[#38b6ff]/15 rounded-3xl"></div>
              <div className="relative p-8 md:p-10 rounded-3xl border-2 border-[#38b6ff]/30 backdrop-blur-sm shadow-xl shadow-[#38b6ff]/10 bg-[#FDFDFD]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#38b6ff] rounded-2xl">
                    <i className="ri-check-double-line text-2xl text-[#FDFDFD]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#051218]">Natural Talking English</h3>
                    <p className="text-sm text-[#38b6ff]">O método que funciona</p>
                  </div>
                </div>

                <div ref={solItems.containerRef} className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-2xl bg-[#FDFDFD] border border-[#38b6ff]/20 hover:border-[#38b6ff]/40 hover:shadow-lg transition-all ${staggerItemClass(solItems.visibleItems[index], 'up')}`}
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-[#38b6ff] rounded-xl flex-shrink-0">
                        <i className={`${solution.icon} text-xl text-[#FDFDFD]`}></i>
                      </div>
                      <span className="text-[#051218]/90 font-medium">{solution.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p ref={ctaText.ref} className={`text-xl font-bold text-[#051218] mb-6 ${revealClass(ctaText.isVisible, 'up')}`}>
            A diferença está no método. <span className="text-[#38b6ff]">E o método funciona.</span>
          </p>
          <button
            ref={ctaBtn.ref}
            onClick={handleCTA}
            className={`group bg-[#38b6ff] text-[#FDFDFD] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-[#2A8FCC] transition-all shadow-lg shadow-[#38b6ff]/30 hover:shadow-[#38b6ff]/50 hover:scale-105 cursor-pointer text-wrap inline-flex items-center gap-2 ${revealClass(ctaBtn.isVisible, 'scale')}`}
          >
            QUERO EXPERIMENTAR AGORA
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
