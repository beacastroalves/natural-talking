
export default function Methodology() {
  const methods = [
    {
      icon: 'ri-user-settings-line',
      title: 'Planejamento 100% Personalizado',
      description: 'Cada aluno tem objetivos únicos. Criamos um plano sob medida para suas necessidades específicas.',
      color: 'from-[#F97316] to-[#FBBF24]'
    },
    {
      icon: 'ri-speak-line',
      title: 'Speaking First',
      description: 'Nada de meses estudando gramática. Você começa falando desde a primeira aula, como acontece na vida real.',
      color: 'from-[#0D9488] to-[#14B8A6]'
    },
    {
      icon: 'ri-feedback-line',
      title: 'Feedback em Tempo Real',
      description: 'Correções imediatas e construtivas que aceleram seu aprendizado sem quebrar sua confiança.',
      color: 'from-[#115E59] to-[#0D9488]'
    },
    {
      icon: 'ri-team-line',
      title: 'Situações Reais',
      description: 'Simulamos entrevistas, viagens, reuniões e conversas do dia a dia para você estar sempre preparado.',
      color: 'from-[#F97316] to-[#FB923C]'
    }
  ];

  const profiles = [
    { icon: 'ri-plane-line', title: 'Viajantes', desc: 'Aeroporto, hostel, emergências' },
    { icon: 'ri-briefcase-line', title: 'Empreendedores', desc: 'Negociações, e-mails, reuniões' },
    { icon: 'ri-graduation-cap-line', title: 'Estudantes', desc: 'TOEFL, intercâmbio, visto' },
    { icon: 'ri-heart-line', title: 'Trauma de Inglês', desc: 'Ambiente seguro, sem julgamentos' },
    { icon: 'ri-parent-line', title: 'Pais & Filhos', desc: 'Reforço escolar humanizado' }
  ];

  return (
    <section id="metodologia" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-sm font-semibold mb-4">
            METODOLOGIA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#115E59] mb-6 leading-tight">
            O Método <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]">Real Life English</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma abordagem revolucionária que coloca você no centro do aprendizado, focando no que realmente importa: <strong className="text-[#115E59]">comunicação real</strong>.
          </p>
        </div>

        {/* Method Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methods.map((method, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-3xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="w-14 h-14 flex items-center justify-center bg-[#115E59] group-hover:bg-white/20 rounded-2xl mb-5 transition-colors">
                  <i className={`${method.icon} text-2xl text-[#F97316] group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#115E59] group-hover:text-white mb-3 transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Profiles Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#115E59] text-center mb-8">
            Inglês Personalizado Para Cada Perfil
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {profiles.map((profile, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-gray-50 hover:bg-[#115E59] border border-gray-100 hover:border-[#115E59] group transition-all duration-300 text-center cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#F97316]/10 group-hover:bg-white/20 rounded-xl mx-auto mb-3 transition-colors">
                  <i className={`${profile.icon} text-2xl text-[#F97316] group-hover:text-white transition-colors`}></i>
                </div>
                <h4 className="font-bold text-[#115E59] group-hover:text-white text-sm mb-1 transition-colors">{profile.title}</h4>
                <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F97316] to-[#FBBF24] p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl">
                <i className="ri-gift-line text-4xl text-white"></i>
              </div>
              <div>
                <span className="text-white/80 text-sm font-medium">BÔNUS EXCLUSIVO</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Desenvolvimento de Autoconfiança
                </h3>
              </div>
            </div>
            <p className="text-white/90 text-center md:text-right max-w-md">
              Controle emocional para falar inglês <strong>sem medo, ansiedade ou vergonha</strong> em qualquer situação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
