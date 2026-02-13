
export default function FinalCTA() {
  const handleWhatsApp = () => {
    const phone = '5585985167789';
    const message = encodeURIComponent('Olá! Quero agendar minha aula experimental GRATUITA! 🚀');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const missedOpportunities = [
    'Aquela viagem que você não aproveitou por medo de falar',
    'A promoção que foi para quem sabia inglês',
    'As conexões que você deixou de fazer',
    'Os filmes e séries que você não entendeu completamente'
  ];

  return (
    <section id="contato" className="relative overflow-hidden">
      {/* Main CTA Section */}
      <div className="py-24 bg-gradient-to-br from-[#0f416d] via-[#0c5a9e] to-[#1e88e5] relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-6">
              🎯 ÚLTIMA CHAMADA
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Pare de Adiar.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">O Mundo Não Espera.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Quantas oportunidades você já perdeu por não falar inglês?
            </p>

            {/* Missed opportunities */}
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              {missedOpportunities.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-red-500/20 rounded-lg flex-shrink-0">
                    <i className="ri-close-line text-red-400"></i>
                  </div>
                  <span className="text-white/80 text-sm text-left">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="max-w-xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Floating badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#F97316] text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg shadow-[#F97316]/30 flex items-center gap-2">
                  <i className="ri-gift-line"></i>
                  100% GRATUITO
                </span>
              </div>

              <div className="text-center pt-4">
                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4">
                  Aula Experimental Grátis
                </h3>
                <p className="text-gray-600 mb-8">
                  Experimente o método Natural Talking English sem compromisso e descubra como é fácil começar a falar inglês de verdade!
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: 'ri-user-star-line', text: 'Aula personalizada' },
                    { icon: 'ri-bar-chart-line', text: 'Avaliação de nível' },
                    { icon: 'ri-file-list-3-line', text: 'Plano sob medida' },
                    { icon: 'ri-shield-check-line', text: 'Sem compromisso' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50">
                      <i className={`${item.icon} text-[#1e88e5]`}></i>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white py-5 px-5 rounded-4xl font-bold text-lg hover:from-[#EA580C] hover:to-[#F97316] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shadow-lg shadow-[#F97316]/30 hover:shadow-[#F97316]/50 hover:scale-[1.02]"
                >
                  <i className="ri-whatsapp-line text-2xl"></i>
                  <p className="text-wrap">AGENDAR MINHA AULA GRÁTIS</p>
                </button>

                <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
                  <i className="ri-time-line"></i>
                  Resposta em até 24 horas • Atendimento humanizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a4a7a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Logo & Slogan */}
            <div className="md:col-span-2">
              <img 
                src="public/img/natural-talking-w.png" 
                alt="Natural Talking English" 
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Transformando vidas através da fluência real desde 2022. Nosso método coloca você no centro do aprendizado.
              </p>
              <p className="text-[#F97316] font-medium italic">
                "Não é sobre decorar palavras. É sobre conquistar liberdade."
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <a href="https://wa.me/5585985167789" className="flex items-center gap-3 text-white/70 hover:text-[#F97316] transition-colors cursor-pointer">
                  <i className="ri-whatsapp-line"></i>
                  <span className="text-sm">(85) 98516-7789</span>
                </a>
                <a href="mailto:naturaltalkingenglish@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#F97316] transition-colors cursor-pointer">
                  <i className="ri-mail-line"></i>
                  <span className="text-sm">naturaltalkingenglish@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-white font-bold mb-4">Localização</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <i className="ri-map-pin-line mt-0.5"></i>
                  <span className="text-sm">Itaitinga/CE - Brasil</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <i className="ri-computer-line mt-0.5"></i>
                  <span className="text-sm">Remoto - 100% Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2024 Natural Talking English. Todos os direitos reservados.
            </p>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 text-xs hover:text-white/60 transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
