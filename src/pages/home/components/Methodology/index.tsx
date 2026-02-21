
import { useScrollReveal, useStaggerReveal, revealClass, staggerItemClass } from '../../../../hooks/useScrollReveal';

export default function Methodology() {
  const methods = [
    {
      icon: 'ri-user-settings-line',
      title: 'Planejamento 100% Personalizado',
      description: 'Cada aluno tem objetivos únicos. Criamos um plano SOB MEDIDA para suas necessidades específicas.',
      color: 'from-[#38b6ff] to-[#70CFFF]'
    },
    {
      icon: 'ri-speak-line',
      title: 'Speaking First',
      description: 'Nada de meses estudando gramática. Você começa FALANDO desde a primeira aula, como acontece na vida real.',
      color: 'from-[#2A8FCC] to-[#38b6ff]'
    },
    {
      icon: 'ri-feedback-line',
      title: 'Feedback em Tempo Real',
      description: 'Correções imediatas e construtivas que ACELERAM seu aprendizado sem quebrar sua confiança.',
      color: 'from-[#1F7AB8] to-[#2A8FCC]'
    },
    {
      icon: 'ri-team-line',
      title: 'Situações Reais',
      description: 'Simulamos entrevistas, viagens, reuniões e conversas do dia a dia para você estar sempre PREPARADO.',
      color: 'from-[#38b6ff] to-[#52C1FF]'
    }
  ];

  const profiles = [
    { icon: 'ri-plane-line', title: 'Viajantes', desc: 'Aeroporto, hostel, emergências' },
    { icon: 'ri-briefcase-line', title: 'Empreendedores', desc: 'Negociações, e-mails, reuniões' },
    { icon: 'ri-graduation-cap-line', title: 'Estudantes', desc: 'TOEFL, intercâmbio, visto' },
    { icon: 'ri-heart-line', title: 'Trauma de Inglês', desc: 'Ambiente seguro, sem julgamentos' },
    { icon: 'ri-parent-line', title: 'Pais & Filhos', desc: 'Reforço escolar humanizado' }
  ];

  const header = useScrollReveal<HTMLDivElement>();
  const methodCards = useStaggerReveal(methods.length, 100, 120);
  const profileHeader = useScrollReveal<HTMLHeadingElement>({ delay: 50 });
  const profileCards = useStaggerReveal(profiles.length, 100, 100);
  const bonusBanner = useScrollReveal<HTMLDivElement>({ delay: 100 });

  return (
    <section id="metodologia" className="py-24 bg-[#E5F5FF] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#CCF0FF_1px,transparent_1px),linear-gradient(to_bottom,#CCF0FF_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={header.ref} className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full bg-[#38b6ff]/15 text-[#38b6ff] text-sm font-semibold mb-4 ${revealClass(header.isVisible, 'up')}`}>
            METODOLOGIA
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-[#051218] mb-6 leading-tight ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '100ms' }}>
            O Método <span className="text-[#38b6ff]">Real Life English</span>
          </h2>
          <p className={`text-lg text-[#051218]/70 max-w-2xl mx-auto ${revealClass(header.isVisible, 'up')}`} style={{ transitionDelay: '200ms' }}>
            Uma abordagem revolucionária que coloca você no centro do aprendizado, focando no que realmente importa: <strong className="text-[#051218]">comunicação real</strong>.
          </p>
        </div>

        {/* Method Cards */}
        <div ref={methodCards.containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methods.map((method, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-3xl bg-[#FDFDFD] border border-[#CCF0FF] hover:border-transparent hover:shadow-2xl transition-all duration-300 ${staggerItemClass(methodCards.visibleItems[index], 'up')}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center bg-[#38b6ff]/10 group-hover:bg-[#FDFDFD]/20 rounded-2xl mb-5 transition-colors">
                  <i className={`${method.icon} text-2xl text-[#38b6ff] group-hover:text-[#FDFDFD] transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#051218] group-hover:text-[#FDFDFD] mb-3 transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-[#051218]/70 group-hover:text-[#FDFDFD]/90 leading-relaxed transition-colors">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Profiles Grid */}
        <div className="mb-12">
          <h3 ref={profileHeader.ref} className={`text-2xl font-bold text-[#051218] text-center mb-8 ${revealClass(profileHeader.isVisible, 'up')}`}>
            Inglês Personalizado Para Cada Perfil
          </h3>
          <div ref={profileCards.containerRef} className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl bg-[#FDFDFD] hover:bg-[#38b6ff] border border-[#CCF0FF] hover:border-[#38b6ff] group transition-all duration-300 text-center cursor-default ${staggerItemClass(profileCards.visibleItems[index], 'scale')}`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#38b6ff]/10 group-hover:bg-[#FDFDFD]/20 rounded-xl mx-auto mb-3 transition-colors">
                  <i className={`${profile.icon} text-2xl text-[#38b6ff] group-hover:text-[#FDFDFD] transition-colors`}></i>
                </div>
                <h4 className="font-bold text-[#051218] group-hover:text-[#FDFDFD] text-sm mb-1 transition-colors">{profile.title}</h4>
                <p className="text-xs text-[#051218]/60 group-hover:text-[#FDFDFD]/70 transition-colors">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Banner */}
        <div ref={bonusBanner.ref} className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#38b6ff] to-[#70CFFF] p-8 md:p-12 ${revealClass(bonusBanner.isVisible, 'scale')}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDFDFD]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FDFDFD]/10 rounded-full blur-2xl"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#FDFDFD]/20 backdrop-blur-sm rounded-2xl">
                <i className="ri-gift-line text-4xl text-[#FDFDFD]"></i>
              </div>
              <div>
                <span className="text-[#FDFDFD]/80 text-sm font-medium">BÔNUS EXCLUSIVO</span>
                <h3 className="text-xl md:text-2xl font-bold text-[#FDFDFD]">
                  Desenvolvimento de Autoconfiança
                </h3>
              </div>
            </div>
            <p className="text-[#FDFDFD]/90 text-center md:text-right max-w-md">
              Controle emocional para falar inglês <strong>sem medo, ansiedade ou vergonha</strong> em qualquer situação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
