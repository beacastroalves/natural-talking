
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

const outcomes = [
  { icon: 'ri-plane-line', title: 'Viajar Sem Barreiras', description: 'Converse com nativos e aproveite cada viagem sem depender de apps.' },
  { icon: 'ri-line-chart-line', title: 'Crescimento Profissional', description: 'Conquiste promoções e participe de reuniões internacionais.' },
  { icon: 'ri-film-line', title: 'Entretenimento Sem Limites', description: 'Assista filmes e séries sem legendas, entendendo cada detalhe.' },
  { icon: 'ri-brain-line', title: 'Pensar em Inglês', description: 'Alcance o nível onde você não traduz mais, apenas pensa e fala.' },
  { icon: 'ri-shield-check-line', title: 'Confiança Total', description: 'Fale sem medo, sem vergonha e sem travar em qualquer situação.' },
  { icon: 'ri-global-line', title: 'Conexões Globais', description: 'Amplie sua rede de contatos e oportunidades pelo mundo.' }
];

export default function Transformation() {
  const scrollToPlanos = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const header = useScrollReveal<HTMLDivElement>();
  const cards = useStaggerReveal(outcomes.length, 100, 100);
  const bottomMsg = useScrollReveal<HTMLDivElement>({ delay: 100 });

  return (
    <section className="py-24 bg-gradient-to-b from-[#E5F5FF] to-transparent relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#38b6ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#70CFFF]/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/15 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(!!header.isVisible, 'up')}`}>
            RESULTADOS
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] mb-6 leading-tight ${revealClass(!!header.isVisible, 'up')}`} style={{ transitionDelay: '50ms' }}>
            Sua <span className="text-[#38b6ff]">Transformação</span><br />Começa Aqui
          </h2>
          <p className={`text-lg text-[#051218]/70 max-w-2xl mx-auto ${revealClass(!!header.isVisible, 'up')}`} style={{ transitionDelay: '200ms' }}>
            Imagine sua vida quando você dominar o inglês. Estas são apenas algumas das portas que vão se abrir:
          </p>
        </div>

        {/* Outcomes Grid */}
        <div ref={cards.containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-[#FDFDFD] border border-[#E5F5FF] hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden ${staggerItemClass(cards.visibleItems[index], 'up')}`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38b6ff] to-[#2A8FCC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center bg-[#38b6ff] rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${outcome.icon} text-3xl text-[#FDFDFD]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#051218] group-hover:text-[#FDFDFD] mb-3 transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-[#051218]/70 group-hover:text-[#FDFDFD]/90 leading-relaxed transition-colors">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div ref={bottomMsg.ref} className={`mt-16 text-center ${revealClass(bottomMsg.isVisible, 'up')}`}>
          <p className="text-xl md:text-2xl text-[#051218]/85 font-medium max-w-3xl mx-auto mb-8">
            Tudo isso está ao seu alcance. A única coisa entre você e a fluência é a <span className="text-[#38b6ff] font-bold">decisão de começar</span>.
          </p>
          <button
            onClick={scrollToPlanos}
            className="group bg-[#38b6ff] text-[#FDFDFD] px-10 py-4 rounded-2xl text-lg font-bold hover:bg-[#2A8FCC] transition-all shadow-lg shadow-[#38b6ff]/30 hover:shadow-[#38b6ff]/50 hover:scale-105 cursor-pointer text-wrap inline-flex items-center gap-2"
          >
            VER PLANOS E COMEÇAR
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
