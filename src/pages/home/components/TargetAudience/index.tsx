
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

export default function TargetAudience() {
  const audiences = [
    {
      icon: 'ri-plane-line',
      text: 'Quer viajar pelo mundo sem depender de aplicativos de tradução',
    },
    {
      icon: 'ri-briefcase-line',
      text: 'Precisa do inglês para crescer na carreira ou conseguir aquela promoção',
    },
    {
      icon: 'ri-chat-smile-3-line',
      text: 'Quer ter conversas naturais em inglês, sem travar',
    },
    {
      icon: 'ri-close-circle-line',
      text: 'Já tentou cursos tradicionais e não conseguiu resultados',
    },
    {
      icon: 'ri-time-line',
      text: 'Não tem tempo para aulas longas e quer um método eficiente',
    },
    {
      icon: 'ri-film-line',
      text: 'Ama séries e filmes e quer assistir sem legendas',
    },
  ];

  const handleCTA = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const header = useScrollReveal<HTMLDivElement>();
  const gridItems = useStaggerReveal(audiences.length, 100, 100);
  const ctaBanner = useScrollReveal<HTMLDivElement>({ delay: 100 });

  return (
    <section className="py-24 bg-[#FDFDFD] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38b6ff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/10 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(header.isVisible, 'up')}`}>
            PARA QUEM É
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] leading-tight ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '100ms' }}>
            Este Método é{' '}
            <span className="text-[#38b6ff]">
              Perfeito
            </span>
            <br />Para Você Que:
          </h2>
        </div>

        {/* Audience Grid */}
        <div ref={gridItems.containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {audiences.map((item, index) => (
            <div
              key={index}
              className={`group flex items-start gap-4 p-6 rounded-2xl bg-[#FDFDFD] border border-[#E5F5FF] hover:border-[#38b6ff]/30 hover:shadow-xl transition-all duration-300 ${staggerItemClass(gridItems.visibleItems[index], 'up')}`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#38b6ff] rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`${item.icon} text-xl text-[#FDFDFD]`}></i>
              </div>
              <p className="text-[#051218]/80 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div ref={ctaBanner.ref} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#38b6ff] to-[#2A8FCC] p-10 md:p-12 text-center ${revealClass(ctaBanner.isVisible, 'scale')}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#70CFFF]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FDFDFD]/10 rounded-full blur-2xl"></div>

          <div className="relative">
            <p className="text-xl md:text-2xl text-[#FDFDFD] font-semibold mb-6 max-w-3xl mx-auto">
              Se você se identificou com pelo menos um desses pontos, o{' '}
              <span className="text-[#051218] font-bold">Natural Talking English</span> foi
              feito para você.
            </p>
            <button
              onClick={handleCTA}
              className="group bg-[#051218] hover:bg-[#051218]/90 text-[#FDFDFD] px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-[#051218]/30 hover:shadow-[#051218]/50 hover:scale-105 cursor-pointer text-wrap inline-flex items-center gap-2"
            >
              QUERO COMEÇAR AGORA
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
