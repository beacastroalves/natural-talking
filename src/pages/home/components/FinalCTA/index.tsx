
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

export default function FinalCTA() {
  const handleWhatsApp = () => {
    const phone = '5585985167789';
    const message = encodeURIComponent('Olá! Quero agendar minha aula experimental GRATUITA! 🚀');
    try {
      const newWindow = window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
      if (!newWindow) {
        window.location.href = `https://wa.me/${phone}?text=${message}`;
      }
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
    }
  };

  const missedOpportunities = [
    'Aquela viagem que você não aproveitou por medo de falar',
    'A promoção que foi para quem sabia inglês',
    'As conexões que você deixou de fazer',
    'Os filmes e séries que você não entendeu completamente'
  ];

  const header = useScrollReveal<HTMLDivElement>();
  const missedItems = useStaggerReveal(missedOpportunities.length, 100, 100);
  const ctaCard = useScrollReveal<HTMLDivElement>({ delay: 200 });
  const footer = useScrollReveal<HTMLDivElement>({ delay: 50 });

  return (
    <section id="contato" className="relative overflow-hidden">
      {/* Main CTA Section */}
      <div className="py-24 bg-[#38b6ff] relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDFDFD]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2A8FCC]/30 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#FDFDFD 1px, transparent 1px), linear-gradient(90deg, #FDFDFD 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <div ref={header.ref} className="text-center mb-12">
            <span className={`inline-block px-4 py-1.5 rounded-full bg-[#FDFDFD]/15 backdrop-blur-sm text-[#FDFDFD] text-sm font-semibold mb-6 ${revealClass(header.isVisible, 'up')}`}>
              🎯 ÚLTIMA CHAMADA
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#FDFDFD] mb-6 leading-tight ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '50ms' }}>
              Pare de Adiar.<br />
              <span className="text-[#051218]">O Mundo Não Espera.</span>
            </h2>
            <p className={`text-lg md:text-xl text-[#FDFDFD]/90 max-w-2xl mx-auto mb-8 ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '200ms' }}>
              Quantas oportunidades você já perdeu por não falar inglês?
            </p>

            {/* Missed opportunities */}
            <div ref={missedItems.containerRef} className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
              {missedOpportunities.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-2xl bg-[#FDFDFD]/10 backdrop-blur-sm border border-[#FDFDFD]/20 ${staggerItemClass(missedItems.visibleItems[index], 'up')}`}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-[#051218]/30 rounded-lg flex-shrink-0">
                    <i className="ri-close-line text-[#FDFDFD]"></i>
                  </div>
                  <span className="text-[#FDFDFD]/90 text-sm text-left">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div ref={ctaCard.ref} className={`max-w-xl mx-auto ${revealClass(ctaCard.isVisible, 'scale')}`}>
            <div className="relative bg-[#FDFDFD] rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Floating badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#051218] text-[#FDFDFD] px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg shadow-[#051218]/30 flex items-center gap-2">
                  <i className="ri-gift-line"></i>
                  100% GRATUITO
                </span>
              </div>

              <div className="text-center pt-4">
                <h3 className="text-2xl md:text-3xl font-black text-[#051218] mb-4">
                  Aula Experimental Grátis
                </h3>
                <p className="text-[#051218]/70 mb-8">
                  Experimente o método Natural Talking English sem compromisso e descubra como é fácil começar a falar inglês de verdade!
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: 'ri-user-star-line', text: 'Aula personalizada' },
                    { icon: 'ri-bar-chart-line', text: 'Avaliação de nível' },
                    { icon: 'ri-file-list-3-line', text: 'Plano sob medida' },
                    { icon: 'ri-shield-check-line', text: 'Sem compromisso' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-xl bg-[#E5F5FF]">
                      <i className={`${item.icon} text-[#38b6ff]`}></i>
                      <span className="text-sm text-[#051218]/80 text-left">{item.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#38b6ff] text-[#FDFDFD] p-5 rounded-2xl font-bold text-lg hover:bg-[#2A8FCC] transition-all cursor-pointer text-wrap flex items-center justify-center gap-3 shadow-lg shadow-[#38b6ff]/30 hover:shadow-[#38b6ff]/50 hover:scale-[1.02]"
                >
                  <i className="ri-whatsapp-line text-2xl"></i>
                  AGENDAR MINHA AULA GRÁTIS
                </button>

                <p className="text-xs text-[#051218]/60 mt-4 flex items-center justify-center gap-2">
                  <i className="ri-time-line"></i>
                  Resposta em até 24 horas • Atendimento humanizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#051218] py-16">
        <div ref={footer.ref} className={`max-w-6xl mx-auto px-6 ${revealClass(footer.isVisible, 'fade')}`}>
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Logo & Slogan */}
            <div className="md:col-span-2">
              <img
                src="public/img/natural-talking-w.png"
                alt="Natural Talking English"
                className="h-12 md:h-14 w-auto object-contain mb-6"
              />
              <p className="text-[#FDFDFD]/70 text-sm leading-relaxed mb-4">
                Transformando vidas através da fluência real desde 2022. Nosso método coloca você no centro do aprendizado.
              </p>
              <p className="text-[#38b6ff] font-medium italic">
                &quot;Não é sobre decorar palavras. É sobre conquistar liberdade.&quot;
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#FDFDFD] font-bold mb-4">Contato</h4>
              <div className="space-y-3">
                <a href="https://wa.me/5585985167789" target="_blank" className="flex items-center gap-3 text-[#FDFDFD]/70 hover:text-[#38b6ff] transition-colors cursor-pointer">
                  <i className="ri-whatsapp-line translate-y-0.5"></i>
                  <span className="text-sm">(85) 98516-7789</span>
                </a>
                <a href="mailto:naturaltalkingenglish@gmail.com" className="flex items-center gap-3 text-[#FDFDFD]/70 hover:text-[#38b6ff] transition-colors cursor-pointer">
                  <i className="ri-mail-line translate-y-0.5"></i>
                  <span className="text-sm">naturaltalkingenglish@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-[#FDFDFD] font-bold mb-4">Localização</h4>
              <div className="flex items-center gap-3 text-[#FDFDFD]/70">
                <i className="ri-computer-line mt-0.5"></i>
                <span className="text-sm">100% Remoto | Online</span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-[#FDFDFD]/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#FDFDFD]/60 text-sm">
              © 2026 Natural Talking English. Todos os direitos reservados.
            </p>
            <a
              href="https://wa.me/5585996611157?text=Ol%C3%A1!%20Quero%20fazer%20um%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FDFDFD]/50 text-xs hover:text-[#38b6ff] transition-colors cursor-pointer"
            >
              Websites by BeaCastroDEV
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
