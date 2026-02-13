import { useEffect, useState } from 'react';

export default function Hero() {
  const [spots, setSpots] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7 && spots > 12) {
        setSpots(prev => prev - 1);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [spots]);

  const handleCTA = () => {
    const phone = '5585985167789';
    const message = encodeURIComponent('Olá! Quero agendar minha aula experimental GRATUITA! 🚀');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente e elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f416d] via-[#0c5a9e] to-[#1e88e5]"></div>
        
        {/* Glassmorphism orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#F97316]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#1e88e5]/30 rounded-full blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-[10%] w-20 h-20 border border-white/10 rounded-2xl rotate-12 backdrop-blur-sm"></div>
        <div className="absolute bottom-32 right-[15%] w-16 h-16 border border-[#F97316]/20 rounded-full backdrop-blur-sm"></div>
        <div className="absolute top-1/3 right-[8%] w-2 h-24 bg-gradient-to-b from-[#F97316]/40 to-transparent rounded-full"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24">
        {/* Headline principal */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            <span className="block">FALE INGLÊS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">COM CONFIANÇA</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Aulas 100% flexíveis e personalizadas para você finalmente falar inglês com confiança — seja para viajar, estudar fora ou fechar negócios.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={handleCTA}
            className="group bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white px-10 py-5 rounded-2xl text-lg md:text-xl font-bold hover:from-[#EA580C] hover:to-[#F97316] transition-all cursor-pointer whitespace-nowrap shadow-2xl shadow-[#F97316]/40 hover:shadow-[#F97316]/60 hover:scale-105 flex items-center gap-3"
          >
            <p className="text-wrap">QUERO MINHA AULA EXPERIMENTAL GRÁTIS</p>
            <i className="ri-arrow-right-line text-2xl group-hover:translate-x-1 transition-transform"></i>
          </button>
          
          <p className="text-white/60 text-sm flex items-center gap-2">
            <i className="ri-shield-check-line"></i>
            Sem compromisso • Resposta em até 24h
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Descubra mais</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
