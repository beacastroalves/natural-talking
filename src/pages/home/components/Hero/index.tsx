
import { useEffect, useState } from 'react';

export default function Hero() {
  const [spots, setSpots] = useState(47);
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [ctaSubVisible, setCtaSubVisible] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7 && spots > 12) {
        setSpots(prev => prev - 1);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [spots]);

  useEffect(() => {
    const t1 = setTimeout(() => setHeadlineVisible(true), 100);
    const t2 = setTimeout(() => setSubVisible(true), 400);
    const t3 = setTimeout(() => setCtaVisible(true), 700);
    const t4 = setTimeout(() => setCtaSubVisible(true), 1000);
    const t5 = setTimeout(() => setScrollVisible(true), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  const handleCTA = () => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFDFD]">
      {/* Background com elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#38b6ff]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#70CFFF]/25 rounded-full blur-[100px]"></div>
        
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#38b6ff 1px, transparent 1px), linear-gradient(90deg, #38b6ff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="absolute top-20 left-[10%] w-32 h-32 border-4 border-[#38b6ff]/30 rounded-2xl rotate-12 backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-[15%] w-32 h-32 border-4 border-[#38b6ff]/30 rounded-full backdrop-blur-sm"></div>
        <div className="absolute top-1/3 right-[8%] w-4 h-64 bg-gradient-to-b from-[#38b6ff]/40 to-transparent rounded-full"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-0">
        {/* Headline principal */}
        <div className="text-center mb-10">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-[#051218] mb-6 leading-[0.95] tracking-tight transition-all duration-1000 ease-out ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block">FALE INGLÊS</span>
            <span className="block text-[#38b6ff]">COM CONFIANÇA</span>
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl text-[#051218]/80 max-w-3xl mx-auto leading-relaxed transition-all duration-800 ease-out ${subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Aulas 100% flexíveis e personalizadas para você finalmente falar inglês com confiança em 2026 — seja para viajar, estudar fora ou fechar negócios.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleCTA}
            className={`group bg-[#38b6ff] text-[#FDFDFD] px-10 py-5 rounded-2xl text-lg md:text-xl font-bold transition-all cursor-pointer text-wrap shadow-2xl shadow-[#38b6ff]/30 flex items-center gap-3 hover:bg-[#2A8FCC] hover:scale-105 hover:shadow-[#38b6ff]/50 ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} duration-700 ease-out`}
          >
            QUERO MINHA AULA EXPERIMENTAL GRÁTIS
            <i className="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform"></i>
          </button>
          
          <p className={`text-[#051218]/60 text-sm flex items-center gap-2 transition-all duration-600 ease-out ${ctaSubVisible ? 'opacity-100' : 'opacity-0'}`}>
            <i className="ri-shield-check-line"></i>
            Sem compromisso • Resposta em até 24h
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#051218]/40 transition-all duration-700 ease-out ${scrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className="text-xs uppercase tracking-widest">Descubra mais</span>
        <div className="w-6 h-10 border-2 border-[#38b6ff]/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#38b6ff]/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
