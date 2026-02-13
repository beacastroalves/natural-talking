
export default function TargetAudience() {
  const audiences = [
    { icon: 'ri-plane-line', text: 'Quer viajar pelo mundo sem depender de aplicativos de tradução' },
    { icon: 'ri-briefcase-line', text: 'Precisa do inglês para crescer na carreira ou conseguir aquela promoção' },
    { icon: 'ri-film-line', text: 'Ama séries e filmes e quer assistir sem legendas' },
    { icon: 'ri-close-circle-line', text: 'Já tentou cursos tradicionais e não conseguiu resultados' },
    { icon: 'ri-time-line', text: 'Não tem tempo para aulas longas e quer um método eficiente' },
    { icon: 'ri-chat-smile-3-line', text: 'Quer ter conversas naturais em inglês, sem travar' }
  ];

  const handleCTA = () => {
    const phone = '5585985167789';
    const message = encodeURIComponent('Olá! Quero agendar minha aula experimental GRATUITA! 🚀');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0D9488]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-semibold mb-4">
            PARA QUEM É
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#115E59] leading-tight">
            Este Método é <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">Perfeito</span><br />Para Você Que:
          </h2>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {audiences.map((item, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#0D9488]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#F97316] to-[#FBBF24] rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`${item.icon} text-xl text-white`}></i>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#115E59] to-[#0D9488] p-10 md:p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <p className="text-xl md:text-2xl text-white font-semibold mb-6 max-w-3xl mx-auto">
              Se você se identificou com pelo menos um desses pontos, o <span className="text-[#F97316] font-bold">Natural Talking English</span> foi feito para você.
            </p>
            <button 
              onClick={handleCTA}
              className="group bg-[#F97316] hover:bg-[#EA580C] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-[#F97316]/30 hover:shadow-[#F97316]/50 hover:scale-105 cursor-pointer whitespace-nowrap inline-flex items-center gap-2"
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
