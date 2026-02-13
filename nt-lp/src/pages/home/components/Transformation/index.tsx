
export default function Transformation() {
  const outcomes = [
    { icon: 'ri-plane-line', title: 'Viajar Sem Barreiras', description: 'Converse com nativos e aproveite cada viagem sem depender de apps.' },
    { icon: 'ri-line-chart-line', title: 'Crescimento Profissional', description: 'Conquiste promoções e participe de reuniões internacionais.' },
    { icon: 'ri-film-line', title: 'Entretenimento Sem Limites', description: 'Assista filmes e séries sem legendas, entendendo cada detalhe.' },
    { icon: 'ri-brain-line', title: 'Pensar em Inglês', description: 'Alcance o nível onde você não traduz mais, apenas pensa e fala.' },
    { icon: 'ri-shield-check-line', title: 'Confiança Total', description: 'Fale sem medo, sem vergonha e sem travar em qualquer situação.' },
    { icon: 'ri-global-line', title: 'Conexões Globais', description: 'Amplie sua rede de contatos e oportunidades pelo mundo.' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#1e88e5]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e88e5]/10 text-[#1e88e5] text-sm font-semibold mb-4">
            RESULTADOS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
            Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">Transformação</span><br />Começa Aqui
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Imagine sua vida quando você dominar o inglês. Estas são apenas algumas das portas que vão se abrir:
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38b6ff] to-[#1e88e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#F97316] to-[#FBBF24] rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${outcome.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 leading-relaxed transition-colors">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
            Tudo isso está ao seu alcance. A única coisa entre você e a fluência é a <span className="text-[#F97316] font-bold">decisão de começar</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
